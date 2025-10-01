// 代码生成时间: 2025-10-01 16:07:37
      @input="filterItems"
      @keyup.enter="selectItem"
      placeholder="Start typing..."
    />
    <ul v-if="filteredItems.length">
      <li
        v-for="item in filteredItems"
        :key="item"
        @click="selectItem"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 响应式数据
const searchQuery = ref('');
const items = ref(["apple", "banana", "orange", "mango", "grape", "peach"]);
const filteredItems = ref([]);

// 响应用户输入，过滤项
const filterItems = () => {
  filteredItems.value = items.value.filter((item) =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};

// 选择一个项并清除输入
const selectItem = (event) => {
  searchQuery.value = event.target.textContent;
  filteredItems.value = [];
};

// 生命周期钩子
onMounted(() => {
  console.log('Component is mounted.');
});
</script>

<style scoped>
.autocomplete {
  position: relative;
}

.autocomplete ul {
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 10;
}

.autocomplete li {
  padding: 5px 10px;
  cursor: pointer;
}

.autocomplete li:hover {
  background-color: #f0f0f0;
}
</style>
