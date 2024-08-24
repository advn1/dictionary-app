<template>
    <div class="flex w-100 justify-end gap-2 items-center">
        <div
            class="h-[20px] w-[40px] rounded-[20px] bg-[var(--switch-container-bg)] relative flex items-center px-1 cursor-pointer"
            @click="toggleTheme"
        >
            <div
                class="absolute w-[14px] h-[14px] bg-white rounded-[50%] transition-all duration-300 ease"
                :class="positionClass"
            ></div>
        </div>
        <i class="bx bx-moon text-2xl"></i>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const { isDark, toggleDark } = defineProps(["isDark", "toggleDark"]);

const pos = ref(isDark);

function toggleTheme() {
    toggleDark();
    pos.value = !pos.value;
}

const positionClass = computed(() =>
    pos.value ? "circle-right" : "circle-left"
);
</script>

<style scoped>
.circle-left {
    transform: translateX(0);
}

.circle-right {
    transform: translateX(120%);
}
</style>
