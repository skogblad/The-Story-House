<script setup>

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'


const registered = ref(false)
registered.value = true

  const API_URL = import.meta.env.VITE_API_URL;
  const router = useRouter()
  const form = reactive({
    username: '',
    password: ''
  })
  
  const submit = async () => {
    try {
      await fetch(API_URL + '/users', {
        method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password
      })
    });

    alert('Registration successful!');
  
  } catch (error) {
    console.log('Error:', error);
  }
};

</script>



<template>
    <h1>The Story House</h1>
    <h2>Sign up for The Story House</h2>
 <div class="container">
    <form id="createuser" @submit.prevent="submit">
        <label for="">Username:</label> <br />
        <input v-model="form.username"> <br />

        <label for="">Password:</label> <br />
        <input v-model="form.password"> <br />
        <button>Register</button>
    </form>
       <router-link to="/signin">
            <button type="submit">Back</button>
        </router-link>
 </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100..900;1,100..900&display=swap');
   body {
    font-family: Arial, Helvetica, sans-serif;
    }



</style>
