<template>
    <div>
        <WhatsAppCTA class="animate__animated animate__slideInRight pb-3" />
        <footer class="bottom-0 w-full bg-black text-white px-6">
            <div class="flex items-center pt-4">
                <NuxtLink to="/" class="">
                    <img class="h-20" src="~/assets/logos/logo-text-white.png" alt="Logo Elleva">
                </NuxtLink>
            </div>
            <div class="text-sm pb-8">
                <div class="pt-5 flex flex-col">
                    <p>E-mail</p>
                    <a href="mailto:brunohoinackib@gmail.com" class="font-semibold">elleva@gmail.com</a>
                </div>
                <div class="pt-5 flex flex-col">
                    <p>WhatsApp</p>
                    <a href="https://api.whatsapp.com/send/?phone=5551980456224&text=Conversar+agora%21&type=phone_number&app_absent=0" class="font-semibold">(51) 98045-6224 (WhatsApp)</a>
                </div>
                <div class="pt-5 flex flex-col">
                    <p>Onde estamos</p>
                    <a href="https://www.google.com/maps/place/Cabana+dos+Pinheiros/@-29.3987446,-50.9422389,15z/data=!4m2!3m1!1s0x0:0x5d0c942956425f99?sa=X&ved=1t:2428&ictx=111" class="font-semibold">R. 15 de Novembro, 10, Vale dos Pinheiros - Gramado/RS</a>
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