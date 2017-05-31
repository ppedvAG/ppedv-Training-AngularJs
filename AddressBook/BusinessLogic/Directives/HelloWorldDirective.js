angular.module("AddressModule").directive("helloWorld", function () {
    return {
        restrict: "AE",
        template: "<h3 style='background-color: {{color}}'>Hello World!</h3>",

        replace: true,

        // scope: true, //Erbt von Parent Scope (default)
        scope: {
            // Wenn     color: "@color"     dann reicht    color: "@"
            colorOneway: "@colorOneway",         // -> One Way dh wir bekommen Daten, ändern von Daten außerhalb nicht möglich
            color: "=colorAttr",                 // -> Two Way Binding
            randomColor: "&randomColor"          // -> Methodenaufruf
        },

        //Dom Manipulatio in der Link vornehmen => elem =  $("hello-world")
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                elem.css("background-color", "white");

                scope.$apply(function () {
                    scope.color = "white";
                });
            });

            elem.bind('mouseover', function () {
                scope.$apply(function () {
                    scope.color = scope.randomColor();
                });
            });
        }
    };
});


angular.module("AddressModule").controller("HelloWorld", function ($scope) {
    var colors = ["lime", "lavender", "yellow", "orangered"];

    $scope.ChangeColor = function () {
        return colors[Math.floor(Math.random() * 4)];
    }
});