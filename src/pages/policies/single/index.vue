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
                    <b>{{ policy.start_date }}</b>
                  </h3>
                  <h3 class="subtitle">
                    End Date:
                    <b>{{ policy.end_date }}</b>
                  </h3>
                  <h3 class="subtitle">
                    Status:
                    <b>{{ policy.status }}</b>
                  </h3>
                  <h3 class="subtitle">
                    Product:
                    <br />
                    <b>Price Annual: {{ policy.product.price.annual }}</b>
                    <br />
                    <b>Price Monthly: {{ policy.product.price.monthly }}</b>
                    <br />
                    <b>Type: {{ policy.product.type }}</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <h3 class>Insured Entities</h3>
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
              <tr v-for="(policy, index) in policy.insured_entities" :key="index">
                <th>{{ index + 1 }}</th>
                <td>{{ policy.name }}</td>
                <td>{{ policy.species }}</td>
                <td>{{ policy.date_of_birth }}</td>
                <td>{{ policy.breed }}</td>
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
    this.$store.dispatch("getSinglePolicy", this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      policy: "getPolicy"
    })
  }
};
</script>