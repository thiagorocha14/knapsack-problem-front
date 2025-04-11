<template>
    <main id="problem">
        <div class="flex flex-col items-start justify-start h-screen w-full pt-20 p-5">
            <h1 class="text-4xl font-bold ml-2 text-white">Products setup</h1>
            <div class="grid grid-cols-5 p-2 gap-5 w-full">
                <Product class="z-20" v-for="product in products" :key="product" :product="product" />
                <button class="w-64 h-64 bg-gray-200 rounded-lg p-4 shadow-md" @click="products.push({})">
                    <div class="flex flex-col items-center justify-center h-full">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import Product from '../components/Product.vue';
import { ProductType } from '../types/Product';
import { ref, onMounted, onUnmounted } from "vue";
const background = ref(null) as any;
const problem = ref(null) as any;

let products = ref<ProductType[]>([]) as any;

onMounted(() => {
    products.value = [
        { value: 10, weight: 5, quantity: 1 },
        { value: 20, weight: 10, quantity: 2 },
        { value: 30, weight: 15, quantity: 3 },
    ];
});

</script>
<style lang="css">
</style>