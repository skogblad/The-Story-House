<script setup>

import { onMounted, ref } from 'vue';

const API_URL = import.meta.env.VITE_API_URL
let books = ref([]);
let genres = ref([]);

onMounted(async () => {
    try {
        const response = await fetch(API_URL + '/books');
        const data = await response.json();
        console.log(data);
        books.value = data;
    } catch (error) {
         console.log('Error:', error);
    }
});

</script>

<template>
  <main>
    <div>
      <h1>Meet your next favorite book!</h1>
      <p class="hero-text">Step into a cozy corner of the internet made for book lovers. Here, you can explore a growing collection of stories, read what others think, and share your own reviews. Found a book you love? Log in and add it to the shelf so others can discover it too. The Story House is all about connecting through books — one page at a time.</p>
      <h2>Books</h2>
      <section class="books-grid">
        <article v-for="book in books" :key="book._id">
          <img :src="book.image" alt="Book cover" />
          <div class="book-info">
            <h2 class="title">{{ book.title }}</h2>
            <p class="author">{{ book.author }}</p>
            <ul>
              <li v-for="(genre, index) in book.genres" :key="index">
                {{ genre }}
              </li>
            </ul>
            <p class="published"><i>First published {{ book.published_year }}</i></p>
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
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-text {
  font-size: 1.1rem;
}

p {
  max-width: 80vw;
  margin-bottom: 20px;
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
  width: auto;
  height: 200px; 
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  object-fit: cover;
  box-shadow: 2px 3px 5px rgb(110, 110, 110);
  
}

.book-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.title {
  margin-bottom: 0;
  margin-top: 25px;
}

.author {
  font-size: 1.1rem;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin-top: 0;
}

ul li {
  color: #588157;
  padding: 5px;
  border-radius: 0.25rem;
  font-size: 1rem;
}
.published {
  margin-top: 0;
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
  margin-top: 40px;
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
    width: auto;
    height: 300px;    
    flex-shrink: 0;
  }

  .book-info {
    flex: 1;
  }
}


</style>