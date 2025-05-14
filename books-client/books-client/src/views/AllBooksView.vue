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
         console.log(error + 'Byt ut error meddelande');

    }
});

</script>

<template>
  <main>
    <div>
      <h1>Meet your next favorite book!</h1>
      <h2>Books</h2>
      <section id="todos" v-for="book in books" :key="book._id">
        <article>
          <img :src="book.image">
          <h2>{{ book.title }}</h2>
          <p>{{ book.author }}</p>
          <ul>
            <li v-for="(genre, index) in book.genres" :key="index">
              {{ genre }}
            </li>
          </ul>
          <p>{{ book.published_year }}</p>
          
            <a :href="`/books/${ book._id }`">View</a>
          
        </article>

      </section>
    </div>
  </main>
</template>

<style scoped>
h1 {
  color: #588157;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
}
</style>