let express = require("express");
let application = express();
application.use(express.static(__dirname));
application.use(express.urlencoded({
    extended:true
}))
application.use(express.json());

application.get("/userRegisterGet", function (request, response) {
    console.log(request.query);
    response.send("Get Method " + JSON.stringify(request.query))
});

application.post("/userRegisterPost", function (request, response) {
    console.log(request.body);
    response.send("POST Method " + JSON.stringify(request.body))
});


application.listen(3000);