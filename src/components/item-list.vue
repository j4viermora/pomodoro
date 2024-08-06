<template>
    <section class="mt-4">
        <div class="flex justify-between items-center">
            <div class="text-white font-semibold">Tareas</div>
            <div class="cursor-pointer">
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M12 6h.01M12 12h.01M12 18h.01"
                    />
                </svg>
            </div>
        </div>
        <section class="mt-4">
            <item-task
                v-for="task in tasks"
                :key="task.id"
                :title="task.title"
                :id="task.id"
                :status="task.completed"
                @remove="remove"
                @completed="setCompleted"
            />
        </section>
    </section>
</template>

<script setup lang="ts">
import { useTasks } from "../composables/useTasks";
import ItemTask from "./item-task.vue";
const { remove, setCompleted } = useTasks();
defineProps(["tasks"]);
</script>
<style></style>
