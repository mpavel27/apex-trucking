<template>
  <div class="container px-5 md:px-0 md:mx-auto apply-form mt-10">
    <h1 class="font-soulmaze text-2xl md:text-4xl text-center">Aplică acum</h1>
    <h1 class="text-4xl md:text-6xl font-soulmaze-outline under-title opacity-40 text-center">Aplică acum</h1>
    <form action="#" method="POST">
      <div class="shadow overflow-hidden sm:rounded-md mt-10 md:w-1/2 w-auto md:mx-auto mx-0">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6">
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" name="username" id="username" class="mt-1 border-2 focus:border-green-400 w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" />
            </div>
            <div class="col-span-6">
              <label for="email" class="block text-sm font-medium text-gray-700">Adresa E-mail</label>
              <input type="text" name="email" id="email" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" />
            </div>
            <div class="col-span-6">
              <label for="age" class="block text-sm font-medium text-gray-700">Varstă</label>
              <input v-model="age" type="number" name="age" id="age" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" />
              <p>{{ age }}</p>
            </div>
            <div class="col-span-6">
              <label for="truckersmp_id" class="block text-sm font-medium text-gray-700">TruckersMP ID</label>
              <input type="text" name="truckersmp_id" id="truckersmp_id" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" />
            </div>
            <div class="col-span-6">
              <label for="question1" class="block text-sm font-medium text-gray-700">De ce vrei să te alaturi companiei?</label>
              <textarea name="question1" id="question1" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" />
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Aplică acum</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ApplyForm"
}
</script>

<style scoped>

</style>
