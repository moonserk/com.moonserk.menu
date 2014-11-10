angular.module('menu', ['ngRoute', 'menu.services', 'menu.controllers'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MenuCtrl',
            templateUrl: 'partials/main.html'
        })
        .when('/view', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/view.html'
        })
        .when('/description', {
            controller: 'DescriptionCtrl',
            templateUrl: 'partials/description.html'
        })
        .when('/cart', {
            controller: 'CartCtrl',
            templateUrl: 'partials/cart.html'
        })
        .otherwise({redirectTo: '/'});
    });
