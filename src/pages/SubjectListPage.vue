<template>
   <main>
     <h1 style="font-family: 'JetBrains Mono Medium', sans-serif !important;">Subject List</h1>
     <form id="filters">
        <div class="field">
          <label>Name: </label>
          <TextInput @change-text="search_action" name="name" id="name" />
        </div>
        <div class="field">
          <label>Status: </label>
          <Select @change-value="search_action" name="active" label="Status" :data="[{ text: 'Active', value: '1' }, { text: 'Inactive', value: '0' }]" />
        </div>
        <div class="field">
           <label>Continuation: </label>
           <Select @change-value="search_action" name="continuation" :data="[{ text: 'Continue', value: '1' }, { text: 'Not Continue', value: '0' }]" />
        </div>
        <Button @click="searchData" id="submit" text="Search" icon_class="bi-search" />
        <Separator />
        <router-link to="/admin/subjects/create">
          <Button @click="log" id="new-subject" text="New Subject" icon_class="bi-plus-lg" />
        </router-link>
        <Button @click="log" id="import-subject" text="Import Subject by Excel" icon_class="bi-file-earmark-plus" />
        <Button @click="log" id="export-subject" text="Export Subject To Excel" icon_class="bi-file-earmark-excel" />
     </form>
     <div id="data-grid">
       <DataGrid id="data-table" name="data-table" url_data="#" />
       <DataGridSpinner id="Spinner-load-data" extra-class="full-spinner" />
     </div>
   </main>
</template>

<script>
import Select from "../components/components-tags/Select";
import TextInput from "../components/components-tags/TextInput";
import Button from "../components/components-tags/Button";
import Separator from "../components/components-tags/Separator";
import DataGrid from "../components/components-tags/DataGrid";
import DataGridSpinner from "../components/components-tags/DataGridSpinner";
import $ from "jquery";

export default {
  name: "SubjectListPage",
  data () {
    return {
      filters_values: {},

    }

  },
  components: {
    DataGridSpinner,
    DataGrid,
    Separator,
    Button,
    TextInput,
    Select
  },
  methods: {
    search_action (value) {
      const data = value.split("-");
      this.filters_values[data[0]] = data[1];

    },

    searchData () {
      if ($("#data-table>tbody").children().length !== 0) {
        $(".full-spinner").show();
        $("#Spinner-load-data").show();

        setTimeout(() => {
          $(".full-spinner").hide();

        }, 3000);

      }

    },

    log () {

    }

  },
  mounted() {
    $(".full-spinner").hide();

  }
}
</script>

<style scoped>
.full-spinner {
  width: 100%;
  height: 100vh;

  position: absolute;

  z-index: 999999;

  background-color: #E8E8E8;
  opacity: .8;

  top: 0;
  left: 0 !important;

  display: flex;
  justify-content: center;
  align-items: center;

}

#data-grid {
  margin: 20px 30px;

  width: -moz-max-content;
  height: max-content;

  overflow-x: auto;

}

#new-subject {
  margin-left: 0;

}

#import-subject, #export-subject {
  color: #000 !important;

  background-color: lightgray;
  border: 2px solid #111;

}

.field {
  margin-left: 20px;

  display: flex;

  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

}

.field>label {
  font-size: 20px;

}

.field>input {
  width: 200px;
  height: 30px;

  border: 1px solid gray;

  padding: 5px;
  margin-left: 5px;

  font-size: 15px;

}

.field>input:focus {
  border: 1px solid black;
  border-radius: 0;

  outline: none;

}

.field>select, .field>option {
  font-family: Calibri, sans-serif;
  font-size: 15px;

  text-align: center;

  border: 1px solid black;
  border-radius: 0;

}

.field>option {
  -moz-border-radius: 0;
  -webkit-border-radius: 0;

}

.field>select {
  width: 200px;
  height: 30px;

  outline: none;

  margin-left: 5px;
  padding: 5px;

}

input, label {
  font-weight: normal;
  font-family: Calibri, sans-serif;

}

h1 {
  margin-top: 15px;
  margin-left: 20px;

}

#filters {
  width: 100%;
  height: fit-content;

  padding: 10px;

  display: flex;

  flex-direction: row;
  flex-wrap: wrap;

}

</style>