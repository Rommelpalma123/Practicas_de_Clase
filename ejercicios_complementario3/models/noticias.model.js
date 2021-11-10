const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const NewsSchema = new Schema(

    {
        title: {type: String},
        link: {type: String}
    },
    {timestamp: {createdAt: true, updatedAt: true} }
)

module.exports = mongoose.model("Newsx", NewsSchema);