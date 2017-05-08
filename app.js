(function() {
    'use strict';
    angular.module('spp.app', [
        'ui.router'
        ,'ui.bootstrap'
        ,'ui'
        ,'spp.app.config'
        ,'spp.app.common'
        ,'spp.app.navbar'
        ,'spp.app.menu'
        ,'spp.app.home'
        ,'spp.app.report'
    ])
        .service('AppService',function($q,$timeout,$window,$state){
            var self = this;

            self.CurrentUser = {};

            self.GetScreenWidth = function () {
                return $window.innerWidth;
            }
            self.IsMobile = function(){
                if($window.innerWidth < 700){
                    return true;
                }else{
                    return false;
                }
            }
        })
        .controller('appController', function ($state,AppService) {
            var self = this;
            console.log("appController");

        })

})();

