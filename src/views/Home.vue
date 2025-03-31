<template>


    <div class="swiper-container">
        <swiper :modules="modules" :space-between="30" :slides-per-view="1" :pagination="{ clickable: true }"
            :navigation="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false }" @swiper="onSwiper"
            @slideChage="onSlideChange" class="my-swiper">
            <!-- 幻灯片内容 -->
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="silde-content">

                    <img class="slide-image" :src="`/images/${slide.image}`" :alt="slide.title" />
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="h-about">
        <div class="about-content-col">
            <div class="about-content" data-aos="fade-in">
                <el-text class="about-title">{{ $t('message.About') }}</el-text>
                <el-text class="mx-1 about-content-text" tag="p">{{ $t('message.Content') }}</el-text>
            </div>
            <div class="about-button" data-aos="slide-left" data-aos-duration="500">
                <el-button size="large" round tag="a" href="/about">{{ $t('message.More') }} > ></el-button>
            </div>
        </div>
        <div class="about-img" data-aos="zoom-in-up">
            <img src="/images/office.jpg" alt="office" />
        </div>
    </div>
    <div class="h-data">
        <num-content />
    </div>
    <div class="h-products">

    </div>
</template>
<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { onMounted, ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'

import NumContent from '/src/components/NumContent.vue'
//import homeImg1 from '/src/assets/images/155.jpg'

onMounted(() => {
    AOS.init({
        duration: 800,       // 动画持续时间
        easing: 'ease-out',  // 缓动函数
        once: true,           // 是否只执行一次
        offset: 120,            // 提前120px触发
        disable: window.innerWidth < 768 // 在小屏幕上禁用
    });
})



const slides = [
    {
        title: 'Slide 1',
        description: 'This is the first slide',
        image: '155.jpg'
    },
    {
        title: 'Slide 2',
        description: 'This is the second slide',
        image: '183.jpg'
    },
    {
        title: 'Slide 3',
        description: 'This is the third slide',
        image: '187.jpg'
    },
    {
        title: 'Slide 4',
        description: 'This is the fourth slide',
        image: '363.jpg'
    }, {
        title: 'Slide 5',
        description: 'This is the fifth slide',
        image: '669.jpg'
    }
]
//使用的模块
const modules = [Autoplay, Pagination, Navigation]

//Swiper 实例回调
const onSwiper = (swiper) => {
    console.log('Swiper instance:', swiper)
}

// 幻灯片切换回调
const onSlideChange = () => {
    console.log('Slide changed')
}

document.addEventListener('aos:in', () => {
    console.log('aos:in')
    countUp.start()
})

</script>
<style scoped lang="scss">
* {
    box-sizing: border-box;
}

.swiper-container {
    box-sizing: border-box;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

.my-swiper {
    height: 400px;
}

.slide-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.slide-image {
    width: 100%;
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
    color: #007aff;
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



//about us
.h-about {
    display: flex;
    width: 100%;
    height: 400px;
    max-width: 100%;
    padding: 3.54167vw 10.9718% 0vw 11.9122%;
    margin: 0 auto;
    overflow: hidden;

    .about-img {
        width: 58%;
        margin-left: 1em;

        img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            object-fit: cover;
        }
    }

    .about-content-col {
        text-align: left;
        width: 42%;

        .about-content {
            .about-title {
                display: block;
                font-size: 1.2em;
                color: rgb(232, 122, 35);
                font-weight: bold;
                position: relative;

            }

            .about-title::after {
                content: '';
                border-bottom: 2px solid rgb(232, 122, 35);
                position: absolute;
                width: 100%;
                bottom: -0.2em;
                left: 0;

            }

            .about-content-text {
                margin: 1em auto;
                text-indent: 2em;
                line-height: 2em;
            }
        }

        .el-button {
            width: 50%;
        }

    }
}

.h-data {
    display: flex;
    justify-content: space-around;
    margin: 1vw auto;
    flex: 1;

    .module_content {
        width: 100%;
        position: relative;
    }

    .module_content:not(:last-child)::after {
        content: '';
        border-right: 1px solid #CCC;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
    }
}
</style>