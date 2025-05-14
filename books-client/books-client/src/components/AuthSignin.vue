<script lang="ts" setup>
import { ref } from 'vue';

// Define reactive variables
const error = ref<string | null>(null);

</script>

<template>
 <div>
    <h1>The Story House</h1>
  <div>
    <h2>Sign in for The Story House</h2>
    <p>Sign in to see what your friends are reading, get book 
        recommendations, and join the world’s largest 
        community of readers.</p>
        <router-link to="/login">
            <button type="submit">Sign in</button>
        </router-link>
    <p>Not a member?</p>
     <router-link to="/Register">
            <button type="submit">Register</button>
        </router-link>
    <p>By creating an account, you agree to the The Story House Terms of service and Privacy Policy</p>
    <router-link to="/AdminPanel">Log in as admin</router-link>
    </div>
  <p v-if="error">{{ error }}</p>
 </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100..900;1,100..900&display=swap');
   body {
    font-family: Arial, Helvetica, sans-serif;
    }

@media screen and (min-width:320px ) {
   
}

</style>
