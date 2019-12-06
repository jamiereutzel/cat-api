<template>
  <div class="search">
    <button v-on:click="buttonClicked">Click Me</button>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return { }
    },
    methods: {
      buttonClicked: function (event) {
        console.log("Button Has Been Clicked");
      }
    }
  }
</script>