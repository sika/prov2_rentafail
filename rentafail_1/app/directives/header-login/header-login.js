var mHeaderLogin = angular.module('app.directives.mHeaderLogin', [])// mMain-dependent due to factory call
.directive('dHeaderLogin', fHeaderLogin);
function fHeaderLogin() {
    return {
        restrict: 'A',
        templateUrl: 'app/directives/header-Login/header-Login.html',
        controller: function ($scope, mainFactory) {
            $scope.loggedin = false;
            $scope.username = { name: "" };
            $scope.password = { pass: "" };
            $scope.users = mainFactory.getUsers();
            $scope.logins = mainFactory.getLogins();
            console.log($scope.users);
        },
        link: function (scope, element, attrs) {
            scope.confirm = function () {
                for (var i = 0, len = scope.users.length; i < len; i++) {
                    if (scope.users[i].name === scope.username.name)//true if input username match existing user name
                    {
                        for (var j = 0, len = scope.logins.length; j < len; j++) {
                            if (scope.logins[j].ref_id_user === scope.users[i].id_user) {//check password
                                if (scope.logins[j].password === scope.password.pass) {
                                    scope.loggedin = true;
                                }
                            }
                        }
                        //alert(scope.users[i].id_user);
                    }
                }
                return;
            }
        }
    }
}


