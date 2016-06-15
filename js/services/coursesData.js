app.factory('coursesData', function($resource, $http) {
    var resource = $resource(
        'http://127.0.0.1:8888/v1/courses/basic', {}, {
            get: {
                method: 'GET',
                params: {},
                isArray: false,
                responseType: 'json'
            }
        }
    );

    var advancedResource = $resource(
        'http://127.0.0.1:8888/v1/courses/advanced', {}, {
            get: {
                method: 'GET',
                params: {},
                isArray: false,
                responseType: 'json'
            }
        });

    function getAllAdvancedCourses() {
        return advancedResource.get();
    }

    function getAllCourses() {
        return resource.get();
    }

    function getCoursesById(id) {
        return resource.get({ id: id });
    }

    function getAllCoursesByCategoryId(cid) {
        return resource.get({ id: id });
    }

    return {
        getAllAdvancedCourses: getAllAdvancedCourses,
        getAllCourses: getAllCourses,
        getCoursesById: getCoursesById,
        getAllCoursesByCategoryId: getAllCoursesByCategoryId
    }
});
