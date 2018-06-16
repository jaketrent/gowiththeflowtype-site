module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([4],{

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/polished/dist/polished.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export adjustHue */
/* unused harmony export animation */
/* unused harmony export backgroundImages */
/* unused harmony export backgrounds */
/* unused harmony export borderColor */
/* unused harmony export borderRadius */
/* unused harmony export borderStyle */
/* unused harmony export borderWidth */
/* unused harmony export buttons */
/* unused harmony export clearFix */
/* unused harmony export complement */
/* unused harmony export darken */
/* unused harmony export desaturate */
/* unused harmony export directionalProperty */
/* unused harmony export ellipsis */
/* unused harmony export em */
/* unused harmony export fontFace */
/* unused harmony export getLuminance */
/* unused harmony export grayscale */
/* unused harmony export invert */
/* unused harmony export hideText */
/* unused harmony export hideVisually */
/* unused harmony export hiDPI */
/* unused harmony export hsl */
/* unused harmony export hsla */
/* unused harmony export lighten */
/* unused harmony export margin */
/* unused harmony export mix */
/* unused harmony export modularScale */
/* unused harmony export normalize */
/* unused harmony export opacify */
/* unused harmony export padding */
/* unused harmony export parseToHsl */
/* unused harmony export parseToRgb */
/* unused harmony export placeholder */
/* unused harmony export position */
/* unused harmony export radialGradient */
/* unused harmony export readableColor */
/* unused harmony export rem */
/* unused harmony export retinaImage */
/* unused harmony export rgb */
/* unused harmony export rgba */
/* unused harmony export saturate */
/* unused harmony export selection */
/* unused harmony export setHue */
/* unused harmony export setLightness */
/* unused harmony export setSaturation */
/* unused harmony export shade */
/* unused harmony export size */
/* unused harmony export stripUnit */
/* unused harmony export textInputs */
/* unused harmony export timingFunctions */
/* unused harmony export tint */
/* unused harmony export toColorString */
/* unused harmony export transitions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return curriedTransparentize; });
/* unused harmony export triangle */
/* unused harmony export wordWrap */
//      

// @private
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//      
var positionMap = ['Top', 'Right', 'Bottom', 'Left'];

function generateProperty(property, position) {
  if (!property) return position.toLowerCase();
  var splitProperty = property.split('-');
  if (splitProperty.length > 1) {
    splitProperty.splice(1, 0, position);
    return splitProperty.reduce(function (acc, val) {
      return '' + acc + capitalizeString(val);
    });
  }
  var joinedProperty = property.replace(/([a-z])([A-Z])/g, '$1' + position + '$2');
  return property === joinedProperty ? '' + property + position : joinedProperty;
}

function generateStyles(property, valuesWithDefaults) {
  var styles = {};
  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
    }
  }
  return styles;
}

/**
 * A helper that enables shorthand for direction based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */

function directionalProperty(property) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  //  prettier-ignore
  var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === undefined ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === undefined ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === undefined ? secondValue : _values$3;

  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}

//      

function endsWith (string, suffix) {
  return string.substr(-suffix.length) === suffix;
}

//      

/**
 * Strip the unit from a given CSS value, returning just the number. (or the original value if an invalid string was passed)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

function stripUnit(value) {
  var unitlessValue = parseFloat(value);
  if (isNaN(unitlessValue)) return value;
  return unitlessValue;
}

//      

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */
var pxtoFactory = function pxtoFactory(to) {
  return function (pxval) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px';

    var newPxval = pxval;
    var newBase = base;
    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new Error('Expected a string ending in "px" or a number passed as the first argument to ' + to + '(), got "' + pxval + '" instead.');
      }
      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new Error('Expected a string ending in "px" or a number passed as the second argument to ' + to + '(), got "' + base + '" instead.');
      }
      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new Error('Passed invalid pixel value ("' + pxval + '") to ' + to + '(), please pass a value like "12px" or 12.');
    }

    if (typeof newBase === 'string') {
      throw new Error('Passed invalid base value ("' + base + '") to ' + to + '(), please pass a value like "12px" or 12.');
    }

    return '' + newPxval / newBase + to;
  };
};

//      
/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em = /*#__PURE__*/pxtoFactory('em');

//      

var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4

  /** */

  /**
   * Establish consistent measurements and spacial relationships throughout your projects by incrementing up or down a defined scale. We provide a list of commonly used scales as pre-defined variables, see below.
   * @example
   * // Styles as object usage
   * const styles = {
   *    // Increment two steps up the default scale
   *   'fontSize': modularScale(2)
   * }
   *
   * // styled-components usage
   * const div = styled.div`
   *    // Increment two steps up the default scale
   *   fontSize: ${modularScale(2)}
   * `
   *
   * // CSS in JS Output
   *
   * element {
   *   'fontSize': '1.77689em'
   * }
   */
};function modularScale(steps) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1em';
  var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'perfectFourth';

  if (typeof steps !== 'number') {
    throw new Error('Please provide a number of steps to the modularScale helper.');
  }
  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new Error('Please pass a number or one of the predefined scales to the modularScale helper as the ratio.');
  }

  var realBase = typeof base === 'string' ? stripUnit(base) : base;
  var realRatio = typeof ratio === 'string' ? ratioNames[ratio] : ratio;

  if (typeof realBase === 'string') {
    throw new Error('Invalid value passed as base to modularScale, expected number or em string but got "' + base + '"');
  }

  return realBase * Math.pow(realRatio, steps) + 'em';
}

//      

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */

var rem = /*#__PURE__*/pxtoFactory('rem');

//      

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */

function clearFix() {
  var _ref;

  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '&';

  var pseudoSelector = parent + '::after';
  return _ref = {}, _ref[pseudoSelector] = {
    clear: 'both',
    content: '""',
    display: 'table'
  }, _ref;
}

//      

/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */

function ellipsis() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '100%';

  return {
    display: 'inline-block',
    maxWidth: width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  };
}

//      

/** */

function generateFileReferences(fontFilePath, fileFormats) {
  var fileFontReferences = fileFormats.map(function (format) {
    return 'url("' + fontFilePath + '.' + format + '")';
  });
  return fileFontReferences.join(', ');
}

function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function (font) {
    return 'local("' + font + '")';
  });
  return localFontReferences.join(', ');
}

function generateSources(fontFilePath, localFonts, fileFormats) {
  var fontReferences = [];
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts));
  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats));
  }
  return fontReferences.join(', ');
}

/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro'
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * injectGlobal`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro'
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */

function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      fontFilePath = _ref.fontFilePath,
      fontStretch = _ref.fontStretch,
      fontStyle = _ref.fontStyle,
      fontVariant = _ref.fontVariant,
      fontWeight = _ref.fontWeight,
      _ref$fileFormats = _ref.fileFormats,
      fileFormats = _ref$fileFormats === undefined ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
      localFonts = _ref.localFonts,
      unicodeRange = _ref.unicodeRange;

  // Error Handling
  if (!fontFamily) throw new Error('fontFace expects a name of a font-family.');
  if (!fontFilePath && !localFonts) {
    throw new Error('fontFace expects either the path to the font file(s) or a name of a local copy.');
  }
  if (localFonts && !Array.isArray(localFonts)) {
    throw new Error('fontFace expects localFonts to be an array.');
  }
  if (!Array.isArray(fileFormats)) {
    throw new Error('fontFace expects fileFormats to be an array.');
  }

  var fontFaceDeclaration = {
    '@font-face': {
      fontFamily: fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats),
      unicodeRange: unicodeRange,
      fontStretch: fontStretch,
      fontStyle: fontStyle,
      fontVariant: fontVariant,
      fontWeight: fontWeight
    }

    // Removes undefined fields for cleaner css object.
  };return JSON.parse(JSON.stringify(fontFaceDeclaration));
}

//      

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'backgroundImage': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   backgroundImage: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'backgroundImage': 'url(logo.png)',
 *   'textIndent': '101%',
 *   'overflow': 'hidden',
 *   'whiteSpace': 'nowrap',
 * }
 */

function hideText() {
  return {
    textIndent: '101%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
}

//      

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'clipPath': 'inset(50%)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */

function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}

//      

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */

function hiDPI() {
  var ratio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.3;

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



























var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var _opinionatedRules;
var _abbrTitle;
var _unopinionatedRules;

//      
var opinionatedRules = (_opinionatedRules = {
  html: {
    fontFamily: 'sans-serif'
  },

  body: {
    margin: '0'
  }

}, _opinionatedRules['a:active,\n  a:hover'] = {
  outlineWidth: '0'
}, _opinionatedRules['button,\n  input,\n  optgroup,\n  select,\n  textarea'] = {
  fontFamily: 'sans-serif',
  fontSize: '100%',
  lineHeight: '1.15'
}, _opinionatedRules);

var unopinionatedRules = (_unopinionatedRules = {
  html: {
    lineHeight: '1.15',
    textSizeAdjust: '100%'
  }

}, _unopinionatedRules['article,\n  aside,\n  footer,\n  header,\n  nav,\n  section'] = {
  display: 'block'
}, _unopinionatedRules.h1 = {
  fontSize: '2em',
  margin: '0.67em 0'
}, _unopinionatedRules['figcaption,\n  figure,\n  main'] = {
  display: 'block'
}, _unopinionatedRules.figure = {
  margin: '1em 40px'
}, _unopinionatedRules.hr = {
  boxSizing: 'content-box',
  height: '0',
  overflow: 'visible'
}, _unopinionatedRules.pre = {
  fontFamily: 'monospace, monospace',
  fontSize: '1em'
}, _unopinionatedRules.a = {
  'background-color': 'transparent',
  '-webkit-text-decoration-skip': 'objects'
}, _unopinionatedRules['abbr[title]'] = (_abbrTitle = {
  borderBottom: 'none',
  textDecoration: 'underline'
}, _abbrTitle['textDecoration'] = 'underline dotted', _abbrTitle), _unopinionatedRules['b,\n  strong'] = {
  fontWeight: 'inherit'
}, _unopinionatedRules['code,\n  kbd,\n  samp'] = {
  fontFamily: 'monospace, monospace',
  fontSize: '1em'
}, _unopinionatedRules.dfn = {
  fontStyle: 'italic'
}, _unopinionatedRules.mark = {
  backgroundColor: '#ff0',
  color: '#000'
}, _unopinionatedRules.small = {
  fontSize: '80%'
}, _unopinionatedRules['sub,\n  sup'] = {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline'
}, _unopinionatedRules.sub = {
  bottom: '-0.25em'
}, _unopinionatedRules.sup = {
  top: '-0.5em'
}, _unopinionatedRules['audio,\n  video'] = {
  display: 'inline-block'
}, _unopinionatedRules['audio:not([controls])'] = {
  display: 'none',
  height: '0'
}, _unopinionatedRules.img = {
  borderStyle: 'none'
}, _unopinionatedRules['svg:not(:root)'] = {
  overflow: 'hidden'
}, _unopinionatedRules['button,\n  input,\n  optgroup,\n  select,\n  textarea'] = {
  margin: '0'
}, _unopinionatedRules['button,\n  input'] = {
  overflow: 'visible'
}, _unopinionatedRules['button,\n  select'] = {
  textTransform: 'none'
}, _unopinionatedRules['button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"]'] = {
  '-webkit-appearance': 'button'
}, _unopinionatedRules['button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner'] = {
  borderStyle: 'none',
  padding: '0'
}, _unopinionatedRules['button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring'] = {
  outline: '1px dotted ButtonText'
}, _unopinionatedRules.fieldset = {
  border: '1px solid #c0c0c0',
  margin: '0 2px',
  padding: '0.35em 0.625em 0.75em'
}, _unopinionatedRules.legend = {
  boxSizing: 'border-box',
  color: 'inherit',
  display: 'table',
  maxWidth: '100%',
  padding: '0',
  whiteSpace: 'normal'
}, _unopinionatedRules.progress = {
  display: 'inline-block',
  verticalAlign: 'baseline'
}, _unopinionatedRules.textarea = {
  overflow: 'auto'
}, _unopinionatedRules['[type="checkbox"],\n  [type="radio"]'] = {
  boxSizing: 'border-box',
  padding: '0'
}, _unopinionatedRules['[type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button'] = {
  height: 'auto'
}, _unopinionatedRules['[type="search"]'] = {
  '-webkit-appearance': 'textfield',
  outlineOffset: '-2px'
}, _unopinionatedRules['[type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration'] = {
  '-webkit-appearance': 'none'
}, _unopinionatedRules['::-webkit-file-upload-button'] = {
  '-webkit-appearance': 'button',
  font: 'inherit'
}, _unopinionatedRules['details,\n  menu'] = {
  display: 'block'
}, _unopinionatedRules.summary = {
  display: 'list-item'
}, _unopinionatedRules.canvas = {
  display: 'inline-block'
}, _unopinionatedRules.template = {
  display: 'none'
}, _unopinionatedRules['[hidden]'] = {
  display: 'none'
}, _unopinionatedRules);

function mergeRules(baseRules, additionalRules) {
  var mergedRules = _extends({}, baseRules);
  Object.keys(additionalRules).forEach(function (key) {
    if (mergedRules[key]) {
      mergedRules[key] = _extends({}, mergedRules[key], additionalRules[key]);
    } else {
      mergedRules[key] = _extends({}, additionalRules[key]);
    }
  });
  return mergedRules;
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * injectGlobal`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   fontFamily: 'sans-serif',
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize(excludeOpinionated) {
  if (excludeOpinionated) return unopinionatedRules;
  return mergeRules(unopinionatedRules, opinionatedRules);
}

//      

/**
 * CSS to style the placeholder pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */

function placeholder(styles) {
  var _ref;

  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';

  return _ref = {}, _ref[parent + '::-webkit-input-placeholder'] = _extends({}, styles), _ref[parent + ':-moz-placeholder'] = _extends({}, styles), _ref[parent + '::-moz-placeholder'] = _extends({}, styles), _ref[parent + ':-ms-input-placeholder'] = _extends({}, styles), _ref;
}

var _templateObject = /*#__PURE__*/ taggedTemplateLiteralLoose(['radial-gradient(', '', '', '', ')'], ['radial-gradient(', '', '', '', ')']);

//      

/** */

function parseFallback(colorStops) {
  return colorStops[0].split(' ')[0];
}

function constructGradientValue(literals) {
  var template = '';
  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i];
    // Adds leading coma if properties preceed color-stops
    if (i === 3 && (arguments.length <= i + 1 ? undefined : arguments[i + 1]) && ((arguments.length <= 1 ? undefined : arguments[1]) || (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 3 ? undefined : arguments[3]))) {
      template = template.slice(0, -1);
      template += ', ' + (arguments.length <= i + 1 ? undefined : arguments[i + 1]);
      // No trailing space if color-stops is the only param provided
    } else if (i === 3 && (arguments.length <= i + 1 ? undefined : arguments[i + 1]) && !(arguments.length <= 1 ? undefined : arguments[1]) && !(arguments.length <= 2 ? undefined : arguments[2]) && !(arguments.length <= 3 ? undefined : arguments[3])) {
      template += '' + (arguments.length <= i + 1 ? undefined : arguments[i + 1]);
      // Only adds substitution if it is defined
    } else if (arguments.length <= i + 1 ? undefined : arguments[i + 1]) {
      template += (arguments.length <= i + 1 ? undefined : arguments[i + 1]) + ' ';
    }
  }
  return template.trim();
}

/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#00FFFF',
 *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */

function radialGradient(_ref) {
  var colorStops = _ref.colorStops,
      extent = _ref.extent,
      fallback = _ref.fallback,
      position = _ref.position,
      shape = _ref.shape;

  if (!colorStops || colorStops.length < 2) {
    throw new Error('radialGradient requries at least 2 color-stops to properly render.');
  }
  return {
    backgroundColor: fallback || parseFallback(colorStops),
    backgroundImage: constructGradientValue(_templateObject, position, shape, extent, colorStops.join(', '))
  };
}

