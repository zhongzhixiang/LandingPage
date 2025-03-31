<template>
    <div class="module_content" v-for="(num, index) in numOptions" :key="index">
        <div class="module_content_detail module_dynamicnumber" id="310" projectid="310" rowid="218" module-index="0"><a
                target="" rel="" class="number-link" style="text-align: center;">
                <div class="number-desc-wrapper" data-aos="zoom-in-up">
                    <div class="number-count module_text_content" onmouseover=""><count-up
                            style="font-size: 54px; color: rgb(111, 111, 111); font-family: 微软雅黑; font-weight: normal; text-decoration: none; font-style: normal;"
                            :end-val="num.num" :options="CountUpOptions"></count-up>
                    </div> <span class="number-unit"
                        style="font-size: 14px; color: rgb(111, 111, 111); font-family: 微软雅黑; font-weight: normal; text-decoration: none; font-style: normal;">{{ num.unit }}</span>
                </div>
                <div class="number-bottom-text"
                    style="font-size: 16px; color: rgb(117, 100, 79); font-family: 微软雅黑; font-weight: normal; text-decoration: none; font-style: normal;">
                    {{ num.desc }}</div>
            </a></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CountUp from 'vue-countup-v3'



const CountUpOptions = ref({
    'enableScrollSpy': true,
    'scrollSpyDelay': 100,
    'scrollSpyOnce': true,
})
const numOptions = ref([
    {
        num: 2002,
        unit: '年',
        desc: '公司成立',
    },
    {
        num: 4000,
        unit: '平方米',
        desc: '建筑面积',
    },
    {
        num: 180,
        unit: '多名',
        desc: '拥有员工',
    },
    {
        num: 10,
        unit: '万件',
        desc: '月出货量',
    },
]

)
</script>
