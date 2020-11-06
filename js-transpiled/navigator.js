"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = navigatorShare;

/* API NAVIGATOR.SHARE */
function navigatorShare(id) {
  var shareUrl = document.querySelector("#browser");
  var title = window.document.title;
  var url = window.document.location.href;
  shareUrl.addEventListener('click', function () {
    if (navigator.share) {
      navigator.share({
        title: "".concat(title),
        url: "".concat(url).concat(id)
      }).then(function () {
        console.log('Obrigado por compartilhar!');
      })["catch"](console.error);
    } else {
      navigator.clipboard.writeText("".concat(title, " - *Veja mais em: * ").concat(url).concat(id));
    }
  });
}