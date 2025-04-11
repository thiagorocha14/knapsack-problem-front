
<template>
    <header class="fixed flex flex-nowrap w-full justify-between justify-items-center items-center text-white bg-header">
        <div class="flex-1 flex place-items-center ml-6">
            <!-- <img class="h-11 w-11 m-2" src="../assets/img/logo.png" alt="logo"> -->
            <span class="font-bold fixed text-4xl -left-80" ref="title">
                Knapsack Problem
            </span>
        </div>
        <nav class="flex flex-nowrap p-2 font-semibold">
            <div class="h-full px-3 py-1 my-2 hover:cursor-pointer hover:bg-cyan-900 hover:rounded-2xl">
                <a href="#about">About</a>
            </div>
            <div class="h-full px-3 py-1 my-2 hover:cursor-pointer hover:bg-cyan-900 hover:rounded-2xl">
                <a href="#problem">Problem</a>
            </div>
            <div class="h-full px-3 py-1 my-2 hover:cursor-pointer hover:bg-cyan-900 hover:rounded-2xl">
                <a href="#solution">Solution</a>
            </div>
        </nav>
    </header>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const title = ref(null) as any;

const handleScroll = () => {
    const scrollValue = window.scrollY;
    const left = -320 + (scrollValue * 0.6);
    if (left > 32) {
        title.value.style.left = '32px';
        return;
    }
    title.value.style.left = `${left}px`;
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