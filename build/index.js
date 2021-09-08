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
    name: 'Afar',
    nativeName: 'Afaraf'
  },
  ab: {
    name: 'Abkhasisk',
    nativeName: 'аҧсуа бызшәа'
  },
  ae: {
    name: 'Avestisk',
    nativeName: 'avesta'
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans'
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan'
  },
  am: {
    name: 'Amharisk',
    nativeName: 'አማርኛ'
  },
  an: {
    name: 'Aragonisk',
    nativeName: 'aragonés'
  },
  ar: {
    name: 'Arabisk',
    nativeName: 'اللغة العربية'
  },
  as: {
    name: 'Assamesisk',
    nativeName: 'অসমীয়া'
  },
  av: {
    name: 'Avarisk',
    nativeName: 'авар мацӀ'
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru'
  },
  az: {
    name: 'Aserbajdsjansk',
    nativeName: 'azərbaycan dili'
  },
  ba: {
    name: 'Basjkirsk',
    nativeName: 'башҡорт теле'
  },
  be: {
    name: 'Hviderussisk',
    nativeName: 'беларуская мова'
  },
  bg: {
    name: 'Bulgarsk',
    nativeName: 'български език'
  },
  bh: {
    name: 'Bihari',
    nativeName: 'भोजपुरी'
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama'
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan'
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা'
  },
  bo: {
    name: 'Tibetansk',
    nativeName: 'བོད་ཡིག'
  },
  br: {
    name: 'Bretonsk',
    nativeName: 'brezhoneg'
  },
  bs: {
    name: 'Bosnisk',
    nativeName: 'bosanski jezik'
  },
  ca: {
    name: 'Katalansk',
    nativeName: 'Català'
  },
  ce: {
    name: 'Tjetjensk',
    nativeName: 'нохчийн мотт'
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru'
  },
  co: {
    name: 'Korsikansk',
    nativeName: 'corsu'
  },
  cr: {
    name: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ'
  },
  cs: {
    name: 'Tjekkisk',
    nativeName: 'čeština'
  },
  cu: {
    name: 'Kirkeslavisk',
    nativeName: 'ѩзыкъ словѣньскъ'
  },
  cv: {
    name: 'Tsjuvansk',
    nativeName: 'чӑваш чӗлхи'
  },
  cy: {
    name: 'Walisisk',
    nativeName: 'Cymraeg'
  },
  da: {
    name: 'Dansk',
    nativeName: 'dansk'
  },
  de: {
    name: 'Tysk',
    nativeName: 'Deutsch'
  },
  dv: {
    name: 'Divehi',
    nativeName: 'Dhivehi'
  },
  dz: {
    name: 'Dzongkha',
    nativeName: 'རྫོང་ཁ'
  },
  ee: {
    name: 'Ewe',
    nativeName: 'Eʋegbe'
  },
  el: {
    name: 'GGræskreek',
    nativeName: 'Ελληνικά'
  },
  en: {
    name: 'Engelsk',
    nativeName: 'English'
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto'
  },
  es: {
    name: 'Spansk',
    nativeName: 'Español'
  },
  et: {
    name: 'Estisk',
    nativeName: 'eesti'
  },
  eu: {
    name: 'Baskisk',
    nativeName: 'euskara'
  },
  fa: {
    name: 'Persisk',
    nativeName: 'فارسی'
  },
  ff: {
    name: 'Fulfulde',
    nativeName: 'Fulfulde'
  },
  fi: {
    name: 'Finsk',
    nativeName: 'suomi'
  },
  fj: {
    name: 'Fijisk',
    nativeName: 'Vakaviti'
  },
  fo: {
    name: 'Færøsk',
    nativeName: 'føroyskt'
  },
  fr: {
    name: 'Fransk',
    nativeName: 'Français'
  },
  fy: {
    name: 'Frisisk',
    nativeName: 'Frysk'
  },
  ga: {
    name: 'Irsk',
    nativeName: 'Gaeilge'
  },
  gd: {
    name: 'Skotsk gælisk',
    nativeName: 'Gàidhlig'
  },
  gl: {
    name: 'Galicisk',
    nativeName: 'galego'
  },
  gn: {
    name: 'Guaraní',
    nativeName: "Avañe'ẽ"
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી'
  },
  gv: {
    name: 'Mansk',
    nativeName: 'Gaelg'
  },
  ha: {
    name: 'Hausa',
    nativeName: 'هَوُسَ'
  },
  he: {
    name: 'Hebraisk',
    nativeName: 'עברית'
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी'
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu'
  },
  hr: {
    name: 'Kroatisk',
    nativeName: 'Hrvatski'
  },
  ht: {
    name: 'Haitisk kreolsk',
    nativeName: 'Kreyòl ayisyen'
  },
  hu: {
    name: 'Ungarsk',
    nativeName: 'magyar'
  },
  hy: {
    name: 'Armensk',
    nativeName: 'Հայերեն'
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero'
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua'
  },
  id: {
    name: 'Indonesisk',
    nativeName: 'Bahasa Indonesia'
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Interlingue'
  },
  ig: {
    name: 'Ibo',
    nativeName: 'Asụsụ Igbo'
  },
  ii: {
    name: 'Yi',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop'
  },
  ik: {
    name: 'Inupiak',
    nativeName: 'Iñupiaq'
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido'
  },
  is: {
    name: 'Islandsk',
    nativeName: 'Íslenska'
  },
  it: {
    name: 'Italiensk',
    nativeName: 'Italiano'
  },
  iu: {
    name: 'Inuittisk',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ'
  },
  ja: {
    name: 'Japansk',
    nativeName: '日本語'
  },
  jv: {
    name: 'Javanesisk',
    nativeName: 'basa Jawa'
  },
  ka: {
    name: 'Georgisk',
    nativeName: 'ქართული'
  },
  kg: {
    name: 'Congolesisk',
    nativeName: 'Kikongo'
  },
  ki: {
    name: 'Gikuyu',
    nativeName: 'Gĩkũyũ'
  },
  kj: {
    name: 'Kwanyama',
    nativeName: 'Kuanyama'
  },
  kk: {
    name: 'Kasakhisk',
    nativeName: 'қазақ тілі'
  },
  kl: {
    name: 'Kalaallisut',
    nativeName: 'kalaallisut'
  },
  km: {
    name: 'Khmer',
    nativeName: 'ខេមរភាសា'
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ'
  },
  ko: {
    name: 'Koreansk',
    nativeName: '한국어'
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri'
  },
  ks: {
    name: 'Kashmirisk',
    nativeName: 'कश्मीरी'
  },
  ku: {
    name: 'Kurdisk',
    nativeName: 'Kurdî'
  },
  kv: {
    name: 'Komi',
    nativeName: 'коми кыв'
  },
  kw: {
    name: 'Kornisk',
    nativeName: 'Kernewek'
  },
  ky: {
    name: 'Kirgisisk',
    nativeName: 'Кыргызча'
  },
  la: {
    name: 'Latin',
    nativeName: 'latine'
  },
  lb: {
    name: 'Letzeburgsk',
    nativeName: 'Lëtzebuergesch'
  },
  lg: {
    name: 'Luganda',
    nativeName: 'Luganda'
  },
  li: {
    name: 'Limburgisk',
    nativeName: 'Limburgs'
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Lingála'
  },
  lo: {
    name: 'Laotisk',
    nativeName: 'ພາສາ'
  },
  lt: {
    name: 'Litauisk',
    nativeName: 'lietuvių kalba'
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: 'Tshiluba'
  },
  lv: {
    name: 'Lettisk',
    nativeName: 'latviešu valoda'
  },
  mg: {
    name: 'Gassisk',
    nativeName: 'fiteny malagasy'
  },
  mh: {
    name: 'Marshallesisk',
    nativeName: 'Kajin M̧ajeļ'
  },
  mi: {
    name: 'Maoriski',
    nativeName: 'te reo Māori'
  },
  mk: {
    name: 'Makedonsk',
    nativeName: 'македонски јазик'
  },
  ml: {
    name: 'Malayalam',
    nativeName: 'മലയാളം'
  },
  mn: {
    name: 'Mongolsk',
    nativeName: 'Монгол хэл'
  },
  mo: {
    name: 'Moldovisk',
    nativeName: 'лимба молдовеняскэ'
  },
  mr: {
    name: 'Marathi',
    nativeName: 'मराठी'
  },
  ms: {
    name: 'Malajisk',
    nativeName: 'Bahasa Malaysia'
  },
  mt: {
    name: 'Maltesisk',
    nativeName: 'Malti'
  },
  my: {
    name: 'Burmesisk',
    nativeName: 'ဗမာစာ'
  },
  na: {
    name: 'Naurisk',
    nativeName: 'Ekakairũ Naoero'
  },
  nb: {
    name: 'Norsk Bokmål',
    nativeName: 'Norsk bokmål'
  },
  nd: {
    name: 'Nord-ndebele',
    nativeName: 'isiNdebele'
  },
  ne: {
    name: 'Nepali',
    nativeName: 'नेपाली'
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo'
  },
  nl: {
    name: 'Hollandsk',
    nativeName: 'Nederlands'
  },
  nn: {
    name: 'Nynorsk',
    nativeName: 'Norsk nynorsk'
  },
  no: {
    name: 'Norsk',
    nativeName: 'Norsk'
  },
  nr: {
    name: 'Syd-ndebele',
    nativeName: 'isiNdebele'
  },
  nv: {
    name: 'Navajo',
    nativeName: 'Diné bizaad'
  },
  ny: {
    name: 'Chichewa',
    nativeName: 'chiCheŵa'
  },
  oc: {
    name: 'Occitansk',
    nativeName: 'occitan'
  },
  oj: {
    name: 'Ojibwa',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo'
  },
  or: {
    name: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ'
  },
  os: {
    name: 'Ossetisk',
    nativeName: 'ирон æвзаг'
  },
  pa: {
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ'
  },
  pi: {
    name: 'Pali',
    nativeName: 'पाऴि'
  },
  pl: {
    name: 'Polsk',
    nativeName: 'język polski'
  },
  ps: {
    name: 'Pashto',
    nativeName: 'پښتو'
  },
  pt: {
    name: 'Portugisisk',
    nativeName: 'Português'
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi'
  },
  rm: {
    name: 'Rætoromansk',
    nativeName: 'rumantsch grischun'
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'Ikirundi'
  },
  ro: {
    name: 'Rumænsk',
    nativeName: 'Română'
  },
  ru: {
    name: 'Russisk',
    nativeName: 'Русский'
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda'
  },
  sa: {
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्'
  },
  sc: {
    name: 'Sardisk',
    nativeName: 'sardu'
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'सिन्धी'
  },
  se: {
    name: 'Nordsamisk',
    nativeName: 'Davvisámegiella'
  },
  sg: {
    name: 'Sango',
    nativeName: 'yângâ tî sängö'
  },
  sh: {
    name: 'Serbokroatisk',
    nativeName: 'Српскохрватски'
  },
  si: {
    name: 'Singalesisk',
    nativeName: 'සිංහල'
  },
  sk: {
    name: 'Slovakisk',
    nativeName: 'slovenčina'
  },
  sl: {
    name: 'Slovensk',
    nativeName: 'slovenski jezik'
  },
  sm: {
    name: 'Samoansk',
    nativeName: "gagana fa'a Samoa"
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona'
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga'
  },
  sq: {
    name: 'Albansk',
    nativeName: 'Shqip'
  },
  sr: {
    name: 'Serbisk',
    nativeName: 'српски језик'
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati'
  },
  st: {
    name: 'Sesotho',
    nativeName: 'Sesotho'
  },
  su: {
    name: 'Sundanesisk',
    nativeName: 'Basa Sunda'
  },
  sv: {
    name: 'Svensk',
    nativeName: 'Svenska'
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili'
  },
  ta: {
    name: 'Tamilsk',
    nativeName: 'தமிழ்'
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు'
  },
  tg: {
    name: 'Tadtjikkisk',
    nativeName: 'тоҷикӣ'
  },
  th: {
    name: 'Thai',
    nativeName: 'ไทย'
  },
  ti: {
    name: 'Tigrinya',
    nativeName: 'ትግርኛ'
  },
  tk: {
    name: 'Turkmensk',
    nativeName: 'Türkmen'
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog'
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana'
  },
  to: {
    name: 'Tonganesisk',
    nativeName: 'faka Tonga'
  },
  tr: {
    name: 'Tyrkisk',
    nativeName: 'Türkçe'
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga'
  },
  tt: {
    name: 'Tatarsk',
    nativeName: 'татар теле'
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi'
  },
  ty: {
    name: 'Tahitisk',
    nativeName: 'Reo Tahiti'
  },
  ug: {
    name: 'Uighur',
    nativeName: 'ئۇيغۇرچە‎'
  },
  uk: {
    name: 'Ukrainsk',
    nativeName: 'Українська'
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو'
  },
  uz: {
    name: 'Usbekisk',
    nativeName: 'Ўзбек'
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshivenḓa'
  },
  vi: {
    name: 'Vietnamesisk',
    nativeName: 'Tiếng Việt'
  },
  vo: {
    name: 'Volapük',
    nativeName: 'Volapük'
  },
  wa: {
    name: 'Vallonsk',
    nativeName: 'walon'
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof'
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa'
  },
  yi: {
    name: 'Jiddisch',
    nativeName: 'ייִדיש'
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yorùbá'
  },
  za: {
    name: 'Zhuang',
    nativeName: 'Saɯ cueŋƅ'
  },
  zh: {
    name: 'Kinesisk',
    nativeName: '中文'
  },
  zu: {
    name: 'Zulu',
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