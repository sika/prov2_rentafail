var mHeaderLogin = angular.module('app.directives.mHeaderLogin', ['mMain'])// mMain-dependent due to factory call
.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
	console.log("login");
    return {
        restrict: 'A',
		scope: {
			users: '='
		},
        templateUrl: 'app/directives/header-Login/header-Login.html',
		controller: function($scope, $state, simpleFactory){
			/* console.log(simpleFactory); */
			$scope.users = simpleFactory.getUsers();
			console.log($scope.users);
		}
	}
}
/* mHeaderLogin.controller('cHeaderLogin', function ($scope, simpleFactory) {
    console.log(simpleFactory);
    $scope.customers = simpleFactory.getCustomers();
}); */