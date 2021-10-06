let express = require("express");
let application = express();
application.use(express.static(__dirname));
application.use(express.urlencoded({
    extended:true
}))
application.use(express.json());

application.get("/", function (request,response) {
    response.send("<h1>welcome to the some shop page</h1><a href='get.html'>Зареєструватися з GET</a><br><a href='post.html'>Зареєструватися з POST</a>")
});

application.get("/userRegisterGet", function (request, response) {
    console.log(request.query);
    response.send("Get Method " + JSON.stringify(request.query))
});

application.post("/userRegisterPost", function (request, response) {
    console.log(request.body);
    response.send("POST Method " + JSON.stringify(request.body))
});


application.listen(3000);