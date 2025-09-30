// 代码生成时间: 2025-09-30 20:34:34
import { reactive, onMounted } from 'vue';

// Define reactive data structure
const licenseData = reactive([]);
const newLicense = reactive({
  id: 0,
  name: '',
  licenseKey: '',
  expiresOn: ''
});

// Function to add a new license
function addLicense() {
  newLicense.id = licenseData.length + 1;
  licenseData.push({ ...newLicense });
  newLicense.name = '';
  newLicense.licenseKey = '';
  newLicense.expiresOn = '';
}

// Function to delete a license
function deleteLicense(id) {
  const index = licenseData.findIndex(license => license.id === id);
  if (index > -1) {
    licenseData.splice(index, 1);
  }
}

// Lifecycle hook to initialize data when component is mounted
onMounted(() => {
  // Initialize with sample data or fetch from an API
  licenseData.push({
    id: 1,
    name: 'License 1',
    licenseKey: 'XXXX-XXXX-XXXX-XXXX',
    expiresOn: '2023-12-31'
  });
  // ... more initialization logic
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

button {
  cursor: pointer;
  padding: 5px 10px;
}
</style>
