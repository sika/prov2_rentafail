var mHeaderAnchor = angular.module('mHeaderAnchor', ['mMain']);
mHeaderAnchor.directive('dHeaderAnchor', fHeaderAnchor);
function fHeaderAnchor() {
	console.log("anchor");
    return {
        restrict: 'E',
        templateUrl: 'app/directives/header-anchor/header-anchor.html'
    }
}
mHeaderAnchor.controller('cHeaderAnchor', function ($scope, simpleFactory) {
    console.log(simpleFactory);
    $scope.customers = simpleFactory.getCustomers();
});