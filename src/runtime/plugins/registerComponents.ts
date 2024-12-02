import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    console.log('registerComponents.ts')
  }
});
