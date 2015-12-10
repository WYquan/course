

var app = angular.module('course', ['ui.router', 'ui.bootstrap']);

app.controller('indexController', ['$scope','$rootScope', function($scope,$rootScope){
    
}])


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


