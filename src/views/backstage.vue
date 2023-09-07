<!-- 後台新增商品頁面 -->

<template>
    <!-- <Header/> -->
    <div>
        <h4>新增商品</h4>
        <hr style="width: 80%;margin: auto;">
    </div>

    <section>
        <h4>商品圖片</h4>
        <Newpic/>
    </section>

    <div>
        <h4>商品名稱</h4>
        <input type="text" name="欄位名稱">
    </div>

    <div>
        <h4>商品介紹</h4>
        <textarea name="comments" rows="4" cols="50">請輸入商品描述</textarea>
    </div>

    <div>
        <h4>商品分類</h4>
        <select>
            <optgroup label="蛋糕">
                <option value="乳酪蛋糕">乳酪蛋糕</option>
                <option value="14">磅蛋糕</option>
                <option value="13p">戚風蛋糕</option>
            </optgroup>
            <optgroup label="常溫蛋糕">
                <option value="air">手工餅乾</option>
                <option value="pro">馬卡龍</option>
                <option value="pro">瑪德蓮</option>
                <option value="pro">可麗露</option>
            </optgroup>
        </select>
    </div>

    <div>
        <h4>上架狀態</h4>
        <select>
            <optgroup>
                <option value="up">上架</option>
                <option value="down">下架</option>
            </optgroup>
        </select>
    </div>

    <div>
        <h4>商品資訊</h4>

    </div>
</template>

<script setup>
    // import Header  from '../components/Header.vue'
    import Newpic from '../components/product/newpic.vue'
</script>

