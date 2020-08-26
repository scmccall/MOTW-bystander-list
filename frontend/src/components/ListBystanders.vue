<template>
  <div>

    <table class="table">
      <!-- Table Headers -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Motivation</th>
          <th>Notes</th>
          <th>Controls</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody>
        <tr v-for="bystander in Bystanders" :key="bystander._id">
          <td>{{ bystander.name }}</td>
          <td>{{ bystander.type }}</td>
          <td>{{ bystander.motivation }}</td>
          <td>{{ bystander.notes }}</td>
          <td>
            <router-link class="button is-info is-light is-small" :to="{ name: 'edit', params: {id: bystander._id} }">Edit</router-link>
            <button class="button is-danger is-light is-small" @click.prevent="deleteBystander(bystander._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from "axios"

export default {
  data() {
    return {
      Bystanders : [],
      // console : ''
    }
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios.get(apiURL).then(res => {
      // this.console = res.data;
      this.Bystanders = res.data;
    }).catch(err => {
      console.log(err)
    });
  },

  methods : {
    deleteBystander : function (id) {
      let apiURl = `http://localhost:4000/api/delete-bystander/${id}`;
      let indexOfArrayItem = this.Bystanders.findIndex( i => i._id === id);

      axios.delete(apiURl).then(() => {
        this.Bystanders.splice(indexOfArrayItem, 1);
      }).catch(err => {
        console.log(err);
      });
    },
  },
}
</script>

<style>

</style>