"use strict";

var _share = require("./share.js");

var _navigator = _interopRequireDefault(require("./navigator.js"));

var _uuid = _interopRequireDefault(require("./uuid.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* import { v4 as uuidv4 } from 'https://jspm.dev/uuid'; //Funciona porém não é uma boa prática
import { v4 as uuidv4 } from 'uuid'; */
//Maneira correta, porém apresenta erro

/* FILTRO ACTIVED */
_share.share.forEach(function (share) {
  if (!share.actived) {
    var media = document.querySelectorAll("#".concat(share.name));
    media.forEach(function (item) {
      item.classList.add('disabled');
      item.setAttribute("disabled", "disabled");
    });
  }
});
/* EXIBIR TOOLTIP */


var buttonTooltip = document.querySelector("button");
buttonTooltip.addEventListener("click", function () {
  var nameClass = "show";
  var addClassDiv = buttonTooltip.parentNode;
  addClassDiv.classList.toggle(nameClass);
});
/* API NAVIGATOR.SHARE */

(0, _navigator["default"])((0, _uuid["default"])());