<template>
    <div class="background-music-controller">
        <audio ref="audioPlayer" loop>
            <source src="assets/songs/theme.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento de áudio.
        </audio>
        <p>Música:</p>
        <button @click="toggleAudio" class="focus:outline-none">
            <!-- <img v-if="isPlaying" src="assets/icon/jam/pause.svg" alt="Pausar" class="h-6 w-6" />
            <img v-else src="assets/icon/jam/play.svg" alt="Tocar" class="h-6 w-6" /> -->
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPlaying: false,
            initialized: false 
        };
    },
    methods: {
        playAudio() {
            const audio = this.$refs.audioPlayer;
            audio.play()
                .then(() => {
                    this.isPlaying = true;
                })
                .catch(error => {
                    console.error("A reprodução automática falhou", error);
                });
        },
        toggleAudio() {
            const audio = this.$refs.audioPlayer;

            if (this.isPlaying) {
                audio.pause();
            } else {
                this.playAudio();
            }

            this.isPlaying = !this.isPlaying;
        },
        handleFirstUserInteraction() {
            if (!this.initialized) {
                this.playAudio();
                this.initialized = true; 
                window.removeEventListener('click', this.handleFirstUserInteraction);
            }
        }
    },
    mounted() {
        window.addEventListener('click', this.handleFirstUserInteraction);
        this.$refs.audioPlayer.volume = 0.1;
    }
}
</script>
