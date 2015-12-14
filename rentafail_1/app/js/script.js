/// <reference path="angular-route.js" />
/// <reference path="angular.js" />


//module with route dependence
var myApp = angular.module('mMain', ['ngRoute', 'mHeaderAnchor', 'mHeaderLogin']);
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
    //console.log(simpleFactory);
    var customers = simpleFactory.getCustomers(); //call  factory for customer objects
    $scope.customers = customers;
}

/*factory declaration*/
myApp.factory('simpleFactory', fSimpleFactory);
/*Factory function*/
function fSimpleFactory() {
    /*empty object declaration*/
    var factory = {};
    var customers = [{
        name: "Dai Walton",
        city: "Rocky View"
    }, {
        name: "Irma Mcgee",
        city: "Columbia"
    }, {
        name: "Cole Case",
        city: "Montignoso"
    }
    ];

    factory.getCustomers = function () {
        return customers;
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
