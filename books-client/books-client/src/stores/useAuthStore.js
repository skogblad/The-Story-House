import { defineStore } from 'pinia';

const API_URL = import.meta.env.VITE_API_URL;

const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    username: null,
    role: null,
  }),
  actions: {
    async login(form) {
  try {
    const response = await fetch(API_URL + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username: form.username, password: form.password }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || 'Login failed.');
      return false; // explicitly return false on failure
    }

    this.isAuthenticated = true;
    this.username = data.username;
    this.role = data.isAdmin ? 'admin' : 'user';

    return true; // success
  } catch (error) {
    alert('Something went wrong.');
    return false;
  }
},

    logout() {
      this.isAuthenticated = false;
      this.username = null;
      this.role = null;
    },
    async register(username, password) {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + '/auth/register',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Registration failed');
        }

        const data = await response.json();

        // Automatically log in the user after successful registration
        this.login(data.username, data.role || null);

        return true; // Return true if registration and login are successful
      } catch (error) {
        console.error('Registration error:', error.message);
        return false; // Return false if registration failed
      }
    },
  },
});

export default useAuthStore;
