<template>
    <main id="about">
        <div class="flex items-center justify-start h-screen w-full pt-16">
            <div class="h-full w-full p-5 bg-cyan-950 bg-opacity-95 text-white" ref="about">
                <section class="ml-2" ref="textAbout" id="textAbout">
                    <header class="flex flex-row items-center justify h-16">
                        <h1 class="text-4xl font-bold w-3/6">What is the Knapsack Problem?</h1>
                        <div class="w-full">
                            <img class="w-[36px] h-[36px] bouncing" src="../assets/img/logo.png" alt="knapsack problem">
                        </div>
                    </header>
                    <p class="text-xl mt-5 text-justify">
                        The Knapsack Problem is a classic optimization problem in computer science and mathematics.
                        It is a combinatorial problem that models a scenario where you have a limited capacity knapsack (or bag) and a set of items,
                        each with a certain value and weight. The goal is to determine the optimal subset of items to include in the knapsack so
                        that the total value is maximized without exceeding the capacity.</p>
                    <p class="text-xl mt-5 text-justify">
                        The problem can be formally defined as follows:
                        Given a set of products, and each product has a weight, value and quantity, and you have a knapsack with a maximum weight capacity,
                        the objective is to select a subset of products such that the total weight does not exceed the capacity and the total value is maximized.
                        The Knapsack Problem can be divided into different variations, including:
                        <ul class="list-disc ml-10 mt-5">
                            <li class="text-xl">0/1 Knapsack Problem: Each item can either be included or excluded from the knapsack.</li>
                            <li class="text-xl">Fractional Knapsack Problem: Items can be broken into smaller parts, allowing for fractional inclusion.</li>
                            <li class="text-xl">Bounded Knapsack Problem: Each item has a limited quantity that can be included in the knapsack.</li>
                            <li class="text-xl">Unbounded Knapsack Problem: There is no limit on the number of times an item can be included in the kna psack.</li>
                        </ul>
                    </p>
                    <p class="text-xl mt-5 text-justify">
                        This web application focuses on the Bounded Knapsack Problem, where each item has a limited quantity that can be included in the knapsack.
                        Allowing you to create your own products and add them to the list of products, You can costumize the weight,
                        value and quantity of each product, and the maximum weight of the knapsack. This way you can test the algorithm with your own products and see how it performs.
                    </p>
                    <p class="text-xl mt-5 text-justify">
                        But not only that, this app run the problem in many different programming languages, allowing you to see how the algorithm is implemented in different languages.
                        And also, you can see the time it takes to run the algorithm in each language. This way you can see how the performance of the algorithm changes with the language and his framework.
                        The languages supported are:
                        <ul class="mt-16 w-full grid grid-cols-5 items-center justify-items-center gap-y-5">
                            <img class="w-[150px] inline-block mr-2" src="../assets/img/logos/golang.png" alt="Golang logo">
                            <img class="w-[150px] inline-block mr-2" src="../assets/img/logos/java.png" alt="Java logo">
                            <img class="w-[150px] inline-block mr-2" src="../assets/img/logos/node.png" alt="Node logo">
                            <img class="w-[150px] inline-block mr-2" src="../assets/img/logos/php.png" alt="PHP logo">
                            <img class="w-[150px] inline-block mr-2" src="../assets/img/logos/python.png" alt="Python logo">
                            <li class="text-xl">
                                Go
                            </li>
                            <li class="text-xl">
                                Java
                            </li>
                            <li class="text-xl">
                                Node
                            </li>
                            <li class="text-xl">
                                PHP
                            </li>
                            <li class="text-xl">
                                Python
                            </li>
                        </ul>
                    </p>
                </section>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const about = ref(null) as any;
const textAbout = ref(null) as any;

const handleScroll = () => {
    let scrollValue = window.scrollY;
    const left = -100 + (scrollValue * 0.084);
    textAbout.value.style.left = `${left}%`;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<style lang="css">
#textAbout {
    position: relative;
    left: -100%;
}
@keyframes bounceAndRotateAcrossPage {
    0% {
        transform: translate(0%, 0) rotate(0deg);
    }
    2% {
        transform: translate(50%, -40px) rotate(45deg);
    }
    4% {
        transform: translate(100%, 0) rotate(90deg);
    }
    6% {
        transform: translate(150%, -30px) rotate(135deg);
    }
    8% {
        transform: translate(200%, 0) rotate(180deg);
    }
    10% {
        transform: translate(250%, -25px) rotate(225deg);
    }
    12% {
        transform: translate(300%, 0) rotate(270deg);
    }
    14% {
        transform: translate(350%, -20px) rotate(315deg);
    }
    16% {
        transform: translate(400%, 0) rotate(360deg);
    }
    18% {
        transform: translate(450%, -15px) rotate(405deg);
    }
    20% {
        transform: translate(500%, 0) rotate(450deg);
    }
    22% {
        transform: translate(550%, -12px) rotate(495deg);
    }
    24% {
        transform: translate(600%, 0) rotate(540deg);
    }
    26% {
        transform: translate(650%, -10px) rotate(585deg);
    }
    28% {
        transform: translate(700%, 0) rotate(630deg);
    }
    30% {
        transform: translate(750%, -8px) rotate(675deg);
    }
    32% {
        transform: translate(800%, 0) rotate(720deg);
    }
    100% {
        transform: translate(2500%, 0) rotate(2250deg);
    }
}

.bouncing {
    position: relative;
    animation: bounceAndRotateAcrossPage 15s infinite linear;
}


</style>