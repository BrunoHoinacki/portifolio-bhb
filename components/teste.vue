<template>
    <div class="container">
        <div class="circle"></div>
    </div>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Faz o container ter a altura total da viewport */
}

.circle {
    width: 100px;
    /* Tamanho do círculo */
    height: 100px;
    /* Tamanho do círculo */
    background-color: #3498db;
    /* Cor do círculo */
    border-radius: 50%;
    /* Faz o div se tornar um círculo */
}
</style>