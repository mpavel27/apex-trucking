<template>
  <div class="header flex items-center">
    <div class="container px-5 md:px-0 md:mx-auto">
      <div class="flex justify-between items-center" data-aos="fade-right">
        <div class="flex flex-col">
          <h1 class="text-4xl md:text-6xl font-soulmaze-outline milions opacity-40">Millions of Miles</h1>
          <h1 class="text-2xl md:text-4xl font-soulmaze">Millions of Miles<br>with Smiles<span class="text-primary">.</span></h1>
          <h1 class="text-4xl md:text-6xl font-soulmaze-outline smiles opacity-40">with Smiles</h1>
          <p class="text-lg font-semibold mt-2"><span class="text-underline">Changing The Way Virtual Trucking Is Today</span></p>
          <div class="flex gap-5 mt-8">
            <a href="#" class="bg-patreon font-semibold p-3 px-7 rounded-full text-center"><i class="fa-brands fa-patreon mr-3"></i>Patreon</a>
            <a href="#" class="bg-discord font-semibold p-3 px-7 rounded-full text-center"><i class="fa-brands fa-discord mr-3"></i>Discord</a>
          </div>
        </div>
      </div>
    </div>
    <img data-aos="fade-left" :src="require('~/assets/images/apex-truck.png')">
  </div>
</template>

<script>
export default {
  name: "MainHeader"
}
</script>

<style scoped>

</style>
