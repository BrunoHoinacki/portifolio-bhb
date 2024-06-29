<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

useHead({
  htmlAttrs: {
    lang: 'pt-br'
  },
  title: 'LevelUp - Criação de Sites e Plataformas Web',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Conheça o portfólio de Bruno Hoinacki, desenvolvedor fullstack' },
    { name: 'author', content: 'Bruno Hoinacki' },
    { name: 'robots', content: 'index, follow' }
  ],
});
</script>
