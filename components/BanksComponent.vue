<template>
  <section class="bg-light">
    <div class="row">
      <div class="col-7 me-5 pe-5">
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975051.0768451856!2d21.605415792894092!3d41.65061814513073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354159f70bc4809%3A0xe0f25ad6c81fc5b1!2z0KHQtdCy0LXRgNC90LAg0JzQsNC60LXQtNC-0L3QuNGY0LA!5e0!3m2!1smk!2smk!4v1670759068267!5m2!1smk!2smk"
                  width="700" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="ps-5 pt-5 ms-5 mt-5"></iframe>
        </div>
      </div>
      <div class="col-3 ms-5 ps-5 mx-5 px-5 mt-5 ">
        <div class="background rounded-4 d-flex mt-5">
          <i class="fa-light fa-magnifying-glass text-black"></i>
          <input class="form-control py-2 bg-light fs-3 rounded-4" id="exampleDataList" placeholder="Enter a city">
        </div>
        <div class="background rounded-4 text-center py-4 mt-4">
          <ul class="scrollable text-decoration-none list-style-none p-0">
            <li v-for="bank in banks" class="text-decoration-none fs-4 text-black-50">{{ bank.name }}, {{ bank.address }} , {{ bank.city }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

// import {mapState} from 'vuex'

export default {
  name: "BanksComponent",
  // computed: mapState(['banks'])
}
</script>

<style scoped>
.scrollable{
  height: 400px;
  overflow: scroll;
}

.list-style-none{
  list-style: none;
}
</style>
