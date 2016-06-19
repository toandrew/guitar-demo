app.controller('UnlockedQupuController', function($scope, $location, $log, unlockedQupuData) {
    unlockedQupuData.getUnlockedQupus()
        .$promise
        .then(function(data) {
            console.log('data:' + data);
            $scope.unlockedQupuData = data;
        }, function(error) {
            $log.error(error);
        });

});
