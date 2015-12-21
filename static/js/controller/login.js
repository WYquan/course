app.controller('login', ['$scope', '$stateParams', function($scope, $stateParams) {
	var id = $stateParams.id;

	function showLog(id) {
		if (id == 1) {
			$scope.cur = 'login';
			$scope.flag = true;
		} else {
			$scope.cur = 'sign';
			$scope.flag = false;
		}
	}
	$scope.changeState = function(id) {
		showLog(id);
	}
	showLog(id);
}])