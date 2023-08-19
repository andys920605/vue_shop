<!-- 如果要看scss引入可以看這個檔案 -->
<template>
    <div class="wrapper">
        <div class="btn">
            hi
            <button>嗨嗨嗨嗨嗨嗨嗨</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @import '../assets/scss/global.scss';


// @include btn();
.btn{
    @include btn(red,green,$h4);
}
// button才可以用點擊的部分
button{
    &:active{
        background: #000;
    }
}

// wrapper
.wrapper{
    @include wrapper();
}

</style>