//      

/**
 * A helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
function retinaImage(filename, backgroundSize) {
  var extension = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'png';

  var _ref;

  var retinaFilename = arguments[3];
  var retinaSuffix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '_2x';

  if (!filename) {
    throw new Error('Please supply a filename to retinaImage() as the first argument.');
  }
  // Replace the dot at the beginning of the passed extension if one exists
  var ext = extension.replace(/^\./, '');
  var rFilename = retinaFilename ? retinaFilename + '.' + ext : '' + filename + retinaSuffix + '.' + ext;

  return _ref = {
    backgroundImage: 'url(' + filename + '.' + ext + ')'
  }, _ref[hiDPI()] = {
    backgroundImage: 'url(' + rFilename + ')',
    backgroundSize: backgroundSize
  }, _ref;
}

//      

/**
 * CSS to style the selection pseudo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...selection({
 *     'backgroundColor': 'blue'
 *   }, 'section')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${selection({'backgroundColor': 'blue'}, 'section')}
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'section::-moz-selection': {
 *     'backgroundColor':'blue',
 *   },
 *   'section::selection': {
 *     'backgroundColor': 'blue',
 *   }
 * }
 */

function selection(styles) {
  var _ref;

  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return _ref = {}, _ref[parent + '::-moz-selection'] = _extends({}, styles), _ref[parent + '::selection'] = _extends({}, styles), _ref;
}

//      

/* eslint-disable key-spacing */
var functionsMap = {
  easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',

  easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',

  easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
  /* eslint-enable key-spacing */

  /** */

  /**
   * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
   *
   * @example
   * // Styles as object usage
   * const styles = {
   *   'transitionTimingFunction': timingFunctions('easeInQuad')
   * }
   *
   * // styled-components usage
   *  const div = styled.div`
   *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
   * `
   *
   * // CSS as JS Output
   *
   * 'div': {
   *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
   * }
   */

};function timingFunctions(timingFunction) {
  return functionsMap[timingFunction];
}

//      

/** */

var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
  switch (pointingDirection) {
    case 'top':
      return '0 ' + width / 2 + 'px ' + height + 'px ' + width / 2 + 'px';
    case 'left':
      return height / 2 + 'px ' + width + 'px ' + height / 2 + 'px 0';
    case 'bottom':
      return height + 'px ' + width / 2 + 'px 0 ' + width / 2 + 'px';
    case 'right':
      return height / 2 + 'px 0 ' + height / 2 + 'px ' + width + 'px';

    default:
      throw new Error("Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.");
  }
};

// needed for border-color
var reverseDirection = {
  left: 'Right',
  right: 'Left',
  top: 'Bottom',
  bottom: 'Top'

  /**
   * CSS to represent triangle with any pointing direction with an optional background color. Accepts number or px values for height and width.
   *
   * @example
   * // Styles as object usage
   *
   * const styles = {
   *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
   * }
   *
   *
   * // styled-components usage
   * const div = styled.div`
   *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
   *
   *
   * // CSS as JS Output
   *
   * div: {
   *  'borderColor': 'transparent',
   *  'borderLeftColor': 'red !important',
   *  'borderStyle': 'solid',
   *  'borderWidth': '50px 0 50px 100px',
   *  'height': '0',
   *  'width': '0',
   * }
   */

};function triangle(_ref) {
  var _ref2;

  var pointingDirection = _ref.pointingDirection,
      height = _ref.height,
      width = _ref.width,
      foregroundColor = _ref.foregroundColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === undefined ? 'transparent' : _ref$backgroundColor;

  var unitlessHeight = parseFloat(height);
  var unitlessWidth = parseFloat(width);
  if (isNaN(unitlessHeight) || isNaN(unitlessWidth)) {
    throw new Error('Passed an invalid value to `height` or `width`. Please provide a pixel based unit');
  }

  return _ref2 = {
    borderColor: backgroundColor,
    width: '0',
    height: '0',
    borderWidth: getBorderWidth(pointingDirection, unitlessHeight, unitlessWidth),
    borderStyle: 'solid'
  }, _ref2['border' + reverseDirection[pointingDirection] + 'Color'] = foregroundColor + ' !important', _ref2;
}

//      

/**
 * Provides an easy way to change the `wordWrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-word')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-word')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-word',
 *   wordWrap: 'break-word',
 *   wordBreak: 'break-all',
 * }
 */

function wordWrap() {
  var wrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'break-word';

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak: wordBreak
  };
}

//      


function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness) {
  var convert = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : convertToInt;

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  }

  // formular from https://en.wikipedia.org/wiki/HSL_and_HSV
  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));

  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

//      
var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'

  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */
};function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? '#' + namedColorMap[normalizedColorName] : color;
}

//      
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;

/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt('' + rgbMatched[1], 10),
      green: parseInt('' + rgbMatched[2], 10),
      blue: parseInt('' + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor);
  if (rgbaMatched) {
    return {
      red: parseInt('' + rgbaMatched[1], 10),
      green: parseInt('' + rgbaMatched[2], 10),
      blue: parseInt('' + rgbaMatched[3], 10),
      alpha: parseFloat('' + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt('' + hslMatched[1], 10);
    var saturation = parseInt('' + hslMatched[2], 10) / 100;
    var lightness = parseInt('' + hslMatched[3], 10) / 100;
    var rgbColorString = 'rgb(' + hslToRgb(hue, saturation, lightness) + ')';
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    return {
      red: parseInt('' + hslRgbMatched[1], 10),
      green: parseInt('' + hslRgbMatched[2], 10),
      blue: parseInt('' + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor);
  if (hslaMatched) {
    var _hue = parseInt('' + hslaMatched[1], 10);
    var _saturation = parseInt('' + hslaMatched[2], 10) / 100;
    var _lightness = parseInt('' + hslaMatched[3], 10) / 100;
    var _rgbColorString = 'rgb(' + hslToRgb(_hue, _saturation, _lightness) + ')';
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    return {
      red: parseInt('' + _hslRgbMatched[1], 10),
      green: parseInt('' + _hslRgbMatched[2], 10),
      blue: parseInt('' + _hslRgbMatched[3], 10),
      alpha: parseFloat('' + hslaMatched[4])
    };
  }
  throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
}

//      


function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;

  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return { hue: 0, saturation: 0, lightness: lightness };
    }
  }

  var hue = void 0;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;
  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }
  return { hue: hue, saturation: saturation, lightness: lightness };
}

//      

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

//      

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }
  return value;
};

//      
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue('#' + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue('#' + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new Error('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return 'rgba(' + rgbValue.red + ',' + rgbValue.green + ',' + rgbValue.blue + ',' + secondValue + ')';
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : 'rgba(' + firstValue + ',' + secondValue + ',' + thirdValue + ',' + fourthValue + ')';
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : 'rgba(' + firstValue.red + ',' + firstValue.green + ',' + firstValue.blue + ',' + firstValue.alpha + ')';
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).');
}

//      
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue('#' + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new Error('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
}

//      

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : 'rgba(' + hslToRgb(value, saturation, lightness) + ',' + alpha + ')';
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : 'rgba(' + hslToRgb(value.hue, value.saturation, value.lightness) + ',' + value.alpha + ')';
  }

  throw new Error('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).');
}

//      
var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};

var errMsg = 'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.';

/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */

function toColorString(color) {
  if (typeof color !== 'object') throw new Error(errMsg);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);

  throw new Error(errMsg);
}

//      

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js


// eslint-disable-next-line no-unused-vars


// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-redeclare


function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
}

// eslint-disable-next-line no-redeclare
function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

//      

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue(180, 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue(180, 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */
function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + degree) % 360
  }));
}

var curriedAdjustHue = /*#__PURE__*/curry(adjustHue);

//      

/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */
function complement(color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
}

//      

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

//      

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken(0.2, 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken(0.2, 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
function darken(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - amount)
  }));
}

var curriedDarken = /*#__PURE__*/curry(darken);

//      

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */
function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - amount)
  }));
}

var curriedDesaturate = /*#__PURE__*/curry(desaturate);

//      
/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */
function getLuminance(color) {
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

//      

/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */
function grayscale(color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: 0
  }));
}

//      

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */
function invert(color) {
  // parse color string to rgb
  var value = parseToRgb(color);
  return toColorString(_extends({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}

//      

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */
function lighten(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + amount)
  }));
}

var curriedLighten = /*#__PURE__*/curry(lighten);

//      

/**
 * Mixes two colors together by calculating the average of each of the RGB components.
 *
 * By default the weight is 0.5 meaning that half of the first color and half the second
 * color should be used. Optionally the weight can be modified by providing a number
 * as the first argument. 0.25 means that a quarter of the first color and three quarters
 * of the second color should be used.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */
function mix() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
  var color = arguments[1];
  var otherColor = arguments[2];

  var parsedColor1 = parseToRgb(color);
  var color1 = _extends({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);
  var color2 = _extends({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1

    // The formular is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
  });var alphaDelta = color1.alpha - color2.alpha;
  var x = weight * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;

  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (weight / 1.0)
  };

  return rgba(mixedColor);
}

var curriedMix = /*#__PURE__*/curry(mix);

//      
/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify(0.5, 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify(0.5, 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */
function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + amount * 100) / 100)
  });
  return rgba(colorWithAlpha);
}

var curriedOpacify = /*#__PURE__*/curry(opacify);

//      
/**
 * Selects black or white for best contrast depending on the luminosity of the given color.
 * Follows W3C specs for readability at https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('papayawhip'),
 *   color: readableColor('rgb(255,0,0)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('papayawhip')};
 *   color: ${readableColor('rgb(255,0,0)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   color: "#fff";
 *   color: "#fff";
 *   color: "#000";
 * }
 */

function readableColor(color) {
  return getLuminance(color) > 0.179 ? '#000' : '#fff';
}

var curriedReadableColor = /*#__PURE__*/curry(readableColor);

//      

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */
function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + amount)
  }));
}

var curriedSaturate = /*#__PURE__*/curry(saturate);

//      

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue(244, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue(244, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */
function setHue(hue, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    hue: hue
  }));
}

var curriedSetHue = /*#__PURE__*/curry(setHue);

//      

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */
function setLightness(lightness, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    lightness: lightness
  }));
}

var curriedSetLightness = /*#__PURE__*/curry(setLightness);

//      

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */
function setSaturation(saturation, color) {
  return toColorString(_extends({}, parseToHsl(color), {
    saturation: saturation
  }));
}

var curriedSetSaturation = /*#__PURE__*/curry(setSaturation);

//      

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) {
    throw new Error('Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1.');
  }
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }
  return curriedMix(percentage, color, 'rgb(0, 0, 0)');
}

var curriedShade = /*#__PURE__*/curry(shade);

//      

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) {
    throw new Error('Passed an incorrect argument to tint, please pass a percentage less than or equal to 1 and larger than or equal to -1.');
  }
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }
  return curriedMix(percentage, color, 'rgb(255, 255, 255)');
}

var curriedTint = /*#__PURE__*/curry(tint);

//      
/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize(0.5, 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize(0.5, 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */
function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - amount * 100) / 100)
  });
  return rgba(colorWithAlpha);
}

var curriedTransparentize = /*#__PURE__*/curry(transparentize);

//      

/** */

/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */
function animation() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Allow single or multiple animations passed
  var multiMode = Array.isArray(args[0]);
  if (!multiMode && args.length > 8) {
    throw new Error('The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation');
  }
  var code = args.map(function (arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new Error("To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')");
    }
    if (Array.isArray(arg) && arg.length > 8) {
      throw new Error('The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation');
    }

    return Array.isArray(arg) ? arg.join(' ') : arg;
  }).join(', ');

  return {
    animation: code
  };
}

//      

/**
 * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */

function backgroundImages() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    backgroundImage: properties.join(', ')
  };
}

//      

/**
 * Shorthand that accepts any number of background values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */
function backgrounds() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    background: properties.join(', ')
  };
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */

function borderColor() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['borderColor'].concat(values));
}

//      
/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */

function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);
  if (!radius && radius !== 0) {
    throw new Error('borderRadius expects a radius value as a string or number as the second argument.');
  }
  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    var _ref;

    return _ref = {}, _ref['border' + uppercaseSide + 'RightRadius'] = radius, _ref['border' + uppercaseSide + 'LeftRadius'] = radius, _ref;
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    var _ref2;

    return _ref2 = {}, _ref2['borderTop' + uppercaseSide + 'Radius'] = radius, _ref2['borderBottom' + uppercaseSide + 'Radius'] = radius, _ref2;
  }

  throw new Error('borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.');
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */

function borderStyle() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['borderStyle'].concat(values));
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */
function borderWidth() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['borderWidth'].concat(values));
}

//      


function generateSelectors(template, state) {
  var stateSuffix = state ? ':' + state : '';
  return template(stateSuffix);
}

/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */
function statefulSelectors(states, template, stateMap) {
  if (!template) throw new Error('You must provide a template to this method.');
  if (states.length === 0) return generateSelectors(template, null);
  var selectors = [];
  for (var i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) {
      throw new Error('You passed an unsupported selector state to this method.');
    }
    selectors.push(generateSelectors(template, states[i]));
  }
  selectors = selectors.join(',');
  return selectors;
}

//      
var stateMap = [undefined, null, 'active', 'focus', 'hover'];

function template(state) {
  return 'button' + state + ',\n  input[type="button"]' + state + ',\n  input[type="reset"]' + state + ',\n  input[type="submit"]' + state;
}

/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */

function buttons() {
  for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template, stateMap);
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'marginTop': '12px',
 *   'marginRight': '24px',
 *   'marginBottom': '36px',
 *   'marginLeft': '48px'
 * }
 */

function margin() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['margin'].concat(values));
}

//      
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */

function padding() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(undefined, ['padding'].concat(values));
}

//      
var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];

/**
 * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...position('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...position('absolute', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('absolute', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'position': 'absolute',
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 */

function position(positionKeyword) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (positionMap$1.indexOf(positionKeyword) >= 0) {
    return _extends({
      position: positionKeyword
    }, directionalProperty.apply(undefined, [''].concat(values)));
  } else {
    var firstValue = positionKeyword; // in this case position is actually the first value
    return directionalProperty.apply(undefined, ['', firstValue].concat(values));
  }
}

//      

/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */

function size(height) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : height;

  return {
    height: height,
    width: width
  };
}

//      
var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

function template$1(state) {
  return 'input[type="color"]' + state + ',\n    input[type="date"]' + state + ',\n    input[type="datetime"]' + state + ',\n    input[type="datetime-local"]' + state + ',\n    input[type="email"]' + state + ',\n    input[type="month"]' + state + ',\n    input[type="number"]' + state + ',\n    input[type="password"]' + state + ',\n    input[type="search"]' + state + ',\n    input[type="tel"]' + state + ',\n    input[type="text"]' + state + ',\n    input[type="time"]' + state + ',\n    input[type="url"]' + state + ',\n    input[type="week"]' + state + ',\n    input:not([type])' + state + ',\n    textarea' + state;
}

/**
 * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'input[type="color"]:active,
 *  input[type="date"]:active,
 *  input[type="datetime"]:active,
 *  input[type="datetime-local"]:active,
 *  input[type="email"]:active,
 *  input[type="month"]:active,
 *  input[type="number"]:active,
 *  input[type="password"]:active,
 *  input[type="search"]:active,
 *  input[type="tel"]:active,
 *  input[type="text"]:active,
 *  input[type="time"]:active,
 *  input[type="url"]:active,
 *  input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */

