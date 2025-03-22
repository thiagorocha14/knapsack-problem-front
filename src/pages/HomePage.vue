<template>
    <main>
        <div class="flex items-center justify-end h-[120vh]">
            <div class="text-white">
                <h1 ref="title" class="text-8xl fixed right-24 top-[calc(45%-6rem)] font-bold drop-shadow-lg text-right">Knapsack <br>Problem</h1>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const title = ref(null) as any;

const handleScroll = () => {
    const scrollValue = window.scrollY;
    const right = 96 + (scrollValue * -0.9);

    title.value.style.right = `${right}px`;
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