<template>
    <main class="flex flex-col h-screen">
        <Header class="z-20"/>
        <img ref="background" class="h-full z-0 fixed w-full brightness-75 object-cover object-center" src="./assets/img/background.png" alt="bg">
        <HomePage class="z-10"/>
        <AboutPage class="z-10"/>
    </main>
</template>
<script setup lang="ts">
    import Header from './components/Header.vue';
    import AboutPage from './pages/AboutPage.vue';
    import HomePage from './pages/HomePage.vue';
    import { ref, onMounted, onUnmounted } from "vue";

    const background = ref(null) as any;

    const handleScroll = () => {
        const scrollValue = window.scrollY;


        const top = 50 + (scrollValue * 0.02);
        background.value.style.objectPosition = `center ${top}%`;

    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

</script>
<style>
</style>