function textInputs() {
  for (var _len = arguments.length, states = Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template$1, stateMap$1);
}

//      

/**
 * Shorthand that accepts any number of transition values as parameters for creating a single transition statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 * }
 */

function transitions() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    transition: properties.join(', ')
  };
}

//      
// Helpers
// Mixins
// Color
// Shorthands




/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_blurb_header__ = __webpack_require__("./src/blurb-header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_content_grid__ = __webpack_require__("./src/content-grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_footer__ = __webpack_require__("./src/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_global_styles__ = __webpack_require__("./src/global-styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_head__ = __webpack_require__("./src/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_header__ = __webpack_require__("./src/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_toc__ = __webpack_require__("./src/toc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_types__ = __webpack_require__("./src/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_vars__ = __webpack_require__("./src/vars.js");
var _jsxFileName = "/Users/jaketrent/dev/gowiththeflowtype-site/pages/index.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();











var ArrowLink = function ArrowLink(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-2274262254" + " " + "link"
  }, props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2274262254" + " " + "arrow"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Arrow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2274262254",
    css: ".link.jsx-2274262254{position:relative;font-size:1.125rem;}.arrow.jsx-2274262254{position:absolute;top:3px;right:-24px;height:24px;width:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHMkIsQUFJQSxrQkFIQyxBQUlYLFFBQ0ksV0FKZCxDQUtjLFlBQ0QsV0FDYiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFrZXRyZW50L2Rldi9nb3dpdGh0aGVmbG93dHlwZS1zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsdXJiSGVhZGVyIGZyb20gJy4uL3NyYy9ibHVyYi1oZWFkZXInXG5pbXBvcnQgQ29udGVudEdyaWQgZnJvbSAnLi4vc3JjL2NvbnRlbnQtZ3JpZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3RlcidcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi4vc3JjL2dsb2JhbC1zdHlsZXMnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9zcmMvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2hlYWRlcidcbmltcG9ydCBUb0MgZnJvbSAnLi4vc3JjL3RvYydcbmltcG9ydCBUeXBlcyBmcm9tICcuLi9zcmMvdHlwZXMnXG5pbXBvcnQgdmFycyBmcm9tICcuLi9zcmMvdmFycydcblxuY29uc3QgQXJyb3dMaW5rID0gcHJvcHMgPT4gKFxuICA8YSBocmVmPXtwcm9wcy5ocmVmfSBjbGFzc05hbWU9XCJsaW5rXCI+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCI+XG4gICAgICA8QXJyb3cgLz5cbiAgICA8L3NwYW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmsge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICB9XG4gICAgICAuYXJyb3cge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogM3B4O1xuICAgICAgICByaWdodDogLTI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2E+XG4pXG5cbmNvbnN0IEFycm93ID0gXyA9PiAoXG4gIDxzdmdcbiAgICByb2xlPVwiaW1nXCJcbiAgICBhcmlhLWxhYmVsPVwiY2FyZXQgcmlnaHQgaWNvblwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTE2IDEybC01LTUtMS40MSAxLjQxTDEzLjE3IDEybC0zLjU4IDMuNTlMMTEgMTdcIiAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgIGB9PC9zdHlsZT5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IEJsdXJiID0gcHJvcHMgPT4gKFxuICA8YXJ0aWNsZT5cbiAgICA8Qmx1cmJIZWFkZXI+e3Byb3BzLnRpdGxlfTwvQmx1cmJIZWFkZXI+XG4gICAgPHA+e3Byb3BzLmNoaWxkcmVufTwvcD5cbiAgICB7cHJvcHMuZm9vdGVyfVxuICA8L2FydGljbGU+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8Q29udGVudEdyaWQ+XG4gICAgICA8Qmx1cmJcbiAgICAgICAgdGl0bGU9XCJXaHkgdHlwZXM/XCJcbiAgICAgICAgZm9vdGVyPXs8QXJyb3dMaW5rIGhyZWY9XCJcIj5MZWFybiBtb3JlPC9BcnJvd0xpbms+fVxuICAgICAgPlxuICAgICAgICBXYW50IHRvIGtub3cgaWYgeW91ciBwcm9ncmFtIGlzIGNvcnJlY3QgYmVmb3JlIHlvdSBzaGlwIGl0IHRvIHRoZVxuICAgICAgICBicm93c2VyPyBUeXBlcyBjYW4gaGVscCB5b3Uga25vdyBpZiB5b3VyIGNvZGUgaW50ZWdyYXRlcyB3ZWxsIHRvZ2V0aGVyLlxuICAgICAgICBXYW50IG1vcmUgaW5zaWdodCBpbnRvIGRldmVsb3BlciBpbnRlbnQgd2hlbiByZWFkaW5nIGNvZGU/IFR5cGVzIGNhblxuICAgICAgICBoZWxwIGV4cG9zZSB0aGF0IGJldHRlci4gV2FudCBtb3JlIGZlZWRiYWNrIHdoaWxlIHlvdXIgY29kaW5nIGZvciBhIG1vcmVcbiAgICAgICAgY29uZmlkZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2U/IFR5cGluZyBhbmQgY29tcGlsaW5nIHlvdXIgY29kZSBjYW5cbiAgICAgICAgaGVscCB3aXRoIHRoYXQgdG9vLlxuICAgICAgPC9CbHVyYj5cbiAgICAgIDxCbHVyYlxuICAgICAgICB0aXRsZT1cIldoeSBGbG93P1wiXG4gICAgICAgIGZvb3Rlcj17PEFycm93TGluayBocmVmPVwiaHR0cHM6Ly9mbG93Lm9yZy9cIj5PZmZpY2lhbCBkb2NzPC9BcnJvd0xpbms+fVxuICAgICAgPlxuICAgICAgICBGbG93LCBvciBGbG93dHlwZSwgaXMgYSBzdHJvbmcsIHN0YXRpYyB0eXBpbmcgc3lzdGVtIGZvciBKYXZhU2NyaXB0LlxuICAgICAgICBLZWVwIHlvdXIgbGFuZ3VhZ2UsIHlvdXIgdG9vbGNoYWluLCB5b3VyIHRhbGVudCBwb29sLCBhbmQgZ2V0IHNvbWUgZ3JlYXRcbiAgICAgICAgYmVuZWZpdHMuIEFkZCB0eXBlcyBpbiB5b3VyIEphdmFTY3JpcHQgcHJvamVjdCB3aGVyZSB5b3Ugd2FudCBvciBuZWVkXG4gICAgICAgIHRoZW0sIGdyYWR1YWxseS5cbiAgICAgIDwvQmx1cmI+XG4gICAgICA8Qmx1cmJcbiAgICAgICAgdGl0bGU9XCJUYWtlIHRoZSBDb3Vyc2VcIlxuICAgICAgICBmb290ZXI9e1s8VG9DIC8+LCA8QXJyb3dMaW5rIGhyZWY9XCJcIj5TdGFydCB0aGUgY291cnNlPC9BcnJvd0xpbms+XX1cbiAgICAgID5cbiAgICAgICAgSGVhciB0aGUgcXVpY2sgcGl0Y2ggb24gRmxvdyBhbmQgdGhlbiBzZWUgRmxvdyBpbiBhY3Rpb24gaW4gYSByZWFsLXdvcmxkXG4gICAgICAgIHByb2plY3QgZW52aXJvbm1lbnQuIFRoaXMgaXNuJ3QgYW4gYWNhZGVtaWMgcmV2aWV3IG9mIGFsbCB0aGUgZmVhdHVyZXNcbiAgICAgICAgb2YgRmxvdy4gVGhpcyBpcyBzZWVpbmcgdGhvc2UgZnVuZGFtZW50YWwgZmVhdHVyZXMgdXNlZCBpbiB0aGUgY291cnNlIG9mXG4gICAgICAgIGNyZWF0aW5nIGEgcmVhbCBwcm9qZWN0LlxuICAgICAgPC9CbHVyYj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxCbHVyYlxuICAgICAgICAgIHRpdGxlPVwiVGhlIFByb2plY3RcIlxuICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICA8QXJyb3dMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamFrZXRyZW50L2dvd2l0aHRoZWZsb3d0eXBlLW1hdGVyaWFsc1wiPlxuICAgICAgICAgICAgICBHaXRodWIgZmlsZXNcbiAgICAgICAgICAgIDwvQXJyb3dMaW5rPlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIFRvIGRlbW9uc3RyYXRlIEZsb3csIHdlIG1ha2UgYSBjaG9vc2UgeW91ciBvd24gYWR2ZW50dXJlIGdhbWUsIHdoZXJlXG4gICAgICAgICAgdGhlIG5hcnJhdGl2ZSBpcyBjaG9zZW4gYnkgdGhlIHJlYWRlciBvdmVyIHRpbWUuIEl0J3MgYSBzaWxseSB0YWxlIG9mXG4gICAgICAgICAgZ2FsYWN0aWMgdHJlYWNoZXJ5IGFuZCBsb3lhbCBmcmllbmRzLiBXZSBzdGFydCB3aXRoIGFuIGVtcHR5IGRpcmVjdG9yeVxuICAgICAgICAgIGFuZCBlbmQgd2l0aCBhIHNtYWxsLCBmdWxseS1mbG93dHlwZWQgd2ViIGFwcGxpY2F0aW9uLlxuICAgICAgICA8L0JsdXJiPlxuICAgICAgICA8VHlwZXMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGVudEdyaWQ+XG4gICAgPEZvb3RlciAvPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
  }));
};

var Arrow = function Arrow(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    role: "img",
    "aria-label": "caret right icon",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-2853667787"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M16 12l-5-5-1.41 1.41L13.17 12l-3.58 3.59L11 17",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-2853667787"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2853667787",
    css: ".jsx-2853667787{height:100%;width:100%;fill:currentColor;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDZ0IsQUFFbUIsWUFDRCxXQUNPLGtCQUNwQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFrZXRyZW50L2Rldi9nb3dpdGh0aGVmbG93dHlwZS1zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsdXJiSGVhZGVyIGZyb20gJy4uL3NyYy9ibHVyYi1oZWFkZXInXG5pbXBvcnQgQ29udGVudEdyaWQgZnJvbSAnLi4vc3JjL2NvbnRlbnQtZ3JpZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2Zvb3RlcidcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi4vc3JjL2dsb2JhbC1zdHlsZXMnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9zcmMvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2hlYWRlcidcbmltcG9ydCBUb0MgZnJvbSAnLi4vc3JjL3RvYydcbmltcG9ydCBUeXBlcyBmcm9tICcuLi9zcmMvdHlwZXMnXG5pbXBvcnQgdmFycyBmcm9tICcuLi9zcmMvdmFycydcblxuY29uc3QgQXJyb3dMaW5rID0gcHJvcHMgPT4gKFxuICA8YSBocmVmPXtwcm9wcy5ocmVmfSBjbGFzc05hbWU9XCJsaW5rXCI+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCI+XG4gICAgICA8QXJyb3cgLz5cbiAgICA8L3NwYW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmsge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICB9XG4gICAgICAuYXJyb3cge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogM3B4O1xuICAgICAgICByaWdodDogLTI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2E+XG4pXG5cbmNvbnN0IEFycm93ID0gXyA9PiAoXG4gIDxzdmdcbiAgICByb2xlPVwiaW1nXCJcbiAgICBhcmlhLWxhYmVsPVwiY2FyZXQgcmlnaHQgaWNvblwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTE2IDEybC01LTUtMS40MSAxLjQxTDEzLjE3IDEybC0zLjU4IDMuNTlMMTEgMTdcIiAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgIGB9PC9zdHlsZT5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IEJsdXJiID0gcHJvcHMgPT4gKFxuICA8YXJ0aWNsZT5cbiAgICA8Qmx1cmJIZWFkZXI+e3Byb3BzLnRpdGxlfTwvQmx1cmJIZWFkZXI+XG4gICAgPHA+e3Byb3BzLmNoaWxkcmVufTwvcD5cbiAgICB7cHJvcHMuZm9vdGVyfVxuICA8L2FydGljbGU+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8Q29udGVudEdyaWQ+XG4gICAgICA8Qmx1cmJcbiAgICAgICAgdGl0bGU9XCJXaHkgdHlwZXM/XCJcbiAgICAgICAgZm9vdGVyPXs8QXJyb3dMaW5rIGhyZWY9XCJcIj5MZWFybiBtb3JlPC9BcnJvd0xpbms+fVxuICAgICAgPlxuICAgICAgICBXYW50IHRvIGtub3cgaWYgeW91ciBwcm9ncmFtIGlzIGNvcnJlY3QgYmVmb3JlIHlvdSBzaGlwIGl0IHRvIHRoZVxuICAgICAgICBicm93c2VyPyBUeXBlcyBjYW4gaGVscCB5b3Uga25vdyBpZiB5b3VyIGNvZGUgaW50ZWdyYXRlcyB3ZWxsIHRvZ2V0aGVyLlxuICAgICAgICBXYW50IG1vcmUgaW5zaWdodCBpbnRvIGRldmVsb3BlciBpbnRlbnQgd2hlbiByZWFkaW5nIGNvZGU/IFR5cGVzIGNhblxuICAgICAgICBoZWxwIGV4cG9zZSB0aGF0IGJldHRlci4gV2FudCBtb3JlIGZlZWRiYWNrIHdoaWxlIHlvdXIgY29kaW5nIGZvciBhIG1vcmVcbiAgICAgICAgY29uZmlkZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2U/IFR5cGluZyBhbmQgY29tcGlsaW5nIHlvdXIgY29kZSBjYW5cbiAgICAgICAgaGVscCB3aXRoIHRoYXQgdG9vLlxuICAgICAgPC9CbHVyYj5cbiAgICAgIDxCbHVyYlxuICAgICAgICB0aXRsZT1cIldoeSBGbG93P1wiXG4gICAgICAgIGZvb3Rlcj17PEFycm93TGluayBocmVmPVwiaHR0cHM6Ly9mbG93Lm9yZy9cIj5PZmZpY2lhbCBkb2NzPC9BcnJvd0xpbms+fVxuICAgICAgPlxuICAgICAgICBGbG93LCBvciBGbG93dHlwZSwgaXMgYSBzdHJvbmcsIHN0YXRpYyB0eXBpbmcgc3lzdGVtIGZvciBKYXZhU2NyaXB0LlxuICAgICAgICBLZWVwIHlvdXIgbGFuZ3VhZ2UsIHlvdXIgdG9vbGNoYWluLCB5b3VyIHRhbGVudCBwb29sLCBhbmQgZ2V0IHNvbWUgZ3JlYXRcbiAgICAgICAgYmVuZWZpdHMuIEFkZCB0eXBlcyBpbiB5b3VyIEphdmFTY3JpcHQgcHJvamVjdCB3aGVyZSB5b3Ugd2FudCBvciBuZWVkXG4gICAgICAgIHRoZW0sIGdyYWR1YWxseS5cbiAgICAgIDwvQmx1cmI+XG4gICAgICA8Qmx1cmJcbiAgICAgICAgdGl0bGU9XCJUYWtlIHRoZSBDb3Vyc2VcIlxuICAgICAgICBmb290ZXI9e1s8VG9DIC8+LCA8QXJyb3dMaW5rIGhyZWY9XCJcIj5TdGFydCB0aGUgY291cnNlPC9BcnJvd0xpbms+XX1cbiAgICAgID5cbiAgICAgICAgSGVhciB0aGUgcXVpY2sgcGl0Y2ggb24gRmxvdyBhbmQgdGhlbiBzZWUgRmxvdyBpbiBhY3Rpb24gaW4gYSByZWFsLXdvcmxkXG4gICAgICAgIHByb2plY3QgZW52aXJvbm1lbnQuIFRoaXMgaXNuJ3QgYW4gYWNhZGVtaWMgcmV2aWV3IG9mIGFsbCB0aGUgZmVhdHVyZXNcbiAgICAgICAgb2YgRmxvdy4gVGhpcyBpcyBzZWVpbmcgdGhvc2UgZnVuZGFtZW50YWwgZmVhdHVyZXMgdXNlZCBpbiB0aGUgY291cnNlIG9mXG4gICAgICAgIGNyZWF0aW5nIGEgcmVhbCBwcm9qZWN0LlxuICAgICAgPC9CbHVyYj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxCbHVyYlxuICAgICAgICAgIHRpdGxlPVwiVGhlIFByb2plY3RcIlxuICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICA8QXJyb3dMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamFrZXRyZW50L2dvd2l0aHRoZWZsb3d0eXBlLW1hdGVyaWFsc1wiPlxuICAgICAgICAgICAgICBHaXRodWIgZmlsZXNcbiAgICAgICAgICAgIDwvQXJyb3dMaW5rPlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIFRvIGRlbW9uc3RyYXRlIEZsb3csIHdlIG1ha2UgYSBjaG9vc2UgeW91ciBvd24gYWR2ZW50dXJlIGdhbWUsIHdoZXJlXG4gICAgICAgICAgdGhlIG5hcnJhdGl2ZSBpcyBjaG9zZW4gYnkgdGhlIHJlYWRlciBvdmVyIHRpbWUuIEl0J3MgYSBzaWxseSB0YWxlIG9mXG4gICAgICAgICAgZ2FsYWN0aWMgdHJlYWNoZXJ5IGFuZCBsb3lhbCBmcmllbmRzLiBXZSBzdGFydCB3aXRoIGFuIGVtcHR5IGRpcmVjdG9yeVxuICAgICAgICAgIGFuZCBlbmQgd2l0aCBhIHNtYWxsLCBmdWxseS1mbG93dHlwZWQgd2ViIGFwcGxpY2F0aW9uLlxuICAgICAgICA8L0JsdXJiPlxuICAgICAgICA8VHlwZXMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGVudEdyaWQ+XG4gICAgPEZvb3RlciAvPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
  }));
};

