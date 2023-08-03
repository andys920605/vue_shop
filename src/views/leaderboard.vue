<template>
    <div>
      <Button label="打開模態框" @click="showModal" />
      <ModalComponent :content="modalContent" :visible="isModalVisible" @update:visible="isModalVisible = $event" />
    </div>
  </template>
  
  <script>
  import ModalComponent from '../components/ModalComponent.vue';
  import Button from 'primevue/button'; // 正確的導入語句
  
  export default {
    components: {
      ModalComponent,
      Button
    },
    data() {
      return {
        modalContent: '這是模態框的內容',
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      }
    },
  };
  </script>
  