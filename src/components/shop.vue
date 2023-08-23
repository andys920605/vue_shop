<template> 
   
        <div class="card container-fluid">
            <!----gx 跟gy為水平跟垂直距離-後面數字的是調整距離------------->
            <div class="card-body row  gx-2 gy-3">

                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item over">
                                    <a class="nav-link active" aria-current="page" href="#">商品訂購</a>
                                </li>  

                                <li class="nav-item">
                                    <a class="nav-link" href="#">乳酪蛋糕</a>
                                </li>
                            </ul>
                        </div>
                    
                </nav>
                

                <div v-for="product in products" :key="product.id"  class="product col-3 ">
                    <div class="img">
                        <img :src="product.photos?.url || 'fallback-image.png'" class="card-img-top" alt="...">
                        <button type="button" class="caption" data-bs-toggle="modal" :data-bs-target="'#exampleModal1'">
                            加入購物車
                        </button>
                    </div>

                    <div class="description">
                        <p class="card-text text-center">{{ product.name }}</p>
                        <p class="card-text text-center price">NT{{ product.specs[0].price }}</p>
                    </div>
                </div> 



            </div>
        </div>

        <!-- Modal (彈窗)-->
        <div class="modal fade " id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="container mt-3 ">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link active" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item"><a class="page-link" href="#">></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'  

    export default {
    setup() {
        const products = ref([]);

        onMounted(async () => {
        try {
            const response = await axios.get('http://54.199.12.7:8686/api/products?category_id=1');
            if (response.status === 200) {
                console.log(response.data);
                products.value = response.data;
            }
        } catch (error) {
            console.error(error);
        }
        });

        return { products };
    }
    }
</script>




<style lang="css" scoped>


/*----------商品訂購< 乳酪蛋糕---------------------------------------*/



.over ::after{
    content: " <";
}



/* ---------婉瑜-修改加入購物車商品頁面---------- */

.card-img-top:hover {
    opacity: 0.75;
}
/* 最外面的% */
.container-fluid{
    max-width: 1200px;
    margin: 0 auto;
    border: none;
}


.product{
    /* 左右分配 */
    /* flex-grow: 1;第二排平均分配 */

    /* margin-left: 1.1%; */

}


.img {
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 40vh;
    /* object-position: center center; */
    display: flex;
    justify-content: center;
    align-items: center;

}

.card-img-top{
    min-width: 100%;
    min-height: 100%;
    /* disp*lay: block; */
    margin: auto 0;
}


.caption {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border: none;
    background-color: rgba(000, 000, 000, 0.6);
    color: azure;
    line-height: 2;
    display: none;
}

.img:hover .caption {
    display: block;
}

.description {
    color: black;
    padding: 20px;
    font-style: 30px;
    font-family: Arial, Helvetica, sans-serif;
}

.price {
    font-weight: 700;
}

.navbar-collapse ul {
    width: 100%;
}

.nav-item p {
    height: 20px;
}

.line {
    border: 1px solid black;
    width: 1px;
    height: 20px;
}

.lalala {
    display: flex;
    align-items: center; 
}

.lalala p {
    /* padding: 0 10px; */
    margin: 0;
    display: inline-block;
    line-height: 3;
    height: auto;
}

.lalala p::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 30px;
    margin: 0 10px;
    background-color: black;
}


/*----分頁器----------------------------------------*/


.pagination .page-link{
    border: none;
    background-color: white;
    text-decoration: none;
}
.pagination .page-link.active {
    color: #FDBBBB;
    border: none;
    background-color: white;
    text-decoration: none;
}


.page-link.active:hover{
    text-decoration: solid #FDBBBB underline;
}


.footer {
    border: 1PX solid RED;
    max-width: 100%;
    height: 50vh;
    background-color: #FDBBBB;
}

p {
    font-size: 14px;

}

.navbar-expand-lg {
    color: #FDBBBB;
}




</style>
