import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/Products.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Admin from '../views/Admin.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/products', component: Products },
  { path: '/products/:id', component: ProductDetails },
  { path: '/admin', component: Admin },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
