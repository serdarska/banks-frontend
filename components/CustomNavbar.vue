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
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse me-3 pe-3 justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li v-for="option in $t('menu')" class="nav-item  mx-3 mx-xl-5 mt-2 px-lg-5 py-0 btn background rounded-5">
              <nuxt-link v-if="$i18n.locale !== 'mk'" class="nav-link active text-black-50 text-uppercase"
                         aria-current="page" :to="localePath(option.link)">{{ $t(option.name) }}
              </nuxt-link>
              <nuxt-link v-if="$i18n.locale !== 'en'" class="nav-link active text-black-50 text-uppercase"
                         aria-current="page" :to="localePath(option.link)">{{ $t(option.name) }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <div class="nav-item dropdown background rounded-5 me-5 mt-1 px-4">
            <a class="nav-link dropdown-toggle text-black-50" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false">
              {{ $t('language') }}
            </a>
            <div class="dropdown">
              <ul class="dropdown-menu background-gray p-0">
                <li class="text-black-50">
                  <nuxt-link class="dropdown-item" :to="switchLocalePath('mk')">Macedonian</nuxt-link>
                </li>
                <li class="text-black-50">
                  <nuxt-link class="dropdown-item" :to="switchLocalePath('en')">English</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
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

</style>
