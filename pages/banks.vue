<template>
  <div>
    <banks-component :banks="filteredBanks" @set-filters="filtersChanged($event)"/>
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
    const response = await fetch('http://localhost:8080/api/banks/');
    const content = await response.json();
    this.allBanks = content.data;
    this.filteredBanks = content.data;

  },
  methods: {
    filtersChanged(f) {
      this.filters.s = f.s;
      this.filteredBanks = this.allBanks.filter(p => p.name.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0 ||
        p.address.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0 || p.city.toLowerCase().indexOf(this.filters.s.toLowerCase()) >= 0);
    //   const arr = [];
    //
    //   if (this.filters.s) {
    //     arr.push(`s=${this.filters.s}`);
    //   }

      // const response = await fetch('http://localhost:8080/api/banks/');
      // const content = await response.json();
      // this.allBanks = content.data;
      // this.filteredBanks = content.data;

    }
  }
}
</script>

<style scoped>

</style>
