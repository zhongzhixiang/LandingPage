<template>
    <banner :imgSrc="BannerConfig.imgSrc" :imgAlt=Banner.imgAlt />
</template>
<script setup>
import Banner from '../components/Banner.vue'
import { ref } from 'vue'
const BannerConfig = ref({
    imgSrc: "https://picsum.photos/800/400?random=1",
    imgAlt: "Contact",
    imgStyle: {
        width: '100%',
        height: '320px',
    },
})
</script>