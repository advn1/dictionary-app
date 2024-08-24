<template>
    <div class="flex justify-between items-center gap-4 mb-5">
        <span class="animation-speech font-bold text-lg">{{
            def.partOfSpeech
        }}</span>
        <div
            class="animation-speech w-[100%] h-fit border-b-[1px] bg-gray-400"
        ></div>
    </div>
    <Meaning :definitions="def.definitions" />
    <Synonyms :synonyms="def.synonyms" />
</template>

<script setup lang="ts">
import Meaning from "./Meaning.vue";
import Synonyms from "./Synonyms.vue";

const { def } = defineProps(["def"]);
</script>

<style scoped></style>
