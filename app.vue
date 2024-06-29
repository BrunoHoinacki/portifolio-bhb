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
  description: 'Elleva oferece criação de sites e plataformas web inovadoras e de alta qualidade. Personalizamos soluções para atender às suas necessidades específicas.',
  ogDescription: 'Elleva oferece criação de sites e plataformas web inovadoras e de alta qualidade. Personalizamos soluções para atender às suas necessidades específicas.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Elleva - Criação de Site e Plataformas Web',
  twitterDescription: 'Elleva oferece criação de sites e plataformas web inovadoras e de alta qualidade. Personalizamos soluções para atender às suas necessidades específicas.',
  twitterImage: '/og-image.jpg',
  keywords: 'elleva, criação de sites, plataformas web, desenvolvimento web, sites inovadores, soluções web',
  robots: 'index, follow',
})

useHead({
  meta: [
    { name: 'author', content: 'Elleva' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#000' },
    { name: 'language', content: 'pt-BR' },
    { property: 'og:site_name', content: 'Elleva' },
    { property: 'og:url', content: 'https://www.elleva.com.br' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: 'https://www.elleva.com.br' },
  ],
})
</script>
