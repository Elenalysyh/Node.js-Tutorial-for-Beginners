var connect = require ('connect');
var http = require ('http');

var app = connect();

//function doFirst (request, response, next) {
//    console.log("bacon");
//    next();
//}
//function doSecond (request, response, next) {
//    console.log("tuna");
//    next();
//}
//app.use(doFirst);
//app.use(doSecond);

function profile(request, response) {
    console.log("User requested profile");

}
function forum(request, response) {
    console.log("User requested forum");

}
app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running");

