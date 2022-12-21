<template>
<section>
  <div class="bg-transparent">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="align-items-start">
      <nuxt-link to="/">
        <img src="../assets/images/logo.svg" alt="Logo" class="navbar-brand ms-5"
             width="150"
             height="100">
      </nuxt-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse me-5 pe-5 justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li v-for="option in options" class="nav-item mx-5 mt-2 px-5 py-0 btn background rounded-5">
            <a class="nav-link active text-black-50 text-uppercase" aria-current="page" :href="option.link">{{option.name}}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>
</template>

<script>
export default {
  name: "CustomNavbar",

  data() {
    return {
      options: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Banks',
          link: '/banks'
        },
        {
          name: 'About us',
          link: '/about-us'
        }
        ]
    }
  }
}
</script>

<style scoped>
.background
{
  background: #C9C9C9;
}
</style>
