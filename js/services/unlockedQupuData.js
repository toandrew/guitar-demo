app.factory('unlockedQupuData', function($resource, $http) {
    var resource = $resource(
        'http://127.0.0.1:8888/v1/unlocked/qupu', {}, {
            get: {
                method: 'GET',
                params: {},
                isArray: false,
                responseType: 'json'
            }
        });

    function getUnlockedQupus() {
        return resource.get();
    }

    return {
        getUnlockedQupus: getUnlockedQupus,
    }
});
