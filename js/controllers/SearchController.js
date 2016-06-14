app.controller('SearchController', function($scope, searchData, $log) {
	adsData.getAll()
		.$promise
		.then(function (data) {
			$scope.searchResultData = data;
		}, function (error) {
			$log.error(error);
		})
});