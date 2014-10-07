'use strict';

angular.module('gdgApp')
  .controller('AppCtrl', function($scope, $filter, $window, $stateParams, Tracks, GDGGroups, Schedule, Utils, Config) {

    $scope.App = this;

    $scope.App.TrackList = Tracks;
    $scope.App.GDGGroupsList = GDGGroups;
    $scope.App.isList = false;
    $scope.App.Config = Config;
    $scope.App.TrackChoiced = $scope.App.TalkChoiced = {};
    $scope.App.Schedule = Schedule.getSchedule();

    $scope.App.init = function() {
      if (!angular.isUndefined($stateParams.trackId)) {
        $scope.App.TrackChoiced = $filter('filter')(Tracks, {track: $stateParams.trackId}, true)[0];
        if (!angular.isUndefined($stateParams.talkId)) {
          $scope.App.TalkChoiced = $scope.App.TrackChoiced.talks[$stateParams.talkId];
          if (angular.isArray($scope.App.TalkChoiced.resume)) {
            angular.forEach($scope.App.TalkChoiced.resume, function(item, key) {
              $scope.App.TalkChoiced.resume[key] = $filter('breakword')(item, $scope.App.getQuantityByWindowWidth(), '<br>');
            });
          } else {
            $scope.App.TalkChoiced.resume = $filter('breakword')($scope.App.TalkChoiced.resume, $scope.App.getQuantityByWindowWidth(), '<br>');
          }

          $scope.App.TalkChoiced.description = $filter('breakword')($scope.App.TalkChoiced.description, $scope.App.getQuantityByWindowWidth(), '<br>');
          $scope.App.isList = angular.isArray($scope.App.TalkChoiced.image);
        }
      }
    };

    $scope.App.getQuantityByWindowWidth = function() {
      return $window.innerWidth / 8;
    };

    $scope.App.addTalkInSchedule = function(talk, track) {
      Utils.showConfirm().then(function(res) {
        if(res) {
          Schedule.updateTalkInSchedule(talk, track);
          Utils.showAlert();
        }
      });
    };

    $scope.App.init();

  });
