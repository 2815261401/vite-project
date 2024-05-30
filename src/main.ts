import { createSSRApp } from "vue";
import App from "./App.vue";
import { createVueRouter } from "./router";

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp(isSSR: boolean) {
  const app = createSSRApp(App);
  const { router } = createVueRouter(isSSR);
  app.use(router);
  return { app, router };
}
