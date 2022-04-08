(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ISO6391"] = factory();
	else
		root["ISO6391"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/values.js"), __esModule: true };

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

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__("./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__("./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./src/data.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LANGUAGES_LIST = {
  aa: {
    name: 'afar',
    nativeName: 'Afaraf'
  },
  ab: {
    name: 'abkhasisk',
    nativeName: 'аҧсуа бызшәа'
  },
  ae: {
    name: 'avestisk',
    nativeName: 'avesta'
  },
  af: {
    name: 'afrikaans',
    nativeName: 'Afrikaans'
  },
  ak: {
    name: 'akan',
    nativeName: 'Akan'
  },
  am: {
    name: 'amharisk',
    nativeName: 'አማርኛ'
  },
  an: {
    name: 'aragonisk',
    nativeName: 'aragonés'
  },
  ar: {
    name: 'arabisk',
    nativeName: 'اللغة العربية'
  },
  as: {
    name: 'assamesisk',
    nativeName: 'অসমীয়া'
  },
  av: {
    name: 'avarisk',
    nativeName: 'авар мацӀ'
  },
  ay: {
    name: 'aymara',
    nativeName: 'aymar aru'
  },
  az: {
    name: 'aserbajdsjansk',
    nativeName: 'azərbaycan dili'
  },
  ba: {
    name: 'basjkirsk',
    nativeName: 'башҡорт теле'
  },
  be: {
    name: 'hviderussisk',
    nativeName: 'беларуская мова'
  },
  bg: {
    name: 'bulgarsk',
    nativeName: 'български език'
  },
  bh: {
    name: 'bihari',
    nativeName: 'भोजपुरी'
  },
  bi: {
    name: 'bislama',
    nativeName: 'Bislama'
  },
  bm: {
    name: 'bambara',
    nativeName: 'bamanankan'
  },
  bn: {
    name: 'bengali',
    nativeName: 'বাংলা'
  },
  bo: {
    name: 'tibetansk',
    nativeName: 'བོད་ཡིག'
  },
  br: {
    name: 'bretonsk',
    nativeName: 'brezhoneg'
  },
  bs: {
    name: 'bosnisk',
    nativeName: 'bosanski jezik'
  },
  ca: {
    name: 'katalansk',
    nativeName: 'Català'
  },
  ce: {
    name: 'tjetjensk',
    nativeName: 'нохчийн мотт'
  },
  ch: {
    name: 'chamorro',
    nativeName: 'Chamoru'
  },
  co: {
    name: 'korsikansk',
    nativeName: 'corsu'
  },
  cr: {
    name: 'cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ'
  },
  cs: {
    name: 'tjekkisk',
    nativeName: 'čeština'
  },
  cu: {
    name: 'kirkeslavisk',
    nativeName: 'ѩзыкъ словѣньскъ'
  },
  cv: {
    name: 'tsjuvansk',
    nativeName: 'чӑваш чӗлхи'
  },
  cy: {
    name: 'walisisk',
    nativeName: 'Cymraeg'
  },
  da: {
    name: 'dansk',
    nativeName: 'dansk'
  },
  de: {
    name: 'tysk',
    nativeName: 'Deutsch'
  },
  dv: {
    name: 'divehi',
    nativeName: 'Dhivehi'
  },
  dz: {
    name: 'dzongkha',
    nativeName: 'རྫོང་ཁ'
  },
  ee: {
    name: 'ewe',
    nativeName: 'Eʋegbe'
  },
  el: {
    name: 'græsk',
    nativeName: 'Ελληνικά'
  },
  en: {
    name: 'engelsk',
    nativeName: 'English'
  },
  eo: {
    name: 'esperanto',
    nativeName: 'Esperanto'
  },
  es: {
    name: 'spansk',
    nativeName: 'Español'
  },
  et: {
    name: 'estisk',
    nativeName: 'eesti'
  },
  eu: {
    name: 'baskisk',
    nativeName: 'euskara'
  },
  fa: {
    name: 'persisk',
    nativeName: 'فارسی'
  },
  ff: {
    name: 'fulfulde',
    nativeName: 'Fulfulde'
  },
  fi: {
    name: 'finsk',
    nativeName: 'suomi'
  },
  fj: {
    name: 'fijisk',
    nativeName: 'Vakaviti'
  },
  fo: {
    name: 'færøsk',
    nativeName: 'føroyskt'
  },
  fr: {
    name: 'fransk',
    nativeName: 'Français'
  },
  fy: {
    name: 'frisisk',
    nativeName: 'Frysk'
  },
  ga: {
    name: 'irsk',
    nativeName: 'Gaeilge'
  },
  gd: {
    name: 'skotsk gælisk',
    nativeName: 'Gàidhlig'
  },
  gl: {
    name: 'galicisk',
    nativeName: 'galego'
  },
  gn: {
    name: 'guaraní',
    nativeName: "Avañe'ẽ"
  },
  gu: {
    name: 'gujarati',
    nativeName: 'ગુજરાતી'
  },
  gv: {
    name: 'mansk',
    nativeName: 'Gaelg'
  },
  ha: {
    name: 'hausa',
    nativeName: 'هَوُسَ'
  },
  he: {
    name: 'hebraisk',
    nativeName: 'עברית'
  },
  hi: {
    name: 'hindi',
    nativeName: 'हिन्दी'
  },
  ho: {
    name: 'hiri motu',
    nativeName: 'Hiri Motu'
  },
  hr: {
    name: 'kroatisk',
    nativeName: 'Hrvatski'
  },
  ht: {
    name: 'haitisk kreolsk',
    nativeName: 'Kreyòl ayisyen'
  },
  hu: {
    name: 'ungarsk',
    nativeName: 'magyar'
  },
  hy: {
    name: 'armensk',
    nativeName: 'Հայերեն'
  },
  hz: {
    name: 'herero',
    nativeName: 'Otjiherero'
  },
  ia: {
    name: 'interlingua',
    nativeName: 'Interlingua'
  },
  id: {
    name: 'indonesisk',
    nativeName: 'Bahasa Indonesia'
  },
  ie: {
    name: 'interlingue',
    nativeName: 'Interlingue'
  },
  ig: {
    name: 'ibo',
    nativeName: 'Asụsụ Igbo'
  },
  ii: {
    name: 'yi',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop'
  },
  ik: {
    name: 'inupiak',
    nativeName: 'Iñupiaq'
  },
  io: {
    name: 'ido',
    nativeName: 'Ido'
  },
  is: {
    name: 'islandsk',
    nativeName: 'Íslenska'
  },
  it: {
    name: 'italiensk',
    nativeName: 'Italiano'
  },
  iu: {
    name: 'inuittisk',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ'
  },
  ja: {
    name: 'japansk',
    nativeName: '日本語'
  },
  jv: {
    name: 'javanesisk',
    nativeName: 'basa Jawa'
  },
  ka: {
    name: 'georgisk',
    nativeName: 'ქართული'
  },
  kg: {
    name: 'congolesisk',
    nativeName: 'Kikongo'
  },
  ki: {
    name: 'gikuyu',
    nativeName: 'Gĩkũyũ'
  },
  kj: {
    name: 'kwanyama',
    nativeName: 'Kuanyama'
  },
  kk: {
    name: 'kasakhisk',
    nativeName: 'қазақ тілі'
  },
  kl: {
    name: 'kalaallisut',
    nativeName: 'kalaallisut'
  },
  km: {
    name: 'khmer',
    nativeName: 'ខេមរភាសា'
  },
  kn: {
    name: 'kannada',
    nativeName: 'ಕನ್ನಡ'
  },
  ko: {
    name: 'koreansk',
    nativeName: '한국어'
  },
  kr: {
    name: 'kanuri',
    nativeName: 'Kanuri'
  },
  ks: {
    name: 'kashmirisk',
    nativeName: 'कश्मीरी'
  },
  ku: {
    name: 'kurdisk',
    nativeName: 'Kurdî'
  },
  kv: {
    name: 'komi',
    nativeName: 'коми кыв'
  },
  kw: {
    name: 'kornisk',
    nativeName: 'Kernewek'
  },
  ky: {
    name: 'kirgisisk',
    nativeName: 'Кыргызча'
  },
  la: {
    name: 'latin',
    nativeName: 'latine'
  },
  lb: {
    name: 'letzeburgsk',
    nativeName: 'Lëtzebuergesch'
  },
  lg: {
    name: 'luganda',
    nativeName: 'Luganda'
  },
  li: {
    name: 'limburgisk',
    nativeName: 'Limburgs'
  },
  ln: {
    name: 'lingala',
    nativeName: 'Lingála'
  },
  lo: {
    name: 'laotisk',
    nativeName: 'ພາສາ'
  },
  lt: {
    name: 'litauisk',
    nativeName: 'lietuvių kalba'
  },
  lu: {
    name: 'luba-katanga',
    nativeName: 'Tshiluba'
  },
  lv: {
    name: 'lettisk',
    nativeName: 'latviešu valoda'
  },
  mg: {
    name: 'gassisk',
    nativeName: 'fiteny malagasy'
  },
  mh: {
    name: 'marshallesisk',
    nativeName: 'Kajin M̧ajeļ'
  },
  mi: {
    name: 'maoriski',
    nativeName: 'te reo Māori'
  },
  mk: {
    name: 'makedonsk',
    nativeName: 'македонски јазик'
  },
  ml: {
    name: 'malayalam',
    nativeName: 'മലയാളം'
  },
  mn: {
    name: 'mongolsk',
    nativeName: 'Монгол хэл'
  },
  mo: {
    name: 'moldovisk',
    nativeName: 'лимба молдовеняскэ'
  },
  mr: {
    name: 'marathi',
    nativeName: 'मराठी'
  },
  ms: {
    name: 'malajisk',
    nativeName: 'Bahasa Malaysia'
  },
  mt: {
    name: 'maltesisk',
    nativeName: 'Malti'
  },
  my: {
    name: 'burmesisk',
    nativeName: 'ဗမာစာ'
  },
  na: {
    name: 'naurisk',
    nativeName: 'Ekakairũ Naoero'
  },
  nb: {
    name: 'norsk (bokmål)',
    nativeName: 'Norsk (bokmål)'
  },
  nd: {
    name: 'nord-ndebele',
    nativeName: 'isiNdebele'
  },
  ne: {
    name: 'nepali',
    nativeName: 'नेपाली'
  },
  ng: {
    name: 'ndonga',
    nativeName: 'Owambo'
  },
  nl: {
    name: 'hollandsk',
    nativeName: 'Nederlands'
  },
  nn: {
    name: 'nynorsk',
    nativeName: 'Norsk nynorsk'
  },
  no: {
    name: 'norsk',
    nativeName: 'Norsk'
  },
  nr: {
    name: 'syd-ndebele',
    nativeName: 'isiNdebele'
  },
  nv: {
    name: 'navajo',
    nativeName: 'Diné bizaad'
  },
  ny: {
    name: 'chichewa',
    nativeName: 'chiCheŵa'
  },
  oc: {
    name: 'occitansk',
    nativeName: 'occitan'
  },
  oj: {
    name: 'ojibwa',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
  },
  om: {
    name: 'oromo',
    nativeName: 'Afaan Oromoo'
  },
  or: {
    name: 'oriya',
    nativeName: 'ଓଡ଼ିଆ'
  },
  os: {
    name: 'ossetisk',
    nativeName: 'ирон æвзаг'
  },
  pa: {
    name: 'punjabi',
    nativeName: 'ਪੰਜਾਬੀ'
  },
  pi: {
    name: 'pali',
    nativeName: 'पाऴि'
  },
  pl: {
    name: 'polsk',
    nativeName: 'język polski'
  },
  ps: {
    name: 'pashto',
    nativeName: 'پښتو'
  },
  pt: {
    name: 'portugisisk',
    nativeName: 'Português'
  },
  qu: {
    name: 'quechua',
    nativeName: 'Runa Simi'
  },
  rm: {
    name: 'rætoromansk',
    nativeName: 'rumantsch grischun'
  },
  rn: {
    name: 'kirundi',
    nativeName: 'Ikirundi'
  },
  ro: {
    name: 'rumænsk',
    nativeName: 'Română'
  },
  ru: {
    name: 'russisk',
    nativeName: 'Русский'
  },
  rw: {
    name: 'kinyarwanda',
    nativeName: 'Ikinyarwanda'
  },
  sa: {
    name: 'sanskrit',
    nativeName: 'संस्कृतम्'
  },
  sc: {
    name: 'sardisk',
    nativeName: 'sardu'
  },
  sd: {
    name: 'sindhi',
    nativeName: 'सिन्धी'
  },
  se: {
    name: 'nordsamisk',
    nativeName: 'Davvisámegiella'
  },
  sg: {
    name: 'sango',
    nativeName: 'yângâ tî sängö'
  },
  sh: {
    name: 'serbokroatisk',
    nativeName: 'Српскохрватски'
  },
  si: {
    name: 'singalesisk',
    nativeName: 'සිංහල'
  },
  sk: {
    name: 'slovakisk',
    nativeName: 'slovenčina'
  },
  sl: {
    name: 'slovensk',
    nativeName: 'slovenski jezik'
  },
  sm: {
    name: 'samoansk',
    nativeName: "gagana fa'a Samoa"
  },
  sn: {
    name: 'shona',
    nativeName: 'chiShona'
  },
  so: {
    name: 'somali',
    nativeName: 'Soomaaliga'
  },
  sq: {
    name: 'albansk',
    nativeName: 'Shqip'
  },
  sr: {
    name: 'serbisk',
    nativeName: 'српски језик'
  },
  ss: {
    name: 'swati',
    nativeName: 'SiSwati'
  },
  st: {
    name: 'sesotho',
    nativeName: 'Sesotho'
  },
  su: {
    name: 'sundanesisk',
    nativeName: 'Basa Sunda'
  },
  sv: {
    name: 'svensk',
    nativeName: 'Svenska'
  },
  sw: {
    name: 'swahili',
    nativeName: 'Kiswahili'
  },
  ta: {
    name: 'tamilsk',
    nativeName: 'தமிழ்'
  },
  te: {
    name: 'telugu',
    nativeName: 'తెలుగు'
  },
  tg: {
    name: 'tadtjikkisk',
    nativeName: 'тоҷикӣ'
  },
  th: {
    name: 'thai',
    nativeName: 'ไทย'
  },
  ti: {
    name: 'tigrinya',
    nativeName: 'ትግርኛ'
  },
  tk: {
    name: 'turkmensk',
    nativeName: 'Türkmen'
  },
  tl: {
    name: 'tagalog',
    nativeName: 'Wikang Tagalog'
  },
  tn: {
    name: 'tswana',
    nativeName: 'Setswana'
  },
  to: {
    name: 'tonganesisk',
    nativeName: 'faka Tonga'
  },
  tr: {
    name: 'tyrkisk',
    nativeName: 'Türkçe'
  },
  ts: {
    name: 'tsonga',
    nativeName: 'Xitsonga'
  },
  tt: {
    name: 'tatarsk',
    nativeName: 'татар теле'
  },
  tw: {
    name: 'twi',
    nativeName: 'Twi'
  },
  ty: {
    name: 'tahitisk',
    nativeName: 'Reo Tahiti'
  },
  ug: {
    name: 'uighur',
    nativeName: 'ئۇيغۇرچە‎'
  },
  uk: {
    name: 'ukrainsk',
    nativeName: 'Українська'
  },
  ur: {
    name: 'urdu',
    nativeName: 'اردو'
  },
  uz: {
    name: 'usbekisk',
    nativeName: 'Ўзбек'
  },
  ve: {
    name: 'venda',
    nativeName: 'Tshivenḓa'
  },
  vi: {
    name: 'vietnamesisk',
    nativeName: 'Tiếng Việt'
  },
  vo: {
    name: 'volapük',
    nativeName: 'Volapük'
  },
  wa: {
    name: 'vallonsk',
    nativeName: 'walon'
  },
  wo: {
    name: 'wolof',
    nativeName: 'Wollof'
  },
  xh: {
    name: 'xhosa',
    nativeName: 'isiXhosa'
  },
  yi: {
    name: 'jiddisch',
    nativeName: 'ייִדיש'
  },
  yo: {
    name: 'yoruba',
    nativeName: 'Yorùbá'
  },
  za: {
    name: 'zhuang',
    nativeName: 'Saɯ cueŋƅ'
  },
  zh: {
    name: 'kinesisk',
    nativeName: '中文'
  },
  zu: {
    name: 'zulu',
    nativeName: 'isiZulu'
  }
};

exports.default = LANGUAGES_LIST;
module.exports = exports['default'];

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _values = __webpack_require__("./node_modules/babel-runtime/core-js/object/values.js");

var _values2 = _interopRequireDefault(_values);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _data = __webpack_require__("./src/data.js");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ISO6391 = function () {
  function ISO6391() {
    (0, _classCallCheck3.default)(this, ISO6391);
  }

  (0, _createClass3.default)(ISO6391, null, [{
    key: 'getLanguages',
    value: function getLanguages() {
      var codes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return codes.map(function (code) {
        return {
          code: code,
          name: ISO6391.getName(code),
          nativeName: ISO6391.getNativeName(code)
        };
      });
    }
  }, {
    key: 'getName',
    value: function getName(code) {
      return ISO6391.validate(code) ? _data2.default[code].name : '';
    }
  }, {
    key: 'getAllNames',
    value: function getAllNames() {
      return (0, _values2.default)(_data2.default).map(function (l) {
        return l.name;
      });
    }
  }, {
    key: 'getNativeName',
    value: function getNativeName(code) {
      return ISO6391.validate(code) ? _data2.default[code].nativeName : '';
    }
  }, {
    key: 'getAllNativeNames',
    value: function getAllNativeNames() {
      return (0, _values2.default)(_data2.default).map(function (l) {
        return l.nativeName;
      });
    }
  }, {
    key: 'getCode',
    value: function getCode(name) {
      var code = (0, _keys2.default)(_data2.default).find(function (code) {
        var language = _data2.default[code];

        return language.name.toLowerCase() === name.toLowerCase() || language.nativeName.toLowerCase() === name.toLowerCase();
      });
      return code || '';
    }
  }, {
    key: 'getAllCodes',
    value: function getAllCodes() {
      return (0, _keys2.default)(_data2.default);
    }
  }, {
    key: 'validate',
    value: function validate(code) {
      return _data2.default.hasOwnProperty(code);
    }
  }]);
  return ISO6391;
}();

exports.default = ISO6391;
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map