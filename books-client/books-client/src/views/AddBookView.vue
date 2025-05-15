<script setup>

//const API_URL = import.meta.env.VITE_API_URL;

import { reactive } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();

const form = reactive({
    title: '',
    description: '',
    author: '',
    genres: [],
    published_year: 0,
    image: ''

});

const submit = async () => {
    try {
        
        const response = await fetch('http://localhost:3000/books', {
            method: "POST",
            headers: {
                 "Content-Type": "application/json",
            },
            credentials: 'include', // This enables cookie handling
            body: JSON.stringify(form)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Failed to add book:", response.status, errorText);
            return;
        }

        router.push('/all-books')
        
    } catch (error) {
        console.log("Error submitting book:", error);
    }
}

</script>

<template>
    <main>
        <div class="container">
            <h1>Add book</h1>
            <form @submit.prevent="submit">
                <input type="text" placeholder="Title" v-model="form.title"><br>
                <input type="text" placeholder="Description" v-model="form.description"><br>
                <input type="text" placeholder="Author" v-model="form.author"><br>
                <input type="text" placeholder="Genres" v-model="form.genres"><br>
                <input type="text" placeholder="Published" v-model="form.published_year"><br>
                <input type="text" placeholder="Image url" v-model="form.image"><br>
                <button>Add book</button>
            </form>
            <RouterLink to="/all-books">&laquo; Back to books</RouterLink>
        </div>
        
    </main>
</template>

<style scoped>
main{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
}
.container{
    margin: 0 auto;
    max-width: 800px;
}
input{
    padding: 0.5rem;
  width: 100%;
  margin: 0.5rem 0;
}
button{
  background: #3A5A40;
  border-radius: 1rem;
  border: none;
  padding: 0.5rem 1rem;
  color: #fff;
  font-weight: bold;
  margin: 1rem auto;
  display: block;
}
button:hover{
    background: #a3b18a;
}
a{
    margin: 1rem 0;
    color: #3A5A40;
    font-weight: bold;
    display: block;
}
a:hover{
    color: #000;
}
</style>