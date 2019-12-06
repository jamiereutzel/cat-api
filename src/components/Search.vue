<template>
  <div class="search">
    <div class="search__container u-margin--top">

    <div class="menu-options u-margin--bottom">
      <div v-if="categories" class="select-menu">
        <label for="select-menu-category" class="select-menu__label">Category:</label>
        <div class="select-menu__wrapper">
          <img src="http://cdn.onlinewebfonts.com/svg/img_106603.png" class="select-menu__icon" />
          <select class="select-menu__select" id="select-menu-category" @change="onCategoryChange($event)">
            <option value="" disabled selected hidden>Select</option>
            <option v-for="category in categories" v-bind:value="category.id">{{category.name}}</option>
          </select>
        </div>
      </div>

      <div v-if="breeds" class="select-menu">
        <label for="select-menu-breed" class="select-menu__label">Breeds:</label>
        <div class="select-menu__wrapper">
          <img src="http://cdn.onlinewebfonts.com/svg/img_106603.png" class="select-menu__icon" />
          <select class="select-menu__select" id="select-menu-breed" @change="onBreedChange($event)">
            <option value="" disabled selected hidden>Select</option>
            <option v-for="breed in breeds" v-bind:value="breed.id">{{breed.name}}</option>
          </select>
        </div>
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
      let results = this.getCats();
      let categories = this.getCategories();
      let breeds = this.getBreeds();
    },
    methods: {

      getCats() {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=12').then((response) => {
          this.results = response.data;
          console.log(response.data);
        }).catch( error => { console.log(error); });
      },

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

      onCategoryChange(event) {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=12&category_ids='+event.target.value).then( response => {
          this.results = response.data;
        }).catch( error => { console.log(error); });
      },

      onBreedChange(event) {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=12&breed_id='+event.target.value).then( response => {
          this.results = response.data;
        }).catch( error => { console.log(error); });
      }

    }
  }
</script>