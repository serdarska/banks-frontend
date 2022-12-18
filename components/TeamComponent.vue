<template>
  <section class="bg-light">
    <div class="row">
      <div class="col-12 col-sm-8 justify-content-center ps-sm-5 ms-sm-5 mt-sm-5 me-sm-3 col-lg-4 ms-lg-5 ps-lg-5 mt-lg-5 pt-lg-5">
        <p class="background text-center rounded-4 fs-3 text-black-50 me-4 px-2 py-3 start-10">
          Our goal is to help you find<br/>
          the bank you have been<br/>
          looking for in an easier and<br/>
          more efficient way. <br/>
        </p>
        <p class="background-color-green ms-5 py-3 text-center rounded-4 fs-3 text-white px-2 py-2">
          You can only find banks<br/>
          in North Macedonia.<br/>
        </p>
        <p class="background text-center rounded-4 fs-3 text-black-50 me-4 px-2 py-3">
          The main goal of this <br/>
          application is to display your<br/>
          desired bank with it's<br/>
          location. <br/>
        </p>
      </div>
      <div class="col-8 p-0 d-none d-lg-block">
        <img src="../assets/images/team.svg" alt="Team" class="position-absolute  bottom-0 end-0 top-20" height="630"
             width="330">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamComponent"
}
</script>

<style scoped>
.background-color-green {
  background: #3cb371;
}

.top-20 {
  top: 20%;
}

</style>
