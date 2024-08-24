<template>
    <div class="flex w-[100%] justify-between items-center mb-4 tablet:mb-[35px]">
        <i><svg class="w-[30px] h-[30px] tablet:w-[40px] tablet:h-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 38"><g fill="none" fill-rule="evenodd" stroke="#838383" stroke-linecap="round" stroke-width="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/><path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8"/><path d="M11 9h12"/></g></svg></i>
        <div class="flex items-center gap-4 h-[20px]">
            <FontDropdown/>
            <div class="w-fit h-[100%] border-l-[1px] bg-gray-400"></div>
            <ThemeSwitcher :isDark="isDark" :toggleDark="toggleDark" />
        </div>
    </div>
</template>

<script setup lang="ts">
import FontDropdown from "./FontDropdown.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const { isDark, toggleDark } = defineProps(["isDark", "toggleDark"]);

</script>

<style scoped></style>
