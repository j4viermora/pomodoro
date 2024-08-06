<template>
    <section class="mt-10">
        <div class="bg-red-300 p-4 rounded-lg">
            <nav
                class="text-white flex justify-center items-center gap-4 cursor-pointer font-semibold"
            >
                <button
                    :class="interval === 'pomodoro' && 'interval-button'"
                    @click="updateInterval('pomodoro')"
                >
                    Pomodoro
                </button>
                <button
                    :class="interval === 'shortBreak' && 'interval-button'"
                    @click="updateInterval('shortBreak')"
                >
                    Descanso corto
                </button>
                <button
                    :class="interval === 'longBreak' && 'interval-button'"
                    @click="updateInterval('longBreak')"
                >
                    Descanso largo
                </button>
            </nav>
            <section class="flex justify-center items-center">
                <div style="font-size: 120px" class="text-white mt-4">
                    <span id="minutes"
                        >{{ pomodoro.minutes }}:{{
                            pomodoro.seconds ? pomodoro.seconds : "00"
                        }}</span
                    >
                </div>
            </section>
            <section class="flex justify-center">
                <button
                    @click="pomodoro.running ? stop() : start()"
                    :class="
                        'button' +
                        ' ' +
                        (pomodoro.running ? 'button-active' : '')
                    "
                >
                    {{ pomodoro.running ? "Detener" : "Iniciar" }}
                </button>
            </section>
            <section class="flex flex-col justify-center items-center mt-4">
                <h4 class="text-gray-100">#1</h4>
                <h3 class="text-white text-xl">Tarea actual</h3>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { usePomodoro } from "../composables/usePomodoro";
const { pomodoro, start, stop, updateInterval, interval } = usePomodoro();

watch(pomodoro, () => {
    if (pomodoro.running) {
        window.document.title =
            pomodoro.minutes + ":" + pomodoro.seconds + " Focus";
    }
    if (pomodoro.running === false) {
        window.document.title = "Pomodoro stop";
    }
});
</script>

<style scoped>
.button {
    cursor: pointer;
    border: medium;
    margin: 20px 0px 0px;
    padding: 0px 12px;
    border-radius: 4px;
    box-shadow: rgb(235, 235, 235) 0px 6px 0px;
    font-size: 22px;
    height: 55px;
    color: rgb(186, 73, 73);
    font-weight: bold;
    width: 200px;
    background-color: white;
    transition: color 0.5s ease-in-out;
}

.button-active {
    color: rgb(186, 73, 73);
    transform: translateY(6px);
    box-shadow: none;
}

.interval-button {
    @apply py-1 px-2 rounded-md bg-black;
}
</style>
