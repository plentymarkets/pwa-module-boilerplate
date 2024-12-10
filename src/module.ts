import { useLogger, defineNuxtModule, addPlugin, addComponent, addImportsDir, createResolver } from '@nuxt/kit';
import type { TailwindColors } from '~/src/types';

export default defineNuxtModule({
  meta: {
    name: '@plentymarkets/pwa-module-boilerplate',
    configKey: 'pwa-module-boilerplate',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const logger = useLogger('pwa-module-boilerplate');

    /**
     * Hook to modify the TailwindCSS configuration
     */
    nuxt.hook('tailwindcss:config', (config) => {
      // Add the runtime components to the TailwindCSS content to enable Tailwind classes in the components
      if (config.content) {
        (config.content as string[]).push(resolve('./runtime/components/**/*.{vue,mjs,ts}'));
        (config.content as string[]).push(resolve('./runtime/*.{mjs,js,ts}'));
      }

      // Override the primary-500 color
      if (config?.theme?.extend?.colors) {
        (config.theme.extend.colors as TailwindColors)['primary']['500'] = '#000';
      }
    });

    /**
     * Register the module specific language files to the existing i18n module
     */
    nuxt.hook('i18n:registerModule', (register) => {
      register({
        langDir: resolve('./runtime/lang'),
        locales: [
          {
            code: 'en',
            file: 'en.json',
          },
          {
            code: 'de',
            file: 'de.json',
          },
        ],
      });
    });

    /**
     * Ready hook to log a message when the module is ready
     */
    nuxt.hook('ready', () => {
      logger.info('pwa-module-boilerplate is ready');
    });

    /**
     * Add the runtime components, composables and plugins
     */
    addImportsDir(resolve('./runtime/composables'));
    await Promise.all([
      addComponent({
        name: 'ModuleTest',
        filePath: resolve('./runtime/components/ModuleTest'),
      }),
    ]);
    addPlugin(resolve('./runtime/plugins/registerCookies'));
  },
});
