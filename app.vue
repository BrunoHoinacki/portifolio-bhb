<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Funcionando\')' }]
})
</script>
