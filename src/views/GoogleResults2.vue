<script setup>
import { toHandlers } from 'vue';
import GoogleSearch from '../components/GoogleSearch.vue' 
import GoogleBar from '../components/GoogleBar.vue' 


</script>


<template>
<div class="page_wrapper">
   <header class="fake_browser_top"> 
      <img src="/google/icons/google_browser.svg" alt=""> 
      <div class="fake_url">https://www.google.com/search?q=weather+station+in+Iceland&newwindow=1&sca_esv=8add31af34f47e86&sxsrf=ACQVn0-ZTy2tmW4YTn4yC7zV9Du-8q6RfQ%3A1706621379882&ei=w_m4Za-9NeG5i-gP</div>
    </header>
    

<main id="googlePageRes2">

    <GoogleBar/>

    <section class="google_content">

      <div class="google_res_item">
        <img class="google_res_top" src="/google/results/res_st_top1.svg" alt="">
        <h3>Welcome to the End of the World</h3>
        <p>Jan 25, 2021 - Marta watches for her flock, while keeping an eye on</p>
        <p>incoming storms, from a remote farm in Iceland.</p> 
      </div>

      <div class="google_res_item">
        <img class="google_res_top" src="/google/results/res_weather_top1.svg" alt="">
        <h3>Iceland-Weather</h3>
        <p>Weather conditions for travel in Iceland.</p>
        <p>Follow our travel blog to monitor icey road conditions.</p> 
        
      </div>

      <div class="google_res_item">
        <img class="weather_insert" src="/google/results/res_people_ask.svg" alt="">
      </div>
      <div class="google_res_item">
        <img class="google_res_top" src="/google/results/res_weather_top2.svg" alt="">
        <h3>Iceland forecasts</h3>
        <p>Weather conditions for travel in Iceland.</p>
        <p>Follow our travel blog to monitor icey road conditions.</p> 
      </div>

      <div class="google_res_item">
        <img class="google_res_top" src="/google/results/res_st_top4.svg" alt="">
        <h3>Weather in ICeland - remote conditions</h3>
        <p>Conditions can be rought for travellers in remote parts of the country.</p>
        <p>We provide services for travelers who want to travel safe.</p> 
        
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

#googlePageRes2 {
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

.weather_insert {
  width: 600px;
 
 
}

</style>