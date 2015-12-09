

var app = angular.module('course', ['ui.router', 'ui.bootstrap']);

app.controller('indexController', ['$scope','$rootScope', function($scope,$rootScope){
    
}])


app.controller('PostListController', 
      function ($scope) {
          // 设置轮播图图片间隔
          $scope.myInterval = 5000;
          // 轮播图数据初始化
          var slides = $scope.slides = [];
          // 添加轮播图源
          slides.push({ image: '../images/1.jpg', text: '亲爱的你，情人节快乐' });
          slides.push({ image: '../images/2.jpg', text: '亲爱的你，情人节快乐' });
 });


app.run( function($rootScope,$state){
	
	$rootScope.$on('$stateChangeStart',function(event,toState) {
		$rootScope.current=toState.name;
	});
})

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when('','/home');
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'./common/home.html'
	})
	.state('course',{
       url:'/course',
       templateUrl:'./course/course.html'
	})
	.state('plan',{
       url:'/plan',
       templateUrl:'./plan/plan.html'
	})
	.state('share',{
       url:'/share',
       templateUrl:'./share/share.html'
	})
	
}])


