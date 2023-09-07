<template>
<div class="card flex justify-content-center" v-if="show.required">
    <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '1400px' }">
    <div class="container" >

        <div class="title_box">
            <h2 class="cart_h2">檸檬佐可可乳酪</h2>
        </div>

        <div class="cart_big_box">

                <div class="cart_box">
                    <div class="left_box">
                        <div class="card flex justify-content-center">
                            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
                                    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
                                    <template #item="slotProps">
                                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                                    </template>
                                    <template #thumbnail="slotProps">
                                            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
                                    </template>
                            </Galleria>    
                        </div>
                    </div>
                </div>
            
            <div class="cart_text_box">
                <div class="cart_text">
                    <p class="cart_text_p">熟成的藍莓與濃厚的乳酪相遇，天然水果氣息挑逗舌尖，與重乳酪的香醇激盪出回味無窮的酸甜戀曲</p>
                </div>
                <h4 class="cart_price_h4">NT 300~1000</h4>
                <div class="cake_choose_size">
                    <div class="cake_size_name">
                        <p class="title_name_p">尺寸</p>
                    </div>
                    <ul class="cake_choose_size_button">
                        <li>
                            <a href="#"><p class="choose_link">單片</p></a>
                        </li>
                        <li>
                            <a href="#"><p class="choose_link">6吋</p></a>
                        </li>
                        <li>
                            <a href="#"><p class="choose_link">8吋</p></a>
                        </li>
                    </ul>
                </div>
                <div class="cake_choose_quantity">
                    <div class="cake_quantity_name">
                        <p class="title_name_p">數量</p>
                    </div>
                    <ul class="cake_choose_quantity_button">
                        <li style="font-size: 35px;;">
                            <a href="#" @click="increment"><i class="bi bi-dash-lg"></i></a>
                        </li>
                        <li>
                            <a href="#"><p class="cart_btn_total_number">{{ counter }}</p></a>
                        </li>
                        <li style="font-size: 35px;">
                            <a href="#" @click="decrement"><i class="bi bi-plus-lg"></i></a>
                        </li>
                    </ul>
                </div>

                <div class="button_shopping">
                    <ul class="button_shopping_button">
                        <li style="font-size: 30px;" class="cart_btn">
                            <i class="bi bi-cart fa-5x" ></i>
                            <a href="#" @click="decrement">加入購物車</a>
                        </li>
                        <li style="font-size: 30px;" class="cart_btn">
                            <i class="bi bi-bag-fill "></i>
                            <a href="#" @click="decrement">立即購買</a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
            
    </div>
    </Dialog>
</div>

</template>
    
<script setup>
    import { ref, onMounted, defineProps } from "vue";
    import Dialog from 'primevue/dialog';
    import Button from 'primevue/button';
    import Galleria from 'primevue/galleria';
    
    const visible = ref(false);
    const images = ref([]);
    const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
    ]);

    const PhotoService = {
    async getImages() {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        return data.slice(0, 10).map(item => ({
            itemImageSrc: item.url,
            thumbnailImageSrc: item.thumbnailUrl,
            alt: item.title
        }));
        } catch (error) {
        console.error("Error fetching images:", error);
        return [];
        }
    }
    };

    onMounted(async () => {
    try {
        const data = await PhotoService.getImages();
        images.value = data;
    } catch (error) {
        console.error("Error fetching images:", error);
    }
    });

    const counter = ref(0);

    const decrement = () => {
    if(counter.value >= 0) {
    counter.value++;
    }
    emit('decrement');
    };

    const increment = () => {
    if (counter.value > 0) {
    counter.value--;
    }
    };


    const props = defineProps( {
        show: {
            type: Boolean,
            required: true,
        }
    });

    // const closeModal = () => {
    //     emit('closeModal');
    // };

    
</script>


<style lang="scss" scoped>
    @import '../assets/scss/global.scss';
    @import '../assets/scss/reset.scss';

    .container{
        width: 1400px;
        height: 100%;
        margin: 0 auto;
        align-items: center;
        .title_box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 50px; /* 調整上方間距 */
        padding-bottom: 50px; /* 調整下方間距 */
        flex-wrap: wrap;
        border-radius: 50px;
        
    }
        .cart_h2{
        font-size: 45px;
        color: #FDBBBB;
        font-weight: bolder;
        }
        .cart_big_box{
        display: flex;
        
    }
    .cart_box{
        display: flex;
        width: 50%;
        justify-content: center;
    }
    .left_box{
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
    .cart_text_box{
        width: 50%;
        margin-left: 30px; 
        float: left;
        
    }
    .cart_text_p{
        font-size: 24px;
        font-weight: 1000;
        color: black;
        max-width: 790px;
        margin-top: 20px;
        
    }
    .cart_text{
        margin-top: 50px;
        
    }
    .cart_price_h4{
        margin-top: 50px;
        position: relative;
        display: inline-block;
        width: 683px;
        font-size: 45px;
        font-weight: 700;
        color: pink;
        
    }
    .cart_price_h4::after{
    content: '';
        position: absolute;
        left: 0;
        bottom: 90px; /* 調整這個值來控制底邊框與文字的距離 */
        width: 100%;
        // border-bottom: 2px solid $otprink;
        
    }
    .cake_choose_size{
        display: flex;
        width: 683px;
        justify-content: space-around;
        align-items: center;
        margin-top: 80px;
        margin-bottom: 25px;
        // border: 1px solid rgb(0, 255, 85);
    }
    .cake_size_name{
        display: flex;
        width: 20%;
        align-items: center;
        justify-content: left;
        // border: 1px solid rgb(0, 255, 85);
    }
    .cake_size_name p{
        font-weight: 700;
    }
    .cake_choose_size_button{
        display: flex;
        width: 80%;
        align-items: center;
        justify-content: space-around;
        // border: 1px solid rgb(0, 255, 85);
    }
    .choose_link {
        background: white;
        padding: 10px 40px;
        font-size: 25px;
        border-radius: 20px;
        // border: 3px solid $otprink;
    }
    .cake_choose_quantity{
        width: 683px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
    }
    .cart_btn_total_number{
        font-size: 25px;
    }
    .cake_quantity_name{
        display: flex;
        width: 20%;
        justify-content: left;
        align-items: center;
        
    }
    .cake_choose_quantity_button{
        display: flex;
        width: 80%;
        justify-content: space-around;
        align-items: center;
        
    }
    .choose_quantity_link{
        color: black;
        font-size: 60px;
    }
    .choose_quantity_number{
        color: black;
        font-size: 45px;
    }
    .button_shopping{
        display: flex;
        width: 650px;
        justify-content: space-between;
        margin-top: 130px;
    }
    .button_shopping_button{
        display: flex;
    }
    .button_shopping_button li{
    width: 286px;
    margin-right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 99px;
    // border: 3px solid $otprink;
    border-radius: 15px; 
    }
    a{
        margin-left: 20px;
    }
    .cart_btn:hover {
    // background-color: $otprink;
    }
    .cart_btn:active {
    // background-color: $otprink;
    }
    .title_name_p{
        font-size: 25px;
        font-weight: 700;
        //控制尺寸數量大小
    }
    
}
    
    
    </style>
    