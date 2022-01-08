<template>
  <div id="container-inp">
    <input @change="save_value" :name="name" :id="id">
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "TextInput",
  props: {
    name: String,
    id: String
  },
  methods: {
    save_value (ev) {
      const text = `${this.name}-${$(ev.target).val()}`;
      this.$emit("change-text", text);

    }
  }
}
</script>

<style scoped>
#container-inp {
  border-radius: 0;
  border: 1px solid black;

  width: 200px;
  height: 35px;

  margin-left: 10px;

}

#container-inp>input {
  height: 100%;
  width: 100%;

  padding: 5px;

  font-size: 18px;
  font-family: Calibri, sans-serif;

}

#container-inp>input:focus {
  outline: none;

}

</style>