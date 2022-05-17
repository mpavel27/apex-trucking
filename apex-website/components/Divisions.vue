<template>
  <div class="container px-5 md:px-0 md:mx-auto divisions mt-20">
    <div class="grid grid-cols-3 items-center">
      <div class="col-span-2" data-aos="fade-right">
        <h1 class="font-soulmaze text-2xl md:text-4xl">About our divisionS</h1>
        <h1 class="text-4xl md:text-6xl font-soulmaze-outline under-title opacity-40">About our divisionS</h1>
        <p class="text-gray-500 mt-5">Lorem ipsum dolor sit amet, Apex Express consectetur adipiscing elit. Mauris lobortis cursus libero a scelerisque. In consequat tristique sapien sed rutrum. Curabitur eu magna ante. Morbi accumsan leo quis lectus vulputate, et dapibus mi rutrum. </p>
        <div class="flex mt-5">
          <a href="#" class="btn py-3 px-7 font-semibold rounded-full">Vezi mai multe</a>
        </div>
      </div>
      <div>
        <div class="flex justify-end align-top" data-aos="fade-left">
          <img :src="require('~/assets/images/truck-cabin.png')">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Divisions"
}
</script>

<style scoped>

</style>
