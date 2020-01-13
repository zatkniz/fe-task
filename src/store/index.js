import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        customers: [],
        customer: {},
        quote: {},
        policy: {},
        quotes: [],
        policies: [],
    },
    mutations: {
        SET_QUOTES: (state, payload) => (state.quotes = payload),
        SET_POLICIES: (state, payload) => (state.policies = payload),
        SET_CUSTOMERS: (state, payload) => (state.customers = payload),
        SET_CUSTOMER: (state, payload) => (state.customer = payload),
        SET_QUOTE: (state, payload) => (state.quote = payload),
        SET_POLICY: (state, payload) => (state.policy = payload),
    },
    actions: {
        getAllQuotes: ({ commit }) =>
            axios.get('quotes').then(res => {
                return commit('SET_QUOTES', res.data);
            }),
        getAllPolicies: ({ commit }) =>
            axios.get('policies').then(res => {
                return commit('SET_POLICIES', res.data);
            }),
        getAllCustomers: ({ commit }) =>

            axios.get('customers').then(res => {

                res.data = res.data.sort((a, b) => {
                    return a.registered > b.registered ? -1 : 1
                })

                return commit('SET_CUSTOMERS', res.data);
            }),
        getSingleCustomer: async ({ state, commit, dispatch }, id) => {
            await dispatch('getAllQuotes');
            await dispatch('getAllPolicies');

            axios.get(`customers/${id}`).then(res => {
                res.data.quotes = state.quotes.filter(quote => quote.customer_uuid == id)
                res.data.policies = state.policies.filter(policy => policy.customer_uuid == id)
                return commit('SET_CUSTOMER', res.data);
            });
        },
        getSingleQuote: async ({ state, commit, dispatch }, id) => {
            axios.get(`quotes/${id}`).then(res => {
                return commit('SET_QUOTE', res.data);
            });
        },
        getSinglePolicy: async ({ state, commit, dispatch }, id) => {
            axios.get(`policies/${id}`).then(res => {
                return commit('SET_POLICY', res.data);
            });
        },
    },
    getters: {
        getQuotes: state => state.quotes,
        getCustomers: state => state.customers,
        getCustomer: state => state.customer,
        getQuote: state => state.quote,
        getPolicy: state => state.policy,
    },
    modules: {}
});