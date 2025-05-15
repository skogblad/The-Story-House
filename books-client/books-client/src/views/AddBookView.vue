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
        await fetch('http://localhost:3000/books', {
            method: "POST",
            headers: {
                 "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        });

        router.push('/books')
    } catch (error) {
        console.log(error + 'Byt ut error meddelande');
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
        </div>
        <RouterLink to="/all-books">Back</RouterLink>
    </main>
</template>