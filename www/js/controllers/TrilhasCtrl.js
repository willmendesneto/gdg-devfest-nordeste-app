'use strict';

angular.module('gdgApp')
  .controller('TracksCtrl', function($scope, $filter, $stateParams, Tracks, GDGGroups) {
    $scope.TrackList = Tracks;
    $scope.GDGGroupsList = GDGGroups;
    $scope.isList = false;
    $scope.TrackChoiced = $scope.TalkChoiced = {};

    $scope.init = function() {
      if (!angular.isUndefined($stateParams.trilhaId)) {
        $scope.TrackChoiced = $filter('filter')(Tracks, {track: $stateParams.trilhaId}, true)[0];
        if (!angular.isUndefined($stateParams.Id)) {
          $scope.TalkChoiced = $scope.TrackChoiced.talks[$stateParams.Id];
          $scope.isList = angular.isArray($scope.TalkChoiced.image);
        }
      }
    };

    $scope.init();
  });
