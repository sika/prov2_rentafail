var mHeaderAnchor = angular.module('app.directives.mHeaderAnchor', []);
mHeaderAnchor.directive('dHeaderAnchor', fHeaderAnchor);
function fHeaderAnchor() {
	console.log("anchor");
    return {
        restrict: 'A',
        templateUrl: 'app/directives/header-anchor/header-anchor.html'
    }
}
mHeaderAnchor.controller('cHeaderAnchor', function ($scope, simpleFactory) {
    console.log(simpleFactory);
    $scope.customers = simpleFactory.getCustomers();
});