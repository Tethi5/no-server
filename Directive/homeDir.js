angular.module('myApp').directive('homeDir', function(){
	return{
		restrict:'A',
		link: function(scope,elem,attrs){
			$('.home-btn').on('click', function(){
				$('.words').fadeOut('slow');
			})
			//break
			TweenMax.to(".ball", 4.0, {
				ease: Bounce.easeOut,
				y: 510,
				x:10,
				rotation: 360
			});
			TweenMax.to(".ball", 4.5, {
				x:1000,
				rotation: 360,
				delay: 10.,
			})
			// break
			TweenMax.to(".ball1", 4.0, {
				ease: Bounce.easeOut,
				y: 400,
				x:0,
				rotation: 360,
				delay: 3.,
			})
			TweenMax.to(".ball1", 4.5, {
				x:300,
				rotation: 360,
				delay: 15.,
      })
			//break
			TweenMax.to(".ball2", 4.0, {
				ease: Bounce.easeOut,
				y: -75,
				x:15,
				rotation: 360,
				delay: 4.,
			})
			TweenMax.to(".ball2", 4.5, {
				x:500,
				rotation: 360,
				delay: 8.,
      })



	}
}})



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
