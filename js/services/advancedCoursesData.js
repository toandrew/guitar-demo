app.factory('advancedCoursesData', function($resource, $http) {
    $http.defaults.headers.common['Authorization'] = 'Bearer drgYkEoKSxEYzY1CCuL03c92cRKnW0ejhKu1gxvFGdOrtC1_gxImYf_9btlcnJFJ8He66BJsdFFrREWWc5JdkLaZKAoeAL4Lz5CzAIX-sTh62a8pcdqDhGG9L-iVucpMsSsaorl8aaOeEdXk0KQJS8w-CSJdm6qb3oTI6JTWuU216kSMexGS6vhadVyHilXcN_BflxpNKuUPfmRY_xelXhRA38kdOGlcvVkblbQ1fa08j4joIy9Eot3U6IMXAo61ipVV5LjC3jigfi8EkoZJN5ZIAS3ZNgazWP0dKynyLFu3-szapIfmnvs_VMLM-4OUjyADnZVq_bLOIlK1DL83jKkeMLqJeIKaDD7qrOkzQ--dk9K3ObA6G2XFfxb6PDBlD_rj19E2r5-U_0i21xSodARZ_deXOg00KLWcdl-9j-Kio147QhUaZPKp9g7qi8ZwOslszsJA7uoRgTJ_-YifeJx32uDoBML6CfvG8BX9CwU';

    var resource = $resource(
        'http://127.0.0.1:8888/v1/courses/advanced', {
            id: '@id',
            cid: '@cid'
        }, {
            update: {
                method: 'PUT'
            }
        });

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
        getAllCourses: getAllCourses,
        getCoursesById: getCoursesById,
        getAllCoursesByCategoryId: getAllCoursesByCategoryId
    }
});
