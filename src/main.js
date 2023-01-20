import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import router from './router';
import VueGtag from 'vue-gtag';
import App from './App.vue';
import PanelSection from './components/UI/PanelSection';

const app = createApp(App);
const head = createHead();

app.component('PanelSection', PanelSection);

app
  .use(head)
  .use(VueGtag, { config: { id: 'UA-30012836-1' } })
  .use(router)
  .mount('#app');