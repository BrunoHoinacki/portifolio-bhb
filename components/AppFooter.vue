<template>
    <div>
        <WhatsAppCTA class="animate__animated animate__slideInRight pb-3" />
        <footer
            class="fixed bottom-0 left-0 w-full bg-teal-500 text-white py-4 text-center animate__animated animate__slideInUp">
            <div class="justify-center sm:text-lg flex flex-row">
                <span class="">
                    <a href="https://linkedin.com/in/brunohoinackib" target="_blank">Copyright © 1999-2024 Bruno Inacio
                        Hoinacki Bueno. CNPJ n.º 53.329.473/0001-01 </a>
                </span>
                <div>
                    <ColorMode />
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