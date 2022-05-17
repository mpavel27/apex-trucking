<template>
  <div class="container px-5 md:px-0 md:mx-auto mt-20 pb-10">
    <div class="flex md:justify-between justify-center items-center">
      <div class="md:text-left text-center">
        <img :src="require('~/assets/images/logo.svg')" style="height: 60px">
        <div class="flex gap-7 mt-3">
          <a href="#" class="text-gray-400"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="text-gray-400"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" class="text-gray-400"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="text-gray-400"><i class="fa-brands fa-discord"></i></a>
          <a href="#" class="text-gray-400"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <p class="text-gray-400 font-light mt-3">www.apex-express.net</p>
      </div>
      <div class="footer-links">
        <div class="flex gap-10">
          <NuxtLink class="text-base font-semibold" to="/">ACASĂ</NuxtLink>
          <a class="text-base font-semibold" href="#">DESPRE NOI</a>
          <a class="text-base font-semibold" href="#">CONTACT US</a>
          <a class="text-base font-semibold" href="#">DRIVER HUB</a>
          <NuxtLink class="text-base font-semibold" to="apply-now">APLICĂ</NuxtLink>
        </div>
        <p class="text-right text-gray-500 mt-6 font-light">Copyright 2022 - 2023 © Apex Team</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
