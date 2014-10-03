'use strict';

angular.module('gdgApp')
  .controller('MapCtrl', function($scope, $attrs, $ionicLoading) {

    var self = this;

    $scope.init = function(element) {
      self.$element = element;
    };

  });
