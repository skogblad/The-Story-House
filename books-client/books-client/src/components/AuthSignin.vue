<script lang="ts" setup>
import { ref } from 'vue';

// Define reactive variables
const error = ref<string | null>(null);
</script>

<template>
  <div class="wrapper">
    <div class="page">
      <div class="container">
        <h2>Sign in for The Story House</h2>
        <p>
          Sign in to see what your friends are reading, get book
          recommendations, and join the world’s largest community of readers.
        </p>
        <router-link to="/login">
          <button type="submit">Sign in</button>
        </router-link>
        <p class="center">Not a member?</p>
        <router-link to="/Register">
          <button type="submit">Register</button>
        </router-link>
        <p class="terms">
          By creating an account, you agree to the The Story House Terms of
          service and Privacy Policy
        </p>
        <div class="login">
          <router-link class="login" to="/AdminPanel">Admin</router-link>
        </div>
      </div>
      <p class="copyright">© 2025 The Story House</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100..900;1,100..900&display=swap');

.wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
}

.page {
  background-color: #e9edc9;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  background-color: #fff;
  height: 70vh;
  padding: 10px;
  margin-left: 10px;
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 5px;
}

h2 {
  font-size: 1.2rem;
  text-align: center;
  padding-top: 10px;
}

p {
  font-size: 1rem;
  padding-top: 10px;
  padding: 10px 15px;
}
.center {
  text-align: center;
}

button {
  background-color: #588157;
  color: #fff;
  border-radius: 40px;
  padding: 10px;
  font-size: 1rem;
  width: 120px;
  margin-left: 90px;
}

button:hover {
  background-color: #a3b18a;
}
button:active {
  background-color: #588157;
}
.login {
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  color: #588157;
}
.copyright {
  text-align: center;
  margin-top: 30px;
  font-size: 0.8rem;
}

@media (min-width: 720px) {
 h2 {
    font-size: 2rem;
    padding-top: 20px;
 }
 .container {
    height: 70vh;
 
}
p {
  font-size: 1.2rem;
  padding-top: 10px;
  padding: 40px;
}
button {
  background-color: #588157;
  color: #fff;
  border-radius: 40px;
  padding: 10px;
  font-size: 1.2rem;
  width: 150px;
  margin-left: 260px;
}
.copyright {
  margin-top: 20px;
  font-size: 1rem;
}
 
}

@media (min-width: 1024px) {
.wrapper {
 justify-content: center;
 align-items: center;
 background-color: #e9edc9; ;
}
p {
  font-size: 1.2rem;
  margin-left: 20px;
  padding: 20px;
}
.terms {
    text-align: center;
}
button {  
  margin-left: 480px;
}
.copyright {
  font-size: 1rem;
}
}
</style>
