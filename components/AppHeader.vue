<template>
    <header>
        <div
            class="flex flex-row flex-wrap justify-center pt-2 items-center text-xs sm:text-sm md:text-base lg:text-xl font-semibold">
            <a class="mx-2 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-9 my-2 hover:text-teal-500" href="/about">ABOUT</a>
            <p class="mx-2 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-9 my-2 text-teal-500 ">•</p>
            <a class="mx-2 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-9 my-2 hover:text-teal-500" href="/projects">PROJECTS</a>
            <p class="mx-2 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-9 my-2 text-teal-500 font-semibold">•</p>
            <a href="/" class="">
                <img class="lg:hidden xl:hidden mx-2 md:mx-3 h-16 sm:h-20 md:h-20 rounded-2xl"
                    src="~/assets/logos/icon.png" alt="">
                <img class="mx-2 sm:mx-4 hidden lg:inline lg:h-52 xl:h-60"
                    src="~/assets/logos/logo-t-black.png" alt="Logo BHB">
            </a>
            <p class="mx-2 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-9 my-2 text-teal-500 font-semibold">•</p>
            <a class="mx-2 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-9 my-2 hover:text-teal-500" href="/shop">SHOP</a>
            <p class="mx-2 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-9 my-2 text-teal-500 font-semibold">•</p>
            <a class="mx-2 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-9 my-2 hover:text-teal-500" href="/contact">CONTACT</a>
        </div>
        <div class="flex justify-center pl-4">
            <AppAudio/>
        </div>
    </header>
</template>
