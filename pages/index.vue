<template>
  <div class="flex pt-[40px] flex-col items-center animate__animated animate__zoomInDown">
    <div>
      <h1 class="mb:text-7xl text-5xl pb-2">Bem vindo!</h1>
    </div>
    <div class="flex flex-col text-xl">
      <p class="flex justify-center">Hora atual: {{ formattedTime }}</p>
      <p class="flex justify-center">
        Data de hoje: {{ formattedDate }}
      </p>
    </div>
    <div>
      <a href="https://linkedin.com/in/brunohoinackib" target="_blank">
        <img :src="dynamicLogo" alt="Logo Dinâmico">
      </a>
    </div>
  </div>
</template>

<script>
import logo1 from '~/assets/logos/1.png';
import logo2 from '~/assets/logos/2.png';
export default {
  methods: {
    formatDate(date) {
      const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };
      return date.toLocaleDateString('pt-BR', options);
    },
    formatTime(time) {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      return time.toLocaleTimeString('pt-BR', options);
    }
  },
  computed: {
    formattedDate() {
      return this.formatDate(new Date());
    },
    formattedTime() {
      return this.formatTime(new Date());
    },
    dynamicLogo() {
      return this.$colorMode.preference === 'dark' ? logo1 : logo2;
    }
  }
}
</script>
