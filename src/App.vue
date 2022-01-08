<template>
  <div id="app">
    <Header />
    <div style="display: flex;">
      <Menu />
      <router-view path="$router.key"></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import "./styles/global.css";

import Header from './components/Header.vue'
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default {
  name: 'App',
  components: {
    Menu,
    Footer,
    Header
  },
  watch: {
    $route: {
      immediate: true,
      handler: (to) =>{
        document.title = to.meta.title || "School";

      }
    }
  }
}
</script>

<style>
</style>
