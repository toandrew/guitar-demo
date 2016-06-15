var app = angular.module('myApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
    		$routeProvider.when('', {
    			  templateUrl: 'templates/courses.html',
            controller: 'CoursesController'
    		});

        $routeProvider.when('/courses', {
            templateUrl: 'templates/courses.html',
            controller: 'CoursesController'
        });
        $routeProvider.when('/qupus', {
            templateUrl: 'templates/qupus.html',
            controller: 'QupusController'
        });
        $routeProvider.when('/search', {
            templateUrl: 'templates/search.html',
            controller: 'SearchController'
        });

        $routeProvider.when('/course', {
            templateUrl: 'templates/course-run.html',
            controller: 'CourseRunningController'
        });        
    });
