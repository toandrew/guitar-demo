app.factory('searchData', function($resource, $http) {
    var resource = $resource(
        'http://127.0.0.1:8888/v1/qupus/search', {}, {
            get: {
                method: 'GET',
                params: {},
                isArray: false,
                responseType: 'json'
            }
        });
    var someResource = $resource(
        'http://127.0.0.1:8888/v1/qupus', {}, {
            get: {
                method: 'GET',
                params: {},
                isArray: false,
                responseType: 'json'
            }
        });

    function getSomeQupu() {
        return someResource.get();
    }

    function searchQupu(key) {
        return resource.get({ key: key });
    }

    function getQupuById(id) {
        return resource.get({ id: id });
    }

    function getQupuByCategoryId(cid) {
        return resource.get({ cid: cid });
    }

    return {
        searchQupu: searchQupu,
        getSomeQupu: getSomeQupu,
        getQupuById: getQupuById,
        getQupuByCategoryId: getQupuByCategoryId
    }
});
