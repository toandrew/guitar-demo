app.factory('qupuDetailData', function($resource, $http) {
    var resource = $resource(
        'http://127.0.0.1:8888/v1/qupu/:id', {
            id: '@id'
        }, {
            get: {
                method: 'GET',
                params: {},
                isArray: false,
                responseType: 'json'
            }
        }
    );

    function getQupu(id) {
        return resource.get({ id: id });
    }

    return {
        getQupu: getQupu
    }
});
