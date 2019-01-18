"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Employ = exports.employ = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employ =
/*#__PURE__*/
function () {
  function Employ() {
    _classCallCheck(this, Employ);

    this.employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
  }

  _createClass(Employ, [{
    key: "empl",
    get: function get() {
      return this.employers.filter(function (elem) {
        return elem.length > 0;
      }).map(function (elem) {
        return elem.toLowerCase().trim();
      });
    }
  }]);

  return Employ;
}();

exports.Employ = Employ;
var employ = new Employ();
exports.employ = employ;