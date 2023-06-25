import { createWebHistory, createRouter } from 'vue-router';

import LoginPage from './components/LoginScreen.vue';
import DashboardPage from './components/DashboardPage.vue';
import SubmitPigDetailsPage from './components/SubmitPigDetails.vue';

const routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    component: DashboardPage,
  },
  {
    path: '/submit-pig-details',
    component: SubmitPigDetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
