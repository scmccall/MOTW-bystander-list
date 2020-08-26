<template>
  <div>
    {{ bystander }}
    <form @submit.prevent="handleUpdateBystanderFormSubmission()">
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="control">
            <input type="text" v-model="bystander.name" required>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Type</label>
        </div>
        <div class="field-body">
          <div class="control">
            <div class="select is-small">
              <select v-model="bystander.type">
                <option disabled selected>- Choose a Bystander type -</option>
                <option v-for="type in bystanderTypes" :key="type._id">
                  {{ type.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Motivation</label>
        </div>
        <div class="field-body">
          <div class="control">
            <input type="text" v-model="bystander.motivation" required>
            <!-- <input class="input is-static" type="text" v-model="bystander.moitvation"> -->
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Notes</label>
        </div>
        <div class="field-body">
          <div class="control">
            <textarea class="textarea" v-model="bystander.notes" required></textarea>
          </div>
        </div>
      </div>
      
      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="control">
            <button class="button is-success is-light is-group-centered">Create Bystander</button>
          </div>
        </div>
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
      this.bystander = res.data;
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

<style>

</style>