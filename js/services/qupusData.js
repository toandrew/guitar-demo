app.factory('qupusData', function($resource, $http) {
    var resource = $resource(
        'http://127.0.0.1:8888/v1/qupus', {}, {
            get: {
                method: 'GET',
                params: {},
                isArray: false,
                responseType: 'json'
            }
        });

    function getHotQupus() {
        return resource.get();
    }

    function getQupuById(id) {
        return resource.get({ id: id });
    }

    function getQupuByCategoryId(cid) {
        return resource.get({ id: id });
    }

    return {
        getHotQupus: getHotQupus,
        getQupuById: getQupuById,
        getQupuByCategoryId: getQupuByCategoryId
    }
});
