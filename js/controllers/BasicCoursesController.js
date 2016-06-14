app.controller('BasicCoursesController', function($scope, basicCoursesData, $log) {
    basicCoursesData.getAllCourses()
        .$promise
        .then(function(data) {
        	  console.log('data:' + data);
            $scope.allBasicCoursesData = data;
        }, function(error) {
            $log.error(error);
        })
});
