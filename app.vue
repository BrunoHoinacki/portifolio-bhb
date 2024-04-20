<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Site Bruno Hoinacki',
  meta: [
    { name: 'description', content: 'Site de portifolio de Bruno Hoinacki.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Funcionando\')' }]
})
</script>
