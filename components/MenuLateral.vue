<template>
    <div class="w-screen h-screen z-50 pt-32 px-12 pb-16">
        <div class="flex flex-row">
            <div class="space-x-10">
                <button :class="{ 'text-brand-blue': locale === 'pt', 'hover:text-brand-blue': locale !== 'pt' }"
                    @click="changeLocale('pt')" class="text-xl hover:text-brand-blue">PT</button>
                <button :class="{ 'text-brand-blue': locale === 'es', 'hover:text-brand-blue': locale !== 'es' }"
                    @click="changeLocale('es')" class="text-xl hover:text-brand-blue">ES</button>
                <button :class="{ 'text-brand-blue': locale === 'en', 'hover:text-brand-blue': locale !== 'en' }"
                    @click="changeLocale('en')" class="text-xl hover:text-brand-blue">EN</button>
            </div>
        </div>
        <div class="pt-16">
            <div class="space-y-7 flex flex-col">
                <NuxtLink to="/about" class="text-3xl hover:text-brand-blue">{{ $t("about") }}</NuxtLink>
                <NuxtLink to="/projects" class="text-3xl hover:text-brand-blue">{{ $t("cases") }}</NuxtLink>
                <NuxtLink to="/agencies" class="text-3xl hover:text-brand-blue">{{ $t("agencies") }}</NuxtLink>
                <NuxtLink to="/contact" class="text-3xl hover:text-brand-blue">{{ $t("contact") }}</NuxtLink>
            </div>
        </div>
        <div class="pt-16 align-middle items-center">
            <div class="flex flex-row gap-4 align-middle items-center">
                <a class="text-3xl hover:text-brand-blue" href="https://www.instagram.com/this.bruno_hoinacki/"
                    arial-label="Instagram">
                    <i class="fa-brands fa-instagram p-3 border-2 border-brand-blue rounded-full"></i>
                </a>
                <a class="text-3xl hover:text-brand-blue" href="https://www.instagram.com/this.bruno_hoinacki/"
                    arial-label="Whatsapp">
                    <i class="fa-brands fa-whatsapp p-3 border-2 border-brand-blue rounded-full"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Método para trocar o idioma
const changeLocale = (newLocale) => {
    locale.value = newLocale;
};
</script>
