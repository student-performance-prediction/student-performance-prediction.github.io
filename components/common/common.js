(function() {
    'use strict';
    angular.module('spp.app.common', [])
        .controller('confirmmodalController', function ($uibModalInstance, valid) {
            var self = this;

            self.valid = valid;
            self.ok = function () {
                $uibModalInstance.close();
            };

            self.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        })
        .directive('switch', function () {
            return {
                restrict: 'AE'
                , replace: true
                , transclude: true
                , template: function (element, attrs) {
                    var html = '';
                    html += '<span';
                    html += ' class="switch' + (attrs.class ? ' ' + attrs.class : '') + '"';
                    html += attrs.ngModel ? ' ng-click="' + attrs.disabled + ' ? ' + attrs.ngModel + ' : ' + attrs.ngModel + '=!' + attrs.ngModel + (attrs.ngChange ? '; ' + attrs.ngChange + '()"' : '"') : '';
                    html += ' ng-class="{ checked:' + attrs.ngModel + ', disabled:' + attrs.disabled + ' }"';
                    html += '>';
                    html += '<small></small>';
                    html += '<input type="checkbox"';
                    html += attrs.id ? ' id="' + attrs.id + '"' : '';
                    html += attrs.name ? ' name="' + attrs.name + '"' : '';
                    html += attrs.ngModel ? ' ng-model="' + attrs.ngModel + '"' : '';
                    html += ' style="display:none" />';
                    html += '<span class="switch-text">'; /*adding new container for switch text*/
                    html += attrs.on ? '<span class="on">' + attrs.on + '</span>' : ''; /*switch text on value set by user in directive html markup*/
                    html += attrs.off ? '<span class="off">' + attrs.off + '</span>' : ' ';  /*switch text off value set by user in directive html markup*/
                    html += '</span>';
                    return html;
                }
            }
        })
        .filter('ExistsInArray', function($filter){
            return function(list, arrayFilter, element1,element2){
                //console.log(arrayFilter);
                //console.log(element1+'-'+element2);
                if(arrayFilter){
                    return $filter("filter")(list, function(listItem){
                        //return arrayFilter.indexOf(listItem[element]) != -1;
                        return (_.findIndex(arrayFilter, function(o) { return listItem[element1] == o[element2]; }) != -1)
                    });

                    //return list;
                }else{
                    return list;
                }
            };
        })
        .filter('NotExistsInArray', function($filter){
            return function(list, arrayFilter, element1,element2){
                //console.log(arrayFilter);
                //console.log(element1+'-'+element2);
                if(arrayFilter){
                    return $filter("filter")(list, function(listItem){
                        //return arrayFilter.indexOf(listItem[element]) != -1;
                        return (_.findIndex(arrayFilter, function(o) { return listItem[element1] == o[element2]; }) == -1)
                    });

                    //return list;
                }else{
                    return list;
                }
            };
        })
        .filter('IsNotNull', function($filter){
            return function(list, columnname){
                //console.log(arrayFilter);
                //console.log(element1+'-'+element2);
                if(columnname){
                    return $filter("filter")(list, function(listItem){
                        //return (_.findIndex(arrayFilter, function(o) { return listItem[element1] == o[element2]; }) != -1)
                        return listItem[columnname] != '';
                    });

                }else{
                    return list;
                }
            };
        })
})();
