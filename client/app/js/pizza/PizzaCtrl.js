'use strict';

app.controller('PizzaCtrl', function ($scope, Pizza, Order,FoodItems) {
	// Pizza.query(function (data) {
	// 	$scope.pizzaList = data;
	// });

         FoodItems.find()
				.$promise
				.then(function(result) {
					  console.log(result);
					 $scope.pizzaList = result;
					},
					function(err) {
						console.log(err);
					});

	$scope.order = Order;
});