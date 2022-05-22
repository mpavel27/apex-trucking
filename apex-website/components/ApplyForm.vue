<template>
  <div class="container px-5 md:px-0 md:mx-auto apply-form mt-10">
    <div data-aos="fade-down" data-aos-offset="500" data-aos-duration="500">
      <h1 class="font-soulmaze text-2xl md:text-4xl text-center">Aplică acum</h1>
      <h1 class="text-4xl md:text-6xl font-soulmaze-outline under-title opacity-40 text-center">Aplică acum</h1>
      <p CLASS="text-gray-400 text-center">Ai deja un cont? <NuxtLink to="/login" class="text-black font-semibold">Loghează-te</NuxtLink></p>
    </div>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="submitForm" data-aos="fade-up" data-aos-duration="500">
        <div class="shadow overflow-hidden sm:rounded-md mt-10 md:w-1/2 w-auto md:mx-auto mx-0">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                  <input type="text" v-model="username" name="username" id="username" class="mt-1 border-2 focus:border-green-400 w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                  <span class="text-red-600">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="col-span-6">
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <label for="email" class="block text-sm font-medium text-gray-700">Adresa E-mail</label>
                  <input type="text" v-model="email" name="email" id="email" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                  <span class="text-red-600">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
                <div class="col-span-6">
                  <ValidationProvider vid="password" rules="required" v-slot="{ errors }">
                    <label for="password" class="block text-sm font-medium text-gray-700">Parola</label>
                    <input type="password" v-model="password" name="password" id="password" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                    <span class="text-red-600">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              <div class="col-span-6">
                <ValidationProvider vid="confirmPassword" rules="required|matchWith:@password" v-slot="{ errors }">
                  <label for="repassword" class="block text-sm font-medium text-gray-700">Repetă Parola</label>
                  <input type="password" v-model="repassword" name="repassword" id="repassword" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                  <span class="text-red-600">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="col-span-6">
                <ValidationProvider rules="required|ageValidation" v-slot="{ errors }">
                  <label for="age" class="block text-sm font-medium text-gray-700">Varstă</label>
                  <input v-model="age" type="number" name="age" id="age" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                  <span class="text-red-600">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="col-span-6">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <label for="truckersmp_id" class="block text-sm font-medium text-gray-700">TruckersMP ID</label>
                  <input type="text" v-model="tmpid" name="truckersmp_id" id="truckersmp_id" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                  <span class="text-red-600">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="col-span-6">
                <ValidationProvider rules="required|questionLength:100" v-slot="{ errors }">
                  <label for="question1" class="block text-sm font-medium text-gray-700">De ce vrei să te alaturi companiei? <span class="text-gray-400">(Minim: 100 caractere)</span></label>
                  <textarea name="question1" v-model="question1" id="question1" class="mt-1 border-2 focus:border-green-400 block w-full shadow-sm sm:text-sm border-gray-200 rounded-md outline-none px-3 py-3" required />
                  <span class="text-red-600">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" :disabled="invalid" class="btn py-2 px-4 disabled:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200 font-medium">Trimite Aplicația</button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script type="module">
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('ageValidation', {
  validate(value) {
    if(value >= 16) {
      return true;
    }
  },
  message: '* Trebuie să ai varsta minimă de 16 ani'
});

extend('questionLength', {
  params: ['length'],
  validate(value, { length }) {
    if(value.length >= length)
      return true;
  },
  message: '* Răspunsul la întrebare trebuie să aibe minim 100 de caractere'
})

extend('email', {
  ...email,
  message: '* Acest e-mail trebuie să fie unul valid'
})

extend('required', {
  ...required,
  message: '* Acest câmp este obligatoriu'
});

extend('matchWith', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: '* Parolele nu corespund între ele'
});

export default {
  name: "ApplyForm",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      username: '',
      password: '',
      repassword: '',
      email: '',
      age: '',
      question1: '',
      tmpid: '',
      csrf: ''
    }
  },
  mounted() {
    let that = this;
    const response = this.$axios.get('/api/csrf').then((response) => {
      that.csrf = response.data.csrfToken;
    });
  },
  methods: {
    async submitForm(e) {
      let that = this;
      let res = await this.$axios.create({withCredentials: true}).post('/api/user/add', {
        'username': that.username,
        'password': that.password,
        'email': that.email,
        'age': that.age,
        'tmpid': that.tmpid,
        'question1': that.question1
      }, {
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
      if(res && res.data == 'success') {
        this.$toast.show({
          type: 'success',
          title: 'Înregistrare',
          message: `Te-ai înregistrat cu succes`,
          timeout: 3
        })
        setTimeout(() => {
          window.location.href = '/'
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>

</style>
