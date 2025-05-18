
<template>
    <header ref="head" class="fixed flex flex-nowrap w-full justify-between -top-20 justify-items-center items-center text-white bg-black">
        <div class="flex-1 flex place-items-center ml-6">
            <span class="font-bold fixed text-4xl -left-80" ref="title">
                Knapsack Problem
            </span>
        </div>
        <nav class="flex flex-nowrap p-2 font-semibold">
            <div class="h-full px-3 py-1 my-2 hover:cursor-pointer hover:bg-gray-900 hover:rounded-2xl">
                <a href="#about">The Problem</a>
            </div>
            <div class="h-full px-3 py-1 my-2 hover:cursor-pointer hover:bg-gray-900 hover:rounded-2xl">
                <a href="#problem">Try It Yourself</a>
            </div>
            <div class="h-full px-3 py-1 my-2 hover:cursor-pointer hover:bg-gray-900 hover:rounded-2xl">
                <a href="#solution">Results</a>
            </div>
            <div class="h-full px-3 py-1 my-2 hover:cursor-pointer hover:bg-gray-900 hover:rounded-2xl">
                <a href="#benchmark">Performance Comparison</a>
            </div>
            <div class="h-full px-3 py-1 my-2 hover:cursor-pointer hover:bg-gray-900 hover:rounded-2xl">
                <a href="#code">Behind the Scenes</a>
            </div>
        </nav>
    </header>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const title = ref(null) as any;
const head = ref(null) as any;

const handleScroll = () => {
    const scrollValue = window.scrollY;
    const left = -320 + (scrollValue * 0.6);
    const top = -65 + (scrollValue * 0.4);

    if (top < 0) {
        head.value.style.top = `${top}px`;
    } else {
        head.value.style.top = '0px';
    }

    if (left < 32) {
        title.value.style.left = `${left}px`;
    } else {
        title.value.style.left = '32px';
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<style lang="">

</style>