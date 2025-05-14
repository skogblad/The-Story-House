<script setup>

import { onMounted, ref } from 'vue';

let books = ref([]);
let genres = ref([]);
let addBookTitle = ref('');
let addBookDescription = ref('');
let addBookAuthor = ref('');
let addBookGenres = ref('');
let addBookPublished = ref('');
let addBookImage = ref('');

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3000/books');
        const data = await response.json();
        console.log(data);
        books.value = data;
    } catch (error) {
        console.log(error + 'Byt ut error meddelande');
    }
});

const addBook = () => {
    
}

</script>

<template>
  <main>
    <div>
      <h1>Books</h1>

        <table>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genres</th>
                <th>Published year</th>
            </tr>
            <tr v-for="book in books" :key="book._id">
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>
                    <span v-for="(genre, index) in book.genres" :key="index">
                        {{ genre }}
                    </span>
                </td>
                <td>{{ book.published_year }}</td>
            </tr>
        </table>


        <h2>Add book</h2>
        <form @submit.prevent="addBook">
            <input type="text" placeholder="Title" v-model="addBookTitle"><br>
            <input type="text" placeholder="Description" v-model="addBookDescription"><br>
            <input type="text" placeholder="Author" v-model="addBookAuthor"><br>
            <input type="text" placeholder="Genres" v-model="addBookGenres"><br>
            <input type="text" placeholder="Published" v-model="addBookPublished"><br>
            <input type="text" placeholder="Image url" v-model="addBookImage"><br>
            <button>Add book</button>
        </form>

    </div>
  </main>
</template>


<style scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>