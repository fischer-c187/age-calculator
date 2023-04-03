"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./_lib/formatDistance/index.js"));

var _index2 = _interopRequireDefault(require("./_lib/formatLong/index.js"));

var _index3 = _interopRequireDefault(require("./_lib/formatRelative/index.js"));

var _index4 = _interopRequireDefault(require("./_lib/localize/index.js"));

var _index5 = _interopRequireDefault(require("./_lib/match/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {Locale}
 * @category Locales
 * @summary Czech locale.
 * @language Czech
 * @iso-639-2 ces
 * @author David Rus [@davidrus]{@link https://github.com/davidrus}
 * @author Pavel Hrách [@SilenY]{@link https://github.com/SilenY}
 * @author Jozef Bíroš [@JozefBiros]{@link https://github.com/JozefBiros}
 */
var locale = {
  code: 'cs',
  formatDistance: _index.default,
  formatLong: _index2.default,
  formatRelative: _index3.default,
  localize: _index4.default,
  match: _index5.default,
  options: {
    weekStartsOn: 1
    /* Monday */
    ,
    firstWeekContainsDate: 4
  }
};
var _default = locale;
exports.default = _default;
module.exports = exports.default;