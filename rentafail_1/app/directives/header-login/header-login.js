var mHeaderLogin = angular.module('app.directives.mHeaderLogin', ['mMain'])// mMain-dependent due to factory call
.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
    return {
        restrict: 'A',
        //replace: true,
        scope: {}, //isolate scope
        templateUrl: 'app/directives/header-Login/header-Login.html',
        controller: function ($scope, mainFactory) {
            $scope.users = mainFactory.getUsers();
			$scope.username = "test";
        },
        link: function (scope, element, attrs) {
            scope.login = { opLogin: false };
			scope.submit = function () {
                console.log(scope.username);
                console.log("fSubmit");
            }
        }
    }
}
/* 			
also require fHeaderLogin($timeout) 
$timeout(function () {
				element.find("#test").bind('click', function() {
				alert("clicked");
				});
			}); */

