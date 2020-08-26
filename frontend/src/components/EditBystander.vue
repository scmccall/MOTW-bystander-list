<template>
  <div class="content">
    <h1 class="title">
      Edit Bystander
    </h1>
    <p class="content">
      Edit the information below, and any changes will be updated immediately.
    </p>
    <form @submit.prevent="handleUpdateBystanderFormSubmission()">
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="control">
            <input class="input" type="text" v-model="bystander.name" required>
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
            <input class="input" type="text" v-model="bystander.motivation" required>
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
            <button class="button is-success is-light is-group-centered">Submit Changes</button>
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

      bystanderTypes : {
        Busybody : {
          name : 'Busybody',
          motivation : 'to interfere in other people\'s plans'
        },
        Detective : {
          name : 'Detective',
          motivation : 'to rule out explainations'
        },
        Gossip : {
          name : 'Gossip',
          motivation : 'to pass on rumors'
        },
        Helper : {
          name : 'Helper',
          motivation : 'to join the hunt'
        },
        Innocent : {
          name : 'Innocent',
          motivation : 'to do the right thing'
        },
        Official : {
          name : 'Official',
          motivation : 'to be suspicious'
        },
        Skeptic : {
          name: 'Skeptic',
          motivation : 'to deny supernatural explainations'
        },
        Victim : {
          name : 'Victim',
          motivation: 'to put themselves in danger'
        },
        Witness : {
          name : 'Witness',
          motivation : 'to reveal information'
        }

      }
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