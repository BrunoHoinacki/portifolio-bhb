<template>
    <div>
        <button @click="toggleColorMode">
            <i :class="iconClass"></i> Toggle Color Mode
        </button>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue'

const colorMode = useColorMode()

const toggleColorMode = () => {
    if (colorMode.preference === 'light') {
        colorMode.preference = 'dark'
    } else if (colorMode.preference === 'dark') {
        colorMode.preference = 'sepia'
    } else if (colorMode.preference === 'sepia') {
        colorMode.preference = 'light'
    }
}

const iconClass = computed(() => {
    switch (colorMode.preference) {
        case 'light':
            return 'fas fa-sun' // Exemplo de classe de ícone do FontAwesome para sol
        case 'dark':
            return 'fas fa-moon' // Exemplo de classe de ícone do FontAwesome para lua
        case 'sepia':
            return 'fas fa-book' // Exemplo de classe de ícone do FontAwesome para livro (sepia)
        default:
            return ''
    }
})
</script>

<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>
