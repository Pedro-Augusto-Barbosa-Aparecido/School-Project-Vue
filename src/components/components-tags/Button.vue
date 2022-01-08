<template>
  <div :id="id" v-on:click="fn" class="button" >
    <i class="bi" :class="icon_class"></i>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
      default: "Button"
    },
    icon_class: {
      type: String,
      required: false,
      default: "bi-search"
    },
    id: {
      type: String,
      required: true
    },

  },
  methods: {
    fn () {
      this.$emit("click");

    }

  }
}
</script>

<style scoped>
  .button {
    border: 2px solid #28A745;
    border-radius: 5px;

    background-color: #28A745;

    display: flex;

    justify-content: center;
    align-items: center;

    height: 36px;
    width: fit-content;

    padding-left: 10px;
    padding-right: 10px;

    margin-left: 10px;

    color: #FFF !important;

    font-weight: 300 !important;

    box-shadow: 0 0 3px #222;

    transition: all .5s ease;

  }

  .button>p {
    margin-left: 10px;

    font-family: Calibri, sans-serif !important;
    font-size: 20px;

  }

  .button:hover {
    cursor: pointer;

  }

  .button:active {
    transform: scale(.95);
    box-shadow: 0 0 0 #222;


  }

</style>