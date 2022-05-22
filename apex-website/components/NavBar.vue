<template>
  <div class="navbar">
    <div class="container mx-auto">
      <div class="flex mx-auto
          md:flex md:justify-between md:items-center navbar-mobile py-7">
        <div class="flex justify-between md-full">
          <img class="logo ml-8 md:ml-0" :src="require('~/assets/images/logo.svg')">
          <button
            @click="showMenu = !showMenu"
            type="button"
            class="
                text-gray-800
                focus:outline-none
                mr-8
                block lg:hidden
              "
          >
            <i class="fa-solid text-3xl" :class="{'fa-bars': !showMenu, 'fa-times': showMenu}"></i>
          </button>
        </div>
        <div :class="showMenu ? 'flex' : 'hidden'" class="
            navbar-links
            absolute lg:relative
            top-0 lg:top-auto
            bg-white lg:bg-transparent
            max-w-max lg:max-w-none
            flex-col lg:flex
            slide-in-left-mobile
            shadow-lg
            lg:shadow-none
            lg:space-y-0
            lg:flex-row
            lg:items-center
            lg:space-x-10
            lg:mt-0 lg:gap-14 gap-6 font-semibold items-center">
          <img class="logo md:hidden" :src="require('~/assets/images/logo.svg')">
          <NuxtLink to="/">Acasă</NuxtLink>
          <a href="#">Despre Noi</a>
          <a href="#">Contact</a>
          <NuxtLink to="/dashboard">Driver Hub</NuxtLink>
          <NuxtLink to="apply-now" class="btn py-2 px-7 rounded-full">Aplică acum!</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavBar",
  data () {
    return {
      showMenu: false,
    }
  }
}
</script>

<style scoped>

</style>
