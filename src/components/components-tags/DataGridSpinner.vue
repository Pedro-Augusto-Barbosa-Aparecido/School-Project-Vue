<template>
  <div style="width: 100%; left: 50%; position: fixed;" :class="extraClass">
    <div :id="id" class="spinner-data-grid">

    </div>
  </div>
</template>

<script>
export default {
  name: "DataGridSpinner",
  props: {
    id: {
      type: String,
      required: true

    },

    extraClass: {
      type: String,
      required: false

    }

  }
}
</script>

<style scoped>
.spinner-data-grid {
  display: none;

  border: 3px solid #ABABAB;
  border-radius: 50%;

  border-top-color: #444;

  width: 35px;
  height: 35px;

  background-color: hsla(140,70%,90%,0.3);

  animation: spinner 1s linear infinite;

}

@keyframes spinner {
  0% {
    transform: rotate(0deg);

  }

  100% {
    transform: rotate(360deg);

  }

}



</style>