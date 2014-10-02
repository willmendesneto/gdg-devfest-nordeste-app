'use strict';

angular.module('gdgApp')
  .directive('openInBrowser', function($window) {
    return {
      scope: {
        link: '='
      },
      link: function($scope, $el) {
        $el.on('click', function(){
          window.open($scope.link, '_blank', 'location=yes');
          return false;
        });

        $scope.$on('$destroy', function(){
          $el.unbind('click');
          $scope.$destroy();
        });
      }
    }
  });
