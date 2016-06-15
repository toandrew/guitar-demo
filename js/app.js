var app = angular.module('myApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/courses', {
            templateUrl: 'templates/courses.html',
            controller: 'CoursesController'
        }).when('/qupus', {
            templateUrl: 'templates/qupus.html',
            controller: 'QupusController'
        }).when('/search', {
            templateUrl: 'templates/search.html',
            controller: 'SearchController'
        }).when('/course/:id', {
            templateUrl: 'templates/course-run.html',
            controller: 'CourseRunningController'
        }).when('/qupu/:id', {
            templateUrl: 'templates/qupu.html',
            controller: 'OneQupuController'
        }).otherwise({
            redirectTo: '/courses'
        });
    });
