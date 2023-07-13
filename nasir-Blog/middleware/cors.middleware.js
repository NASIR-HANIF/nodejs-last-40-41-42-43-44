const cors = require("cors");
// require cors middlewear 3th party
// cors ko kisi bhi route middlewear se pehley call karna hey
// ta keh pehley cros call ho phir middleware route call ho
// cors me origen set karney se sirf us domain se he request ho gi go origin me deya ho ga
// ager origen set na kia to her domain ,her url se data accepet karey ga server
//server.use(cors({origin : "http://127.0.0.1:5500"}));
module.exports = cors();
