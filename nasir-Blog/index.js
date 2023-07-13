const express = require("express");
const server = express();
const cors = require("./middleware/cors.middleware");
const bodyParser = require("./middleware/bodyparser.middleware");
const multiPart = require("./middleware/multer.middleware");
const blogRouter = require("./routing/blog.routing");

server.listen(8080);


//   require cors
server.use(cors);

// body parser route as middleware 3th party
server.use(bodyParser.urlEncoder);
server.use(bodyParser.jsonEncoder);

// multer route as middleware 3th party
server.use(multiPart);

// route level middlewear
server.use("/storage", express.static(__dirname + "/storage"))
server.use("/blog", blogRouter);



// not found route
server.all("/*", (request, response) => {
    response.status(404);
    response.json("Not Found")
})