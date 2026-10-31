import { createApp } from 'vue'; import { createRouter, createWebHashHistory } from 'vue-router'; import App from './App.vue'; import './style.css';
const router = createRouter({ history: createWebHashHistory(), routes: [
  { path: '/', component: () => import('./views/HomeView.vue') }, { path: '/aprender', component: () => import('./views/ModulesView.vue') },
  { path: '/modulo/:id', component: () => import('./views/ModuleView.vue') }, { path: '/praticar', component: () => import('./views/PracticeView.vue') },
  { path: '/sobre', component: () => import('./views/AboutView.vue') }
] }); createApp(App).use(router).mount('#app');
