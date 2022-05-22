<template>
  <div class="container px-5 md:px-0 md:mx-auto mt-20" data-aos="fade-up" data-aos-duration="800">
    <div class="grid md:grid-cols-2 grid-cols-1 gap-2">
      <div class="md:mb-0 mb-10">
        <img class="shadow-xl our-core-img" :src="require('~/assets/images/application.png')">
      </div>
      <div class="our-core text-right">
        <h1 class="font-soulmaze text-2xl md:text-4xl">Our Core</h1>
        <h1 class="text-4xl md:text-6xl font-soulmaze-outline under-title opacity-40">Our Core</h1>
        <p class="mt-4 text-gray-500">Lorem ipsum dolor sit amet, Apex Express consectetur adipiscing elit. Mauris lobortis cursus libero a scelerisque. In consequat tristique sapien sed rutrum. Curabitur eu magna ante. Morbi accumsan leo quis lectus vulputate, et dapibus mi rutrum. Integer bibendum gravida purus, in tristique purus dignissim eget. Quisque facilisis tortor velit.
          <br><br><br>
          In consequat tristique sapien sed rutrum. Curabitur eu magna ante. Morbi accumsan leo quis lectus vulputate, et dapibus mi rutrum. Integer bibendum gravida purus, in tristique purus dignissim eget. Quisque facilisis tortor velit. </p>
        <div class="flex justify-end gap-5">
          <a href="#" class="btn py-3 px-7 rounded-full mt-8 font-semibold md:text-xl text-base"><i class="fa-solid fa-download mr-3"></i>Descarcă Aplicația</a>
          <a href="#" class="bg-github text-white py-3 px-7 rounded-full mt-8 font-semibold md:text-xl text-base"><i class="fa-brands fa-github mr-3"></i>GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurCore"
}
</script>

<style scoped>

</style>
