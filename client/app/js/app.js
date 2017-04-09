'use strict';

var app = angular.module('pizza', ['ngRoute', 'ngResource','lbServices']);

app.config(function (LoopBackResourceProvider,$routeProvider) {

	 // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:8000/api');

	$routeProvider
		.when('/', {
			templateUrl: 'js/pizza/pizza.html',
			controller: 'PizzaCtrl'
		})
		.when('/purchase', {
			templateUrl: 'js/purchase/purchase.html',
			controller: 'PurchaseCtrl'
		})
		.when('/about-me', {
			templateUrl: 'js/nav/about-me.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});