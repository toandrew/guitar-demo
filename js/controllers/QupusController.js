app.controller('QupusController', function($scope, $location, $log, qupusData) {
    qupusData.getHotQupus()
        .$promise
        .then(function(data) {
            console.log('data:' + data);
            $scope.hotQupusData = data;
        }, function(error) {
            $log.error(error);
        });

});
