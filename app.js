let express = require("express");

let app = express();

//制作一个服务器
let server = require("http").Server(app);

//创建一个socket.io 服务 (这个服务就是聊天的服务器) 该服务不是自动安装的,需要手动安装
let io = require('socket.io')(server);

//设置静态资源
app.use(express.static("node_modules"));

//设置模板引擎
app.set("view engine","ejs");

//设置视图路径
app.set("views","./views");

//设置路由
app.get("/app",function(req,res){
    //console.log('123');
    res.render("index")
    res.end();
})

server.listen(8090);


//连接socket.io
io.on('connection',function(socket){
    /*
        socket是一个对象,中会有两个方法
            服务端发送消息给客户端
            emit方法 发送
                emit方法中有两个形参
                    参数1.频道号
                    参数2:对象 {发送数据的键:值}
            服务端接收客户daunt的信息
            on方法 接收
                on方法中有两个参数
                    参数1:频道号
                    参数2:回调函数
                        参数1:就是客户端发送给服务端的信息
    */

    //服务端发送消息给客户端
    socket.emit('h560',{'message':"么么哒"});
    //接收客户端发送的信息
    socket.on('h560',function(data){
        console.log(data);
    })
})