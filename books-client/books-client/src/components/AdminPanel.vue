<script lang="ts" setup>
import { onMounted } from 'vue';


onMounted(async () => {
    
    try {
        console.log('hej');
        const response = await fetch('http://localhost:3000/users');
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
         console.log(error + 'Byt ut error meddelande');
 
    }
});

</script>

<template>
 <div>
    <router-link to="/signin">
            <button type="submit">Back</button>
        </router-link>
 </div>
</template>