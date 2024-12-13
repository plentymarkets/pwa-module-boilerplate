import {useLogger, defineNuxtModule, addPlugin, addComponent, addImportsDir, addComponentsDir} from '@nuxt/kit';
import { resolve } from 'pathe'
import { fileURLToPath } from 'node:url'

export default defineNuxtModule({
  meta: {
    name: '@plentymarkets/pwa-module-boilerplate',
    configKey: 'pwa-module-boilerplate',
  },
  async setup(options, nuxt) {
    const logger = useLogger('pwa-module-boilerplate');
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    /**
     * Register the module specific language files to the existing i18n module
     */
    nuxt.hook('i18n:registerModule', (register) => {
      register({
        langDir: resolve(runtimeDir, 'lang'),
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

    await Promise.all([
      addComponent({
        name: 'ModuleTest',
        filePath: resolve(runtimeDir, 'components/ModuleTest')
      }),
    ])
    addPlugin(resolve(runtimeDir, 'plugins/registerCookies'));
  },
});
