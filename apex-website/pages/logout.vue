<template>

</template>

<script>
export default {
  name: "logout",
  mounted() {
    this.$auth.logout();
    this.$router.push("/");
  }
}
</script>

<style scoped>

</style>