<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAuthStore from '@/stores/useAuthStore';

const API_URL = import.meta.env.VITE_API_URL;
const router = useRouter();

const useAuth = useAuthStore();
const form = reactive({
  username: '',
  password: '',
});

const submit = async () => {
  try {
    const response = await fetch(API_URL + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    });

    if (!response.ok) {
      alert('Login failed. Username or password is wrong.');
      return;
    }
  } catch (error) {
    console.log('Error:', error);
    alert('Something went wrong. Please try again.');
  }
};

const login = () => {
 if (form.username === 'admin' && form.password === '123') {
    useAuth.login(form.username);
    alert('Sign in successful!');
    router.push('/AdminPanel');
  } else {
    useAuth.login(form.username);
    alert('Sign in successful!');
    router.push('/');
  }
};
const logout = () => {
  useAuth.logout();
  alert('You have been logged out.');
  router.push('/signin');
};
</script>

<template>
  <h1>The Story House</h1>
  <h2>Sign in</h2>
  <div class="container">
    <form id="createuser" @submit.prevent="submit">
      {{ useAuth.isAuthenticated }}
      <label>Username:</label> <br />
      <input v-model="form.username" name="Username" required /> <br />
      <label>Password:</label> <br />
      <input v-model="form.password" name="Password" required /> <br />
      <button @click.prevent="login">Login</button> <br />
      <button @click.prevent="logout">Logout</button> <br />
    </form>

    <router-link to="/signin">
      <button type="button">Back</button>
    </router-link>
  </div>
</template>
