angular.module('myApp').controller('infoCtrl', function($scope){

// $scope.getJson() = function(){
	myService.getJson().then(function(response){
		$scope.data = response.data
})

});
