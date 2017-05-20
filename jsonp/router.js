//服务端接受并匹配客户端的请求
app.get('/getNews',function(req,res){
  var news = [
    "这是利用jsonp的方法实现跨域的",
    "1、定义数据处理函数fun",
    "2、创建script标签，src的地址执行后端接口，最后加参数callback=fun",
    "3、服务端在收到请求，解析参数，返回fun(data)字符串",
    "4、function（data）会放在script标签作为js执行，此时调用fun函数，将data作为参数"
  ]
  var data = [];
  for(var i=0;i<3;i++){
    var index = parseInt(Math.random()*news.length);
    data.push(news[index]);
    news.splice(index,1);
  }
//获取callback的值（即appendHTML函数名），返回一个fun(data)
  var cb=req.query.callback
  res.send(cb+'('+JSON.stringify(data)+')');
});