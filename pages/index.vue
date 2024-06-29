<template>
  <div class="flex flex-col items-center justify-start h-full bg-black text-white px-10 md:px-16 pt-6 xl:pt-0 xl:pl-10">
    <div class="text-5xl xl:text-[7rem] w-full pb-4 font-extralight" style="font-family: 'Space Grotesk', sans-serif;">
      <p>Soluções digitais de</p>
      <p class="underline decoration-blue-500 decoration-4 underline-offset-8">alta performance.</p>
    </div>
    <div class="flex xl:flex-row flex-col items-center">
      <div class="xl:flex flex-col items-center mt-8 basis-1/4 hidden">
        <div class="flex flex-col items-center">
          <div class="flex flex-row space-x-16 mb-6">
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
          </div>
          <div class="flex flex-row space-x-16 mb-6">
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
          </div>
          <div class="flex flex-row space-x-16 mb-6">
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div class="w-1 h-1 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-4">
          <span class="text-blue-500 text-xl mx-1">&lt; / &gt;</span>
          <span class="text-white text-xl mx-1">nosso dna é digital</span>
          <span class="text-blue-500 text-xl mx-1">&lt; / &gt;</span>
        </div>
      </div>
      <div class="xl:hidden flex mt-8 w-full">
        <div class="flex items-center flex-nowrap">
          <span class="text-blue-500 text-2xl mx-1 whitespace-nowrap">&lt; / &gt;</span>
          <span class="text-white text-2xl mx-1 whitespace-nowrap">nosso dna é digital</span>
          <span class="text-blue-500 text-2xl mx-1 whitespace-nowrap">&lt; / &gt;</span>
        </div>
      </div>
      <div class="flex mt-8 basis-1/2 xl:ml-52">
        <p class="xl:px-4 text-base leading-6 lg:text-xl text-justify">
          A Elleva é uma software house especializada no desenvolvimento de projetos digitais com foco em usabilidade e
          conversão. Reunimos profissionais criativos, qualificados e com anos de experiência para garantirmos
          excelência em cada etapa do projeto.
        </p>
      </div>
    </div>
    <div class="mt-20 h-28 md:h-48">
      <div class="all xl:mt-2">
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="container">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div class="mb-10 text-blue-500 text-4xl text-left tracking-tighter"
      style="font-family: 'Space Grotesk', sans-serif;">
      <p>Essas marcas acreditam no nosso DNA.</p>
    </div>
    <div class="text-white underline decoration-2 underline-offset-8 mb-10 w-full font-sans">
      <NuxtLink to="/projects">Conheça os cases<i class="fa-solid fa-arrow-right ml-2 text-blue-500"></i></NuxtLink>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

.all {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 70%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}

@media screen and (min-width: 300px) {
  .all {
    top: 100%;
  }
}

@media screen and (min-width: 360px) {
  .all {
    top: 105%;
  }
}

@media screen and (min-width: 425px) {
  .all {
    top: 90%;
  }
}

@media screen and (min-width: 768px) {
  .all {
    top: 68%;
  }
}

@media (min-width: 1024px) {
  .all {
    top: 55%;
  }
}

@media (min-width: 1280px) {
  .all {
    top: 90%;
  }
}

@media (min-width: 1440px) {
  .all {
    top: 80%;
  }
}

.container {
  height: 120px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.container .circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 0;
}

.container .circle:nth-child(1) {
  top: 0;
  animation: anim_a 3s infinite ease-in-out;
  background-color: #3B82F6;
}

.container .circle:nth-child(2) {
  top: calc(100% - 5px);
  transform: scale(1.0);
  animation: anim_b 3s infinite ease-in-out;
  background-color: #e1e1e1;
}

@keyframes anim_a {
  0% {
    top: 0;
    z-index: 50;
  }

  20% {
    transform: scale(1.0);
  }

  50% {
    top: 100%;
  }

  50.1% {
    z-index: 0;
  }

  75% {
    transform: scale(0.8);
    z-index: 0;
  }

  100% {
    top: 0;
    z-index: 2;
  }
}

@keyframes anim_b {
  0% {
    top: calc(100% - 5px);
    z-index: 1;
  }

  25% {
    transform: scale(0.8);
  }

  50% {
    top: 0;
  }

  50.1% {
    z-index: 2;
  }

  80% {
    transform: scale(1.0);
    z-index: 2;
  }

  100% {
    top: calc(100% - 5px);
    z-index: 0;
  }
}

.container:nth-child(2) .circle {
  animation-delay: -0.1s;
}

.container:nth-child(3) .circle {
  animation-delay: -0.2s;
}

.container:nth-child(4) .circle {
  animation-delay: -0.3s;
}

.container:nth-child(5) .circle {
  animation-delay: -0.4s;
}

.container:nth-child(6) .circle {
  animation-delay: -0.5s;
}

.container:nth-child(7) .circle {
  animation-delay: -0.6s;
}

.container:nth-child(8) .circle {
  animation-delay: -0.7s;
}

.container:nth-child(9) .circle {
  animation-delay: -0.8s;
}

.container:nth-child(10) .circle {
  animation-delay: -0.9s;
}

.container:nth-child(11) .circle {
  animation-delay: -1s;
}

.container:nth-child(12) .circle {
  animation-delay: -1.1s;
}
</style>