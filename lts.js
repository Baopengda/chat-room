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
    res.render("lts")
    res.end();
})

server.listen(8090);


//连接socket.io
io.on('connection',function(socket){
    socket.on('h560',function(data){
        //console.log(data);..........................................................................bind (el, binding, vnode) {
            
        // },
        //把接收到的客户端信息发送给所有该;频道的客户端
        socket.broadcast.emit('h560',data);
    })
})
