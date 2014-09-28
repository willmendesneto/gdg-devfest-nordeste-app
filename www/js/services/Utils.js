angular.module('gdgApp')
  .service('Utils', function($ionicPopup) {

     // A confirm dialog
     return {
      showConfirm: function(params) {
        var defaultParams = {
           title: '<b>CONFIRMATION</b>',
           template: 'Quer realmente agendar esta apresentação? Qualquer outra apresentação para este horário será removida.'
        };
        angular.extend(defaultParams, params);

        var confirmPopup = $ionicPopup.confirm(defaultParams);
        return confirmPopup;
      },

      showAlert: function(params) {
        var defaultParams = {
          title: '<b>ALERT</b>',
          template:'Agendamente feito!'
        };
        angular.extend(defaultParams, params);

        var alertPopup = $ionicPopup.alert(defaultParams);
        return alertPopup;
      }

     }
  });
