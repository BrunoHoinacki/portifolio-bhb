<template>
    <div>
        <button @click="toggleColorMode">
            <font-awesome-icon :icon="iconName" />
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

const iconName = computed(() => {
    switch (colorMode.preference) {
        case 'light':
            return 'sun'
        case 'dark':
            return 'moon'
        case 'sepia':
            return 'book'
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