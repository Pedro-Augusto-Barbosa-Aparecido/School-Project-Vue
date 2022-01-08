<template>
  <div>
    <div v-on:click="show_opt" id="container-select">
      <p id="value_selected">{{ text_select }}</p>
      <i :id="name" class="bi bi-chevron-down"></i>
    </div>
    <div v-if="data" :id="'data-static-' + name" class="container-opt">
      <p v-on:click="change_value_selected" v-for="(_data, index) in data" :key="index">
        {{ _data.text }}
        <input :name="name + '-select'" class="value_data" style="display: none;" :value="_data.value">
      </p>
    </div>
    <div v-else class="container-opt">
      <p v-on:click="change_value_selected" v-for="(_data, index) in response_data" :key="index">
        {{ _data.text }}
        <span class="value_data" style="display: none;">{{ _data.value }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Select",
  data () {
    return {
      text_select: "",
      value_select: "-1",
      response_data: []

    }

  },
  props: {
    data: [Array, String, Object, null],
    url: String,
    name: String,
    label: String
  },
  methods: {
    show_opt () {
      if (this.data) {
        $(`#data-static-${this.name}`).toggle();
        const id = `#${this.name}`;
        let timeout = null;

        if ($(id).hasClass("bi-chevron-down")) {
          $(id).removeClass("bi-chevron-down");
          $(id).addClass("bi-chevron-up");

          timeout = setTimeout(() => {
            $(id).removeClass("bi-chevron-up");
            $(id).addClass("bi-chevron-down");

            $(`#data-static-${this.name}`).hide();

          }, 4000);

        }

        else {
          $(id).removeClass("bi-chevron-up");
          $(id).addClass("bi-chevron-down");

          clearTimeout(timeout);

        }

      }

    },

    change_value_selected (ev) {
      const el = $(ev.target);
      const elVal = $(el.children()[0]);
      const id = `#${this.name}`;

      this.text_select = el.text();
      this.value_select = elVal.val();

      $(id).removeClass("bi-chevron-up");
      $(id).addClass("bi-chevron-down");

      $(`#data-static-${this.name}`).hide();

      this.$emit("change-value", `${this.name}-${this.value_select}`);

    },

  },

}
</script>

<style scoped>
  #value_selected, .container-opt>p {
    text-align: center;

    font-size: 18px;
    font-family: Calibri, sans-serif;

    width: 190px;

  }

  #container-select {
    border-radius: 0;
    border: 1px solid black;

    width: 200px;
    height: 35px;

    padding: 5px;
    margin-left: 10px;

    display: flex;

    justify-content: space-between;
    align-items: center;

  }

  #container-select:hover {
    cursor: pointer;

  }

  .container-opt {
    border-radius: 4px;
    border: 0;

    box-shadow: 2px 1px 6px 0 lightgrey;

    width: 200px;
    height: fit-content;

    margin-left: 10px;
    margin-top: 5px;

    position: absolute;

    text-align: center;

    background-color: #FFF;

    display: none;

  }

  .container-opt>p {
    width: 100% !important;

  }

  .container-opt>p:hover {
    cursor: pointer;

    background-color: #D6D6D6;

  }

  .container-opt>p {
    padding: 10px;

  }

</style>