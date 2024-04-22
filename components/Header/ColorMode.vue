<template>
    <div>
        <p class="text-[16px]">Modo: {{ colorMode.preference }}</p>
        <div @click="toggleColorMode"
            class="relative w-14 h-7 flex items-center bg-teal-800 rounded-full p-1 cursor-pointer overflow-hidden">
            <img v-if="colorMode.preference === 'light'" src="assets/icon/jam/sun.svg"
                class="w-6 h-6 transform translate-x-1 transition-transform duration-300 bg-yellow-500 rounded-full" alt="Sol">
            <img v-else src="assets/icon/jam/moon.svg"
                class="w-6 h-6 transform translate-x-6 transition-transform duration-300 bg-gray-400 rounded-full" alt="Lua">
        </div>
    </div>
</template>


<script setup>

const colorMode = useColorMode()

function toggleColorMode() {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
<style>
body {
    transition: background-color 0.3s, color 0.3s;
    color: #255F5A;
    font-weight: bold;
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

h1 {
    color: #6DFAFB;
    text-shadow: 0 0 0.2em rgb(77, 76, 76)
}

.dark-mode h1 {
    color: #6DFAFB;
}

div.relative div {
    transition: transform 0.3s ease-in-out;
}
</style>
