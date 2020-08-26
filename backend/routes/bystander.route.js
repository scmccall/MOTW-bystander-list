const express = require('express');
const bystanderRoute = express.Router();

// Bystander model
let BystanderModel = require('../models/Bystander');
const Bystander = require('../models/Bystander');

 bystanderRoute.route('/').get((req, res) => {
  BystanderModel.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data)
    };
  });
 });

 bystanderRoute.route('/create-bystander').post((req, res, next) => {
  BystanderModel.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    };
  });
 });

bystanderRoute.route('/edit-bystander/:id').get((req, res) => {
  BystanderModel.findById(req.params.id, (err, data) => {
    if (err) {
      return (err);
    } else {
      res.json(data)
    };
  });
 });

// Update bystander
bystanderRoute.route('/update-bystander/:id').post((req, res, next) => {
  BystanderModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, data) => {
    if (err) {
      return next(err)
    } else {
      res.json(data);
      console.log("Bystander successfully updated.");
    };
  });
});

// Delete bystander
bystanderRoute.route('/delete-bystander/:id').delete((req, res, next) => {
  BystanderModel.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({
        msg: data
      });
    };
  });
});

module.exports = bystanderRoute