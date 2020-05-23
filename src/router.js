import Vue from 'vue'
import Router from 'vue-router'
import AllProducts from './components/AllProducts';
import CartCheckout from './components/CartCheckout';

Vue.use(Router)

export default new Router({
routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },

    {
      path: '/fotos/:id',
      name: 'fotos',
      component: () => import('./components/CartCheckout')
    },

   ]

});

//{{$route.params.id}}