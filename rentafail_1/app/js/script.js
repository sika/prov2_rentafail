/// <reference path="angular-route.js" />
/// <reference path="angular.js" />


//module with route dependence
var myApp = angular.module('mMain', ['ngRoute', 'ui.router', 'app.directives.mHeaderAnchor',
			'app.directives.mHeaderLogin', 'app.directives.mHeaderChooseType', 'app.directives.mSearchBar']);
/*router declaration*/
myApp.config(fRouteProvider);
/*router function*/
function fRouteProvider($routeProvider) {
	$routeProvider.when('/', {
		controller : 'mainController',
		templateUrl : 'partials/home.html'
	}).when('/beafail', {
		controller : 'mainController',
		templateUrl : 'partials/be_a_fail.html'
	}).when('/register', {
	    controller: 'regController',
	    templateUrl: 'partials/register.html'
	}).when('/reg_success', {
	    //controller: 'regController',
	    templateUrl: 'partials/reg_success.html'
	}).when('/user_info', {
	    controller: 'mainController',
	    templateUrl: 'partials/user_info.html'
	}).otherwise({
		redirectTo : '/'
	});
}

/*controller declaration*/
myApp.controller('mainController', fMainController);
/*controller function*/
function fMainController($scope, mainFactory, $sce) { //mainFactory returns factory object
    $scope.search = "";
    $scope.users = mainFactory.getUsers(); //call  factory for customer objects;
    $scope.logins = mainFactory.getLogins(); //call  factory for customer objects;
    $scope.videos = mainFactory.getVideos(); //call  factory for customer objects;
    $scope.rents = mainFactory.getRents(); //call  factory for customer objects;	
	$scope.trustSrc = function (src) {
		return $sce.trustAsResourceUrl(src);
	}
	$scope.login = mainFactory.getLogin();
    //$scope.aVideos = mainFactory.getAVideos();
	//reg();
	//function reg() {

    //}
	

}
myApp.controller('regController', fRegController);
function fRegController($scope, $location, mainFactory) {
    $scope.regInfo = {
        id_user: "",
        name: "",
        email: ""
    };
    $scope.regInfoLogin = {
        ref_id_user: "",
        password: ""
    };
    $scope.usernameExist = false;
    $scope.emailExist = false;

    $scope.register = function () {
        //email and username exist?
        if (checkIfUsernameOrEmailExist($scope.regInfo)) {
            return; //exist function and registration
        };
        var user_id = $scope.users[$scope.users.length - 1].id_user + 1; //get value of id_user in last array item and increment by 1
        $scope.regInfo.id_user = user_id;
        $scope.users.push($scope.regInfo);
        //set logins object
        $scope.regInfoLogin.ref_id_user = user_id;
        $scope.logins.push($scope.regInfoLogin);
        //clear inputs
        //switch view
        $location.path('/reg_success');
        
    }
    function checkIfUsernameOrEmailExist (regInfo){
        for (var i = 0, len = $scope.users.length; i < len; i++) {
            if ($scope.users[i].name === regInfo.name)//true if input username match existing user name
            {
                //username already exist
                $scope.usernameExist = true;
                return true;
            }
            else if ($scope.users[i].email === regInfo.email)//true if input email match existing user name
            {
                $scope.emailExist = true;
                return true;
            }
        }//case no match found: return false and continue registering
        $scope.usernameExist, $scope.emailExist = false;
        return false;
    }
    
}

/*factory declaration*/
myApp.factory('mainFactory', fMainFactory);
/*Factory function*/
function fMainFactory() {
	/*empty object declaration*/
	var factory = {};
	var users = [{
			id_user : 1,
			name : "bob jew",
			email : "bobjew@hotmail.com",
			ref_id_password : 1,
			ref_id_rent : null,
			ref_id_video : null
		}, {
			id_user : 2,
			name : "aaa",
			email : "aaa@hotmail.com",
			ref_id_password : 3,
			ref_id_rent : null,
			ref_id_video : null
		}, {
			id_user : 3,
			name : "bbb",
			email : "bbb@hotmail.com",
			ref_id_password : 5,
			ref_id_rent : null,
			ref_id_video : null
		}
	];

	var logins = [{
			ref_id_user : 1,
			password : "bobjew"
		}, {
			ref_id_user : 2,
			password : "aaa"
		}
	];

	var videos = [{
			id_video : 1,
			name : "Cheerleading Fail",
			url : "http://www.youtube.com/embed/l-kxBjNML5c?autoplay=0",
			ref_id_user : 1
		}, {
			id_video : 2,
			name : "Bro night fail",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 3,
			name : "Nathan A. Fuller",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 3
		}, {
			id_video : 4,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 5,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 6,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 7,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 8,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 9,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 10,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 11,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}, {
			id_video : 12,
			name : "Tana C. Emerson",
			url : "http://www.youtube.com/embed/3lCm9Ii4L48?autoplay=0",
			ref_id_user : 2
		}
	];

	var rents = [{
			id_rent : 1,
			datetime : "2016-01-08 18:30",
			ref_id_user : 1
		}, {
			id_rent : 2,
			datetime : "2016-01-05 15:00",
			ref_id_user : 2
		}
	];

	var login = [{
	    loggedin: false,
	    username: "",
	    ref_id_user: 999
	}];

	factory.getUsers = function () {
		return users;
	};
	factory.getVideos = function () {
		return videos;
	};
	factory.getLogins = function () {
		return logins;
	};
	factory.getRents = function () {
		return rents;
	};
	factory.getLogin = function () {
	    return login;
	}

	return factory;
}
