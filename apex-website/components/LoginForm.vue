<template>
  <div class="container px-5 md:px-0 md:mx-auto apply-form mt-10">
    <div data-aos="fade-down" data-aos-offset="500" data-aos-duration="500">
      <h1 class="font-soulmaze text-2xl md:text-4xl text-center">Loghează-te</h1>
      <h1 class="text-4xl md:text-6xl font-soulmaze-outline under-title opacity-40 text-center">Loghează-te</h1>
      <p CLASS="text-gray-400 text-center">Nu ai deja un cont? <NuxtLink to="/apply-now" class="text-black font-semibold">Aplică acum!</NuxtLink></p>
    </div>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="login" data-aos="fade-up" data-aos-duration="500">
        <input type="hidden" name="_csrf" :value="csrf">
        <div class="shadow overflow-hidden sm:rounded-md mt-10 md:w-1/2 w-auto md:mx-auto mx-0">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6">
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <label for="email" class="block text-sm font-medium text-gray-700">Adresa E-mail</label>
                  <input type="email"
                         id="email"
                         v-model="loginData.email"
                         aria-describedby="emailHelp"
                         class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                  <span class="text-red-600">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="col-span-6">
                <ValidationProvider vid="password" rules="required" v-slot="{ errors }">
                  <label for="password" class="block text-sm font-medium text-gray-700">Parola</label>

                  <input id="password"
                         type="password"
                         v-model="loginData.password"
                         class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required
                  />
                  <span class="text-red-600">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" :disabled="invalid" class="btn py-2 px-4 disabled:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200 font-medium">Loghează-te</button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {extend, ValidationObserver, ValidationProvider} from "vee-validate";
import {email, required} from "vee-validate/dist/rules";

extend('email', {
  ...email,
  message: '* Acest e-mail trebuie să fie unul valid'
})

extend('required', {
  ...required,
  message: '* Acest câmp este obligatoriu'
});

export default {
  name: "LoginForm",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      },
      csrf: null,
      error: null
    };
  },
  mounted() {
    let that = this;
    const response = this.$axios.get('/api/v1/csrf', {withCredentials: true}).then((response) => {
      that.csrf = response.data.csrfToken;
    });
  },
  methods: {
    async login() {
      let that = this;
      let response = await this.$axios.post("/api/v1/accounts/login", this.loginData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': that.csrf
        }
      })

      this.$auth.setUserToken(response.data.token, response.data.token)
        .then(() => this.$router.push("/dashboard"))
    }
  }
}
</script>