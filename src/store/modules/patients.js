import { FETCH_PATIENTS, FETCH_PATIENT_DATA } from '../types';
const state = {
  patientDiagnosis: [],
  patients: []
};

const mutations = {
  FETCH_PATIENTS: async function(state, action) {
    state.patients = await action.payload.data;
  },
  FETCH_PATIENT_DATA: async function(state, action) {
    state.patientDiagnosis = await action.payload;
  }
};

const getters = {
  patients: state => {
    return state.patients;
  },
  patientDiagnosis: state => {
    return state.patientDiagnosis;
  }
};
export default {
  getters,
  state,
  mutations
};
