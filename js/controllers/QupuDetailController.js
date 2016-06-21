app.controller('QupuDetailController', function($scope, $routeParams, qupuDetailData, $log) {
    var qupu = $scope;

    qupu.qupuInfo = {};

    qupu.qupuInfo.qupu = '';
    qupu.qupuInfo.tracks = '0';

    qupuDetailData.getQupu($routeParams.id)
        .$promise
        .then(function(data) {
            console.log('data:' + data);

            if (data && data.detail) {
                qupu.qupuInfo.qupu = data.detail.qupu_url;
                qupu.qupuInfo.tracks = data.detail.tracks;
            }

            qupu.qupuInfo.layoutMode = 'page';
            qupu.qupuInfo.scrollmode = 'horizontal-bar';
            
            $scope.$broadcast('qupuUpdated', qupu.qupuInfo);
        }, function(error) {
            $log.error(error);
        });
});
