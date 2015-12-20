var mHeaderLogin = angular.module('app.directives.mHeaderLogin', ['mMain'])// mMain-dependent due to factory call
.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
    return {
        restrict: 'A',
        //replace: true,
        scope: {}, //isolate scope
        templateUrl: 'app/directives/header-Login/header-Login.html',
        controller: function ($scope, simpleFactory) {
            $scope.users = simpleFactory.getUsers();
            $scope.login = { opLogin: false };
            //$scope.scrollRight;
        },
        link: function (scope, element, attrs) {
            scope.scrollRight = function () {
                scope.login.opLogin = true;
            };
        }
    }
}

