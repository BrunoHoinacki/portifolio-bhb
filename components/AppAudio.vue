<template>
    <div class="background-music-controller">
        <audio ref="audioPlayer" loop>
            <source src="~/assets/songs/theme.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento de áudio.
        </audio>
        <UButton :icon="isPlaying ? 'i-heroicons-pause' : 'i-heroicons-play'" size="sm" color="primary" variant="solid"
            label="Toggle Music" :trailing="false" @click="toggleAudio" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPlaying: false
        };
    },
    methods: {
        toggleAudio() {
            const audio = this.$refs.audioPlayer;
            if (this.isPlaying) {
                audio.pause();
            } else {
                audio.play()
                    .then(() => { this.isPlaying = true; })
                    .catch(error => {
                        console.error("A reprodução automática falhou", error);
                    });
            }
            this.isPlaying = !this.isPlaying;
        }
    },
    mounted() {
        this.$refs.audioPlayer.volume = 0.1;
    }
}
</script>
