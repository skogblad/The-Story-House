<script setup>
  import { onMounted, ref } from 'vue';

  const books = ref([]);

  onMounted(async () => {
    try {
      const response = await fetch("http://localhost:3000/books");
      const data = await response.json();
      console.log(data)
      books.value = data;

    } catch(error) {
      console.log(error)
    }
  })


</script>

<template>
  <h2>Book List View</h2>

  <section v-for="book in books" :key="book._id">
    <article>
      <p> {{ book.title }}</p>
      <a :href="`/books/${book._id}`">View</a>
    </article>
  </section>
</template>