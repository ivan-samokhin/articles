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
    <section class="google_search">
      <div class="logo_wrapper"><img src="/google/icons/google-logo.svg" alt=""></div>
      <GoogleSearch :blank="true" @go-results="$router.push({path: '/results1'})"/>
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
  justify-content: center;
  align-items: start;
  
}

.fake_browser_top {
  position: fixed;
  top: 0;
  left: 0;
  
}

.google_search {
 margin-top: 400px;
 
}
.logo_wrapper {
  padding-bottom: 30px;
}
.logo_wrapper img {
  height: 90px;
  display: block;
  margin: auto;
}
</style>