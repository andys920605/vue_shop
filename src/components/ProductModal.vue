<template>
  <Dialog :visible="visibleProp" style="width: 50%; max-width: 600px;" class="product-modal">
    <template #header>
      <div class="p-d-flex p-jc-between">
        <h3>{{ product.title }}</h3>
        <button class="close-button" @click="hideModal">
          <span class="pi pi-times"></span>
        </button>
      </div>
    </template>
    <div class="p-d-flex p-jc-start product-content">
      <img :src="product.image" alt="Product Image" class="product-image"/>
      <div class="product-details">
        <p>{{ product.description }}</p>
        <h4 class="p-mt-2">價格: {{ product.price }} 元</h4>
        <Button label="下單" @click="orderProduct" />
      </div>
    </div>
  </Dialog>
</template>

<script>
import { ref, watchEffect } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

export default {
  components: {
    Dialog,
    Button,
  },
  props: {
    product: Object,
    visible: Boolean,
  },
  emits: ['update:visible', 'order'],
  setup(props, { emit }) {
    const visibleProp = ref(props.visible);

    watchEffect(() => {
      visibleProp.value = props.visible;
      console.log('visible 改變了，新的值是:', props.visible);
    });

    const hideModal = () => {
      console.log('hideModal 被調用了');
      emit('update:visible', false);
    };

    const orderProduct = () => {
      emit('order', props.product);
      hideModal();
    };

    return {
      visibleProp,
      hideModal,
      orderProduct,
    };
  },
};
</script>

<style scoped>
.product-modal {
  border: 1px solid #dee2e6;
  border-radius: 5px;
}

.product-content {
  align-items: center;
}

.product-image {
  width: 200px;
  height: auto;
  border-right: 1px solid #dee2e6;
  padding-right: 10px;
}

.product-details {
  padding-left: 15px;
}

.close-button {
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px; /* 設置寬度 */
  height: 30px; /* 設置高度 */
  z-index: 1000; /* 如果需要，設置 z-index */
}

.pi.pi-times {
  line-height: 1;
}
</style>