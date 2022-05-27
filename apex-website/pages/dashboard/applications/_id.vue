<template>
  <div style="background-color: #F8F8F8;">
    <div class="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden transition-all lg:ml-0 ml-20">
        <main>
          <div class="px-4 sm:px-6 lg:pl-4 lg:pr-12 py-8 w-full max-w-9xl mx-auto">
            <DashboardHeader title="Aplicatii trimise" />
            <div class="mt-7 block p-6 bg-white rounded-lg border border-gray-200">
              <h5 class="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" v-model="userName">{{ userName }}</h5>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500" v-model="createdAt">{{ createdAt }}</time>
              <p class="text-gray-500 mt-5">Varstă</p>
              <p class="font-semibold text-gray-700 dark:text-gray-400" v-model="age">{{ age }}</p>
              <p class="text-gray-500 mt-5">De ce vrei să te alaturi companiei?</p>
              <p class="font-semibold text-gray-700 dark:text-gray-400" v-model="question">{{ question }}</p>
              <button @click="setApplicationStatus(applicationId, 1)" type="button" class="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-3 focus:outline-none">ACCEPTĂ</button>
              <button @click="setApplicationStatus(applicationId, 0)" type="button" class="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-3 focus:outline-none">RESPINGE</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "applications-id",
  middleware: "isAuthenticated",
  data() {
    return {
      userName: '',
      createdAt: '',
      question: '',
      age: '',
      csrf: '',
      applicationId: null,
    }
  },
  mounted() {
    let that = this;
    const application = this.$axios.get(`/api/application/${this.$route.params.id}`).then((response) => {
      that.userName = response.data.application.users.user_name;
      that.createdAt = that.$dayjs(response.data.application.users.created_at).format('DD MMM YYYY - hh:mm A');
      that.question = response.data.application.about_section;
      that.age = response.data.application.age;
      that.applicationId = response.data.application.application_id
    });
    const response = this.$axios.get('/api/csrf').then((response) => {
      that.csrf = response.data.csrfToken;
    });
  },
  methods: {
    async setApplicationStatus(applicationId, status) {
      let that = this
      let res = await this.$axios.create({withCredentials: true}).post(`/api/application/${applicationId}/status/${status}`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'csrf-token-apex': that.csrf
        }
      }).catch((e) => {
        this.$toast.show({
          type: 'error',
          title: 'Eroare',
          message: `A aparut o eroare ${e}`,
          timeout: 3
        })
      });
      if(res && res.data === 'success') {
        window.location.href = '/dashboard/applications'
      }
    }
  }
}
</script>

<style scoped>

</style>