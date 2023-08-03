<template>
    <Dialog :visible="visible" @hide="hideModal">
      <template #header>
        <h3>模態框標題</h3>
      </template>
      {{ content }}
      <template #footer>
        <Button label="關閉" icon="pi pi-times" @click="hideModal" />
      </template>
    </Dialog>
  </template>
  
<script>
    import Dialog from 'primevue/dialog'; 
    import Button from 'primevue/button'; 
    import { defineProps, defineEmits } from 'vue';

    export default {
        components: {
        Dialog,
        Button
        },
        props: ['content', 'visible'],
        emits: ['update:visible'],
        setup(props, { emit }) {
        const hideModal = () => {
            emit('update:visible', false);
        };

        return {
            hideModal
        };
        }
    };
</script>
  