var app = angular.module('course', ['ui.router', 'ui.bootstrap']);

app.controller('indexController', ['$scope', '$rootScope', function($scope, $rootScope) {

}])


app.run(function($rootScope, $state) {

	$rootScope.$on('$stateChangeStart', function(event, toState) {
		$rootScope.cur = toState.name;
		console.log($rootScope.cur)
	});
})

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/home');
	$urlRouterProvider.when('/home', '/home/web');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './common/home.html'
		})
		.state('login', {
			url: '/login:id',
			templateUrl: './login/login.html',
			controller: 'login'
		})
		.state('home.web', {
			url: '/web:id',
			templateUrl: './course/course.html'
		})
		.state('home.java', {
			url: '/java:id',
			templateUrl: './course/course.html'
		})
		.state('home.photo', {
			url: '/photo:id',
			templateUrl: './course/course.html'
		})
		.state('home.sport', {
			url: '/sport:id',
			templateUrl: './course/course.html'
		})
		.state('home.jita', {
			url: '/jita:id',
			templateUrl: './course/course.html'
		})
		.state('home.dance', {
			url: '/dance:id',
			templateUrl: './course/course.html'
		})
		.state('home.kufu', {
			url: '/kufu:id',
			templateUrl: './course/course.html'
		})

}])



