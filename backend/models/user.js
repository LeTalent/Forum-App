const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

// User ist the name of the Model
module.exports = mongoose.model('User', userSchema);
