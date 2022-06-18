import HomePage from '@/components/pages/HomePage.vue';
import UserCart from '@/components/pages/UserCartPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import AdminProducts from '@/components/blocks/AdminProducts.vue';
import AdminPage from '@/components/pages/AdminPage.vue';
import AdminUsers from '@/components/blocks/AdminUsers.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    alias: '/home',
  },
  {
    path: '/user-cart',
    name: 'user-cart',
    component: UserCart,
  },
  {
    path: '/goods/:id',
    name: 'goods',
    component: ProductPage,
    props: true,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
    children: [
      {
        path: 'users',
        component: AdminUsers,
        name: 'adminUsers',
      },
      {
        path: 'products',
        component: AdminProducts,
        name: 'adminProducts',
      },
    ],
  },
  { path: '/:catchAll(.*)', redirect: '/home' },
];
export default routes;
