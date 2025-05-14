<script setup>
  import AboutBook from './AboutBook.vue';
  import { Review } from '@/models/Review.js'
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const name = ref("");
  const rating = ref(null);
  const content = ref("");

  const route = useRoute()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Formuläret skickas med följande data:")

    const newReview = new Review (
      name.value,
      content.value,
      rating.value,
      "",
      route.params.id
    );

    console.log(newReview)

    try {
      const response = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if(response.ok) {
        router.push(`/books/${route.params.id}/reviews`)
      } else {
        console.error("Fel vid skapande av recension:", response.statusText);
      }
      
    } catch (error){
      console.error("Kunde inte spara review:", error)
    }
  };
</script>

<template>
  <main>
    <AboutBook />

    <section class="review-container">
      <p>What do <i>you</i> think?</p>
      <h4>Create review</h4>

      <form @submit="handleSubmit">
        <label for="name">Name:</label>
        <input type="text" name="name" v-model="name" required>

        <label for="rating">Rating:</label>
        <input type="number" name="rating" v-model="rating" min="1" max="5" required>

        <label for="content">Content:</label>
        <input type="text" name="content" v-model="content" required class="content-input">

        <input type="submit" value="Submit" class="submit">
      </form>
    </section>
  </main>
</template>

<style scoped>

  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  .review-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    text-align: center;
  }

  p {
    grid-column: span 12;
    font-size: 1.2rem;
    color: #3A5A40;
  }
  
  h4 {
    grid-column: span 12;
    font-weight: 400;
    margin-top: 0;
    font-size: 1.1rem;
  }

  form {
    display: grid;
    grid-column: span 12;
    margin-bottom: 50px;
    font-size: 1rem;
  }

  label {
    grid-column: 1 / span 4;
    margin-bottom: 10px;
  }

  input {
    grid-column: 5 / span 4;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  .content-input {
    padding-bottom: 50px;
  }

  .submit {
    grid-column: 5 / span 3;
    margin-top: 20px;
    margin-right: 0;
    padding-block: 5px;
    font-size: 0.9rem;
    border-radius: 40px;
    background-color: #588157;
    color: white;
    border: solid 2px #588157;
  }


</style>