<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import useAuthStore from '@/stores/useAuthStore';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

// Reactive state for storing users
const users = ref<any[]>([]);
const router = useRouter();
// Fetch users on component mount
onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    users.value = data; // Set fetched users to reactive state
  } catch (error) {
    console.log('Error fetching users', error);
  }
});

const useAuth = useAuthStore();
const form = reactive({
  username: '',
  password: '',
});

const logout = () => {
  useAuth.logout();
  alert('You have been logged out.');
  router.push('/signin');
};
</script>

<template>
  <div>
    <router-link to="/signin" class="back-button">
      Back
    </router-link>
    <button class="logout" @click.prevent="logout">Logout</button><br />

    <div class="container">
          <RouterLink class="button" to="/AdminPanel">Users</RouterLink>
          <RouterLink class="button" to="/all-books">Books</RouterLink>
          <RouterLink class="button" to="/add-book">Add Book</RouterLink>
    </div>  

    <!-- Centered Admin Panel -->
    <div v-if="users.length > 0" class="admin-panel-container">
      <div class="admin-panel">      
        <h3>Users</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>Admin</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user._id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.password }}</td>
              <td>{{ user.is_admin ? 'Yes' : 'No' }}</td>
              <td>{{ user.created_at }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p v-else>No users found</p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100..900;1,100..900&display=swap');
body {
  font-family: Arial, Helvetica, sans-serif;
}
.container{
  max-width: 1000px;
  margin: 0 auto;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
}

.admin-panel-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.admin-panel {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 100%;
  max-width: 1000px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #333;
  color: white;
}

tr:hover {
  background-color: #f1f1f1;
}

.button,
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  padding: 8px 12px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  color: #588157;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
}

.button{
  background: #E9EDC9;
  color: #000;
  margin-right: 1rem;
}

.back-button::before {
  content: '←'; /* Unicode left arrow */
  font-size: 16px;
}
.logout {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  padding: 8px 12px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  color: #588157;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;  
}
</style>
