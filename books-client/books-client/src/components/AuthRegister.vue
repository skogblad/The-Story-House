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
      credentials: 'include',  
      body: JSON.stringify({
        username: form.username,
        password: form.password
      })
    });

    alert('Registration successful!');
    router.push('/');
  
  } catch (error) {
    console.log('Error:', error);
  }
};

</script>

<template>
  <div class="page-center">
    <div class="form-wrapper">
      <h2>Sign up for The Story House</h2>
      <div class="container">
        <form id="createuser" @submit.prevent="submit">
          <label>Username:</label><br />
          <input v-model="form.username" name="Username" required /><br />
          <label>Password:</label><br />
          <input v-model="form.password" name="Password" required /><br />
          <button type="submit">Register</button><br />
        </form>
        <router-link to="/signin">
          <button type="button">Back</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100..900;1,100..900&display=swap');
.container {
  font-family: Arial, Helvetica, sans-serif;
 
}
h2 {
  font-family: Arial, Helvetica, sans-serif;
}
.page-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background-color: #f0f0f0; 
}

.form-wrapper {
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

form {
  margin-bottom: 15px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border-radius: 40px;
}

button {
  background-color: #588157;
  color: white;
  padding: 8px 16px;
  border-radius: 40px;
  width: 100px;
  border: none;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #a3b18a;
}
button:active {
  background-color: #588157;
}

@media (min-width: 600px) {
  .page-center {
  margin-top: 100px;
 
}

.form-wrapper {
  padding: 50px;
 
}
}
</style>
