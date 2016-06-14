app.controller('AdvancedCoursesController', function($scope, advancedCoursesData, $log) {
    advancedCoursesData.getAllCourses()
        .$promise
        .then(function(data) {
            $scope.allAdvancedCoursesData = data;
        }, function(error) {
            $log.error(error);
        })
});
