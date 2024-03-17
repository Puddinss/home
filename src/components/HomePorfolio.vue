<template>
    <div id="portfolio" class="w-full min-h-svh p-8 flex justify-center relative">
        <div class="absolute bottom-16 left-16">
            <span class="font-bold text-9xl bg-clip-text text-transparent"
                style="-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: rgba(255,255,255,0.10)">
                03</span>
        </div>

        <div class="max-w-7xl w-full flex flex-col md:grid md:grid-cols-12 gap-4 p-8">

            <div class="col-span-5 grid items-center">
                <p class="text-4xl font-medium">Some of my works</p>
            </div>

            <div class="col-span-7 w-full flex gap-2 flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-1">

                <div v-for="item in portfolio" class="h-64 md:h-auto md:row-span-1 md:col-span-1 grid">

                    <a v-if="item.available" :href="item.url" class="w-full h-full relative group grid overflow-hidden">
                        <img :src="item.img" alt="" class="w-full h-full object-cover">

                        <div class="absolute top-0 p-4 grid grid-rows-6 w-full h-full
                            bg-neutral-950/55
                            md:opacity-0 md:group-hover:opacity-100 md:group-hover:bg-neutral-950/85 md:backdrop-blur-none md:group-hover:backdrop-blur-sm 
                            duration-150">
                            <div class="row-span-1 grid justify-end">
                                <span class="icon-[mdi--arrow-right] -rotate-45 text-3xl" style="color: white;"></span>
                            </div>
                            <div class="row-span-1 ">
                                <span class="font-medium">{{ item.title }}</span>
                            </div>
                            <div class="row-span-4 text-sm ">
                                <p class="line-clamp-6">{{ item.text }}</p>
                            </div>
                        </div>
                    </a>

                    <div v-else class="w-full h-full relative group grid overflow-hidden">
                        <img src="/work_placeholder.jpg" alt="" class="w-full h-full object-cover">

                        <div
                            class="absolute top-0 p-4 grid w-full h-full opacity-100 bg-neutral-950/75 backdrop-blur-sm place-content-center">
                            <span>Currently not available</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>


    </div>
</template>

<script setup lang="ts">

const portfolio = [
    {
        title: 'Work1',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        url: '',
        img: '/work.jpg',
        available: true,
    },
    {
        title: '',
        text: '',
        url: '',
        img: '',
        available: false,
    },
    {
        title: 'Work3',
        text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.',
        url: '',
        img: '/work.jpg',
        available: false,
    },
    {
        title: 'Work4',
        text: 'The quick, brown fox jumps over a lazy dog.',
        url: '',
        img: '/work.jpg',
        available: false,
    },
]

</script>