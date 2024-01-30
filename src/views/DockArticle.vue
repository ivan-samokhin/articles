<script setup>
import { toHandlers } from 'vue';
import GoogleSearch from '../components/GoogleSearch.vue' 
import GoogleBar from '../components/GoogleBar.vue' 



</script>


<template>
<div class="page_wrapper">
   <header class="fake_browser_top"> 
      <img src="/google/icons/dock_browser.svg" alt=""> 
      <div class="fake_url">https://www.thedock.com/welcome-to-the-end</div>
    </header>
    

<main id="dock_article">
  <section class="article_content sec1">
  <img src="/google/dock_top3.png" alt="">
  </section>
  <section class="article_content sec2">
  <img src="/google/dock/text1.svg" alt="">
  </section>
  <section class="article_content sec3">
  <img src="/google/dock/anna2.jpg" alt="">
  </section>
  <section class="article_content sec4a">
  <img src="/google/dock/text_names.svg" alt="">
  </section>
  <section class="article_content sec4">
  <img src="/google/dock/text2.svg" alt="">
  </section>
  <section class="article_content sec3">
  <img src="/google/dock/sheep_n.jpg" alt="">
  </section>

    
</main>
</div>

</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  
}
</script>

<style>

.page_wrapper {
  background-color: #fefefe;
  

  
}

#dock_article {
  overflow-y: auto;
  overflow-x: hidden;
  height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 75px;
 

  
}

.fake_browser_top {
  position: fixed;
  top: 0;
  left: 0;
  
}

.article_content {
  
  flex-direction: column;
  justify-content: start;
  place-items: start;
  width: 100vw;
  padding-bottom: 50px;
 
}
.sec1 {padding-bottom: 20px;}
.article_content img {
  width: 100vw;
  display: block;
  margin: auto;
  border-radius: 2px;
}
.sec2 {padding-bottom: 20px;}
.sec2 img{
  width: 600px;
}
.sec3 {padding-bottom: 10px;}
.sec3 img {
  width: 900px;
  
}
.sec4a img {
  width: 900px;
}
.sec4 img {
  width: 600px;
}
</style>