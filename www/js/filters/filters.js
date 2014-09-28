'use strict';

angular.module('gdgApp')

  .filter('breakword', function () {

    return function(str, int_width, str_break, cut) {

      var m = int_width || 75;
      var b = str_break || '\n';
      var c = cut || false;

      var i, j, l, s, r;

      str += '';

      if (m < 1) {
        return str;
      }

      for (i = -1, l = (r = str.split(/\r\n|\n|\r/))
        .length; ++i < l; r[i] += s) {
        for (s = r[i], r[i] = ''; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j))
          .length ? b : '')) {
          j = c == 2 || (j = s.slice(0, m + 1)
            .match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length || c == 1 && m || j.input.length + (j = s.slice(
              m)
            .match(/^\S*/))[0].length;
        }
      }
      return r.join(str_break);
    }

  });
