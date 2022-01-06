const mongoose = require('mongoose');

// how our document look like
const uuuserSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});


// we need to turn it into a model
const postUser = mongoose.model('newuser', uuuserSchema);

module.export = postUser;