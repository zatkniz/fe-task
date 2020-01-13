import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/HomeTable';
import CustomerSingle from '@/pages/customer/single';
import QuotesSingle from '@/pages/quotes/single';
import PoliciesSingle from '@/pages/policies/single';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/customer/:id',
        name: 'CustomerSingle',
        component: CustomerSingle
    },
    {
        path: '/quotes/:id',
        name: 'QuoteSingle',
        component: QuotesSingle
    },
    {
        path: '/policies/:id',
        name: 'PolicySingle',
        component: PoliciesSingle
    },
    { path: '*', component: Home }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;