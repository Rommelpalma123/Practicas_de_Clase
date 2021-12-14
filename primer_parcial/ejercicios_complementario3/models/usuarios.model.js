const { Schema } = require('mongoose');
const mongoose = require('mongoose');
// creamos arreglos
const UserSchema = new Schema(

    {
        name: {type: String},
        nick: {type: String}
    },

    { timestamp: { createdAt: true, updatedAt: true} }
)

module.exports = mongoose.model("Usersx", UserSchema)