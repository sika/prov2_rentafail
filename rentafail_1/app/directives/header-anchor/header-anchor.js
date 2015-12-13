var mHeaderAnchor = angular.module('mHeaderAnchor', ['mMain']);
mHeaderAnchor.directive('dHeaderAnchor', fHeaderAnchor);
function fHeaderAnchor() {
    return {
        restrict: 'A',
        templateUrl: 'app/directives/header-anchor/header-anchor.html'
    }
}
mHeaderAnchor.controller('cHeaderAnchor', function ($scope, simpleFactory) {
    console.log(simpleFactory);
    $scope.customers = simpleFactory.getCustomers();
});