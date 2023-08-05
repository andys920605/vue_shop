<script setup>
  import Modal from '../components/Modal.vue';
</script>


<template>
    <div>
      <Button label="查看商品" @click="showModal" />
      <ProductModal :product="selectedProduct" :visible="isModalVisible" @update:visible="isModalVisible = $event" @order="handleOrder" />
    </div>
    <Modal />
</template>
  
  <script>
  import ProductModal from '../components/ProductModal.vue';
  import Button from 'primevue/button';
  
  export default {
    components: {
      ProductModal,
      Button
    },
    data() {
      return {
        selectedProduct: {
          title: '精美產品',
          description: '這是一個非常精美的產品介紹。',
          price: 399,
          image: 'http://localhost:8080/api/product/4/image', // 圖片的URL
        },
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      handleOrder(product) {
        // 處理下單邏輯
        console.log('下單產品:', product);
      }
    },
  };
  </script>
  