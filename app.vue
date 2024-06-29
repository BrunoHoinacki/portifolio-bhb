<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: 'Eleva - Criação de Site e Plataformas Web',
  ogTitle: 'Eleva - Criação de Site e Plataformas Web',
  description: 'Criação de Sites e Plataformas Web de alta qualidade e inovação.',
  ogDescription: 'Criação de Sites e Plataformas Web de alta qualidade e inovação.',
  ogImage: '',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Eleva - Criação de Site e Plataformas Web',
  twitterDescription: 'Criação de Sites e Plataformas Web de alta qualidade e inovação.',
  twitterImage: '',
  keywords: 'eleva, eleva website, eleva site, eleva platform, eleva platform website, eleva platform site',
  robots: 'index, follow',
})
</script>