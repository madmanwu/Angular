var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");

var data=[{
    url:"images/1_03.jpg",
    name:"过去，现在，未来",
    time:"2017.08.22",
    buy:"重量：散装称重1000g",
    msg:"好评，生产日期都是最近一个星期，而且真有好几种口味，不是很甜，数量有33个，同商家描述的一样，下次想吃月饼时再光顾这点。"
},{
    url:"images/1_03.jpg",
    name:"NO-p尼尼",
    time:"2017.08.22",
    buy:"重量：散装称重1000g",
    msg:"好评，同商家描述的一样，下次想吃月饼时再光顾这点。生产日期都是最近一个星期，而且真有好几种口味，不是很甜，数量有33个，"
},{
    url:"images/1_03.jpg",
    name:"过去，现在，未来",
    time:"2017.08.22",
    buy:"重量：散装称重1000g",
    msg:"好评，生产日期都是最近一个星期，而且真有好几种口味，不是很甜，数量有33个，同商家描述的一样，下次想吃月饼时再光顾这点。"
},
{
    url:"images/1_03.jpg",
    name:"NO-p尼尼",
    time:"2017.08.22",
    buy:"重量：散装称重1000g",
    msg:"好评，同商家描述的一样，下次想吃月饼时再光顾这点。生产日期都是最近一个星期，而且真有好几种口味，不是很甜，数量有33个，"
}]

gulp.task("server", function(){
    gulp.src("gulp")
        .pipe(webserver({
            port: "8888",
            middleware: function(req, res, next){
                var method = req.method;
                res.setHeader("Access-Control-Allow-Origin", "*");
                if(method === "get"){
                    res.write(JSON.stringify(data));
                    res.end();
                }
            }
        }))
})
gulp.task("default", ["server"]);