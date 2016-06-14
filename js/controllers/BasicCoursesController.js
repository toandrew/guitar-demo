app.controller('BasicCoursesController', function($scope, basicCoursesData, $log) {
    basicCoursesData.getAllCourses()
        .$promise
        .then(function(data) {
            $scope.allCoursesData = data;
        }, function(error) {
            $log.error(error);
        })
});
