<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// Reactive state for storing users
const users = ref<any[]>([]);

// Fetch users on component mount
onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/users:id');
    const data = await response.json();
    users.value = data; // Set fetched users to reactive state
  } catch (error) {
    console.log('Error fetching users', error);
  }
});
</script>

<template>
  <div>
    <router-link to="/signin">
      <button type="button">Back</button>
    </router-link>

   
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100..900;1,100..900&display=swap');
body {
  font-family: Arial, Helvetica, sans-serif;
}


</style>
