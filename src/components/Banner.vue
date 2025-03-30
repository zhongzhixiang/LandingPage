<template>
  <div class="banner">
    <img :src="imgSrc" :alt="imgAlt" :style="imgStyle" class="banner-image" />
    <div class="banner-content">
      <h1 class="banner-title">Welcome to Our Website</h1>
      <p class="banner-description">Discover amazing content and features.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
    default: 'https://picsum.photos/800/400?random=1'
  },
  imgAlt: {
    type: String,
    default: 'Banner Image'  // 默认图片描述
  },
  imgStyle: {
    type: Object,
    default: () => ({
      width: '100%',
      height: '320px'
    })
  }
})


</script>

<style></style>