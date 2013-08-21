/*
 * jQuery Format URL
 * Copyright (c) 2013 Rob Lee <http://www.spartansystems.co>
 * licensed under the LGPL Version 3 license.
 * http://www.gnu.org/licenses/lgpl.html
 */
;(function ($) {
  $.fn.formatUrl = function(options) {

    // Set default settings.
    var settings = $.extend({
      protocol: 'http://',
      alwaysShow: false
    }, options);

    // On Focus we want to check whether the protocol exists and act on it.
    $(this).live('focus', function () {
      if ($(this).val().indexOf(settings.protocol) != 0) {
        var val = $(this).val();
        $(this).val(settings.protocol + val);
      }
    });

    // On Blur we want to check whether the protocol exists and act on it.
    $(this).live('blur', function () {
      // If the protocol isn't there.
      if ($(this).val().indexOf(settings.protocol) != 0) {
        if ($(this).val() == '') {
          // If alwaysShow is false, remove the protocol.
          if (settings.alwaysShow == false) {
            $(this).val('');
          }
          else {
            // If alwaysShow is true, always show the protocol.
            $(this).val(settings.protocol);
          }
        }
        else {
          // If the value is not empty.
          var val = $(this).val();
          $(this).val(settings.protocol + val);
        }
      }
      else {
        // If just the protocol exists, act on it based on alwaysShow.
        if ($(this).val() == settings.protocol && settings.alwaysShow == false) {
          $(this).val('');
        }
      }
    });

    // Return for chaining.
    return this;
  };
})(jQuery);
