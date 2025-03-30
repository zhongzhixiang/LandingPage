<template>
    <el-dropdown @command="changeLanguage" trigger="click">
        <el-button type="primary">
            {{ $t('message.changeLanguage') }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="zh-CN">{{ $t('message.chinese') }}</el-dropdown-item>
                <el-dropdown-item command="en">{{ $t('message.english') }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ArrowDown } from '@element-plus/icons-vue'

const { locale } = useI18n()

const changeLanguage = (lang) => {
    locale.value = lang
    localStorage.setItem('locale', lang) // 保存语言偏好
}
</script>