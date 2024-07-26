<template>
    <main class="max-w-xl mx-auto">
        <header-app />
        <clock />
        <list-task />
        <add-to-task />
    </main>
</template>

<script setup lang="ts">
import headerApp from "../components/header.vue";
import Clock from "../components/clock.vue";
import ListTask from "../components/item-list.vue";
import AddToTask from "../components/add-to-task.vue";
</script>
d