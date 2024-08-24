<template>
    <div class="w-[100%] flex justify-between items-center mb-5">
        <div class="flex flex-col">
            <h1 class=" text-3xl tablet:text-5xl font-semibold mb-2">{{word}}</h1>
            <h3 class=" text-2xl text-[var(--purple-color)] font-medium">{{phonetic}}</h3>
        </div>
        <svg
        @click="playAudio"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 75 75"
            width="45px"
            height="45px"
            >
            <g fill="#A445ED" fill-rule="evenodd">
                <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                <path d="M29 27v21l21-10.5z" />
            </g>
        </svg>
    </div>
</template>

<script setup lang="ts">
const {word, phonetic, audioLink} = defineProps(["word", "phonetic", "audioLink"])
const audio = new Audio(audioLink)

function playAudio() {
    if (!audioLink) return
    audio.play()
}

</script>

<style scoped></style>
