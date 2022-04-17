import {createRouter} from 'vue-router';
import Homepage from './home/Home.vue';
import {SignInComponent} from './user';
import Cart from './cart/Cart.vue';

const routes = [
    {
        path: '/',
        component: Homepage
    },
    {
        path: '/cart/',
        component: Cart
    },
    {
        path: '/sign-in/',
        component: SignInComponent
    },
];

export default function(history) {
    return createRouter({
        history,
        routes
    });
}
