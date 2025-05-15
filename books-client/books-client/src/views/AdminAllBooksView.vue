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
main{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
}
.container{
    margin: 0 auto;
    max-width: 1200px;
}
table{
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  background-color: #E9EDC9;
}

td, th{
    padding: 0.75rem;
}
tr:nth-child(even){background-color: #f6f8e9;}

a{
    margin: 1rem 0;
    color: #3A5A40;
    font-weight: bold;
    display: block;
    text-align: right;
}
a:hover{
    color: #000;
}

</style>