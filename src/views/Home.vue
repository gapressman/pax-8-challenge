<template>
  <div>
    <h1 class="is-size-2 has-text-centered">Companies</h1>
    <div class="columns is-centered">
      <div class="column is-half">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(company, index) in companies" :key="index">
              <td>{{ company.id }}</td>
              <td>
                <router-link :to="{ path: `/about/${company.id}` }">{{ company.name }}</router-link>
              </td>
              <td>
                <router-link :to="{ path: `/edit/${company.id}` }">Edit company</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getAll } from '../services/CompanyService';

export default {
  name: 'home',
  async created() {
    const companies = await getAll();

    this.companies = companies;
  },
  data() {
    return { companies: [] };
  },
};
</script>

<style>
.table {
  margin: 0 auto;
}
</style>
