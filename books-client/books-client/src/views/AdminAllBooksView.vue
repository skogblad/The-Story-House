<script setup>
import { onMounted, ref } from 'vue';

let books = ref([]);
let genres = ref([]);


onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3000/books');
        const data = await response.json();
        console.log(data);
        books.value = data;
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
  <main>
    <div class="container">
      <h1>Books</h1>
        <RouterLink to="/add-book">Add book</RouterLink>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genres</th>
                    <th>Published year</th>
                </tr>
            </thead>
            <tbody>
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
            </tbody>
        </table>
        
    </div>
  </main>
</template>


<style scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>