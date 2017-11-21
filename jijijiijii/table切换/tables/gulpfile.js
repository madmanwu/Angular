var gulp = require("gulp");
var webserver = require("gulp-webserver");
var urlTool = require("url");

var data = [
    {
        "listname": '每日推荐',
        value:[{
            "pm":1,
            "bh":37,
            "xs":"喵咪咪",
            "qx":22,
            "count":369
        },{
            "pm":4,
            "bh":45,
            "xs":"咪",
            "qx":72,
            "count":1890
        },{
            "pm":5,
            "bh":141,
            "xs":"喵咪",
            "qx":40,
            "count":404
        },{
            "pm":8,
            "bh":10,
            "xs":"猫",
            "qx":407,
            "count":480
        } ,{
            "pm":52,
            "bh":72,
            "xs":"喵咪喵",
            "qx":71,
            "count":781
        },{
            "pm":7,
            "bh":4740,
            "xs":"咪猫",
            "qx":41,
            "count":4810
        }]
    },{
        "listname": '投票排行',
        value:[{
            "pm":5,
            "bh":6,
            "xs":"第三个人",
            "qx":48,
            "count":465
        },{
            "pm":23,
            "bh":45,
            "xs":"多个人",
            "qx":46,
            "count":4665
        },{
            "pm":44,
            "bh":510,
            "xs":"烦死个人",
            "qx":40,
            "count":404
        },{
            "pm":8,
            "bh":10,
            "xs":"点歌台",
            "qx":407,
            "count":480
        },{
                "pm":52,
                "bh":72,
                "xs":"符合花板",
                "qx":71,
                "count":781
        },{
            "pm":7,
            "bh":4740,
            "xs":"私给如果",
            "qx":41,
            "count":4810
        }]
    },{
        "listname": 'TOP 300',
        value:[{
            "pm":1,
            "bh":37,
            "xs":"是否容易",
            "qx":22,
            "count":369
        },{
            "pm":4,
            "bh":45,
            "xs":"的说过话",
            "qx":72,
            "count":1890
        },{
            "pm":5,
            "bh":141,
            "xs":"多个人",
            "qx":40,
            "count":404
        },{
            "pm":8,
            "bh":10,
            "xs":"十个人",
            "qx":407,
            "count":480
        },{
                "pm":52,
                "bh":72,
                "xs":"终端杆人",
                "qx":71,
                "count":781
        },{
            "pm":7,
            "bh":4740,
            "xs":"大哥猫",
            "qx":41,
            "count":4810
        }]
    }
]

gulp.task('mockserver', function(){
    gulp.src('gulp')
        .pipe(webserver({
            port: 8081,
            middleware: function(req, res, next){
                res.setHeader('Access-Control-Allow-Origin', '*');
                var method = req.method;
                var urlstring = req.url;
                var urlobj = urlTool.parse(urlstring);
                var pathname = urlobj.pathname;

                if(method == 'GET'){
                    switch(pathname){
                        case '/goodlist':
                            res.setHeader('content-type','application/json;charset=utf-8');
                            res.write('{"您要的数据":"商品列表"}');
                            res.end();
                            break;
                        default:
                            res.end();
                    }
                }else if(method == 'POST'){
                    switch(pathname){
                        case '/':
                            res.write(JSON.stringify(data));
                            res.end();
                            break;
                    }
                }
            }
        }))
})
gulp.task('default', ['mockserver']);