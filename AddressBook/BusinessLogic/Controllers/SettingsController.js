angular.module("AddressModule").controller("SettingsController", function ($scope, $translate, tmhDynamicLocale) {

    $scope.ChangeLanguage = function (key) {
        $translate.use(key); //Then-Methode möglich
        tmhDynamicLocale.set(key);
    }
});