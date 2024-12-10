import type { NuxtHooks as I18nHooks } from '@nuxtjs/i18n';
import type { NuxtHooks as TailwindHooks } from '@nuxtjs/tailwindcss';

declare module '@nuxt/schema' {
  interface NuxtHooks extends I18nHooks, TailwindHooks {}
}
