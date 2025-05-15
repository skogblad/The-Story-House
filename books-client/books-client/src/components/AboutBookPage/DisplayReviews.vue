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

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
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
      <p class="date">{{ formatDate(review.created_at) }}</p>
      <p class="content">{{ review.content }}</p>
    </article>
  </section>
</template>

<style scoped>
  article {
    padding-inline: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin-bottom: 50px;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-inline: 20px;
  }

  .rating {
    font-size: 1.3rem;
    font-weight: 900;
    margin-bottom: 0;
    padding-top: 10px;
  }

  .name {
    font-weight: 900;
    margin-top: 5px;
    display: flex;
    margin-bottom: 0;
  }

  .date {
    color: #5C5C5C;
    display: flex;
    justify-content: flex-end;
    font-size: 0.9rem;
    margin: 0;
    position: relative;
    top: -15px;
    margin-right: 20px;
  }

  .content {
    margin-top: 0;
    padding-bottom: 20px;
  }

  span {
    color: #D4A373;
  }
  
  @media screen and (min-width: 1024px) {
    article {
      font-size: 1.1rem;
    }
  }

</style>