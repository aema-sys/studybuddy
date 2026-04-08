import { defineConfig } from 'vite'

export default defineConfig({
  // Verander 'studybuddy' naar de naam van jouw GitHub-repo
  base: '/studybuddy/',
  define: {
    __SUPABASE_URL__: JSON.stringify(process.env.VITE_SUPABASE_URL),
    __SUPABASE_KEY__: JSON.stringify(process.env.VITE_SUPABASE_KEY),
    __ANTHROPIC_KEY__: JSON.stringify(process.env.VITE_ANTHROPIC_KEY),
  }
})
