const e = require("cors");
const database = require("../database/db")
const uplodeData = async (request, response) => {
    // file valedation
    if (!request.file) {
        response.status(404)
        response.json({
            type: "image-validation",
            filed: "file",
            message: "Please select a File"

        })
    } else {
        const file = request.file;
        const data = request.body;
        data["image"] = file.destination + "/" + file.filename;
        try {
            const dataRes = await database.insertData(data);
            response.status(200);
            response.json(dataRes);
        } catch (error) {
            let filed = [];
            response.status(409);
            if (error.code && error.code == 11000) {
                response.json({
                    message: "Title Filed must be unique !",
                    filed: "title",
                    type: "unique"
                })
            } else {
                for (let key in error.errors) {
                    filed.push({
                        filed: key,
                        message: error.errors[key].message
                    })
                }
                response.json({
                    type: "required",
                    filed: filed

                })
            }
        }
    }

}

// get all blogs 

const getAllBlogs = async (request, response) => {
    const dataRes = await database.allBlogs();
    if(dataRes.length != 0) {
        
        response.status(200);
        response.json(dataRes)
    } else {
        response.status(404);
        response.json({
            message : "Data not Found !"
        })
    }

}


 // get all getBlogByQuery 

const getBlogByQuery = async (request, response) => {
   const  query = {
    category : request.params.category
   }
    const dataRes = await database.findBlogByQuery(query);
    if(dataRes.length != 0) {
        
        response.status(200);
        response.json(dataRes)
    } else {
        response.status(404);
        response.json({
            message : "No not Found this category !"
        })
    }

}

module.exports = {
    uplodeData: uplodeData,
    getAllBlogs: getAllBlogs,
    getBlogByQuery : getBlogByQuery
}