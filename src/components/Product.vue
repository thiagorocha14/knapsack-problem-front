
<template>
    <div class="w-72 h-72 bg-gray-300 rounded-lg p-4 shadow-md">
        <h2 class="text-2xl font-bold mb-4">Product Details</h2>
        <div class="mb-3">
            <label for="value" class="block text-sm font-medium text-gray-700">Value</label>
            <input v-model="product.value" id="value" type="number" class="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm sm:text-sm" />
        </div>
        <div class="mb-3">
            <label for="weight" class="block text-sm font-medium text-gray-700">Weight</label>
            <input v-model="product.weight" id="weight" type="number" class="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm sm:text-sm" />
        </div>
        <div>
            <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity</label>
            <input v-model="product.quantity" id="quantity" type="number" class="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm sm:text-sm" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, PropType } from 'vue';
import { Product } from '../types/ProductType';

const props = defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true
    }
});
const emit = defineEmits(['update:product']);

const updateProduct = (key: string, value: any) => {
    emit('update:product', { ...props.product, [key]: value });
};
const product = ref<Product>(props.product) as any;

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const key = target.id;
    updateProduct(key, value);
};




</script>
<style lang="">

</style>