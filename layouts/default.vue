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
export default {
  data() {
    return {
      showMenu: false
    };
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.showMenu = false;
      next();
    });
  },
  beforeDestroy() {
    this.$router.beforeEach(() => { });
  }
};
</script>
