angular
.module('acToolsApp', ['ui.bootstrap'])
.controller('calculatorCtrl', ['$scope', function($scope){
	$scope.dog = {
		weight : 0,
		recipientPCV : 0,
		donorPCV : 0,
		desiredPCV : 0,
	}

	$scope.getDogTransfusionVolume = getDogTransfusionVolume;

	function getDogTransfusionVolume (dog) {

		var result = 90*dog.weight*(dog.desiredPCV-dog.recipientPCV)/dog.donorPCV;
		return angular.isNumber(result) && !isNaN(result) ? result : 0;
	}
}]);