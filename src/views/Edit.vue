<template>
  <div class="has-text-centered">
    <p class="is-size-2">Edit Company</p>

    <div class="columns">
      <div class="column container is-two-fifths">
        <input
          class="input"
          @change="e => makeHandleChange('name')(e)"
          :value="company.name"
          type="text"
          placeholder="Name"
        />
        <input
          class="input"
          :value="company.id"
          type="number"
          placeholder="Id"
          @change="e => makeHandleChange('id')(e)"
        />
        <input
          class="input"
          :value="company.domain"
          type="text"
          placeholder="Domain"
          @change="e => makeHandleChange('domain')(e)"
        />
        <input
          class="input"
          :value="company.numberOfEmployees"
          type="number"
          placeholder="Employees"
          @change="e => makeHandleChange('numberOfEmployees')(e)"
        />
        <input
          class="input"
          :value="company.subscriptionsPerEmployee"
          type="number"
          placeholder="Subscriptions"
          @change="e => makeHandleChange('subscriptionsPerEmployee')(e)"
        />
        <button
            @click="handleUpdateShowMessage()"
            class="button is-success">
            Update
        </button>
        <article v-if="showMessage" class="message is-success">
          <div class="message-header">
            <p>Updated Company</p>
            <button class="delete" @click="handleUpdateShowMessage()" aria-label="delete"></button>
          </div>
          <div class="message-body has-text-left">
            <ul>
              <li>Name: {{ company.name }}</li>
              <li>Id: {{ company.id }}</li>
              <li>Domain: {{ company.domain }}</li>
              <li>Number of Employees: {{ company.numberOfEmployees }}</li>
              <li>Subscriptions Per Employee: {{ company.subscriptionsPerEmployee }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { getById } from '../services/CompanyService';

export default {
  name: 'edit',
  async created() {
    const company = await getById(+this.$route.params.id);

    // eslint-disable-next-line no-console
    this.company = company;
  },
  data() {
    return { company: {}, showMessage: false };
  },
  methods: {
    makeHandleChange(propertyName) {
      return (event) => {
        if (!this.showMessage) {
          this.company[propertyName] = event.target.value;
        }
      };
    },
    handleUpdateShowMessage() {
      this.showMessage = !this.showMessage;
    },
  },
};
</script>

<style scoped>
.button {
  margin-top: 15px !important;
}

.message {
    height: 100%;
    top: 0;
    position: absolute;
    width: 100%;
}
</style>
