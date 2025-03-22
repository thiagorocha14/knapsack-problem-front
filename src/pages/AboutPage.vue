<template>
    <main id="about">
        <div class="flex items-center justify-start h-screen w-full pt-16" ref="background">
            <div class="h-full w-full p-5 bg-sky-950 text-white clip-path" ref="about">
                <h1 class="text-4xl font-bold">About Page</h1>
                <p class="text-xl">This is the home page</p>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const background = ref(null) as any;
const about = ref(null) as any;

const handleScroll = () => {
    let scrollValue = window.scrollY;
    const width = 40 + (scrollValue * 0.04);
    const path = 100 + (scrollValue * -0.02);
    about.value.style.clipPath = `polygon(0 0, ${width}% 0, ${path}% 100%, 0% 100%)`;
    // background.value.style.width = `${width}%`;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<style lang="css">
    .clip-path {
        clip-path: polygon(0 0, 40% 0, 80% 100%, 0% 100%);
    }
</style>