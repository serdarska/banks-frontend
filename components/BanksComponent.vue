<template>
  <section>
    <div class="row">
      <div class="col-7 me-5 pe-5">
        <div>
          <img src="../assets/images/magnifying-glass.svg" alt="Magnifying glass" height="700">
        </div>
      </div>
      <div class="col-3 ms-5 ps-5 mx-5 px-5 mt-5 ">
        <div class="bg-secondary rounded-4 d-flex mt-5">
          <i class="fa-light fa-magnifying-glass"></i>
          <p class="px-5 py-1 fs-2 text-black-50 pt-2">Enter a city</p>
        </div>
        <div class="bg-secondary rounded-4 text-black-50 text-center py-4 mt-4">
          <ul>
            <li v-for="item in menu">{{ item.name }}, {{ item.address }} , {{ item.city }}</li>
          </ul>

        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: "BanksComponent",
  computed: mapState(['menu'])
}
</script>

<style scoped>

</style>
