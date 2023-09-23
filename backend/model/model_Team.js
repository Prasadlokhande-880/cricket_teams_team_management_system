const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const teamSchema = new mongoose.Schema({
  _id:{
    type: String,
    required: true
  },
  teamName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  imgUrl:{
    type: String,
    required: true
  },
  homeGround: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  captain: {
    type: String,
    required: true
  },
  coach: {
    type: String,
    required: true
  },
  foundedYear: {
    type: Number,
    required: true
  }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
