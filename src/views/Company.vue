<template>
  <div class="container">
    <span class="has-text-centered">
      <p class="is-size-2">{{ company.name }}</p>
      <router-link :to="{ path: `/edit/${company.id}` }">
        <p>Edit</p>
      </router-link>
    </span>

    <div class="columns">
      <div class="container column is-centered is-6">
        <ul>
          <li>Id: {{ company.id }}</li>
          <li>Domain: {{ company.domain }}</li>
          <li>Number of Employees: {{ company.numberOfEmployees }}</li>
          <li>Subscriptions Per Employee: {{ company.subscriptionsPerEmployee }}</li>
          <li>Total Subscriptions: {{ totalSubscriptions }}</li>
        </ul>
      </div>
    </div>

    <UpdateEmployees
      v-if="showChild"
      :numberOfEmployees="company.numberOfEmployees"
      @employeesUpdated="employees => company.numberOfEmployees = employees"
    />
  </div>
</template>

<script>
import { getById } from '../services/CompanyService';
import UpdateEmployees from './UpdateEmployees.vue';

export default {
  name: 'company',
  components: { UpdateEmployees },
  async created() {
    const company = await getById(+this.$route.params.id);

    // eslint-disable-next-line no-console
    this.showChild = true;
    this.company = company;
  },
  data() {
    return { company: {}, showChild: false };
  },
  computed: {
    totalSubscriptions() {
      const { numberOfEmployees, subscriptionsPerEmployee } = this.company;

      return numberOfEmployees * subscriptionsPerEmployee;
    },
  },
};
</script>
