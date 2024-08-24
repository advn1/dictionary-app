<template>
    <div class="mb-5 animation-meaning">
        <h3 class="text-gray-500 dark:text-gray-400 mb-3">Meaning</h3>
    <ul class="ml-[20px] list-disc">
        <li v-for="(meaning, idx) in definitions" :key="idx" class="px-4 mb-3">
            <span>{{ meaning.definition }}</span>
        </li>
    </ul>
    </div>
</template>

<script setup lang="ts">

const {definitions} = defineProps(["definitions"])
console.log(definitions)
</script>

<style scoped>
li::marker {
    color: var(--purple-color)
}
</style>
