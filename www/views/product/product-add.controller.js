/**
 * Created by T on 2017/9/29.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ProductAddCtrl',['$scope',
    function ($scope) {
    $scope.product={
      ID:0,
      Name:'',
      Barcode:'',
      SupplierID:0,
      Images:[],
      CategoryID:5,
      Category:{
        ID:'',
        Name:''
      },
      Supplier:{
        ID:0,
        Name:''
      }
    };

  }])
})();
