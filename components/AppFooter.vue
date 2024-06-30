<template>
    <div class="bg-white">
        <WhatsAppCTA class="animate__animated animate__slideInRight pb-3" />
        <footer class="bottom-0 w-full bg-black text-white px-6 xl:px-24 xl:rounded-t-3xl xl:rounded-b-none">
            <div class="flex items-center pt-4 pb-12">
                <NuxtLink to="/" class="">
                    <img class="h-24" src="~/assets/logos/logo-text-white.png" alt="Logo Elleva">
                </NuxtLink>
                <div class="flex flex-row items-center ml-auto">
                    <NuxtLink
                        class="hidden xl:block xl:mx-3 my-2 hover:decoration-brand-blue hover:underline hover:underline-offset-4 hover:decoration-2 text-base text-nowrap transition duration-700 ease-in-out"
                        to="/about">
                        O que fazemos
                    </NuxtLink>
                    <p class="hidden xl:block xl:mx-3 my-2 text-brand-blue">•</p>
                    <NuxtLink
                        class="hidden xl:block xl:mx-3 my-2 hover:decoration-brand-blue hover:underline hover:underline-offset-4 hover:decoration-2 text-base text-nowrap transition duration-700 ease-in-out"
                        to="/projects">
                        Cases
                    </NuxtLink>
                    <p class="hidden xl:block xl:mx-3 my-2 text-brand-blue font-semibold">•</p>
                    <NuxtLink
                        class="hidden xl:block xl:mx-3 my-2 hover:decoration-brand-blue hover:underline hover:underline-offset-4 hover:decoration-2 text-base text-nowrap transition duration-700 ease-in-out"
                        to="/agencies">
                        Para agências
                    </NuxtLink>
                    <p class="hidden xl:block xl:mx-3 my-2 text-brand-blue font-semibold"></p>
                    <NuxtLink
                        class="hidden xl:block xl:ml-10 xl:mr-8 my-2 px-5 py-4 text-base rounded-full bg-brand-blue text-white text-nowrap transition duration-700 ease-in-out hover:text-brand-blue hover:bg-white"
                        to="/contact">
                        Fale conosco
                    </NuxtLink>
                </div>
            </div>
            <div class="relative flex flex-row">
                <div class="text-sm xl:text-2xl pb-8">
                    <div class="pt-5 flex flex-col">
                        <p class="xl:text-lg">E-mail</p>
                        <a href="mailto:brunohoinackib@gmail.com" class="font-semibold">elleva@gmail.com</a>
                    </div>
                    <div class="pt-5 flex flex-col">
                        <p class="xl:text-lg">WhatsApp</p>
                        <a href="https://api.whatsapp.com/send/?phone=5551980456224&text=Conversar+agora%21&type=phone_number&app_absent=0"
                            class="font-semibold">+55 51 98045-6224</a>
                    </div>
                    <div class="pt-5 flex flex-col">
                        <p class="xl:text-lg">Onde estamos</p>
                        <a href="https://www.google.com/maps/place/Cabana+dos+Pinheiros/@-29.3987446,-50.9422389,15z/data=!4m2!3m1!1s0x0:0x5d0c942956425f99?sa=X&ved=1t:2428&ictx=111"
                            class="font-semibold">R. 15 de Novembro, 10, Vale dos Pinheiros - Gramado/RS</a>
                    </div>
                </div>
                <div class="absolute bottom-0 right-0 pt-16 align-middle items-center pb-8 pr-4">
                    <div class="flex flex-row gap-4 align-middle items-center">
                        <a class="text-3xl hover:text-brand-blue" href="https://www.instagram.com/this.bruno_hoinacki/"
                            aria-label="Instagram">
                            <i class="fa-brands fa-instagram p-3 border-2 border-brand-blue rounded-full"></i>
                        </a>
                        <a class="text-3xl hover:text-brand-blue" href="https://www.instagram.com/this.bruno_hoinacki/"
                            aria-label="Whatsapp">
                            <i class="fa-brands fa-whatsapp p-3 border-2 border-brand-blue rounded-full"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import WhatsAppCTA from '@/components/WhatsAppCTA.vue';
export default {
    components: {
        WhatsAppCTA
    }
}
</script>
