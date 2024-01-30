<script setup>
import { toHandlers } from 'vue';
import GoogleSearch from '../components/GoogleSearch.vue' 
import GoogleBar from '../components/GoogleBar.vue' 


</script>


<template>
<div class="page_wrapper">
   <!-- <header class="fake_browser_top"> 
      <img src="/google/icons/google_browser2.svg" alt=""> 
      <div class="fake_url">https://www.google.com/search?q=weather+in+icela&newwindow=1&sca_esv=8add31af34f47e86&sxsrf=ACQVn0-mzqdEnokyKzB3s-ZhMBUShkcEiA%3A1706621373681&ei=vfm4Zd-VKdGFhbIPjOehyAM&ved=0ahUKEwif</div>
    </header>-->
    

<main id="googlePageRes">

    <GoogleBar @go-results="$router.push({path:'/results2'})"/>

    <section class="google_content">
      <div class="google_res_item">
        <img class="ask_insert" src="/google/results/res_weather_pic.svg" alt="">
      </div>
      <div class="google_res_item">
        <img class="google_res_top" src="/google/results/res_weather_top1.svg" alt="">
        <h3>Iceland forecasts</h3>
        <p>Southewesternly variable wind 5-13 m/s and snowshowers or snow in Iceland.</p>
        <p>Becoming fair in the east part in the afternoon and winds getting ...</p> 
        <div class='link-row'>
          <span>South</span>
          <span>Aviation weather</span>
          <span>Clinate in Iceland</span>
          <span>Weather stations</span>
        </div>
      </div>

      <div class="google_res_item">
        <img class="google_res_top" src="/google/results/res_weather_top2.svg" alt="">
        <h3>Iceland-Weather</h3>
        <p>Weather conditions for travel in Iceland.</p>
        <p>Follow our travel blog to monitor icey road conditions.</p> 
        
      </div>

      <div class="google_res_item">
      </div>
    </section>

    
</main>
</div>

</template>

<script>
export default {
  data() {
    return {
      fakeButtons: [
        'Images',
        'Free',
        'Chrome',
        'Code',
        'Translate',
        'Play',
        'Search',
        'Drive',
        'Videos'
      ]
    }
  },
  
}
</script>

<style>

.page_wrapper {
  background-color: #fefefe;
  

  
}

#googlePageRes {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  place-content: start;
  
}

.fake_browser_top {
  position: fixed;
  top: 0;
  left: 0;
  
}

.google_content {
  
  flex-direction: column;
  justify-content: center;
  place-items: start;
  width: 100vw;
  padding-top: 100px;
  margin-left: 235px;
}

.google_res_item {
  
  width: 600px;
  min-height: 100px;
  
  margin-bottom: 40px;
}

.google_res_item h3 {
  font-size: 20px;
  color: #1a0dab;
  font-family: arial,sans-serif;
    font-weight: 400;
}
.google_res_item h3:hover {
  text-decoration: underline;
  cursor:pointer;
}

.google_res_item p {
  color: #4d5156;
  font-size: 0.9rem;
  font-family: arial,sans-serif;
}

.google_res_top {
  height: 30px;
}
.link-row span {
  color:#1a0dab;
  margin-right: 10px;
}

.link-row {
  margin-top: 5px;
}

.ask_insert {
  width: 600px;
}

</style>