var Blurb = function Blurb(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_blurb_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, props.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, props.children), props.footer);
};

var _default = function _default(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_head__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_global_styles__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_content_grid__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Blurb, {
    title: "Why types?",
    footer: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ArrowLink, {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }, "Learn more"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "Want to know if your program is correct before you ship it to the browser? Types can help you know if your code integrates well together. Want more insight into developer intent when reading code? Types can help expose that better. Want more feedback while your coding for a more confident development experience? Typing and compiling your code can help with that too."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Blurb, {
    title: "Why Flow?",
    footer: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ArrowLink, {
      href: "https://flow.org/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    }, "Official docs"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, "Flow, or Flowtype, is a strong, static typing system for JavaScript. Keep your language, your toolchain, your talent pool, and get some great benefits. Add types in your JavaScript project where you want or need them, gradually."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Blurb, {
    title: "Take the Course",
    footer: [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_toc__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ArrowLink, {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    }, "Start the course")],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "Hear the quick pitch on Flow and then see Flow in action in a real-world project environment. This isn't an academic review of all the features of Flow. This is seeing those fundamental features used in the course of creating a real project."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Blurb, {
    title: "The Project",
    footer: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ArrowLink, {
      href: "https://github.com/jaketrent/gowiththeflowtype-materials",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      }
    }, "Github files"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "To demonstrate Flow, we make a choose your own adventure game, where the narrative is chosen by the reader over time. It's a silly tale of galactic treachery and loyal friends. We start with an empty directory and end with a small, fully-flowtyped web application."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_types__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ArrowLink, "ArrowLink", "/Users/jaketrent/dev/gowiththeflowtype-site/pages/index.js");
  reactHotLoader.register(Arrow, "Arrow", "/Users/jaketrent/dev/gowiththeflowtype-site/pages/index.js");
  reactHotLoader.register(Blurb, "Blurb", "/Users/jaketrent/dev/gowiththeflowtype-site/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/blurb-header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vars__ = __webpack_require__("./src/vars.js");
var _jsxFileName = "/Users/jaketrent/dev/gowiththeflowtype-site/src/blurb-header.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["761056802", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueDark]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["761056802", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueDark]]])
  }, props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "761056802",
    css: "h2.__jsx-style-dynamic-selector{color:".concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueDark, ";}@media screen and (min-width:769px){h2.__jsx-style-dynamic-selector{font-size:1.75rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ibHVyYi1oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBRzRDLEFBSWYsa0JBQ3BCLGlCQUpGIiwiZmlsZSI6InNyYy9ibHVyYi1oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pha2V0cmVudC9kZXYvZ293aXRodGhlZmxvd3R5cGUtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YXJzIGZyb20gJy4vdmFycydcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxoMj57cHJvcHMuY2hpbGRyZW59PC9oMj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAke3ZhcnMuY29sb3JzLmJsdWVEYXJrfTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuIl19 */\n/*@ sourceURL=src/blurb-header.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueDark]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/src/blurb-header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/content-grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vars__ = __webpack_require__("./src/vars.js");
var _jsxFileName = "/Users/jaketrent/dev/gowiththeflowtype-site/src/content-grid.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["882023594", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.grayDark, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge]]]) + " " + "content"
  }, props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "882023594",
    css: ".content.__jsx-style-dynamic-selector{position:relative;display:grid;grid-template-columns:1fr;gap:".concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, ";width:100%;padding:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, ";color:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.grayDark, ";background:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, ";}@media screen and (min-width:769px){.content.__jsx-style-dynamic-selector{grid-template-columns:1fr 1fr;gap:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, ";}}@media screen and (min-width:1261px){.content.__jsx-style-dynamic-selector{padding:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, " calc((100vw - 1200px) / 2) ").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, " calc((100vw - 1200px) / 2);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250ZW50LWdyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBRzJCLEFBV2MsQUFPMkIsa0JBakI5QyxZQVdzQixDQVZULDBCQUNPLE1BVWpDLDJCQVRXLFdBQzBCLG1CQWNyQyxrQkFibUMsbUNBQ0ssd0NBQzFDIiwiZmlsZSI6InNyYy9jb250ZW50LWdyaWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pha2V0cmVudC9kZXYvZ293aXRodGhlZmxvd3R5cGUtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YXJzIGZyb20gJy4vdmFycydcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBnYXA6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1hMYXJnZX07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdMYXJnZX07XG4gICAgICAgIGNvbG9yOiAke3ZhcnMuY29sb3JzLmdyYXlEYXJrfTtcbiAgICAgICAgYmFja2dyb3VuZDogJHt2YXJzLmNvbG9ycy5ibHVlR3JlZW59O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICBnYXA6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1hMYXJnZX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjFweCkge1xuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogJHt2YXJzLmxheW91dC5zcGFjaW5nWExhcmdlfSBjYWxjKCgxMDB2dyAtIDEyMDBweCkgLyAyKVxuICAgICAgICAgICAgJHt2YXJzLmxheW91dC5zcGFjaW5nWExhcmdlfSBjYWxjKCgxMDB2dyAtIDEyMDBweCkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=src/content-grid.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.grayDark, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingXLarge]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/src/content-grid.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vars__ = __webpack_require__("./src/vars.js");
var _jsxFileName = "/Users/jaketrent/dev/gowiththeflowtype-site/src/footer.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var now = function now(_) {
  return new Date().getFullYear();
};

var Bubbles = function Bubbles(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    viewBox: "0 0 100 300",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "61.548",
    cy: "102.061",
    r: "18.94",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "34.916",
    cy: "161.062",
    r: "11.062",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "65.152",
    cy: "200.855",
    r: "3.604",
    transform: "translate(-6.956 -6.12)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "36.845",
    cy: "183.733",
    r: "1.929",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "67.933",
    cy: "134.298",
    r: "6.386",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "61.588",
    cy: "156.345",
    r: "6.345",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "35.006",
    cy: "175.204",
    r: "6.6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "56.956",
    cy: "132.833",
    r: "10.977",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "59.252",
    cy: "187.958",
    r: "2.296",
    transform: "translate(-6.956 -6.12)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "71.126",
    cy: "188.855",
    r: "3.193",
    transform: "translate(-13.342 -3.825)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "71.126",
    cy: "188.855",
    r: "3.193",
    transform: "translate(-19.26 19.76)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "71.126",
    cy: "188.855",
    r: "3.193",
    transform: "matrix(.82692 0 0 .82692 -4.309 62.306)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "45.803",
    cy: "114.601",
    r: "4.197",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "38.306",
    cy: "136.133",
    r: "3.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "51.867",
    cy: "145.678",
    r: "1.867",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["294465965", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "294465965",
    css: ".__jsx-style-dynamic-selector{position:absolute;bottom:-150px;right:0;height:500px;fill:".concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENnQixBQUV5QixrQkFDSixjQUNOLFFBQ0ssYUFDcUIsa0NBQ3BDIiwiZmlsZSI6InNyYy9mb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pha2V0cmVudC9kZXYvZ293aXRodGhlZmxvd3R5cGUtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YXJzIGZyb20gJy4vdmFycydcblxuY29uc3Qgbm93ID0gXyA9PiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblxuY29uc3QgQnViYmxlcyA9IF8gPT4gKFxuICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDMwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8Y2lyY2xlIGN4PVwiNjEuNTQ4XCIgY3k9XCIxMDIuMDYxXCIgcj1cIjE4Ljk0XCIgLz5cbiAgICA8Y2lyY2xlIGN4PVwiMzQuOTE2XCIgY3k9XCIxNjEuMDYyXCIgcj1cIjExLjA2MlwiIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCI2NS4xNTJcIlxuICAgICAgY3k9XCIyMDAuODU1XCJcbiAgICAgIHI9XCIzLjYwNFwiXG4gICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTYuOTU2IC02LjEyKVwiXG4gICAgLz5cbiAgICA8Y2lyY2xlIGN4PVwiMzYuODQ1XCIgY3k9XCIxODMuNzMzXCIgcj1cIjEuOTI5XCIgLz5cbiAgICA8Y2lyY2xlIGN4PVwiNjcuOTMzXCIgY3k9XCIxMzQuMjk4XCIgcj1cIjYuMzg2XCIgLz5cbiAgICA8Y2lyY2xlIGN4PVwiNjEuNTg4XCIgY3k9XCIxNTYuMzQ1XCIgcj1cIjYuMzQ1XCIgLz5cbiAgICA8Y2lyY2xlIGN4PVwiMzUuMDA2XCIgY3k9XCIxNzUuMjA0XCIgcj1cIjYuNlwiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjU2Ljk1NlwiIGN5PVwiMTMyLjgzM1wiIHI9XCIxMC45NzdcIiAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiNTkuMjUyXCJcbiAgICAgIGN5PVwiMTg3Ljk1OFwiXG4gICAgICByPVwiMi4yOTZcIlxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC02Ljk1NiAtNi4xMilcIlxuICAgIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCI3MS4xMjZcIlxuICAgICAgY3k9XCIxODguODU1XCJcbiAgICAgIHI9XCIzLjE5M1wiXG4gICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEzLjM0MiAtMy44MjUpXCJcbiAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiNzEuMTI2XCJcbiAgICAgIGN5PVwiMTg4Ljg1NVwiXG4gICAgICByPVwiMy4xOTNcIlxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xOS4yNiAxOS43NilcIlxuICAgIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCI3MS4xMjZcIlxuICAgICAgY3k9XCIxODguODU1XCJcbiAgICAgIHI9XCIzLjE5M1wiXG4gICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoLjgyNjkyIDAgMCAuODI2OTIgLTQuMzA5IDYyLjMwNilcIlxuICAgIC8+XG4gICAgPGNpcmNsZSBjeD1cIjQ1LjgwM1wiIGN5PVwiMTE0LjYwMVwiIHI9XCI0LjE5N1wiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjM4LjMwNlwiIGN5PVwiMTM2LjEzM1wiIHI9XCIzLjNcIiAvPlxuICAgIDxjaXJjbGUgY3g9XCI1MS44NjdcIiBjeT1cIjE0NS42NzhcIiByPVwiMS44NjdcIiAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTE1MHB4O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgZmlsbDogJHt2YXJzLmNvbG9ycy5ibHVlR3JlZW59O1xuICAgIGB9PC9zdHlsZT5cbiAgPC9zdmc+XG4pXG5leHBvcnQgZGVmYXVsdCBfID0+IChcbiAgPGRpdj5cbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJjdXJ2ZVwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDEyMDAgMTAwXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCA1Ny43NTZjMjI5LjM3MS0xNi40NDIgMzQ5LjIzNiAxNS45ODMgNDM1LjUzMSAxNC44MjcgNjUuMjA5LS44NzQgMzk0LjQyOC00Ny45MjkgNTI5LjA5Mi0zNi4zNTlDMTA5OS4yOSA0Ny43OTQgMTIwMCA3NS4zOCAxMjAwIDc1LjM4VjEwMEgwXCIgLz5cbiAgICA8L3N2Zz5cbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgPEJ1YmJsZXMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJvZHlcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXItaW52aXRlXCI+XG4gICAgICAgICAgICBDaGVjayBvdXQgc29tZSBvZiBteSBvdGhlciB0ZWNoIHNoZW5hbmlnYW5zIGJ5IHZpc2l0aW5nIG15eycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamFrZXRyZW50XCI+R2l0aHViPC9hPiBvciBieSBnb2luZyB0bzp7JyAnfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb290ZXItaW52aXRlLWxpbmtcIiBocmVmPVwiaHR0cDovL2pha2V0cmVudC5jb21cIj5cbiAgICAgICAgICAgIGpha2V0cmVudC5jb21cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+XG4gICAgICAgICAgICBDb3Vyc2UgJmNvcHk7IHtub3coKX0gUGx1cmFsc2lnaHQ7IHRoaXMgcGFnZSAmY29weTsge25vdygpfSBKYWtlXG4gICAgICAgICAgICBUcmVudCA8YnIgLz5cbiAgICAgICAgICAgIFRoaXMgY29udGVudCB1c2VzIGFmZmlsaWF0ZSBsaW5rcy5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7dmFycy5jb2xvcnMueWVsbG93fTtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dmFycy5jb2xvcnMuYmx1ZX07XG4gICAgICAgIGNvbG9yOiAke3ZhcnMuY29sb3JzLndoaXRlfTtcbiAgICAgIH1cbiAgICAgIC5jdXJ2ZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmaWxsOiAke3ZhcnMuY29sb3JzLmJsdWV9O1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3ZhcnMuY29sb3JzLmJsdWVHcmVlbn07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgICB9XG4gICAgICAuZm9vdGVyLWJvZHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdhcDogJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9O1xuICAgICAgfVxuICAgICAgLmZvb3Rlci1pbnZpdGUtbGluayB7XG4gICAgICAgIGZvbnQ6IDAvMCBhO1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWcvamFrZXRyZW50LWxvZ28td2hpdGUucG5nKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBoZWlnaHQ6IDY5LjM3NXB4O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdMYXJnZX07XG4gICAgICB9XG4gICAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xMjVyZW07XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICAuZm9vdGVyLWJvZHkge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgfVxuICAgICAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI2MXB4KSB7XG4gICAgICAgIC5mb290ZXItYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=src/footer.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen]
  }));
};

