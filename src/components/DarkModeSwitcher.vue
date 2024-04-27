<template>
    <div class="ml-4 relative cursor-pointer" @click="changeTheme()">
        <input class="
            peer/input
            block
            bg-switcher
            font-serif
            text-base
            rounded-xl
            shadow-md
            outline-none
            relative w-[3em] h-[1.5em]
            appearance-none cursor-pointer
            transition-colors
            after:block after:absolute after:content-[''] after:shadow-sm after:bg-white after:rounded-full
            after:top-[0.125em] after:left-[0.125em] after:w-[1.25em] after:h-[1.25em]
            after:transition-transform
            checked:after:translate-x-[1.5em] checked:after:bg-black
            "
        type="checkbox" name="switcher" id="switcher" role="switch" v-model="dark">
        <!-- SUN -->
        <svg class="block
                    absolute
                    top-[0.275em]
                    right-[0.275em]
                    w-[1em] h-[1em]
                    transition-transform
                    opacity-100
                    peer-checked/input:opacity-0
                    peer-checked/input:translate-x-[-0.75em]
                    peer-checked/input:scale-75
                    peer-checked/input:rotate-[30deg]
                    "
                viewBox="0 0 12 12" width="14px" height="14px" aria-hidden="true">
            <g fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round">
                <circle cx="6" cy="6" r="2" />
                <g stroke-dasharray="1.5 1.5">
                    <polyline points="6 10,6 11.5" transform="rotate(0,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(45,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(90,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(135,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(180,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(225,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(270,6,6)" />
                    <polyline points="6 10,6 11.5" transform="rotate(315,6,6)" />
                </g>
            </g>
        </svg>
        <!-- MOON -->
        <svg class="block
                    opacity-0
                    absolute
                    top-[0.275em]
                    right-[0.275em]
                    w-[1em] h-[1em]
                    translate-x-[-0.75em]
                    scale-75
                    rotate-[30deg]
                    transition-transform
                    peer-checked/input:opacity-100
                    peer-checked/input:translate-x-[-1.5em]
                    "
        viewBox="0 0 12 12" width="14px" height="14px" aria-hidden="true">
            <g fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="round" transform="rotate(-45,6,6)">
                <path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z"/>
            </g>
        </svg>
    </div>
</template>
<script lang="ts">

export default {
    name: 'DarkModeSwitcher',
    data() {
        return {
            dark: false
        }
    },
    mounted() {
        this.dark = localStorage.getItem('dark') === 'true'
    },
    methods: {
        changeTheme() {
            this.dark = !this.dark
            localStorage.setItem('dark', String(this.dark));
        }
    },
    watch: {
        dark() {
            if (this.dark) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }
}
</script>
<style>

</style>