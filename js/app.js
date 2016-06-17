var app = angular.module('myApp', ['ngResource', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngSanitize', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay'])
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
            templateUrl: 'templates/course.html',
            controller: 'CourseDetailController'
        }).when('/qupu/:id', {
            templateUrl: 'templates/qupu.html',
            controller: 'QupuDetailController'
        }).otherwise({
            redirectTo: '/courses'
        });
    });
