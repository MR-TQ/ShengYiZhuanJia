/**
 * Created by T on 2017/9/20.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('HomeCtrl',['$scope','localStorageService', '$state',function($scope,localStorageService,$state) {
      $scope.$on('$ionicView.beforeEnter',function () {
        var user = localStorageService.get('user');
        console.log(user.isLogin);
        if (user.isLogin==false){
          $state.go('login')
        }
      });
    }])
})();
