const timeDisplay = document.getElementById('timeDisplay');

const formatTime = (time) => time < 10 ? '0' + time : time;

class StopWatch {
    constructor(callback) {
        this.time = {hours: 0, minutes: 0, seconds: 0};
        this.intervalId = null;
        this.callback = callback;
    }

    start() {
        if (this.intervalId) return;

        this.intervalId = setInterval(() => {
            this.time.seconds++;

            if (this.time.seconds > 59) {
                this.time.minutes++;
                this.time.seconds = 0;
            }

            if (this.time.minutes > 59) {
                this.time.hours++;
                this.time.minutes = 0;
            }

            this.callback(this.time);
        }, 1000);
    }

    pause() {
        if (!this.intervalId) return;

        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset() {
        this.pause();
        this.time = {hours: 0, minutes: 0, seconds: 0};
    }

    getTime() {
        return {...this.time};
    }
}

const onTick = (time) => {
    timeDisplay.textContent = 
    `${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}`;
};

const stopWatch = new StopWatch(onTick);

stopWatch.start();
setTimeout(() => {
    stopWatch.pause();
}, 5000);

setTimeout(() => {
    stopWatch.reset();
}, 10000);