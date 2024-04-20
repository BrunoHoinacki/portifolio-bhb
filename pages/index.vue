<template>
  <div class="flex pt-[40px] flex-col items-center">
    <h1 class="text-7xl text-green-500">Bem vindo!</h1>
    <div class="flex flex-col items-center text-3xl">
      <p>Hora atual: {{ formattedTime }}</p> 
      <p>
        Data de hoje: {{ formattedDate }}
      </p>
    </div>
  </div>
</template>

<script>
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
    }
  }
}
</script>
