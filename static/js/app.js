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
		.state('login',{
			url: '/login:id',
            templateUrl: './login/login.html'
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

app.controller('courseController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
	$scope.serverPager = {
		totalItems: 20,
		currentPage: 1,
		itemPerPage: 5
	}

	$scope.cousrInfo = {
		id: '',
		difficulty: ''
	}
	$scope.panel = {
		all: true,
		easy: false,
		medium: false,
		difficult: false
	}

	$scope.courseId = $stateParams.id;
	if (!$scope.courseId) {
		$scope.courseId = 1;
	}
	$scope.cousrInfo = {
		id: '',
		difficulty: 'easy'
	}
	$scope.cousrInfo.id = $scope.courseId;

	console.log($scope.cousrInfo);

	var getCourse = function(cousrInfo) {
		$http.post(" ", cousrInfo)
			.success(function(data, status) {
				$scope.courselist = data.data;
			})
			.error(function(data, status) {
				$scope.errorMsy = "network anomaly";
			});

	}

	var showPanel = function(a, b, c, d) {
		$scope.panel = {
			all: a,
			easy: b,
			medium: c,
			difficult: d
		}
	}

	$scope.changeOption = function(id) {
		if (id == 1) {
			$scope.option = "first";
			$scope.cousrInfo.difficulty = "all";
			showPanel(true, false, false, false);
		}
		if (id == 2) {
			$scope.option = "second";
			$scope.cousrInfo.difficulty = "easy";
			showPanel(false, true, false, false);
		}
		if (id == 3) {
			$scope.option = "third";
			$scope.cousrInfo.difficulty = "medium";
			showPanel(false, false, true, false);
		}
		if (id == 4) {
			$scope.option = "forth";
			$scope.cousrInfo.difficulty = "difficult";
			showPanel(false, false, false, true);
		}
	}

}])

app.controller('login', ['$scope', function($scope){
    
}])