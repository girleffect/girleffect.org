/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
//     Hallo - a rich text editing jQuery UI widget
//     (c) 2011 Henri Bergius, IKS Consortium
'use strict';

(function (jQuery) {
  return jQuery.widget("IKS.hallojustify", {
    options: {
      editable: null,
      toolbar: null,
      uuid: '',
      buttonCssClass: null
    },

    populateToolbar: function populateToolbar(toolbar) {
      var _this = this;

      var buttonset = jQuery('<span class="' + this.widgetName + '"></span>');
      var buttonize = function buttonize(alignment) {
        var buttonElement = jQuery('<span></span>');
        buttonElement.hallobutton({
          uuid: _this.options.uuid,
          editable: _this.options.editable,
          label: alignment,
          command: 'justify' + alignment,
          icon: 'icon icon-fa-align-' + alignment.toLowerCase(),
          cssClass: _this.options.buttonCssClass
        });
        return buttonset.append(buttonElement);
      };
      buttonize("Left");
      buttonize("Center");
      buttonize("Right");

      buttonset.hallobuttonset();
      return toolbar.append(buttonset);
    }
  });
})(jQuery);
//     Hallo may be freely distributed under the MIT license