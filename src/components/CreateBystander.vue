<template>
  <div>
    <p>CreateBystander</p>
    <form @submit.prevent="handleCreateBystanderFormSubmission()">
      <div>
        <label>Name</label>
        <input type="text" v-model="bystander.name" required>
      </div>
      <div>
        <label>Type</label>
        <input type="text" v-model="bystander.type" required>
      </div>
      <div>
        <label>Motivation</label>
        <input type="text" v-model="bystander.moitvation" required>
      </div>
      <div>
        <label>Notes</label>
        <textarea v-model="bystander.notes" required></textarea>
      </div>
      <div>
        <button class="button is-link">Create Bystander</button>
      </div>
    </form>
  </div>
</template>

<script>

import axios from "axios"

export default {
  data() {
    return {
      bystander : {
        name : '',
        type : '',
        motivation : '',
        notes : '',
      }
    }
  },

  methods : {
    handleCreateBystanderFormSubmission : function () {
      let apiURL = "http://localhost:4000/api/create-bystander"

      axios.post(apiURL, this.bystander).then(() => {
        this.$router.push('/view');
        this.student = {
          name : '',
          type: '',
          motivation: '',
          notes: ''
        };
      }).catch(err => {
        console.log(err);
      });
    },

  }
}
</script>

<style>

</style>