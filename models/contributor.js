var mongoose = require('mongoose');

var contributorSchema = mongoose.Schema({
    name: {type: String, required: true},
    function: {type: String, required: true}
})

module.exports = mongoose.model('Contributor', contributorSchema);