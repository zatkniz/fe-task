<template>
  <div class="container">
    <div class="columns">
      <section class="hero is-hero-bar is-main-hero">
        <div class="hero-body">
          <div class="level">
            <div class="level-left">
              <div class="level-item is-hero-content-item">
                <div>
                  <h3 class="subtitle">
                    Start Date:
                    <b>{{ quote.start_date }}</b>
                  </h3>
                  <h3 class="subtitle">
                    End Date:
                    <b>{{ quote.end_date }}</b>
                  </h3>
                  <h3 class="subtitle">
                    Status:
                    <b>{{ quote.status }}</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <h3 class>Incurance Entities</h3>
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Species</th>
                <th>Birth Date</th>
                <th>Breed</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Species</th>
                <th>Birth Date</th>
                <th>Breed</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="(quote, index) in quote.insured_entities" :key="index">
                <th>{{ index + 1 }}</th>
                <td>{{ quote.name }}</td>
                <td>{{ quote.species }}</td>
                <td>{{ quote.date_of_birth }}</td>
                <td>{{ quote.breed }}</td>
              </tr>
            </tbody>
          </table>
          <h3 class>Products</h3>
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Type</th>
                <th>Price Annual</th>
                <th>Price Monthly</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th></th>
                <th>Type</th>
                <th>Price Annual</th>
                <th>Price Monthly</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="(quote, index) in quote.products" :key="index">
                <th>{{ index + 1 }}</th>
                <td>{{ quote.type }}</td>
                <td>{{ quote.price.annual }}</td>
                <td>{{ quote.price.monthly }}</td>
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
    this.$store.dispatch("getSingleQuote", this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      quote: "getQuote"
    })
  }
};
</script>