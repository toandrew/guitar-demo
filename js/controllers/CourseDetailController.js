app.controller('CourseDetailController', function($rootScope, $scope, $routeParams, courseDetailData, $log) {
    console.log('$routeParams:id:' + $routeParams.id);

    var course = $scope;

    course.courseInfo = {};

    course.courseInfo.title = '';
    course.courseInfo.videoSrc = '';
    course.courseInfo.desc = '';
    course.courseInfo.other = '';
    course.courseInfo.qupu = '';
    course.courseInfo.tracks = '0';

    courseDetailData.getCourse($routeParams.id)
        .$promise
        .then(function(data) {
            console.log('data:' + data);
            course.courseData = data;

            if (data && data.count > 0) {
                course.courseInfo.title = data.detail[0].title;
                course.courseInfo.videoSrc = data.detail[0].video_url;
                course.courseInfo.desc = data.detail[0].info;
                course.courseInfo.other = data.detail[0].other;
                course.courseInfo.qupu = data.detail[0].qupu_url;
                course.courseInfo.tracks = data.detail[0].tracks;
            }

            $scope.$broadcast('qupuUpdated', course.courseInfo);
        }, function(error) {
            $log.error(error);
        });

    course.isFirstCourse = function() {
        return false;
    }

    course.isLastCourse = function() {
        return false;
    }

    course.getQupu = function() {
        console.log('getqupu:' + course.courseInfo.qupu);
        return course.courseInfo.qupu;
    }
    course.getTracks= function() {
        console.log('getTracks:' + course.courseInfo.tracks);
        return course.courseInfo.tracks;
    }
});
