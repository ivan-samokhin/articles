<script setup>
import { toHandlers } from 'vue';
import GoogleSearch from '../components/GoogleSearch.vue' 


</script>


<template>
<div class="sticky_top">
    <section class="google_bar">
      <div class="logo_wrapper"><img src="/google/icons/google-logo.svg" alt=""></div>
      <GoogleSearch class="bar_search" :blank="false" @go-results="$emit('goResults')"/>
      <div class="personal_icons_wrapper">
        <img class='material' src="/google/icons/setting.svg" alt="">
        <img class='material' src="/google/icons/apps.svg" alt="">
        <img class='avatar' src="/google/icons/e-icon.svg" alt="">
      </div>
    </section>
    <section class="google_nav">
      <div class="google_buttons_wrapper">
        <div v-for="item in fakeButtons.length" class="google_nav_button"><span>{{ fakeButtons[item-1] }}</span></div>
      </div>
      <div class="google_tools_wrapper">
        <div class="google_tool"><span>Alt Filters</span></div>
        <div class="google_tool"><span>Tools</span></div>
        <div class="google_tool"><span>Safe Search</span></div>
      </div>
    </section>
  
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

.sticky_top {
  position: sticky;
  top: 78px;
  background-color: white;
}

.google_bar {
 display: flex;
 flex-direction: row;
 width: 100vw;
 padding-top: 30px;
 padding-left: 100px;
 justify-content: left;
 
}
.google_bar .logo_wrapper {
 
  display: inline-flex;
  align-items: center;
  padding-bottom: 0;
}
.google_bar .logo_wrapper img {
  height: 30px;
  display: block;
}
.bar_search {
  margin-left: 40px;
}
.personal_icons_wrapper {
  display: flex;
  direction: row;
  align-items: center;
  margin-right: 20px;
}
.personal_icons_wrapper img.material {
  height: 25px;
  filter: invert(39%) sepia(11%) saturate(217%) hue-rotate(173deg) brightness(94%) contrast(92%);
  
  margin-right: 20px;

}
img.avatar {
  height: 45px;
  
}
.google_nav {
  border-bottom: 1px solid rgb(223,225,229);
  width: 100vw;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.google_nav_button {
  display: flex;
    align-items: center;
    height: 40px;
    justify-content: center;
    background: #fff;
    border: 1px solid #dadce0;
    box-sizing: border-box;
    border-radius: 20px;
    min-width: 38px;
    cursor: pointer;
    margin-right: 5px;
}

.google_nav_button span {

  padding: 15px;
}
.google_buttons_wrapper {
  margin-left: 100px;
  margin-top: 15px;
  
  display: flex;
  flex-direction: row;
 
}
.google_tools_wrapper {
  margin-top: 22px;
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
}
.google_tool {
  align-items: center;
    border-radius: 8px;
    color: #5e5e5e;
    column-gap: 4px;
    display: flex;
    font-family: Google Sans,arial,sans-serif;
    font-size: 14px;
    margin-bottom: 8px;
    padding: 0 9px 0 12px;
    white-space: nowrap;
}


</style>