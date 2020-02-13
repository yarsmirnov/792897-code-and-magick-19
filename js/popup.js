'use strict';

(function () {
  var initPopup = function (popup, opener, closer) {
    var open = function () {
      popup.classList.remove('hidden');
      document.addEventListener('keydown', onEscPress);
      closer.addEventListener('click', close);
      closer.addEventListener('keydown', onCloserEnterPress);

      window.dragAndAction.reset(document.querySelector('.setup'), document.querySelector('.setup-close'));
    };

    var close = function () {
      popup.classList.add('hidden');
      popup.removeEventListener('keydown', onEscPress);

      closer.removeEventListener('click', close);
      closer.removeEventListener('keydown', onCloserEnterPress);
    };

    var onEscPress = function (evt) {
      if (evt.code === window.util.ESCAPE_KEYCODE && evt.target.type !== 'text') {
        close();
      }
    };

    var onOpenerEnterPress = function (evt) {
      if (evt.code === window.util.ENTER_KEYCODE) {
        open();
      }
    };

    var onCloserEnterPress = function (evt) {
      if (evt.code === window.util.ENTER_KEYCODE) {
        close();
      }
    };

    opener.addEventListener('click', open);
    opener.addEventListener('keydown', onOpenerEnterPress);
  };


  window.popup = {
    init: initPopup
  };
})();

