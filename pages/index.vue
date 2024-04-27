<template>
  <div>
    <div class="typing-container mt-10">
      <AnimeTypingEffects />
    </div>
    <div>
      <ThreeScene />
    </div>
  </div>
</template>

<script>
import ThreeScene from '~/components/ThreeJS/ThreeScene.vue';

export default {
  components: {
    ThreeScene
  }
};
</script>

<style>
.typing-container {
    min-height: 100px; 
}
</style>