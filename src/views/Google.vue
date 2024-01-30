<script setup>
import { toHandlers } from 'vue';
import GoogleSearch from '../components/GoogleSearch.vue' 


</script>


<template>
<div class="page_wrapper">
  <header class="fake_browser_top"> 
      <img src="/google/icons/google_browser.svg" alt=""> 
      <div class="fake_url">https://www.google.com/</div>
    </header>
    

<main id="googlePage">
  <section class="google_header">
    <div class="w_wrap">
      <div class="google_icons_wrapper">
        <span>Gmail</span>
        <span>Images</span>
        <img class='material' src="/google/icons/apps.svg" alt="">
        <img class='avatar' src="/google/icons/e-icon.svg" alt="">
      </div>
    </div>
    </section>

    <section class="google_search">
      <div class="logo_wrapper"><img src="/google/icons/google-logo.svg" alt=""></div>
      <GoogleSearch :blank="true" @go-results="$router.push({path: '/results1'})"/>
      <div class="button_box">
            <button class="fake_button">Google Search</button>
            <button class="fake_button">I'm Feeling Lucky</button>
          </div>
    </section>
    <section class="google_footer">
      <div class="block_01">
        <span>About</span>
        <span>Advertisement</span>
        <span>Business</span>
        <span>How searh works</span>
      </div>
      <div class="block_02">
        <span>Privacy</span>
        <span>Termst</span>
        <span>Settings</span>
        
      </div>

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

#googlePage {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  place-items: center ;
  justify-content: start;
 
  flex-direction: column;
  
}

.google_footer {
  width: 100vw;
  height: 50px;
  background-color: #f2f2f2;
  margin-top: auto;
  display: flex;
  align-items: center;
}
.google_header {
  width: 100vw;
  height: 40px;
  background-color: white;
  margin-top: 79px;
}


.fake_browser_top {
  position: fixed;
  top: 0;
  left: 0;
  
}

.google_search {
 margin-top: 200px;
 display: flex;
 place-items: center;
 flex-direction: column;
 
}
.logo_wrapper {
  padding-bottom: 30px;
}
.logo_wrapper img {
  height: 90px;
  display: block;
  margin: auto;
}

.button_box {
  display: inline-block;
  margin: auto;
  
}
.fake_button {
  background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: arial,sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
}

.fake_button:hover {
  border-color:  rgb(223,225,229);
}

.google_icons_wrapper {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
 
 
}
.google_icons_wrapper img.material {
  height: 25px;
  filter: invert(39%) sepia(11%) saturate(217%) hue-rotate(173deg) brightness(94%) contrast(92%);
  
  margin-left: 20px;

}
img.avatar {
  height: 45px;
  margin-left: 20px;
}

.w_wrap {
  width:fit-content;
  margin-left:auto;
  margin-right: 0;
}

.google_icons_wrapper span {
  margin-right: 10px;
  font-family: arial,sans-serif;
  font-size: 0.8rem;
}

.google_footer span {
  margin-left: 20px;
  font-family: arial,sans-serif;
  font-size: 0.85rem;
}

.block_01 {
  margin-left: 30px;
}
.block_02 {
  margin-left: auto;
  margin-right: 30px;
}
</style>