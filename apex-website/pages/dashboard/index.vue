<template>
  <div style="background-color: #F8F8F8;">
    <div class="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden transition-all lg:ml-0 ml-20">
        <main>
          <div class="px-4 sm:px-6 lg:pl-4 lg:pr-12 py-8 w-full max-w-9xl mx-auto">
            <DashboardHeader title="Pagina principala" />
            <Statistics />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Statistics from "@/components/Dashboard/Statistics";
export default {
  name: "index",
  components: {Statistics},
  middleware: "isAuthenticated",
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    }
  }
}
</script>

<style scoped>

</style>