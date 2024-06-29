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
  title: 'Elleva - Criação de Site e Plataformas Web',
  ogTitle: 'Elleva - Criação de Site e Plataformas Web',
  description: 'Criação de Sites e Plataformas Web de alta qualidade e inovação.',
  ogDescription: 'Criação de Sites e Plataformas Web de alta qualidade e inovação.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Elleva - Criação de Site e Plataformas Web',
  twitterDescription: 'Criação de Sites e Plataformas Web de alta qualidade e inovação.',
  twitterImage: '/og-image.png',
  keywords: 'elleva, eleva website, eleva site, eleva platform, eleva platform website, eleva platform site',
  robots: 'index, follow',
})
</script>