const mongo = require("mongoose");
const blogSchema = require("../model/blog.model")
mongo.connect("mongodb://127.0.0.1:27017/myblog")

const insertData = async (data) => {
    const dataRes = await blogSchema(data).save();
    return dataRes;
}

// get all blogs
const allBlogs = async () =>{
    const dataRes = await blogSchema.find();
    return dataRes;
}

// find findBlogByQuery
const findBlogByQuery = async (query) =>{
    const dataRes = await blogSchema.find(query);
    return dataRes;
}


module.exports = {
    insertData: insertData,
    allBlogs : allBlogs,
    findBlogByQuery : findBlogByQuery
}