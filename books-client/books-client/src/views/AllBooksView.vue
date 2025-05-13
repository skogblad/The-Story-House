<script setup>

import { onMounted } from 'vue';

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3000/books');
        const data = await response.json();
        console.log(data);
    } catch (error) {
         console.log(error + 'Byt ut error meddelande');

    }
});

</script>

<template>
  <main>
    <h1>Books</h1>
  </main>
</template>
