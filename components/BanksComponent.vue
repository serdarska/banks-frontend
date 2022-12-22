<template>
  <section class="bg-light">
    <div class="row">
      <div class="col-7 me-5 pe-5">
        <div>
          <MapComponent :banks="banks"/>
        </div>
      </div>
      <div class="col-3  mx-5 mt-5 col-xxl">
        <template>
          <div class="background rounded-4 d-flex mt-5 input-group">
            <input v-if="$i18n.locale == 'en'" class="form-control py-2 bg-light fs-3 rounded-4"  placeholder="Find your bank"
                   @keyup="search($event.target.value)"/>
            <input v-if="$i18n.locale == 'mk'" class="form-control py-2 bg-light fs-3 rounded-4"  placeholder="Најдете ја вашата банка"
                   @keyup="search($event.target.value)"/>
          </div>
          <div class="background rounded-4 text-center py-4 mt-4 scrollable overflow-auto">
            <ul class=" text-decoration-none list-style-none p-0">
              <div>
                <li v-for="bank in banks" :key="bank.id"
                    class="bg-light px-4 mx-4 my-4 ml-4 rounded-4 text-decoration-none font-weight-light fs-4 text-black-50 border border-bottom ">
                  {{ bank.name }}, {{ bank.address }} , {{ bank.city }}
                </li>
              </div>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: "BanksComponent",
  props: ['banks'],
  methods: {
    search(s) {
      this.$emit('set-filters', {
        s
      });
    }
  }
}
</script>

<style scoped>
.scrollable {
  height: 400px;
  overflow: scroll;
}

.list-style-none {
  list-style: none;
}

.background {
  background: #C9C9C9;
}
</style>
