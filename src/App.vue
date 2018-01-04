<template>
  <div class="container">
    <div class="col-md-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      fetchData: 'initPatient'
    })
  },
  created() {
    console.log('xyz');
    this.fetchData();
  }
};
</script>
