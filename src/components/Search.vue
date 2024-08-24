<template>
    <input
        @change="updateWord"
        @click="showBorder = !showBorder"
        @keypress="onEnter"
        class="h-[64px] px-5 text-xl focus:border-2 focus:border-[var(--purple-color)] !important dark:text-white caret-[var(--purple-color)] font-semibold outline-none text-black bg-gray-200 dark:bg-[var(--dark-search-bg)] w-[100%] rounded-lg"
        type="text"
        v-model="word"
    />
    <svg
        class="relative left-calc-icon-left top-[-40px]"
        @click.prevent="fetchData(word)"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
    >
        <path
            fill="none"
            stroke="#A445ED"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
        />
    </svg>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    fetchData: (query: string) => void
}>();

const word = ref("");
const showBorder = ref(false);

function updateWord(e: Event) {
    word.value = (e.target as HTMLInputElement).value;
}

function onEnter(e: KeyboardEvent) {
    if (e.key === 'Enter') {
        props.fetchData(word.value);
    }
}
</script>

<style scoped></style>
