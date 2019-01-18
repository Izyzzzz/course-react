"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.CalcCash = exports.rus = exports.eu = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
var cash = sponsors.cash,
    eu = sponsors.eu,
    rus = sponsors.rus;
exports.rus = rus;
exports.eu = eu;

var CalcCash =
/*#__PURE__*/
function () {
  function CalcCash() {
    _classCallCheck(this, CalcCash);

    for (var _len = arguments.length, everyCash = new Array(_len), _key = 0; _key < _len; _key++) {
      everyCash[_key] = arguments[_key];
    }

    this.everyCash = everyCash;
  }

  _createClass(CalcCash, [{
    key: "total",
    get: function get() {
      return this.everyCash[1].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, this.everyCash[0]);
    }
  }]);

  return CalcCash;
}();

exports.CalcCash = CalcCash;
var money = new CalcCash(null, cash);
exports.money = money;