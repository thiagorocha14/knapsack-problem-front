<template>
    <main id="problem">
        <div class="flex flex-col items-start justify-start h-screen w-full pt-20 p-5">
            <h1 class="text-4xl font-bold ml-2 text-white">Products setup</h1>
            <div class="grid grid-cols-5 p-2 gap-5 w-full">
                <Product class="z-20" v-for="product in products" :key="product" :product="product" />
                <button class="w-72 h-72 bg-gray-300 rounded-lg p-4 shadow-md" @click="addProduct">
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
import { Product as ProductType } from '../types/ProductType';
import { ref, onMounted, onUnmounted } from "vue";
const background = ref(null) as any;
const problem = ref(null) as any;

let products = ref<ProductType[]>([]) as any;

const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const addProduct = () => {
    products.value.push({
        value: randomInt(1, 20),
        weight: randomInt(1, 20),
        quantity: randomInt(1, 20)
    });
};

onMounted(() => {
    products.value = [
        {
            value: randomInt(1, 20),
            weight: randomInt(1, 20),
            quantity: randomInt(1, 20)
        },
        {
            value: randomInt(1, 20),
            weight: randomInt(1, 20),
            quantity: randomInt(1, 20)
        },
        {
            value: randomInt(1, 20),
            weight: randomInt(1, 20),
            quantity: randomInt(1, 20)
        }
    ];
});

</script>
<style lang="css">
</style>