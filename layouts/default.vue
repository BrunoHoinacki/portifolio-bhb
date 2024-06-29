<template>
  <div class="min-h-screen flex flex-col">
    <div class="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 border-b-2 border-brand-blue">
      <div class="container mx-auto">
        <AppHeader />
      </div>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex-1">
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>