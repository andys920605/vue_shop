<template>
    <!-- 中秋節禮盒滿三千送三百 -->
    <div class=" nav-item  ">
        <div class="m-auto container-fluid the_top">
            <a href="#" style="color:black; text-decoration:none;font-weight: bold;">中秋禮盒商品 滿3000送300</a>
        </div>
    </div>

    <div>
        <img src="../assets/img/No_name_dessert.png" class="img-fluid m-auto w-25 ">
    </div>

    <nav class="navbar  navbar-expand-lg">
        <div class="container-fluid justify-content: center; /* 水平置中 */
        align-items: center;">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse justify-content-evenly" id="navbarNav">
                <ul class=" navbar-nav d-flex justify-content-evenly mb-6 ">
                    <li class="nav-item ">
                        <a class="nav-link">
                            <router-link to="/home">關於我們</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">商品訂購</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">人氣排行</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">禮盒專區</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">聯繫我們</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled " aria-disabled="true"><i class="bi bi-person-fill"
                                style="color:black"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true"><i class="bi bi-cart-fill"
                                style="color:black"></i></a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="css" scoped>

    .the_top{
    display: flex;
    justify-content: center;
    background-color: #FDBBBB;
    text-decoration: none;
    top: 0;
    }
    .nav-link a{ 
        text-decoration: none;
        color: inherit;
    }

    .navbar-collapse ul {
    width: 100%;
}
    .img-fluid {
    max-width: 100%;
    height: 20vh;
    object-fit: cover;
    justify-content: center;
    /* Horizontally center the content inside the container */
    display: flex;
}
</style>