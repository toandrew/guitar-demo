app.controller('SearchController', function($scope, searchData, $log) {
    searchData.getSomeQupu()
        .$promise
        .then(function(data) {
            $scope.searchHintData = data;
        }, function(error) {
            $log.error(error);
        })

    $scope.showHint = true;

    $scope.searchKeyword = '';

    $scope.searchQupu = function() {
        console.log('search!!!' + $scope.searchKeyword);

        $scope.showHint = false;

        var keyword = $scope.searchKeyword;
        searchData.searchQupu(keyword)
            .$promise
            .then(function(data) {
            	console.log('data:' + data);
                $scope.searchResultData = data;
            }, function(error) {
                $log.error(error);
            })
    }
});
