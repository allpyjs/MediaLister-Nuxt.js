import { VueQueryPlugin, QueryClient, VueQueryPluginOptions } from '@tanstack/vue-query';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const queryClient = new QueryClient();

  const options: VueQueryPluginOptions = {
    queryClient,
  };

  nuxtApp.vueApp.use(VueQueryPlugin, options);
});
