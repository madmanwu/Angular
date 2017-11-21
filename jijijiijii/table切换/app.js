/**
 * Created by delll on 2017/8/9.
 */
var app=angular.module("app",[]);
app.controller("controller",function($scope,http){
    var data=http.getData();
    $scope.date=data;
    $scope.click=function(val){
        $scope.subdate=val;
    };
    $scope.paixu=function(val){
        $scope.rank=val;
    };
})
.service("http",function($q,$http){
    var defer=$q.defer();
    this.getData=function(){
        $http({
            url:"http://localhost:8008",
            method:"POST"
        }).then(function(result){
            defer.resolve(result.data)
        },function(err){
            defer.reject(err)
        });
        return defer.promise.$$state;
    }

    })
.directive("tab",function(){
        return{
            restrict:"ECMA",
            replace:true,
            template:`
            <div class="box">
	            <div class="top">
	                <ul>
	                    <li ng-repeat="item in date.value" ng-click="click(item.value)" ng-class="{bg:$first}"><a >{{item.listname}}</a></li>
	                </ul>
	            </div>
        		<div class="main">
		            <ul class="list" >
		                <li ng-click="paixu('pm')">排名</li>
		                <li ng-click="paixu('bh')">编号</li>
		                <li ng-click="paixu('xs')">选手</li>
		                <li ng-click="paixu('qx')">取消关注数</li>
		                <li ng-click="paixu('count')">最终票数</li>
		            </ul>

	                <div class="con" ng-repeat="item in subdate | orderBy:rank">

	                    <span>{{item.pm}}</span>
		                <span>{{item.bh}}</span>
		                <span>{{item.xs}}</span>
		                <span>{{item.qx}}</span>
		                <span>{{item.count}}</span>
		             </div>
            	</div> 
                <div class="bottom">
                    <ul>
                        <li class="bg">1-100</li>
                        <li>101-200</li>
                        <li>201-300</li>
                    </ul>
                </div>
            </div>`,
            link:function(scope,ele,attr){
            	//console.log(ele.find(".top li"))

            	ele.on("click",".top li",function(){

            		$(this).addClass("bg").siblings().removeClass("bg");
            	})

            }
        }

    })