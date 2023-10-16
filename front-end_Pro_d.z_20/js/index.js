import StopWatch from "./stopwatch.js";

import StopwatchUI from "./stopwatch-ui.js";

const stopwatch = {hours: 0, minutes: 0, seconds: 0};

const ui = new StopwatchUI(stopwatch);

const callback = (getTime) => ui.setTime(getTime);

const stopWatch = new StopWatch(callback);

ui.addStartBtnListener(e => stopWatch.start());
ui.addPauseBtnListener(e => stopWatch.pause());
ui.addResetBtnListener(e => stopWatch.reset());

ui.appendStopWatch(document.body);

const stopwatch1 = {hours: 0, minutes: 0, seconds: 0};
const ui1 = new StopwatchUI(stopwatch1);
const callback1 = (time) => ui1.setTime(time);
const stopWatch1 = new StopWatch(callback1);

ui1.addStartBtnListener(e => stopWatch1.start());
ui1.addPauseBtnListener(e => stopWatch1.pause());
ui1.addResetBtnListener(e => stopWatch1.reset());
ui1.appendStopWatch(document.body);

const stopwatch2 = {hours: 0, minutes: 0, seconds: 0};
const ui2 = new StopwatchUI(stopwatch2);
const callback2 = (time) => ui2.setTime(time);
const stopWatch2 = new StopWatch(callback2);

ui2.addStartBtnListener(e => stopWatch2.start());
ui2.addPauseBtnListener(e => stopWatch2.pause());
ui2.addResetBtnListener(e => stopWatch2.reset());
ui2.appendStopWatch(document.body);