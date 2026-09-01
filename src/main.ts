import './global.css';

import { createApp } from 'vue';
import App from './App.vue';
import { appRouter } from './router/app.router.ts';

const app = createApp(App);
app.use(appRouter);
app.mount('#app');
