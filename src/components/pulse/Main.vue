<template>
  <div class="row">
    <div class="col-md-3">
      <div>
        <PatientsData></PatientsData>
      </div>
    </div>
    <div class="col-md-9">

      <div>
        <CreatinineGraphData></CreatinineGraphData>
      </div>
      <div>
        <IcdGraphData></IcdGraphData>
      </div>
      <div>
        <patientDiagnosis ></patientDiagnosis>
      </div>
    </div>
  </div>
</template>
<script>
import IcdGraph from '../graphs/IcdGraph';
import { mapActions } from 'vuex';
import CreatinineGraph from '../graphs/CreatinineGraph';
import Diagnosis from './Diagnosis';
import Patients from './Patients';
import Vue from 'vue';

export default {
  data() {
    return {
      columns: ['id', 'sex', 'risk_score', 'age'],
      options: {
        rowClick: function(row) {
          console.log(row);
        }
      }
    };
  },
  components: {
    patientDiagnosis: Diagnosis,
    IcdGraphData: IcdGraph,
    CreatinineGraphData: CreatinineGraph,
    PatientsData: Patients
  },
  methods: {
    ...mapActions({
      fetchData: 'initPatient'
    })
  },
  created() {
    this.fetchData();
  }
};
</script>
