/*
 * jQuery Format URL
 * Copyright (c) 2013 Rob Lee <http://www.spartansystems.co>
 * licensed under the LGPL Version 3 license.
 * http://www.gnu.org/licenses/lgpl.html
 */
;(function ($) {
  $.fn.formatUrl = function() {
    return $(this).live('focus', function () {
      if ($(this).val().indexOf('http://') != 0) {
        var val = $(this).val();
        $(this).val('http://' + val);
      }
    }).live('blur', function () {
      if ($(this).val().indexOf('http://') != 0) {
        if ($(this).val() == '') {
          $(this).val('');
        }
        else {
          var val = $(this).val();
          $(this).val('http://' + val);
        }
      }
      else {
        if ($(this).val() == 'http://') {
          $(this).val('');
        }
      }
    });
  };
})(jQuery);
