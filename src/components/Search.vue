<template>
  <div class="search">
    <div class="search__container">
      <button v-on:click="buttonClicked" class="btn">Click Me</button>

      <div v-if="categories" class="select-menu">
        <label for="" class="select-menu__label">Category:</label>
        <div class="select-menu__wrapper">
          <img src="../assets/arrow.png" class="select-menu__icon" />
          <select class="select-menu__select" @change="onCategoryChange($event)">
            <option value="" disabled selected hidden>Select</option>
            <option v-for="category in categories" v-bind:value="category.id">{{category.name}}</option>
          </select>
        </div>
      </div>

      <div v-if="breeds" class="select-menu">
        <label for="" class="select-menu__label">Breeds:</label>
        <div class="select-menu__wrapper">
          <img src="../assets/arrow.png" class="select-menu__icon" />
          <select class="select-menu__select" @change="onBreedChange($event)">
            <option value="" disabled selected hidden>Select</option>
            <option v-for="breed in breeds" v-bind:value="breed.id">{{breed.name}}</option>
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
          this.categories = response.data;
        }).catch( error => { console.log(error); });
      },

      getBreeds() {
        axios.get('https://api.thecatapi.com/v1/breeds').then((response) => {
          this.breeds = response.data;
        }).catch( error => { console.log(error); });
      },

      buttonClicked: function (event) {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=15').then( response => {
          this.results = response.data;
        });
      },

      onCategoryChange(event) {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=15&category_ids='+event.target.value).then( response => {
          this.results = response.data;
        });
      },

      onBreedChange(event) {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=15&breed_id='+event.target.value).then( response => {
          this.results = response.data;
        });
      }

    }
  }
</script>