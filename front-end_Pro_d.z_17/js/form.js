class StopWatch {
    constructor(callback) {
        this.time = {hours: 0, minutes: 0, seconds: 0};
        this.intervalid = null;
        this.callback = callback;
    }

    start() {
        if (this.intervalid) return;

        this.intervalid = setInterval(() => {
            this.time.seconds++;

            if (this.time.seconds >= 60) {
                this.time.minutes++;
                this.time.seconds = 0;
            }

            if (this.time.minutes >= 60) {
                this.time.hours++;
                this.time.minutes = 0;
            }

            this.callback(this.time);
        }, 1000);
    }

    pause() {
        if (!this.intervalid) return;

        clearInterval(this.intervalid);
        this.intervalid = null;
    }

    reset() {
        this.pause();
        this.time = {hours: 0, minutes: 0, seconds: 0};
    }

    getTime() {
        return {...this.time};
    }
}

const onTick = (time) => alert(JSON.stringify(time));
const stopWatch = new StopWatch(onTick);

stopWatch.start();
setTimeout(() => {
    stopWatch.pause();
    alert((JSON.stringify(stopWatch.getTime())));
}, 5000);

setTimeout(() => {
    stopWatch.reset();
    alert((JSON.stringify(stopWatch.getTime())));
}, 10000);