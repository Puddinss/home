<template>
    <div class="w-full h-svh overflow-hidden">
        <div class="w-full h-full p-16 relative">

            <div class="absolute bottom-0 left-0 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:bottom-auto duration-200 
                font-anton p-8 flex flex-col gap-8 w-full max-w-3xl">
                <div class="flex flex-col gap-2">
                    <p class="duration-200 text-5xl md:text-7xl">HELLO, I AM</p>
                    <p class="duration-200 text-6xl md:text-8xl md:self-center">SIMONE PUDDU.</p>
                </div>

                <p class="font-clash-display md:self-center">
                    Freelance <span class="font-medium">
                        Full Stack Web & Mobile Developer</span>, based in Italy.
                </p>
            </div>

            <div class="absolute top-0 right-0 flex flex-col md:flex-row md:gap-4 p-8 font-clash-display">
                <a v-for="(link, key) in links" :key="key" :href=link.url
                    class="flex gap-3 group opacity-70 hover:opacity-100 duration-150">
                    <span class="font-thin w-4 group-hover:-translate-x-2 duration-150">0{{ key + 1 }}.</span>
                    <span class="group-hover:-translate-x-2 duration-150">{{ link.label }}</span>
                </a>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const links = [
    {
        label: 'About me',
        url: '#about',
    },
    {
        label: 'Skills',
        url: '#skills',
    },
    {
        label: 'Works',
        url: '#portfolio',
    },
    {
        label: 'Contacts',
        url: '#contacts',
    },
]

onMounted(() => {

})

</script>