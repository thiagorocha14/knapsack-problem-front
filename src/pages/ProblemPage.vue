<template>
    <main id="problem">
        <div class="flex flex-col items-start justify-between h-[100vh] w-full pt-20 p-5 pl-7" ref="problem">
            <header>
                <h1 class="text-3xl font-bold text-white">Build Your Knapsack Scenario</h1>
                <p class="text-md mt-2 text-white">
                    Let's solve the problem, to do that we need to setup the products. Enter your list of products, set the weight limit, and watch how the algorithm picks the best combination.
                    After that, set the Knapsack Capacity, click the "Solve!" button, and watch the magic happen.
                     
                </p>
            </header>
            <br>
            <h2 class="text-xl font-bold text-white">Knapsack Capacity</h2>
            <div class="flex flex-row items-center justify-center w-full gap-6">
                <input v-model="knapsackCapacity" id="knapsackCapacity" type="range" class="w-full h-3 bg-neutral-500 range cursor-pointer accent-neutral-200" min="0" max="100" step="1" />
                <span class="text-2xl font-bold text-white">{{ knapsackCapacity }}</span>
            </div>
            <h2 class="text-xl font-bold text-white">Products:</h2>
            <div class="grid grid-cols-5 items-start h-full justify-items-center p-2 gap-5 w-full mt-4">
                <Product class="z-20" v-for="(product, index) in products" :key="product" :product="product" :index="index" />
                <button class="w-64 h-64 rounded-full bg-neutral-300 p-8 shadow-md" @click="addProduct" v-if="products.length < 10">
                    <div class="flex flex-col items-center justify-center h-full">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </button>
            </div>
            <div class="flex flex-row items-center justify-center w-full">
                <button class="bg-black hover:bg-neutral-900 text-white text-2xl font-bold py-8 px-16 rounded" @click="solve">
                    Solve!
                </button>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import GolangApi from '../api/GolangApi';
import JavaApi from '../api/JavaApi';
import NodeApi from '../api/NodeApi';
import PhpApi from '../api/PhpApi';
import PythonApi from '../api/PythonApi';
import Product from '../components/Product.vue';
import { Product as ProductType } from '../types/ProductType';
import { ref, onMounted, onUnmounted } from "vue";

let products = ref<ProductType[]>([]) as any;
let knapsackCapacity = ref(10);
const problem = ref(null) as any;

const handleScroll = () => {
    let scrollValue = window.scrollY;
    let background_black_filter = 100 - (scrollValue * 0.015);

    problem.value.style.background = `rgba(0, 0, 0, ${background_black_filter}%)`;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const solve = async () => {
    const javaApi = new JavaApi();
    const goApi = new GolangApi();
    const phpApi = new PhpApi();
    const pythonApi = new PythonApi();
    const nodeApi = new NodeApi();

    const solutions = await Promise.all([
        javaApi.solve(products.value, Number(knapsackCapacity.value)),
        goApi.solve(products.value, Number(knapsackCapacity.value)),
        phpApi.solve(products.value, Number(knapsackCapacity.value)),
        pythonApi.solve(products.value, Number(knapsackCapacity.value)),
        nodeApi.solve(products.value, Number(knapsackCapacity.value)),
    ]);

    console.log(solutions);
}

const addProduct = () => {
    if (products.value.length >= 10) {
        return;
    }
    products.value.push({
        price: randomInt(1, 20),
        weight: randomInt(1, 20),
        quantity: randomInt(1, 20)
    });
};

onMounted(() => {
    products.value = [
        {
            price: randomInt(1, 20),
            weight: randomInt(1, 20),
            quantity: randomInt(1, 20)
        },
        {
            price: randomInt(1, 20),
            weight: randomInt(1, 20),
            quantity: randomInt(1, 20)
        },
        {
            price: randomInt(1, 20),
            weight: randomInt(1, 20),
            quantity: randomInt(1, 20)
        }
    ];
});

</script>
<style lang="css">
</style>
