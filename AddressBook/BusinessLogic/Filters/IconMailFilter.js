angular.module("AddressModule").filter("IconMailFilter", function ($log) {
    return function (text) {
        if (text != null)
            return '<i class="fa fa-envelope-o"></i> &nbsp;' + text;
    };
});