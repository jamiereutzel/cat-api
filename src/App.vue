<template>
  <div id="app">
    <hero/>
    <search/>
  </div>
</template>

<script>
import Hero from './components/Hero'
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    Search,
    Hero
  }
}
</script>