var _default = function _default(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    viewBox: "0 0 1200 100",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "curve"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M0 57.756c229.371-16.442 349.236 15.983 435.531 14.827 65.209-.874 394.428-47.929 529.092-36.359C1099.29 47.794 1200 75.38 1200 75.38V100H0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "footer"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Bubbles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "footer-body"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "footer-invite"
  }, "Check out some of my other tech shenanigans by visiting my", ' ', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://github.com/jaketrent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]])
  }, "Github"), " or by going to:", ' '), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "http://jaketrent.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "footer-invite-link"
  }, "jaketrent.com")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "copyright"
  }, "Course \xA9 ", now(), " Pluralsight; this page \xA9 ", now(), " Jake Trent ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["920670184", [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]]])
  }), "This content uses affiliate links.")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "920670184",
    css: "a.__jsx-style-dynamic-selector:hover{color:".concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, ";}.footer.__jsx-style-dynamic-selector{position:relative;z-index:1;overflow:hidden;background:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, ";color:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, ";}.curve.__jsx-style-dynamic-selector{width:100%;fill:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, ";background:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, ";margin-bottom:-8px;}.footer-body.__jsx-style-dynamic-selector{position:relative;width:1200px;max-width:100%;display:grid;grid-template-columns:1fr;gap:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, ";margin:0 auto;padding:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, ";}.footer-invite-link.__jsx-style-dynamic-selector{font:0/0 a;text-shadow:none;color:transparent;background:url(/static/img/jaketrent-logo-white.png) center no-repeat;background-size:cover;height:69.375px;width:250px;border:1px solid transparent;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, ";}.copyright.__jsx-style-dynamic-selector{font-size:0.75rem;line-height:1.125rem;}@media screen and (min-width:769px){.footer-body.__jsx-style-dynamic-selector{grid-template-columns:1fr 1fr;}.copyright.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;height:100%;text-align:right;}}@media screen and (min-width:1261px){.footer-body.__jsx-style-dynamic-selector{padding:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, " 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZnQixBQUc0QyxBQUdqQixBQU9QLEFBTU8sQUFVUCxBQVdPLEFBS2MsQUFHakIsQUFTMEIsV0EzQ1AsQUFnQmpCLE9BdkJQLEFBYUcsQUFxQlEsVUFqQ0wsQUF1QkUsRUFlbEIsQ0F6QmUsSUFqQmpCLElBc0NBLEFBZ0JFLEtBakR3QyxDQU1BLENBTzNCLEFBVXlELGFBVDVDLGVBMEJDLFVBdkNRLENBTWhCLEFBUWMsbUJBUG5DLFlBZ0J3QixFQVJSLENBZGhCLGFBZXVDLE1BUXJCLGdCQUNKLFlBQ2lCLEdBVC9CLEVBdUJ5Qix3QkFib0IsMkNBQzdDLGtDQWFnQixZQUNLLGlCQUNuQiIsImZpbGUiOiJzcmMvZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWtldHJlbnQvZGV2L2dvd2l0aHRoZWZsb3d0eXBlLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFycyBmcm9tICcuL3ZhcnMnXG5cbmNvbnN0IG5vdyA9IF8gPT4gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cbmNvbnN0IEJ1YmJsZXMgPSBfID0+IChcbiAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCAzMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPGNpcmNsZSBjeD1cIjYxLjU0OFwiIGN5PVwiMTAyLjA2MVwiIHI9XCIxOC45NFwiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjM0LjkxNlwiIGN5PVwiMTYxLjA2MlwiIHI9XCIxMS4wNjJcIiAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiNjUuMTUyXCJcbiAgICAgIGN5PVwiMjAwLjg1NVwiXG4gICAgICByPVwiMy42MDRcIlxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC02Ljk1NiAtNi4xMilcIlxuICAgIC8+XG4gICAgPGNpcmNsZSBjeD1cIjM2Ljg0NVwiIGN5PVwiMTgzLjczM1wiIHI9XCIxLjkyOVwiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjY3LjkzM1wiIGN5PVwiMTM0LjI5OFwiIHI9XCI2LjM4NlwiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjYxLjU4OFwiIGN5PVwiMTU2LjM0NVwiIHI9XCI2LjM0NVwiIC8+XG4gICAgPGNpcmNsZSBjeD1cIjM1LjAwNlwiIGN5PVwiMTc1LjIwNFwiIHI9XCI2LjZcIiAvPlxuICAgIDxjaXJjbGUgY3g9XCI1Ni45NTZcIiBjeT1cIjEzMi44MzNcIiByPVwiMTAuOTc3XCIgLz5cbiAgICA8Y2lyY2xlXG4gICAgICBjeD1cIjU5LjI1MlwiXG4gICAgICBjeT1cIjE4Ny45NThcIlxuICAgICAgcj1cIjIuMjk2XCJcbiAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNi45NTYgLTYuMTIpXCJcbiAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiNzEuMTI2XCJcbiAgICAgIGN5PVwiMTg4Ljg1NVwiXG4gICAgICByPVwiMy4xOTNcIlxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMy4zNDIgLTMuODI1KVwiXG4gICAgLz5cbiAgICA8Y2lyY2xlXG4gICAgICBjeD1cIjcxLjEyNlwiXG4gICAgICBjeT1cIjE4OC44NTVcIlxuICAgICAgcj1cIjMuMTkzXCJcbiAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTkuMjYgMTkuNzYpXCJcbiAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiNzEuMTI2XCJcbiAgICAgIGN5PVwiMTg4Ljg1NVwiXG4gICAgICByPVwiMy4xOTNcIlxuICAgICAgdHJhbnNmb3JtPVwibWF0cml4KC44MjY5MiAwIDAgLjgyNjkyIC00LjMwOSA2Mi4zMDYpXCJcbiAgICAvPlxuICAgIDxjaXJjbGUgY3g9XCI0NS44MDNcIiBjeT1cIjExNC42MDFcIiByPVwiNC4xOTdcIiAvPlxuICAgIDxjaXJjbGUgY3g9XCIzOC4zMDZcIiBjeT1cIjEzNi4xMzNcIiByPVwiMy4zXCIgLz5cbiAgICA8Y2lyY2xlIGN4PVwiNTEuODY3XCIgY3k9XCIxNDUuNjc4XCIgcj1cIjEuODY3XCIgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0xNTBweDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIGZpbGw6ICR7dmFycy5jb2xvcnMuYmx1ZUdyZWVufTtcbiAgICBgfTwvc3R5bGU+XG4gIDwvc3ZnPlxuKVxuZXhwb3J0IGRlZmF1bHQgXyA9PiAoXG4gIDxkaXY+XG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPVwiY3VydmVcIlxuICAgICAgdmlld0JveD1cIjAgMCAxMjAwIDEwMFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgNTcuNzU2YzIyOS4zNzEtMTYuNDQyIDM0OS4yMzYgMTUuOTgzIDQzNS41MzEgMTQuODI3IDY1LjIwOS0uODc0IDM5NC40MjgtNDcuOTI5IDUyOS4wOTItMzYuMzU5QzEwOTkuMjkgNDcuNzk0IDEyMDAgNzUuMzggMTIwMCA3NS4zOFYxMDBIMFwiIC8+XG4gICAgPC9zdmc+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxCdWJibGVzIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib2R5XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyLWludml0ZVwiPlxuICAgICAgICAgICAgQ2hlY2sgb3V0IHNvbWUgb2YgbXkgb3RoZXIgdGVjaCBzaGVuYW5pZ2FucyBieSB2aXNpdGluZyBteXsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2pha2V0cmVudFwiPkdpdGh1YjwvYT4gb3IgYnkgZ29pbmcgdG86eycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdGVyLWludml0ZS1saW5rXCIgaHJlZj1cImh0dHA6Ly9qYWtldHJlbnQuY29tXCI+XG4gICAgICAgICAgICBqYWtldHJlbnQuY29tXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxuICAgICAgICAgICAgQ291cnNlICZjb3B5OyB7bm93KCl9IFBsdXJhbHNpZ2h0OyB0aGlzIHBhZ2UgJmNvcHk7IHtub3coKX0gSmFrZVxuICAgICAgICAgICAgVHJlbnQgPGJyIC8+XG4gICAgICAgICAgICBUaGlzIGNvbnRlbnQgdXNlcyBhZmZpbGlhdGUgbGlua3MuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3ZhcnMuY29sb3JzLnllbGxvd307XG4gICAgICB9XG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3ZhcnMuY29sb3JzLmJsdWV9O1xuICAgICAgICBjb2xvcjogJHt2YXJzLmNvbG9ycy53aGl0ZX07XG4gICAgICB9XG4gICAgICAuY3VydmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmlsbDogJHt2YXJzLmNvbG9ycy5ibHVlfTtcbiAgICAgICAgYmFja2dyb3VuZDogJHt2YXJzLmNvbG9ycy5ibHVlR3JlZW59O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICAgICAgfVxuICAgICAgLmZvb3Rlci1ib2R5IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTIwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBnYXA6ICR7dmFycy5sYXlvdXQuc3BhY2luZ0xhcmdlfTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6ICR7dmFycy5sYXlvdXQuc3BhY2luZ0xhcmdlfTtcbiAgICAgIH1cbiAgICAgIC5mb290ZXItaW52aXRlLWxpbmsge1xuICAgICAgICBmb250OiAwLzAgYTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1nL2pha2V0cmVudC1sb2dvLXdoaXRlLnBuZykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgaGVpZ2h0OiA2OS4zNzVweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9O1xuICAgICAgfVxuICAgICAgLmNvcHlyaWdodCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgLmZvb3Rlci1ib2R5IHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvcHlyaWdodCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNjFweCkge1xuICAgICAgICAuZm9vdGVyLWJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6ICR7dmFycy5sYXlvdXQuc3BhY2luZ0xhcmdlfSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=src/footer.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blueGreen, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].layout.spacingLarge]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(now, "now", "/Users/jaketrent/dev/gowiththeflowtype-site/src/footer.js");
  reactHotLoader.register(Bubbles, "Bubbles", "/Users/jaketrent/dev/gowiththeflowtype-site/src/footer.js");
  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/src/footer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/global-styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vars__ = __webpack_require__("./src/vars.js");
var _jsxFileName = "/Users/jaketrent/dev/gowiththeflowtype-site/src/global-styles.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4058367415",
    css: "*{box-sizing:border-box;}html,body{margin:0;padding:0;font-family:'Faustina',serif;background-color:#fff;color:".concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, ";font-size:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.fontSizeSmall, ";line-height:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.lineHeightTight, ";}h1,h2,h3{font-family:'Fjalla One',sans-serif;font-weight:400;margin:0;}a{display:inline-block;color:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, ";-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-style:wavy;text-decoration-style:wavy;cursor:pointer;}a:hover{color:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, ";-webkit-text-decoration-style:solid;text-decoration-style:solid;}svg{fill:currentColor;}ol{margin:0;padding:0;}p{line-height:30px;}iframe{max-width:100%;}@media screen and (min-width:426px){}@media screen and (min-width:769px){html,body{font-size:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.fontSizeMedium, ";line-height:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.lineHeightStandard, ";}}@media screen and (min-width:1441px){html,body{font-size:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.fontSizeLarge, ";line-height:").concat(__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.lineHeightStandard, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwtc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdxQixBQUc2QixBQUliLEFBVzRCLEFBS2hCLEFBT2MsQUFJakIsQUFHVCxBQUlRLEFBR0YsQUFPMEIsQUFPQSxTQWxEL0IsQUE4QkEsTUFPWixFQUhBLENBUEEsQ0ExQmdDLEFBOEJoQyxFQWZxQyxDQXBCckMsYUEyQjhCLENBWlosR0FpQzJCLEFBT0EsU0FqRHJCLElBVWIsSUFLaUIsS0FKNUIsU0FWcUMsVUEwQ25DLEFBT0EsbUJBNUJGLE1BcEJ5QyxXQWNaLDRCQWJjLGtDQWMxQixPQWJqQixRQWNBIiwiZmlsZSI6InNyYy9nbG9iYWwtc3R5bGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWtldHJlbnQvZGV2L2dvd2l0aHRoZWZsb3d0eXBlLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFycyBmcm9tICcuL3ZhcnMnXG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4gKFxuICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICoge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gICAgaHRtbCxcbiAgICBib2R5IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmb250LWZhbWlseTogJ0ZhdXN0aW5hJywgc2VyaWY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgY29sb3I6ICR7dmFycy5jb2xvcnMuYmx1ZX07XG4gICAgICBmb250LXNpemU6ICR7dmFycy50eXBlLmZvbnRTaXplU21hbGx9O1xuICAgICAgbGluZS1oZWlnaHQ6ICR7dmFycy50eXBlLmxpbmVIZWlnaHRUaWdodH07XG4gICAgfVxuICAgIGgxLFxuICAgIGgyLFxuICAgIGgzIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnRmphbGxhIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGNvbG9yOiAke3ZhcnMuY29sb3JzLndoaXRlfTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiB3YXZ5O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBhOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3ZhcnMuY29sb3JzLnllbGxvd307XG4gICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgIH1cbiAgICBvbCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBpZnJhbWUge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LXNpemU6ICR7dmFycy50eXBlLmZvbnRTaXplTWVkaXVtfTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICR7dmFycy50eXBlLmxpbmVIZWlnaHRTdGFuZGFyZH07XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkge1xuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LXNpemU6ICR7dmFycy50eXBlLmZvbnRTaXplTGFyZ2V9O1xuICAgICAgICBsaW5lLWhlaWdodDogJHt2YXJzLnR5cGUubGluZUhlaWdodFN0YW5kYXJkfTtcbiAgICAgIH1cbiAgICB9XG4gIGB9PC9zdHlsZT5cbilcbiJdfQ== */\n/*@ sourceURL=src/global-styles.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.fontSizeSmall, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.lineHeightTight, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].colors.yellow, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.fontSizeMedium, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.lineHeightStandard, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.fontSizeLarge, __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */].type.lineHeightStandard]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/src/global-styles.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/jaketrent/dev/gowiththeflowtype-site/src/head.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var now = function now(_) {
  return new Date().getFullYear();
};

var _default = function _default(_) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Go With the Flow Type"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/static/img/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "author",
    content: "https://plus.google.com/115032056022257436849",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: "Learn to add strong static typing to your JavaScript with Flow.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "keywords",
    content: "javascript, static typing, strong static types, flow, flowtype, typescript, learn flow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "copyright",
    content: "".concat(now(), " Jake Trent"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: "Go With the FlowType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: "https://gowiththeflowtype.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: "Learn to add strong static typing to your JavaScript with Flow.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:title",
    content: "Go With the Flow Type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:description",
    content: "Learn to add strong static typing to your JavaScript with Flow.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:site",
    content: "@jaketrent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:creator",
    content: "@jaketrent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "HandheldFriendly",
    content: "True",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "MobileOptimized",
    content: "320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Faustina|Fjalla+One",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(now, "now", "/Users/jaketrent/dev/gowiththeflowtype-site/src/head.js");
  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/src/head.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polished__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vars__ = __webpack_require__("./src/vars.js");
var _jsxFileName = "/Users/jaketrent/dev/gowiththeflowtype-site/src/header.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var Curl = function Curl(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    "aria-hidden": true,
    viewBox: "0 0 100 60",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3578351073"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M12.65 54.28h79.293S73.816 7.797 8.374 6.574c0 0 55.213 24.826 4.277 47.704z",
    fill: "#99cfda",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3578351073"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M12.65 54.28H96S81.873 9.566 17.415 7.055c0 0 46.172 24.345-4.764 47.223z",
    fill: "#379fb7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-3578351073"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3578351073",
    css: ".jsx-3578351073{position:relative;bottom:-6px;height:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JnQixBQUV5QixrQkFDTixZQUNELFdBQ2IiLCJmaWxlIjoic3JjL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFrZXRyZW50L2Rldi9nb3dpdGh0aGVmbG93dHlwZS1zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdwb2xpc2hlZCdcblxuaW1wb3J0IHZhcnMgZnJvbSAnLi92YXJzJ1xuXG5jb25zdCBDdXJsID0gXyA9PiAoXG4gIDxzdmdcbiAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDEwMCA2MFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xMi42NSA1NC4yOGg3OS4yOTNTNzMuODE2IDcuNzk3IDguMzc0IDYuNTc0YzAgMCA1NS4yMTMgMjQuODI2IDQuMjc3IDQ3LjcwNHpcIlxuICAgICAgZmlsbD1cIiM5OWNmZGFcIlxuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTIuNjUgNTQuMjhIOTZTODEuODczIDkuNTY2IDE3LjQxNSA3LjA1NWMwIDAgNDYuMTcyIDI0LjM0NS00Ljc2NCA0Ny4yMjN6XCJcbiAgICAgIGZpbGw9XCIjMzc5ZmI3XCJcbiAgICAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogLTZweDtcbiAgICAgIGhlaWdodDogMmVtO1xuICAgIGB9PC9zdHlsZT5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IEhlYWRlcldhdmVzID0gXyA9PiAoXG4gIDxzdmcgdmlld0JveD1cIjAgMCAxNzY0IDI5OVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aFxuICAgICAgY2xhc3NOYW1lPVwiY3VydmUxXCJcbiAgICAgIGQ9XCJNMCAxMzguNjU4czEyNS4zNCAzMS4yMjQgMjg4LjY1NCAzNS4zNmMyMTMuMjY2IDUuNDAyIDQ4NS4yMzgtODguMDUgNzYxLjg1Ni04Ni40MTdDMTMyNy4xMyA4OS4yMzMgMTc2NCAyNTIuMTYyIDE3NjQgMjUyLjE2MlYyOTlIMFYxMzguNjU4elwiXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgY2xhc3NOYW1lPVwiY3VydmUyXCJcbiAgICAgIGQ9XCJNMCAxNDAuNDg0UzIwNi42NTUgMTcuODAyIDM2OS40MjEgMjIuNjk2YzI5OC43NzYgOC45ODMgNTYyLjYxMiAyNTcuMDA2IDg5NC4zMTkgMjU1LjI4IDMzMS43LTEuNzI3IDQ5NC4zNC0xMzkuMjI0IDUwMC4yNi0xMzkuMjI0IDUuOTIgMCAwIDE2MC4yNDggMCAxNjAuMjQ4SDBWMTQwLjQ4NHpcIlxuICAgIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAuY3VydmUxIHtcbiAgICAgICAgZmlsbDogJHt0cmFuc3BhcmVudGl6ZSgwLjUsIHZhcnMuY29sb3JzLmdyZWVuKX07XG4gICAgICB9XG4gICAgICAuY3VydmUyIHtcbiAgICAgICAgZmlsbDogJHt0cmFuc3BhcmVudGl6ZSgwLjUsIHZhcnMuY29sb3JzLmJsdWUpfTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBUcmlhbCA9IF8gPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJidG5cIiBocmVmPVwiXCI+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwicGxheSBpY29uXCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNiAyMWwxNC05TDYgM1wiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICBXYXRjaCB0aGUgQ291cnNlXG4gICAgICA8L2E+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaWFsXCI+d2l0aCBhIGZyZWUgMTAtZGF5IFBsdXJhbHNpZ2h0IHRyaWFsPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJhbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7dmFycy5sYXlvdXQuc3BhY2luZ0xhcmdlfTtcbiAgICAgIH1cbiAgICAgIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1hYU21hbGx9O1xuICAgICAgfVxuICAgICAgLmJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1NtYWxsfTtcbiAgICAgICAgcGFkZGluZzogJHt2YXJzLmxheW91dC5zcGFjaW5nWFhTbWFsbH0gJHt2YXJzLmxheW91dC5zcGFjaW5nU21hbGx9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dmFycy5jb2xvcnMuYmx1ZX07XG4gICAgICAgIGNvbG9yOiAke3ZhcnMuY29sb3JzLndoaXRlfVxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICR7dmFycy5jb2xvcnMuZGFya0dyYXl9O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAke3ZhcnMudHlwZS5saW5lSGVpZ2h0U3RhbmRhcmR9O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLmJ0bjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dmFycy5jb2xvcnMuYmx1ZURhcmt9O1xuICAgICAgfVxuICAgICAgLnRyaWFsIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICA8VHJpYWwgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICBHbyB3aXRoIHRoZVxuICAgICAgICA8Q3VybCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ1wiPkZsb3dUeXBlPC9kaXY+eycgJ31cbiAgICAgIDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPEhlYWRlcldhdmVzIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgcGFkZGluZzogMCAke3ZhcnMubGF5b3V0LnNwYWNpbmdMYXJnZX07XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6ICR7dmFycy5sYXlvdXQuc3BhY2luZ0xhcmdlfTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgICAuYmlnIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgZ2FwOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdYTGFyZ2V9O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogJHt2YXJzLmxheW91dC5zcGFjaW5nWFhMYXJnZX07XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIHtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDIgKiAke3ZhcnMubGF5b3V0LnNwYWNpbmdYWExhcmdlfSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcbiJdfQ== */\n/*@ sourceURL=src/header.js */"
  }));
};

