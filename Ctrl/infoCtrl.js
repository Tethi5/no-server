angular.module('myApp').controller('infoCtrl', function($scope, myService){

// $scope.getJson() = function(){
	myService.getJson().then(function(response){
		$scope.data = response.data
})

});
