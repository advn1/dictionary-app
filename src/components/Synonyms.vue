<template>
    <h3 class="animation-speech flex flex-wrap text-gray-500 dark:text-gray-400 mb-5 mr-3">
        Synonyms:
        <span v-for="(synonym, idx) in synonyms" :key="idx" class=" font-medium text-[var(--purple-color)] mr-3">
            {{ synonym}}</span
        >
    </h3>
</template>

<script setup lang="ts">
const {synonyms} = defineProps(["synonyms"])
</script>

<style scoped>
h3 span:first-child {
    margin-left: 12px;
}
</style>
