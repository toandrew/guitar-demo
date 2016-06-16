app.controller('NavController', function($rootScope, $scope) {
    $scope.isCoursesActive = false;
    $scope.isQupuActive = false;
    $scope.isSearchActive = false;

    var url = window.location.href;
    if (url.indexOf('#/qupus') >= 0) {
        $scope.isQupuActive = true;
    } else if (url.indexOf('#/search') >= 0) {
        $scope.isSearchActive = true;
    } else if (url.indexOf('#/courses') >= 0) {
        $scope.isCoursesActive = true;
    } else {
       $scope.isCoursesActive = true;
    }

    $scope.navClick = function(id) {
        $scope.isCoursesActive = false;
        $scope.isQupuActive = false;
        $scope.isSearchActive = false;
        switch (id) {
            case 'courses':
                $scope.isCoursesActive = true;
                break;
            case 'qupu':
                $scope.isQupuActive = true;
                break;
            case 'search':
                $scope.isSearchActive = true;
                break;
        }
    }

    $scope.shouldShow = true;

    $rootScope.$on('hideNav', function(event, data) {
        console.log('hideNav: event:' + event + ' data:' + data);
        $scope.shouldShow = !!data;
    });
});
