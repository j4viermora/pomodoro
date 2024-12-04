<template>
    <section>
        <div v-if="showForm">
            <div class="bg-white shadow-sm rounded-md mt-4 p-4">
                <form @submit.prevent="handleSubmit" class="mt-4">
                    <input
                        v-model="description"
                        id="input-id"
                        class="w-full placeholder:italic focus:outline-none"
                        placeholder="En que estas trabajando?"
                        type="text"
                        autofocus="true"
                    />
                    <hr class="mt-4" />
                    <div class="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            @click="handleCancel"
                            class="button-cancel"
                        >
                            Cancelar
                        </button>
                        <button type="submit" class="button">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
        <div
            v-else
            @click="handleShowForm"
            class="flex justify-center mt-4 border border-dashed w-full p-4 cursor-pointer bg-black/10 hover:bg-black/25"
        >
            <div class="flex gap-2 text-white">
                <div>+</div>
                <div>Agregar tarea</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTasks } from "../composables/useTasks";
const tasks = useTasks();

const showForm = ref(false);
const description = ref("");

const handleSubmit = () => {
    if (description.value === "") return;
    if (description.value.length === 0) return;
    showForm.value = false;
    tasks.create(description.value).then(() => {
        description.value = "";
        tasks.getAllTasks();
    });
};

const handleShowForm = () => {
    showForm.value = true;
};

const handleCancel = () => {
    showForm.value = false;
    description.value = "";
};
</script>

<style lang="css" scoped>
.button {
    @apply text-white bg-gray-700 hover:bg-gray-950 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2;
}
.button-cancel {
    @apply text-gray-950 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2;
}
</style>