var HeaderWaves = function HeaderWaves(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    viewBox: "0 0 1764 299",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3163682093", [Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.green), Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue)]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M0 138.658s125.34 31.224 288.654 35.36c213.266 5.402 485.238-88.05 761.856-86.417C1327.13 89.233 1764 252.162 1764 252.162V299H0V138.658z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3163682093", [Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.green), Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue)]]]) + " " + "curve1"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M0 140.484S206.655 17.802 369.421 22.696c298.776 8.983 562.612 257.006 894.319 255.28 331.7-1.727 494.34-139.224 500.26-139.224 5.92 0 0 160.248 0 160.248H0V140.484z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3163682093", [Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.green), Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue)]]]) + " " + "curve2"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3163682093",
    css: ".__jsx-style-dynamic-selector{position:relative;bottom:-6px;width:100%;}.curve1.__jsx-style-dynamic-selector{fill:".concat(Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.green), ";}.curve2.__jsx-style-dynamic-selector{fill:").concat(Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NnQixBQUV5QixBQUlrQixBQUdBLGtCQU54QixZQUNELElBR1gsQUFHQSxPQUNGIiwiZmlsZSI6InNyYy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pha2V0cmVudC9kZXYvZ293aXRodGhlZmxvd3R5cGUtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSAncG9saXNoZWQnXG5cbmltcG9ydCB2YXJzIGZyb20gJy4vdmFycydcblxuY29uc3QgQ3VybCA9IF8gPT4gKFxuICA8c3ZnXG4gICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgdmlld0JveD1cIjAgMCAxMDAgNjBcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTIuNjUgNTQuMjhoNzkuMjkzUzczLjgxNiA3Ljc5NyA4LjM3NCA2LjU3NGMwIDAgNTUuMjEzIDI0LjgyNiA0LjI3NyA0Ny43MDR6XCJcbiAgICAgIGZpbGw9XCIjOTljZmRhXCJcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEyLjY1IDU0LjI4SDk2UzgxLjg3MyA5LjU2NiAxNy40MTUgNy4wNTVjMCAwIDQ2LjE3MiAyNC4zNDUtNC43NjQgNDcuMjIzelwiXG4gICAgICBmaWxsPVwiIzM3OWZiN1wiXG4gICAgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3R0b206IC02cHg7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICBgfTwvc3R5bGU+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBIZWFkZXJXYXZlcyA9IF8gPT4gKFxuICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTc2NCAyOTlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGhcbiAgICAgIGNsYXNzTmFtZT1cImN1cnZlMVwiXG4gICAgICBkPVwiTTAgMTM4LjY1OHMxMjUuMzQgMzEuMjI0IDI4OC42NTQgMzUuMzZjMjEzLjI2NiA1LjQwMiA0ODUuMjM4LTg4LjA1IDc2MS44NTYtODYuNDE3QzEzMjcuMTMgODkuMjMzIDE3NjQgMjUyLjE2MiAxNzY0IDI1Mi4xNjJWMjk5SDBWMTM4LjY1OHpcIlxuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGNsYXNzTmFtZT1cImN1cnZlMlwiXG4gICAgICBkPVwiTTAgMTQwLjQ4NFMyMDYuNjU1IDE3LjgwMiAzNjkuNDIxIDIyLjY5NmMyOTguNzc2IDguOTgzIDU2Mi42MTIgMjU3LjAwNiA4OTQuMzE5IDI1NS4yOCAzMzEuNy0xLjcyNyA0OTQuMzQtMTM5LjIyNCA1MDAuMjYtMTM5LjIyNCA1LjkyIDAgMCAxNjAuMjQ4IDAgMTYwLjI0OEgwVjE0MC40ODR6XCJcbiAgICAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogLTZweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLmN1cnZlMSB7XG4gICAgICAgIGZpbGw6ICR7dHJhbnNwYXJlbnRpemUoMC41LCB2YXJzLmNvbG9ycy5ncmVlbil9O1xuICAgICAgfVxuICAgICAgLmN1cnZlMiB7XG4gICAgICAgIGZpbGw6ICR7dHJhbnNwYXJlbnRpemUoMC41LCB2YXJzLmNvbG9ycy5ibHVlKX07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3N2Zz5cbilcblxuY29uc3QgVHJpYWwgPSBfID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgaHJlZj1cIlwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInBsYXkgaWNvblwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBkPVwiTTYgMjFsMTQtOUw2IDNcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgV2F0Y2ggdGhlIENvdXJzZVxuICAgICAgPC9hPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlhbFwiPndpdGggYSBmcmVlIDEwLWRheSBQbHVyYWxzaWdodCB0cmlhbDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5iYW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdMYXJnZX07XG4gICAgICB9XG4gICAgICAuaWNvbiB7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3ZhcnMubGF5b3V0LnNwYWNpbmdYWFNtYWxsfTtcbiAgICAgIH1cbiAgICAgIC5idG4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3ZhcnMubGF5b3V0LnNwYWNpbmdTbWFsbH07XG4gICAgICAgIHBhZGRpbmc6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1hYU21hbGx9ICR7dmFycy5sYXlvdXQuc3BhY2luZ1NtYWxsfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3ZhcnMuY29sb3JzLmJsdWV9O1xuICAgICAgICBjb2xvcjogJHt2YXJzLmNvbG9ycy53aGl0ZX1cbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAke3ZhcnMuY29sb3JzLmRhcmtHcmF5fTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBsaW5lLWhlaWdodDogJHt2YXJzLnR5cGUubGluZUhlaWdodFN0YW5kYXJkfTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICAgIC5idG46aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3ZhcnMuY29sb3JzLmJsdWVEYXJrfTtcbiAgICAgIH1cbiAgICAgIC50cmlhbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIC5iYW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgPFRyaWFsIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgR28gd2l0aCB0aGVcbiAgICAgICAgPEN1cmwgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWdcIj5GbG93VHlwZTwvZGl2PnsnICd9XG4gICAgICA8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxIZWFkZXJXYXZlcyAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIHBhZGRpbmc6IDAgJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9O1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdMYXJnZX07XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgICAgLmJpZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIGdhcDogJHt2YXJzLmxheW91dC5zcGFjaW5nWExhcmdlfTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1hYTGFyZ2V9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSB7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYygyICogJHt2YXJzLmxheW91dC5zcGFjaW5nWFhMYXJnZX0pO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG4iXX0= */\n/*@ sourceURL=src/header.js */"),
    dynamic: [Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.green), Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue)]
  }));
};

