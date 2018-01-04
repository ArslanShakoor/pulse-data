<template>
  <div :class = 'patientX'>
    <div ref="line"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import Plotly from 'plotly.js/dist/plotly';
import { mapGetters } from 'vuex';
export default {
  mounted() {
    this.plotGraph();
  },

  beforeUpdate() {
    Plotly.purge(this.$refs.line);
  },
  updated() {
    this.plotGraph();
  },

  computed: {
    patientX() {
      return this.$store.getters.creatinineX;
    },
    patientY() {
      return this.$store.getters.creatinineY;
    }
  },
  methods: {
    plotGraph: function() {
      Plotly.plot(
        this.$refs.line,
        [
          {
            x: this.patientX,
            y: this.patientY
          }
        ],
        {
          title: 'Creatinine Graph',
          autosize: false,
          height: 230,
          margin: {
            l: 50,
            r: 50,
            b: 50,
            t: 50,
            pad: 4
          }
        }
      );
    }
  }
};
</script>
