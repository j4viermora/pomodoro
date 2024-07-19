import { reactive, ref } from "vue";

type Interval = "pomodoro" | "shortBreak" | "longBreak";
const getMinutes = (interval: Interval) => {
    if (interval === "pomodoro") {
        return 25;
    } else if (interval === "shortBreak") {
        return 5;
    } else if (interval === "longBreak") {
        return 15;
    } else {
        return 25;
    }
};

export const usePomodoro = () => {
    const intervalTime = 1000;
    let intervalRef = ref<NodeJS.Timeout>();
    let interval = ref<Interval>("pomodoro");
    let pomodoro = reactive({
        counte: 0,
        longBreakCount: 0,
        minutes: getMinutes(interval.value),
        seconds: 0,
        running: false,
    });

    const start = () => {
        pomodoro.running = true;
        intervalRef.value = setInterval(() => {
            if (pomodoro.seconds === 0) {
                pomodoro.seconds = 59;
                pomodoro.minutes--;
            } else {
                pomodoro.seconds--;
            }
            if (pomodoro.minutes === 0 && pomodoro.seconds === 0) {
                if (interval.value === "pomodoro") {
                    interval.value = "shortBreak";
                    pomodoro.minutes = 5;
                    pomodoro.seconds = 0;
                } else if (interval.value === "shortBreak") {
                    interval.value = "longBreak";
                    pomodoro.minutes = 15;
                    pomodoro.seconds = 0;
                } else if (interval.value === "longBreak") {
                    interval.value = "pomodoro";
                    pomodoro.minutes = 25;
                    pomodoro.seconds = 0;
                } else {
                    pomodoro.running = false;
                }
                reset();
            }
        }, intervalTime);
    };

    const stop = () => {
        clearInterval(intervalRef.value);
        pomodoro.running = false;
    };
    const reset = () => {
        stop();
        pomodoro.minutes = getMinutes(interval.value);
        pomodoro.seconds = 0;
    };

    return {
        pomodoro,
        start,
        stop,
        updateInterval: (newInterval: Interval) => {
            stop();
            interval.value = newInterval;
            pomodoro.minutes = getMinutes(newInterval);
            pomodoro.seconds = 0;
        },
        interval,
        // reset,
    };
};
