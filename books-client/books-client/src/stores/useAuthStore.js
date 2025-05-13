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
    register() {
      // Register logic here
    }
  }
});

export default useAuthStore