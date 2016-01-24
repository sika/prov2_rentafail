angular.module('app.directives.mHeaderChooseType', [])
.directive('dHeaderChooseType', function(){
	return{
		restrict: 'A',
		templateUrl: 'app/directives/header-choose-type/header-choose-type.html',
		//controller: function ($scope) {

	    //}
		link: function (scope, element) {
		    scope.bRent = function () {
		        $('#bRent').css('background-color', '#5bb75b');
		    }
		}
	}
	
});