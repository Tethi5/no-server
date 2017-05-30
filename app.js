angular.module('myApp',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider){
		$stateProvider
		.state ('home', {
			url:'/',
			templateUrl:"../view/home.html"

		})
		.state ('info', {
			url:'/info',
			templateUrl:"../view/info.html",
			controller: 'infoCtrl'

		})
		.state ('contact', {
			url: '/contact',
			templateUrl:"../view/contact.html"

		});

	$sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'http://www.hqcasanova.com/**']);

});

// TweenMax.to(".ball", 4.0, {
// 	ease: Bounce.easeOut,
// 	y: 295,
// 	x:10,
// 	rotation: 360
// });
// TweenMax.to(".ball", 4.5, {
// 	x:900,
// 	rotation: 360,
// 	delay: 0,
// })
