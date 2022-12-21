<template>
  <div>
    <BanksComponent :banks="filteredBanks" @set-filters="filtersChanged($event)"/>
  </div>
</template>

<script>
export default {
  name: "banks",
  data() {
    return {
      allBanks: [],
      filteredBanks: [],
      filters: {
        s: ''
      }
    }
  },

  async mounted() {
    // await this.load(this.filters);
    this.$axios.$get('http://localhost:8080/api/banks/').then(
      response => {
        this.filteredBanks = response;
        this.allBanks = response;
      });
  },
  methods: {
    filtersChanged(f) {
      this.filters.s = f.s;
      let filteredBanks1 = this.allBanks.filter(bank => bank.name.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0 ||
        bank.city.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0 || bank.address.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0);
      this.filteredBanks = filteredBanks1;
    }
  }
}
</script>

<style scoped>

</style>
