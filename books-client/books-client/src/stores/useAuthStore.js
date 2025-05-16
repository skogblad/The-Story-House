import { defineStore } from 'pinia';

const API_URL = import.meta.env.VITE_API_URL;

const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    username: null,
    role: null,
  }),
  actions: {
    async login(username, password) {
      try {
        const response = await fetch(API_URL + '/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          return false; // failed login
        }

        const data = await response.json();

        // If role is returned, use it; otherwise default by username
        this.isAuthenticated = true;
        this.username = username;
        this.role = data.role || (username === 'admin' ? 'admin' : 'user');

        return true;
      } catch (error) {
        console.error('Login error:', error);
        return false;
      }
    },

    logout() {
      this.isAuthenticated = false;
      this.username = null;
      this.role = null;
    },
  }, // <-- You were missing this comma and closing brace
});

export default useAuthStore;