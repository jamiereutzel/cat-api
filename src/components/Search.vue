<template>
  <div class="search">
    <button v-on:click="buttonClicked">Click Me</button>

    <div v-if="result"
      <img v-bind:src="result" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Search',
    data () {
      return {
        result: ''
      }
    },
    methods: {
      buttonClicked: function (event) {
        axios.defaults.headers.common['x-api-key'] = "59d8c29e-53dc-4dde-93f3-a5aea8aaa5a9" 
        axios.get('https://api.thecatapi.com/v1/images/search').then( response => {
          console.log(response.data);
          this.result = response.data[0].url;
        });
      }
    }
  }
</script>