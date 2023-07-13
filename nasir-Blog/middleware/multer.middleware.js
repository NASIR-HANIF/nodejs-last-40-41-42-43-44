const multer = require("multer");

// images stor karney ke leye multer se diskstorage ko call kia
const storage = multer.diskStorage({
    destination: (request, fileInfo, callback) => {
        callback(null, "storage/images")

    },
    filename: (request, fileInfo, callback) => {
         callback(null, fileInfo.originalname)
    }

})

// access single image and route as middleware 3th party
const multiPart = multer({
    storage: storage
}).single("file");

module.exports = multiPart;


// const multiPart = multer().single("file")
//   ager photo chahey to single function call karen gey Exemple:-  name="file"
// form me name atrebute ki jo value ho gi wo value single ke ander likhan gey
// or phir server.use(multiPart) middleware ke toor pe use karna hey

// const myData = multer().none()
// ager photo nahi chahey to multer se none function ko call karen gey
// or phir server.use(myData) middleware ke toor pe use karna hey


// const multiPart = multer().array("anyname");
// ager 1 se zeada file reseve ker rahey hen to array function call karen gey
// or is me koi bhi name rakh den gey
// or phir server.use(multiPart) middleware ke toor pe use karna hey