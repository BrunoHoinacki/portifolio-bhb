<template>
    <div class="mt-5">
        <p :class="textClass">{{ displayedText }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phrases: [
                "Hello, I'm Bruno Hoinacki",
                "Look for all pages for a great experience"
            ],
            currentPhraseIndex: 0,
            currentCharIndex: 0,
            isDeleting: false,
            textClass: 'text', // Classe CSS para o texto
            typingSpeed: 150 // Velocidade de digitação/deleção
        };
    },
    computed: {
        displayedText() {
            return this.phrases[this.currentPhraseIndex].slice(0, this.currentCharIndex);
        }
    },
    methods: {
        startTyping() {
            this.type();
        },
        type() {
            if (this.isDeleting) {
                this.currentCharIndex--;
            } else {
                this.currentCharIndex++;
            }

            if (!this.isDeleting && this.currentCharIndex === this.phrases[this.currentPhraseIndex].length) {
                this.isDeleting = true;
                setTimeout(this.type, 1500); // Aguardar 1.5 segundos antes de começar a excluir
            } else if (this.isDeleting && this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
                setTimeout(this.type, 500); // Aguardar 0.5 segundos antes de começar a digitar a próxima frase
            } else {
                setTimeout(this.type, this.typingSpeed);
            }
        }
    },
    mounted() {
        this.startTyping();
    }
};
</script>

<style scoped>
.text {
    font-size: 2rem;
    text-align: center;
    padding: 20px;
    animation-duration: 2s;
    animation-fill-mode: both;
}
</style>