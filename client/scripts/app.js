var myApp=angular.module('myApp', []);


myApp.controller('StudentController', ['$scope', '$http', '$filter', function($scope, $http, $filter){

    $scope.classmates = [];
    $scope.getStudents = function(){
        $http.get('/retrieve').then(function(response){
            $scope.classmates = response.data;
            console.log($scope.classmates);
        });
    };

    $scope.orderName = function(){
      var orderBy=$filter('orderBy');
        $scope.order = function(predicate, reverse) {
            $scope.classmates = orderBy($scope.classmates, predicate, reverse);
        };
        $scope.order('name',false);
    };

    $scope.orderLocation = function(){
        var orderBy=$filter('orderBy');
        $scope.order = function(predicate, reverse) {
            $scope.classmates = orderBy($scope.classmates, predicate, reverse);
        };
        $scope.order('location',false);
    };

    $scope.orderNumber = function(){
        console.log($scope.classmates);
        var orderBy=$filter('orderBy');
        $scope.order = function(predicate, reverse) {
            $scope.classmates = orderBy($scope.classmates, predicate, reverse);
        };

        $scope.order('favnum',false);
    };

    $scope.getStudents();
}]);