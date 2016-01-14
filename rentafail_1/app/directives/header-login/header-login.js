var mHeaderLogin = angular.module('app.directives.mHeaderLogin', ['mMain'])// mMain-dependent due to factory call
.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
    return {
        restrict: 'A',
        //replace: true,
        //scope: {}, //isolate scope
        templateUrl: 'app/directives/header-Login/header-Login.html',
/*         controller: function ($scope, mainFactory) {
            $scope.users = mainFactory.getUsers();
			//$scope.username = "test";
			console.log($scope.$id);
        }, */
        link: function (scope, element, attrs, ctrl) {
			
            scope.login = { opLogin: false };
			scope.username = "test";
			console.log(scope);
			scope.submit = function () {
                console.log(scope.username);
                console.log("fSubmit");
            }
			scope.btn = function (){
				alert(scope.username.name);
			}
        }
    }
}


