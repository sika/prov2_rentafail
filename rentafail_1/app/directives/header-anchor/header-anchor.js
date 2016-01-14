var mHeaderAnchor = angular.module('app.directives.mHeaderAnchor', []);
mHeaderAnchor.directive('dHeaderAnchor', fHeaderAnchor);
function fHeaderAnchor() {
    return {
        restrict: 'A',
        templateUrl: 'app/directives/header-anchor/header-anchor.html'
    }
}
mHeaderAnchor.controller('cHeaderAnchor', function ($scope, mainFactory) {
    $scope.customers = mainFactory.getCustomers();
});