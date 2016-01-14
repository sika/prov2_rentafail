var mHeaderLogin = angular.module('app.directives.mHeaderLogin', [])// mMain-dependent due to factory call
.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
    return {
        restrict: 'A',
        templateUrl: 'app/directives/header-Login/header-Login.html',
        controller: function($scope){
            $scope.loggedin = false;
            $scope.username = { name: "aa" };
            $scope.password = { pass: "bb" };
        },
        link: function (scope, element, attrs) {
            scope.btn = function () {
                console.log(scope.username.name);
                alert(scope.username.name);
            }
        }
    }
}


