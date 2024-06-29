<template>
  <div class="min-h-screen flex flex-col bg-black">
    <div class="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 border-b-2 border-brand-blue">
      <div class="container mx-auto">
        <AppHeader @toggle-menu="showMenu = !showMenu" />
      </div>
    </div>
    <div v-if="showMenu">
      <MenuLateral />
    </div>
    <div v-else>
      <main>
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import MenuLateral from '~/components/MenuLateral.vue';
import AppHeader from '~/components/AppHeader.vue';

export default {
  components: {
    MenuLateral,
    AppHeader,
  },
  data() {
    return {
      showMenu: false
    };
  }
};
</script>
