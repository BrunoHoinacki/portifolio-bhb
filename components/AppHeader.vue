<template>
    <header class="w-full">
        <div class="flex justify-center">
            <div
                class="flex flex-row flex-nowrap justify-center items-center text-xs sm:text-sm md:text-base lg:text-xl font-semibold animate__animated animate__fadeIn w-full max-w-screen-xl mx-auto xl:px-6 px-10">
                <div class="flex items-center">
                    <NuxtLink to="/" class="">
                        <img class="h-44" src="~/assets/logos/logo-text-white.png" alt="Logo Elleva">
                    </NuxtLink>
                </div>
                <div class="flex flex-row items-center ml-auto">
                    <NuxtLink class="hidden xl:block xl:mx-3 my-2 hover:text-blue-500 text-base text-nowrap"
                        to="/about">O
                        que
                        fazemos</NuxtLink>
                    <p class="hidden xl:block xl:mx-3 my-2 text-blue-500 ">•</p>
                    <NuxtLink class="hidden xl:block xl:mx-3 my-2 hover:text-blue-500 text-base text-nowrap"
                        to="/projects">Cases</NuxtLink>
                    <p class="hidden xl:block xl:mx-3 my-2 text-blue-500 font-semibold">•</p>
                    <NuxtLink class="hidden xl:block xl:mx-3 my-2 hover:text-blue-500 text-base text-nowrap" to="/shop">
                        Para
                        agências</NuxtLink>
                    <p class="hidden xl:block xl:mx-3 my-2 text-blue-500 font-semibold"></p>
                    <NuxtLink
                        class="hidden xl:block xl:ml-10 xl:mr-8 my-2 px-5 py-4 hover:text-blue-600 hover:bg-white text-base rounded-full bg-blue-500 text-white text-nowrap"
                        to="/contact">Fale conosco</NuxtLink>
                    <NuxtLink to="" class="hidden xl:block xl:mx-4 text-base hover:text-blue-500">PT</NuxtLink>
                    <NuxtLink to="" class="hidden xl:block xl:mx-4 text-base hover:text-blue-500">ES</NuxtLink>
                    <NuxtLink to="" class="hidden xl:block xl:mx-4 text-base hover:text-blue-500">EN</NuxtLink>
                </div>
                <div class="xl:hidden block mr-8">
                    <button class="text-blue-500 hover:text-blue-700">
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
}
</script>
