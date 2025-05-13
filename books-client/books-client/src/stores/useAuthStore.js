import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', {
  state: () => ({ isAuthenticated: false }),
  actions: {
      async login() {
      
      this.isAuthenticated = true
    },
    logout() { 
       
      this.isAuthenticated = false
    },
    register() {
      
    }
  }
})

export default useAuthStore