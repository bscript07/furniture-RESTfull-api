const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    rePass: String,
});

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model('User', userSchema);
module.exports = User;