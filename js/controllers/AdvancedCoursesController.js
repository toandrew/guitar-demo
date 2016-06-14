app.controller('AdvancedCoursesController', function($scope, advancedCoursesData, $log) {
    advancedCoursesData.getAllCourses()
        .$promise
        .then(function(data) {
            $scope.allCoursesData = data;
        }, function(error) {
            $log.error(error);
        })
});
