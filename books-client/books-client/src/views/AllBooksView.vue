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
      <section id="books" v-for="book in books" :key="book._id">
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
main {
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #588157;
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-family: Arial, Helvetica, sans-serif;
}

#todos {
  margin-bottom: 2rem;
}

article {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

p {
  margin: 0.25rem 0;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

ul li {
  background: #d8f3dc;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}

a {
  display: inline-block;
  margin-top: 0.5rem;
  color: white;
  background: #588157;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}


@media (min-width: 600px) {
  article {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  img {
    width: 150px;
    flex-shrink: 0;
  }

  article > div {
    flex: 1;
  }
}


@media (min-width: 900px) {
  main {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  article {
    padding: 1.5rem;
  }
}
</style>