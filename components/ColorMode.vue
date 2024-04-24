<script setup lang="ts">
const colorMode = useColorMode()
const selected = ref(true)
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
<template>
    <div class="">
        <UToggle v-model="selected" size="xl" color="gray" off-icon="i-heroicons-sun-20-solid"
            on-icon="i-heroicons-moon-20-solid" @click="isDark = !isDark" aria-label="Theme" />
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
}

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
