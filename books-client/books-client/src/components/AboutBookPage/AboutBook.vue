<!--
Importera "BookReview" och "CreateReview" som två knappar längst ner, för att kunna ha 1 fil i "AboutBookView".
Ca 22 min in i första videon från Sibar. 
-->
<script setup>
  import { computed, onMounted, ref } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';

  const book = ref();
  const route = useRoute();
  const randomRatings = ref(0);

  onMounted(async () => {
    console.log(route.params)
    try {
      const response = await fetch("http://localhost:3000/books/" + route.params.id);
      const data = await response.json();
      console.log(data)
      book.value = data;

      randomRatings.value = Math.floor(Math.random() * (100 - 10 + 1)) + 10

    } catch(error) {
      console.log(error)
    }
  })

  const averageRating = computed(() => {
    if (!book?.value?.reviews?.length) return null

    const total = book.value.reviews.reduce((sum, review) => sum + (review.rating || 0), 0)
    return (total/ book.value.reviews.length).toFixed(1)
  });
</script>

<template>
  <section>
    <article>
      <div>
        <RouterLink to="/books">Back</RouterLink>
      </div>
      <img src="" alt="">
      <h2>{{ book?.title }}</h2>
      <p>{{ book?.author }}</p>
      <p v-if="averageRating">⭐​​⭐​​⭐​​⭐​ {{ averageRating }} </p>
      <button>Want to read</button>
      <p>{{ randomRatings }} ratings - {{ book?.reviews?.length }} reviews</p>
      <p>{{ book?.description }}</p>
      <p>Genres: {{ book?.genres }}</p>
      <p>First published {{ book?.published_year }}</p>
    </article>
  </section>

  <section>
    <h2>Rating & Reviews</h2>
    <button><a href="">Read reviews</a></button>
    <button><a href="">Create review</a></button>
  </section>
</template>

<style scoped>
  
</style>