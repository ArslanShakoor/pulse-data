import { FETCH_ICD, FETCH_CREATININE } from '../types';
const state = {
  icd: [],
  labValue: [],
  creatinine: []
};

const mutations = {
  FETCH_ICD: async function(state, action) {
    state.icd = await action.payload;
  },

  FETCH_CREATININE: async function(state, action) {
    state.creatinine = await action.payload.data;
  }
};

const getters = {
  icdX: state => {
    return state.icd.slice(0, 10).map(a => a.icd_code_id);
  },
  icdY: state => {
    return state.icd.slice(0, 10).map(a => a.icd_count);
  },
  creatinineX: state => {
    return state.creatinine.map(a => a.date);
  },
  creatinineY: state => {
    return state.creatinine.map(a => a.value);
  }
};
export default {
  getters,
  state,
  mutations
};
