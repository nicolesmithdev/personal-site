import { createApp } from 'vue';
import router from './router';
import VueGtag from 'vue-gtag';
import App from './App.vue';
import PanelSection from './components/UI/PanelSection';

const app = createApp(App);

app.component('PanelSection', PanelSection);

app
  .use(VueGtag, { config: { id: 'UA-30012836-1' } })
  .use(router)
  .mount('#app');