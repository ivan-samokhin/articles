<script setup>


</script>


<template>
    
      <div class="search_wrapper">

        <div class="input_wrapper" :class="{'in_focus' : isFocus, 'on_predition' : userInput.length!=0} ">
          <div v-if="blank || isFocus" class="icons_start">
            <img class="google_icon" src="/google/icons/search-grey.svg" alt="">
          </div>

          <input @focus="isFocus=true" @blur="isFocus=false" type="text" v-model="userInput" @keyup.enter="HangleSubmit" @keyup="HandleKeyInput"> 
          <div class="icons_end">
            <img  class="google_icon x_icon" v-if="userInput.length != 0" src="/google/icons/x-cancel.svg" alt="" @click="userInput=''">
            <img class="google_icon" src="/google/icons/google-mic.svg" alt="">
            <img class="google_icon" src="/google/icons/google-cam.svg" alt="">
            <img v-if="!isGoogleBlank" class="google_icon" src="/google/icons/search.svg" alt="">
          </div>
        </div>

        <div class="prediction" v-if="isFocus && userInput.length != 0">
          <ul v-if="isResults ">
            <li v-for="index in searchOptions[id].items.length"><img class="google_icon" src="/google/icons/search-grey.svg" alt=""><span>{{ searchOptions[id].items[index-1] }}</span></li>
          </ul>
          <div class="button_box" v-if="blank">
            <button class="fake_button">Google Search</button>
            <button class="fake_button">I'm Feeling Lucky</button>
          </div>
        </div>
      </div>
          
</template>

<script>
export default {
  data() {
    return {
      isFocus: false,
      userInput: '',
      isResults: false,
      id: -1,
      isGoogleBlank: true,
      searchOptions: [
        {
          trigger: 'w', 
          items: ['World', 'Weather', 'Weather tomorrow','Work','Winter']
        },
        {
          trigger: 'we', 
          items: ['We', 'Weather', 'Weather tomorrow', 'Weather today','Web','West']
        },
        {
          trigger: 'wea', 
          items: ['Weather', 'Weather tomorrow', 'Weather today','Weather this week','Weather in my area','Weather stations']
        },
        {
          trigger: 'weather i', 
          items: ['Weather in my city', 'Weather in my area', 'Weather India','Weather Italy','Weather Iceland','Weather Ireland']
        },
        {
          trigger: 'weather in I', 
          items: ['Weather in Iceland', 'Weather in India', 'Weather in Ireland','Weather in Indiana','Weather in Italy','Weather in Idaho']
        },
        {
          trigger: 'weather in Ic', 
          items: ['Weather in Iceland', 'Weather in Iceland tomorrow', 'Weather in Iceland this week','Weather in Iceland this time of year','Weather in Iceland winter', 'Weather in Iceland storms']
        },
        {
          trigger: 'weather in Ice', 
          items: ['Weather in Iceland', 'Weather in Iceland tomorrow', 'Weather in Iceland next 14 days','Weather in Iceland in summer','Weather in Iceland in fall', 'Weather in Iceland storms']
        },
        //NEW SEARCH
        {
          trigger: 'r', 
          items: ['Reykjavik', 'Radio', 'Restaurants near me','Read','Rambo']
        },
        {
          trigger: 're', 
          items: ['Reykjavik','Restaurants near me','Read','Red','Remote jobs','Remote Desktop']
        },
        {
          trigger: 'rem', 
          items: ['Rem','Remote jobs','Remote Desktop','Remarkable','Remember','Red Dreams']
        },
        {
          trigger: 'remo', 
          items: ['Remote jobs','Remote jobs Iceland','Remote jobs near me','Remote control','Remote Desktop','Remoulade']
        },
        {
          trigger: 'remote w', 
          items: ['Remote work from home','Remote work jobs','Remote Weekend jobs','Remote worker','Remote work meaning']
        },
        {
          trigger: 'remote we', 
          items: ['Remote weekend jobs','Remote worker','Remote web developer','Remote wellness jobs','Remote website','Remote werken']
        },
        {
          trigger: 'remote wea', 
          items: ['Remote weather station','Remote weapon station','Remote weather jobs','Remote wealth management','Remote weather forecast','Remote weather station cellular']
        },
        {
          trigger: 'remote weat', 
          items: ['Remote weather station','Remote weather jobs','Remote weather station cellular','Remote weather forecast','Remote weather monitoring jobs']
        },
        {
          trigger: 'remote weather s', 
          items: ['Remote weather station','Remote weather satellite','Remote weather station jobs','Remote weather station sensor','Remote weather station information','Remote weather station cellular']
        },
        {
          trigger: 'remote weather st', 
          items: ['Remote weather station','Remote weather station jobs','Remote weather station sensor','Remote weather station information','Remote weather station cellular']
        },
        {
          trigger: 'remote weather station I', 
          items: ['Remote weather station Iceland','Remote weather station information','Remote weather station instructions','Remote weather station internet','Remote weather station Ireland','Remote weather station in the world']
        },
        {
          trigger: 'remote weather station Ic', 
          items: ['Remote weather station Iceland']
        },
      ]
    }
  },
  methods: {
    HangleSubmit() {
      this.$emit('goResults')
    },
    HandleKeyInput () {
      if(this.userInput.length === 0) {this.isResults=false}
      for (let i=0; i<this.searchOptions.length; i++ ) {
        if(this.userInput.valueOf() === this.searchOptions[i].trigger.valueOf()) {
          this.id=i
          this.isResults=true
        }
        
        }
      
    }
  },
  props: {
    blank: Boolean
  }
}
</script>

<style>

.search_wrapper {
  margin: auto;
  display: block;
  width: 600px;
  font-family: arial,sans-serif;
}

.input_wrapper {
  display: flex;

  background-color: white;
  width: 600px;
  border: 1px solid;
 
  border-color: rgba(223,225,229,1);
  border-radius: 25px;
  padding: 3px 0 5px 0;
  
}

.in_focus {
  box-shadow: 0 1px 6px rgba(32,33,36,.28); 
  border-color: white;
}

.on_predition {
  border-radius: 25px 25px 0px 0px;
}

.input_wrapper input {
  display: block;
  margin-right: auto;
  width: 400px;
  height: 36px; 
  border: none;
  font-size: 1rem;
  margin-left: 15px;
}

.input_wrapper input:focus {
  border: none;
  outline: none;
}

.prediction {
  width: 600px;
  min-height: 50px;
  position: absolute;

    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: #fff;
    border-radius: 0 0 24px 24px;
    box-shadow: 0 4px 6px rgba(32,33,36,.28);
    border: 0;
    padding-bottom: 4px;
  
}
.icons_end {
  display: flex;
  margin-right: 10px;
  margin-top: 6px;
    
    align-items: stretch;
    flex-direction: row;
    
}

.icons_start {
  display: flex;
  margin-left: 10px;
  margin-top: 7px;
    align-items: stretch;
    flex-direction: row;
    
}

.icons_start img {
  height: 15px;
  margin-top: 5px;
}

.google_icon {
  height: 25px;
  padding: 0 5px;
  cursor: pointer;
}

.x_icon {
  padding-right: 10px;
  border-right: 1px solid #ccc;
}

.prediction ul {
  padding-left: 0;
}

.prediction li {
  color: black;
  height: 30px;
  list-style-type: none;
  display: flex;
  cursor: default;
}

.prediction li:hover {
  background-color: rgba(223,225,229,.4);
}

.prediction img {
  height: 15px;
  margin-top: 5px;
  margin-left: 14px;
  margin-right: 13px;
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
</style>