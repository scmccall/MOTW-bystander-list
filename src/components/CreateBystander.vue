<template>
  <div>
    <p>CreateBystander</p>
    <form @submit.prevent="handleFormSubmission()">
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
        <input type="textarea" v-model="bystander.notes" required>
      </div>
      <div>
        <button>Create Bystander</button>
      </div>
    </form>
  </div>
</template>

<script>

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
    handleFormSubmission : function () {
      
    }
  }
}
</script>

<style>

</style>