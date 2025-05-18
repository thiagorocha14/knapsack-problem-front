import { createApp } from 'vue';
import { VCodeBlock } from '@wdns/vue-code-block';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.component('VCodeBlock', VCodeBlock);

app.mount('#app');
