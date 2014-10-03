'use strict';

angular.module('gdgApp')
  .directive('map', function(Config) {
    return {
      restrict: 'E',
      controller: 'MapCtrl',
      link: function ($scope, $element, $attr) {

        function initialize() {
          var conferenceLatLng = new google.maps.LatLng($attr.lat, $attr.lng),
              mapOptions = {
                center: conferenceLatLng,
                zoom: 16,
                disableDefaultUI: true,
                zoomControl: false,
                scaleControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              },
              map = new google.maps.Map($element[0], mapOptions)
          ;

          // Stop the side bar from dragging when mousedown/tapdown on the map
          google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
            e.preventDefault();
            return false;
          });

          var marker = new google.maps.Marker({
              position: conferenceLatLng,
              map: map,
              title: Config.GmapsMarkerTitle
          });

          // To add the marker to the map, call setMap();
          marker.setMap(map);

          $scope.init($element, map);

        }

        if (document.readyState === 'complete') {
          initialize();
        } else {
          google.maps.event.addDomListener(window, 'load', initialize);
        }
      }
    }
  });
