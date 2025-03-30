<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '/src/components/LanguageSwitcher.vue'
const activeIndex = ref('1')
const elRouter = ref(true)
const { locale } = useI18n()
console.log(locale)
</script>

<template>
  <div id="app">


    <div class="common-layout">
      <el-container>
        <el-header>

          <el-menu class="nav" mode="horizontal" :ellipsis="false" :default-active="activeIndex" :router="elRouter">
            <el-menu-item class="logo" index="/">
              <img src="https://www.szkjjs.com/static/upload/image/20220411/1649678848527666.png" alt="科建装饰">
            </el-menu-item>
            <el-menu-item index="/">{{ $t('message.Home') }}</el-menu-item>
            <el-menu-item index="/news">{{ $t('message.News') }}</el-menu-item>
            <el-menu-item index="/Product">{{ $t('message.Products') }}</el-menu-item>
            <el-menu-item index="/About">{{ $t('message.About') }}</el-menu-item>
            <el-menu-item index="/Contact">{{ $t('message.Contact') }}</el-menu-item>
            <language-switcher />
          </el-menu>

        </el-header>
        <el-main>
          <router-view />
        </el-main>

        <el-footer class="footer">
          <div class="footer-content">
            <ul class="content-nav">
              <li>
                <p>关于我们</p>
                <span>企业概况</span>
                <span>企业文化</span>
                <span>荣誉资质</span>
                <span>发展历程</span>
              </li>
              <li>
                <p>产品中心</p>
                <span>产品展示</span>
                <span>产品分类</span>
              </li>
              <li>
                <p>新闻中心</p>
                <span>公司新闻</span>
                <span>行业资讯</span>
              </li>
              <li>
                <p>联系我们</p>
                <span>联系方式</span>
                <span>在线留言</span>
              </li>
            </ul>
          </div>
          <div class="copyright">
            <span>Copyright © Dongguan Tongfa Knitting Clothing Manufacture Co., Ltd</span>
          </div>
        </el-footer>
      </el-container>
    </div>

  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;
}

.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  height: 100%;

  p {
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
  }

  &-content {
    margin: 0 auto;
    color: #666;
    width: 100%;

    // overflow: hidden;
    background-color: #000;
    background-size: cover;
  }

  .content-nav {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.8em;
      font-size: 0.8em;
    }

  }

  .copyright {
    background-color: #353535;
    text-align: center;
    color: #999;
    padding: 0.5em 0;
    font-size: 0.8rem;
  }
}
</style>
