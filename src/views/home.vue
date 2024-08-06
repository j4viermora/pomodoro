<template>
    <main class="max-w-xl mx-auto" style="margin-bottom: 10rem">
        <header-app />
        <clock />
        <list-task :tasks="task.tasks.list" />
        <add-to-task />
    </main>
</template>

<script setup lang="ts">
import headerApp from "../components/header.vue";
import Clock from "../components/clock.vue";
import ListTask from "../components/item-list.vue";
import AddToTask from "../components/add-to-task.vue";
import { useTasks } from "../composables/useTasks";
const task = useTasks();
</script>
d
