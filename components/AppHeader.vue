<template>
    <header class="w-full">
        <div class="flex justify-center">
            <div
                class="flex flex-row flex-nowrap justify-center items-center text-xs sm:text-sm md:text-base lg:text-xl font-semibold animate__animated animate__fadeIn w-full max-w-screen-xl mx-auto xl:px-6 md:px-14 px-6">
                <div class="flex items-center">
                    <NuxtLink to="/" class="">
                        <img class="h-20" src="~/assets/logos/logo-text-white.png" alt="Logo Elleva">
                    </NuxtLink>
                </div>
                <div class="flex flex-row items-center ml-auto">
                    <NuxtLink
                        class="hidden xl:block xl:mx-3 my-2 hover:decoration-brand-blue hover:underline hover:underline-offset-4 hover:decoration-2 text-base text-nowrap transition duration-700 ease-in-out"
                        to="/about">O
                        que
                        fazemos
                    </NuxtLink>
                    <p class="hidden xl:block xl:mx-3 my-2 text-brand-blue">•</p>
                    <NuxtLink
                        class="hidden xl:block xl:mx-3 my-2 hover:decoration-brand-blue hover:underline hover:underline-offset-4 hover:decoration-2 text-base text-nowrap transition duration-700 ease-in-out"
                        to="/projects">Cases
                    </NuxtLink>
                    <p class="hidden xl:block xl:mx-3 my-2 text-brand-blue font-semibold">•</p>
                    <NuxtLink
                        class="hidden xl:block xl:mx-3 my-2 hover:decoration-brand-blue hover:underline hover:underline-offset-4 hover:decoration-2 text-base text-nowrap transition duration-700 ease-in-out"
                        to="/agencies">
                        Para
                        agências
                    </NuxtLink>
                    <p class="hidden xl:block xl:mx-3 my-2 text-brand-blue font-semibold"></p>
                    <NuxtLink
                        class="hidden xl:block xl:ml-10 xl:mr-8 my-2 px-5 py-4 text-base rounded-full bg-brand-blue text-white text-nowrap transition duration-700 ease-in-out hover:text-brand-blue hover:bg-white"
                        to="/contact">
                        Fale conosco
                    </NuxtLink>
                    <NuxtLink to="" class="hidden xl:block xl:mx-4 text-base hover:text-brand-blue">PT</NuxtLink>
                    <NuxtLink to="" class="hidden xl:block xl:mx-4 text-base hover:text-brand-blue">ES</NuxtLink>
                    <NuxtLink to="" class="hidden xl:block xl:mx-4 text-base hover:text-brand-blue">EN</NuxtLink>
                </div>
                <div class="xl:hidden block">
                    <button @click="toogleMenu" class="text-brand-blue hover:text-blue-700">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        toogleMenu() {
            const menu = document.getElementById('menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }
    }
};
</script>
