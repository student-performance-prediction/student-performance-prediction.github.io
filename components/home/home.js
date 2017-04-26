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