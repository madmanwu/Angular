/**
 * Created by a on 2017/9/4.
 */
var app=angular.module('app',[]);
app.controller('controller',function($scope){
    $scope.data=[
        {
            url:"images/demo1_03.gif",
            name:"Webstbrook",
            port:"得分后卫(SG)",
            num:0,
            team:"雷霆",
            sum:2017,
            update:"编辑",
            del:"删除"
        },
        {
            url:"images/demo1_06.gif",
            name:"Jamems",
            port:"大前锋(SG)",
            num:1,
            team:"雷霆",
            sum:1985,
            update:"编辑",
            del:"删除"
        },
        {
            url:"images/demo1_08.gif",
            name:"Curry",
            port:"小前锋(SG)",
            num:2,
            team:"尼克斯",
            sum:256,
            update:"编辑",
            del:"删除"
        },
        {
            url:"images/demo1_10.gif",
            name:"Paul",
            port:"小前锋(SG)",
            num:3,
            team:"公牛",
            sum:289,
            update:"编辑",
            del:"删除"
        },
        {
            url:"images/demo1_12.gif",
            name:"Wade",
            port:"投球后卫(SG)",
            num:4,
            team:"雷霆",
            sum:2963,
            update:"编辑",
            del:"删除"
        },
        {
            url:"images/demo1_14.gif",
            name:"Anthory",
            port:"得分后卫(SG)",
            num:5,
            team:"火箭",
            sum:2117,
            update:"编辑",
            del:"删除"
        },
        {
            url:"images/demo1_16.gif",
            name:"Lin",
            port:"中锋(SG)",
            num:6,
            team:"勇士",
            sum:2817,
            update:"编辑",
            del:"删除"
        },
        {
            url:"images/demo1_18.gif",
            name:"Lrying",
            port:"控球后卫(SG)",
            num:7,
            team:"骑士",
            sum:3017,
            update:"编辑",
            del:"删除"
        }
    ],
    $scope.del=function($index){
        if($index>=0){
            $scope.data.splice($index,1);
        }
    },
    $scope.update=function(event){
        //获取button
        var element=event.target;
        //获取span
        var list=angular.element(element).parent();
        //获取所有span
        var lists=angular.element(list).parent().children();
        //获取span的HTML
        var contentText=element.innerText;
        if(contentText=="编辑"){

            element.innerText="保存";

            for(var i=1,len=lists.length-1;i<len;i++){

                var input=document.createElement("input");

                input.value=lists[i].innerText;

                lists[i].innerHTML="";

                lists[i].appendChild(input);
            }
        }else{

            element.innerText="编辑";

            var inputList=lists.find("input");
            var arr=[];

            for(var i=0,len=inputList.length;i<len;i++){

                arr.push(inputList[i].value);
            }
            for(var i=0;i<arr.length;i++){

                lists[i+1].innerHTML=arr[i];

            }
            lists.find('input').remove();
        }

    }
})
    .directive('ul',function(){
        return{
            restrict:'ECMA',
            template:'<li>'+
                        '<span></span>'+
                        '<span>姓名</span>'+
                        '<span>位置</span>'+
                        '<span>号码</span>'+
                        '<span>球队</span>'+
                        '<span>票数</span>'+
                        '<span>操作</span>'+
                    '</li>'+
                    '<li ng-repeat="item in data|filter:test|orderBy:value">'+
                    '<span><img ng-src={{item.url}} alt=""/></span>'+
                    '<span class="span">{{item.name}}</span>'+
                    '<span>{{item.port}}</span>'+
                    '<span>{{item.num}}</span>'+
                    '<span>{{item.team}}</span>'+
                    '<span>{{item.sum}}</span>'+
                    '<span><button ng-click="update($event)" class="btns">{{item.update}}</a><button ng-click="del($index)" class="btns">{{item.del}}</button></span>'+
                    '</li>'

        }
    })