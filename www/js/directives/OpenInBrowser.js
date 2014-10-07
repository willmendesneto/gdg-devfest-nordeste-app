'use strict';

angular.module('gdgApp')
  .directive('openInBrowser', function($window) {
    return {
      scope: {
        link: '='
      },
      link: {
        post: function($scope, $el, $attrs) {

          $el.removeClass('ng-binding ng-scope');

          $el.bind('click', function(){
            window.open($scope.link, '_system', 'location=yes');
            return false;
          });

          $scope.$on('$destroy', function(){
            $el.unbind('click');
          });
        }
      }
    }
  });
