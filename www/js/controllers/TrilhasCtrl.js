'use strict';

angular.module('gdgApp')
  .controller('TracksCtrl', function($scope, $filter, $window, $stateParams, Tracks, GDGGroups, Schedule) {
    $scope.TrackList = Tracks;
    $scope.GDGGroupsList = GDGGroups;
    $scope.isList = false;
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
      if (confirm('Quer realmente agendar esta apresentação? Qualquer outra apresentação para este horário será removida.')) {
        Schedule.updateTalkInSchedule(talk, track);
        alert('Agendamente feito!');
      }
    };

    $scope.init();
  });
