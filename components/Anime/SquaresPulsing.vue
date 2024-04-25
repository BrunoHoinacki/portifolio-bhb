<template>
    <div class="grid">
      <div v-for="n in 70" :key="n" class="el"></div>
    </div>
  </template>
  
  <style>
  .grid {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    position: absolute;
    top: 60%;
    left: 50%;
    width: 100%;
    height: 50%;
    transform: translate(-50%, -50%);
  }
  .el {
    background: teal;
    width: 100%;
    height: 100%;
  }
  </style>
  
  <script>
  import anime from 'animejs';
  
  export default {
    mounted() {
      anime({
        targets: '.grid .el',
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
  