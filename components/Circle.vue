<template>
    <div class="flex justify-center items-center h-[500px] sm:h-[500px] md:h-[710px] lg:h-[750px] xl:h-[900px] bg-aquamarine">
      <div class="w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
    </div>
  </template>
  
  <script>
    import anime from 'animejs';
    
    export default {
      mounted() {
        anime({
          targets: '',
          scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
          ],
          delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
          loop: true 
        });
      }
    }
    </script>
    