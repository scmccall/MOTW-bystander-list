<template>
  <div>
    <p>EditBystander</p>
    {{ bystander }}
    <form @submit.prevent="handleUpdateBystanderFormSubmission()">
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
        <button>Edit</button>
      </div>
    </form>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      bystander : {},
    }
  },
  
  created() {
    let apiURL = `http://localhost:4000/api/edit-bystander/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.student = res.data;
    });
  },

  methods: {
    handleUpdateBystanderFormSubmission : function () {
      let apiURL = `http://localhost:4000/api/update-bystander/${this.$route.params.id}`;

      axios.post(apiURL, this.bystander).then((res) => {
        console.log(res);
        this.$router.push('/view');
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>
   methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

            axios.post(apiURL, this.student).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
<style>

</style>