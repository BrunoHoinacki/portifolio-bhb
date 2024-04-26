<template>
    <div class="video-background">
        <div class="video-foreground">
            <video autoplay muted loop playsinline>
                <source src="~/assets/videos/galaxi-fundo.mp4" type="video/mp4">
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    </div>
</template>

<style>
.video-background {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background-size: cover;
}

.video-foreground {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
}

.video-foreground video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
}

.content {
    position: relative;
    z-index: 1;
    /* Adicione estilos adicionais para o conteúdo aqui */
}
</style>