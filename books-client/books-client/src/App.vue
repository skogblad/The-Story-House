<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1>The Story House</h1>
      <nav>        
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/books">Books</RouterLink>
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
  width: 100vw;
  height: 40px;
  left: 0;
  display: flex;             
  padding: 0 10px;
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
  gap: 5px; 
  margin-left: 10px;
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



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
