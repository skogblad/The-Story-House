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
  <section class="books-grid">
  <article v-for="book in books" :key="book._id">
    <img :src="book.image" alt="Book cover" />
    <div class="book-info">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
      <ul>
        <li v-for="(genre, index) in book.genres" :key="index">
          {{ genre }}
        </li>
      </ul>
      <p>{{ book.published_year }}</p>
      <a :href="`/books/${ book._id }`">Read more</a>
    </div>
  </article>
</section>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #588157;
  font-weight: 500;
  font-size: 1.r8em;
  margin-bottom: 2rem;
}
h2 {
  font-size: 1.2rem;
}

.books-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

article {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

img {
  width: 200px;
  height: auto;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  object-fit: cover;
}


.book-info {
   display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
}

ul li {
  background: #d8f3dc;
  padding: 5px;
  border-radius: 0.25rem;
  font-size: 1rem;
}

a {
  display: inline-block;
  width: 100px;
  text-align: center;
  border-radius: 20px;
  background: #588157;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  font-size: 1rem;
}


@media (min-width: 600px) {
  .books-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  article {
    flex-direction: row;
    align-items: stretch;
  }

  img {
    height: auto;    
    flex-shrink: 0;
  }

  .book-info {
    flex: 1;
  }
}

</style>