<template>
    <section class="mt-10">
        <div class="bg-red-300 p-4 rounded-lg">
            <nav
                class="text-white flex justify-center items-center gap-4 cursor-pointer font-semibold"
            >
                <span
                    style="background: rgba(0, 0, 0, 0.15)"
                    class="py-1 px-2 rounded-md"
                >
                    Pomodoro
                </span>
                <span class=""> Descanso corto </span>
                <span class=""> Descanso largo </span>
            </nav>
            <section class="flex justify-center items-center">
                <div style="font-size: 120px" class="text-white mt-4">
                    <span id="minutes">25</span>
                    <span>:</span>
                    <span id="seconds">00</span>
                </div>
            </section>
            <section class="flex justify-center">
                <button
                    @click="isActive = !isActive"
                    :class="'button' + ' ' + (isActive ? 'button-active' : '')"
                >
                    Iniciar
                </button>
            </section>
            <section class="flex flex-col justify-center items-center mt-4">
                <h4 class="text-gray-100">#1</h4>
                <h3 class="text-white text-xl">Tarea actual</h3>
            </section>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(false);
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
</style>
