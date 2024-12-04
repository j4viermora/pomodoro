<template>
    <main class="max-w-xl mx-auto" style="margin-bottom: 10rem">
        <header-app />
        <button
            data-modal-target="auth-modal"
            data-modal-toggle="auth-modal"
            type="button"
            class="w-full"
            id="auth-button"
            hidden
        ></button>
        <alert v-if="!isAuth" class="mt-4">
            Para gestionar tus tareas debes estar autenticado
        </alert>
        <modal id="auth-modal" title="Identificate">
            <auth-component />
        </modal>
        <clock />
        <template v-if="isAuth">
            <div>
                <spinner v-if="task.isLoading" class="mt-4" />
                <list-task v-else :tasks="task.tasks.list" />
                <add-to-task />
            </div>
        </template>
    </main>
</template>

<script setup lang="ts">
import headerApp from "../components/header.vue";
import Clock from "../components/clock.vue";
import ListTask from "../components/item-list.vue";
import AddToTask from "../components/add-to-task.vue";
import AuthComponent from "../components/auth-component.vue";

// UI
import Alert from "../components/@ui/alert.vue";
import Modal from "../components/@ui/modal.vue";
import Spinner from "../components/@ui/spinner.vue";

import { useTasks } from "../composables/useTasks";
import { useAuthState } from "../composables/useAuthState";
const { isAuth } = useAuthState();
const task = useTasks();
task.getAllTasks();
</script>
