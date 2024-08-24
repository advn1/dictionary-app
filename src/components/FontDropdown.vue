<template>
    <div @click.prevent="hideDropDown = !hideDropDown" class="flex gap-4 w-[100%] items-center cursor-pointer">
        <div class="flex flex-col">
            <span class=" font-mono">{{refFont}}</span>
            <ul :class="{hidden: hideDropDown}" class=" mt-3 bg-white shadow-2xl dark:shadow-sm dark:shadow-[#b01ce6] dark:bg-black rounded-lg px-3 absolute top-[80px]">
                <div class="px-1 py-1" @click.prevent="changeFont(`Sans`)">Sans</div>
                <div class="px-1 py-1" @click.prevent="changeFont(`Serif`)">Serif</div>
                <div class="px-1 py-1" @click.prevent="changeFont(`Mono`)">Mono</div>
            </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6"/></svg>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const setFont = (font: string) => localStorage.setItem("font", JSON.stringify(font))

const storedFont = localStorage.getItem("font");
const refFont = ref(storedFont ? JSON.parse(storedFont) : "Sans");
document.querySelector("html")?.setAttribute("font", refFont.value)

const hideDropDown = ref(true)

function changeFont(font: string) {
    setFont(font)
    refFont.value = font
    document.querySelector("html")?.setAttribute("font", font)
}
</script>

<style scoped>
/* ul {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
} */
</style>
