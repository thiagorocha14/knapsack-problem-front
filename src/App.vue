<template>
    <main class="flex flex-col h-screen">
        <Header class="z-20"/>
        <img ref="background" class="h-full z-0 fixed w-full grayscale brightness-75 object-cover object-center" src="./assets/img/background.png" alt="bg">
        <HomePage class="z-10"/>
        <AboutPage class="z-10"/>
        <ProblemPage class="z-10"/>
        <SolutionPage class="z-10"/>
    </main>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import Header from './components/Header.vue';
import AboutPage from './pages/AboutPage.vue';
import HomePage from './pages/HomePage.vue';
import ProblemPage from './pages/ProblemPage.vue';
import SolutionPage from './pages/SolutionPage.vue';

const background = ref(null) as any;

const handleScroll = () => {
    let scrollValue = window.scrollY;
    let multiplier = 0.02;
    let addition = scrollValue * multiplier;

    if (scrollValue > (getHeightOfScreen() * 2)) {
        multiplier = 0.03;
        scrollValue = scrollValue - (getHeightOfScreen() * 2);
        let subtraction = scrollValue * multiplier;
        addition = addition - subtraction;
    }

    const top = 50 + addition;
    background.value.style.objectPosition = `center ${top}%`;

}

const getHeightOfScreen = () => {
    return window.innerHeight;
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
