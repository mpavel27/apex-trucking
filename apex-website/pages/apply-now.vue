<template>
  <div>
    <NavBar />
    <ApplyForm />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "apply-now",
  middleware: ['isGuest']
}
</script>

<style scoped>

</style>
