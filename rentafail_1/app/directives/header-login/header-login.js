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
            //$scope.login = { opLogin: false };
            console.log($scope.$id);
        },
        link: function (scope, element, attrs) {
            scope.login = { opLogin: false };
            scope.userVal = {username: 'userTest'};
            //scope.scrollRight = function () {
            //    scope.login.opLogin = true;
            //}
            scope.submit = function () {
                console.log(scope.userVal.username);
                console.log("fSubmit");
            }
        }
    }
}

