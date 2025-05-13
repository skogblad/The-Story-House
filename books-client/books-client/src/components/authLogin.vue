<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const API_URL = import.meta.env.VITE_API_URL;
const router = useRouter();

const form = reactive({
  username: '',
  password: ''
});

const submit = async () => {
  try {    
    const response = await fetch(API_URL + '/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password
      })
    });

    if (!response.ok) {
      alert('Login failed. Username or password is wrong.');
      return;
    }

    alert('Sign in successful!');

  } catch (error) {
    console.log('Error:', error);
    alert('Something went wrong. Please try again.');
  }
};

</script>

<template>
  <h1>The Story House</h1>
  <h2>Sign in</h2>
  <div class="container">
    <form id="createuser" @submit.prevent="submit">
      <label>Username:</label> <br />
      <input v-model="form.username" name="Username" required /> <br />
      <label>Password:</label> <br />
      <input v-model="form.password" name="Password" required /> <br />
      <button type="submit">Sign in</button>
    </form>

    <router-link to="/signin">
      <button type="button">Back</button>
    </router-link>
  </div>
</template>