// 代码生成时间: 2025-10-07 19:19:34
import { ref, reactive, computed, onMounted } from 'vue';

// 响应式数据
const data = reactive([
  { id: 1, name: 'Alice', age: 24, country: 'USA' },
  { id: 2, name: 'Bob', age: 30, country: 'UK' },
  { id: 3, name: 'Charlie', age: 27, country: 'Canada' }
]);

// 表头
const headers = ref(['id', 'name', 'age', 'country']);

// 分隔符
const sortingSeparator = ref(',');

// 当前排序字段
const sortKey = ref('');

// 排序方向
const sortKeyDir = ref(1);

// 计算属性: 排序后的数据
const sortedData = computed(() => {
  return data.sort((a, b) => {
    if (a[sortKey.value] < b[sortKey.value]) {
      return sortKeyDir.value * -1;
    } else if (a[sortKey.value] > b[sortKey.value]) {
      return sortKeyDir.value;
    }
    return 0;
  });
});

// 方法: 排序
function sort(key) {
  if (sortKey.value === key) {
    sortKeyDir.value *= -1;
  } else {
    sortKey.value = key;
    sortKeyDir.value = 1;
  }
}

// 生命周期钩子: 组件挂载后
onMounted(() => {
  console.log("Component mounted");
});
</script>

<style scoped>
/* 添加一些基本的样式 */
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  cursor: pointer;
}
</style>*/