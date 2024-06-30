<template>
    <div class="fixed right-6 bottom-5 z-40">
        <transition enter-active-class="animate__animated animate__fadeInRight" mode="out-in">
            <div v-if="isOpen">
                <div class="w-96 xl:max-w-[100vw] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/50 bg-[#E7E7E7]">
                    <div
                        class="h-20 p-5 flex items-center justify-between gap-4 bg-brand-blue">
                        <div class="flex items-center gap-3">
                            <img class="w-7 h-28" src="@/assets/icon/whatsapp.svg" alt="WP">
                            <p class="text-lg font-medium text-white">WhatsApp</p>
                        </div>
                        <button @click="closeWhatsAppCard" class="hover:rotate-12 hover:scale-110" title="Fechar">
                            <img src="@/assets/icon/close.svg" alt="Fechar" class="w-7 h-7">
                        </button>
                    </div>
                    <div class="p-4 py-6">
                        <input type="text" name="message" id="message" v-model="form.message" maxlength="140"
                            title="Mensagem"
                            class="w-full px-4 py-4 rounded-full text-sm hover:border-gray-500 focus:ring-brand-blue focus:outline-none border-2 border-brand-blue text-brand-blue bg-white cursor-pointer">
                    </div>
                    <div class="w-full p-4 flex justify-end">
                        <button @click="goToWhatsAppChat" id="send-whatsapp-message" title="Enviar mensagem"
                            class="px-5 py-2 rounded-full flex items-center justify-between gap-1 bg-brand-blue hover:scale-105 hover:shadow-lg hover:shadow-[#075E54]/30 transition-all duration-300">
                            <p class="font-medium text-white">Abrir Conversa</p>
                            <img src="@/assets/icon/send.svg" alt="Enviar">
                        </button>
                    </div>
                </div>
            </div>
            <button v-else @click="openWhatsAppCard" id="open-whatsapp-card"
                class="w-16 h-16 rounded-full grid place-content-center hover:scale-105 transition-all duration-300 bg-brand-blue shadow-xl shadow-[#075E54]/20"
                title="WhatsApp">
                <img src="@/assets/icon/whatsapp.svg" alt="WhatsApp" class="w-8 h-8">
            </button>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            form: {
                message: "Conversar agora!",
                number: '5551980456224'
            }
        }
    },
    methods: {
        openWhatsAppCard() {
            this.isOpen = true;
        },
        closeWhatsAppCard() {
            this.isOpen = false;
        },
        goToWhatsAppChat() {
            this.isOpen = false;
            let encodedMessage = encodeURIComponent(this.form.message);
            let whatsappUrl = `https://wa.me/${this.form.number}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
            this.form.message = "Conversar agora!";
        }
    }
};
</script>
