<template>
    <header class="w-full">
        <div class="flex justify-center">
            <div
                class="flex flex-row flex-nowrap justify-center pt-4 items-center text-xs sm:text-sm md:text-base lg:text-xl font-semibold animate__animated animate__fadeIn w-full max-w-screen-xl mx-auto px-6">
                <div class="flex items-center">
                    <a href="/" class="">
                        <img class="lg:hidden xl:hidden mx-2 md:mx-3 h-16 sm:h-16 md:h-16 rounded-2xl"
                            src="~/assets/logos/icon.png" alt="Icon">
                        <img class="mx-2 sm:mx-2 hidden lg:inline lg:h-20" src="~/assets/logos/logo-t-black.png"
                            alt="Logo BHB">
                    </a>
                </div>
                <div class="flex flex-row items-center ml-auto">
                    <a class="mx-2 sm:mx-4 md:mx-5 xl:mx-3 my-2 hover:text-teal-500 text-base text-nowrap"
                        href="/about">O
                        que
                        fazemos</a>
                    <p class="mx-2 sm:mx-4 md:mx-5 xl:mx-3 my-2 text-teal-500 ">•</p>
                    <a class="mx-2 sm:mx-4 md:mx-5 xl:mx-3 my-2 hover:text-teal-500 text-base text-nowrap"
                        href="/projects">Cases</a>
                    <p class="mx-2 sm:mx-4 md:mx-5 xl:mx-3 my-2 text-teal-500 font-semibold">•</p>
                    <a class="mx-2 sm:mx-4 md:mx-5 xl:mx-3 my-2 hover:text-teal-500 text-base text-nowrap"
                        href="/shop">Para
                        agências</a>
                    <p class="mx-2 sm:mx-4 md:mx-5 xl:mx-3 my-2 text-teal-500 font-semibold"></p>
                    <a class="mx-2 sm:mx-4 md:mx-5 xl:ml-10 xl:mr-8 my-2 hover:text-teal-500 text-base border-b-blue-500 border rounded-full px-5 py-4 bg-blue-500 text-white text-nowrap"
                        href="/contact">Fale conosco</a>
                    <a href="" class="mx-2 sm:mx-4 md:mx-5 xl:mx-4 text-base">PT</a>
                    <a href="" class="mx-2 sm:mx-4 md:mx-5 xl:mx-4 text-base">ES</a>
                    <a href="" class="mx-2 sm:mx-4 md:mx-5 xl:mx-4 text-base">EN</a>
                </div>
                <div class="flex justify-center ml-6">
                    <ColorMode />
                </div>
            </div>
        </div>
    </header>
</template>
