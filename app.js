
var app = angular.module('info',[]);

app.controller('person', ['$scope', function($scope) {
    $scope.name="";
    $scope.phone="";
    $scope.click= function() {
      console.log($scope.name);
      console.log($scope.phone);
    }
}]);
