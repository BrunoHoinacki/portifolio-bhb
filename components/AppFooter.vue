<template>
    <div>
        <WhatsappCTA class="animate__animated animate__slideInRight"/>
        <footer class="fixed bottom-0 left-0 w-full bg-green-500 text-white py-4 text-center animate__animated animate__slideInUp">
            <div class="container mx-auto">
                <span>
                    Desenvolvido por <a href="https://github.com/brunohoinacki" target="_blank">Bruno Hoinacki</a>
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