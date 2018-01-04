<template>
  <div class="diagnosis">
  <v-client-table :data='patientInfo' :columns="columns" :options="options" >
  </v-client-table>
  </div>
</template>
<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import { ClientTable, Event } from 'vue-tables-2';
Vue.use(ClientTable);
export default {
  data() {
    return {
      columns: ['date', 'icd_code_id', 'description'],
      options: {
        filterByColumn: 'false',
        filterable: false,
        perPage: 4,
        perPageValues: []
      }
    };
  },
  computed: {
    patientInfo() {
      return this.$store.getters.patientDiagnosis;
    }
  }
};
</script>
