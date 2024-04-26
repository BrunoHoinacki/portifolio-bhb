<template>
  <div
    class="flex justify-center items-center h-[500px] sm:h-[500px] md:h-[710px] lg:h-[750px] xl:h-[900px] bg-aquamarine">
    <div
      class="circle w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] bg-gradient-to-r from-blue-800 to-teal-500 rounded-full">
    </div>
  </div>
</template>


<script>
import anime from 'animejs';

export default {
  mounted() {
    anime({
      targets: '.circle', // Classe do seu elemento HTML
      rotate: {
        value: 360, // Graus de rotação completa
        duration: 2000, // Duração da animação em milissegundos
        easing: 'linear', // Tipo de easing (linear para rotação constante)
        loop: true // Repetir a animação continuamente
      }
    });
    anime({
      targets: '.circle', // Classe do seu elemento HTML
      scale: [
        { value: 0.9, duration: 1000, easing: 'easeInOutQuad' }, // Reduz a escala para 90%
        { value: 1, duration: 1000, easing: 'easeInOutQuad' } // Retorna à escala original
      ],
      loop: true // Repetir a animação continuamente
    });

  }
}
</script>