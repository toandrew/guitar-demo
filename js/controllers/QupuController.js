app.controller('QupuController', function($scope, $location, $log, qupuData) {
    qupuData.getHotQupu()
        .$promise
        .then(function(data) {
            console.log('data:' + data);
            $scope.qupuData = data;
        }, function(error) {
            $log.error(error);
        });

});
