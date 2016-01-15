var mHeaderLogin = angular.module('app.directives.mHeaderLogin', [])// mMain-dependent due to factory call
.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
    return {
        restrict: 'A',
        templateUrl: 'app/directives/header-Login/header-Login.html',
        controller: function($scope){
            $scope.loggedin = false;
            $scope.username = { name: "" };
            $scope.password = { pass: "" };
        },
        link: function (scope, element, attrs) {
            scope.btn = function () { //submit() not working, why?
                //console.log(scope.username.name);
                alert(scope.username.name);
            }
        }
    }
}


