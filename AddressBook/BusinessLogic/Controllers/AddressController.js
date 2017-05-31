angular.module("AddressModule").controller("AddressController", function ($http, $scope, $log) {
    $scope.addresses = [];
    $scope.order4Filter = "SurName";

    $http.get("http://localhost:64723/api/Address").then(
        function (response) {
            $log.log(response);
            $scope.addresses = response.data;
        }
    );

    $scope.ChangeOrder = function (newOrder) {
        if (newOrder == $scope.order4Filter)
            $scope.order4Filter = "-" + newOrder;
        else
            $scope.order4Filter = newOrder;
    };

    $scope.Save = function (newAddress) {
        $http.post("http://localhost:64723/api/Address", newAddress).then(function (response) {
            $scope.$apply(function () {
                $scope.addresses.push(response.data);
            });
        });
    }
});