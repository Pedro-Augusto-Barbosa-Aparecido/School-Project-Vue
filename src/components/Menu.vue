<template>
  <div class="menu">
    <router-link to="/admin/subjects">
      <div class="item-menu">
        <i class="bi bi-server"></i>
        Data Grid
      </div>
    </router-link>
    <router-link to="/admin/subjects/dashboard">
      <div class="item-menu">
        <i class="bi bi-graph-up"></i>
        Dashboard
      </div>
    </router-link>
  </div>
</template>

<script>
// import $ from "jquery";

export default {
  name: "Menu",
  mounted() {
    // $(".menu").hover(() => {
    //   // $(".menu").animate({ width: 'toggle' }, 1);
    //
    // }, () => {
    //   // $(".menu").animate({ width: 'toggle' }, 1);
    //
    // });

  }
}
</script>

<style scoped>
  .menu {
    height: calc(100vh - 60px - 150px);
    width: 30px;

    background-color: transparent;

    position: absolute;

    transition: all .5s ease;

    content-visibility: auto;

  }

  .menu:hover {
    width: 180px;

    background-color: #FFF;

    box-shadow: 3px 0 2px gray;

  }

  .menu>a {
    text-decoration: none;

  }

  .item-menu {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin-left: 15px;

    width: 120px;

    margin-top: 20px;

    overflow: hidden;

    text-decoration: none;

  }

</style>