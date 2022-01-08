<template>
  <div class="separator"> <p>|</p> </div>
</template>

<script>
export default {
  name: "Separator",
}
</script>

<style scoped>
  .separator {
    margin-left: 20px;
    margin-right: 20px;

    display: flex;

    justify-content: center;
    align-items: center;

    text-align: center;

    font-weight: lighter;
    text-shadow: 0 0 2px black;

  }
</style>