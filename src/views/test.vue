<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

// 定義 JSON 資料
const products = ref([
    {
        code: '001',
        name: 'Product 1',
        category: 'Category A',
        quantity: 10
    },
    {
        code: '002',
        name: 'Product 2',
        category: 'Category B',
        quantity: 20
    },
    // 可以繼續添加更多的產品資料...
]);

// 如果您仍想在初始化時執行某些代碼，可以在這裡添加 onMounted 邏輯
onMounted(() => {
    // 沒有需要初始化的代碼，因為 products 數據已在上面定義
});

</script>
