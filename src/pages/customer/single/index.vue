<template>
  <div class="container">
    <div class="columns">
      <section class="hero is-hero-bar is-main-hero">
        <div class="hero-body">
          <div class="level">
            <div class="level-left">
              <div class="level-item is-hero-content-item">
                <div>
                  <h1 class="title is-spaced">
                    <b>{{ customer.name ? customer.name.first : '' }} {{customer.name ? customer.name.last : ''}}</b>
                  </h1>
                  <h3 class="subtitle">
                    Email:
                    <b>{{ customer.email }}</b>
                  </h3>
                  <h3 class="subtitle">
                    Phone:
                    <b>{{ customer.phone }}</b>
                  </h3>
                  <h3 class="subtitle">
                    Address:
                    <b>{{ customer.address }}</b>
                  </h3>
                  <p>
                    Customer has
                    <b>{{customer.quotes ? customer.quotes.length : 0}} quotes</b> and
                    <b>{{ customer.policies ? customer.policies.length : 0}} policies</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 class>Quotes</h3>
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th></th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="(customer, index) in customer.quotes" :key="index">
                <th>{{ index + 1 }}</th>
                <td>
                  <a :href="'/quotes/' + customer.uuid">{{ customer.status }}</a>
                </td>
                <td>{{ customer.start_date }}</td>
                <td>{{ customer.end_date }}</td>
              </tr>
            </tbody>
          </table>
          <h3 class>Policies</h3>
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th></th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="(customer, index) in customer.policies" :key="index">
                <th>{{ index + 1 }}</th>
                <td>
                  <a :href="'/policies/' + customer.uuid">{{ customer.status }}</a>
                </td>
                <td>{{ customer.start_date }}</td>
                <td>{{ customer.end_date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "single",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getSingleCustomer", this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      customer: "getCustomer"
    })
  }
};
</script>