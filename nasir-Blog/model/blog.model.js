const mongo = require("mongoose");
const { Schema } = mongo;
const blogSchema =new Schema({
    title: {
        type : String,
        unique : true,
        required : [true,"Title Filed Is Required"]
    },
    category : String,
    descryption: {
        type : String,
        required : [true,"Descryption Filed Is Required"]
    },
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongo.model("Blog",blogSchema);