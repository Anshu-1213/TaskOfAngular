const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    FirstName: { type: String },
    LastName: { type: String }
    
});

module.exports = { Employee };