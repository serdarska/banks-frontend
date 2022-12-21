<template>
  <section class="bg-light height: 100px">
    <div class="row  mx-0 px-0">
      <div class="col-8 p-0">
        <div class="position-absolute  d-none d-xl-block d-none d-lg-block">
          <img src="../assets/images/gray-triangle.svg" alt="Grey Triangle" height="700">
        </div>
        <div class="text-center text-black-50 text-size text-uppercase me-5 pe-5 top-40 position-relative">
          Find your bank <br/>
          on the go!
        </div>
      </div>
      <div class="col-4 align-items-end p-0 ">
        <div class="position-absolute start-48  d-none d-lg-block">
          <img src="../assets/images/green-triangle.svg" alt="Green Triangle" height="700">
        </div>
        <div class="ratio ratio-695x742  d-none d-lg-block ">
          <img src="../assets/images/bank.svg" alt="Bank" class="align-items-end top-15">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection"
}
</script>

<style scoped>
.text-size {
  font-size: 50px;
}

.start-48 {
  left: 48%;
}

.top-40 {
  top: 40%;
}

.top-15 {
  top: 15%;
}

</style>
