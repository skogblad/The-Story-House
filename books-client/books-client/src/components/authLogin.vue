<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAuthStore from '@/stores/useAuthStore';

const router = useRouter();
const useAuth = useAuthStore();

const form = reactive({
  username: '',
  password: '',
});

const login = async () => {
  const success = await useAuth.login(form.username, form.password);

  if (!success) {
    alert('Login failed. Username or password is wrong.');
    return;
  }

  alert('Sign in successful!');

  if (useAuth.role === 'admin') {
    router.push('/AdminPanel');
  } else {
    router.push('/');
  }
};

const logout = () => {
  useAuth.logout();
  alert('You have been logged out.');
  router.push('/signin');
};
</script>
<template>
  <div class="page-center">
    <div class="form-wrapper">
      <h2>Sign in</h2>
      <div class="container">
        <form id="createuser" @submit.prevent="login">
          <label>Username:</label><br />
          <input v-model="form.username" name="Username" required /><br />
          <label>Password:</label><br />
          <input v-model="form.password" name="Password" required /><br />
          <button type="submit">Login</button>
          <button type="button" @click="logout">Logout</button> <br />
        </form>
        <router-link to="/signin">
          <button type="button">Back</button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100..900;1,100..900&display=swap');
.container {
  font-family: Arial, Helvetica, sans-serif;
  
 
}
h2 {
  font-family: Arial, Helvetica, sans-serif;
}
.page-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background-color: #f0f0f0; 
}

.form-wrapper {
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

form {
  margin-bottom: 15px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border-radius: 40px;
}

button {
  background-color: #588157;
  color: white;
  padding: 8px 16px;
  border-radius: 40px;
  width: 100px;
  border: none;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #a3b18a;
}
button:active {
  background-color: #588157;
}

@media (min-width: 600px) {
  .page-center {
  margin-top: 100px;
 
}

.form-wrapper {
  padding: 50px;
 
}
}

</style>
