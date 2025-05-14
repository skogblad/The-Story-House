<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1>The Story House</h1>
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/books">Home</RouterLink>
        <RouterLink to="/signin">Sign in</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100..900;1,100..900&display=swap');
body {
    font-family: Arial, Helvetica, sans-serif;
    }

header {
  background-color: #E9EDC9;  
  height: 40px;
  left: 0;
  display: flex;             
  padding-left: 10px;
}

h1 {
  font-size: 1.2rem;
  font-family: Labrada;
  font-weight: 500;
  color: #3A5A40;
  padding: 5px;
  display: flex;
  margin: 0;
}

nav {
  display: flex;
  gap: 20px; 
  margin-left: 20px;
}

nav a {
  padding: 5px;
  color: #000;            
  text-decoration: none; 
  font-weight: bold; 
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 7px;
  font-size: 1rem;
}

@media (min-width: 720px) {

header {
  background-color: #E9EDC9;
  height: 60px;           
 
}
h1 {
  font-size: 2rem;
  padding-left: 20px;
}
nav {
  display: flex;
  gap: 50px; 
  margin-left: 200px;
}
nav a {
  margin-top: 15px;
  font-size: 1.3rem;
}
}



@media (min-width: 1024px) {
 
  h1 {
  font-size: 2.2rem;
}
  nav {
  display: flex;
  gap: 150px; 
  margin-left: 300px;
  
}
nav a {
  margin-top: 18px;
  font-size: 1.3rem;
}
}
</style>
