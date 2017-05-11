(function() {
    'use strict';
    angular.module('spp.app.report', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            var now = new Date();
            var ticks = now.getTime();

        })
        .directive('introduction', function() {
            var now = new Date();
            var ticks = now.getTime();

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'components/report/01_introduction.html?'+ticks
            }
        })
        .directive('relatedwork', function() {
            var now = new Date();
            var ticks = now.getTime();

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'components/report/02_relatedwork.html?'+ticks
            }
        })
        .directive('data', function() {
            var now = new Date();
            var ticks = now.getTime();

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'components/report/03_data.html?'+ticks
            }
        })
        .directive('explore', function() {
            var now = new Date();
            var ticks = now.getTime();

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'components/report/03_explore.html?'+ticks
            }
        })
        .directive('methodology', function() {
            var now = new Date();
            var ticks = now.getTime();

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'components/report/04_methodology.html?'+ticks
            }
        })
        .directive('standardmodels', function() {
            var now = new Date();
            var ticks = now.getTime();

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'components/report/05_standardmodels.html?'+ticks
            }
        })
        .directive('results', function() {
            var now = new Date();
            var ticks = now.getTime();

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'components/report/06_results.html?'+ticks
            }
        })
        .directive('conclusions', function() {
            var now = new Date();
            var ticks = now.getTime();

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'components/report/07_conclusions.html?'+ticks
            }
        })
        .directive('resources', function() {
            var now = new Date();
            var ticks = now.getTime();

            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'components/report/08_resources.html?'+ticks
            }
        })

})();