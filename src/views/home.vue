<template>
  <header>
        <div class="header-title">
          歡迎來到甜點店
        </div>
        <router-link to="/" class="enter-home">進入首頁</router-link>
    </header>

  <!-- 功能欄 -->
  <!-- ...功能欄代碼... -->

  <!-- 形象首頁區 -->
  <div class="hero">
    <div class="overlay"></div>
    <div class="hero-text">
      為您帶來最美味的甜點<br>
      探索我們的創意與熱情
    </div>
  </div>

  <!-- 其他內容 -->
</template>

<style scoped>
   body {
      font-family: Arial, sans-serif;
      background-color: #f8f8f8;
      margin: 0;
      padding: 0;
    }

    header {
      background-color: #4a4a4a;
      padding: 20px;
      text-align: center;
      font-size: 30px;
      color: white;
      display: flex;
      justify-content: center;
      position: relative;
    }

    .header-title {
        font-size: 30px;
        color: white;
    }

    /* 功能欄 CSS */

    .hero {
      background-image: url("https://source.unsplash.com/random?dessert");
      background-size: cover;
      background-position: center;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .hero-text {
      position: relative;
      color: white;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      max-width: 80%;
    }

    .enter-home {
    background-color: #6a6a6a;
    color: white;
    font-size: 16px;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    text-decoration: none;
  }

  .enter-home:hover {
    background-color: #8a8a8a;
  }
</style>
