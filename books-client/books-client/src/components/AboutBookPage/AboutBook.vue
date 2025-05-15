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
      console.error("Failed to fetch book data.", error)
    }
  })

  const averageRating = computed(() => {
    if (!book?.value?.reviews?.length) return null

    const total = book.value.reviews.reduce((sum, review) => sum + (review.rating || 0), 0)
    return (total/ book.value.reviews.length).toFixed(1)
  });

  function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const totalStars = 5;

    let html = "";

    for (let i = 0; i < fullStars; i++) {
      html += "<span>★</span>";
    }
    for (let i = fullStars; i < totalStars; i++) {
      html += "<span>☆</span>";
    }

    return html;
  }
</script>

<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0&icon_names=keyboard_backspace" />
  <section>
    <article class="article">
      <div class="link">
        <RouterLink to="/"><span class="material-symbols-outlined">keyboard_backspace</span>Back</RouterLink>
      </div>
      <div v-if="book?.image">
        <img :src="book?.image" alt="Book cover">
      </div>
      <div class="text-container">
        <h2>{{ book?.title }}</h2>
        <p class="author">{{ book?.author }}</p>
        <p v-if="averageRating" class="average-rating">
          <span v-html="getRatingStars(averageRating)" class="stars"></span>
          {{ averageRating }}
        </p>
        <p class="rating">{{ randomRatings }} ratings - {{ book?.reviews?.length }} reviews</p>
        <button>Want to read</button>
        <p class="description">{{ book?.description }}</p>
        <p class="genres">Genres: <span>{{ book?.genres?.join(' | ') }}</span></p>
        <p class="published">First published {{ book?.published_year }}</p>
      </div>
      
    </article>
  </section>

  <section class="rating-section">
    <h3>Rating & Reviews</h3>
    <div class="router-button">
      <RouterLink :to="`/books/${route.params.id}/reviews`">Read reviews</RouterLink>
      <RouterLink :to="`/books/${route.params.id}/createreview`">Create review</RouterLink>
    </div>
  </section>
</template>

<style scoped>
  @import "AboutBook.scss";
</style>