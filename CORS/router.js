
app.get('/getNews', function(req, res){

	var news = [
		"11",
    "22",
    "33",
    "44"
	]
	var data = [];
	for(var i=0; i<3; i++){
		var index = parseInt(Math.random()*news.length);
		data.push(news[index]);
		news.splice(index, 1);
	}
//允许http://wu.com:8080的内客户端脚本来进行读写操作（实现跨域）
	res.header("Access-Control-Allow-Origin", "http://wu.com:8080"); 
	res.send(data);
})