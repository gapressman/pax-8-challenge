<template>
  <div class="columns">
    <div class="container column is-6">
      <label>
        Update Number of Employees
        <input
          class="input"
          :value="this.employees"
          type="number"
          placeholder="Employees"
          @change="e => handleChange(e)"
        />
      </label>

      <button class="button is-success" @click="confirmNewEmployees">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'updateEmployees',
  props: {
    numberOfEmployees: {
      type: Number,
      required: true,
    },
  },
  data() {
    return { employees: 0 };
  },
  created() {
    this.employees = this.numberOfEmployees;
  },
  methods: {
    handleChange(e) {
      this.employees = e.target.value;
    },

    confirmNewEmployees() {
      this.$emit('employeesUpdated', this.employees);
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 15px !important;
}
</style>
