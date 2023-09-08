import type { App } from 'vue';
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";

export default (app: App) => {
    app.use(PrimeVue, { unstyled: true, pt: Tailwind });
  };
