var mongoose = require('mongoose');

var googleOAuthSchema = new mongoose.Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    googleId: String,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Google', googleOAuthSchema);