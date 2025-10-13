// 代码生成时间: 2025-10-14 03:33:19
import { ref, onMounted } from 'vue';

export default {
  name: 'MockDataGenerator',
  setup() {
    // 响应式数据
    const mockData = ref(null);
    
    // Mock data 示例
    const mockDataExample = () => {
      return {
        name: 'John Doe',
        age: 30,
        address: '123 Main St',
        email: 'johndoe@example.com'
      };
    };
    
    // 生成 Mock 数据
    const generateData = () => {
      mockData.value = mockDataExample();
    };
    
    // 生命周期钩子: 组件挂载时生成 Mock 数据
    onMounted(() => {
      mockData.value = mockDataExample();
    });
    
    return {
      mockData,
      generateData
    };
  }
};
</script>
