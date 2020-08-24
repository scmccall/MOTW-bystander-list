const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bystanderSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  motivation: {
    type: Number
  },
  notes: {
    type: String
  }
}, {
  collection: 'bystanders'
})

module.exports = mongoose.model('Bystander', bystanderSchema)