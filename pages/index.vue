<template>
  <div class="flex pt-[40px] text-[16px] flex-col mb:items-center animate__animated animate__zoomInDown">
    <h1 class="mb:text-7xl text-center text-5xl pb-2">Bem vindo!</h1>
    <div class="flex flex-col mx-auto items-center mb-[100px]">
      <p class="flex justify-center">Hora atual: {{ formattedTime }}</p>
      <p class="flex justify-center">
        Data de hoje: {{ formattedDate }}
      </p>
      <img :src="dynamicLogo" alt="Logo Dinâmico">
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
