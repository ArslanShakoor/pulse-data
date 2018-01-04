<template>
  <div class="arslan">
    <v-client-table :data='fun' :columns="columns" :options="options" @row-click="changeData">
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
      columns: ['id', 'sex', 'risk_score', 'age'],
      options: {
        filterByColumn: 'false',
        filterable: false,
        perPage: 15,
        perPageValues: []
      }
    };
  },
  methods: {
    ...mapActions({
      fetchData: 'initPatient',
      getPatientData: 'fetchPatientData',
      getICD: 'fetchICD',
      getCreatinie: 'fetchCreatinie'
    }),
    changeData: function(row) {
      let json = JSON.parse(JSON.stringify(row));
      this.getPatientData(json.row.id);
      this.getICD(json.row.id);
      this.getCreatinie(json.row.id);
    }
  },
  computed: {
    fun() {
      return this.$store.getters.patients;
    }
  }
};
</script>
