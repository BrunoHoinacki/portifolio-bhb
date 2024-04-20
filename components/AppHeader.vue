<template>
    <header class="fixed top-0 left-0 w-full bg-green-500 text-white py-4 text-center">
        <div class="container mx-auto flex justify-between items-center">
            <span>
                Sou um header
                <slot />
            </span>
            <nav>
                <ul class="flex space-x-4">
                    <li><nuxt-link to="/">Página Inicial</nuxt-link></li>
                    <li><nuxt-link to="/sobre">Sobre</nuxt-link></li>
                    <li><nuxt-link to="/contato">Contato</nuxt-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>