var Trial = function Trial(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2468422845", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.darkGray, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].type.lineHeightStandard, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blueDark]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2468422845", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.darkGray, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].type.lineHeightStandard, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blueDark]]]) + " " + "banner"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2468422845", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.darkGray, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].type.lineHeightStandard, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blueDark]]]) + " " + "btn"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    role: "img",
    "aria-label": "play icon",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2468422845", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.darkGray, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].type.lineHeightStandard, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blueDark]]]) + " " + "icon"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M6 21l14-9L6 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2468422845", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.darkGray, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].type.lineHeightStandard, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blueDark]]])
  })), "Watch the Course"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2468422845", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.darkGray, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].type.lineHeightStandard, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blueDark]]]) + " " + "trial"
  }, "with a free 10-day Pluralsight trial")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2468422845",
    css: ".banner.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:".concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, ";}.icon.__jsx-style-dynamic-selector{height:16px;margin-right:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, ";}.btn.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, ";padding:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, " ").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, ";border-radius:4px;background:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue, ";color:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.white, " text-shadow:1px 1px 0 ").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.darkGray, ";-webkit-text-decoration:none;text-decoration:none;line-height:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].type.lineHeightStandard, ";white-space:nowrap;}.btn.__jsx-style-dynamic-selector:hover{background:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blueDark, ";}.trial.__jsx-style-dynamic-selector{display:inline-block;}@media screen and (min-width:769px){.banner.__jsx-style-dynamic-selector{display:block;}}@media screen and (min-width:1024px){.banner.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVnQixBQUdzQixBQUtELEFBSVEsQUFhb0IsQUFHbkIsQUFJTCxBQUtELFlBNUIyQixFQXdCMUMsT0FKRixtQkFIQSxjQWhCQSxvQkFOcUIsQUFrQ25CLDRCQXpCbUIsaUVBUnFCLDRCQVNFLFlBUjVDLDhCQVNvRSxrRUFDaEQsa0JBQ3NCLHdDQUVXLHNGQUM5QixrREFDb0IseUNBQ3RCLG1CQUNyQiIsImZpbGUiOiJzcmMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWtldHJlbnQvZGV2L2dvd2l0aHRoZWZsb3d0eXBlLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ3BvbGlzaGVkJ1xuXG5pbXBvcnQgdmFycyBmcm9tICcuL3ZhcnMnXG5cbmNvbnN0IEN1cmwgPSBfID0+IChcbiAgPHN2Z1xuICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgIHZpZXdCb3g9XCIwIDAgMTAwIDYwXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEyLjY1IDU0LjI4aDc5LjI5M1M3My44MTYgNy43OTcgOC4zNzQgNi41NzRjMCAwIDU1LjIxMyAyNC44MjYgNC4yNzcgNDcuNzA0elwiXG4gICAgICBmaWxsPVwiIzk5Y2ZkYVwiXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xMi42NSA1NC4yOEg5NlM4MS44NzMgOS41NjYgMTcuNDE1IDcuMDU1YzAgMCA0Ni4xNzIgMjQuMzQ1LTQuNzY0IDQ3LjIyM3pcIlxuICAgICAgZmlsbD1cIiMzNzlmYjdcIlxuICAgIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgaGVpZ2h0OiAyZW07XG4gICAgYH08L3N0eWxlPlxuICA8L3N2Zz5cbilcblxuY29uc3QgSGVhZGVyV2F2ZXMgPSBfID0+IChcbiAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE3NjQgMjk5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoXG4gICAgICBjbGFzc05hbWU9XCJjdXJ2ZTFcIlxuICAgICAgZD1cIk0wIDEzOC42NThzMTI1LjM0IDMxLjIyNCAyODguNjU0IDM1LjM2YzIxMy4yNjYgNS40MDIgNDg1LjIzOC04OC4wNSA3NjEuODU2LTg2LjQxN0MxMzI3LjEzIDg5LjIzMyAxNzY0IDI1Mi4xNjIgMTc2NCAyNTIuMTYyVjI5OUgwVjEzOC42NTh6XCJcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBjbGFzc05hbWU9XCJjdXJ2ZTJcIlxuICAgICAgZD1cIk0wIDE0MC40ODRTMjA2LjY1NSAxNy44MDIgMzY5LjQyMSAyMi42OTZjMjk4Ljc3NiA4Ljk4MyA1NjIuNjEyIDI1Ny4wMDYgODk0LjMxOSAyNTUuMjggMzMxLjctMS43MjcgNDk0LjM0LTEzOS4yMjQgNTAwLjI2LTEzOS4yMjQgNS45MiAwIDAgMTYwLjI0OCAwIDE2MC4yNDhIMFYxNDAuNDg0elwiXG4gICAgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3R0b206IC02cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5jdXJ2ZTEge1xuICAgICAgICBmaWxsOiAke3RyYW5zcGFyZW50aXplKDAuNSwgdmFycy5jb2xvcnMuZ3JlZW4pfTtcbiAgICAgIH1cbiAgICAgIC5jdXJ2ZTIge1xuICAgICAgICBmaWxsOiAke3RyYW5zcGFyZW50aXplKDAuNSwgdmFycy5jb2xvcnMuYmx1ZSl9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zdmc+XG4pXG5cbmNvbnN0IFRyaWFsID0gXyA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiIGhyZWY9XCJcIj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJwbGF5IGljb25cIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggZD1cIk02IDIxbDE0LTlMNiAzXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIFdhdGNoIHRoZSBDb3Vyc2VcbiAgICAgIDwvYT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpYWxcIj53aXRoIGEgZnJlZSAxMC1kYXkgUGx1cmFsc2lnaHQgdHJpYWw8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYmFubmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9O1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJHt2YXJzLmxheW91dC5zcGFjaW5nWFhTbWFsbH07XG4gICAgICB9XG4gICAgICAuYnRuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJHt2YXJzLmxheW91dC5zcGFjaW5nU21hbGx9O1xuICAgICAgICBwYWRkaW5nOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdYWFNtYWxsfSAke3ZhcnMubGF5b3V0LnNwYWNpbmdTbWFsbH07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogJHt2YXJzLmNvbG9ycy5ibHVlfTtcbiAgICAgICAgY29sb3I6ICR7dmFycy5jb2xvcnMud2hpdGV9XG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJHt2YXJzLmNvbG9ycy5kYXJrR3JheX07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICR7dmFycy50eXBlLmxpbmVIZWlnaHRTdGFuZGFyZH07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgICAuYnRuOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHt2YXJzLmNvbG9ycy5ibHVlRGFya307XG4gICAgICB9XG4gICAgICAudHJpYWwge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIC5iYW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBfID0+IChcbiAgPGhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgIDxUcmlhbCAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgIEdvIHdpdGggdGhlXG4gICAgICAgIDxDdXJsIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnXCI+Rmxvd1R5cGU8L2Rpdj57JyAnfVxuICAgICAgPC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8SGVhZGVyV2F2ZXMgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBwYWRkaW5nOiAwICR7dmFycy5sYXlvdXQuc3BhY2luZ0xhcmdlfTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICAgIC5iaWcge1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICBnYXA6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1hMYXJnZX07XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdYWExhcmdlfTtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMiAqICR7dmFycy5sYXlvdXQuc3BhY2luZ1hYTGFyZ2V9KTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuIl19 */\n/*@ sourceURL=src/header.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingSmall, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.white, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.darkGray, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].type.lineHeightStandard, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blueDark]
  }));
};

var _default = function _default(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1569053643", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1569053643", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge]]]) + " " + "grid"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Trial, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1569053643", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge]]]) + " " + "title"
  }, "Go with the", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Curl, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1569053643", [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge]]]) + " " + "big"
  }, "FlowType"), ' ')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderWaves, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1569053643",
    css: ".grid.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr;padding:0 ".concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, ";max-width:1200px;margin:0 auto;}.title.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, ";font-size:1.5rem;line-height:1.5rem;text-transform:uppercase;}.big.__jsx-style-dynamic-selector{font-size:2.5em;line-height:1.25em;}@media screen and (min-width:769px){.grid.__jsx-style-dynamic-selector{grid-template-columns:1fr 1fr;gap:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXLarge, ";}.title.__jsx-style-dynamic-selector{margin-top:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge, ";font-size:2rem;line-height:2rem;}}@media screen and (min-width:1441px){.title.__jsx-style-dynamic-selector{margin-top:calc(2 * ").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge, ");font-size:1.75rem;line-height:1.75rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUhnQixBQUdzQixBQU8yQixBQU14QixBQUtnQixBQUlVLEFBT1UsYUE1QjFCLEdBYVAsY0FLZ0IsS0FKckMsSUFieUMsQ0FNdEIsQUFlQSxVQU9HLEtBTkQsRUFmQSxNQVduQixLQVdzQixJQU50QixJQWZ5QixFQVBSLFVBNkJqQixPQTVCYyxNQU9oQixRQU5BIiwiZmlsZSI6InNyYy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pha2V0cmVudC9kZXYvZ293aXRodGhlZmxvd3R5cGUtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSAncG9saXNoZWQnXG5cbmltcG9ydCB2YXJzIGZyb20gJy4vdmFycydcblxuY29uc3QgQ3VybCA9IF8gPT4gKFxuICA8c3ZnXG4gICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgdmlld0JveD1cIjAgMCAxMDAgNjBcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTIuNjUgNTQuMjhoNzkuMjkzUzczLjgxNiA3Ljc5NyA4LjM3NCA2LjU3NGMwIDAgNTUuMjEzIDI0LjgyNiA0LjI3NyA0Ny43MDR6XCJcbiAgICAgIGZpbGw9XCIjOTljZmRhXCJcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEyLjY1IDU0LjI4SDk2UzgxLjg3MyA5LjU2NiAxNy40MTUgNy4wNTVjMCAwIDQ2LjE3MiAyNC4zNDUtNC43NjQgNDcuMjIzelwiXG4gICAgICBmaWxsPVwiIzM3OWZiN1wiXG4gICAgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3R0b206IC02cHg7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICBgfTwvc3R5bGU+XG4gIDwvc3ZnPlxuKVxuXG5jb25zdCBIZWFkZXJXYXZlcyA9IF8gPT4gKFxuICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTc2NCAyOTlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGhcbiAgICAgIGNsYXNzTmFtZT1cImN1cnZlMVwiXG4gICAgICBkPVwiTTAgMTM4LjY1OHMxMjUuMzQgMzEuMjI0IDI4OC42NTQgMzUuMzZjMjEzLjI2NiA1LjQwMiA0ODUuMjM4LTg4LjA1IDc2MS44NTYtODYuNDE3QzEzMjcuMTMgODkuMjMzIDE3NjQgMjUyLjE2MiAxNzY0IDI1Mi4xNjJWMjk5SDBWMTM4LjY1OHpcIlxuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGNsYXNzTmFtZT1cImN1cnZlMlwiXG4gICAgICBkPVwiTTAgMTQwLjQ4NFMyMDYuNjU1IDE3LjgwMiAzNjkuNDIxIDIyLjY5NmMyOTguNzc2IDguOTgzIDU2Mi42MTIgMjU3LjAwNiA4OTQuMzE5IDI1NS4yOCAzMzEuNy0xLjcyNyA0OTQuMzQtMTM5LjIyNCA1MDAuMjYtMTM5LjIyNCA1LjkyIDAgMCAxNjAuMjQ4IDAgMTYwLjI0OEgwVjE0MC40ODR6XCJcbiAgICAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogLTZweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLmN1cnZlMSB7XG4gICAgICAgIGZpbGw6ICR7dHJhbnNwYXJlbnRpemUoMC41LCB2YXJzLmNvbG9ycy5ncmVlbil9O1xuICAgICAgfVxuICAgICAgLmN1cnZlMiB7XG4gICAgICAgIGZpbGw6ICR7dHJhbnNwYXJlbnRpemUoMC41LCB2YXJzLmNvbG9ycy5ibHVlKX07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3N2Zz5cbilcblxuY29uc3QgVHJpYWwgPSBfID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgaHJlZj1cIlwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInBsYXkgaWNvblwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBkPVwiTTYgMjFsMTQtOUw2IDNcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgV2F0Y2ggdGhlIENvdXJzZVxuICAgICAgPC9hPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlhbFwiPndpdGggYSBmcmVlIDEwLWRheSBQbHVyYWxzaWdodCB0cmlhbDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5iYW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdMYXJnZX07XG4gICAgICB9XG4gICAgICAuaWNvbiB7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3ZhcnMubGF5b3V0LnNwYWNpbmdYWFNtYWxsfTtcbiAgICAgIH1cbiAgICAgIC5idG4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3ZhcnMubGF5b3V0LnNwYWNpbmdTbWFsbH07XG4gICAgICAgIHBhZGRpbmc6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1hYU21hbGx9ICR7dmFycy5sYXlvdXQuc3BhY2luZ1NtYWxsfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3ZhcnMuY29sb3JzLmJsdWV9O1xuICAgICAgICBjb2xvcjogJHt2YXJzLmNvbG9ycy53aGl0ZX1cbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAke3ZhcnMuY29sb3JzLmRhcmtHcmF5fTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBsaW5lLWhlaWdodDogJHt2YXJzLnR5cGUubGluZUhlaWdodFN0YW5kYXJkfTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICAgIC5idG46aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3ZhcnMuY29sb3JzLmJsdWVEYXJrfTtcbiAgICAgIH1cbiAgICAgIC50cmlhbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIC5iYW5uZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgPFRyaWFsIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgR28gd2l0aCB0aGVcbiAgICAgICAgPEN1cmwgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWdcIj5GbG93VHlwZTwvZGl2PnsnICd9XG4gICAgICA8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxIZWFkZXJXYXZlcyAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIHBhZGRpbmc6IDAgJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9O1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdMYXJnZX07XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgICAgLmJpZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIGdhcDogJHt2YXJzLmxheW91dC5zcGFjaW5nWExhcmdlfTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1hYTGFyZ2V9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSB7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYygyICogJHt2YXJzLmxheW91dC5zcGFjaW5nWFhMYXJnZX0pO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG4iXX0= */\n/*@ sourceURL=src/header.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingXXLarge]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Curl, "Curl", "/Users/jaketrent/dev/gowiththeflowtype-site/src/header.js");
  reactHotLoader.register(HeaderWaves, "HeaderWaves", "/Users/jaketrent/dev/gowiththeflowtype-site/src/header.js");
  reactHotLoader.register(Trial, "Trial", "/Users/jaketrent/dev/gowiththeflowtype-site/src/header.js");
  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/src/header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/toc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polished__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vars__ = __webpack_require__("./src/vars.js");
var _jsxFileName = "/Users/jaketrent/dev/gowiththeflowtype-site/src/toc.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var ListItem = function ListItem(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1171928528" + " " + "listItem"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1171928528" + " " + "link"
  }, props.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-1171928528" + " " + "time"
  }, props.time), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1171928528",
    css: ".listItem.jsx-1171928528{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:.8em 0;}.time.jsx-1171928528{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90b2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBR3NCLEFBS0osU0FDWCxpRUFMZ0MsbUhBQ2hCLGNBQ2hCIiwiZmlsZSI6InNyYy90b2MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pha2V0cmVudC9kZXYvZ293aXRodGhlZmxvd3R5cGUtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSAncG9saXNoZWQnXG5cbmltcG9ydCB2YXJzIGZyb20gJy4vdmFycydcblxuY29uc3QgTGlzdEl0ZW0gPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdEl0ZW1cIj5cbiAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17cHJvcHMubGlua30+XG4gICAgICB7cHJvcHMubmFtZX1cbiAgICA8L2E+XG4gICAgPHAgY2xhc3NOYW1lPVwidGltZVwiPntwcm9wcy50aW1lfTwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdEl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbjogLjhlbSAwO1xuICAgICAgfVxuICAgICAgLnRpbWUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgPExpc3RJdGVtXG4gICAgICBuYW1lPVwiRmluZCBhIFBsYWNlIGZvciBUeXBlcyBhbmQgRmxvd1wiXG4gICAgICB0aW1lPVwiOTozOVwiXG4gICAgICBsaW5rPVwiaHR0cDovL2JpdC5seS9qYWtldHJlbnQtc3R5bGluZ3JlYWN0LW1vZHVsZTFcIlxuICAgIC8+XG4gICAgPExpc3RJdGVtXG4gICAgICBuYW1lPVwiU2V0dXAgWW91ciBQcm9qZWN0IGZvciBGbG93XCJcbiAgICAgIHRpbWU9XCIxMToyNlwiXG4gICAgICBsaW5rPVwiaHR0cDovL2JpdC5seS9qYWtldHJlbnQtc3R5bGluZ3JlYWN0LW1vZHVsZTJcIlxuICAgIC8+XG4gICAgPExpc3RJdGVtXG4gICAgICBuYW1lPVwiU3RhcnQgWW91ciBQcm9qZWN0IHdpdGggRmxvdyBUeXBlc1wiXG4gICAgICB0aW1lPVwiNDA6MDBcIlxuICAgICAgbGluaz1cImh0dHA6Ly9iaXQubHkvamFrZXRyZW50LXN0eWxpbmdyZWFjdC1tb2R1bGUzXCJcbiAgICAvPlxuICAgIDxMaXN0SXRlbVxuICAgICAgbmFtZT1cIkFkZCBGbG93IFR5cGVzIHRvIFlvdXIgRXhpc3RpbmcgUHJvamVjdFwiXG4gICAgICB0aW1lPVwiMzI6MDhcIlxuICAgICAgbGluaz1cImh0dHA6Ly9iaXQubHkvamFrZXRyZW50LXN0eWxpbmdyZWFjdC1tb2R1bGU0XCJcbiAgICAvPlxuICAgIDxMaXN0SXRlbVxuICAgICAgbmFtZT1cIlVzZSBGbG93IHdpdGggUGFja2FnZXNcIlxuICAgICAgdGltZT1cIjExOjA4XCJcbiAgICAgIGxpbms9XCJodHRwOi8vYml0Lmx5L2pha2V0cmVudC1zdHlsaW5ncmVhY3QtbW9kdWxlNVwiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsQ29udGFpbmVyXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0b3RhbFwiPlRvdGFsIFRpbWU8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lXCI+MWggNDRtPC9wPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50YWJsZSB7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAke3RyYW5zcGFyZW50aXplKDAuNSwgdmFycy5jb2xvcnMuYmx1ZSl9O1xuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJHt0cmFuc3BhcmVudGl6ZSgwLjUsIHZhcnMuY29sb3JzLmJsdWUpfTtcbiAgICAgICAgcGFkZGluZzogJHt2YXJzLmxheW91dC5zcGFjaW5nTWVkaXVtfSAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdMYXJnZX07XG4gICAgICB9XG4gICAgICAudG90YWxDb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBtYXJnaW46IDJlbSAwIDAgMDtcbiAgICAgIH1cbiAgICAgIC50b3RhbCB7XG4gICAgICAgIG1hcmdpbjogMCAxZW0gMCAwO1xuICAgICAgfVxuICAgICAgLnRpbWUge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=src/toc.js */"
  }));
};

