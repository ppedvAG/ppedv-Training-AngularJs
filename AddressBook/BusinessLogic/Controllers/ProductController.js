angular.module("AddressModule").controller("ProductController", function ($scope, $log, $http) {

    $scope.header = "Products";
    $scope.products = [];

    $http.get("http://services.odata.org/V4/OData/(S(2b4vyehifz0bgemhquty5lix))/OData.svc/Products").then(
        function success(response) {
            $log.log(response);
            $scope.products = response.data.value;
        },
        function error(response) {
            $log.log(response);
        }
    );


    $scope.Add = function (product) {
        product.ReleaseDate = new Date();
        product.ID = $scope.products.length;

        $scope.newProduct = undefined;
        $scope.products.push(product);
    };
});