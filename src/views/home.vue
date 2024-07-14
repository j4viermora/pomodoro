<template>
    <main class="max-w-xl mx-auto">
        <header-app />
        <clock />
        <list-task />
    </main>
</template>

<script setup lang="ts">
import headerApp from "../components/header.vue";
import clock from "../components/clock.vue";
import listTask from "../components/item-list.vue";
</script>
