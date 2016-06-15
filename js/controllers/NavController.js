app.controller('NavController', function($scope) {
    $scope.isCoursesActive = false;
    $scope.isQupuActive = false;
    $scope.isSearchActive = false;

    var url = window.location.href;
    if (url.indexOf('#/qupus') >= 0) {
        $scope.isQupuActive = true;
    } else if (url.indexOf('#/courses') >= 0) {
        $scope.isCoursesActive = true;
    } else if (url.indexOf('#/search') >= 0) {
        $scope.isSearchActive = true;
    }

    if (window.location.href)
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
});
