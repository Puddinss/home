<template>
    <div id="skills" class="w-full min-h-svh flex flex-col justify-center items-center p-8 relative">

        <div class="absolute bottom-0 right-16">
            <span class="font-bold text-9xl bg-clip-text text-transparent"
                style="-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: rgba(255,255,255,0.10)">
                02</span>
        </div>

        <div class="h-scroll-wrapper w-full justify-center flex gap-4 font-bold text-8xl whitespace-nowrap relative"
            style="transform: translateX(0);">

        </div>

        <div class="w-full h-full max-w-4xl flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 p-8">

            <SkillCard title="Languages" :items="languages" />
            <SkillCard title="Frameworks and Libraries" :items="frameworks" />
            <SkillCard title="Data Management" :items="dataManagement" />
            <SkillCard title="Softwares and Others" :items="other" />

        </div>

        <div class="">
            <p>Continuously updating list.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { onMounted, ref, type Ref } from 'vue';
import SkillCard from './SkillCard.vue';

const textWrapper = ref();
var lastScroll = 0;

const getTranslateX = (element: HTMLElement) => {
    var style = window.getComputedStyle(element);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41
}

const scrollText = () => {
    var currentOffset = getTranslateX(textWrapper.value!);

    if (window.scrollY > lastScroll) {
        currentOffset -= 5
    } else {
        currentOffset += 5
    }

    textWrapper.value.style.transform = `translateX(${currentOffset}px)`
    lastScroll = window.scrollY
}

useIntersectionObserver(textWrapper, ([{ isIntersecting }]) => {
    if (isIntersecting) {
        window.addEventListener('scroll', scrollText)
    } else {
        window.removeEventListener('scroll', scrollText)
    }
})

onMounted(() => {
    textWrapper.value = document.querySelector('.h-scroll-wrapper')
    var blackText = document.createElement('h2')
    var whiteText = document.createElement('h2')
    blackText.style.webkitTextStrokeWidth = '1px'
    blackText.style.webkitTextStrokeColor = 'rgba(255,255,255,0.5)'
    blackText.classList.add('bg-clip-text', 'text-transparent')
    blackText.innerText = 'SKILLS'
    whiteText.innerText = 'SKILLS'

    for (let i = 0; i < 10; i++) {
        textWrapper.value?.appendChild(blackText.cloneNode(true))
        textWrapper.value?.appendChild(whiteText.cloneNode(true))
    }


})

const languages = [
    { label: 'HTML', icon: 'devicon-html5-plain' },
    { label: 'CSS', icon: 'devicon-css3-plain' },
    { label: 'Javascript', icon: 'devicon-javascript-plain' },
    { label: 'Typescript', icon: 'devicon-typescript-plain' },
    { label: 'PHP', icon: 'devicon-php-plain' },
    { label: 'Java', icon: 'devicon-java-plain' },
    { label: 'C', icon: 'devicon-c-plain' },
    { label: 'Python', icon: 'devicon-python-plain' },
]

const dataManagement = [
    { label: 'SQL', icon: 'devicon-sqlite-plain' },
    { label: 'MySQL', icon: 'devicon-mysql-plain' },
    { label: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
]

const frameworks = [
    { label: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    { label: 'Vue', icon: 'devicon-vuejs-plain' },
    { label: 'NuxtJS', icon: 'devicon-nuxtjs-plain' },
    { label: 'JQuery', icon: 'devicon-jquery-plain' },
]

const other = [
    { label: 'NodeJS', icon: 'devicon-nodejs-plain' },
    { label: 'Android Studio', icon: 'devicon-androidstudio-plain' },
    { label: 'Photoshop', icon: 'devicon-photoshop-plain' },
    { label: 'StackOverflow (IYKWIM)', icon: 'devicon-stackoverflow-plain' },
]

</script>
