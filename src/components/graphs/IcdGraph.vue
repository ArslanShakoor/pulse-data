<template>
    <div :class='patientX'>
    <div ref="bar"></div>
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
    Plotly.purge(this.$refs.bar);
  },
  updated() {
    this.plotGraph();
  },
  computed: {
    patientX() {
      return this.$store.getters.icdX;
    },
    patientY() {
      return this.$store.getters.icdY;
    }
  },
  methods: {
    plotGraph: function() {
      Plotly.plot(
        this.$refs.bar,
        [
          {
            x: this.patientX,
            y: this.patientY,
            type: 'bar'
          }
        ],
        {
          title: 'Top 10 ICD codes Graph',
          autosize: false,
          height: 230,
          margin: {
            l: 50,
            r: 50,
            b: 80,
            t: 50,
            pad: 4
          }
        }
      );
    }
  }
};
</script>
