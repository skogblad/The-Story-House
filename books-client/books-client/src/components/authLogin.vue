<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref<string>('')
const password = ref<string>('')
const error = ref<string | null>(null)
const router = useRouter()

const login = async (): Promise<void> => {
    try {
        await axios.post('/api/login', {
        username: username.value,
        password: password.value,
    }, {
        withCredentials: true,
    })
    router.push('/admin')
    }catch (err) {
        error.value = 'Wrong user or password'
    }
}
</script>

<template>
 <div>
    <h1>The Story House</h1>
  <form @submit.prevent="login">
    <h2>Sign up for The Story House</h2>
    <input v-model="username" placeholder="Username" />
<input v-model="password" type="password" placeholder="Password" />
  </form>
  <p v-if="error">{{ error }}</p>
 </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100..900;1,100..900&display=swap');
   body {
    font-family: Arial, Helvetica, sans-serif;
    }

@media screen and (min-width:320px ) {
   .nav {
        font-size: 1rem;
        font-weight: bold;

    }
}

</style>
