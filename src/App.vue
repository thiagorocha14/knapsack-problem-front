<script setup lang="ts">
    import Header from './components/Header.vue'
</script>
<template>
    <main class="flex flex-col h-screen">
        <Header />
        <router-view
            class="bg-router-view flex-1 transition-opacity">
        </router-view>
    </main>
</template>

<style>
</style>
