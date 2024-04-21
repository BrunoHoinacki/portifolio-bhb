<template>
    <div>
        <WhatsappCTA class="animate__animated animate__slideInRight pb-3" />
        <footer
            class="fixed bottom-0 left-0 w-full bg-green-500 text-white py-4 text-center animate__animated animate__slideInUp">
            <div class="container mx-auto">
                <span class="lg:text-lg text-xs">
                    <a href="https://linkedin.com/in/brunohoinackib" target="_blank">Copyright © 1999-2024 Bruno Inacio
                        Hoinacki Bueno. CNPJ n.º 53.329.473/0001-01 </a>
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
import WhatsappCTA from '@/components/WhatsAppCTA.vue';

export default {
    components: {
        WhatsappCTA
    }
}
</script>