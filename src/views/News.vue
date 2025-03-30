<template>
    <banner :imgSrc="BannerConfig.imgSrc" :imgAlt="BannerConfig.imgAlt" />

</template>

<script setup>
import { ref } from 'vue'
import Banner from '../components/Banner.vue'
const BannerConfig = ref({
    imgSrc: 'https://picsum.photos/800/400?random=2',
    imgAlt: 'News'
})
</script>
