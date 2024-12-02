import type { NuxtHooks } from '@nuxt/schema';

declare module '@nuxt/schema' {
  interface NuxtHooks {
    'i18n:registerModule': (register: (options: { langDir: string; locales: Array<{ code: string; file: string }> }) => void) => void;
  }
}