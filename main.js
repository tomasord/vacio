var express = require("express")

var app = express();

app.get('/asd', function(req,res)

{
	res.send('hello wolrd')
}
)

app.listen(3000, function(){
console.log("hola server")
});