<template>
    <app-layout>
            <router-link :to="{ name: 'home' }" class="flex text-white mt-4">
                <span>
                    <svg
                        class="w-6 h-6"
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
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m14 8-4 4 4 4"
                        />
                    </svg>
                </span>
                <span> Volver </span>
            </router-link>
        <section class="mt-4">
            <div class="flex justify-center">
                <picture>
                    <img
                        :src="user.photoURL"
                        alt="perfil"
                        class="h-20 rounded-full"
                    />
                </picture>
            </div>
            <div class="mt-4">
                <h1 class="text-2xl text-center text-white font-bold">
                    {{ user.displayName }}
                </h1>
            </div>
        </section>
        <section>
            <div class="flex justify-center mt-4">
                <button
                    class="btn"
                    @click="logout()"
                    type="button"
                >
                    Cerrar sesión
                </button>
            </div>
        </section>
    </app-layout>
</template>
<script lang="ts" setup>
import AppLayout from "../components/@ui/app-layout.vue";
import HeaderApp from "../components/header.vue";
import { useAuthState } from "../composables/useAuthState";
import { signOut } from "../firebase/auth";
const { user } = useAuthState();
const logout = () => {
    signOut();
};
</script>
