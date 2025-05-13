<script lang="ts" setup>
</script>

<template>
    <h1>The Story House</h1>
    <h2>Sign in</h2>
 <div class="container">
    <form id="createuser">
        <label for="">Username:</label> <br />
        <input type="text" name="Username"> <br />
        <label for="">Password:</label> <br />
        <input type="text" name="Password"> <br />
        <button>Sign in</button>
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
