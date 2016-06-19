app.controller('CourseDetailController', function($rootScope, $scope, $routeParams, $log, courseDetailData) {
    console.log('$routeParams:id:' + $routeParams.id);

    var course = $scope;

    course.showFullScreenButton = false;
    course.isFullScreenMode = false;
    course.showUnlockedQupu = false;

    course.currentCourseIndex = 0;
    course.currentCoursePartIndex = 0;
    course.currentCoursePartImagesIndex = 0;
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

            course.updateCurrentCourse(0);
        }, function(error) {
            $log.error(error);
        });

    course.isFirstCourse = function() {
        return (course.currentCourseIndex <= 0);
    }

    course.isLastCourse = function() {
        return (course.currentCourseIndex >= course.courseData.count - 1);
    }

    course.hasImages = function() {
        return (!!course.courseInfo.images && course.courseInfo.images.length > 0);
    }

    course.currentImage = function() {
        var i = course.currentCoursePartImagesIndex;

        if (course.courseInfo.images && course.courseInfo.images.length > 0) {
            return course.courseInfo.images[i].url;
        }

        return "";
    }

    course.hasQupu = function() {
        return !!course.courseInfo.qupu;
    }

    course.getPreviousCourseTitle = function() {
        console.log('getPreviousCourseTitle!!!');
        var i = course.currentCourseIndex;
        if (i > 0) {
            return course.courseData.detail[i-1].title;
        } else {
            return 'NNN';
        }
    }

    course.getNextCourseTitle = function() {
        console.log('getNextCourseTitle!!!');
        var i = course.currentCourseIndex;
        if (i < course.courseData.count - 1) {
            return course.courseData.detail[i+1].title;
        } else {
            return 'NNN';
        }
    }
    
    course.nextCourse = function() {
        course.currentCourseIndex++;

        if (course.currentCourseIndex >= course.courseData.count - 1) {
            course.currentCourseIndex = course.courseData.count - 1;
        }

        course.updateCurrentCourse(0);
    }

    course.prevCourse = function() {
        course.currentCourseIndex--;

        if (course.currentCourseIndex <= 0) {
            course.currentCourseIndex = 0;
        }

        course.updateCurrentCourse(0);
    }

    course.updateCurrentCourse = function(partIndex) {
        var i = course.currentCourseIndex;

        course.currentCoursePartIndex = partIndex;

        var data = course.courseData;

        course.courseInfo.title = data.detail[i].parts[partIndex].title;
        course.courseInfo.videoSrc = data.detail[i].parts[partIndex].video_url;
        course.courseInfo.desc = data.detail[i].parts[partIndex].info;
        course.courseInfo.other = data.detail[i].parts[partIndex].other;
        course.courseInfo.qupu = data.detail[i].parts[partIndex].qupu_url;
        course.courseInfo.tracks = data.detail[i].parts[partIndex].tracks;

        course.courseInfo.images = data.detail[i].parts[partIndex].images;
        course.showFullScreenButton = (data.detail[i].parts[partIndex].type == 'full');

        course.showUnlockedQupu = (data.detail[i].parts[partIndex].type == 'more');

        if (course.hasQupu()) {
            $scope.$broadcast('qupuUpdated', course.courseInfo);
        }

        course.updatePrevNextState()
    }

    // course sub-part control.
    course.prevCurrentCoursePart = function() {
        course.currentCoursePartIndex--;

        if (course.currentCoursePartIndex <= 0) {
            course.currentCoursePartIndex = 0;
        }

        course.updateCurrentCourse(course.currentCoursePartIndex);
    }

    course.nextCurrentCoursePart = function() {
        var i = course.currentCourseIndex;

        course.currentCoursePartIndex++;

        if (course.currentCoursePartIndex >= course.courseData.detail[i].pcount - 1) {
            course.currentCoursePartIndex = course.courseData.detail[i].pcount - 1;
        }

        course.updateCurrentCourse(course.currentCoursePartIndex);
    }

    course.updatePrevNextState = function() {
        var i = course.currentCourseIndex;

        var j = course.currentCoursePartIndex;

        if (i < 0 || i >= course.courseData.count || j < 0 || j >= course.courseData.detail[i].pcount) {
            return;
        }

        if (j == 0) {
            $scope.$broadcast('hideEvent', 'prev');
        } else {
            $scope.$broadcast('showEvent', 'prev');
        }

        if (j >= course.courseData.detail[i].pcount - 1) {
            $scope.$broadcast('hideEvent', 'next');
        } else {
            $scope.$broadcast('showEvent', 'next');
        }
    }

    $scope.$on('videoState', function(event, data) {
        if (data == 'prevClicked') {
            console.log('prev clicked');

            course.prevCurrentCoursePart();
        } else if (data == 'nextClicked') {
            console.log('next clicked!');

            course.nextCurrentCoursePart();
        } else if (data == 'pause') {
            course.updatePrevNextState();
        } else if (data == 'stop') {
            course.updatePrevNextState();
        }
    });
});
