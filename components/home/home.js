(function() {
    'use strict';
    angular.module('spp.app.home', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            var now = new Date();
            var ticks = now.getTime();

            // Home
            $stateProvider.state('home', {
                url: '/',
                templateUrl: 'components/home/home.html?'+ticks,
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            });

            $stateProvider.state('about', {
                url: '/about',
                templateUrl: 'components/home/about.html?'+ticks
            });

            $urlRouterProvider.otherwise('/');

        })
        .service('DataService',function ($http, $q, $timeout,AppConfig) {
            var self = this;

            var now = function () { return new Date(); };
            var ticks = now().getTime();

        })
        .controller('HomeController', function ($scope,$timeout,DataService) {
            var self = this;


        })
})();