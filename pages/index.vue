<template>
  <div class="flex pt-[40px] flex-col items-center pt-4">
    <h1 class="text-7xl text-green-500">Bem vindo!</h1>
    <div class="flex flex-col items-center text-3xl">
      <p>Hora atual: {{ new Date().toLocaleTimeString() }}</p>
      <p>
        Data de hoje: {{ new Date().toLocaleDateString() }}
      </p>
    </div>
  </div>
</template>
