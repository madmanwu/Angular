var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");

var data = [{
    name:'张三',
    sure:'张小三',
    tai:'在线',
    factory:'苹果'
},{
    name:'李四',
    sure:'李小四',
    tai:'离线',
    factory:'鸭梨'
},{
    name:'赵五',
    sure:'赵小无',
    tai:'在线',
    factory:'西瓜'
},{
    name:'小六',
    sure:'小小六',
    tai:'离线',
    factory:'栗子'
},{
    name:'真七',
    sure:'是真七',
    tai:'离线',
    factory:'桃子'
},{
    name:'假八',
    sure:'是假八',
    tai:'在线',
    factory:'葡萄'
},{
    name:'九九',
    sure:'久九九',
    tai:'离线',
    factory:'提子'
}]

gulp.task('server', function(){
    gulp.src('gulp')
        .pipe(webserver({
            port:'8088',
            middleware: function(req, res, next){
                res.setHeader("Access-Control-Allow-Origin","*")
                var method = req.method;
                if(method == 'GET'){
                    res.write(JSON.stringify(data));
                    res.end();
                }
            }
        }))

})
gulp.task('default', ['server']);