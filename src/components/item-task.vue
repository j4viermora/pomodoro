<template>
    <article
        class="flex gap-4 justify-between items-center bg-white rounded-md p-4"
    >
        <div>
            <svg
                class="w-6 h-6 text-gray-300"
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
            <p class="text-left">
                {{ title }}
            </p>
        </div>
        <div class="cursor-pointer">
            <svg
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
            </svg>
        </div>
    </article>
</template>
<script setup>
const props = defineProps(["title"]);
</script>
<style></style>
