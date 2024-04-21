<template>
    <header class="fixed top-0 left-0 w-full bg-green-500 text-white animate__animated animate__slideInDown">
        <div class="container mx-auto p-3 flex items-center justify-between">
            <div class="flex items-center">
                <ColorMode class="mr-3" />
                <AppAudio class="mr-3 mt-[2px]" />
            </div>
            <div class="flex items-center">
                <div class="md:hidden mr-3">
                    <button @click="toggleDropdown" class="focus:outline-none pt-1">
                        <img v-if="dropdownOpen" src="@/assets/icon/close.svg" class="h-6 w-6" alt="Fechar" />
                        <img v-else src="@/assets/icon/jam/home.svg" class="h-6 w-6" alt="Menu" />
                    </button>
                </div>
                <nav class="hidden md:block">
                    <ul class="flex space-x-4">
                        <li class="transition ease-in-out duration-300 delay-150 hover:scale-105"><nuxt-link to="/">Página Inicial</nuxt-link></li>
                        <li class="transition ease-in-out duration-300 delay-150 hover:scale-105"><nuxt-link to="/sobre">Sobre</nuxt-link></li>
                        <li class="transition ease-in-out duration-300 delay-150 hover:scale-105"><nuxt-link to="/contato">Contato</nuxt-link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <nav class="md:hidden">
            <ul :class="dropdownOpen ? 'flex' : 'hidden'" class="flex-col items-center absolute w-full bg-green-500">
                <li><nuxt-link to="/">Página Inicial</nuxt-link></li>
                <li><nuxt-link to="/sobre">Sobre</nuxt-link></li>
                <li><nuxt-link to="/contato">Contato</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    data() {
        return {
            dropdownOpen: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
    },
};
</script>
