<template>
  <div class="app">
    <header class="hero">
      <h1 data-aos="fade-down">数字增长动画演示</h1>
      <p data-aos="fade-down" data-aos-delay="200">滚动页面查看效果</p>
      <div class="scroll-hint" data-aos="fade-up" data-aos-delay="400">
        <span>向下滚动</span>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" fill="currentColor" />
        </svg>
      </div>
    </header>

    <main class="main-content">
      <!-- 第一组数据 -->
      <section class="stats-section" data-aos="fade-up">
        <h2>核心业务指标</h2>
        <div class="stats-grid">
          <div class="stat-card" v-for="(stat, index) in stats1" :key="'stat1-' + index">
            <CountUp class="stat-number" :endVal="stat.value" :options="stat.options" :startOnMount="false"
              @ready="handleReady" ref="countupRefs" />
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </section>

      <!-- 分隔内容 -->
      <div class="content-block" data-aos="fade-up">
        <h3>我们的优势</h3>
        <p>领先的技术与专业的团队为您提供卓越服务</p>
      </div>

      <!-- 第二组数据 -->
      <section class="stats-section dark" data-aos="fade-up">
        <h2>年度增长数据</h2>
        <div class="stats-grid">
          <div class="stat-card" v-for="(stat, index) in stats2" :key="'stat2-' + index">
            <CountUp class="stat-number" :endVal="stat.value" :options="stat.options" :startOnMount="false"
              @ready="handleReady" ref="countupRefs" />
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer" data-aos="fade-up">
      <p>© {{ new Date().getFullYear() }} 数字动画演示项目</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CountUp from 'vue-countup-v3';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 统计数据配置
const stats1 = ref([
  {
    value: 1250,
    label: '全球客户',
    options: {
      duration: 2,
      separator: ',',
      enableScrollSpy: true,
      scrollSpyOnce: true
    }
  },
  {
    value: 98.7,
    label: '客户满意度',
    options: {
      duration: 2.5,
      decimalPlaces: 1,
      suffix: '%',
      enableScrollSpy: true,
      scrollSpyOnce: true
    }
  },
  {
    value: 42,
    label: '专业团队',
    options: { duration: 1.8, enableScrollSpy: true, scrollSpyOnce: true }
  },
  {
    value: 24,
    label: '服务国家',
    options: { duration: 2.2, enableScrollSpy: true, scrollSpyOnce: true }
  }
]);

const stats2 = ref([
  {
    value: 3560000,
    label: '年度营收',
    options: {
      duration: 2.5,
      prefix: '¥',
      separator: ',',
      enableScrollSpy: true,
      scrollSpyOnce: true
    }
  },
  {
    value: 4.9,
    label: '平均评分',
    options: {
      duration: 2,
      decimalPlaces: 1,
      enableScrollSpy: true,
      scrollSpyOnce: true
    }
  },
  {
    value: 275,
    label: '业绩增长',
    options: {
      duration: 2.3,
      suffix: '%',
      enableScrollSpy: true,
      scrollSpyOnce: true
    }
  },
  {
    value: 78,
    label: '新客户',
    options: {
      duration: 1.5,
      suffix: '家',
      enableScrollSpy: true,
      scrollSpyOnce: true
    }
  }
]);

const countupRefs = ref([]);

// 处理CountUp实例准备就绪
const handleReady = (instance) => {
  // 可以在这里存储实例或执行其他操作
};

// 初始化AOS并配置滚动触发
onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-quad',
    once: true,
    offset: 120,
    disable: window.innerWidth < 768 // 在小屏幕上禁用
  });
});
</script>

<style>
/* 基础样式 */
:root {
  --primary-color: #6e8efb;
  --secondary-color: #a777e3;
  --text-color: #333;
  --text-light: #666;
  --bg-light: #f9f9f9;
  --dark-bg: #2c3e50;
  --dark-text: #ecf0f1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 头部样式 */
.hero {
  background: linear-gradient(135deg,
      var(--primary-color),
      var(--secondary-color));
  color: white;
  text-align: center;
  padding: 120px 20px 100px;
  position: relative;
  overflow: hidden;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
}

.scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

/* 主要内容区域 */
.main-content {
  flex: 1;
}

.stats-section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.stats-section.dark {
  background-color: var(--dark-bg);
  color: var(--dark-text);
}

.stats-section h2 {
  text-align: center;
  margin-bottom: 60px;
  font-size: 2rem;
  position: relative;
}

.stats-section h2::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 15px auto 0;
  border-radius: 2px;
}

.stats-section.dark h2::after {
  background: var(--secondary-color);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  justify-content: center;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 30px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.stats-section.dark .stat-card {
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.stat-number {
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 10px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-section.dark .stat-number {
  color: var(--secondary-color);
}

.stat-label {
  font-size: 1.1rem;
  color: var(--text-light);
}

.stats-section.dark .stat-label {
  color: var(--dark-text);
  opacity: 0.8;
}

.content-block {
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: center;
}

.content-block h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--primary-color);
}

/* 页脚样式 */
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 30px;
  margin-top: 60px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero {
    padding: 100px 20px 80px;
  }

  .hero h1 {
    font-size: 2.2rem;
  }

  .stats-section {
    padding: 60px 20px;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .stat-number {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
