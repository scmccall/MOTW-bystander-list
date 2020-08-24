<template>
  <div>
    <p>ListBystanders</p>
    <!-- {{ Bystanders }} -->
    <!-- {{ console }} -->
    <ul>
      <li v-for="bystander in Bystanders" :key="bystander._id">
        {{ bystander.name }}
        {{ bystander.type }}
        {{ bystander.motivation }}
        {{ bystander.notes }}
        <router-link :to="{ name: 'edit', params: {id: bystander._id} }">Edit</router-link>
        <button @click.prevent="deleteBystander(bystander._id)">Delete</button>

      </li>
    </ul>
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