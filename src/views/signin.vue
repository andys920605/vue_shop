<!-- 後臺登入頁面 -->
<template>

    <div class="wrapper">
        <!-- 後台的header -->
        <div class="nav-item">
            <img src="../assets/img/No_name_dessert.png" class="img-fluid mx-auto w-25">
            <div class="m-auto container-fluid the_top">
                <a href="#" style="color:black; text-decoration:none;font-weight: bold;text-align: center;">會員登入</a>
            </div>
        </div>

        <!-- 中間區域-帳密 -->
        <div class="middle">
            <div class="sign_in">
                <p>帳號{{test}}</p>
                <input v-model="account" 
                placeholder="輸入帳號"
                :type="text">
                <p>密碼</p>
                <input 
                :type="isActive ? 'password' : 'text'"
                class="form-control" 
                id="floatingPassword" 
                placeholder="Password">
                <i id="checkEye" 
                :class="[isActive ? 'bi-eye-fill' : 'bi-eye-slash-fill' , 'bi']" @click="isActive=!isActive"> 
                </i>    

                <button class="w-100 btn btn-primary" type="button" >會員登入</button>
            </div>
        </div>
    </div>
</template>

<script >
    export default{
        data() {
            return {
            account: '',
            isActive:true,
            test:'abc',
            }
        },
    }

</script>


<style lang="scss" scoped>
    .wrapper {
        @include wrapper();
        top: 0;
    }
    
    .nav-item{
    background-color: #FFDCDC;
    }
    .the_top{
    display: flex;
    justify-content: center;
    // background-color: #FDBBBB;
    text-decoration: none;
    top: 0;
    }

    .img-fluid{
    max-width: 90%;
    height: 15vh;
    object-fit: cover;
    justify-content: center;
    display: flex;
    }

    .middle{
        margin:30px auto;
        border: 1px solid rgba(251, 123, 123, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 400px;
        height: auto;
        padding: 30px;

    }

    .form-control{
        position: relative;
        // right: 3px;
    }
    

    #checkEye {
        position: absolute;
        top: 51%;
        right: 42%;
        transform: translateY(-50%);
        
    }


    .btn-primary{
        background-color: #FFDCDC;
        border: none;
    }

    .sign_in{
        padding: 10px 10px;
    }
    .sign_in input{
        margin-bottom: 10px;
    }
</style>






