export default class StopwatchUI {
    constructor(initialTime) {
        this.initialTime = initialTime;
        this.clockElement = document.createElement('div');
        this.startButton = document.createElement('button');
        this.pauseButton = document.createElement('button');
        this.resetButton = document.createElement('button');

        this.startButton.textContent = 'Start';
        this.pauseButton.textContent = 'Pause';
        this.resetButton.textContent = 'Reset';

        this.startButton.style.backgroundColor = 'green';
        this.pauseButton.style.backgroundColor = 'yellow';
        this.resetButton.style.backgroundColor = 'red';

        this.time = initialTime;

        this.setTime(this.time);

    }

    addStartBtnListener(callback) {
        this.startButton.addEventListener('click', callback);
    }

    addPauseBtnListener(callback) {
        this.pauseButton.addEventListener('click', callback);
    }

    addResetBtnListener(callback) {
        this.resetButton.addEventListener('click', callback);
    }

    appendStopWatch(element) {
        element.appendChild(this.clockElement);
        element.appendChild(this.startButton);
        element.appendChild(this.pauseButton);
        element.appendChild(this.resetButton);
    }

    setTime(time) {
        this.time = time;
        const { hours, minutes, seconds } = time;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        this.clockElement.textContent = formattedTime;
    }

}