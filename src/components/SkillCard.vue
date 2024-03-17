<template>

    <div class="card flex flex-col gap-4 bg-neutral-950 relative h-full">

        <div
            class="card-title w-full h-full border border-white/50 rounded-xl absolute top-0 left-0 bg-neutral-950 will-change-transform">
            <div class="relative h-full w-full flex flex-col">

                <div class="flex-1 p-4">
                    <span class="font-medium text-xl">{{ title }}</span>
                </div>

                <div class=" grid items-center justify-end p-2">
                    <span class="icon-[mdi--arrow-right] rotate-45 text-3xl" style="color: white;"></span>
                </div>
            </div>
        </div>

        <div class="card-content p-6 border border-white/50 rounded-xl bg-neutral-900 h-full will-change-transform">
            <div v-for="(item) in items" class="flex items-center gap-4">
                <i :class="item.icon" class=""></i>
                <span class="">{{ item.label }}</span>
            </div>
        </div>

    </div>

</template>

<script setup lang="ts">
import { type PropType } from 'vue';

defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Object as PropType<any>,
        required: true
    }
})

</script>

<style scoped>
.card>* {
    transition-duration: 1000ms;
}

.card-title {
    backface-visibility: hidden;
    transform: rotateY(0deg);
}

.card-content {
    backface-visibility: hidden;
    transform: rotateY(180deg);
}

.card:hover>.card-title {
    transform: rotateY(180deg);
}

.card:hover>.card-content {
    transform: rotateY(360deg);
}
</style>