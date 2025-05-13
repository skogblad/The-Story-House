<script setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';

  const API_URL = import.meta.env.VITE_API_URL;
  const router = useRouter()
  const form = reactive({
    content: '',
    done: false
  })
  
  const submit = async () => {
    try {
      await fetch(API_URL + '/users', {
        method: "POST",
        credentials: 'include', // This enables cookie handling
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
      
      router.push('/users')
    } catch(error) {
      console.log(error)
    }
  }

</script>



<template>
    <h1>The Story House</h1>
    <h2>Sign up for The Story House</h2>
 <div class="container">
    <form id="createuser" @submit.prevent="submit">
        <label for="">Username:</label> <br />
        <input type="text" name="Username"> <br />
        <label for="">Password:</label> <br />
        <input type="text" name="Password"> <br />
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

@media screen and (min-width:320px ) {
   .nav {
        font-size: 1rem;
        font-weight: bold;

    }
}

</style>
