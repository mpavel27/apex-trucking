<template>
  <div style="background-color: #F8F8F8;">
    <div class="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden transition-all lg:ml-0 ml-20">
        <main>
          <div class="px-4 sm:px-6 lg:pl-4 lg:pr-12 py-8 w-full max-w-9xl mx-auto">
            <DashboardHeader title="Aplicatii trimise" />
            <div class="grid lg:grid-cols-1 grid-cols-1 gap-5 mt-8">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Numele contului
                    </th>
                    <th scope="col" class="px-6 py-3">
                      E-mail
                    </th>
                    <th scope="col" class="px-6 py-3">
                      TruckersMP Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Creat pe
                    </th>
                    <th scope="col" class="px-6 py-3"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="application in applications" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">
                      {{ application.users.user_name }}
                    </td>
                    <td class="px-6 py-4">
                      {{ application.users.email }}
                    </td>
                    <td class="px-6 py-4">
                      {{ application.users.truckersmp_id }}
                    </td>
                    <td class="px-6 py-4">
                      {{ $dayjs(application.users.created_at).format('DD MMM YYYY - hh:mm A') }}
                    </td>
                    <td class="px-6 py-4">
                      <a :href="`/dashboard/applications/${application.application_id}`" class="btn rounded-full py-3 px-5 font-semibold text-black">Vezi aplicația</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "applications",
  middleware: "isAuthenticated",
  data() {
    return {
      applications: null,
    }
  },
  mounted() {
    let that = this
    const response = this.$axios.get('/api/applications').then((response) => {
      this.applications = response.data.application
      console.log(this.applications)
    });
  }
}
</script>

<style scoped>

</style>