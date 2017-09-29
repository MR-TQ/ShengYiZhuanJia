/**
 * Created by T on 2017/9/29.
 */
(function () {
  'use strict';
  angular.module('ayzj.serve')
    .factory('CategoryService',['$rootScope',function ($rootScope) {
      var service={};
      service.activeCategory={
        ID:5,
        Name:'默認類別'
      };
      service.updateCategory=function (value) {
        service.activeCategory=angular.copy(value);
        $rootScope.$broadcast('CategoryUpdate',service.activeCategory);
      };
      return service;
    }])
})()
