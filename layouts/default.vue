<template>
  <div class="min-h-screen flex flex-col bg-black">
    <div class="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 border-b-2 border-brand-blue">
      <div class="container mx-auto">
        <AppHeader />
      </div>
    </div>
    <div class="">
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>