angular
.module('acToolsApp', ['ui.bootstrap'])
.controller('calculatorCtrl', ['$scope', function($scope){
	$scope.dog = { ratio : 85};
	$scope.cat = { ratio : 60};
	$scope.getTransfusionVolume = getTransfusionVolume;
	$scope.getPCV = getPCV;

	function getTransfusionVolume (animal) {
		var result = animal.ratio*animal.weight*(animal.desiredPCV-animal.recipientPCV)/animal.donorPCV;
		return !isNaN(result) ? result : 0;
	}

	function getPCV (animal) {		
		var result = animal.transfusionVolume*animal.donorPCV/animal.ratio/animal.weight + animal.recipientPCV;
		return !isNaN(result) ? result : 0;
	}

}]);