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
				$scope.wakeMeup = wakeMeup;

				function wakeMeup(){

$(document).ready(function(){
  // Add scrollspy to <body>
  // $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

				}

	$scope.order = Order;
});