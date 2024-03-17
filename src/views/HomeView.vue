<template>
    <div class="w-full overflow-x-hidden">

        <div class="grain-overlay w-full h-full fixed"></div>

        <div class="w-full bg-neutral-950 text-white">
            <HomeHero />
            <HomeAbout />
            <HomeSkills />

            <div class="w-full h-[1px] px-8">
                <div class="w-full h-full bg-neutral-50/25 "></div>
            </div>

            <HomePorfolio />

            <div class="w-full bg-neutral-900 grid place-content-center">
                <div class="w-full max-w-4xl p-16 grid gap-2">
                    <p class="italic text-center">“There is no end to education. It is not that you read a book, pass an
                        examination,
                        and finish with
                        education. The whole of life, from the moment you are born to the moment you die, is a process
                        of
                        learning.” <span class="font-medium not-italic">— Jiddu Krishnamurti</span></p>
                </div>
            </div>

            <HomeContacts />

            <div class="w-full h-[1px] px-8">
                <div class="w-full h-full bg-neutral-50/25 "></div>
            </div>

            <div class="w-full grid place-content-center">
                <div class="max-w-4xl p-8 w-full">
                    <p>{{ new Date().getFullYear() }} © Puddinss</p>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import HomeAbout from '@/components/HomeAbout.vue';
import HomeContacts from '@/components/HomeContacts.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomePorfolio from '@/components/HomePorfolio.vue';
import HomeSkills from '@/components/HomeSkills.vue';

</script>

<style>
.grain-overlay {
    @apply bg-[url('/grain-overlay.gif')] pointer-events-none;
    opacity: 0.05;
    z-index: 9999;
}
</style>