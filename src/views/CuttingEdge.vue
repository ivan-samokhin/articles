<script setup>

</script>

<template>
<div class="article_wrapper">
<header class="fake_browser_top"> 
  <img src="/cutting/browser-top.svg" alt=""> 
  <div class="fake_url">https://thecuttingedge.com/thepartner</div>
</header>

  <main id="CuttingEdge">
    <section class="top_bar">
      <img src="/cutting/subscribe.svg" alt="">
    </section>

    <section class="cutting_logo">
      <img src="/cutting/logo.svg" alt="">
    </section>  

    <section class="title_block">
      <div class="headline_wrapper"><img src="/cutting/headline2.svg" alt=""></div>
      <div class="img_auth_wrapper"> <img src="/cutting/author.png" alt=""> </div>
      <div class="photo_wrapper"> <img src="/cutting/image.png" alt=""> </div>
    </section>

    <section class="main_text"> <img src="/cutting/text2.svg" alt=""></section>
    <section class="main_text text-part2"> <img src="/cutting/text_part2.svg" alt=""></section>
   
  </main>
</div>  
</template>

<script>

</script>

<style>
body {
  overflow: hidden;
}

.article_wrapper {
  padding: 75px 0;
  width: 100%;
  background-color: #fefefe;
  
}

#CuttingEdge {
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 92vh;
  
}

.fake_browser_top {
  position: fixed;
  top: 0;
  left: 0;
}

.fake_browser_top img{
  display: block;
  width: 100vw;
}

.fake_url {
  color: white;
  background-color: transparent;
  margin-left: 145px;
    margin-top: -32px;
    font-size: 0.8rem;
}

.top_bar {
  padding-top: 30px;
  width: 100vw;
  height: 50px;
  display: block;
  position: relative;
}
.top_bar img {
  
  display: block;
  height: 30px;
  position: absolute;
  right: 18%;
  
}

.cutting_logo {
  padding-bottom: 40px;
}

.cutting_logo img {
  height: 60px;
  display: block;
  margin:auto;
}

.title_block {
  width: 900px;
  border-top: 2 px solid black;
  margin: auto;
  padding-top: 10px;
}
.title_block img {
  
  display: block;
  height: 150px;
  margin: auto;
}
.headline_wrapper {
  padding-top: 10px;
  border-top: 2px solid black;
}

.img_auth_wrapper {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  
}

.img_auth_wrapper img {
  height: 40px;
  width: 40px;
  margin-top: -45px;
  margin-right: -50px;
}

.photo_wrapper {
  width: 800px;
  height: 450px;
  overflow: hidden;
  margin: auto;
  margin-top: 40px;
}

.photo_wrapper img {
  width: 800px;
  height: 800px;
  margin-top: -260px;
  display: block;
}
.main_text {padding-top: 20px; padding-bottom: 20px;}
.main_text img {
  display: block;
  width: 800px;
  margin: auto;
}

</style>
