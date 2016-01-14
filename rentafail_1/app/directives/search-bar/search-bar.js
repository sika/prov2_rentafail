angular.module('app.directives.mSearchBar', [])
.directive('dSearchBar', function(){
	return{
			restrict: 'A',
			templateUrl: 'app/directives/search-bar/search-bar.html',
			controller: 'mainController',
			link: function (scope, element, attr, ctrl){
				//console.log(ctrl);
				//console.log(scope.users[0]);
				scope.search = "";
				scope.fn = function(){
					alert(scope.search.name);
				}
			}
     
		}
	});