var mHeaderLogin = angular.module('mHeaderLogin', ['mMain']);
mHeaderLogin.directive('dHeaderFuck', fHeaderLogin);
function fHeaderLogin() {
	console.log("login");
    return {
        restrict: 'E',
        templateUrl: 'app/directives/header-Login/header-Login.html'
    }
}
mHeaderLogin.controller('cHeaderLogin', function ($scope, simpleFactory) {
    console.log(simpleFactory);
    $scope.customers = simpleFactory.getCustomers();
});