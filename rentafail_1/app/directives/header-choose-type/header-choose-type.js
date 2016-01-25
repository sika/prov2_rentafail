angular.module('app.directives.mHeaderChooseType', [])
.directive('dHeaderChooseType', function(){
	return{
		restrict: 'A',
		templateUrl: 'app/directives/header-choose-type/header-choose-type.html',
		//controller: function ($scope) {

	    //}
		link: function (scope, element) {
		    scope.bRent = function () { //setting button color on click. Change to base on view
		        
		        console.log(window.location.href);

		        $('#bRent').addClass('btn-success');
		        $('#bFail').removeClass('btn-success');
		    }
		    scope.bFail = function () {
		        $('#bFail').addClass('btn-success');
		        $('#bRent').removeClass('btn-success');
		    }
		}
	}
	
});