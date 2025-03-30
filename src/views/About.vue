<template>
  <div class="swiper-container">
    <!-- 使用 swiper 组件 -->
    <swiper :modules="modules" :slides-per-view="1" :space-between="30" :pagination="{ clickable: true }"
      :navigation="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false }" @swiper="onSwiper"
      @slideChange="onSlideChange" class="my-swiper">
      <!-- 幻灯片内容 -->
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <img :src="slide.image" :alt="slide.title" class="slide-image" />
        </div>
      </swiper-slide>
    </swiper>
  </div>


</template>

<script>
// 导入 Swiper 核心和所需模块
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// 导入 Swiper 样式
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  name: 'SwiperDemo',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    // 幻灯片数据
    const slides = [
      {
        title: 'Slide 1',
        description: 'This is the first slide',
        image: 'https://picsum.photos/800/400?random=1'
      },
      {
        title: 'Slide 2',
        description: 'This is the second slide',
        image: 'https://picsum.photos/800/400?random=2'
      },
      {
        title: 'Slide 3',
        description: 'This is the third slide',
        image: 'https://picsum.photos/800/400?random=3'
      },
      {
        title: 'Slide 4',
        description: 'This is the fourth slide',
        image: 'https://picsum.photos/800/400?random=4'
      },
      {
        title: 'Slide 5',
        description: 'This is the fifth slide',
        image: 'https://picsum.photos/800/400?random=5'
      }
    ]

    // 使用的模块
    const modules = [Autoplay, Pagination, Navigation]

    // Swiper 实例回调
    const onSwiper = (swiper) => {
      console.log('Swiper instance:', swiper)
    }

    // 幻灯片切换回调
    const onSlideChange = () => {
      console.log('Slide changed')
    }

    return {
      slides,
      modules,
      onSwiper,
      onSlideChange
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.my-swiper {
  height: 400px;
}

.slide-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.slide-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
}

/* 自定义分页器样式 */
:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background-color: #ccc;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #007aff;
}

/* 自定义导航按钮样式 */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #9ea7b2;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 20px;
  font-weight: bold;
}
</style>