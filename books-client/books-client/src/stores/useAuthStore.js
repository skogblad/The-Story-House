import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', {
 state: () => ({
    isAuthenticated: false,
    username: null,      
    role: null           
  }),
  actions: {
    async login(username, role = null) {
      this.isAuthenticated = true;
      this.username = username;
      this.role = role;
    },
    logout() {
      this.isAuthenticated = false;
      this.username = null;
      this.role = null;
    },
      async register(username, password) {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

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
    }
  }
});
  

export default useAuthStore