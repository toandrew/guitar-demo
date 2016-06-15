app.controller('CoursesController', function($scope, coursesData, $log) {
    coursesData.getAllCourses()
        .$promise
        .then(function(data) {
        	  console.log('data:' + data);
            $scope.allBasicCoursesData = data;
        }, function(error) {
            $log.error(error);
        });

    coursesData.getAllAdvancedCourses()
        .$promise
        .then(function(data) {
        	  console.log('data:' + data);
            $scope.allAdvancedCoursesData = data;
        }, function(error) {
            $log.error(error);
        });
});
