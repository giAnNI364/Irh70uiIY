// 代码生成时间: 2025-10-03 02:47:18
import { ref } from 'vue';

// 响应式数据
const originalData = ref('');
const maskedData = ref('');

// 生命周期钩子 - 组件挂载后
onMounted(() => {
  console.log('Component mounted!');
});

// 数据脱敏函数
function maskData() {
  if (originalData.value) {
    const masked = originalData.value.replace(/(\d{3})\d+/, '$1***');
    maskedData.value = masked;
  }
}

</script>

<template>
  <div>
    <!-- 原始数据输入框 -->
    <input type="text" v-model="originalData" placeholder="Enter original data" />

    <!-- 脱敏按钮 -->
    <button @click="maskData">Mask Data</button>

    <!-- 脱敏后数据显示 -->
    <div v-if="maskedData">Masked Data: {{ maskedData }}</div>
  </div>
</template>
