var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require('url');

var data = [{
    "login":"zhangshan",
    "name":"张三",
    "state":"在线",
    "commany":"北京科技有限公司"
},{
    "login":"ls",
    "name":"李wu",
    "state":"在线",
    "commany":"湖南制造有限公司"
},{
    "login":"wangw",
    "name":"王五",
    "state":"在线",
    "commany":"北京百度公司"
},{
    "login":"zhangshan",
    "name":"张三",
    "state":"在线",
    "commany":"北京科技有限公司"
},{
    "login":"ls",
    "name":"李四",
    "state":"在线",
    "commany":"湖南制造有限公司"
},{
    "login":"wangw",
    "name":"王五",
    "state":"在线",
    "commany":"北京百度公司"
}]

gulp.task('service', function(){
    gulp.src('gulp')
        .pipe(webserver({
            port: 8888,
            middleware: function(req, res, next){
                var method = req.method;
                var urlparse = url.parse(req.url);
                var pathname = urlparse.pathname;
                res.setHeader('Access-Control-Allow-Origin', '*');

                if(method === 'GET'){
                    res.write(JSON.stringify(data));
                    res.end();
                }
            }
        }))
    })
    gulp.task('default', ['service']);