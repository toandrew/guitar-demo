app.controller('NavController', function($scope) {
    $scope.isHomeActive = false;
    $scope.isCoursesActive = true;
    $scope.isQupuActive = false;
    $scope.isSearchActive = false;
    $scope.navClick = function(id) {
        $scope.isHomeActive = false;
        $scope.isCoursesActive = false;
        $scope.isQupuActive = false;
        $scope.isSearchActive = false;
        switch (id) {
            case 'home':
                $scope.isHomeActive = true;
                break;
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
