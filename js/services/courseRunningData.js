app.factory('courseRunningData', function($resource, $http) {
    var resource = $resource(
        'http://127.0.0.1:8888/v1/course/:id', {
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

    function getCourse(id) {
        return resource.get({ id: id });
    }

    return {
        getCourse: getCourse
    }
});
