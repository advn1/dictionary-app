<template>
    <div class="w-screen py-[15px] px-[20px] max-w-3xl tablet:py-[30px]">
        <Header :isDark="isDark" :toggleDark="toggleDark" />
        <Search :fetchData="fetchData" :updateWordData="updateWordData" />
        <div v-if="wordData.length > 0">
            <WordHeader
                :word="wordData[0].word"
                :phonetic="wordData[0].phonetic"
                :audioLink="audioLink"
            />
            <div>
                <DefinitionSection
                    v-for="(def, idx) in wordData[0].meanings"
                    :key="`${wordData[0].id}-${wordData[0].word}`"
                    :def="def"
                />
                <hr class="mb-3" />
                <SourceLink :srcLink="wordData[0].sourceUrls[0]" />
            </div>
        </div>
        <div v-else-if="!showNotFound" class="flex items-center justify-center">
            <LoadingSpin/>
        </div>
        <div v-else-if="showNotFound" class="flex items-center justify-center">
            <NotFound/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import WordHeader from "./components/WordHeader.vue";
import SourceLink from "./components/SourceLink.vue";
import DefinitionSection from "./components/DefinitionSection.vue";
import { ref, computed, onMounted } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import {v4 as uuidv4} from "uuid"
import LoadingSpin from "./components/LoadingSpin.vue";
import NotFound from "./components/NotFound.vue";
interface Phonetic {
    text: string;
    audio: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Array<Object>;
}

interface WordData {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    sourceUrls: Array<string>;
    id: string
}

const wordData = ref<WordData[]>([]);
const showNotFound = ref(false)

const audioLink = computed(() => {
    if (wordData.value.length > 0) {
        const phonetic = wordData.value[0].phonetics.find(
            (el) => el.audio.length > 0
        );
        return phonetic ? phonetic.audio : null;
    }
    return null;
});

onMounted(async () => {
    await fetchData("keyboard");
});

const isDark = useDark({
    selector: "html",
    attribute: "theme",
    valueDark: "custom-dark",
    valueLight: "custom-light",
    disableTransition: false,
});
const toggleDark = useToggle(isDark);


function updateWordData(data: WordData[]) {
    wordData.value = data;
    wordData.value[0].id = uuidv4()
}

async function fetchData(word: string) {
    wordData.value = []
    const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (!response.ok) {
        showNotFound.value = true
        return
    }
    const data = await response.json();
    if (data.title) {
        showNotFound.value = true
        return
    }
    showNotFound.value = false
    updateWordData(data);
}
</script>

<style>
:root {
    --purple-color: #a543ee;
    --dark-search-bg: #1f1f1f;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

[theme="custom-dark"] {
    background-color: black;
    color: white;
    --switch-container-bg: rgb(149, 48, 243);
    --transform-circle: 30px;
}

[theme="custom-light"] {
    background-color: white;
    color: black;
    --switch-container-bg: rgba(117, 117, 117, 255);
    --transform-circle: 0px;
}

[font="Sans"] {
    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}

[font="Serif"] {
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

[font="Mono"] {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

}

.animation-speech,
.animation-meaning {
    animation-timing-function: ease;
}

.animation-speech {
    animation-name: slideToTopSpeech;
    animation-duration: 0.8s;
}

.animation-meaning {
    animation-name: slideToTopMeaning;
    animation-duration: 0.8s;
}

@keyframes slideToTopSpeech {
    from {
        transform: translateY(40px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slideToTopMeaning {
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
}
</style>
