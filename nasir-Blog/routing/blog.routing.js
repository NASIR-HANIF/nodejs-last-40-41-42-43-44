const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog.controller");


//blog  routing request
router.get("/", (request, response) => {
 blogController.getAllBlogs(request,response)
});

router.get("/:category", (request, response) => {
  blogController.getBlogByQuery(request,response)
 });

router.post("/", (request, response) => {
   blogController.uplodeData(request,response);
});

router.put("/", (request, response) => {
  response.status(200);
  response.json("blog request put");
});

router.delete("/", (request, response) => {
  response.status(200);
  response.json("blog delete request");
});

module.exports = router;
