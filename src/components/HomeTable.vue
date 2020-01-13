<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th @click="sortBy('name')">Name</th>
              <th @click="sortBy('email')">Email</th>
              <th @click="sortBy('address')">Address</th>
              <th @click="sortBy('phone')">Phone</th>
              <th @click="sortBy('registered')">Registered Date</th>
              <th @click="sortBy('isActive')">Status</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Registered Date</th>
              <th>Status</th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(customer, index) in filteredCustomers" :key="index">
              <th>{{ index + 1 }}</th>
              <td>
                <a
                  :href="'/customer/' + customer.uuid"
                >{{ customer.name.first }} {{ customer.name.last }}</a>
              </td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.address }}</td>
              <td>{{ customer.phone }}</td>
              <td>{{ customerRegisteredDate(customer.registered) }}</td>
              <td>{{ customerStatus(customer.isActive) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeTable",
  data() {
    return {
      term: null,
      order: 1,
      filteredCustomers: []
    };
  },
  async mounted() {
    await this.$store.dispatch("getAllCustomers");
    this.filteredCustomers = this.customers;
  },
  methods: {
    customerStatus(item) {
      return item ? "Active" : "Not Active";
    },
    customerRegisteredDate(item) {
      return moment(item).format("DD/MM/Y HH:mm");
    },
    sortBy(term) {
      if (this.term != term) this.term = term;
      else this.order = -this.order;

      this.filteredCustomers = this.customers.sort((a, b) => {
        if (term == "name")
          return a.name.first > b.name.first ? -this.order : this.order;

        return a[this.term] > b[this.term] ? -this.order : this.order;
      });
    }
  },
  computed: {
    ...mapGetters({
      customers: "getCustomers"
    })
  }
};
</script>

