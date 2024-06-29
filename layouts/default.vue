<template>
  <div class="min-h-screen flex flex-col bg-black">
    <div class="flex flex-col">
      <div class="container mx-auto">
        <AppHeader />
      </div>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="container mx-auto flex-1">
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
