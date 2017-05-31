angular.module("AddressModule", ['ngSanitize', 'ui.router', 'ngAnimate', 'pascalprecht.translate', 'tmh.dynamicLocale']).config(function ($urlRouterProvider, $stateProvider, $translateProvider, tmhDynamicLocaleProvider) {
    $urlRouterProvider.otherwise("/"); //Erstellt eine Hash Bang Url

    $stateProvider.state("Home", {
        url: "/",
        templateUrl: "./BusinessLogic/Views/Home.html"
    }).state("Overview", {
        url: "/overview",
        templateUrl: "./BusinessLogic/Views/AddressesOverview.html",
        controller: "AddressController"
    }).state("Overview.Modify", {
        url: "/modify",
        templateUrl: "./BusinessLogic/Views/Add-EditAddress.html",
        controller: "AddressController"
    }).state("Settings", {
        url: "/settings",
        templateUrl: "./BusinessLogic/Views/Settings.html",
        controller: "SettingsController"
    });


    $translateProvider.translations("de-de", {
        "Home": "Start",
        "AddressBook": "Addres Buch",
        "Settings": "Einstellungen"
    }).translations("en-us", {
        "Home": "Home",
        "AddressBook": "Address Book",
        "Settings": "Settings"
    });

    $translateProvider.preferredLanguage("en-us");


    tmhDynamicLocaleProvider.localeLocationPattern('/Scripts/i18n/angular-locale_{{locale}}.js');
    tmhDynamicLocaleProvider.defaultLocale('en-us');

}).run(function () {

});