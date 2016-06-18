app.controller('CourseDetailController', function($rootScope, $scope, $routeParams, $log, courseDetailData) {
    console.log('$routeParams:id:' + $routeParams.id);

    var course = $scope;

    course.currentCourseIndex = -1;
    course.courseData = {
        count: 0
    }

    course.courseInfo = {
        title: '',
        videoSrc: '',
        desc: '',
        other: '',
        qupu: '',
        tracks: ''
    }

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

                course.currentCourseIndex = 0;
            }

            $scope.$broadcast('qupuUpdated', course.courseInfo);
        }, function(error) {
            $log.error(error);
        });

    course.isFirstCourse = function() {
        return (course.currentCourseIndex <= 0);
    }

    course.isLastCourse = function() {
        return (course.currentCourseIndex >= course.courseData.count - 1);
    }

    course.getCurrentQupu = function() {
        console.log('getqupu:' + course.courseInfo.qupu);
        return course.courseInfo.qupu;
    }

    course.getCurrentTracks = function() {
        console.log('getTracks:' + course.courseInfo.tracks);
        return course.courseInfo.tracks;
    }

    course.nextCourse = function() {
        course.currentCourseIndex++;

        course.updateCurrentCourse();
    }

    course.prevCourse = function() {
        course.currentCourseIndex--;

        course.updateCurrentCourse();
    }

    course.updateCurrentCourse = function() {
        var i = course.currentCourseIndex ;
        var data = course.courseData;
        if (i <= course.courseData.count - 1) {
                course.courseInfo.title = data.detail[i].title;
                course.courseInfo.videoSrc = data.detail[i].video_url;
                course.courseInfo.desc = data.detail[i].info;
                course.courseInfo.other = data.detail[i].other;
                course.courseInfo.qupu = data.detail[i].qupu_url;
                course.courseInfo.tracks = data.detail[i].tracks;

            $scope.$broadcast('qupuUpdated', course.courseInfo);
        }
    }
});
