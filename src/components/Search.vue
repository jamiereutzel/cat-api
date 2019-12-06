<template>
  <div class="search">
    <div class="search__container">
      <button v-on:click="buttonClicked" class="btn">Click Me</button>

      <div v-if="categories" class="select-menu">
        <label for="" class="select-menu__label">Category:</label>
        <div class="select-menu__wrapper">
          <img src="../assets/arrow.png" class="select-menu__icon" />
          <select class="select-menu__select">
            <option value="" disabled selected hidden>Select</option>
            <option v-for="category in categories" value="category.id">{{category.name}}</option>
          </select>
        </div>
      </div>

      <div v-if="breeds" class="select-menu">
        <label for="" class="select-menu__label">Breeds:</label>
        <div class="select-menu__wrapper">
          <img src="../assets/arrow.png" class="select-menu__icon" />
          <select class="select-menu__select">
            <option value="" disabled selected hidden>Select</option>
            <option v-for="breed in breeds" value="breed.id">{{breed.name}}</option>
          </select>
        </div>
      </div>

      <div v-if="results" class="img-grid">
        <div v-for="result in results" class="img-grid__item">
          <img v-bind:src="result.url" class="img-grid__img" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Search',
    data () {
      return {
        results: '',
        categories: '',
        breeds: ''
      }
    },
    mounted () {
      let categories = this.getCategories();
      let breeds = this.getBreeds();
    },
    methods: {

      getCategories() {
        axios.get('https://api.thecatapi.com/v1/categories').then((response) => {
          console.log(response.data);
          this.categories = response.data;
        }).catch( error => { console.log(error); });
      },

      getBreeds() {
        axios.get('https://api.thecatapi.com/v1/breeds').then((response) => {
          console.log(response.data);
          this.breeds = response.data;
        }).catch( error => { console.log(error); });
      },

      buttonClicked: function (event) {
        axios.defaults.headers.common['x-api-key'] = "59d8c29e-53dc-4dde-93f3-a5aea8aaa5a9";
        axios.get('https://api.thecatapi.com/v1/images/search?limit=10').then( response => {
          console.log(response.data);
          this.results = response.data;
        });
      }
    }
  }
</script>