var _default = function _default(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["301188161", [Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingMedium, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "table"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ListItem, {
    name: "Find a Place for Types and Flow",
    time: "9:39",
    link: "http://bit.ly/jaketrent-stylingreact-module1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ListItem, {
    name: "Setup Your Project for Flow",
    time: "11:26",
    link: "http://bit.ly/jaketrent-stylingreact-module2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ListItem, {
    name: "Start Your Project with Flow Types",
    time: "40:00",
    link: "http://bit.ly/jaketrent-stylingreact-module3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ListItem, {
    name: "Add Flow Types to Your Existing Project",
    time: "32:08",
    link: "http://bit.ly/jaketrent-stylingreact-module4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ListItem, {
    name: "Use Flow with Packages",
    time: "11:08",
    link: "http://bit.ly/jaketrent-stylingreact-module5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["301188161", [Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingMedium, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "totalContainer"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["301188161", [Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingMedium, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "total"
  }, "Total Time"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["301188161", [Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingMedium, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge]]]) + " " + "time"
  }, "1h 44m")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "301188161",
    css: ".table.__jsx-style-dynamic-selector{border-top:4px solid ".concat(Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), ";border-bottom:4px solid ").concat(Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), ";padding:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingMedium, " 0;margin-bottom:").concat(__WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge, ";}.totalContainer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin:2em 0 0 0;}.total.__jsx-style-dynamic-selector{margin:0 1em 0 0;}.time.__jsx-style-dynamic-selector{margin:0 0 0 2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90b2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURnQixBQUcyRCxBQU1yQyxBQUtJLEFBR0EsaUJBRm5CLEFBR0EsaUNBZHVELHdCQU01Qiw2QkFMYyx1Q0FDSSw2QkFLMUIsY0FKbkIsR0FLQSIsImZpbGUiOiJzcmMvdG9jLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWtldHJlbnQvZGV2L2dvd2l0aHRoZWZsb3d0eXBlLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ3BvbGlzaGVkJ1xuXG5pbXBvcnQgdmFycyBmcm9tICcuL3ZhcnMnXG5cbmNvbnN0IExpc3RJdGVtID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RJdGVtXCI+XG4gICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e3Byb3BzLmxpbmt9PlxuICAgICAge3Byb3BzLm5hbWV9XG4gICAgPC9hPlxuICAgIDxwIGNsYXNzTmFtZT1cInRpbWVcIj57cHJvcHMudGltZX08L3A+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3RJdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW46IC44ZW0gMDtcbiAgICAgIH1cbiAgICAgIC50aW1lIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBfID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgIDxMaXN0SXRlbVxuICAgICAgbmFtZT1cIkZpbmQgYSBQbGFjZSBmb3IgVHlwZXMgYW5kIEZsb3dcIlxuICAgICAgdGltZT1cIjk6MzlcIlxuICAgICAgbGluaz1cImh0dHA6Ly9iaXQubHkvamFrZXRyZW50LXN0eWxpbmdyZWFjdC1tb2R1bGUxXCJcbiAgICAvPlxuICAgIDxMaXN0SXRlbVxuICAgICAgbmFtZT1cIlNldHVwIFlvdXIgUHJvamVjdCBmb3IgRmxvd1wiXG4gICAgICB0aW1lPVwiMTE6MjZcIlxuICAgICAgbGluaz1cImh0dHA6Ly9iaXQubHkvamFrZXRyZW50LXN0eWxpbmdyZWFjdC1tb2R1bGUyXCJcbiAgICAvPlxuICAgIDxMaXN0SXRlbVxuICAgICAgbmFtZT1cIlN0YXJ0IFlvdXIgUHJvamVjdCB3aXRoIEZsb3cgVHlwZXNcIlxuICAgICAgdGltZT1cIjQwOjAwXCJcbiAgICAgIGxpbms9XCJodHRwOi8vYml0Lmx5L2pha2V0cmVudC1zdHlsaW5ncmVhY3QtbW9kdWxlM1wiXG4gICAgLz5cbiAgICA8TGlzdEl0ZW1cbiAgICAgIG5hbWU9XCJBZGQgRmxvdyBUeXBlcyB0byBZb3VyIEV4aXN0aW5nIFByb2plY3RcIlxuICAgICAgdGltZT1cIjMyOjA4XCJcbiAgICAgIGxpbms9XCJodHRwOi8vYml0Lmx5L2pha2V0cmVudC1zdHlsaW5ncmVhY3QtbW9kdWxlNFwiXG4gICAgLz5cbiAgICA8TGlzdEl0ZW1cbiAgICAgIG5hbWU9XCJVc2UgRmxvdyB3aXRoIFBhY2thZ2VzXCJcbiAgICAgIHRpbWU9XCIxMTowOFwiXG4gICAgICBsaW5rPVwiaHR0cDovL2JpdC5seS9qYWtldHJlbnQtc3R5bGluZ3JlYWN0LW1vZHVsZTVcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbENvbnRhaW5lclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidG90YWxcIj5Ub3RhbCBUaW1lPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGltZVwiPjFoIDQ0bTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGFibGUge1xuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgJHt0cmFuc3BhcmVudGl6ZSgwLjUsIHZhcnMuY29sb3JzLmJsdWUpfTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICR7dHJhbnNwYXJlbnRpemUoMC41LCB2YXJzLmNvbG9ycy5ibHVlKX07XG4gICAgICAgIHBhZGRpbmc6ICR7dmFycy5sYXlvdXQuc3BhY2luZ01lZGl1bX0gMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9O1xuICAgICAgfVxuICAgICAgLnRvdGFsQ29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbWFyZ2luOiAyZW0gMCAwIDA7XG4gICAgICB9XG4gICAgICAudG90YWwge1xuICAgICAgICBtYXJnaW46IDAgMWVtIDAgMDtcbiAgICAgIH1cbiAgICAgIC50aW1lIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=src/toc.js */"),
    dynamic: [Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].colors.blue), __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingMedium, __WEBPACK_IMPORTED_MODULE_3__vars__["a" /* default */].layout.spacingLarge]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ListItem, "ListItem", "/Users/jaketrent/dev/gowiththeflowtype-site/src/toc.js");
  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/src/toc.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polished__ = __webpack_require__("./node_modules/polished/dist/polished.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blurb_header__ = __webpack_require__("./src/blurb-header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vars__ = __webpack_require__("./src/vars.js");
var _jsxFileName = "/Users/jaketrent/dev/gowiththeflowtype-site/src/types.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var Type = function Type(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1760662251", [__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingXSmall, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingMedium, Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.blue), __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.white, Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.grayDark), __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.yellow]]]) + " " + "type"
  }, props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1760662251",
    css: ".type.__jsx-style-dynamic-selector{display:inline-block;border-radius:6px;padding:".concat(__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingXSmall, " ").concat(__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingMedium, ";background:").concat(Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.blue), ";text-align:center;color:").concat(__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.white, ";text-shadow:1px 1px 0 ").concat(Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.grayDark), ";border:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.yellow, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90eXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRZ0IsQUFHOEIscUJBQ0gsa0JBQ2dELGtFQUMxQix3Q0FDdEIsa0JBQ2lCLG1DQUNnQixtREFDTCw4Q0FDaEQiLCJmaWxlIjoic3JjL3R5cGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYWtldHJlbnQvZGV2L2dvd2l0aHRoZWZsb3d0eXBlLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ3BvbGlzaGVkJ1xuXG5pbXBvcnQgQmx1cmJIZWFkZXIgZnJvbSAnLi9ibHVyYi1oZWFkZXInXG5pbXBvcnQgdmFycyBmcm9tICcuL3ZhcnMnXG5cbmNvbnN0IFR5cGUgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidHlwZVwiPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudHlwZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBwYWRkaW5nOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdYU21hbGx9ICR7dmFycy5sYXlvdXQuc3BhY2luZ01lZGl1bX07XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC41LCB2YXJzLmNvbG9ycy5ibHVlKX07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICR7dmFycy5jb2xvcnMud2hpdGV9O1xuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICR7dHJhbnNwYXJlbnRpemUoMC41LCB2YXJzLmNvbG9ycy5ncmF5RGFyayl9O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3ZhcnMuY29sb3JzLnllbGxvd307XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgXyA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxCbHVyYkhlYWRlcj5UeXBlcyBZb3UnbGwgTGVhcm48L0JsdXJiSGVhZGVyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZXNcIj5cbiAgICAgIDxUeXBlPmFueTwvVHlwZT5cbiAgICAgIDxUeXBlPm9iamVjdDwvVHlwZT5cbiAgICAgIDxUeXBlPnByaW1pdGl2ZTwvVHlwZT5cbiAgICAgIDxUeXBlPmFycmF5PC9UeXBlPlxuICAgICAgPFR5cGU+ZnVuY3Rpb248L1R5cGU+XG4gICAgICA8VHlwZT5taXhlZDwvVHlwZT5cbiAgICAgIDxUeXBlPm1vZHVsZTwvVHlwZT5cbiAgICAgIDxUeXBlPm1heWJlPC9UeXBlPlxuICAgICAgPFR5cGU+dmFyaWFibGU8L1R5cGU+XG4gICAgICA8VHlwZT5pbmZlcmVuY2U8L1R5cGU+XG4gICAgICA8VHlwZT50eXBlIGFsaWFzPC9UeXBlPlxuICAgICAgPFR5cGU+Z2VuZXJpYzwvVHlwZT5cbiAgICAgIDxUeXBlPmNsYXNzPC9UeXBlPlxuICAgICAgPFR5cGU+aW50ZXJmYWNlPC9UeXBlPlxuICAgICAgPFR5cGU+aW50ZXJzZWN0aW9uPC9UeXBlPlxuICAgICAgPFR5cGU+dHVwbGU8L1R5cGU+XG4gICAgICA8VHlwZT5saXRlcmFsPC9UeXBlPlxuICAgICAgPFR5cGU+dHlwZSBjYXN0PC9UeXBlPlxuICAgICAgPFR5cGU+dW5pb248L1R5cGU+XG4gICAgICA8VHlwZT5saWJkZWY8L1R5cGU+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1hMYXJnZX0gMCAke3ZhcnMubGF5b3V0LnNwYWNpbmdMYXJnZX0gMDtcbiAgICAgIH1cbiAgICAgIC50eXBlcyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgIGdhcDogJHt2YXJzLmxheW91dC5zcGFjaW5nU21hbGx9O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIC50eXBlcyB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=src/types.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingXSmall, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingMedium, Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.blue), __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.white, Object(__WEBPACK_IMPORTED_MODULE_2_polished__["a" /* transparentize */])(0.5, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.grayDark), __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].colors.yellow]
  }));
};

var _default = function _default(_) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["551874441", [__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingSmall]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["551874441", [__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingSmall]]]) + " " + "header"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__blurb_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Types You'll Learn")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["551874441", [__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingSmall]]]) + " " + "types"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "any"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "object"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "primitive"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "array"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "function"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "mixed"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "module"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "maybe"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "variable"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "inference"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "type alias"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "generic"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "class"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "interface"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "intersection"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "tuple"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "literal"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "type cast"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "union"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Type, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "libdef")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "551874441",
    css: ".header.__jsx-style-dynamic-selector{padding:".concat(__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingXLarge, " 0 ").concat(__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingLarge, " 0;}.types.__jsx-style-dynamic-selector{display:grid;grid-template-columns:1fr 1fr 1fr;gap:").concat(__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingSmall, ";}@media screen and (min-width:1024px){.types.__jsx-style-dynamic-selector{grid-template-columns:1fr 1fr 1fr 1fr;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90eXBlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGdCLEFBRytFLEFBR3pELEFBTTJCLGFBTE4seUJBTWxDLFNBTGlDLHVCQUpuQyxVQUtBIiwiZmlsZSI6InNyYy90eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamFrZXRyZW50L2Rldi9nb3dpdGh0aGVmbG93dHlwZS1zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdwb2xpc2hlZCdcblxuaW1wb3J0IEJsdXJiSGVhZGVyIGZyb20gJy4vYmx1cmItaGVhZGVyJ1xuaW1wb3J0IHZhcnMgZnJvbSAnLi92YXJzJ1xuXG5jb25zdCBUeXBlID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVcIj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnR5cGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgcGFkZGluZzogJHt2YXJzLmxheW91dC5zcGFjaW5nWFNtYWxsfSAke3ZhcnMubGF5b3V0LnNwYWNpbmdNZWRpdW19O1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKDAuNSwgdmFycy5jb2xvcnMuYmx1ZSl9O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAke3ZhcnMuY29sb3JzLndoaXRlfTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAke3RyYW5zcGFyZW50aXplKDAuNSwgdmFycy5jb2xvcnMuZ3JheURhcmspfTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt2YXJzLmNvbG9ycy55ZWxsb3d9O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IF8gPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8Qmx1cmJIZWFkZXI+VHlwZXMgWW91J2xsIExlYXJuPC9CbHVyYkhlYWRlcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVzXCI+XG4gICAgICA8VHlwZT5hbnk8L1R5cGU+XG4gICAgICA8VHlwZT5vYmplY3Q8L1R5cGU+XG4gICAgICA8VHlwZT5wcmltaXRpdmU8L1R5cGU+XG4gICAgICA8VHlwZT5hcnJheTwvVHlwZT5cbiAgICAgIDxUeXBlPmZ1bmN0aW9uPC9UeXBlPlxuICAgICAgPFR5cGU+bWl4ZWQ8L1R5cGU+XG4gICAgICA8VHlwZT5tb2R1bGU8L1R5cGU+XG4gICAgICA8VHlwZT5tYXliZTwvVHlwZT5cbiAgICAgIDxUeXBlPnZhcmlhYmxlPC9UeXBlPlxuICAgICAgPFR5cGU+aW5mZXJlbmNlPC9UeXBlPlxuICAgICAgPFR5cGU+dHlwZSBhbGlhczwvVHlwZT5cbiAgICAgIDxUeXBlPmdlbmVyaWM8L1R5cGU+XG4gICAgICA8VHlwZT5jbGFzczwvVHlwZT5cbiAgICAgIDxUeXBlPmludGVyZmFjZTwvVHlwZT5cbiAgICAgIDxUeXBlPmludGVyc2VjdGlvbjwvVHlwZT5cbiAgICAgIDxUeXBlPnR1cGxlPC9UeXBlPlxuICAgICAgPFR5cGU+bGl0ZXJhbDwvVHlwZT5cbiAgICAgIDxUeXBlPnR5cGUgY2FzdDwvVHlwZT5cbiAgICAgIDxUeXBlPnVuaW9uPC9UeXBlPlxuICAgICAgPFR5cGU+bGliZGVmPC9UeXBlPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAke3ZhcnMubGF5b3V0LnNwYWNpbmdYTGFyZ2V9IDAgJHt2YXJzLmxheW91dC5zcGFjaW5nTGFyZ2V9IDA7XG4gICAgICB9XG4gICAgICAudHlwZXMge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICBnYXA6ICR7dmFycy5sYXlvdXQuc3BhY2luZ1NtYWxsfTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgICAudHlwZXMge1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=src/types.js */"),
    dynamic: [__WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingXLarge, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingLarge, __WEBPACK_IMPORTED_MODULE_4__vars__["a" /* default */].layout.spacingSmall]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Type, "Type", "/Users/jaketrent/dev/gowiththeflowtype-site/src/types.js");
  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/src/types.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/vars.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = {
  colors: {
    blue: '#309FB8',
    blueDark: '#147D95',
    blueGreen: '#7FC1B4',
    grayDark: '#181818',
    green: '#9DC866',
    white: '#fff',
    yellow: '#FFC200'
  },
  layout: {
    spacingXXSmall: '4px',
    spacingXSmall: '8px',
    spacingSmall: '12px',
    spacingMedium: '16px',
    spacingLarge: '24px',
    spacingXLarge: '48px',
    spacingXXLarge: '64px'
  },
  type: {
    /* font size */
    fontSizeGigantic: '60px',
    fontSizeJumbo: '48px',
    fontSizeXXLarge: '36px',
    fontSizeXLarge: '30px',
    fontSizeLarge: '24px',
    fontSizeMedium: '18px',
    fontSizeSmall: '14px',
    fontSizeXSmall: '12px',

    /* font weight */
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightBook: 400,
    fontWeightLight: 300,
    fontWeightXLight: 200,

    /* line height */
    lineHeightTight: '20px',
    lineHeightStandard: '24px',
    lineHeightExtra: '32px',
    lineHeightHuge: '40px'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/jaketrent/dev/gowiththeflowtype-site/src/vars.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map