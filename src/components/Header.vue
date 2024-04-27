<script lang="ts">
    import DarkModeSwitcher from './DarkModeSwitcher.vue';
export default {
    components: {
        DarkModeSwitcher
    }
}
</script>
<template>
    <header class="flex flex-nowrap w-full justify-between justify-items-center items-center text-white bg-header">
        <div class="flex-1 flex place-items-center">
            <img class="h-11 w-11 m-2" src="../assets/img/logo.png" alt="logo">
            <span class="font-bold text-4xl">
                Knapsack Problem
            </span>
            <DarkModeSwitcher />
        </div>
        <nav class="flex flex-nowrap p-2 font-semibold">
            <div class="h-full m-2 hover:cursor-pointer hover:text-gray-300">
                <router-link to="/">Home</router-link>
            </div>
            <div class="h-full m-2 hover:cursor-pointer hover:text-gray-300">
                <router-link to="/distributed">Distributed Software Development</router-link>
            </div>
            <div class="h-full m-2 hover:cursor-pointer hover:text-gray-300">
                <router-link to="/intelligence">Computational Intelligence</router-link>
            </div>
        </nav>
    </header>
</template>
<style lang="">

</style>