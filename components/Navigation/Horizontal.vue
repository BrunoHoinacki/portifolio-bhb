<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Perfil',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  to: '/perfil',
}, {
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Sobre',
  icon: 'i-heroicons-command-line',
  to: '/sobre'
}, {
  label: 'Contato',
  icon: 'i-heroicons-chat-bubble-left-right',
  to: '/contato'
}]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>
