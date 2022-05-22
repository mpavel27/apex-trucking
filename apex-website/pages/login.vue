<template>
  <div>
    <NavBar />
    <LoginForm />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "login",
  middleware: ['isGuest'],
}
</script>

<style scoped>

</style>