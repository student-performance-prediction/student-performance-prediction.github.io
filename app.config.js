(function() {
    'use strict';
    angular.module('spp.app.config', [])
        .service('AppConfig', function () {
            this.Settings = {
                app_version: 1.0,
                app_id: "spp",
                service_url: "",
                authentication_url: ""
            };
        });

})();
