'use strict';

/**
 * Initial tracks list
 *
 * @type {Array}
 */
angular.module('gdgApp')
  .service('Schedule', function(OfflineModel, Tracks) {
    var OM = OfflineModel;
    var __defaultSchedule =  OM.getListItems('schedule');

    if (!__defaultSchedule) {
      __defaultSchedule = {};
      __defaultSchedule.talks = Tracks[0].talks.map(function(item) {
        return {begin: item.begin, end: item.end};
      });
    }

    OM.init('schedule', __defaultSchedule);

    return {
      getSchedule: function() {
        return __defaultSchedule;
      },
      updateTalkInSchedule: function(talk, track) {
        angular.forEach(__defaultSchedule.talks, function(schedule, key){
          if (schedule.begin === talk.begin && schedule.end === talk.end) {
            talk.track = track;
            __defaultSchedule.talks[key] = talk;
            OM.setListItems('schedule', __defaultSchedule);
          }
        });
      }
    }

  });
