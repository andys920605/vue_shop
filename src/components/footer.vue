<template>
    <div class="container_footer">

        <footer class="d-flex flex-column flex-wrap justify-content-center align-items-center ">

            <!-- footer navigation -->
            <ul class="footer_icon_link">
                <li>
                    <i class="fa-brands fa-instagram fa-2x"></i>
                </li>
                <li>
                    <i class="fa-brands fa-square-facebook fa-2x"></i>
                </li>
                <li>
                    <i class="fa-brands fa-youtube fa-2x"></i>
                </li>
            </ul>


            <ul class="footer_text_link">
                <li>
                    <a href="#">關於我們</a>
                </li>
                <li> 
                    <a href="#">常見問題</a>
                </li>
                <li>
                    <a href="#">聯絡我們</a>
                </li>
                <li>
                    <a class="special_link" href="#">隱私權</a>
                </li>
            </ul>
            <ul class="bottom_logo">
                <li>
                    <img src="../assets/img/No_name_dessert.png" alt="" class="bottom_logo_img">
                </li>
            </ul>
            <ul class="footer_text">
                <li>
                    <p>食品業者登錄字號 : A-247389449-22222-1</p>
                </li>
            </ul>



        </footer>
    </div>
</template>




<style lang="css" scoped>
.footer_icon_link{
    width: 200px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    cursor: pointer;
}

.fa-brands:hover{
    color:white;
}





.footer_text_link{
    list-style: none;
    display: flex;
    width: 500px;
    justify-content: space-around;
    margin-top: 20px;
    /* border:1px solid red; */
}


/*-----關於我們---------------*/
.footer_text_link a{
    color: #000;
    text-decoration: none;
    font-weight: bolder;
    font-size: 20px;
    border-right: 2px solid rgb(28, 28, 24);
    padding-right: 15px; /* 在<a>標籤右側創建10px的空間 */
}

.footer_text_link a:hover{
    color : #ffffff;
}





li:last-child a.special_link {
    border-right: none; 
}
.bottom_logo{
    list-style: none;
}
.bottom_logo_img{
    margin-top: 15px;
    width: 238px;
    height: 109px;
}
.footer_text li {
    color: #999494;
    list-style: none;
    font-size: 17px;
}
.footer_text p{
    font-size: 17px;
}
.container_footer{
    width: 100%;
    background: #FFDCDC;
}

</style>