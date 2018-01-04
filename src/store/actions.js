import {
  FETCH_PATIENTS,
  FETCH_PATIENT_DATA,
  FETCH_ICD,
  FETCH_CREATININE
} from './types';
import _ from 'lodash';
import axios from 'axios';

export const initPatient = async ({ commit }) => {
  const res = await axios.get('http://localhost:3000/patients');
  commit({ type: FETCH_PATIENTS, payload: res });
};

export const fetchICD = async ({ commit }, value) => {
  const res = await axios.get(
    `http://localhost:3000/diagnosis?patient_id=${value}`
  );
  var res2 = alasql(
    'SELECT icd_code_id,count(icd_code_id) as icd_count FROM ? GROUP BY icd_code_id ORDER BY icd_count DESC',
    [res.data]
  );
  commit({ type: FETCH_ICD, payload: res2 });
};

export const fetchCreatinie = async ({ commit }, value) => {
  const res = await axios.get(`http://localhost:3000/labs?patient_id=${value}`);
  commit({ type: FETCH_CREATININE, payload: res });
};

export const fetchPatientData = async ({ commit }, value) => {
  const res = await axios.get(
    `http://localhost:3000/diagnosis?patient_id=${value}`
  );
  const res1 = await axios.get(`http://localhost:3000/icd_codes`);
  const res3 = [];
  res.data.forEach(function(element) {
    res3.push({
      date: element.date,
      icd_code_id: element.icd_code_id,
      description: res1.data.find(e => e.id === element.icd_code_id).description
    });
  });
  commit({ type: FETCH_PATIENT_DATA, payload: res3 });
};
