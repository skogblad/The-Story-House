<script setup>
  import AboutBook from './AboutBook.vue';
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const book = ref(null);
  const route = useRoute();

  onMounted(async () => {
    try {
      const response = await fetch("http://localhost:3000/books/" + route.params.id);
      const data = await response.json();
      console.log(data)
      book.value = data;

    } catch(error) {
      console.log(error)
    }
  })

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
  <AboutBook />

  <section v-if="book?.reviews">
    <article v-for="review in book.reviews" :key="review._id">
      <p class="rating">
        <span v-html="getRatingStars(review.rating)"></span>
        {{ review.rating }}
      </p>
      <p class="name">By: {{ review.name }}</p>
      <p class="date">{{ review.created_at }}</p>
      <p>{{ review.content }}</p>
    </article>
  </section>
</template>

<style scoped>
  article {
    padding-inline: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin-bottom: 50px;
  }

  .rating {
    font-size: 1.3rem;
    font-weight: 900;
    margin-bottom: 0;
  }

  .name {
    font-weight: 900;
    margin-top: 5px;
  }

  .date {
    color: #5C5C5C;
  }

  span {
    color: #D4A373;
  }
  
</style>