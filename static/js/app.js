

var app = angular.module('course', ['ui.router', 'ui.bootstrap']);

app.controller('indexController', ['$scope','$rootScope', function($scope,$rootScope){
    
}])


app.run( function($rootScope,$state){
	
	$rootScope.$on('$stateChangeStart',function(event,toState) {
		$rootScope.cur=toState.name;
	});
})

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when('','/home');
	$stateProvider
	.state('web',{
		url:'/web:id',
	   templateUrl:'./course/course.html'
	})
	.state('java',{
       url:'/java:id',
       templateUrl:'./course/course.html'
	})
	.state('photo',{
       url:'/photo:id',
       templateUrl:'./course/course.html'
	})
	.state('sport',{
       url:'/sport:id',
       templateUrl:'./course/course.html'
	})
	.state('jita',{
       url:'/jita:id',
       templateUrl:'./course/course.html'
	})
	.state('dance',{
       url:'/dance:id',
       templateUrl:'./course/course.html'
	})
	.state('kufu',{
       url:'/kufu:id',
       templateUrl:'./course/course.html'
	})
	
}])

app.controller('courseController', ['$scope','$stateParams', function($scope,$stateParams){
	$scope.course=$stateParams.id;
}])


