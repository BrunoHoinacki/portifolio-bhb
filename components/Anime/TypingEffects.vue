<template>
    <div class="text-container">
        <p :class="textClass">{{ displayedText }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phrases: [
                "Olá, Eu sou o Bruno Hoinacki",
                "Olhe todas as páginas para ter uma ótima experiência",
            ],
            currentPhraseIndex: 0,
            currentCharIndex: 0,
            isDeleting: false,
            textClass: 'text',
            typingSpeed: 150
        };
    },
    computed: {
        displayedText() {
            // Adiciona o cursor apenas se não estiver deletando e a animação de digitação estiver ativa
            const text = this.phrases[this.currentPhraseIndex].slice(0, this.currentCharIndex);
            return this.isDeleting ? text : text;
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
                setTimeout(this.type, 1500);
            } else if (this.isDeleting && this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
                setTimeout(this.type, 500);
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
    position: relative;
    /* Para posicionar corretamente o pseudo-elemento */
    white-space: pre;
    /* Para que os espaços no final sejam respeitados */
    /* ... outras propriedades ... */
}

.text::after {
    content: '|';
    animation: blink 1s step-end infinite;
    margin-left: 5px;
    /* Espaçamento entre o texto e o cursor */
}

@keyframes blink {

    0%,
    50% {
        color: rgba(0, 0, 0, 1);
    }

    50.01%,
    100% {
        color: transparent;
    }
}
</style>
