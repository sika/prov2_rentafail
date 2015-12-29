/// <reference path="angular-route.js" />
/// <reference path="angular.js" />


//module with route dependence
var myApp = angular.module('mMain', ['ngRoute', 'ui.router','app.directives.mHeaderAnchor', 
'app.directives.mHeaderLogin', 'app.directives.mHeaderChooseType', 'app.directives.mSearchBar']);
/*router declaration*/
myApp.config(fRouteProvider);
/*router function*/
function fRouteProvider($routeProvider) {
    $routeProvider.when('/', {
        controller: 'simpleController',
        templateUrl: 'partials/home.html'
    }).when('/beafail', {
        controller: 'simpleController',
        templateUrl: 'partials/be_a_fail.html'
    }).otherwise({
        redirectTo: '/'
    });
}

/*controller declaration*/
myApp.controller('simpleController', fSimpleController);
/*controller function*/
function fSimpleController($scope, simpleFactory) { //simpleFactory returns factory object
    var users = simpleFactory.getUsers(); //call  factory for customer objects
    $scope.users = users;
}

/*factory declaration*/
myApp.factory('simpleFactory', fSimpleFactory);
/*Factory function*/
function fSimpleFactory() {
    /*empty object declaration*/
    var factory = {};
    var users = [{
        "name": "bbb",
        "password": "aaa"
    }, {
        name: "ccc",
        password: "ddd"
    }, {
        name: "Cole Case",
        password: "Montignoso"
    }
    ];

    factory.getUsers = function () {
        return users;
    };
    return factory;
}



/*
var customers = [{
name : "Dai Walton",
city : "Rocky View"
}, {
name : "Irma Mcgee",
city : "Columbia"
}, {
name : "Cole Case",
city : "Montignoso"
}
];
 */
//myApp.factory(&#39;simpleFactory&#39;, simpleFactoryF);
//function simpleFactoryF (){
//var }

//factory

//controller
//routeProvider
