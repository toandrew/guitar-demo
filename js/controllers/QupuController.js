app.controller('QupuController', function($scope, $location, $log, qupuData) {
	$scope.addAd = function (ad) {
		adsData.create(ad)
			.$promise
			.then(function (data) {
				$scope.hotQupuData = data;
				//$location.path('#/allAds');
			},
			function (error) {
				$log.error(error);
			});
	}

	$scope.cancelAdd = function () {
		
	}
});