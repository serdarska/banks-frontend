<template>
  <div>
    <custom-navbar/>
    <banks-component :banks="banks" @set-filters="load($event)"/>
  </div>
</template>

<script>
export default {
  name: "banks",
  data() {
    return {
      banks: [],
      filters: {
        s: ''
      }
    }
  },

  async mounted() {
    await this.load(this.filters);
  },
  methods: {
    async load(f) {
      this.filters.s = f.s;
      const arr = [];

      if (this.filters.s) {
        arr.push('s=${this.filters.s}');
      }

      const response = await fetch('http://localhost:8080/api/banks/');
      const content = await response.json();
      this.banks = content.data;

    }
  }
}
</script>

<style scoped>

</style>
