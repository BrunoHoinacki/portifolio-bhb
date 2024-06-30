<template>
  <div>
    <div class="bg-black pt-28 px-6 xl:px-14 pb-28">
      <div class="flex flex-col items-center justify-start h-full text-white md:px-16 pt-6 xl:pt-0 xl:pl-10">
        <div class="text-5xl xl:text-[7rem] w-full pb-4 font-extralight font-space-grotesk">
          <p>{{ $t("title-1") }}</p>
          <p class="underline decoration-brand-blue decoration-4 underline-offset-8">{{ $t("title-2") }}</p>
        </div>
        <div class="flex xl:flex-row flex-col items-center">
          <div class="xl:flex flex-col items-center mt-8 basis-1/4 hidden">
            <div class="flex flex-col items-center">
              <div class="flex flex-row space-x-16 mb-6">
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
              </div>
              <div class="flex flex-row space-x-16 mb-6">
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
              </div>
              <div class="flex flex-row space-x-16 mb-6">
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
                <div class="w-1 h-1 bg-brand-blue rounded-full"></div>
              </div>
            </div>
            <div class="flex items-center justify-center mt-4">
              <span class="text-brand-blue text-xl mx-1">&lt; / &gt;</span>
              <span class="text-white text-xl mx-1">{{ $t("dna") }}</span>
              <span class="text-brand-blue text-xl mx-1">&lt; / &gt;</span>
            </div>
          </div>
          <div class="xl:hidden flex mt-8 w-full justify-center">
            <div class="flex items-center justify-center flex-nowrap">
              <span class="text-brand-blue text-2xl mx-1 whitespace-nowrap">&lt; / &gt;</span>
              <span class="text-white text-2xl mx-1 whitespace-nowrap">{{ $t("dna") }}</span>
              <span class="text-brand-blue text-2xl mx-1 whitespace-nowrap">&lt; / &gt;</span>
            </div>
          </div>
          <div class="flex mt-8 basis-1/2 xl:ml-52">
            <p class="xl:px-4 text-base leading-6 lg:text-xl text-justify">
              {{ $t("description") }}
            </p>
          </div>
        </div>
        <div class="w-full">
          <div class="all py-28">
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
        <div class="flex flex-wrap justify-between">
          <div class="w-full xl:w-1/4 xl:flex xl:flex-col xl:justify-center pr-1">
            <div
              class="w-full mb-10 text-brand-blue text-4xl text-left tracking-tighter font-space-grotesk xl:whitespace-normal xl:break-words">
              <p>{{ $t("title-3") }}</p>
            </div>
            <div class="w-full text-white text-lg mb-10 font-sans xl:whitespace-normal">
              <NuxtLink to="/projects" class="flex items-center">
                <p
                  class="underline decoration-2 underline-offset-8 hover:decoration-brand-blue transition duration-700 ease-in-out hover:pr-1">
                  {{ $t("read-cases") }}
                </p>
                <i class="fa-solid fa-arrow-right ml-2 text-brand-blue"></i>
              </NuxtLink>
            </div>
          </div>
          <div class="w-full xl:w-3/4 xl:flex xl:flex-col xl:justify-center">
            <div
              class="w-full h-32 xl:h-28 mt-8 lx:mb-28 border-brand-blue border-l-2 overflow-hidden flex items-center">
              <div class="image-container flex">
                <img src="~/assets/logos/logo-text-white.png" alt="">
                <img src="~/assets/logos/logo-text-white.png" alt="">
                <img src="~/assets/logos/logo-text-white.png" alt="">
                <img src="~/assets/logos/logo-text-white.png" alt="">
                <img src="~/assets/logos/logo-text-white.png" alt="">
                <img src="~/assets/logos/logo-text-white.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white px-6 xl:px-24">
      <div class="h-full">
        <div class="text-3xl xl:text-6xl w-full pb-4 font-extralight text-black xl:pt-28 pt-16 font-space-grotesk">
          <p>{{ $t("title-4") }}<strong class="font-extrabold">{{ $t("title-5") }}</strong></p>
        </div>
        <div class="flex xl:flex-row flex-col justify-between gap-x-16 pb-16 overflow-x-scroll overflow-y-hidden">
          <div class="flex flex-col flex-grow h-full">
            <div class="flex flex-row mt-12 items-center h-10">
              <i class="fa-solid fa-laptop-code text-white bg-brand-blue rounded-full p-5"></i>
              <h2 class="text-2xl text-black pl-4 font-bold">Desenvolvimento de Sites</h2>
            </div>
            <p class="text-lg text-slate-600 pt-6">Desenvolvemos sites independente da tecnologia. Com design atraente,
              funcionalidades avançadas e alta performance, garantimos uma presença online de destaque para o seu
              negócio.
            </p>
            <NuxtLink to="/projects" class="flex items-center pt-4">
              <p
                class="text-brand-blue hover:decoration-brand-blue hover:underline hover:decoration-2 hover:underline-offset-4 transition duration-700 ease-in-out hover:pr-1">
                {{ $t("about?") }}
              </p>
              <i class="fa-solid fa-arrow-right ml-2 text-brand-blue"></i>
            </NuxtLink>
          </div>
          <div class="flex flex-col flex-grow h-full mt-8 xl:mt-0">
            <div class="flex flex-row mt-12 items-center h-10">
              <i class="fa-solid fa-store text-white bg-brand-blue rounded-full p-5"></i>
              <h2 class="text-2xl text-black pl-4 font-bold">Desenvolvimento de Lojas Virtuais</h2>
            </div>
            <p class="text-lg text-slate-600 pt-6">Oferecemos serviços especializados de criação de lojas virtuais com
              Laravel. Nossa equipe altamente qualificada garante projetos excepcionais, desde a configuração inicial
              até
              a personalização avançada.</p>
            <NuxtLink to="/projects" class="flex items-center pt-4">
              <p
                class="text-brand-blue hover:decoration-brand-blue hover:underline hover:decoration-2 hover:underline-offset-4 transition duration-700 ease-in-out hover:pr-1">
                {{ $t("about?") }}
              </p>
              <i class="fa-solid fa-arrow-right ml-2 text-brand-blue"></i>
            </NuxtLink>
          </div>
          <div class="flex flex-col flex-grow h-full mt-8 xl:mt-0">
            <div class="flex flex-row mt-12 items-center h-10">
              <i class="fa-solid fa-store text-white bg-brand-blue rounded-full p-5"></i>
              <h2 class="text-2xl text-black pl-4 font-bold">Integrações entre sistemas</h2>
            </div>
            <p class="text-lg text-slate-600 pt-6">
              Realizamos a integramos com sistemas de gestão de vendas, contabilidade, financeiro e marketing.
            </p>
            <NuxtLink to="/projects" class="flex items-center pt-4">
              <p
                class="text-brand-blue hover:decoration-brand-blue hover:underline hover:decoration-2 hover:underline-offset-4 transition duration-700 ease-in-out hover:pr-1">
                {{ $t("about?") }}
              </p>
              <i class="fa-solid fa-arrow-right ml-2 text-brand-blue"></i>
            </NuxtLink>
          </div>
          <div class="flex flex-col flex-grow h-full mt-8 xl:mt-0">
            <div class="flex flex-row mt-12 items-center h-10">
              <i class="fa-solid fa-broom text-white bg-brand-blue rounded-full p-5"></i>
              <h2 class="text-2xl text-black pl-4 font-bold">UI/UX Design</h2>
            </div>
            <p class="text-lg text-slate-600 pt-6">Refinamos a experiência do usuário (UX) para seu produto ou serviço.
              Com design centrado no usuário, criamos interfaces intuitivas e cativantes para garantir interações
              eficientes e satisfatórias.</p>
            <NuxtLink to="/projects" class="flex items-center pt-4">
              <p
                class="text-brand-blue hover:decoration-brand-blue hover:underline hover:decoration-2 hover:underline-offset-4 transition duration-700 ease-in-out hover:pr-1">
                {{ $t("about?") }}
              </p>
              <i class="fa-solid fa-arrow-right ml-2 text-brand-blue"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-brand-blue px-6 xl:px-24 xl:py-28 pt-12">
      <div class="max-w-5xl mx-auto p-8">
        <div class="pb-8 text-right">
          <h2 class="xl:text-8xl text-5xl font-space-grotesk">
            Cases
          </h2>
          <p class="font-bold pt-6">Não utilizamos templates prontos.</p>
          <p class="">Cada projeto é planejado e desenvolvido sob medida por uma equipe especializada em UX/UI
            Design, com um layout exclusivo, para atender as necessidades específicas do seu negócio e sua identidade
            visual.</p>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <img src="https://picsum.photos/600/800?random=1" alt="Fotos de projetos" class="rounded-5xl md:row-span-2">
          <img src="https://picsum.photos/600/800?random=2" alt="Fotos de projetos"
            class="rounded-5xl md:row-start-2 md:col-start-2">
          <img src="https://picsum.photos/600/800?random=3" alt="Fotos de projetos" class="rounded-5xl md:row-span-2">
          <img src="https://picsum.photos/600/800?random=4" alt="Fotos de projetos"
            class="rounded-5xl md:row-start-4 md:col-start-2">
          <img src="https://picsum.photos/600/800?random=5" alt="Fotos de projetos" class="rounded-5xl md:row-span-2">
        </div>
      </div>
      <div class="xl:pt-36 py-20 flex justify-center">
        <NuxtLink
          class="px-5 py-5 text-2xl rounded-full bg-brand-blue border border-white text-white text-nowrap transition duration-700 ease-in-out hover:text-brand-blue hover:bg-white"
          to="/contact">
          Veja mais cases
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
</style>