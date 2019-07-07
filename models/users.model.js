const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    fullname: {type: String, required: true, max: 100},
    username: {type: String, required: true},
    email:{type: String, required: true, max: 100},
    password:{type: String, required: true}
});


// Export the model
module.exports = mongoose.model('users', userSchema);