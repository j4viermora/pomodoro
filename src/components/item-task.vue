<template>
    <article
        class="flex gap-4 justify-between items-center bg-white rounded-md p-4 mt-2 cursor-pointer"
    >
        <div @click="markLikeCompleted(id)">
            <svg
                :class="`w-6 h-6 ${
                    status ? 'text-green-400' : 'text-gray-300'
                }`"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
        <div class="w-full">
            <p
                :class="`text-left ${
                    status ? 'line-through text-gray-400' : ''
                }`"
            >
                {{ title }}
            </p>
        </div>
        <div @click="remove(id)" class="cursor-pointer">
            <svg
                class="w-6 h-6 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fill-rule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clip-rule="evenodd"
                />
            </svg>

            <!-- <svg
                class="w-6 h-6 text-gray-800"
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
            </svg> -->
        </div>
    </article>
</template>
<script setup lang="ts">
defineProps(["title", "id", "status"]);
const emit = defineEmits(["remove", "completed"]);
const remove = (id: string | number) => {
    if (confirm("Esta seguro que desea eliminar esta tarea?")) {
        emit("remove", id);
    }
};

const markLikeCompleted = (id: string | number) => {
    if (confirm("Dese marcar como completada?")) {
        emit("completed", id);
    }
};
</script>
<style></style>
