'use strict';

angular.module('gdgApp')
  .controller('TracksCtrl', function($scope, $filter, $window, $stateParams, Tracks, GDGGroups, Schedule, Utils, Config) {
    $scope.TrackList = Tracks;
    $scope.GDGGroupsList = GDGGroups;
    $scope.isList = false;
    $scope.Config = Config;
    $scope.TrackChoiced = $scope.TalkChoiced = {};
    $scope.Schedule = Schedule.getSchedule();

    $scope.init = function() {
      if (!angular.isUndefined($stateParams.trackId)) {
        $scope.TrackChoiced = $filter('filter')(Tracks, {track: $stateParams.trackId}, true)[0];
        if (!angular.isUndefined($stateParams.talkId)) {
          $scope.TalkChoiced = $scope.TrackChoiced.talks[$stateParams.talkId];
          if (angular.isArray($scope.TalkChoiced.resume)) {
            angular.forEach($scope.TalkChoiced.resume, function(item, key) {
              $scope.TalkChoiced.resume[key] = $filter('breakword')(item, $scope.getQuantityByWindowWidth(), '<br>');
            });
          } else {
            $scope.TalkChoiced.resume = $filter('breakword')($scope.TalkChoiced.resume, $scope.getQuantityByWindowWidth(), '<br>');
          }
          $scope.isList = angular.isArray($scope.TalkChoiced.image);
        }
      }
    };

    $scope.getQuantityByWindowWidth = function() {
      return $window.innerWidth / 8;
    };

    $scope.addTalkInSchedule = function(talk, track) {
      Utils.showConfirm().then(function(res) {
        if(res) {
          Schedule.updateTalkInSchedule(talk, track);
          Utils.showAlert();
        }
      });
    };

    $scope.init();
  });
