
'use strict'
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const koppenFilterSchema = new mongoose.Schema({
  longitude: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  decades: {
    '1901': {
      type: String,
      required: true
    },
    '1911': {
      type: String,
      required: true
    },
    '1921': {
        type: String,
        required: true
    },
    '1931': {
        type: String,
        required: true
    },
    '1941': {
        type: String,
        required: true
    },
    '1951': {
        type: String,
        required: true
    },
    '1961': {
        type: String,
        required: true
    },
    '1971': {   
        type: String,
        required: true
    },
    '1981': {
        type: String,
        required: true
    },
    '1991': {
        type: String,
        required: true
    },
    '2001': {
      type: String,
      required: true
    },
    '2010': {
      type: String,
      required: true
    }
  }
});

const KoppenFilter = mongoose.model('KoppenFilter', koppenFilterSchema);

module.exports = KoppenFilter;
