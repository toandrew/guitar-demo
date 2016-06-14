var app = angular.module('myApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/courses', {
            templateUrl: 'templates/courses.html',
            controller: 'BasicCoursesController'
        });
        $routeProvider.when('/qupu', {
            templateUrl: 'templates/qupu.html',
            controller: 'QupuController'
        });
        $routeProvider.when('/search', {
            templateUrl: 'templates/search.html',
            controller: 'SearchController'
        });
    });
