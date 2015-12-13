var mHeaderLogin = angular.module('mHeaderLogin', ['mMain']);
mHeaderLogin.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
    return {
        restrict: 'A',
        templateUrl: 'app/directives/header-login/header-login.html'
    }
}
mHeaderLogin.controller('cHeaderLogin', function ($scope, simpleFactory) {
    console.log(simpleFactory);
    $scope.customers = simpleFactory.getCustomers();
});