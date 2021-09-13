window["tableau"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist-extensions/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../lib/src/ExtensionsApi.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/core-js/es/array/find.js":
/*!************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/array/find.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.array.find */ "../../../node_modules/core-js/modules/es.array.find.js");
var entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ "../../../node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('Array', 'find');


/***/ }),

/***/ "../../../node_modules/core-js/es/array/from.js":
/*!************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/array/from.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.iterator */ "../../../node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/es.array.from */ "../../../node_modules/core-js/modules/es.array.from.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "../../../node_modules/core-js/es/map/index.js":
/*!***********************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/map/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.map */ "../../../node_modules/core-js/modules/es.map.js");
__webpack_require__(/*! ../../modules/es.object.to-string */ "../../../node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! ../../modules/es.string.iterator */ "../../../node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Map;


/***/ }),

/***/ "../../../node_modules/core-js/es/number/is-integer.js":
/*!*******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/number/is-integer.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.number.is-integer */ "../../../node_modules/core-js/modules/es.number.is-integer.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Number.isInteger;


/***/ }),

/***/ "../../../node_modules/core-js/es/number/is-nan.js":
/*!***************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/number/is-nan.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.number.is-nan */ "../../../node_modules/core-js/modules/es.number.is-nan.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Number.isNaN;


/***/ }),

/***/ "../../../node_modules/core-js/es/number/parse-float.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/number/parse-float.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.number.parse-float */ "../../../node_modules/core-js/modules/es.number.parse-float.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Number.parseFloat;


/***/ }),

/***/ "../../../node_modules/core-js/es/number/parse-int.js":
/*!******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/number/parse-int.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.number.parse-int */ "../../../node_modules/core-js/modules/es.number.parse-int.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Number.parseInt;


/***/ }),

/***/ "../../../node_modules/core-js/es/object/assign.js":
/*!***************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/object/assign.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.assign */ "../../../node_modules/core-js/modules/es.object.assign.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Object.assign;


/***/ }),

/***/ "../../../node_modules/core-js/es/object/entries.js":
/*!****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/object/entries.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.entries */ "../../../node_modules/core-js/modules/es.object.entries.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Object.entries;


/***/ }),

/***/ "../../../node_modules/core-js/es/object/set-prototype-of.js":
/*!*************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/object/set-prototype-of.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.set-prototype-of */ "../../../node_modules/core-js/modules/es.object.set-prototype-of.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Object.setPrototypeOf;


/***/ }),

/***/ "../../../node_modules/core-js/es/promise/index.js":
/*!***************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/es/promise/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.aggregate-error */ "../../../node_modules/core-js/modules/es.aggregate-error.js");
__webpack_require__(/*! ../../modules/es.object.to-string */ "../../../node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! ../../modules/es.promise */ "../../../node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! ../../modules/es.promise.all-settled */ "../../../node_modules/core-js/modules/es.promise.all-settled.js");
__webpack_require__(/*! ../../modules/es.promise.any */ "../../../node_modules/core-js/modules/es.promise.any.js");
__webpack_require__(/*! ../../modules/es.promise.finally */ "../../../node_modules/core-js/modules/es.promise.finally.js");
__webpack_require__(/*! ../../modules/es.string.iterator */ "../../../node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
var path = __webpack_require__(/*! ../../internals/path */ "../../../node_modules/core-js/internals/path.js");

module.exports = path.Promise;


/***/ }),

/***/ "../../../node_modules/core-js/internals/a-function.js":
/*!*******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/a-function.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/add-to-unscopables.js":
/*!***************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/add-to-unscopables.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/an-instance.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/an-instance.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/an-object.js":
/*!******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/an-object.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-from.js":
/*!*******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/array-from.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../../node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "../../../node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../../../node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../../node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../../node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../../node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-iteration.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/array-iteration.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../../node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../../node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-species-create.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/array-species-create.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../../../node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!*****************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../../../node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!***************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/classof.js":
/*!****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/classof.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../../node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/collection-strong.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/collection-strong.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../../node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../../node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../../node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../../node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../../node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../../node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "../../../node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/collection.js":
/*!*******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/collection.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "../../../node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../../node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../../node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../../node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../../../node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/correct-prototype-getter.js":
/*!*********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-iterator-constructor.js":
/*!************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
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

/***/ "../../../node_modules/core-js/internals/create-property.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/create-property.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/define-iterator.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/define-iterator.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/descriptors.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/descriptors.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/dom-iterables.js":
/*!**********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/dom-iterables.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-ios.js":
/*!**********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/engine-is-ios.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-node.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/engine-is-node.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!*******************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "../../../node_modules/core-js/internals/entry-unbind.js":
/*!*********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/entry-unbind.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../../node_modules/core-js/internals/function-bind-context.js");

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../../../node_modules/core-js/internals/export.js":
/*!***************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/export.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/fails.js":
/*!**************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/fails.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/freezing.js":
/*!*****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/freezing.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/function-bind-context.js":
/*!******************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/function-bind-context.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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

/***/ "../../../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../../../node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/get-iterator-method.js":
/*!****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/get-iterator-method.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "../../../node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/global.js":
/*!***************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/global.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../packages/api-extensions-js/node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../node_modules/core-js/internals/has.js":
/*!************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/has.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/host-report-errors.js":
/*!***************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/host-report-errors.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/html.js":
/*!*************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/html.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../../../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../../../node_modules/core-js/internals/inherit-if-required.js":
/*!****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/inherit-if-required.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../../../node_modules/core-js/internals/internal-metadata.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/internal-metadata.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "../../../node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "../../../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-array-iterator-method.js":
/*!*********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-array.js":
/*!*****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/is-array.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-forced.js":
/*!******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/is-forced.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-integer.js":
/*!*******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/is-integer.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

var floor = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.es/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-object.js":
/*!******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/is-object.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-pure.js":
/*!****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/is-pure.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterate.js":
/*!****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/iterate.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../../../node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../../node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../../node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../../../node_modules/core-js/internals/iterator-close.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterator-close.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/iterator-close.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators-core.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/iterators-core.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators.js":
/*!******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/iterators.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/microtask.js":
/*!******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/microtask.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var macrotask = __webpack_require__(/*! ../internals/task */ "../../../node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../../../node_modules/core-js/internals/engine-is-ios.js");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ "../../../node_modules/core-js/internals/engine-is-webos-webkit.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../../node_modules/core-js/internals/engine-is-node.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-promise-constructor.js":
/*!***********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/native-promise-constructor.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-symbol.js":
/*!**********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/native-symbol.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../../node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // eslint-disable-next-line es/no-symbol -- required for testing
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-weak-map.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/native-weak-map.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../../../node_modules/core-js/internals/new-promise-capability.js":
/*!*******************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/new-promise-capability.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/number-parse-float.js":
/*!***************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/number-parse-float.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "../../../node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../../../node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "../../../node_modules/core-js/internals/number-parse-int.js":
/*!*************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/number-parse-int.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "../../../node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../../../node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-assign.js":
/*!**********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-assign.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-create.js":
/*!**********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-create.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../../../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../../../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-properties.js":
/*!*********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-define-properties.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-prototype-of.js":
/*!********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../../../node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-keys.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-to-array.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-to-array.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-to-string.js":
/*!*************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/object-to-string.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../../node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../../../node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/path.js":
/*!*************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/path.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "../../../node_modules/core-js/internals/perform.js":
/*!****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/perform.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/promise-resolve.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/promise-resolve.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "../../../node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine-all.js":
/*!*********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/redefine-all.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine.js":
/*!*****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/redefine.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-global.js":
/*!*******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/set-global.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-species.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/set-species.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-to-string-tag.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/set-to-string-tag.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared.js":
/*!***************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/shared.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.10.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/species-constructor.js":
/*!****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/species-constructor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/string-multibyte.js":
/*!*************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/string-multibyte.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/string-trim.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/string-trim.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../../../node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/task.js":
/*!*************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/task.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../../node_modules/core-js/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "../../../node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../../../node_modules/core-js/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../../node_modules/core-js/internals/engine-is-node.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-integer.js":
/*!*******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/to-integer.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-length.js":
/*!******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/to-length.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-object.js":
/*!******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/to-object.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-string-tag-support.js":
/*!******************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "../../../node_modules/core-js/internals/uid.js":
/*!************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/uid.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../../../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/whitespaces.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/internals/whitespaces.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.aggregate-error.js":
/*!*************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.aggregate-error.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../../node_modules/core-js/internals/iterate.js");

var $AggregateError = function AggregateError(errors, message) {
  var that = this;
  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
  if (setPrototypeOf) {
    // eslint-disable-next-line unicorn/error-message -- expected
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
  var errorsArray = [];
  iterate(errors, errorsArray.push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

$AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(5, $AggregateError),
  message: createPropertyDescriptor(5, ''),
  name: createPropertyDescriptor(5, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.find.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.array.find.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "../../../node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../../node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.from.js":
/*!********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.array.from.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "../../../node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../../node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.iterator.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.array.iterator.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../../node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../../node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.map.js":
/*!*************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.map.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "../../../node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "../../../node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.number.is-integer.js":
/*!***************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.number.is-integer.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var isInteger = __webpack_require__(/*! ../internals/is-integer */ "../../../node_modules/core-js/internals/is-integer.js");

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isInteger
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.number.is-nan.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.number.is-nan.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");

// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
$({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return number != number;
  }
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.number.parse-float.js":
/*!****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.number.parse-float.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "../../../node_modules/core-js/internals/number-parse-float.js");

// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseFloat != parseFloat }, {
  parseFloat: parseFloat
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.number.parse-int.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.number.parse-int.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "../../../node_modules/core-js/internals/number-parse-int.js");

// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {
  parseInt: parseInt
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.object.assign.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.object.assign.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "../../../node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.object.entries.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.object.entries.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var $entries = __webpack_require__(/*! ../internals/object-to-array */ "../../../node_modules/core-js/internals/object-to-array.js").entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.object.set-prototype-of.js":
/*!*********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.object.to-string.js":
/*!**************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.object.to-string.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../../node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "../../../node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.promise.all-settled.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.promise.all-settled.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../../../node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../../../node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../../node_modules/core-js/internals/iterate.js");

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.promise.any.js":
/*!*********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.promise.any.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../../../node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../../../node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../../node_modules/core-js/internals/iterate.js");

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        errors.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.promise.finally.js":
/*!*************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.promise.finally.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../../../node_modules/core-js/internals/native-promise-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../../../node_modules/core-js/internals/species-constructor.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../../../node_modules/core-js/internals/promise-resolve.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.promise.js":
/*!*****************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.promise.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../../../node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../../node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../../node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../../../node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../../node_modules/core-js/internals/an-instance.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../../node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../../node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../../../node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "../../../node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "../../../node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../../../node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "../../../node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../../../node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../../../node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../../node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.string.iterator.js":
/*!*************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/es.string.iterator.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "../../../node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../../node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!***********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../../node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../../../node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "../../../node_modules/guid/guid.js":
/*!************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/node_modules/guid/guid.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  var validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

  function gen(count) {
    var out = "";
    for (var i=0; i<count; i++) {
      out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return out;
  }

  function Guid(guid) {
    if (!guid) throw new TypeError("Invalid argument; `value` has no value.");
      
    this.value = Guid.EMPTY;
    
    if (guid && guid instanceof Guid) {
      this.value = guid.toString();

    } else if (guid && Object.prototype.toString.call(guid) === "[object String]" && Guid.isGuid(guid)) {
      this.value = guid;
    }
    
    this.equals = function(other) {
      // Comparing string `value` against provided `guid` will auto-call
      // toString on `guid` for comparison
      return Guid.isGuid(other) && this.value == other;
    };

    this.isEmpty = function() {
      return this.value === Guid.EMPTY;
    };
    
    this.toString = function() {
      return this.value;
    };
    
    this.toJSON = function() {
      return this.value;
    };
  };

  Guid.EMPTY = "00000000-0000-0000-0000-000000000000";

  Guid.isGuid = function(value) {
    return value && (value instanceof Guid || validator.test(value.toString()));
  };

  Guid.create = function() {
    return new Guid([gen(2), gen(1), gen(1), gen(1), gen(3)].join("-"));
  };

  Guid.raw = function() {
    return [gen(2), gen(1), gen(1), gen(1), gen(3)].join("-");
  };

  if( true && module.exports) {
    module.exports = Guid;
  }
  else if (typeof window != 'undefined') {
    window.Guid = Guid;
  }
})();


/***/ }),

/***/ "../../api-external-contract-js/lib/src/ExtensionsApiExternalContract.js":
/*!*************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-external-contract-js/lib/src/ExtensionsApiExternalContract.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file re-exports everything which is part of the extensions api public interface
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Export everything from the shared file
__export(__webpack_require__(/*! ./SharedApiExternalContract */ "../../api-external-contract-js/lib/src/SharedApiExternalContract.js"));


/***/ }),

/***/ "../../api-external-contract-js/lib/src/ExternalContract.js":
/*!************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-external-contract-js/lib/src/ExternalContract.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./ExtensionsApiExternalContract */ "../../api-external-contract-js/lib/src/ExtensionsApiExternalContract.js"));


/***/ }),

/***/ "../../api-external-contract-js/lib/src/ExternalContract/Namespaces/Tableau.js":
/*!*******************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-external-contract-js/lib/src/ExternalContract/Namespaces/Tableau.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * The tableau namespace exists for organization and to avoid polluting
 * the global namespace. It contains no constructs other than sub-namespaces and the Tableau enumerations.
 */
var Tableau;
(function (Tableau) {
    /**
     * The context in which the Extensions is currently running.
     */
    var ExtensionContext;
    (function (ExtensionContext) {
        ExtensionContext["Desktop"] = "desktop";
        ExtensionContext["Server"] = "server";
    })(ExtensionContext = Tableau.ExtensionContext || (Tableau.ExtensionContext = {}));
    /**
     * The mode in which the Extensions is currently running.
     */
    var ExtensionMode;
    (function (ExtensionMode) {
        ExtensionMode["Authoring"] = "authoring";
        ExtensionMode["Viewing"] = "viewing";
    })(ExtensionMode = Tableau.ExtensionMode || (Tableau.ExtensionMode = {}));
    var AnalyticsObjectType;
    (function (AnalyticsObjectType) {
        AnalyticsObjectType["Cluster"] = "cluster";
        AnalyticsObjectType["Forecast"] = "forecast";
        AnalyticsObjectType["TrendLine"] = "trend-line";
    })(AnalyticsObjectType = Tableau.AnalyticsObjectType || (Tableau.AnalyticsObjectType = {}));
    var ColumnType;
    (function (ColumnType) {
        ColumnType["Discrete"] = "discrete";
        ColumnType["Continuous"] = "continuous";
    })(ColumnType = Tableau.ColumnType || (Tableau.ColumnType = {}));
    /**
     * What the object represents in a dashboard.
     */
    var DashboardObjectType;
    (function (DashboardObjectType) {
        DashboardObjectType["Blank"] = "blank";
        DashboardObjectType["Worksheet"] = "worksheet";
        DashboardObjectType["QuickFilter"] = "quick-filter";
        DashboardObjectType["ParameterControl"] = "parameter-control";
        DashboardObjectType["PageFilter"] = "page-filter";
        DashboardObjectType["Legend"] = "legend";
        DashboardObjectType["Title"] = "title";
        DashboardObjectType["Text"] = "text";
        DashboardObjectType["Image"] = "image";
        DashboardObjectType["WebPage"] = "web-page";
        DashboardObjectType["Extension"] = "extension";
    })(DashboardObjectType = Tableau.DashboardObjectType || (Tableau.DashboardObjectType = {}));
    /**
     * The different types of data a value can have
     */
    var DataType;
    (function (DataType) {
        DataType["String"] = "string";
        DataType["Int"] = "int";
        DataType["Float"] = "float";
        DataType["Bool"] = "bool";
        DataType["Date"] = "date";
        DataType["DateTime"] = "date-time";
        DataType["Spatial"] = "spatial";
    })(DataType = Tableau.DataType || (Tableau.DataType = {}));
    /**
     * Valid date ranges for a relative date filter.
     */
    var DateRangeType;
    (function (DateRangeType) {
        DateRangeType["Last"] = "last";
        DateRangeType["LastN"] = "last-n";
        DateRangeType["Next"] = "next";
        DateRangeType["NextN"] = "next-n";
        DateRangeType["Current"] = "current";
        DateRangeType["ToDate"] = "to-date";
    })(DateRangeType = Tableau.DateRangeType || (Tableau.DateRangeType = {}));
    var EncodingType;
    (function (EncodingType) {
        EncodingType["Column"] = "column";
        EncodingType["Row"] = "row";
        EncodingType["Page"] = "page";
        EncodingType["Filter"] = "filter";
        EncodingType["MarksType"] = "marks-type";
        EncodingType["MeasureValues"] = "measure-values";
        EncodingType["Color"] = "color";
        EncodingType["Size"] = "size";
        EncodingType["Label"] = "label";
        EncodingType["Detail"] = "detail";
        EncodingType["Tooltip"] = "tooltip";
        EncodingType["Shape"] = "shape";
        EncodingType["Path"] = "path";
        EncodingType["Angle"] = "angle";
    })(EncodingType = Tableau.EncodingType || (Tableau.EncodingType = {}));
    /**
     * All error codes used by the Extensions API.
     */
    var ErrorCodes;
    (function (ErrorCodes) {
        /**
         * Thrown when caller attempts to execute command before initialization has completed.
         */
        ErrorCodes["APINotInitialized"] = "api-not-initialized";
        /**
         * Thrown when caller attempts to execute command while extension is not visible.
         */
        ErrorCodes["VisibilityError"] = "visibility-error";
        /**
         * Only one dialog can be opened at time with the UI namespace functionality.
         */
        ErrorCodes["DialogAlreadyOpen"] = "dialog-already-open";
        /**
         * The open dialog was closed by the user.
         */
        ErrorCodes["DialogClosedByUser"] = "dialog-closed-by-user";
        /**
         * An error occurred within the Tableau Extensions API. Contact Tableau Support.
         */
        ErrorCodes["InternalError"] = "internal-error";
        /**
         * A dialog must start on the same domain as the parent extenion.
         */
        ErrorCodes["InvalidDomainDialog"] = "invalid-dialog-domain";
        /**
         * A parameter is not the correct data type or format. The name of the parameter is specified in the Error.message field.
         */
        ErrorCodes["InvalidParameter"] = "invalid-parameter";
        /**
         * Can occur if the extension interacts with a filter that has been removed from the worksheet.
         */
        ErrorCodes["MissingFilter"] = "missing-filter";
        /**
         * Can occur if the extension interacts with a parameter that has been removed from the worksheet.
         */
        ErrorCodes["MissingParameter"] = "missing-parameter";
        /**
         * Internal Server Error
         */
        ErrorCodes["ServerError"] = "server-error";
        /**
         * Developer cannot save settings while another save is still in progress.
         */
        ErrorCodes["SettingSaveInProgress"] = "setting-save-in-progress";
        /**
         * An unknown event name was specified in the call to `addEventListener` or `removeEventListener`.
         */
        ErrorCodes["UnsupportedEventName"] = "unsupported-event-name";
        /**
         * A method was used for a type of data source that doesn't support that method (see getActiveTablesAsync for an example)
         */
        ErrorCodes["UnsupportedMethodForDataSourceType"] = "unsupported-method-for-data-source-type";
    })(ErrorCodes = Tableau.ErrorCodes || (Tableau.ErrorCodes = {}));
    /**
     *  Type of aggregation on a field.
     */
    var FieldAggregationType;
    (function (FieldAggregationType) {
        FieldAggregationType["Sum"] = "sum";
        FieldAggregationType["Avg"] = "avg";
        FieldAggregationType["Min"] = "min";
        FieldAggregationType["Max"] = "max";
        FieldAggregationType["Stdev"] = "stdev";
        FieldAggregationType["Stdevp"] = "stdevp";
        FieldAggregationType["Var"] = "var";
        FieldAggregationType["Varp"] = "varp";
        FieldAggregationType["Count"] = "count";
        FieldAggregationType["Countd"] = "countd";
        FieldAggregationType["Median"] = "median";
        FieldAggregationType["Attr"] = "attr";
        FieldAggregationType["None"] = "none";
        FieldAggregationType["Year"] = "year";
        FieldAggregationType["Qtr"] = "qtr";
        FieldAggregationType["Month"] = "month";
        FieldAggregationType["Day"] = "day";
        FieldAggregationType["Hour"] = "hour";
        FieldAggregationType["Minute"] = "minute";
        FieldAggregationType["Second"] = "second";
        FieldAggregationType["Week"] = "week";
        FieldAggregationType["Weekday"] = "weekday";
        FieldAggregationType["MonthYear"] = "month-year";
        FieldAggregationType["Mdy"] = "mdy";
        FieldAggregationType["End"] = "end";
        FieldAggregationType["TruncYear"] = "trunc-year";
        FieldAggregationType["TruncQtr"] = "trunc-qtr";
        FieldAggregationType["TruncMonth"] = "trunc-month";
        FieldAggregationType["TruncWeek"] = "trunc-week";
        FieldAggregationType["TruncDay"] = "trunc-day";
        FieldAggregationType["TruncHour"] = "trunc-hour";
        FieldAggregationType["TruncMinute"] = "trunc-minute";
        FieldAggregationType["TruncSecond"] = "trunc-second";
        FieldAggregationType["Quart1"] = "quart1";
        FieldAggregationType["Quart3"] = "quart3";
        FieldAggregationType["Skewness"] = "skewness";
        FieldAggregationType["Kurtosis"] = "kurtosis";
        FieldAggregationType["InOut"] = "in-out";
        FieldAggregationType["User"] = "user";
    })(FieldAggregationType = Tableau.FieldAggregationType || (Tableau.FieldAggregationType = {}));
    /**
     * Role of a field.
     */
    var FieldRoleType;
    (function (FieldRoleType) {
        FieldRoleType["Dimension"] = "dimension";
        FieldRoleType["Measure"] = "measure";
        FieldRoleType["Unknown"] = "unknown";
    })(FieldRoleType = Tableau.FieldRoleType || (Tableau.FieldRoleType = {}));
    /**
     * An enumeration of the valid types of filters that can be applied.
     */
    var FilterType;
    (function (FilterType) {
        FilterType["Categorical"] = "categorical";
        FilterType["Range"] = "range";
        FilterType["Hierarchical"] = "hierarchical";
        FilterType["RelativeDate"] = "relative-date";
    })(FilterType = Tableau.FilterType || (Tableau.FilterType = {}));
    /**
     * The different update types for applying filter
     */
    var FilterUpdateType;
    (function (FilterUpdateType) {
        FilterUpdateType["Add"] = "add";
        FilterUpdateType["All"] = "all";
        FilterUpdateType["Replace"] = "replace";
        FilterUpdateType["Remove"] = "remove";
    })(FilterUpdateType = Tableau.FilterUpdateType || (Tableau.FilterUpdateType = {}));
    /**
     * The domain type for a filter
     */
    var FilterDomainType;
    (function (FilterDomainType) {
        /**
         * The domain values that are relevant to the specified filter
         * i.e. the domain is restricted by a previous filter
         */
        FilterDomainType["Relevant"] = "relevant";
        /**
         * list of all possible domain values from database
         */
        FilterDomainType["Database"] = "database";
    })(FilterDomainType = Tableau.FilterDomainType || (Tableau.FilterDomainType = {}));
    /**
     * The option for specifying which values to include for filtering
     * Indicates what to do with null values for a given filter or mark selection call.
     */
    var FilterNullOption;
    (function (FilterNullOption) {
        FilterNullOption["NullValues"] = "null-values";
        FilterNullOption["NonNullValues"] = "non-null-values";
        FilterNullOption["AllValues"] = "all-values";
    })(FilterNullOption = Tableau.FilterNullOption || (Tableau.FilterNullOption = {}));
    /**
     * Type of mark for a given marks card in a viz.
     */
    var MarkType;
    (function (MarkType) {
        MarkType["Bar"] = "bar";
        MarkType["Line"] = "line";
        MarkType["Area"] = "area";
        MarkType["Square"] = "square";
        MarkType["Circle"] = "circle";
        MarkType["Shape"] = "shape";
        MarkType["Text"] = "text";
        MarkType["Map"] = "map";
        MarkType["Pie"] = "pie";
        MarkType["GanttBar"] = "gantt-bar";
        MarkType["Polygon"] = "polygon";
    })(MarkType = Tableau.MarkType || (Tableau.MarkType = {}));
    /**
     * An enumeration describing the different types of allowable values.
     * This is used for restricting the domain of a parameter
     */
    var ParameterValueType;
    (function (ParameterValueType) {
        ParameterValueType["All"] = "all";
        ParameterValueType["List"] = "list";
        ParameterValueType["Range"] = "range";
    })(ParameterValueType = Tableau.ParameterValueType || (Tableau.ParameterValueType = {}));
    /**
     * Date period used in filters and in parameters.
     */
    var PeriodType;
    (function (PeriodType) {
        PeriodType["Years"] = "years";
        PeriodType["Quarters"] = "quarters";
        PeriodType["Months"] = "months";
        PeriodType["Weeks"] = "weeks";
        PeriodType["Days"] = "days";
        PeriodType["Hours"] = "hours";
        PeriodType["Minutes"] = "minutes";
        PeriodType["Seconds"] = "seconds";
    })(PeriodType = Tableau.PeriodType || (Tableau.PeriodType = {}));
    var QuickTableCalcType;
    (function (QuickTableCalcType) {
        QuickTableCalcType["RunningTotal"] = "running-total";
        QuickTableCalcType["Difference"] = "difference";
        QuickTableCalcType["PercentDifference"] = "percent-difference";
        QuickTableCalcType["PercentOfTotal"] = "percent-of-total";
        QuickTableCalcType["Rank"] = "rank";
        QuickTableCalcType["Percentile"] = "percentile";
        QuickTableCalcType["MovingAverage"] = "moving-average";
        QuickTableCalcType["YTDTotal"] = "ytd-total";
        QuickTableCalcType["CompoundGrowthRate"] = "compound-growth-rate";
        QuickTableCalcType["YearOverYearGrowth"] = "year-over-year-growth";
        QuickTableCalcType["YTDGrowth"] = "ytd-growth";
        QuickTableCalcType["Undefined"] = "undefined";
    })(QuickTableCalcType = Tableau.QuickTableCalcType || (Tableau.QuickTableCalcType = {}));
    /**
     * Enum for specifying the selection type for select marks api.
     */
    var SelectionUpdateType;
    (function (SelectionUpdateType) {
        SelectionUpdateType["Replace"] = "select-replace";
        SelectionUpdateType["Add"] = "select-add";
        SelectionUpdateType["Remove"] = "select-remove";
    })(SelectionUpdateType = Tableau.SelectionUpdateType || (Tableau.SelectionUpdateType = {}));
    /**
     * The type of sheet a [[Sheet]] object represents
     */
    var SheetType;
    (function (SheetType) {
        SheetType["Dashboard"] = "dashboard";
        SheetType["Story"] = "story";
        SheetType["Worksheet"] = "worksheet";
    })(SheetType = Tableau.SheetType || (Tableau.SheetType = {}));
    var SortDirection;
    (function (SortDirection) {
        SortDirection["Increasing"] = "increasing";
        SortDirection["Decreasing"] = "decreasing";
    })(SortDirection = Tableau.SortDirection || (Tableau.SortDirection = {}));
    /**
     * Represents the type of event that can be listened for.
     */
    var TableauEventType;
    (function (TableauEventType) {
        /** Raised when any filter has changed state. You can use this event type with [[Worksheet]] objects.*/
        TableauEventType["FilterChanged"] = "filter-changed";
        /** The selected marks on a visualization has changed. You can use this event type with [[Worksheet]] objects. */
        TableauEventType["MarkSelectionChanged"] = "mark-selection-changed";
        /** A parameter has had its value modified. You can use this event type with [[Parameter]] objects. */
        TableauEventType["ParameterChanged"] = "parameter-changed";
        /** Settings have been changed for this extension. You can use this event type with [[Settings]] objects. */
        TableauEventType["SettingsChanged"] = "settings-changed";
    })(TableauEventType = Tableau.TableauEventType || (Tableau.TableauEventType = {}));
    var TrendLineModelType;
    (function (TrendLineModelType) {
        TrendLineModelType["Linear"] = "linear";
        TrendLineModelType["Logarithmic"] = "logarithmic";
        TrendLineModelType["Exponential"] = "exponential";
        TrendLineModelType["Polynomial"] = "polynomial";
    })(TrendLineModelType = Tableau.TrendLineModelType || (Tableau.TrendLineModelType = {}));
    /**
     * Enum that represents the visibility state of a zone.
     * @since 1.1.0
     */
    var ZoneVisibilityType;
    (function (ZoneVisibilityType) {
        /** Used for turning on the visibility of a zone in the dashboard.*/
        ZoneVisibilityType["Show"] = "show";
        /** Used for turning off the visibility of a zone in the dashboard.*/
        ZoneVisibilityType["Hide"] = "hide";
    })(ZoneVisibilityType = Tableau.ZoneVisibilityType || (Tableau.ZoneVisibilityType = {}));
    /**
     * Enum that serves as a filter on the DataValues returned from `getSummaryDataAsync`,
     * `getUnderlyingTableDataAsync` and `getLogicalTableDataAsync`.
     * This is an optimization of returned data values only. Tableau versions prior to 2021.2
     * will pass the data across and populate the DataValue properties.
     * Please note that all properties not requested will be `undefined` in the DataValue results.
     * @since 1.5.0
     */
    var IncludeDataValuesOption;
    (function (IncludeDataValuesOption) {
        /** DataValues will include all properties.*/
        IncludeDataValuesOption["AllValues"] = "all-values";
        /** DataValues will only include value and nativeValue properties.*/
        IncludeDataValuesOption["OnlyNativeValues"] = "only-native-values";
        /** DataValues will only include formattedValue properties. */
        IncludeDataValuesOption["OnlyFormattedValues"] = "only-formatted-values";
    })(IncludeDataValuesOption = Tableau.IncludeDataValuesOption || (Tableau.IncludeDataValuesOption = {}));
})(Tableau || (Tableau = {}));
module.exports = Tableau;


/***/ }),

/***/ "../../api-external-contract-js/lib/src/SharedApiExternalContract.js":
/*!*********************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-external-contract-js/lib/src/SharedApiExternalContract.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file re-exports everything which is part of the shared embedding api public interface
Object.defineProperty(exports, "__esModule", { value: true });
var Tableau_1 = __webpack_require__(/*! ./ExternalContract/Namespaces/Tableau */ "../../api-external-contract-js/lib/src/ExternalContract/Namespaces/Tableau.js");
exports.ExtensionContext = Tableau_1.ExtensionContext;
exports.ExtensionMode = Tableau_1.ExtensionMode;
exports.AnalyticsObjectType = Tableau_1.AnalyticsObjectType;
exports.ColumnType = Tableau_1.ColumnType;
exports.DashboardObjectType = Tableau_1.DashboardObjectType;
exports.DataType = Tableau_1.DataType;
exports.DateRangeType = Tableau_1.DateRangeType;
exports.EncodingType = Tableau_1.EncodingType;
exports.ErrorCodes = Tableau_1.ErrorCodes;
exports.FieldAggregationType = Tableau_1.FieldAggregationType;
exports.FieldRoleType = Tableau_1.FieldRoleType;
exports.FilterDomainType = Tableau_1.FilterDomainType;
exports.FilterType = Tableau_1.FilterType;
exports.FilterUpdateType = Tableau_1.FilterUpdateType;
exports.FilterNullOption = Tableau_1.FilterNullOption;
exports.IncludeDataValuesOption = Tableau_1.IncludeDataValuesOption;
exports.MarkType = Tableau_1.MarkType;
exports.ParameterValueType = Tableau_1.ParameterValueType;
exports.PeriodType = Tableau_1.PeriodType;
exports.QuickTableCalcType = Tableau_1.QuickTableCalcType;
exports.SelectionUpdateType = Tableau_1.SelectionUpdateType;
exports.SheetType = Tableau_1.SheetType;
exports.SortDirection = Tableau_1.SortDirection;
exports.TableauEventType = Tableau_1.TableauEventType;
exports.TrendLineModelType = Tableau_1.TrendLineModelType;
exports.ZoneVisibilityType = Tableau_1.ZoneVisibilityType;


/***/ }),

/***/ "../../api-internal-contract-js/lib/package.json":
/*!*************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/package.json ***!
  \*************************************************************************************************************/
/*! exports provided: name, version, description, repository, license, main, typings, scripts, resolutions, dependencies, devDependencies, peerDependencies, publishConfig, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@tableau/api-internal-contract-js\",\"version\":\"1.44.0\",\"description\":\"The API contract between Tableau and our external client.\",\"repository\":\"https://gitlab.tableausoftware.com/browser-clients/api-internal-contract-js.git\",\"license\":\"UNLICENSED\",\"main\":\"./lib/src/JsApiInternalContract.js\",\"typings\":\"./lib/src/JsApiInternalContract.d.ts\",\"scripts\":{\":check-audit-precommit\":\"yarn auditor checkPrecommit\",\":check-audit-scheduled\":\"yarn auditor checkScheduled\",\"build\":\"yarn yarn-install && yarn compile && yarn coverage\",\"build-and-maybe-publish\":\"yarn build && yarn publish-if-new\",\"check-if-published\":\"yarn gitlab-tools checkIfVersionPublished -d .\",\"compile\":\"module-dev-scripts compile\",\"compile-watch\":\"module-dev-scripts compile -w\",\"coverage\":\"module-dev-scripts test --coverage\",\"publish-if-new\":\"yarn gitlab-tools publish -d .\",\"test\":\"module-dev-scripts test --browsers browserstack_chrome,browserstack_firefox,browserstack_ie,browserstack_safari,browserstack_edge\",\"test-dev\":\"module-dev-scripts test --dev\",\"yarn-install\":\"yarn install --frozen-lockfile --mutex network\"},\"resolutions\":{\"@tableau/module-dev-scripts/**/chokidar\":\"^3.0.1\",\"**/yargs/y18n\":\"^5\"},\"dependencies\":{\"guid\":\"0.0.12\"},\"devDependencies\":{\"@tableau-api-internal-contract-js_v0\":\"npm:@tableau/api-internal-contract-js@^0\",\"@tableau/auditor\":\"^1.7.0\",\"@tableau/gitlab-tools\":\"^3.4.0\",\"@tableau/module-dev-scripts\":\"^26.1.0\",\"@tableau/tslint-defaults\":\"^3.0.0\",\"@types/guid\":\"1.0.0\",\"colors\":\"1.4.0\",\"core-js\":\"^3.6.5\",\"tslint\":\"^6.1.2\",\"typescript\":\"3.7.2\"},\"peerDependencies\":{\"core-js\":\"^2.5.7\"},\"publishConfig\":{\"registry\":\"https://artifactory.prod.tableautools.com/artifactory/api/npm/tab-npm-local\"}}");

/***/ }),

/***/ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js":
/*!*****************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/JsApiInternalContract.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// The following polyfills are needed for IE11
__webpack_require__(/*! core-js/es/object/assign */ "../../../node_modules/core-js/es/object/assign.js");
__webpack_require__(/*! core-js/es/number/is-integer */ "../../../node_modules/core-js/es/number/is-integer.js");
__webpack_require__(/*! core-js/es/number/is-nan */ "../../../node_modules/core-js/es/number/is-nan.js");
__export(__webpack_require__(/*! ./contract/Enums */ "../../api-internal-contract-js/lib/src/contract/Enums.js"));
__export(__webpack_require__(/*! ./contract/DataTypeConverter */ "../../api-internal-contract-js/lib/src/contract/DataTypeConverter.js"));
__export(__webpack_require__(/*! ./contract/Notifications */ "../../api-internal-contract-js/lib/src/contract/Notifications.js"));
__export(__webpack_require__(/*! ./contract/Parameters */ "../../api-internal-contract-js/lib/src/contract/Parameters.js"));
__export(__webpack_require__(/*! ./contract/Verbs */ "../../api-internal-contract-js/lib/src/contract/Verbs.js"));
__export(__webpack_require__(/*! ./versioning/VersionConverterFactory */ "../../api-internal-contract-js/lib/src/versioning/VersionConverterFactory.js"));
__export(__webpack_require__(/*! ./versioning/external/ExternalVersionConverterFactory */ "../../api-internal-contract-js/lib/src/versioning/external/ExternalVersionConverterFactory.js"));
__export(__webpack_require__(/*! ./versioning/external/ExternalIdentityVersionConverter */ "../../api-internal-contract-js/lib/src/versioning/external/ExternalIdentityVersionConverter.js"));
// These are the exports from the messaging stuff
__export(__webpack_require__(/*! ./messaging/CrossFrameMessenger */ "../../api-internal-contract-js/lib/src/messaging/CrossFrameMessenger.js"));
__export(__webpack_require__(/*! ./messaging/interface/MessageTypes */ "../../api-internal-contract-js/lib/src/messaging/interface/MessageTypes.js"));
// Export the version of the internal contract.
//  This is pulled from the package.json file.
// NOTE: semver package is preferred here, but requires transpiler
//  like babel as part of our webpack config.
// import * as semver from 'semver';
var packJson = __webpack_require__(/*! ../package.json */ "../../api-internal-contract-js/lib/package.json");
var versionParts;
try {
    versionParts = packJson.version.split('.').map(function (p) { return parseInt(p, 10); });
}
catch (e) {
    console.error(e);
    throw new Error("Unable to parse internal contract version " + packJson.version);
}
exports.INTERNAL_CONTRACT_VERSION = {
    major: versionParts[0],
    minor: versionParts[1],
    fix: versionParts[2],
};
// Export the version number of messaging for consumers to use.
// Be very careful making any updates to this contract which break version compatibility.
exports.MESSAGING_VERSION = {
    major: 1,
    minor: 0,
    fix: 0
};


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/contract/DataTypeConverter.js":
/*!**********************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/contract/DataTypeConverter.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ./Enums */ "../../api-internal-contract-js/lib/src/contract/Enums.js");
var DataTypeConverter = /** @class */ (function () {
    function DataTypeConverter() {
    }
    DataTypeConverter.isSpecial = function (valueAsString) {
        // Prior to ShowDataTablePresModel, special values come to us as
        // '%null%', '%all%', '%wildcard%', '%missing%'...
        // While this function will never return true for ShowDataTablePresModel conversion,
        // it is as cheap as passing around a version and checking that.
        // (See DataValueFormatter.cpp)
        if (valueAsString.length > 2 && valueAsString[0] === '%' && valueAsString[valueAsString.length - 1] === '%') {
            return true;
        }
        return false;
    };
    // tslint:disable-next-line:no-any
    DataTypeConverter.parseBoolean = function (booleanString) {
        // boolean values come to us as 'true'|'false'
        var normalizedBoolean = booleanString.toLowerCase();
        return (normalizedBoolean !== 'true' && normalizedBoolean !== 'false')
            ? this.specialValueIndicator
            : normalizedBoolean === 'true';
    };
    // tslint:disable-next-line:no-any
    DataTypeConverter.parseNumber = function (valueAsString) {
        var value = Number(valueAsString);
        return isNaN(value) ? this.specialValueIndicator : value;
    };
    DataTypeConverter.parseDate = function (dateAsString) {
        // Note that without a time, the date is assumed to be UTC
        // Input of 2020-03-25 is printed as: Mar 24 2020 17:00:00 GMT-0700
        // This matches style used in existing convertFilterValuePresModel
        var value = new Date(dateAsString);
        return Number.isNaN(value.getTime()) ? null : value;
    };
    DataTypeConverter.parseDateTime = function (dateAsString) {
        // With a time, the date is assumed to be UTC.
        // Our date format is always: yyyy-mm-dd hh:mm:ss
        // Unfortunately, IE11 can't parse that format so we add a T between the day and time.
        // We also add a Z so that it is UTC. (Without the Z, some browsers assume local, and others UTC)
        var formattedDateString = dateAsString.replace(' ', 'T').concat('Z');
        var value = new Date(formattedDateString);
        return Number.isNaN(value.getTime()) ? null : value;
    };
    // tslint:disable-next-line:no-any
    DataTypeConverter.convertValueAsStringToValue = function (valueAsString, type) {
        // This is both DataDictionary and ShowDataTablePresModel compatible.
        // In the DataDictionary, valueAsString can be '%null%' or '%missing%', while in
        // ShowDataTablePresModel, we can get 'null' or 'missing', or '%null%' for string special values.
        // For either of these cases, we return specialValueIndicator (or the original special string).
        // To maintain backwards compatibilty, this converter:
        // 1. returns a string for any special values
        // 2. returns a string for any date
        // Parameter min/max values can be undefined, so result is also undefined
        if (valueAsString === undefined || valueAsString === null) {
            return undefined;
        }
        if (this.isSpecial(valueAsString)) {
            return valueAsString;
        }
        switch (type) {
            case Enums_1.DataType.Bool:
                return this.parseBoolean(valueAsString);
            case Enums_1.DataType.Int:
            case Enums_1.DataType.Float:
                // Return special value '%null%' for any failure in parsing.
                // We need to do that because ShowDataTablePresModel will give us strings like 'null'
                // for special values.
                return this.parseNumber(valueAsString);
            case Enums_1.DataType.Date:
                // For ShowDataTablePresModel, special values will be "null" which will fail to parse.
                // In that case, we return '%null%'.
                return this.parseDate(valueAsString) === null ? this.specialValueIndicator : valueAsString;
            case Enums_1.DataType.DateTime:
                // For ShowDataTablePresModel, special values will be "null" which will fail to parse.
                // In that case, we return '%null%'
                return this.parseDateTime(valueAsString) === null ? this.specialValueIndicator : valueAsString;
            case Enums_1.DataType.Spatial:
            case Enums_1.DataType.String:
            default:
                return valueAsString;
        }
    };
    // tslint:disable-next-line:no-any
    DataTypeConverter.convertValueToNativeValue = function (value, type) {
        // This converts from our 1.2 API that returns strings for specials, and dates as strings.
        // It takes the special case of '%null%' and returns a null.
        // For dates, it returns a Date object rather than a string.
        // convertValueToNativeValue should be used to build a DataValue.nativeValue field.
        // Parameter min/max can be undefined. If that is the case, nativeValue is treated like a special
        if (value === undefined || value === null) {
            return null;
        }
        switch (type) {
            case Enums_1.DataType.Bool:
                return (typeof value === 'string') ? null : value;
            case Enums_1.DataType.Int:
            case Enums_1.DataType.Float:
                return (typeof value === 'string') ? null : value;
            case Enums_1.DataType.Date:
                // Convert the string to Date object (or null if parsing fails ... we assume special)
                return this.parseDate(value);
            case Enums_1.DataType.DateTime:
                // Convert the string to Date object (or null if parsing fails ... we assume special)
                return this.parseDateTime(value);
            case Enums_1.DataType.String:
                return this.isSpecial(value) ? null : value;
            case Enums_1.DataType.Spatial:
            default:
                return value;
        }
    };
    // tslint:disable-next-line:no-any
    DataTypeConverter.convertStringValueToNativeValue = function (value, type) {
        // This handles the conversion from string directly to native value for all types
        return this.convertValueToNativeValue(this.convertValueAsStringToValue(value, type), type);
    };
    DataTypeConverter.specialValueIndicator = '%null%';
    return DataTypeConverter;
}());
exports.DataTypeConverter = DataTypeConverter;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/contract/Enums.js":
/*!**********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/contract/Enums.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionContext;
(function (ExtensionContext) {
    ExtensionContext["Desktop"] = "desktop";
    ExtensionContext["Server"] = "server";
    ExtensionContext["Unknown"] = "unknown";
})(ExtensionContext = exports.ExtensionContext || (exports.ExtensionContext = {}));
var ExtensionMode;
(function (ExtensionMode) {
    ExtensionMode["Authoring"] = "authoring";
    ExtensionMode["Viewing"] = "viewing";
    ExtensionMode["Unknown"] = "unknown";
})(ExtensionMode = exports.ExtensionMode || (exports.ExtensionMode = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["Discrete"] = "discrete";
    ColumnType["Continuous"] = "continuous";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
var DashboardObjectType;
(function (DashboardObjectType) {
    DashboardObjectType["Blank"] = "blank";
    DashboardObjectType["Worksheet"] = "worksheet";
    DashboardObjectType["QuickFilter"] = "quick-filter";
    DashboardObjectType["ParameterControl"] = "parameter-control";
    DashboardObjectType["PageFilter"] = "page-filter";
    DashboardObjectType["Legend"] = "legend";
    DashboardObjectType["Title"] = "title";
    DashboardObjectType["Text"] = "text";
    DashboardObjectType["Image"] = "image";
    DashboardObjectType["WebPage"] = "web-page";
    DashboardObjectType["Extension"] = "extension";
})(DashboardObjectType = exports.DashboardObjectType || (exports.DashboardObjectType = {}));
var DataType;
(function (DataType) {
    DataType["String"] = "string";
    DataType["Int"] = "int";
    DataType["Float"] = "float";
    DataType["Bool"] = "bool";
    DataType["Date"] = "date";
    DataType["DateTime"] = "date-time";
    DataType["Spatial"] = "spatial";
})(DataType = exports.DataType || (exports.DataType = {}));
var EncodedDataType;
(function (EncodedDataType) {
    EncodedDataType["Number"] = "number";
    EncodedDataType["String"] = "string";
    EncodedDataType["Date"] = "date";
    EncodedDataType["Boolean"] = "boolean";
})(EncodedDataType = exports.EncodedDataType || (exports.EncodedDataType = {}));
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["INITIALIZATION_ERROR"] = "initialization-error";
    ErrorCodes["INTERNAL_ERROR"] = "internal-error";
    ErrorCodes["MISSING_ENUM_MAPPING"] = "missing-enum-mapping";
    ErrorCodes["MISSING_PARAMETER"] = "missing-parameter";
    ErrorCodes["PERMISSION_DENIED"] = "permission-denied";
    ErrorCodes["PRES_MODEL_PARSING_ERROR"] = "pres-model-parsing-error";
    ErrorCodes["VERSION_NOT_CONFIGURED"] = "version-not-configured";
    ErrorCodes["VISIBILITY_ERROR"] = "visibility-error";
    ErrorCodes["UNKNOWN_VERB_ID"] = "unknown-verb-id";
})(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
var FieldAggregationType;
(function (FieldAggregationType) {
    FieldAggregationType["Sum"] = "sum";
    FieldAggregationType["Avg"] = "avg";
    FieldAggregationType["Min"] = "min";
    FieldAggregationType["Max"] = "max";
    FieldAggregationType["Stdev"] = "stdev";
    FieldAggregationType["Stdevp"] = "stdevp";
    FieldAggregationType["Var"] = "var";
    FieldAggregationType["Varp"] = "varp";
    FieldAggregationType["Count"] = "count";
    FieldAggregationType["Countd"] = "countd";
    FieldAggregationType["Median"] = "median";
    FieldAggregationType["Attr"] = "attr";
    FieldAggregationType["None"] = "none";
    FieldAggregationType["Year"] = "year";
    FieldAggregationType["Qtr"] = "qtr";
    FieldAggregationType["Month"] = "month";
    FieldAggregationType["Day"] = "day";
    FieldAggregationType["Hour"] = "hour";
    FieldAggregationType["Minute"] = "minute";
    FieldAggregationType["Second"] = "second";
    FieldAggregationType["Week"] = "week";
    FieldAggregationType["Weekday"] = "weekday";
    FieldAggregationType["MonthYear"] = "month-year";
    FieldAggregationType["Mdy"] = "mdy";
    FieldAggregationType["End"] = "end";
    FieldAggregationType["TruncYear"] = "trunc-year";
    FieldAggregationType["TruncQtr"] = "trunc-qtr";
    FieldAggregationType["TruncMonth"] = "trunc-month";
    FieldAggregationType["TruncWeek"] = "trunc-week";
    FieldAggregationType["TruncDay"] = "trunc-day";
    FieldAggregationType["TruncHour"] = "trunc-hour";
    FieldAggregationType["TruncMinute"] = "trunc-minute";
    FieldAggregationType["TruncSecond"] = "trunc-second";
    FieldAggregationType["Quart1"] = "quart1";
    FieldAggregationType["Quart3"] = "quart3";
    FieldAggregationType["Skewness"] = "skewness";
    FieldAggregationType["Kurtosis"] = "kurtosis";
    FieldAggregationType["InOut"] = "in-out";
    FieldAggregationType["User"] = "user";
})(FieldAggregationType = exports.FieldAggregationType || (exports.FieldAggregationType = {}));
var FieldRoleType;
(function (FieldRoleType) {
    FieldRoleType["Dimension"] = "dimension";
    FieldRoleType["Measure"] = "measure";
    FieldRoleType["Unknown"] = "unknown";
})(FieldRoleType = exports.FieldRoleType || (exports.FieldRoleType = {}));
/**
 *  The different update types for applying filter.
 */
var FilterUpdateType;
(function (FilterUpdateType) {
    FilterUpdateType["Add"] = "add";
    FilterUpdateType["All"] = "all";
    FilterUpdateType["Replace"] = "replace";
    FilterUpdateType["Remove"] = "remove";
})(FilterUpdateType = exports.FilterUpdateType || (exports.FilterUpdateType = {}));
var SheetType;
(function (SheetType) {
    SheetType["Dashboard"] = "dashboard";
    SheetType["Story"] = "story";
    SheetType["Worksheet"] = "worksheet";
})(SheetType = exports.SheetType || (exports.SheetType = {}));
var DomainRestrictionType;
(function (DomainRestrictionType) {
    DomainRestrictionType["All"] = "all";
    DomainRestrictionType["List"] = "list";
    DomainRestrictionType["Range"] = "range";
})(DomainRestrictionType = exports.DomainRestrictionType || (exports.DomainRestrictionType = {}));
var DateStepPeriod;
(function (DateStepPeriod) {
    DateStepPeriod["Years"] = "years";
    DateStepPeriod["Quarters"] = "quarters";
    DateStepPeriod["Months"] = "months";
    DateStepPeriod["Weeks"] = "weeks";
    DateStepPeriod["Days"] = "days";
    DateStepPeriod["Hours"] = "hours";
    DateStepPeriod["Minutes"] = "minutes";
    DateStepPeriod["Seconds"] = "seconds";
})(DateStepPeriod = exports.DateStepPeriod || (exports.DateStepPeriod = {}));
/**
 * The option for specifying which values to include for filtering.
 */
var FilterNullOption;
(function (FilterNullOption) {
    FilterNullOption["NullValues"] = "nullvalues";
    FilterNullOption["NonNullValues"] = "nonnullvalues";
    FilterNullOption["AllValues"] = "allvalues";
})(FilterNullOption = exports.FilterNullOption || (exports.FilterNullOption = {}));
/**
 * The type of filter domain
 */
var FilterDomainType;
(function (FilterDomainType) {
    FilterDomainType["Relevant"] = "relevant";
    FilterDomainType["Database"] = "database";
})(FilterDomainType = exports.FilterDomainType || (exports.FilterDomainType = {}));
/**
 * Internal enum for specifying the selection type for select marks api.
 */
var SelectionUpdateType;
(function (SelectionUpdateType) {
    SelectionUpdateType["Replace"] = "select-replace";
    SelectionUpdateType["Add"] = "select-add";
    SelectionUpdateType["Remove"] = "select-remove";
})(SelectionUpdateType = exports.SelectionUpdateType || (exports.SelectionUpdateType = {}));
/**
 * Internal enum for specifying the included values type for range selection.
 */
var QuantitativeIncludedValues;
(function (QuantitativeIncludedValues) {
    QuantitativeIncludedValues["IncludeNull"] = "include-null";
    QuantitativeIncludedValues["IncludeNonNull"] = "include-non-null";
    QuantitativeIncludedValues["IncludeAll"] = "include-all";
})(QuantitativeIncludedValues = exports.QuantitativeIncludedValues || (exports.QuantitativeIncludedValues = {}));
/**
 * Type of mark for a given marks card in a viz.
 */
var MarkType;
(function (MarkType) {
    MarkType["Bar"] = "bar";
    MarkType["Line"] = "line";
    MarkType["Area"] = "area";
    MarkType["Square"] = "square";
    MarkType["Circle"] = "circle";
    MarkType["Shape"] = "shape";
    MarkType["Text"] = "text";
    MarkType["Map"] = "map";
    MarkType["Pie"] = "pie";
    MarkType["GanttBar"] = "gantt-bar";
    MarkType["Polygon"] = "polygon";
})(MarkType = exports.MarkType || (exports.MarkType = {}));
/**
 * Internal enum for specifying the type of filter
 */
var FilterType;
(function (FilterType) {
    FilterType["Categorical"] = "categorical";
    FilterType["Range"] = "range";
    FilterType["RelativeDate"] = "relativeDate";
    FilterType["Hierarchical"] = "hierarchical";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
/**
 * Internal enum for specifying the DateRangeType of a relative date filter
 */
var DateRangeType;
(function (DateRangeType) {
    /**
     * Refers to the last day, week, month, etc. of the date period.
     */
    DateRangeType["Last"] = "last";
    /**
     * Refers to the last N days, weeks, months, etc. of the date period.
     */
    DateRangeType["LastN"] = "lastN";
    /**
     * Refers to the next day, week, month, etc. of the date period.
     */
    DateRangeType["Next"] = "next";
    /**
     * Refers to the next N days, weeks, months, etc. of the date period.
     */
    DateRangeType["NextN"] = "nextN";
    /**
     * Refers to the current day, week, month, etc. of the date period.
     */
    DateRangeType["Current"] = "current";
    /**
     * Refers to everything up to and including the current day, week, month, etc. of the date period.
     */
    DateRangeType["ToDate"] = "toDate";
})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));
/**
 * Used to determine if the launching of an extension dialog succeeded or failed.
 */
var ExtensionDialogResult;
(function (ExtensionDialogResult) {
    ExtensionDialogResult["DialogAlreadyOpen"] = "dialog-already-open";
    ExtensionDialogResult["InvalidDomain"] = "invalid-domain";
    ExtensionDialogResult["Success"] = "success";
})(ExtensionDialogResult = exports.ExtensionDialogResult || (exports.ExtensionDialogResult = {}));
// Enumeration for ApiShowData table id sentinels.
var ApiShowDataTableSentinel;
(function (ApiShowDataTableSentinel) {
    // find the one logical table - used in version compatibility check for getUnderlyingDataTable and getLogicalDataTable commands
    ApiShowDataTableSentinel["SingleTableId"] = "single-table-id-sentinel";
    ApiShowDataTableSentinel["SingleTableCaption"] = "Single table id sentinel";
})(ApiShowDataTableSentinel = exports.ApiShowDataTableSentinel || (exports.ApiShowDataTableSentinel = {}));
/**
 * Used to optimize the getSummaryData/getUnderlyingTableData results
 * Mapped from external IncludeDataValuesOption
 */
var ApiShowDataTableFormat;
(function (ApiShowDataTableFormat) {
    ApiShowDataTableFormat["NativeValuesOnly"] = "native-values-only";
    ApiShowDataTableFormat["FormattedValuesOnly"] = "formatted-values-only";
    ApiShowDataTableFormat["NativeAndFormattedValues"] = "native-and-formatted-values";
})(ApiShowDataTableFormat = exports.ApiShowDataTableFormat || (exports.ApiShowDataTableFormat = {}));


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/contract/Notifications.js":
/*!******************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/contract/Notifications.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NotificationId;
(function (NotificationId) {
    NotificationId["SelectedMarksChanged"] = "selected-marks-changed";
    NotificationId["ParameterChanged"] = "parameter-changed";
    NotificationId["FilterChanged"] = "filter-changed";
    NotificationId["ExtensionDialogUpdate"] = "extension-dialog-update";
    NotificationId["SettingsChanged"] = "settings-changed";
    NotificationId["ContextMenuClick"] = "context-menu-click";
    NotificationId["TestConversionNotification"] = "test-conversion-notification";
    NotificationId["FirstVizSizeKnown"] = "first-viz-size-known";
})(NotificationId = exports.NotificationId || (exports.NotificationId = {}));


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/contract/Parameters.js":
/*!***************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/contract/Parameters.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ParameterId;
(function (ParameterId) {
    ParameterId["ExtensionLocator"] = "extension-locator";
    ParameterId["ExtensionBootstrapInfo"] = "extension-bootstrap-info";
    ParameterId["ExtensionSettingsInfo"] = "extension-settings-info";
    ParameterId["VisualId"] = "visual-id";
    ParameterId["SheetPath"] = "sheet-path";
    ParameterId["ColumnsToIncludeById"] = "columns-to-include-by-id";
    ParameterId["IgnoreAliases"] = "ignore-aliases";
    ParameterId["IgnoreSelection"] = "ignore-selection";
    ParameterId["IncludeAllColumns"] = "include-all-columns";
    ParameterId["MaxRows"] = "max-rows";
    ParameterId["UnderlyingDataTable"] = "underlying-data-table";
    ParameterId["UnderlyingSummaryDataTable"] = "underlying-summary-data-table";
    ParameterId["DataSourceDataTable"] = "data-source-data-table";
    ParameterId["ShowDataTableFormat"] = "show-data-table-format";
    ParameterId["SettingsValues"] = "settings-values";
    ParameterId["SelectedData"] = "selected-data";
    ParameterId["HighlightedData"] = "highlighted-data";
    // Filter Params
    ParameterId["FieldName"] = "field-name";
    ParameterId["FilterValues"] = "filter-values";
    ParameterId["FilterUpdateType"] = "filter-update-type";
    ParameterId["IsExcludeMode"] = "is-exclude";
    ParameterId["FilterRangeMin"] = "filter-range-min";
    ParameterId["FilterRangeMax"] = "filter-range-max";
    ParameterId["FilterRangeNullOption"] = "filter-range-null-option";
    ParameterId["WorksheetFilters"] = "worksheet-filters";
    ParameterId["FieldId"] = "field-id";
    ParameterId["DomainType"] = "domain-type";
    ParameterId["CategoricalDomain"] = "categorical-domain";
    ParameterId["QuantitativeDomain"] = "quantitative-dmain";
    ParameterId["Field"] = "field";
    ParameterId["WorksheetName"] = "worksheet-name";
    ParameterId["DashboardName"] = "dashboard";
    ParameterId["ParameterInfo"] = "parameter-info";
    ParameterId["ParameterInfos"] = "parameter-infos";
    ParameterId["ParameterCaption"] = "paremeter-caption";
    ParameterId["ParameterFieldName"] = "parameter-field-name";
    ParameterId["ParameterValue"] = "parameter-value";
    ParameterId["Selection"] = "selection";
    ParameterId["SelectionUpdateType"] = "selectionUpdateType";
    ParameterId["HierValSelectionModels"] = "hierarchicalValueSelectionModels";
    ParameterId["QuantRangeSelectionModels"] = "quantativeRangeSelectionModels";
    ParameterId["DimValSelectionModels"] = "dimensionValueSelectionModels";
    ParameterId["ActiveTablesInfo"] = "active-tables-info";
    ParameterId["DataSource"] = "data-source";
    ParameterId["DataSourceId"] = "data-source-id";
    ParameterId["DeltaTimeMs"] = "delta-time-ms";
    ParameterId["ShouldRefreshDS"] = "should-refresh-ds";
    ParameterId["DataSchema"] = "data-schema";
    ParameterId["DataSourceName"] = "data-source-name";
    ParameterId["ColumnsToInclude"] = "columns-to-include";
    ParameterId["JoinDescription"] = "join-description";
    ParameterId["ConnectionDescriptionSummaries"] = "connection-description-summaries";
    ParameterId["ExtensionDialogUrl"] = "extension-dialog-url";
    ParameterId["ExtensionDialogPayload"] = "extension-dialog-payload";
    ParameterId["IsExtensionDialog"] = "is-extension-dialog";
    ParameterId["ExtensionDialogH"] = "extension-dialog-height";
    ParameterId["ExtensionDialogW"] = "extension-dialog-width";
    ParameterId["ExtensionDialogResult"] = "extension-dialog-result";
    ParameterId["ExtensionContextMenuIds"] = "extension-context-menu-ids";
    ParameterId["TestConversionParameter"] = "test-conversion-parameter";
    ParameterId["Dashboard"] = "dashboard";
    ParameterId["ZoneIdsVisibilityMap"] = "zone-ids-visibility-map";
    ParameterId["LogicalTableInfoList"] = "logical-table-info-list";
    ParameterId["LogicalTableId"] = "logical-table-id";
    ParameterId["VizAPIInputJson"] = "vizapi-input-json";
    ParameterId["VizAPISVG"] = "vizapi-svg";
    ParameterId["EmbeddingBootstrapInfo"] = "embedding-bootstrap-info";
})(ParameterId = exports.ParameterId || (exports.ParameterId = {}));


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/contract/Verbs.js":
/*!**********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/contract/Verbs.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Declare this key type and export the NotificationId to make this behave like a string enum
var VerbId;
(function (VerbId) {
    VerbId["ApplyCategoricalFilter"] = "categorical-filter";
    VerbId["ApplyRangeFilter"] = "range-filter";
    VerbId["ClearFilter"] = "clear-filter";
    VerbId["InitializeExtension"] = "initialize-extension";
    VerbId["GetDataSummaryData"] = "get-summary-data";
    VerbId["GetUnderlyingData"] = "get-underlying-data";
    VerbId["GetDataSourceData"] = "get-datasource-data";
    VerbId["SaveExtensionSettings"] = "save-extension-settings";
    VerbId["GetSelectedMarks"] = "get-selected-marks";
    VerbId["GetHighlightedMarks"] = "get-highlighted-marks";
    VerbId["GetParametersForSheet"] = "get-parameters-for-sheet";
    VerbId["FindParameter"] = "find-parameter";
    VerbId["ChangeParameterValue"] = "change-parameter-value";
    VerbId["ClearSelectedMarks"] = "clear-selected-marks";
    VerbId["SelectByValue"] = "select-by-value";
    VerbId["GetDataSources"] = "get-data-sources";
    VerbId["RefreshDataSource"] = "refresh-data-source";
    VerbId["GetFilters"] = "get-filters";
    VerbId["GetFieldAndDataSource"] = "get-field-and-datasource";
    VerbId["GetCategoricalDomain"] = "get-categorical-domain";
    VerbId["GetRangeDomain"] = "get-range-domain";
    VerbId["GetJoinDescription"] = "get-join-description";
    VerbId["GetConnectionDescriptionSummaries"] = "get-connection-description-summaries";
    VerbId["DisplayDialog"] = "display-dialog";
    VerbId["CloseDialog"] = "close-dialog";
    VerbId["TestConversionVerb"] = "test-conversion-verb";
    VerbId["GetField"] = "get-field";
    VerbId["GetDataSource"] = "get-datasource";
    VerbId["GetActiveTables"] = "get-active-tables";
    VerbId["SetZoneVisibility"] = "set-zone-visibility";
    VerbId["BlockExtension"] = "block-extension";
    VerbId["GetLogicalTables"] = "get-logical-tables";
    VerbId["GetLogicalTableData"] = "get-logical-table-data";
    VerbId["GetUnderlyingTableData"] = "get-underlying-table-data";
    VerbId["GetUnderlyingTables"] = "get-underlying-tables";
    VerbId["VizAPI"] = "viz-api";
    VerbId["GetEmbeddingBootstrapInfo"] = "get-embedding-bootstrap-info";
})(VerbId = exports.VerbId || (exports.VerbId = {}));


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/messaging/CrossFrameMessenger.js":
/*!*************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/messaging/CrossFrameMessenger.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(/*! guid */ "../../../node_modules/guid/guid.js");
var CrossFramePreparedMessage_1 = __webpack_require__(/*! ./CrossFramePreparedMessage */ "../../api-internal-contract-js/lib/src/messaging/CrossFramePreparedMessage.js");
var MessageTypes_1 = __webpack_require__(/*! ./interface/MessageTypes */ "../../api-internal-contract-js/lib/src/messaging/interface/MessageTypes.js");
var MessageTypeChecks_1 = __webpack_require__(/*! ./MessageTypeChecks */ "../../api-internal-contract-js/lib/src/messaging/MessageTypeChecks.js");
var JsApiInternalContract_1 = __webpack_require__(/*! ../JsApiInternalContract */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
/**
 * The CrossFrameMessenger is the primary export from the api-messaging module. An instance of
 * this class can be instantiated on both sides of a frame boundary to facilitate communication
 * in both directions between the frames. This class implements both the dispatcher and the listener
 * portions, but doesn't require callers to care about both.
 */
var CrossFrameMessenger = /** @class */ (function () {
    /**
     * Creates an instance of CrossFrameMessenger. If you would like to use the CrossFrameMessenger as a MessageListener,
     * be sure to call StartListening and register message handlers.
     * @param thisWindow The window object which the CrossFrameMessenger lives. An onMessage listener will be added here.
     * @param [otherWindow] Optional otherWindow which messages will be posted to.
     *                      If defined, incoming messages must originate from otherWindow to be passed on
     * @param [otherWindowOrigin] The target origin which otherWindow must have in order to receive dispatched messages.
     *                            This value will be sent as the targetOrigin of a postMessage
     *                            (https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
     */
    function CrossFrameMessenger(thisWindow, otherWindow, otherWindowOrigin) {
        this.thisWindow = thisWindow;
        this.otherWindow = otherWindow;
        this.otherWindowOrigin = otherWindowOrigin;
        // Make sure to call StartListening
    }
    ///// MessageListener Implementation
    CrossFrameMessenger.prototype.startListening = function () {
        var _this = this;
        // Check if we already are listening, if not, hook up a message listener
        if (!this.unregisterFunction) {
            var boundHandler_1 = this.onMessageReceived.bind(this);
            this.thisWindow.addEventListener('message', boundHandler_1, true);
            this.unregisterFunction = function () { return _this.thisWindow.removeEventListener('message', boundHandler_1, true); };
        }
    };
    CrossFrameMessenger.prototype.stopListening = function () {
        // Stop listening if we have started listening
        if (this.unregisterFunction) {
            this.unregisterFunction();
            this.unregisterFunction = undefined;
        }
    };
    CrossFrameMessenger.prototype.setInitializeMessageHandler = function (handler) {
        this.initializeMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setCommandResponseMessageHandler = function (handler) {
        this.commandResponseMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setCommandMessageHandler = function (handler) {
        this.commandMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setNotificationMessageHandler = function (handler) {
        this.notificationMessageHandler = handler;
    };
    CrossFrameMessenger.prototype.setHandshakeMessageHandler = function (handler) {
        this.handshakeMessageHandler = handler;
    };
    ///// MessageDispatcher Implementation
    /**
     * @param apiVersion api-internal-contract-js version (exported in JsApiInternalConntract)
     * @param crossFrameVersion crossframe messaging version (exported in JsApiInternalConntract)
     * @param options additional options that can be passed at initialization (information about the version of
     *                external being used for example)
     */
    CrossFrameMessenger.prototype.prepareInitializationMessage = function (apiVersion, crossFrameVersion, options) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Initialize,
            crossFrameVersion: crossFrameVersion,
            apiVersion: apiVersion,
            options: options
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareCommandMessage = function (verbId, parameters) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Command,
            verbId: verbId,
            parameters: parameters
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareCommandResponseMessage = function (commandGuid, data, error) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.CommandResponse,
            commandGuid: commandGuid,
            data: data,
            error: error
        };
        if (error) {
            // stringify error object to remove unserializable fields like functions and prevent serialization errors
            message.error = JSON.parse(JSON.stringify(error));
        }
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareNotificationMessage = function (notificationId, data) {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Notification,
            notificationId: notificationId,
            data: data
        };
        return this.prepareMessage(message);
    };
    CrossFrameMessenger.prototype.prepareAckMessage = function () {
        var message = {
            msgGuid: guid.raw(),
            msgType: MessageTypes_1.MessageType.Ack,
            platformVersion: JsApiInternalContract_1.INTERNAL_CONTRACT_VERSION
        };
        return this.prepareMessage(message);
    };
    /**
     * Prepares a pending message for sending and returns the prepared message
     *
     * @param msg The message to be sent to this.otherWindow
     * @returns The prepared message
     */
    CrossFrameMessenger.prototype.prepareMessage = function (msg) {
        if (!this.otherWindow || !this.otherWindowOrigin) {
            throw 'Other window not initialized, cannot dispatch messages';
        }
        var preparedMessage = new CrossFramePreparedMessage_1.CrossFramePreparedMessage(msg, this.otherWindow, this.otherWindowOrigin);
        return preparedMessage;
    };
    /**
     * Called when a message is received. Does some validation of the message, and then
     * calls an appropriate message handler if one is defined
     *
     * @param event The incoming MessageEvent
     */
    CrossFrameMessenger.prototype.onMessageReceived = function (event) {
        // If we have an otherWindow defined, make sure the message is coming from there
        if (this.otherWindow && event.source !== this.otherWindow) {
            return;
        }
        // Do some validation on event.data to make sure that we have received a real message
        if (!event.data) {
            return;
        }
        var message = event.data;
        if (!MessageTypeChecks_1.isMessage(message)) {
            return;
        }
        // Check the declared message type, validate the message, and call an appropriate hander if one exists
        switch (message.msgType) {
            case MessageTypes_1.MessageType.Initialize: {
                if (!MessageTypeChecks_1.isInitMessage(message) || !this.initializeMessageHandler) {
                    return;
                }
                this.initializeMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.CommandResponse: {
                if (!MessageTypeChecks_1.isCommandResponseMessage(message) || !this.commandResponseMessageHandler) {
                    return;
                }
                this.commandResponseMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Command: {
                if (!MessageTypeChecks_1.isCommandMessage(message) || !this.commandMessageHandler) {
                    return;
                }
                this.commandMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Notification: {
                if (!MessageTypeChecks_1.isNotificationMessage(message) || !this.notificationMessageHandler) {
                    return;
                }
                this.notificationMessageHandler(message, event.source);
                break;
            }
            case MessageTypes_1.MessageType.Handshake: {
                if (!MessageTypeChecks_1.isHandshakeMessage(message) || !this.handshakeMessageHandler) {
                    return;
                }
                this.handshakeMessageHandler(message, event.source);
                break;
            }
            default:
            // Just ignore this since we don't know how to handle the message type
        }
    };
    CrossFrameMessenger.prototype.setOtherWindow = function (otherWindow) {
        this.otherWindow = otherWindow;
    };
    CrossFrameMessenger.prototype.setOtherWindowOrigin = function (origin) {
        this.otherWindowOrigin = origin;
    };
    return CrossFrameMessenger;
}());
exports.CrossFrameMessenger = CrossFrameMessenger;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/messaging/CrossFramePreparedMessage.js":
/*!*******************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/messaging/CrossFramePreparedMessage.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the PreparedMessage interface used to post messages between
 * two frames using window.postMessage
 */
var CrossFramePreparedMessage = /** @class */ (function () {
    /**
     * Creates an instance of CrossFramePreparedMessage.
     * @param _message The message to be sent
     * @param _target The target window where the message will be sent
     * @param _origin The targetOrigin where this message can be received
     */
    function CrossFramePreparedMessage(_message, _target, _origin) {
        this._message = _message;
        this._target = _target;
        this._origin = _origin;
    }
    Object.defineProperty(CrossFramePreparedMessage.prototype, "messageGuid", {
        get: function () { return this._message.msgGuid; },
        enumerable: true,
        configurable: true
    });
    CrossFramePreparedMessage.prototype.send = function () {
        this._target.postMessage(this._message, this._origin);
        return this;
    };
    return CrossFramePreparedMessage;
}());
exports.CrossFramePreparedMessage = CrossFramePreparedMessage;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/messaging/MessageTypeChecks.js":
/*!***********************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/messaging/MessageTypeChecks.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid = __webpack_require__(/*! guid */ "../../../node_modules/guid/guid.js");
var MessageTypes_1 = __webpack_require__(/*! ./interface/MessageTypes */ "../../api-internal-contract-js/lib/src/messaging/interface/MessageTypes.js");
/* tslint:disable no-any */
function isMessage(data) {
    if (!data) {
        return false;
    }
    var message = data;
    if (!message || !message.msgGuid || !message.msgType) {
        return false;
    }
    if (!guid.isGuid(message.msgGuid)) {
        return false;
    }
    if (typeof message.msgType !== 'string') {
        return false;
    }
    var messageTypes = [MessageTypes_1.MessageType.Command, MessageTypes_1.MessageType.CommandResponse, MessageTypes_1.MessageType.Initialize, MessageTypes_1.MessageType.Notification, MessageTypes_1.MessageType.Handshake];
    if (messageTypes.indexOf(message.msgType) < 0) {
        return false;
    }
    return true;
}
exports.isMessage = isMessage;
function isVersion(versionNumber) {
    if (!versionNumber) {
        return false;
    }
    var v = versionNumber;
    if (typeof v !== 'object') {
        return false;
    }
    if (typeof v.fix !== 'number' || typeof v.minor !== 'number' || typeof v.major !== 'number') {
        return false;
    }
    return true;
}
exports.isVersion = isVersion;
function isInitMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var initMessage = message;
    if (initMessage.msgType !== MessageTypes_1.MessageType.Initialize) {
        return false;
    }
    if (!initMessage.apiVersion || !isVersion(initMessage.apiVersion)) {
        return false;
    }
    if (!initMessage.crossFrameVersion || !isVersion(initMessage.crossFrameVersion)) {
        return false;
    }
    return true;
}
exports.isInitMessage = isInitMessage;
function isCommandResponseMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var crMessage = message;
    if (crMessage.msgType !== MessageTypes_1.MessageType.CommandResponse) {
        return false;
    }
    if (!guid.isGuid(crMessage.commandGuid)) {
        return false;
    }
    if (!crMessage.data && !crMessage.error) {
        return false;
    }
    return true;
}
exports.isCommandResponseMessage = isCommandResponseMessage;
function isCommandMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var commandMessage = message;
    if (commandMessage.msgType !== MessageTypes_1.MessageType.Command) {
        return false;
    }
    if (!commandMessage.parameters || typeof commandMessage.parameters !== 'object') {
        return false;
    }
    if (!commandMessage.verbId || typeof commandMessage.verbId !== 'string') {
        return false;
    }
    return true;
}
exports.isCommandMessage = isCommandMessage;
function isNotificationMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var notificationMessage = message;
    if (notificationMessage.msgType !== MessageTypes_1.MessageType.Notification) {
        return false;
    }
    if (!notificationMessage.data) {
        return false;
    }
    if (!notificationMessage.notificationId || typeof notificationMessage.notificationId !== 'string') {
        return false;
    }
    return true;
}
exports.isNotificationMessage = isNotificationMessage;
function isHandshakeMessage(message) {
    if (!isMessage(message)) {
        return false;
    }
    var handshakeMessage = message;
    if (handshakeMessage.msgType !== MessageTypes_1.MessageType.Handshake) {
        return false;
    }
    return true;
}
exports.isHandshakeMessage = isHandshakeMessage;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/messaging/interface/MessageTypes.js":
/*!****************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/messaging/interface/MessageTypes.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enum defining the 4 different types of messages we have defined
 */
var MessageType;
(function (MessageType) {
    MessageType["Initialize"] = "initialize";
    MessageType["Notification"] = "notification";
    MessageType["Command"] = "command";
    MessageType["CommandResponse"] = "command-response";
    MessageType["Handshake"] = "v-handshake";
    MessageType["Ack"] = "v-ack";
})(MessageType = exports.MessageType || (exports.MessageType = {}));


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/versioning/IdentityVersionConverter.js":
/*!*******************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/versioning/IdentityVersionConverter.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * This version converter doesn't actually do anything but is useful for testing or when we have
 * a matching platform and internal version number
*/
var IdentityVersionConverter = /** @class */ (function () {
    function IdentityVersionConverter() {
    }
    IdentityVersionConverter.prototype.upgradeExecuteCall = function (verb, parameters) {
        return {
            verb: verb,
            parameters: parameters
        };
    };
    IdentityVersionConverter.prototype.downgradeExecuteReturn = function (executeResponse) {
        return executeResponse;
    };
    IdentityVersionConverter.prototype.downgradeNotification = function (notification) {
        return notification;
    };
    return IdentityVersionConverter;
}());
exports.IdentityVersionConverter = IdentityVersionConverter;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/versioning/StackingVersionConverter.js":
/*!*******************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/versioning/StackingVersionConverter.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * The version converter is designed to allow the platform and external modules
 * to seemlessly communicate over two different versions of the internal API. The only
 * mode it supports is external's version <= platform's version. When executing
 * commands, it is used to upgrade the external representation to what platform knows on the way in
 * and downgrade the representations on the way out. Similarly for notifications, it can
 * downgrade those on the way from platform to external.
 */
var StackingVersionConverter = /** @class */ (function () {
    /**
     * Creates a new instance of the StackingVersionConverter
     *
     * @param _externalMajorVersion The major version of the internal contract api-external-js is using
     * @param _platformMajorVersion The major version of the internal contract the api-platform-js is using
     * @param _upgradeExecuteTranslations Ordered list of the translations to perform when upgrading cmd parameters
     * @param _downgradeExecuteTranslations Ordered list of downgrade translations to perform after a cmd
     * @param _downgradeNotificationTranslations Ordered list of downgrade translations to perform on a notification
     */
    function StackingVersionConverter(_externalMajorVersion, _platformMajorVersion, _upgradeExecuteTranslations, _downgradeExecuteTranslations, _downgradeNotificationTranslations) {
        this._externalMajorVersion = _externalMajorVersion;
        this._platformMajorVersion = _platformMajorVersion;
        this._upgradeExecuteTranslations = _upgradeExecuteTranslations;
        this._downgradeExecuteTranslations = _downgradeExecuteTranslations;
        this._downgradeNotificationTranslations = _downgradeNotificationTranslations;
        if (this._externalMajorVersion > this._platformMajorVersion) {
            throw new Error("Cannot convert between external version " + this._externalMajorVersion + " and " + this._platformMajorVersion);
        }
    }
    /**
      * Creates a new instance of the StackingVersionConverter
      *
      * @param _externalVersion The version of the internal contract api-external-js is using
      * @param _platformVersion The version of the internal contract the api-platform-js is using
      * @param _upgradeExecuteTranslations Ordered list of the translations to perform when upgrading cmd parameters
      * @param _downgradeExecuteTranslations Ordered list of downgrade translations to perform after a cmd
      * @param _downgradeNotificationTranslations Ordered list of downgrade translations to perform on a notification
      */
    StackingVersionConverter.fromData = function (externalVersion, platformVersion, upgradeExecuteTranslations, downgradeExecuteTranslations, downgradeNotificationTranslations) {
        return new this(externalVersion.major, platformVersion.major, upgradeExecuteTranslations, downgradeExecuteTranslations, downgradeNotificationTranslations);
    };
    StackingVersionConverter.prototype.upgradeExecuteCall = function (verb, parameters) {
        // Perform the upgrade of the verb and parameters to the level that platform is using
        var upgraded = { verb: verb, parameters: parameters };
        for (var _i = 0, _a = this._upgradeExecuteTranslations; _i < _a.length; _i++) {
            var upgradeTranslation = _a[_i];
            upgraded = upgradeTranslation(upgraded.verb, upgraded.parameters);
        }
        return upgraded;
    };
    StackingVersionConverter.prototype.downgradeExecuteReturn = function (executeResponse) {
        // Downgrade the response to what the external module is expecting
        var downgraded = executeResponse;
        for (var _i = 0, _a = this._downgradeExecuteTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded);
        }
        return downgraded;
    };
    StackingVersionConverter.prototype.downgradeNotification = function (notification) {
        // Downgrade the notification to what the external module is expecting
        var downgraded = notification;
        for (var _i = 0, _a = this._downgradeNotificationTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded);
        }
        return downgraded;
    };
    return StackingVersionConverter;
}());
exports.StackingVersionConverter = StackingVersionConverter;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/versioning/VersionConverterFactory.js":
/*!******************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/versioning/VersionConverterFactory.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StackingVersionConverter_1 = __webpack_require__(/*! ./StackingVersionConverter */ "../../api-internal-contract-js/lib/src/versioning/StackingVersionConverter.js");
var IdentityVersionConverter_1 = __webpack_require__(/*! ./IdentityVersionConverter */ "../../api-internal-contract-js/lib/src/versioning/IdentityVersionConverter.js");
var VersionTranslations_1 = __webpack_require__(/*! ./VersionTranslations */ "../../api-internal-contract-js/lib/src/versioning/VersionTranslations.js");
/**
 * @returns true if lhs < rhs (ignoring fix number)
 * @param lhs
 * @param rhs
 */
function VersionLessThan(lhs, rhs) {
    if (lhs.major > rhs.major) {
        return false;
    }
    if (lhs.major < rhs.major) {
        return true;
    }
    return (lhs.minor < rhs.minor);
}
exports.VersionLessThan = VersionLessThan;
/**
 * @returns true if lhs == rhs (ignoring fix number)
 * @param lhs
 * @param rhs
 */
function VersionEqualTo(lhs, rhs) {
    return (lhs.major === rhs.major) && (lhs.minor === rhs.minor);
}
exports.VersionEqualTo = VersionEqualTo;
// A mapping from an older client version of internal-contract to the current platform version of this contract.
// Each version bump can have an array of translations to perform in order. Notice that this is
// different than the major upgrades/downgrades above because it handles both major and minor version changes.
// Also please note: downgradeExecuteCall is handled on the client/external side rather than platform side.
// When updating the major or minor version of our internal-contract, you will need to update these data structures.
// * If there are translations to add, add them to the version to "upgrade from" or "downgrade to".
exports.ExecuteMinorUpgrades = {
    1: {
        9: [],
    }
};
exports.ExecuteMinorDowngrades = {
    1: {
        5: [VersionTranslations_1.DowngradeWorksheetNames],
        9: [],
    }
};
exports.NotificationMinorDowngrades = {
    1: {
        9: [],
        10: [VersionTranslations_1.DowngradeFlipboardZoneID]
    }
};
/**
 * Creates a new InternalContractVersionConverter which has the ability to upgrade and downgrade the contract
 * between the two versions, which are specified. If externalMajorVersion is greater than platformMajorVersion,
 * an error will be thrown because we won't know how to do those conversions.
 * This converter can handle both major and minor updates when the platform version is greater than external version.
 *
 * @param externalVersion VersionNumber of the internal api which the external module is using
 * @param platformVersion VersionNumber of the internal api which the platform is using
 */
function CreateVersionConverter(externalVersion, platformVersion) {
    return CreateVersionConverterWithTranslators(externalVersion, platformVersion, exports.ExecuteMinorUpgrades, exports.ExecuteMinorDowngrades, exports.NotificationMinorDowngrades);
}
exports.CreateVersionConverter = CreateVersionConverter;
/**
 * Implementation of CreateVersionConverter. This function takes the upgrade, downgrade, and
 * notification arrays so that all the logic can be tested.
 *
 * @param externalVersion VersionNumber of the internal api which the external module is using
 * @param platformVersion VersionNumber of the internal api which the platform is using
 * @param upgrades MajorMinorTranslators for upgrades
 * @param downgrades MajorMinorTranslators for downgrades
 * @param notificationDowngrades MajorMinorTranslators for notification downgrades
 */
function CreateVersionConverterWithTranslators(externalVersion, platformVersion, upgrades, downgrades, notificationDowngrades) {
    var externalMajorVersion = externalVersion.major;
    var externalMinorVersion = externalVersion.minor;
    var platformMajorVersion = platformVersion.major;
    if (externalMajorVersion > platformMajorVersion) {
        throw new Error("External version must be less than or equal to platform version.\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    // If we are using the exact same versions (major.minor), just use the identity converter
    if (VersionEqualTo(externalVersion, platformVersion)) {
        return new IdentityVersionConverter_1.IdentityVersionConverter();
    }
    // Walk the span between the versions we have here and collect the upgrade and downgrades necessary
    var neededExecuteUpgrades = GetNeededTranslations(externalMajorVersion, platformMajorVersion, externalMinorVersion, upgrades);
    var neededExecuteDowngrades = GetNeededTranslations(externalMajorVersion, platformMajorVersion, externalMinorVersion, downgrades);
    var neededNotificationDowngrades = GetNeededTranslations(externalMajorVersion, platformMajorVersion, externalMinorVersion, notificationDowngrades);
    // We want to apply the downgrades in reverse order in case of dependencies between them
    neededExecuteDowngrades.reverse();
    neededNotificationDowngrades.reverse();
    return StackingVersionConverter_1.StackingVersionConverter.fromData(externalVersion, platformVersion, neededExecuteUpgrades, neededExecuteDowngrades, neededNotificationDowngrades);
}
exports.CreateVersionConverterWithTranslators = CreateVersionConverterWithTranslators;
function GetNeededTranslations(externalMajorVersion, platformMajorVersion, externalMinorVersion, majorMinorTranslators) {
    var neededTranslations = [];
    for (var major = externalMajorVersion; major <= platformMajorVersion; major++) {
        if (major in majorMinorTranslators) {
            var start = (major === externalMajorVersion) ? externalMinorVersion : 0;
            var maximumMinorVersion = GetMaximumMinorIndex(Object.keys(majorMinorTranslators[major]));
            for (var minor = start; minor <= maximumMinorVersion; minor++) {
                if (minor in majorMinorTranslators[major]) {
                    neededTranslations.push.apply(neededTranslations, majorMinorTranslators[major][minor]);
                }
            }
        }
    }
    return neededTranslations;
}
function GetMaximumMinorIndex(minorVersions) {
    return minorVersions.map(function (a) { return Number(a); }).reduce(function (a, b) { return a > b ? a : b; });
}
exports.GetMaximumMinorIndex = GetMaximumMinorIndex;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/versioning/VersionTranslations.js":
/*!**************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/versioning/VersionTranslations.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Notifications_1 = __webpack_require__(/*! ../contract/Notifications */ "../../api-internal-contract-js/lib/src/contract/Notifications.js");
// This is where we will start to define some of these translations.
// When modifying existing models, add the requisite conversion functions here, then use them
// in the VersionConverterFactory implementation. Import old versions as you would any other module
// 0 <-> Translations
// Uncomment this line to import from the V0 definition of the API
// import * as V0 from '@tableau-api-internal-contract-js_v0';
// 1 <-> 2 Translations
// Uncomment this line to import from the V1 definition of the API
// import * as V1 from '@tableau-api-internal-contract-js_v1';
function DowngradeWorksheetNames(executeResponse) {
    // Fix the dashboard friendly name issue. The structures are compatible,
    // so we still return the original reply, but we copy the SheetInfo.name
    // into the DashboardZone.name, where v1 wants to find it.
    var bootstrapInfo = executeResponse.result;
    if (bootstrapInfo.extensionDashboardInfo !== undefined) {
        bootstrapInfo.extensionDashboardInfo.zones.forEach(function (zone) {
            if (zone.sheetInfo) {
                zone.name = zone.sheetInfo.name;
            }
        });
    }
    return executeResponse;
}
exports.DowngradeWorksheetNames = DowngradeWorksheetNames;
function DowngradeFlipboardZoneID(notification) {
    // Fix the FlipboardZoneId issue. Older external versions still check for flipboardZoneIDs.
    // When running against a newer server, if flipboardZoneId is absent, set it to default(0).
    if (notification.notificationId === Notifications_1.NotificationId.SelectedMarksChanged) {
        var visualModel = notification.data;
        if (visualModel.flipboardZoneID === undefined) {
            visualModel.flipboardZoneID = 0;
        }
    }
    return notification;
}
exports.DowngradeFlipboardZoneID = DowngradeFlipboardZoneID;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/versioning/external/ExternalIdentityVersionConverter.js":
/*!************************************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/versioning/external/ExternalIdentityVersionConverter.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * This version converter doesn't actually do anything but is useful for testing or when we have
 * a matching platform and external version number
*/
var ExternalIdentityVersionConverter = /** @class */ (function () {
    function ExternalIdentityVersionConverter() {
    }
    ExternalIdentityVersionConverter.prototype.downgradeExecuteCall = function (verb, parameters) {
        return {
            verb: verb,
            parameters: parameters
        };
    };
    ExternalIdentityVersionConverter.prototype.upgradeExecuteReturn = function (executeResponse, verb, parameters) {
        return executeResponse;
    };
    ExternalIdentityVersionConverter.prototype.upgradeNotification = function (notification) {
        return notification;
    };
    return ExternalIdentityVersionConverter;
}());
exports.ExternalIdentityVersionConverter = ExternalIdentityVersionConverter;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/versioning/external/ExternalStackingVersionConverter.js":
/*!************************************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/versioning/external/ExternalStackingVersionConverter.js ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
/**
 * The version converter is designed to allow the platform and external modules
 * to seemlessly communicate over two different versions of the internal API. This converter
 * supports external's version(minor) >= platform's version(minor). When executing
 * commands, it is used to downgrade the external representation to what platform knows on the way in
 * and upgrade the representations on the way out.
 */
var ExternalStackingVersionConverter = /** @class */ (function () {
    /**
     * Creates a new instance of the StackingVersionConverter
     *
     * @param _externalVersion The version of the internal contract api-external-js is using
     * @param _platformVersion The version of the internal contract the api-platform-js is using
     * @param _downgradeExecuteCallTranslations Ordered list of the translations to perform when downgrading cmd parameters
     * @param _upgradeExecuteReturnTranslations Ordered list of upgrade translations to perform after a cmd is executed
     * @param _upgradeNotificationTranslations Ordered list of upgrade notfications to perform on events
     */
    function ExternalStackingVersionConverter(_externalVersion, _platformVersion, _downgradeExecuteCallTranslations, _upgradeExecuteReturnTranslations, _upgradeNotificationTranslations) {
        this._externalVersion = _externalVersion;
        this._platformVersion = _platformVersion;
        this._downgradeExecuteCallTranslations = _downgradeExecuteCallTranslations;
        this._upgradeExecuteReturnTranslations = _upgradeExecuteReturnTranslations;
        this._upgradeNotificationTranslations = _upgradeNotificationTranslations;
        if (this._externalVersion.major > this._platformVersion.major) {
            throw new Error("Cannot convert between external version " + this._externalVersion.major + "\n      and " + this._platformVersion.major);
        }
    }
    ExternalStackingVersionConverter.prototype.downgradeExecuteCall = function (verb, parameters) {
        // Perform the downgrade of the verb and parameters to the level that platform is using
        var downgraded = { verb: verb, parameters: parameters };
        for (var _i = 0, _a = this._downgradeExecuteCallTranslations; _i < _a.length; _i++) {
            var downgradeTranslation = _a[_i];
            downgraded = downgradeTranslation(downgraded.verb, downgraded.parameters);
        }
        return downgraded;
    };
    ExternalStackingVersionConverter.prototype.upgradeExecuteReturn = function (executeResponse, verb, parameters) {
        // Perform the upgrade of the response to what the external module is expecting
        var upgraded = executeResponse;
        for (var _i = 0, _a = this._upgradeExecuteReturnTranslations; _i < _a.length; _i++) {
            var upgradeTranslation = _a[_i];
            upgraded = upgradeTranslation(upgraded, verb, parameters);
        }
        return upgraded;
    };
    ExternalStackingVersionConverter.prototype.upgradeNotification = function (notification) {
        // Perform the upgrade of notification to what the external module is expecting
        var upgraded = notification;
        for (var _i = 0, _a = this._upgradeNotificationTranslations; _i < _a.length; _i++) {
            var upgradeNotification = _a[_i];
            upgraded = upgradeNotification(upgraded);
        }
        return upgraded;
    };
    return ExternalStackingVersionConverter;
}());
exports.ExternalStackingVersionConverter = ExternalStackingVersionConverter;


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/versioning/external/ExternalVersionConverterFactory.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/versioning/external/ExternalVersionConverterFactory.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VersionConverterFactory_1 = __webpack_require__(/*! ../VersionConverterFactory */ "../../api-internal-contract-js/lib/src/versioning/VersionConverterFactory.js");
var ExternalIdentityVersionConverter_1 = __webpack_require__(/*! ./ExternalIdentityVersionConverter */ "../../api-internal-contract-js/lib/src/versioning/external/ExternalIdentityVersionConverter.js");
var ExternalStackingVersionConverter_1 = __webpack_require__(/*! ./ExternalStackingVersionConverter */ "../../api-internal-contract-js/lib/src/versioning/external/ExternalStackingVersionConverter.js");
var ExternalVersionTranslations_1 = __webpack_require__(/*! ./ExternalVersionTranslations */ "../../api-internal-contract-js/lib/src/versioning/external/ExternalVersionTranslations.js");
// A mapping from the current client version of internal-contract to an older platform version of the contract.
// Each version bump can have an array of translations to perform in order.
// These translations handle downgradeExecuteCall and upgradeExecuteReturn and are meant to be called on the
// client/external side.
// When updating the major or minor version of our internal-contract, you will need to update these data structures.
// * If there are translations to add, add them to the version to 'upgrade from' or 'downgrade to'.
exports.ExecuteMinorDowngradeCallExternal = {
    1: {
        9: [],
        13: [ExternalVersionTranslations_1.DowngradeUnderlyingTableDataAsync, ExternalVersionTranslations_1.DowngradeLogicalTableDataAsync],
    }
};
exports.ExecuteMinorUpgradeReturnExternal = {
    1: {
        9: [ExternalVersionTranslations_1.UpgradeDataTableTypes],
        29: [ExternalVersionTranslations_1.UpgradeDataTableRowsAndColumns],
    }
};
exports.ExecuteMinorUpgradeNotification = {
    1: {
        9: [] // Note that we put upgrades from 1.9 to 1.10 in the [1][9] bucket
    }
};
/**
 * Creates a new ExternalContractVersionConverter which has the ability to upgrade and downgrade
 * the contract between the two versions which are specified. If externalMajorVersion is less than
 * platformMajorVersion, an ExternalIdentityVersionConverter will be returned.
 * Handles upgrade/downgrade for both major and minor updates.
 *
 * @param externalVersion VersionNumber of the internal api which the external module is using
 * @param platformVersion VersionNumber of the internal api which the platform is using
 */
function CreateExternalCompatibleVersionConverter(externalVersion, platformVersion) {
    return CreateExternalCompatibleVersionConverterWithTranslators(externalVersion, platformVersion, exports.ExecuteMinorDowngradeCallExternal, exports.ExecuteMinorUpgradeReturnExternal, exports.ExecuteMinorUpgradeNotification);
}
exports.CreateExternalCompatibleVersionConverter = CreateExternalCompatibleVersionConverter;
/**
 * Implementation of CreateExternalCompatibleVersionConverterWithTranslators.
 * This function takes the upgrade, downgrade arrays so that all the logic can be tested.
 *
 * @param externalVersion VersionNumber of the internal contract which the external module is using
 * @param platformVersion VersionNumber of the internal contract which the platform is using
 * @param upgrades MajorMinorTranslators for response upgrades
 * @param downgrades MajorMinorTranslators for execute call downgrades
 */
function CreateExternalCompatibleVersionConverterWithTranslators(externalVersion, platformVersion, downgrades, upgrades, upgradeNotifications) {
    var externalMajorVersion = externalVersion.major;
    var platformMajorVersion = platformVersion.major;
    var platformMinorVersion = platformVersion.minor;
    // This check is present in VersionConverterFactory. We throw the same error here as well.
    // Hence we only need to check the minor versions for translations.
    if (externalMajorVersion > platformMajorVersion) {
        throw new Error("External version must be less than or equal to platform version.\n    externalMajorVersion=" + externalMajorVersion + " platformMajorVersion=" + platformMajorVersion);
    }
    if (externalMajorVersion < platformMajorVersion || VersionConverterFactory_1.VersionEqualTo(externalVersion, platformVersion)) {
        return new ExternalIdentityVersionConverter_1.ExternalIdentityVersionConverter();
    }
    // Walk the span between the versions we have here and collect the upgrade and downgrades necessary
    var neededExecuteCallDowngrade = GetNeededExternalTranslations(platformMajorVersion, platformMinorVersion, downgrades);
    var neededExecuteReturnUpgrades = GetNeededExternalTranslations(platformMajorVersion, platformMinorVersion, upgrades);
    var neededNotificationUpgrades = GetNeededExternalTranslations(platformMajorVersion, platformMinorVersion, upgradeNotifications);
    // Reverse the downgrade calls, so that we start the downgrade from the external version to the platform version
    neededExecuteCallDowngrade.reverse();
    return new ExternalStackingVersionConverter_1.ExternalStackingVersionConverter(externalVersion, platformVersion, neededExecuteCallDowngrade, neededExecuteReturnUpgrades, neededNotificationUpgrades);
}
exports.CreateExternalCompatibleVersionConverterWithTranslators = CreateExternalCompatibleVersionConverterWithTranslators;
function GetNeededExternalTranslations(platformMajorVersion, platformMinorVersion, majorMinorTranslators) {
    var neededTranslations = [];
    if (platformMajorVersion in majorMinorTranslators) {
        var start = platformMinorVersion;
        var maximumMinorVersion = VersionConverterFactory_1.GetMaximumMinorIndex(Object.keys(majorMinorTranslators[platformMajorVersion]));
        for (var minor = start; minor <= maximumMinorVersion; minor++) {
            if (minor in majorMinorTranslators[platformMajorVersion]) {
                neededTranslations.push.apply(neededTranslations, majorMinorTranslators[platformMajorVersion][minor]);
            }
        }
    }
    return neededTranslations;
}


/***/ }),

/***/ "../../api-internal-contract-js/lib/src/versioning/external/ExternalVersionTranslations.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-internal-contract-js/lib/src/versioning/external/ExternalVersionTranslations.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JsApiInternalContract_1 = __webpack_require__(/*! ../../JsApiInternalContract */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
// 1.2 -> 1.0 Translations
// Uncomment this line to import from the V1 definition of the API
// import * as V1 from '@tableau-api-internal-contract-js_v1';
/**
 * Prior to 2019.2 (internal-contract v1.9), DataValue.value were all strings.
 * Go through all DataValue objects. If we have a string, but the type should not be a string,
 * convert it to the correct type. The type of DataValue.value is 'any' in the contract, so
 * this change doesn't need any updates to classes or types.
*/
function UpgradeDataTableTypes(executeResponse, verb, parameters) {
    if (!executeResponse) {
        return executeResponse;
    }
    var oldUnderlyingDataTable = executeResponse.result;
    if (oldUnderlyingDataTable.data !== undefined && oldUnderlyingDataTable.isSummary !== undefined) {
        convertDataValues(oldUnderlyingDataTable.data);
        return executeResponse;
    }
    var oldSelectedMarksTable = executeResponse.result;
    if (oldSelectedMarksTable.data !== undefined && Array.isArray(oldSelectedMarksTable.data)) {
        oldSelectedMarksTable.data.forEach(function (marksTable) {
            convertDataValues(marksTable);
        });
        return executeResponse;
    }
    return executeResponse;
}
exports.UpgradeDataTableTypes = UpgradeDataTableTypes;
/**
 * Prior to 2020.2 (internal-contract v1.13 and older), worksheet.getUnderlyingTableDataAsync doesn't exist.
 * Map it to the older GetUnderlyingData verb and validate the the logical table Id.
 **/
function DowngradeUnderlyingTableDataAsync(verb, parameters) {
    if (verb === JsApiInternalContract_1.VerbId.GetUnderlyingTableData) {
        validateParametersForObjectModel(verb, parameters);
        verb = JsApiInternalContract_1.VerbId.GetUnderlyingData;
    }
    return {
        verb: verb,
        parameters: parameters
    };
}
exports.DowngradeUnderlyingTableDataAsync = DowngradeUnderlyingTableDataAsync;
/**
 * Prior to 2020.2 (internal-contract v1.13 and older), datasource.getLogicalTableDataAsync doesn't exist.
 * Map it to the older GetDataSourceData verb and validate the the logical table Id.
 **/
function DowngradeLogicalTableDataAsync(verb, parameters) {
    if (verb === JsApiInternalContract_1.VerbId.GetLogicalTableData) {
        validateParametersForObjectModel(verb, parameters);
        verb = JsApiInternalContract_1.VerbId.GetDataSourceData;
    }
    return {
        verb: verb,
        parameters: parameters
    };
}
exports.DowngradeLogicalTableDataAsync = DowngradeLogicalTableDataAsync;
function convertDataValues(table) {
    // dataTable is a two-dimensional array of data. First index is the row, second is the column.
    if (table === undefined || table.dataTable === undefined || !Array.isArray(table.dataTable)) {
        return;
    }
    table.dataTable.forEach(function (row) {
        row.forEach(function (dataValue, columnIndex) {
            var value = dataValue.value;
            if (value !== null) {
                dataValue.value = JsApiInternalContract_1.DataTypeConverter.convertValueAsStringToValue(value, table.headers[columnIndex].dataType);
            }
        });
    });
}
// ToDo: TFS1069027 Refactor input verbs & parameters in api-internal-contract Upgrade/Downgrade framework
function validateParametersForObjectModel(verb, parameters) {
    if (parameters[JsApiInternalContract_1.ParameterId.LogicalTableId] !== JsApiInternalContract_1.ApiShowDataTableSentinel.SingleTableId) {
        throw new Error("Invalid logical table id passed to " + verb + ".");
    }
}
/**
 * Prior to 2021.2 (internal-contract v1.29 and below), getSummaryDataAsync did not support maxRows,
 * and any get...DataAsync did not support columnsToIncludeById.
 * Trim result to maxRows if it is included in the parameters for getSummaryDataAsync
 * Trim columns to columnsToInclude if included in the parameters for any get...DataAsync
*/
function UpgradeDataTableRowsAndColumns(executeResponse, verb, parameters) {
    if (isGetSummaryDataVerb(verb) && parameters[JsApiInternalContract_1.ParameterId.MaxRows]) {
        executeResponse = adjustDataRowLength(executeResponse, parameters[JsApiInternalContract_1.ParameterId.MaxRows]);
    }
    if (isGetTableDataVerb(verb) && parameters[JsApiInternalContract_1.ParameterId.ColumnsToIncludeById]) {
        executeResponse = adjustDataColumns(executeResponse, parameters[JsApiInternalContract_1.ParameterId.ColumnsToIncludeById]);
    }
    return executeResponse;
}
exports.UpgradeDataTableRowsAndColumns = UpgradeDataTableRowsAndColumns;
function isGetSummaryDataVerb(verb) {
    return verb === JsApiInternalContract_1.VerbId.GetDataSummaryData;
}
function isGetTableDataVerb(verb) {
    return verb === JsApiInternalContract_1.VerbId.GetDataSummaryData
        || verb === JsApiInternalContract_1.VerbId.GetUnderlyingTableData
        || verb === JsApiInternalContract_1.VerbId.GetLogicalTableData
        || verb === JsApiInternalContract_1.VerbId.GetDataSourceData
        || verb === JsApiInternalContract_1.VerbId.GetUnderlyingData;
}
function adjustDataRowLength(executeResponse, maxRows) {
    var underlyingDataTable = executeResponse.result;
    if (!underlyingDataTable.data || !Array.isArray(underlyingDataTable.data.dataTable)) {
        return executeResponse;
    }
    if (maxRows > 0 && maxRows < underlyingDataTable.data.dataTable.length) {
        underlyingDataTable.data.dataTable.length = maxRows;
    }
    return executeResponse;
}
function adjustDataColumns(executeResponse, columnsToInclude) {
    if (columnsToInclude.length === 0) {
        return executeResponse;
    }
    // verify that we have a valid UnderlyingDataTable
    var underlyingDataTable = executeResponse.result;
    if (!underlyingDataTable.data || !Array.isArray(underlyingDataTable.data.dataTable) || !Array.isArray(underlyingDataTable.data.headers)) {
        return executeResponse;
    }
    // 1. filter the headers to only columnsToInclude
    // 2. use the new headers to filter all rows
    // 3. update the indices in our new headers
    var newHeaders = underlyingDataTable.data.headers.filter(function (header, index) { return columnsToInclude.find(function (name) { return name === header.fieldName; }); });
    underlyingDataTable.data.dataTable.forEach(function (row, index) {
        underlyingDataTable.data.dataTable[index]
            = row.filter(function (value, valueIndex) { return newHeaders.findIndex(function (header) { return header.index === valueIndex; }) !== -1; });
    });
    var newIndex = 0;
    underlyingDataTable.data.headers = newHeaders.map(function (header) { header.index = newIndex++; return header; });
    return executeResponse;
}


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared.js":
/*!******************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Export everything which had been previously in the api-shared module
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Dashboard_1 = __webpack_require__(/*! ./ApiShared/Dashboard */ "../../api-shared-js/lib/src/ApiShared/Dashboard.js");
exports.Dashboard = Dashboard_1.Dashboard;
var EventListenerManager_1 = __webpack_require__(/*! ./ApiShared/EventListenerManager */ "../../api-shared-js/lib/src/ApiShared/EventListenerManager.js");
exports.EventListenerManager = EventListenerManager_1.EventListenerManager;
var TableauError_1 = __webpack_require__(/*! ./ApiShared/TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
exports.TableauError = TableauError_1.TableauError;
var ApiVersion_1 = __webpack_require__(/*! ./ApiShared/ApiVersion */ "../../api-shared-js/lib/src/ApiShared/ApiVersion.js");
exports.ApiVersion = ApiVersion_1.ApiVersion;
var VersionNumber_1 = __webpack_require__(/*! ./ApiShared/VersionNumber */ "../../api-shared-js/lib/src/ApiShared/VersionNumber.js");
exports.VersionNumber = VersionNumber_1.VersionNumber;
var InternalToExternalEnumMappings_1 = __webpack_require__(/*! ./ApiShared/EnumMappings/InternalToExternalEnumMappings */ "../../api-shared-js/lib/src/ApiShared/EnumMappings/InternalToExternalEnumMappings.js");
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings;
var TableauEvent_1 = __webpack_require__(/*! ./ApiShared/Events/TableauEvent */ "../../api-shared-js/lib/src/ApiShared/Events/TableauEvent.js");
exports.TableauEvent = TableauEvent_1.TableauEvent;
var SingleEventManagerImpl_1 = __webpack_require__(/*! ./ApiShared/Impl/SingleEventManagerImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/SingleEventManagerImpl.js");
exports.SingleEventManagerImpl = SingleEventManagerImpl_1.SingleEventManagerImpl;
var DashboardImpl_1 = __webpack_require__(/*! ./ApiShared/Impl/DashboardImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/DashboardImpl.js");
exports.DashboardImpl = DashboardImpl_1.DashboardImpl;
var ServiceImplBase_1 = __webpack_require__(/*! ./ApiShared/Services/impl/ServiceImplBase */ "../../api-shared-js/lib/src/ApiShared/Services/impl/ServiceImplBase.js");
exports.ServiceImplBase = ServiceImplBase_1.ServiceImplBase;
var ErrorHelpers_1 = __webpack_require__(/*! ./ApiShared/Utils/ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
exports.ErrorHelpers = ErrorHelpers_1.ErrorHelpers;
__export(__webpack_require__(/*! ./ApiShared/CrossFrame/CrossFrameBootstrap */ "../../api-shared-js/lib/src/ApiShared/CrossFrame/CrossFrameBootstrap.js"));
__export(__webpack_require__(/*! ./ApiShared/Services/RegisterAllSharedServices */ "../../api-shared-js/lib/src/ApiShared/Services/RegisterAllSharedServices.js"));
__export(__webpack_require__(/*! ./ApiShared/Services/ServiceRegistry */ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js"));
var VersionedExternalApiDispatcher_1 = __webpack_require__(/*! ./VersionedExternalApiDispatcher */ "../../api-shared-js/lib/src/VersionedExternalApiDispatcher.js");
exports.VersionedExternalApiDispatcher = VersionedExternalApiDispatcher_1.VersionedExternalApiDispatcher;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/ApiVersion.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/ApiVersion.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VersionNumber_1 = __webpack_require__(/*! ./VersionNumber */ "../../api-shared-js/lib/src/ApiShared/VersionNumber.js");
/**
 * This is the singleton wrapper of VersionNumber
 */
var ApiVersion = /** @class */ (function () {
    function ApiVersion() {
    }
    Object.defineProperty(ApiVersion, "Instance", {
        /**
         * Gets the singleton instance of the version number.
         */
        get: function () {
            return ApiVersion._instance;
        },
        enumerable: true,
        configurable: true
    });
    ApiVersion.SetVersionNumber = function (numString, isAlpha) {
        ApiVersion._instance = new VersionNumber_1.VersionNumber(numString, isAlpha);
    };
    return ApiVersion;
}());
exports.ApiVersion = ApiVersion;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/ConnectionSummary.js":
/*!************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/ConnectionSummary.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a connection summary.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var ConnectionSummary = /** @class */ (function () {
    function ConnectionSummary(_connectionInfo) {
        this._connectionInfo = _connectionInfo;
    }
    Object.defineProperty(ConnectionSummary.prototype, "name", {
        get: function () {
            return this._connectionInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "id", {
        get: function () {
            return this._connectionInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "serverURI", {
        get: function () {
            return this._connectionInfo.serverURI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionSummary.prototype, "type", {
        get: function () {
            return this._connectionInfo.type;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionSummary;
}());
exports.ConnectionSummary = ConnectionSummary;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/CrossFrame/CrossFrameBootstrap.js":
/*!*************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/CrossFrame/CrossFrameBootstrap.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var CrossFrameDispatcher_1 = __webpack_require__(/*! ./CrossFrameDispatcher */ "../../api-shared-js/lib/src/ApiShared/CrossFrame/CrossFrameDispatcher.js");
// Checks to see if we are running in an iframe currently: https://stackoverflow.com/a/326076/8821153
function inIframe(thisWindow) {
    try {
        return thisWindow.self !== thisWindow.parent;
    }
    catch (e) {
        return true;
    }
}
/**
 * Attempts to bootstrap the extension with a cross-frame parent where Tableau is running
 *
 * @param thisWindow The window which we are running in (injected for unit testing purposes)
 * @param internalContractVersion The version number of the internal contract we are using
 * @returns A promise which is doing the actual bootstrapping
 */
function doCrossFrameBootstrap(thisWindow, internalContractVersion, options) {
    return new Promise(function (resolve, reject) {
        var parent;
        // Normally, we are running inside an iframe.  The exception to this is
        // when we are running as an extension inside a dialog as part of the UINamespace
        // functionality.  In that case, we want the opener of this window rather than the parent.
        if (!inIframe(thisWindow)) {
            parent = thisWindow.opener;
        }
        else {
            parent = thisWindow.parent;
        }
        if (!parent) {
            reject('This extension is not running inside an iframe, desktop, or popup window. Initialization failed.');
        }
        // Create the messenger which will do he communication between this window and our parent
        // Since we don't know where we are running yet, we have to make this initial origin '*'. Once
        // we have successfully initialized our extension, we will limit where we send messages
        var messenger = new api_internal_contract_js_1.CrossFrameMessenger(thisWindow, parent, '*');
        // Prepare to send an initialization message to the parent frame
        var initializationMessage = messenger.prepareInitializationMessage(internalContractVersion, api_internal_contract_js_1.MESSAGING_VERSION, options);
        // When we receive a response back from the parent, we check to make sure the guids match and then we know
        // that the parent is aware of us and we can start communicating
        messenger.setCommandResponseMessageHandler(function (msg) {
            // Verify we are getting a response from our initialize message
            if (msg.commandGuid === initializationMessage.messageGuid) {
                // The versioning of the dispatcher happens on the other side of our frame, and
                // in a wrapper on this side. This one doesn't have any version knowledge.
                var dispatcherFactory = function () { return new CrossFrameDispatcher_1.CrossFrameDispatcher(messenger); };
                resolve(dispatcherFactory);
            }
        });
        // Now that our handlers are ready, start listening and send our initialization message
        messenger.startListening();
        initializationMessage.send();
    });
}
exports.doCrossFrameBootstrap = doCrossFrameBootstrap;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/CrossFrame/CrossFrameDispatcher.js":
/*!**************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/CrossFrame/CrossFrameDispatcher.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is an implementation of the InternalApiDispatcher interface which functions by passing messages
 * across a frame boundary. This is usually between the code where our javscript library has been included
 * by a 3rd party dev and another frame where Tableau server has content.
 */
var CrossFrameDispatcher = /** @class */ (function () {
    /**
     * Creates an instance of CrossFrameDispatcher which will use the given messenger to communicate
     * @param _messenger an instantiated and listening messenger object
     */
    function CrossFrameDispatcher(_messenger) {
        this._messenger = _messenger;
        // Collection of pending promises which are waiting to be resolved. When we receive a response back from the other frame,
        // these promises can be either resolved or rejected
        this._pendingPromises = {};
        // The collection of notification handlers which have been registered with this dispatcher
        this._notificationHandlers = [];
        if (!this._messenger) {
            throw 'Missing messenger object';
        }
        // Set up our message handlers. We only care about incoming notifications and command responses
        this._messenger.setCommandResponseMessageHandler(this.onCommandResponse.bind(this));
        this._messenger.setNotificationMessageHandler(this.onNotification.bind(this));
    }
    ////// Start InternalApiDispatcher implementation
    CrossFrameDispatcher.prototype.execute = function (verb, parameters) {
        var _this = this;
        // To execute a verb, we first prepare a command message and then define a promise.
        var preparedMessage = this._messenger.prepareCommandMessage(verb, parameters);
        var promise = new Promise(function (resolve, reject) {
            // Save off the pending promise by the messageGuid we are about to send. When a response is
            // received, we'll be able to resolve this promise with the result
            _this._pendingPromises[preparedMessage.messageGuid] = { resolve: resolve, reject: reject };
        });
        // Actually send the message and return the promise
        preparedMessage.send();
        return promise;
    };
    CrossFrameDispatcher.prototype.registerNotificationHandler = function (handler) {
        this._notificationHandlers.push(handler);
    };
    CrossFrameDispatcher.prototype.unregisterNotificationHandler = function (handler) {
        this._notificationHandlers = this._notificationHandlers.filter(function (h) { return h !== handler; });
    };
    ////// End InternalApiDispatcher implementation
    CrossFrameDispatcher.prototype.onCommandResponse = function (response) {
        // We got a command response, look through the pending promises and resolve
        if (Object.keys(this._pendingPromises).indexOf(response.commandGuid) < 0) {
            return; // We don't have any reference to this command, just return
        }
        var pendingPromise = this._pendingPromises[response.commandGuid];
        // If we have an error defined, reject the promise
        if (response.error) {
            pendingPromise.reject(response.error);
        }
        // If we have data defined, resolve the promise
        if (response.data) {
            pendingPromise.resolve({ result: response.data });
        }
        // Clean up our pending promises object
        delete this._pendingPromises[response.commandGuid];
    };
    CrossFrameDispatcher.prototype.onNotification = function (notificationMessage) {
        // Go through each notification handler we have registered and let them know a notification came in
        for (var _i = 0, _a = this._notificationHandlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            try {
                handler({ notificationId: notificationMessage.notificationId, data: notificationMessage.data });
            }
            catch (e) {
                // Ignore this. Wrap in try/catch so if one handler errors, the other still get the message
            }
        }
    };
    return CrossFrameDispatcher;
}());
exports.CrossFrameDispatcher = CrossFrameDispatcher;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Dashboard.js":
/*!****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Dashboard.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(/*! ./Sheet */ "../../api-shared-js/lib/src/ApiShared/Sheet.js");
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard(_dashboardImpl) {
        var _this = _super.call(this, _dashboardImpl) || this;
        _this._dashboardImpl = _dashboardImpl;
        _dashboardImpl.initializeWithPublicInterfaces(_this);
        return _this;
    }
    Object.defineProperty(Dashboard.prototype, "worksheets", {
        get: function () {
            return this._dashboardImpl.worksheets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "objects", {
        get: function () {
            return this._dashboardImpl.objects;
        },
        enumerable: true,
        configurable: true
    });
    Dashboard.prototype.setZoneVisibilityAsync = function (zoneVisibilityMap) {
        return this._dashboardImpl.setZoneVisibilityAsync(zoneVisibilityMap);
    };
    return Dashboard;
}(Sheet_1.Sheet));
exports.Dashboard = Dashboard;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/DashboardObject.js":
/*!**********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/DashboardObject.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the dashboard objects - the zones in a dashboard.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var DashboardObject = /** @class */ (function () {
    function DashboardObject(_dashboard, _type, _position, _size, _worksheet, _name, _isFloating, _isVisible, _id) {
        this._dashboard = _dashboard;
        this._type = _type;
        this._position = _position;
        this._size = _size;
        this._worksheet = _worksheet;
        this._name = _name;
        this._isFloating = _isFloating;
        this._isVisible = _isVisible;
        this._id = _id;
    }
    Object.defineProperty(DashboardObject.prototype, "dashboard", {
        get: function () {
            return this._dashboard;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "worksheet", {
        get: function () {
            return this._worksheet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "isFloating", {
        get: function () {
            return this._isFloating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardObject.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardObject;
}());
exports.DashboardObject = DashboardObject;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/DataSource.js":
/*!*****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/DataSource.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataSource = /** @class */ (function () {
    function DataSource(_dataSourceImpl) {
        this._dataSourceImpl = _dataSourceImpl;
    }
    Object.defineProperty(DataSource.prototype, "name", {
        get: function () {
            return this._dataSourceImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "id", {
        get: function () {
            return this._dataSourceImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "fields", {
        get: function () {
            return this._dataSourceImpl.fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "extractUpdateTime", {
        get: function () {
            return this._dataSourceImpl.extractUpdateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "isExtract", {
        get: function () {
            return this._dataSourceImpl.isExtract;
        },
        enumerable: true,
        configurable: true
    });
    DataSource.prototype.refreshAsync = function () {
        return this._dataSourceImpl.refreshAsync();
    };
    DataSource.prototype.getActiveTablesAsync = function () {
        console.warn('DataSource.getActiveTablesAsync is deprecated. Please use DataSource.getLogicalTablesAsync.');
        return this._dataSourceImpl.getActiveTablesAsync();
    };
    DataSource.prototype.getConnectionSummariesAsync = function () {
        return this._dataSourceImpl.getConnectionSummariesAsync();
    };
    DataSource.prototype.getUnderlyingDataAsync = function (options) {
        console.warn('DataSource.getUnderlyingDataAsync is deprecated. Please use ' +
            'DataSource.getLogicalTablesAsync and DataSource.getLogicalTableDataAsync.');
        return this._dataSourceImpl.getUnderlyingDataAsync(options);
    };
    DataSource.prototype.getLogicalTablesAsync = function () {
        return this._dataSourceImpl.getLogicalTablesAsync();
    };
    DataSource.prototype.getLogicalTableDataAsync = function (logicalTableId, options) {
        return this._dataSourceImpl.getLogicalTableDataAsync(logicalTableId, options);
    };
    return DataSource;
}());
exports.DataSource = DataSource;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/EnumMappings/ExternalToInternalEnumMappings.js":
/*!**************************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/EnumMappings/ExternalToInternalEnumMappings.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
var EnumConverter_1 = __webpack_require__(/*! ../Utils/EnumConverter */ "../../api-shared-js/lib/src/ApiShared/Utils/EnumConverter.js");
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the external-api-contract to the enums used
 * in the internal-api-contract, which developers code against.
 */
var ExternalToInternalEnumMappings = /** @class */ (function () {
    function ExternalToInternalEnumMappings() {
    }
    ExternalToInternalEnumMappings.filterDomainType = new EnumConverter_1.EnumConverter((_a = {},
        _a[api_external_contract_js_1.FilterDomainType.Relevant] = api_internal_contract_js_1.FilterDomainType.Relevant,
        _a[api_external_contract_js_1.FilterDomainType.Database] = api_internal_contract_js_1.FilterDomainType.Database,
        _a));
    ExternalToInternalEnumMappings.nullOptions = new EnumConverter_1.EnumConverter((_b = {},
        _b[api_external_contract_js_1.FilterNullOption.AllValues] = api_internal_contract_js_1.FilterNullOption.AllValues,
        _b[api_external_contract_js_1.FilterNullOption.NonNullValues] = api_internal_contract_js_1.FilterNullOption.NonNullValues,
        _b[api_external_contract_js_1.FilterNullOption.NullValues] = api_internal_contract_js_1.FilterNullOption.NullValues,
        _b));
    ExternalToInternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_c = {},
        _c[api_external_contract_js_1.FilterUpdateType.Add] = api_internal_contract_js_1.FilterUpdateType.Add,
        _c[api_external_contract_js_1.FilterUpdateType.All] = api_internal_contract_js_1.FilterUpdateType.All,
        _c[api_external_contract_js_1.FilterUpdateType.Remove] = api_internal_contract_js_1.FilterUpdateType.Remove,
        _c[api_external_contract_js_1.FilterUpdateType.Replace] = api_internal_contract_js_1.FilterUpdateType.Replace,
        _c));
    ExternalToInternalEnumMappings.setVisibilityType = new EnumConverter_1.EnumConverter((_d = {},
        _d[api_external_contract_js_1.ZoneVisibilityType.Show] = true,
        _d[api_external_contract_js_1.ZoneVisibilityType.Hide] = false,
        _d));
    ExternalToInternalEnumMappings.showDataTableFormatType = new EnumConverter_1.EnumConverter((_e = {},
        _e[api_external_contract_js_1.IncludeDataValuesOption.AllValues] = api_internal_contract_js_1.ApiShowDataTableFormat.NativeAndFormattedValues,
        _e[api_external_contract_js_1.IncludeDataValuesOption.OnlyNativeValues] = api_internal_contract_js_1.ApiShowDataTableFormat.NativeValuesOnly,
        _e[api_external_contract_js_1.IncludeDataValuesOption.OnlyFormattedValues] = api_internal_contract_js_1.ApiShowDataTableFormat.FormattedValuesOnly,
        _e));
    return ExternalToInternalEnumMappings;
}());
exports.ExternalToInternalEnumMappings = ExternalToInternalEnumMappings;
/* tslint:enable:typedef */


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/EnumMappings/InternalToExternalEnumMappings.js":
/*!**************************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/EnumMappings/InternalToExternalEnumMappings.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var EnumConverter_1 = __webpack_require__(/*! ../Utils/EnumConverter */ "../../api-shared-js/lib/src/ApiShared/Utils/EnumConverter.js");
/* tslint:disable:typedef - Disable this to make declaring these classes a bit easier */
/**
 * Maps enums used by the internal-api-contract to the enums used
 * in the external-api-contract, which developers code against.
 */
var InternalToExternalEnumMappings = /** @class */ (function () {
    function InternalToExternalEnumMappings() {
    }
    InternalToExternalEnumMappings.extensionContext = new EnumConverter_1.EnumConverter((_a = {},
        _a[api_internal_contract_js_1.ExtensionContext.Desktop] = api_external_contract_js_1.ExtensionContext.Desktop,
        _a[api_internal_contract_js_1.ExtensionContext.Server] = api_external_contract_js_1.ExtensionContext.Server,
        _a));
    InternalToExternalEnumMappings.extensionMode = new EnumConverter_1.EnumConverter((_b = {},
        _b[api_internal_contract_js_1.ExtensionMode.Authoring] = api_external_contract_js_1.ExtensionMode.Authoring,
        _b[api_internal_contract_js_1.ExtensionMode.Viewing] = api_external_contract_js_1.ExtensionMode.Viewing,
        _b));
    InternalToExternalEnumMappings.columnType = new EnumConverter_1.EnumConverter((_c = {},
        _c[api_internal_contract_js_1.ColumnType.Continuous] = api_external_contract_js_1.ColumnType.Continuous,
        _c[api_internal_contract_js_1.ColumnType.Discrete] = api_external_contract_js_1.ColumnType.Discrete,
        _c));
    InternalToExternalEnumMappings.fieldAggregationType = new EnumConverter_1.EnumConverter((_d = {},
        _d[api_internal_contract_js_1.FieldAggregationType.Attr] = api_external_contract_js_1.FieldAggregationType.Attr,
        _d[api_internal_contract_js_1.FieldAggregationType.Avg] = api_external_contract_js_1.FieldAggregationType.Avg,
        _d[api_internal_contract_js_1.FieldAggregationType.Count] = api_external_contract_js_1.FieldAggregationType.Count,
        _d[api_internal_contract_js_1.FieldAggregationType.Countd] = api_external_contract_js_1.FieldAggregationType.Countd,
        _d[api_internal_contract_js_1.FieldAggregationType.Day] = api_external_contract_js_1.FieldAggregationType.Day,
        _d[api_internal_contract_js_1.FieldAggregationType.End] = api_external_contract_js_1.FieldAggregationType.End,
        _d[api_internal_contract_js_1.FieldAggregationType.Hour] = api_external_contract_js_1.FieldAggregationType.Hour,
        _d[api_internal_contract_js_1.FieldAggregationType.InOut] = api_external_contract_js_1.FieldAggregationType.InOut,
        _d[api_internal_contract_js_1.FieldAggregationType.Kurtosis] = api_external_contract_js_1.FieldAggregationType.Kurtosis,
        _d[api_internal_contract_js_1.FieldAggregationType.Max] = api_external_contract_js_1.FieldAggregationType.Max,
        _d[api_internal_contract_js_1.FieldAggregationType.Mdy] = api_external_contract_js_1.FieldAggregationType.Mdy,
        _d[api_internal_contract_js_1.FieldAggregationType.Median] = api_external_contract_js_1.FieldAggregationType.Median,
        _d[api_internal_contract_js_1.FieldAggregationType.Min] = api_external_contract_js_1.FieldAggregationType.Min,
        _d[api_internal_contract_js_1.FieldAggregationType.Minute] = api_external_contract_js_1.FieldAggregationType.Minute,
        _d[api_internal_contract_js_1.FieldAggregationType.MonthYear] = api_external_contract_js_1.FieldAggregationType.MonthYear,
        _d[api_internal_contract_js_1.FieldAggregationType.None] = api_external_contract_js_1.FieldAggregationType.None,
        _d[api_internal_contract_js_1.FieldAggregationType.Qtr] = api_external_contract_js_1.FieldAggregationType.Qtr,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart1] = api_external_contract_js_1.FieldAggregationType.Quart1,
        _d[api_internal_contract_js_1.FieldAggregationType.Quart3] = api_external_contract_js_1.FieldAggregationType.Quart3,
        _d[api_internal_contract_js_1.FieldAggregationType.Second] = api_external_contract_js_1.FieldAggregationType.Second,
        _d[api_internal_contract_js_1.FieldAggregationType.Skewness] = api_external_contract_js_1.FieldAggregationType.Skewness,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdev] = api_external_contract_js_1.FieldAggregationType.Stdev,
        _d[api_internal_contract_js_1.FieldAggregationType.Stdevp] = api_external_contract_js_1.FieldAggregationType.Stdevp,
        _d[api_internal_contract_js_1.FieldAggregationType.Sum] = api_external_contract_js_1.FieldAggregationType.Sum,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncDay] = api_external_contract_js_1.FieldAggregationType.TruncDay,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncHour] = api_external_contract_js_1.FieldAggregationType.TruncHour,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMinute] = api_external_contract_js_1.FieldAggregationType.TruncMinute,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncMonth] = api_external_contract_js_1.FieldAggregationType.TruncMonth,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncQtr] = api_external_contract_js_1.FieldAggregationType.TruncQtr,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncSecond] = api_external_contract_js_1.FieldAggregationType.TruncSecond,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncWeek] = api_external_contract_js_1.FieldAggregationType.TruncWeek,
        _d[api_internal_contract_js_1.FieldAggregationType.TruncYear] = api_external_contract_js_1.FieldAggregationType.TruncYear,
        _d[api_internal_contract_js_1.FieldAggregationType.User] = api_external_contract_js_1.FieldAggregationType.User,
        _d[api_internal_contract_js_1.FieldAggregationType.Var] = api_external_contract_js_1.FieldAggregationType.Var,
        _d[api_internal_contract_js_1.FieldAggregationType.Varp] = api_external_contract_js_1.FieldAggregationType.Varp,
        _d[api_internal_contract_js_1.FieldAggregationType.Week] = api_external_contract_js_1.FieldAggregationType.Week,
        _d[api_internal_contract_js_1.FieldAggregationType.Weekday] = api_external_contract_js_1.FieldAggregationType.Weekday,
        _d[api_internal_contract_js_1.FieldAggregationType.Year] = api_external_contract_js_1.FieldAggregationType.Year,
        _d));
    InternalToExternalEnumMappings.fieldRoleType = new EnumConverter_1.EnumConverter((_e = {},
        _e[api_internal_contract_js_1.FieldRoleType.Dimension] = api_external_contract_js_1.FieldRoleType.Dimension,
        _e[api_internal_contract_js_1.FieldRoleType.Measure] = api_external_contract_js_1.FieldRoleType.Measure,
        _e[api_internal_contract_js_1.FieldRoleType.Unknown] = api_external_contract_js_1.FieldRoleType.Unknown,
        _e));
    InternalToExternalEnumMappings.sheetType = new EnumConverter_1.EnumConverter((_f = {},
        _f[api_internal_contract_js_1.SheetType.Dashboard] = api_external_contract_js_1.SheetType.Dashboard,
        _f[api_internal_contract_js_1.SheetType.Story] = api_external_contract_js_1.SheetType.Story,
        _f[api_internal_contract_js_1.SheetType.Worksheet] = api_external_contract_js_1.SheetType.Worksheet,
        _f));
    InternalToExternalEnumMappings.dashboardObjectType = new EnumConverter_1.EnumConverter((_g = {},
        _g[api_internal_contract_js_1.DashboardObjectType.Extension] = api_external_contract_js_1.DashboardObjectType.Extension,
        _g[api_internal_contract_js_1.DashboardObjectType.Blank] = api_external_contract_js_1.DashboardObjectType.Blank,
        _g[api_internal_contract_js_1.DashboardObjectType.Image] = api_external_contract_js_1.DashboardObjectType.Image,
        _g[api_internal_contract_js_1.DashboardObjectType.Legend] = api_external_contract_js_1.DashboardObjectType.Legend,
        _g[api_internal_contract_js_1.DashboardObjectType.PageFilter] = api_external_contract_js_1.DashboardObjectType.PageFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.ParameterControl] = api_external_contract_js_1.DashboardObjectType.ParameterControl,
        _g[api_internal_contract_js_1.DashboardObjectType.QuickFilter] = api_external_contract_js_1.DashboardObjectType.QuickFilter,
        _g[api_internal_contract_js_1.DashboardObjectType.Text] = api_external_contract_js_1.DashboardObjectType.Text,
        _g[api_internal_contract_js_1.DashboardObjectType.Title] = api_external_contract_js_1.DashboardObjectType.Title,
        _g[api_internal_contract_js_1.DashboardObjectType.WebPage] = api_external_contract_js_1.DashboardObjectType.WebPage,
        _g[api_internal_contract_js_1.DashboardObjectType.Worksheet] = api_external_contract_js_1.DashboardObjectType.Worksheet,
        _g));
    InternalToExternalEnumMappings.dataType = new EnumConverter_1.EnumConverter((_h = {},
        _h[api_internal_contract_js_1.DataType.Bool] = api_external_contract_js_1.DataType.Bool,
        _h[api_internal_contract_js_1.DataType.Date] = api_external_contract_js_1.DataType.Date,
        _h[api_internal_contract_js_1.DataType.DateTime] = api_external_contract_js_1.DataType.DateTime,
        _h[api_internal_contract_js_1.DataType.Float] = api_external_contract_js_1.DataType.Float,
        _h[api_internal_contract_js_1.DataType.Int] = api_external_contract_js_1.DataType.Int,
        _h[api_internal_contract_js_1.DataType.String] = api_external_contract_js_1.DataType.String,
        _h));
    InternalToExternalEnumMappings.filterUpdateType = new EnumConverter_1.EnumConverter((_j = {},
        _j[api_internal_contract_js_1.FilterUpdateType.Add] = api_external_contract_js_1.FilterUpdateType.Add,
        _j[api_internal_contract_js_1.FilterUpdateType.All] = api_external_contract_js_1.FilterUpdateType.All,
        _j[api_internal_contract_js_1.FilterUpdateType.Remove] = api_external_contract_js_1.FilterUpdateType.Remove,
        _j[api_internal_contract_js_1.FilterUpdateType.Replace] = api_external_contract_js_1.FilterUpdateType.Replace,
        _j));
    InternalToExternalEnumMappings.allowableValues = new EnumConverter_1.EnumConverter((_k = {},
        _k[api_internal_contract_js_1.DomainRestrictionType.All] = api_external_contract_js_1.ParameterValueType.All,
        _k[api_internal_contract_js_1.DomainRestrictionType.List] = api_external_contract_js_1.ParameterValueType.List,
        _k[api_internal_contract_js_1.DomainRestrictionType.Range] = api_external_contract_js_1.ParameterValueType.Range,
        _k));
    InternalToExternalEnumMappings.dateStepPeriod = new EnumConverter_1.EnumConverter((_l = {},
        _l[api_internal_contract_js_1.DateStepPeriod.Years] = api_external_contract_js_1.PeriodType.Years,
        _l[api_internal_contract_js_1.DateStepPeriod.Quarters] = api_external_contract_js_1.PeriodType.Quarters,
        _l[api_internal_contract_js_1.DateStepPeriod.Months] = api_external_contract_js_1.PeriodType.Months,
        _l[api_internal_contract_js_1.DateStepPeriod.Weeks] = api_external_contract_js_1.PeriodType.Weeks,
        _l[api_internal_contract_js_1.DateStepPeriod.Days] = api_external_contract_js_1.PeriodType.Days,
        _l[api_internal_contract_js_1.DateStepPeriod.Hours] = api_external_contract_js_1.PeriodType.Hours,
        _l[api_internal_contract_js_1.DateStepPeriod.Minutes] = api_external_contract_js_1.PeriodType.Minutes,
        _l[api_internal_contract_js_1.DateStepPeriod.Seconds] = api_external_contract_js_1.PeriodType.Seconds,
        _l));
    InternalToExternalEnumMappings.dateRangeType = new EnumConverter_1.EnumConverter((_m = {},
        _m[api_internal_contract_js_1.DateRangeType.Current] = api_external_contract_js_1.DateRangeType.Current,
        _m[api_internal_contract_js_1.DateRangeType.Last] = api_external_contract_js_1.DateRangeType.Last,
        _m[api_internal_contract_js_1.DateRangeType.LastN] = api_external_contract_js_1.DateRangeType.LastN,
        _m[api_internal_contract_js_1.DateRangeType.Next] = api_external_contract_js_1.DateRangeType.Next,
        _m[api_internal_contract_js_1.DateRangeType.NextN] = api_external_contract_js_1.DateRangeType.NextN,
        _m[api_internal_contract_js_1.DateRangeType.ToDate] = api_external_contract_js_1.DateRangeType.ToDate,
        _m));
    InternalToExternalEnumMappings.errorCode = new EnumConverter_1.EnumConverter((_o = {},
        _o[api_internal_contract_js_1.ErrorCodes.INITIALIZATION_ERROR] = api_external_contract_js_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.INTERNAL_ERROR] = api_external_contract_js_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_ENUM_MAPPING] = api_external_contract_js_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.MISSING_PARAMETER] = api_external_contract_js_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PERMISSION_DENIED] = api_external_contract_js_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.PRES_MODEL_PARSING_ERROR] = api_external_contract_js_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.UNKNOWN_VERB_ID] = api_external_contract_js_1.ErrorCodes.InternalError,
        _o[api_internal_contract_js_1.ErrorCodes.VERSION_NOT_CONFIGURED] = api_external_contract_js_1.ErrorCodes.APINotInitialized,
        _o[api_internal_contract_js_1.ErrorCodes.VISIBILITY_ERROR] = api_external_contract_js_1.ErrorCodes.VisibilityError,
        _o), api_external_contract_js_1.ErrorCodes.InternalError);
    InternalToExternalEnumMappings.filterType = new EnumConverter_1.EnumConverter((_p = {},
        _p[api_internal_contract_js_1.FilterType.Categorical] = api_external_contract_js_1.FilterType.Categorical,
        _p[api_internal_contract_js_1.FilterType.Range] = api_external_contract_js_1.FilterType.Range,
        _p[api_internal_contract_js_1.FilterType.RelativeDate] = api_external_contract_js_1.FilterType.RelativeDate,
        _p[api_internal_contract_js_1.FilterType.Hierarchical] = api_external_contract_js_1.FilterType.Hierarchical,
        _p));
    return InternalToExternalEnumMappings;
}());
exports.InternalToExternalEnumMappings = InternalToExternalEnumMappings;
/* tslint:enable:typedef */


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/EventListenerManager.js":
/*!***************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/EventListenerManager.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var TableauError_1 = __webpack_require__(/*! ./TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
/**
 * Class designed to register and unregister handlers from a user. Only those events
 * which are added via AddNewEventType will be supported by this instance
 */
var EventListenerManager = /** @class */ (function () {
    function EventListenerManager() {
        this._eventListenerManagers = {};
    }
    EventListenerManager.prototype.addEventListener = function (eventType, handler) {
        if (!this._eventListenerManagers.hasOwnProperty(eventType)) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.UnsupportedEventName, "Cannot add event, unsupported event type: " + eventType);
        }
        return this._eventListenerManagers[eventType].addEventListener(handler);
    };
    EventListenerManager.prototype.removeEventListener = function (eventType, handler) {
        if (!this._eventListenerManagers.hasOwnProperty(eventType)) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.UnsupportedEventName, "Cannot remove event, unsupported event type: " + eventType);
        }
        return this._eventListenerManagers[eventType].removeEventListener(handler);
    };
    EventListenerManager.prototype.addNewEventType = function (eventManager) {
        this._eventListenerManagers[eventManager.eventType] = eventManager;
    };
    return EventListenerManager;
}());
exports.EventListenerManager = EventListenerManager;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Events/FilterChangedEvent.js":
/*!********************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Events/FilterChangedEvent.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var TableauError_1 = __webpack_require__(/*! ../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
var TableauWorksheetEvent_1 = __webpack_require__(/*! ./TableauWorksheetEvent */ "../../api-shared-js/lib/src/ApiShared/Events/TableauWorksheetEvent.js");
var FilterChangedEvent = /** @class */ (function (_super) {
    __extends(FilterChangedEvent, _super);
    function FilterChangedEvent(worksheet, _fieldName) {
        var _this = _super.call(this, api_external_contract_js_1.TableauEventType.FilterChanged, worksheet) || this;
        _this._fieldName = _fieldName;
        return _this;
    }
    Object.defineProperty(FilterChangedEvent.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    FilterChangedEvent.prototype.getFilterAsync = function () {
        var _this = this;
        return this._worksheet.getFiltersAsync().then(function (filters) {
            // TODO: Filtering of the filters should eventually be done platform side.
            var eventedFilter = filters.find(function (filter) { return (filter.fieldName === _this._fieldName); });
            if (!eventedFilter) {
                // We shouldn't hit this unless the filter was removed from the worksheet
                // after the event was raised.
                throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.MissingFilter, "cannot find filter: " + _this._fieldName);
            }
            return eventedFilter;
        });
    };
    return FilterChangedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.FilterChangedEvent = FilterChangedEvent;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Events/MarksSelectedEvent.js":
/*!********************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Events/MarksSelectedEvent.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var TableauWorksheetEvent_1 = __webpack_require__(/*! ./TableauWorksheetEvent */ "../../api-shared-js/lib/src/ApiShared/Events/TableauWorksheetEvent.js");
var MarksSelectedEvent = /** @class */ (function (_super) {
    __extends(MarksSelectedEvent, _super);
    function MarksSelectedEvent(worksheet) {
        return _super.call(this, api_external_contract_js_1.TableauEventType.MarkSelectionChanged, worksheet) || this;
    }
    MarksSelectedEvent.prototype.getMarksAsync = function () {
        return this.worksheet.getSelectedMarksAsync();
    };
    return MarksSelectedEvent;
}(TableauWorksheetEvent_1.TableauWorksheetEvent));
exports.MarksSelectedEvent = MarksSelectedEvent;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Events/ParameterChangedEvent.js":
/*!***********************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Events/ParameterChangedEvent.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var ServiceRegistry_1 = __webpack_require__(/*! ../Services/ServiceRegistry */ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js");
var TableauError_1 = __webpack_require__(/*! ../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
var TableauSheetEvent_1 = __webpack_require__(/*! ./TableauSheetEvent */ "../../api-shared-js/lib/src/ApiShared/Events/TableauSheetEvent.js");
var ParameterChangedEvent = /** @class */ (function (_super) {
    __extends(ParameterChangedEvent, _super);
    function ParameterChangedEvent(_globalFieldName, sheet) {
        var _this = _super.call(this, api_external_contract_js_1.TableauEventType.ParameterChanged, sheet) || this;
        _this._globalFieldName = _globalFieldName;
        return _this;
    }
    ParameterChangedEvent.prototype.getParameterAsync = function () {
        var _this = this;
        // Call down to our service to get the parameter back via its field name
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.findParameterByGlobalFieldNameAsync(this._globalFieldName, this.sheet).then(function (parameter) {
            if (parameter === undefined) {
                throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.MissingParameter, "Cannot find parameter: " + _this._globalFieldName);
            }
            return parameter;
        });
    };
    return ParameterChangedEvent;
}(TableauSheetEvent_1.TableauSheetEvent));
exports.ParameterChangedEvent = ParameterChangedEvent;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Events/TableauEvent.js":
/*!**************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Events/TableauEvent.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TableauEvent = /** @class */ (function () {
    function TableauEvent(type) {
        this._type = type;
    }
    Object.defineProperty(TableauEvent.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return TableauEvent;
}());
exports.TableauEvent = TableauEvent;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Events/TableauSheetEvent.js":
/*!*******************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Events/TableauSheetEvent.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauEvent_1 = __webpack_require__(/*! ./TableauEvent */ "../../api-shared-js/lib/src/ApiShared/Events/TableauEvent.js");
var TableauSheetEvent = /** @class */ (function (_super) {
    __extends(TableauSheetEvent, _super);
    function TableauSheetEvent(type, sheet) {
        var _this = _super.call(this, type) || this;
        _this._sheet = sheet;
        return _this;
    }
    Object.defineProperty(TableauSheetEvent.prototype, "sheet", {
        get: function () {
            return this._sheet;
        },
        enumerable: true,
        configurable: true
    });
    return TableauSheetEvent;
}(TableauEvent_1.TableauEvent));
exports.TableauSheetEvent = TableauSheetEvent;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Events/TableauWorksheetEvent.js":
/*!***********************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Events/TableauWorksheetEvent.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TableauSheetEvent_1 = __webpack_require__(/*! ./TableauSheetEvent */ "../../api-shared-js/lib/src/ApiShared/Events/TableauSheetEvent.js");
var TableauWorksheetEvent = /** @class */ (function (_super) {
    __extends(TableauWorksheetEvent, _super);
    function TableauWorksheetEvent(type, _worksheet) {
        var _this = _super.call(this, type, _worksheet) || this;
        _this._worksheet = _worksheet;
        return _this;
    }
    Object.defineProperty(TableauWorksheetEvent.prototype, "worksheet", {
        get: function () {
            return this._worksheet;
        },
        enumerable: true,
        configurable: true
    });
    return TableauWorksheetEvent;
}(TableauSheetEvent_1.TableauSheetEvent));
exports.TableauWorksheetEvent = TableauWorksheetEvent;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Field.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Field.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHelpers_1 = __webpack_require__(/*! ./Utils/ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
var Field = /** @class */ (function () {
    function Field(_fieldImpl) {
        this._fieldImpl = _fieldImpl;
    }
    Object.defineProperty(Field.prototype, "name", {
        get: function () {
            return this._fieldImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "id", {
        get: function () {
            return this._fieldImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "description", {
        get: function () {
            return this._fieldImpl.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "aggregation", {
        get: function () {
            return this._fieldImpl.aggregation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "dataSource", {
        get: function () {
            return this._fieldImpl.dataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "role", {
        get: function () {
            return this._fieldImpl.role;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isHidden", {
        get: function () {
            return this._fieldImpl.isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isGenerated", {
        get: function () {
            return this._fieldImpl.isGenerated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isCalculatedField", {
        get: function () {
            return this._fieldImpl.isCalculatedField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "columnType", {
        get: function () {
            throw ErrorHelpers_1.ErrorHelpers.apiNotImplemented('Field.columnType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "isCombinedField", {
        get: function () {
            return this._fieldImpl.isCombinedField;
        },
        enumerable: true,
        configurable: true
    });
    return Field;
}());
exports.Field = Field;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Impl/DashboardImpl.js":
/*!*************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Impl/DashboardImpl.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var ServiceRegistry_1 = __webpack_require__(/*! ../Services/ServiceRegistry */ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js");
var DashboardObject_1 = __webpack_require__(/*! ../DashboardObject */ "../../api-shared-js/lib/src/ApiShared/DashboardObject.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var ErrorHelpers_1 = __webpack_require__(/*! ../Utils/ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
var InternalToExternalEnumMappings_1 = __webpack_require__(/*! ../EnumMappings/InternalToExternalEnumMappings */ "../../api-shared-js/lib/src/ApiShared/EnumMappings/InternalToExternalEnumMappings.js");
var Point_1 = __webpack_require__(/*! ../Point */ "../../api-shared-js/lib/src/ApiShared/Point.js");
var SheetImpl_1 = __webpack_require__(/*! ./SheetImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/SheetImpl.js");
var SheetInfoImpl_1 = __webpack_require__(/*! ./SheetInfoImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/SheetInfoImpl.js");
var Size_1 = __webpack_require__(/*! ../Size */ "../../api-shared-js/lib/src/ApiShared/Size.js");
var Worksheet_1 = __webpack_require__(/*! ../Worksheet */ "../../api-shared-js/lib/src/ApiShared/Worksheet.js");
var WorksheetImpl_1 = __webpack_require__(/*! ./WorksheetImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/WorksheetImpl.js");
var DashboardImpl = /** @class */ (function (_super) {
    __extends(DashboardImpl, _super);
    function DashboardImpl(_info, _sheetPath) {
        var _this = _super.call(this, new SheetInfoImpl_1.SheetInfoImpl(_info.name, api_external_contract_js_1.SheetType.Dashboard, new Size_1.Size(_info.size.h, _info.size.w))) || this;
        _this._info = _info;
        _this._sheetPath = _sheetPath;
        return _this;
    }
    Object.defineProperty(DashboardImpl.prototype, "worksheets", {
        get: function () {
            return this._worksheets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardImpl.prototype, "objects", {
        get: function () {
            return this._objects;
        },
        enumerable: true,
        configurable: true
    });
    DashboardImpl.prototype.initializeWithPublicInterfaces = function (dashboard) {
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(dashboard, 'dashboard');
        this._worksheets = new Array();
        this._objects = new Array();
        // Process all the zones which are contained in this dashboard
        for (var _i = 0, _a = this._info.zones; _i < _a.length; _i++) {
            var zone = _a[_i];
            var worksheet = undefined;
            var zoneSize = new Size_1.Size(zone.height, zone.width);
            if (zone.zoneType === api_internal_contract_js_1.DashboardObjectType.Worksheet) {
                // zone.sheetInfo was not initialized prior to internal-contract 1.6.0
                var worksheetName = zone.sheetInfo ? zone.sheetInfo.name : zone.name;
                var sheetInfo = new SheetInfoImpl_1.SheetInfoImpl(worksheetName, api_external_contract_js_1.SheetType.Worksheet, zoneSize);
                var vizId = {
                    worksheet: worksheetName,
                    dashboard: this._info.name,
                    storyboard: this._sheetPath.storyboard,
                    flipboardZoneID: this._sheetPath.flipboardZoneID,
                    storyPointID: this._sheetPath.storyPointID
                };
                var worksheetImpl = new WorksheetImpl_1.WorksheetImpl(sheetInfo, vizId, dashboard);
                worksheet = new Worksheet_1.Worksheet(worksheetImpl);
                this._worksheets.push(worksheet);
            }
            var zonePoint = new Point_1.Point(zone.x, zone.y);
            var dashboardObject = new DashboardObject_1.DashboardObject(dashboard, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dashboardObjectType.convert(zone.zoneType), zonePoint, zoneSize, worksheet, zone.name, (zone.isFloating !== undefined) ? zone.isFloating : false, // before 1.6.0 we didn't have isFloating, so we assume false
            (zone.isVisible !== undefined) ? zone.isVisible : true, // before 1.6.0 we didn't have isVisible, so we assume true
            zone.zoneId);
            this._objects.push(dashboardObject);
        }
    };
    DashboardImpl.prototype.setZoneVisibilityAsync = function (zoneVisibilityMap) {
        var zoneService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("zone-service" /* Zone */);
        return zoneService.setVisibilityAsync(/*Dashboard Name*/ this.name, this.objects, zoneVisibilityMap);
    };
    return DashboardImpl;
}(SheetImpl_1.SheetImpl));
exports.DashboardImpl = DashboardImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Impl/DataSourceImpl.js":
/*!**************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Impl/DataSourceImpl.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldImpl_1 = __webpack_require__(/*! ./FieldImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/FieldImpl.js");
var ConnectionSummary_1 = __webpack_require__(/*! ../ConnectionSummary */ "../../api-shared-js/lib/src/ApiShared/ConnectionSummary.js");
var Field_1 = __webpack_require__(/*! ../Field */ "../../api-shared-js/lib/src/ApiShared/Field.js");
var TableSummary_1 = __webpack_require__(/*! ../TableSummary */ "../../api-shared-js/lib/src/ApiShared/TableSummary.js");
var ServiceRegistry_1 = __webpack_require__(/*! ../Services/ServiceRegistry */ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js");
var ErrorHelpers_1 = __webpack_require__(/*! ../Utils/ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
var LogicalTable_1 = __webpack_require__(/*! ../LogicalTable */ "../../api-shared-js/lib/src/ApiShared/LogicalTable.js");
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var DataSourceImpl = /** @class */ (function () {
    function DataSourceImpl(_dataSourceInfo) {
        var _this = this;
        this._dataSourceInfo = _dataSourceInfo;
        this._fields = _dataSourceInfo.fields.map(function (fieldModel) {
            var fieldImpl = new FieldImpl_1.FieldImpl(fieldModel, _this);
            return new Field_1.Field(fieldImpl);
        });
    }
    Object.defineProperty(DataSourceImpl.prototype, "name", {
        get: function () {
            return this._dataSourceInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "id", {
        get: function () {
            return this._dataSourceInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "extractUpdateTime", {
        get: function () {
            return this._dataSourceInfo.extractUpdateTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceImpl.prototype, "isExtract", {
        get: function () {
            return this._dataSourceInfo.isExtract;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceImpl.prototype.refreshAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.refreshAsync(this._dataSourceInfo.id);
    };
    DataSourceImpl.prototype.getConnectionSummariesAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.getConnectionSummariesAsync(this._dataSourceInfo.id).then(function (summaries) {
            return summaries.map(function (summary) { return new ConnectionSummary_1.ConnectionSummary(summary); });
        });
    };
    DataSourceImpl.prototype.getActiveTablesAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.getActiveTablesAsync(this._dataSourceInfo.id).then(function (tableInfos) {
            return tableInfos.map(function (tableInfo) { return new TableSummary_1.TableSummary(tableInfo); });
        });
    };
    DataSourceImpl.prototype.getUnderlyingDataAsync = function (options) {
        var getDataService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return getDataService.getDataSourceDataAsync(this.id, !!options.ignoreAliases, options.maxRows || 0, // 0 and [] are defaults
        options.columnsToInclude || [], options.columnsToIncludeById || [], options.includeDataValuesOption || api_external_contract_js_1.IncludeDataValuesOption.AllValues);
    };
    DataSourceImpl.prototype.getLogicalTableDataAsync = function (logicalTableId, options) {
        var getDataService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return getDataService.getLogicalTableDataAsync(this.id, logicalTableId, !!options.ignoreAliases, options.maxRows || 0, // 0 and [] are defaults
        options.columnsToInclude || [], options.columnsToIncludeById || [], options.includeDataValuesOption || api_external_contract_js_1.IncludeDataValuesOption.AllValues);
    };
    DataSourceImpl.prototype.initializeWithPublicInterfaces = function (dataSource) {
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(dataSource, 'dataSource');
        this._fields = this._dataSourceInfo.fields.map(function (fieldModel) {
            var fieldImpl = new FieldImpl_1.FieldImpl(fieldModel, dataSource);
            return new Field_1.Field(fieldImpl);
        });
    };
    DataSourceImpl.prototype.getLogicalTablesAsync = function () {
        var dataSourceService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return dataSourceService.getLogicalTablesAsync(this.id).then(function (logicalTableInfos) {
            return logicalTableInfos.map(function (logicalTableInfo) { return new LogicalTable_1.LogicalTable(logicalTableInfo); });
        });
    };
    return DataSourceImpl;
}());
exports.DataSourceImpl = DataSourceImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Impl/FieldImpl.js":
/*!*********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Impl/FieldImpl.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(/*! ../EnumMappings/InternalToExternalEnumMappings */ "../../api-shared-js/lib/src/ApiShared/EnumMappings/InternalToExternalEnumMappings.js");
var FieldImpl = /** @class */ (function () {
    function FieldImpl(_fieldInfo, _parentDataSource) {
        this._fieldInfo = _fieldInfo;
        this._parentDataSource = _parentDataSource;
    }
    Object.defineProperty(FieldImpl.prototype, "name", {
        get: function () {
            return this._fieldInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "id", {
        get: function () {
            return this._fieldInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "description", {
        get: function () {
            return this._fieldInfo.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "aggregation", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.fieldAggregationType.convert(this._fieldInfo.aggregation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "dataSource", {
        get: function () {
            return this._parentDataSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "role", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.fieldRoleType.convert(this._fieldInfo.role);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isHidden", {
        get: function () {
            return this._fieldInfo.isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isGenerated", {
        get: function () {
            return this._fieldInfo.isGenerated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isCalculatedField", {
        get: function () {
            return this._fieldInfo.isCalculatedField;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldImpl.prototype, "isCombinedField", {
        get: function () {
            return this._fieldInfo.isCombinedField;
        },
        enumerable: true,
        configurable: true
    });
    return FieldImpl;
}());
exports.FieldImpl = FieldImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Impl/ParameterImpl.js":
/*!*************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Impl/ParameterImpl.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var InternalToExternalEnumMappings_1 = __webpack_require__(/*! ../EnumMappings/InternalToExternalEnumMappings */ "../../api-shared-js/lib/src/ApiShared/EnumMappings/InternalToExternalEnumMappings.js");
var ParameterChangedEvent_1 = __webpack_require__(/*! ../Events/ParameterChangedEvent */ "../../api-shared-js/lib/src/ApiShared/Events/ParameterChangedEvent.js");
var ServiceRegistry_1 = __webpack_require__(/*! ../Services/ServiceRegistry */ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js");
var SingleEventManagerImpl_1 = __webpack_require__(/*! ./SingleEventManagerImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/SingleEventManagerImpl.js");
var DataValueFactory_1 = __webpack_require__(/*! ../Utils/DataValueFactory */ "../../api-shared-js/lib/src/ApiShared/Utils/DataValueFactory.js");
var ErrorHelpers_1 = __webpack_require__(/*! ../Utils/ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
var Param_1 = __webpack_require__(/*! ../Utils/Param */ "../../api-shared-js/lib/src/ApiShared/Utils/Param.js");
var ParameterImpl = /** @class */ (function () {
    function ParameterImpl(parameterInfo) {
        this.setParameterInfo(parameterInfo);
    }
    Object.defineProperty(ParameterImpl.prototype, "name", {
        get: function () {
            return this._parameterInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "currentValue", {
        get: function () {
            return DataValueFactory_1.DataValueFactory.MakeParameterDataValue(this._parameterInfo.currentValue, this._parameterInfo.dataType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "dataType", {
        get: function () {
            return InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dataType.convert(this._parameterInfo.dataType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "id", {
        get: function () {
            return this._globalFieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParameterImpl.prototype, "allowableValues", {
        get: function () {
            return this._allowableValues;
        },
        enumerable: true,
        configurable: true
    });
    ParameterImpl.prototype.changeValueAsync = function (newValue) {
        var _this = this;
        ErrorHelpers_1.ErrorHelpers.verifyParameter(newValue, 'newValue');
        var coercedValue = Param_1.Param.serializeParameterValue(newValue);
        var parametersService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return parametersService.changeParameterValueAsync(this._globalFieldName, coercedValue).then(function (parameterInfo) {
            _this.setParameterInfo(parameterInfo);
            return _this.currentValue;
        });
    };
    /**
     * Helper method which goes through and registers each event type this impl knows about
     * with the NotificationService. It returns an array of SingleEventManager objects which
     * can then be passed to an EventListenerManager to handle user registration / unregistration.
     *
     * @param sheet The sheet object which will be included with the event notifications
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager
     */
    ParameterImpl.prototype.initializeEvents = function (sheet) {
        var _this = this;
        ErrorHelpers_1.ErrorHelpers.verifyInternalValue(sheet, 'sheet');
        var results = new Array();
        var notificationService;
        try {
            notificationService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        // Initialize all of the event managers we'll need (one for each event type)
        var parameterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(api_external_contract_js_1.TableauEventType.ParameterChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ParameterChanged, function (model) {
            var fieldName = model;
            return fieldName === _this._globalFieldName;
        }, function (fieldName) {
            parameterEvent.triggerEvent(function () { return new ParameterChangedEvent_1.ParameterChangedEvent(fieldName, sheet); });
        });
        results.push(parameterEvent);
        return results;
    };
    ParameterImpl.prototype.setParameterInfo = function (parameterInfo) {
        this._parameterInfo = parameterInfo;
        this._globalFieldName = parameterInfo.fieldName;
        var type = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.allowableValues.convert(parameterInfo.allowableValuesType);
        var listValues;
        var minValue;
        var maxValue;
        var stepSize;
        var dateStepPeriod;
        if (type === api_external_contract_js_1.ParameterValueType.List) {
            var values = parameterInfo.allowableValues || [];
            listValues = values.map(function (val) { return DataValueFactory_1.DataValueFactory.MakeParameterDataValue(val, parameterInfo.dataType); });
        }
        else if (type === api_external_contract_js_1.ParameterValueType.Range) {
            minValue = parameterInfo.minValue && DataValueFactory_1.DataValueFactory.MakeParameterDataValue(parameterInfo.minValue, parameterInfo.dataType);
            maxValue = parameterInfo.maxValue && DataValueFactory_1.DataValueFactory.MakeParameterDataValue(parameterInfo.maxValue, parameterInfo.dataType);
            stepSize = parameterInfo.stepSize;
            dateStepPeriod = parameterInfo.dateStepPeriod &&
                InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateStepPeriod.convert(parameterInfo.dateStepPeriod);
        }
        this._allowableValues = {
            type: type,
            allowableValues: listValues,
            minValue: minValue,
            maxValue: maxValue,
            stepSize: stepSize,
            dateStepPeriod: dateStepPeriod
        };
    };
    return ParameterImpl;
}());
exports.ParameterImpl = ParameterImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Impl/SheetImpl.js":
/*!*********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Impl/SheetImpl.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(/*! ../Services/ServiceRegistry */ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js");
var ErrorHelpers_1 = __webpack_require__(/*! ../Utils/ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
var SheetImpl = /** @class */ (function () {
    function SheetImpl(_sheetInfoImpl) {
        this._sheetInfoImpl = _sheetInfoImpl;
    }
    Object.defineProperty(SheetImpl.prototype, "name", {
        get: function () {
            return this._sheetInfoImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "sheetType", {
        get: function () {
            return this._sheetInfoImpl.sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "sheetPath", {
        get: function () {
            return this._sheetInfoImpl.sheetPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetImpl.prototype, "size", {
        get: function () {
            return this._sheetInfoImpl.sheetSize;
        },
        enumerable: true,
        configurable: true
    });
    SheetImpl.prototype.findParameterAsync = function (parameterName, sheet) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(parameterName, 'parameterName');
        ErrorHelpers_1.ErrorHelpers.verifyParameter(sheet, 'sheet');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.findParameterByNameAsync(parameterName, sheet);
    };
    SheetImpl.prototype.getParametersAsync = function (sheet) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(sheet, 'sheet');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("parameters-service" /* Parameters */);
        return service.getParametersForSheetAsync(this.sheetPath, sheet);
    };
    return SheetImpl;
}());
exports.SheetImpl = SheetImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Impl/SheetInfoImpl.js":
/*!*************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Impl/SheetInfoImpl.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var SheetInfoImpl = /** @class */ (function () {
    function SheetInfoImpl(_name, _sheetType, _sheetSize) {
        this._name = _name;
        this._sheetType = _sheetType;
        this._sheetSize = _sheetSize;
    }
    Object.defineProperty(SheetInfoImpl.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetSize", {
        get: function () {
            return this._sheetSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetType", {
        get: function () {
            return this._sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetInfoImpl.prototype, "sheetPath", {
        get: function () {
            return {
                sheetName: this.name,
                isDashboard: this.sheetType === api_external_contract_js_1.SheetType.Dashboard
                // TODO - Stories
            };
        },
        enumerable: true,
        configurable: true
    });
    return SheetInfoImpl;
}());
exports.SheetInfoImpl = SheetInfoImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Impl/SingleEventManagerImpl.js":
/*!**********************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Impl/SingleEventManagerImpl.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class implements the SingleEventManager interface for a single type of Tableau event
 *
 * @template TEventType The Tableau event type this class specializes
 */
var SingleEventManagerImpl = /** @class */ (function () {
    function SingleEventManagerImpl(eventType) {
        this._eventType = eventType;
        this._handlers = [];
    }
    Object.defineProperty(SingleEventManagerImpl.prototype, "eventType", {
        get: function () {
            return this._eventType;
        },
        enumerable: true,
        configurable: true
    });
    SingleEventManagerImpl.prototype.addEventListener = function (handler) {
        var _this = this;
        this._handlers.push(handler);
        return function () { return _this.removeEventListener(handler); };
    };
    SingleEventManagerImpl.prototype.removeEventListener = function (handler) {
        var beforeCount = this._handlers.length;
        this._handlers = this._handlers.filter(function (h) { return h !== handler; });
        return beforeCount > this._handlers.length;
    };
    SingleEventManagerImpl.prototype.triggerEvent = function (eventGenerator) {
        for (var _i = 0, _a = this._handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            try {
                var eventModel = eventGenerator();
                handler(eventModel);
            }
            catch (e) {
                // Since this handler could be outside our control, just catch anything it throws and continue on
                continue;
            }
        }
    };
    return SingleEventManagerImpl;
}());
exports.SingleEventManagerImpl = SingleEventManagerImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Impl/WorksheetImpl.js":
/*!*************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Impl/WorksheetImpl.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var DataSource_1 = __webpack_require__(/*! ../DataSource */ "../../api-shared-js/lib/src/ApiShared/DataSource.js");
var DataSourceImpl_1 = __webpack_require__(/*! ./DataSourceImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/DataSourceImpl.js");
var SheetImpl_1 = __webpack_require__(/*! ./SheetImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/SheetImpl.js");
var SingleEventManagerImpl_1 = __webpack_require__(/*! ./SingleEventManagerImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/SingleEventManagerImpl.js");
var FilterChangedEvent_1 = __webpack_require__(/*! ../Events/FilterChangedEvent */ "../../api-shared-js/lib/src/ApiShared/Events/FilterChangedEvent.js");
var MarksSelectedEvent_1 = __webpack_require__(/*! ../Events/MarksSelectedEvent */ "../../api-shared-js/lib/src/ApiShared/Events/MarksSelectedEvent.js");
var GetDataService_1 = __webpack_require__(/*! ../Services/GetDataService */ "../../api-shared-js/lib/src/ApiShared/Services/GetDataService.js");
var ServiceRegistry_1 = __webpack_require__(/*! ../Services/ServiceRegistry */ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js");
var ErrorHelpers_1 = __webpack_require__(/*! ../Utils/ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
var LogicalTable_1 = __webpack_require__(/*! ../LogicalTable */ "../../api-shared-js/lib/src/ApiShared/LogicalTable.js");
var visualIdsAreEqual = function (a, b) {
    return a && b &&
        a.worksheet === b.worksheet &&
        a.dashboard === b.dashboard &&
        a.storyboard === b.storyboard &&
        a.storyPointID === b.storyPointID;
};
var WorksheetImpl = /** @class */ (function (_super) {
    __extends(WorksheetImpl, _super);
    function WorksheetImpl(sheetInfoImpl, _visualId, _parentDashboard) {
        var _this = _super.call(this, sheetInfoImpl) || this;
        _this._visualId = _visualId;
        _this._parentDashboard = _parentDashboard;
        return _this;
    }
    Object.defineProperty(WorksheetImpl.prototype, "parentDashboard", {
        get: function () {
            return this._parentDashboard;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper method which goes through and registers each event type this impl knows about
     * with the NotificationService. It returns an array of SingleEventManager objects which
     * can then be passed to an EventListenerManager to handle user registration / unregistration.
     *
     * @param {Worksheet} worksheet The worksheet object which will be included with the event notifications
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager
     */
    WorksheetImpl.prototype.initializeEvents = function (worksheet) {
        var _this = this;
        var results = new Array();
        var notificationService;
        try {
            notificationService = ServiceRegistry_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        // Initialize all of the event managers we'll need (one for each event type)
        var marksEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(api_external_contract_js_1.TableauEventType.MarkSelectionChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.SelectedMarksChanged, function (model) {
            var visualId = model;
            return visualIdsAreEqual(visualId, _this.visualId);
        }, function (viz) {
            marksEvent.triggerEvent(function () { return new MarksSelectedEvent_1.MarksSelectedEvent(worksheet); });
        });
        var filterEvent = new SingleEventManagerImpl_1.SingleEventManagerImpl(api_external_contract_js_1.TableauEventType.FilterChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.FilterChanged, function (model) {
            var filterEventResponse = model;
            return _this.visualId.worksheet === filterEventResponse.visualId.worksheet;
        }, function (event) {
            filterEvent.triggerEvent(function () { return new FilterChangedEvent_1.FilterChangedEvent(worksheet, event.fieldName); });
        });
        results.push(marksEvent);
        results.push(filterEvent);
        // TODO - other event types
        return results;
    };
    Object.defineProperty(WorksheetImpl.prototype, "visualId", {
        get: function () {
            return this._visualId;
        },
        enumerable: true,
        configurable: true
    });
    WorksheetImpl.prototype.applyFilterAsync = function (fieldName, values, updateType, options) {
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(updateType, api_external_contract_js_1.FilterUpdateType, 'FilterUpdateType');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.applyFilterAsync(this.visualId, fieldName, values, updateType, options);
    };
    WorksheetImpl.prototype.applyRangeFilterAsync = function (fieldName, filterOptions) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(fieldName, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyParameter(filterOptions, 'filterOptions');
        if (filterOptions.nullOption) {
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(filterOptions.nullOption, api_external_contract_js_1.FilterNullOption, 'FilterNullOption');
        }
        else {
            ErrorHelpers_1.ErrorHelpers.verifyRangeParamType(filterOptions.min, filterOptions.max);
        }
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.applyRangeFilterAsync(this.visualId, fieldName, filterOptions);
    };
    WorksheetImpl.prototype.clearFilterAsync = function (fieldName) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(fieldName, 'fieldName');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.clearFilterAsync(this.visualId, fieldName);
    };
    WorksheetImpl.prototype.getDataSourcesAsync = function () {
        var _this = this;
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return service.getDataSourcesAsync(this.visualId).then(function (result) {
            var dataSchema = result;
            var worksheetDataSourceInfo = dataSchema.worksheetDataSchemaMap[_this.name];
            var dataSources = [];
            // First, add the primary datasource.  By convention, it comes first in the returned array.
            var primaryId = worksheetDataSourceInfo.primaryDataSource;
            dataSources.push(_this.createDataSourceFromInfo(dataSchema.dataSources[primaryId]));
            // Then, loop through any secondary data sources and add them.
            for (var _i = 0, _a = worksheetDataSourceInfo.referencedDataSourceList; _i < _a.length; _i++) {
                var secondaryId = _a[_i];
                if (secondaryId !== primaryId) {
                    dataSources.push(_this.createDataSourceFromInfo(dataSchema.dataSources[secondaryId]));
                }
            }
            return dataSources;
        });
    };
    WorksheetImpl.prototype.getFiltersAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.getFiltersAsync(this.visualId);
    };
    WorksheetImpl.prototype.getSelectedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return service.getSelectedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.getHighlightedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return service.getHighlightedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.getSummaryDataAsync = function (options) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return service.getUnderlyingDataAsync(this.visualId, GetDataService_1.GetDataType.Summary, !!options.ignoreAliases, !!options.ignoreSelection, true, options.columnsToIncludeById || [], options.maxRows || 0, options.includeDataValuesOption || api_external_contract_js_1.IncludeDataValuesOption.AllValues);
    };
    WorksheetImpl.prototype.getSummaryColumnsInfoAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        return service.getSummaryColumnsInfoAsync(this.visualId);
    };
    WorksheetImpl.prototype.getUnderlyingDataAsync = function (options) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return service.getUnderlyingDataAsync(this.visualId, GetDataService_1.GetDataType.Underlying, !!options.ignoreAliases, !!options.ignoreSelection, !!options.includeAllColumns, options.columnsToIncludeById || [], options.maxRows || 0, options.includeDataValuesOption || api_external_contract_js_1.IncludeDataValuesOption.AllValues);
    };
    WorksheetImpl.prototype.getUnderlyingTablesAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return service.getUnderlyingTablesAsync(this.visualId).then(function (logicalTableInfos) {
            return logicalTableInfos.map(function (logicalTableInfo) { return new LogicalTable_1.LogicalTable(logicalTableInfo); });
        });
    };
    WorksheetImpl.prototype.getUnderlyingTableDataAsync = function (logicalTableId, options) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("get-data-service" /* GetData */);
        options = options || {};
        return service.getUnderlyingTableDataAsync(this.visualId, logicalTableId, !!options.ignoreAliases, !!options.ignoreSelection, !!options.includeAllColumns, options.columnsToIncludeById || [], options.maxRows || 0, options.includeDataValuesOption || api_external_contract_js_1.IncludeDataValuesOption.AllValues);
    };
    WorksheetImpl.prototype.clearSelectedMarksAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.clearSelectedMarksAsync(this.visualId);
    };
    WorksheetImpl.prototype.selectMarksByValueAsync = function (selections, selectionUpdateType) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(selections, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, api_external_contract_js_1.SelectionUpdateType, 'SelectionUpdateType');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.selectMarksByValueAsync(this.visualId, selections, selectionUpdateType);
    };
    WorksheetImpl.prototype.selectMarksByIdAsync = function (selections, selectionUpdateType) {
        ErrorHelpers_1.ErrorHelpers.verifyParameter(selections, 'fieldName');
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(selectionUpdateType, api_external_contract_js_1.SelectionUpdateType, 'SelectionUpdateType');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("selection-service" /* Selection */);
        return service.selectMarksByIdAsync(this.visualId, selections, selectionUpdateType);
    };
    WorksheetImpl.prototype.createDataSourceFromInfo = function (dataSourceInfo) {
        var dataSourceImpl = new DataSourceImpl_1.DataSourceImpl(dataSourceInfo);
        var dataSource = new DataSource_1.DataSource(dataSourceImpl);
        dataSourceImpl.initializeWithPublicInterfaces(dataSource);
        return dataSource;
    };
    return WorksheetImpl;
}(SheetImpl_1.SheetImpl));
exports.WorksheetImpl = WorksheetImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/LogicalTable.js":
/*!*******************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/LogicalTable.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a logical table.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var LogicalTable = /** @class */ (function () {
    function LogicalTable(_logicalTable) {
        this._logicalTable = _logicalTable;
    }
    Object.defineProperty(LogicalTable.prototype, "id", {
        get: function () {
            return this._logicalTable.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogicalTable.prototype, "caption", {
        get: function () {
            return this._logicalTable.caption;
        },
        enumerable: true,
        configurable: true
    });
    return LogicalTable;
}());
exports.LogicalTable = LogicalTable;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Models/FilterModels.js":
/*!**************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Models/FilterModels.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var ServiceRegistry_1 = __webpack_require__(/*! ../Services/ServiceRegistry */ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js");
var ErrorHelpers_1 = __webpack_require__(/*! ../Utils/ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
var Filter = /** @class */ (function () {
    function Filter(_worksheetName, _fieldName, _filterType, _fieldId) {
        this._worksheetName = _worksheetName;
        this._fieldName = _fieldName;
        this._filterType = _filterType;
        this._fieldId = _fieldId;
    }
    Object.defineProperty(Filter.prototype, "worksheetName", {
        get: function () {
            return this._worksheetName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "fieldId", {
        get: function () {
            return this._fieldId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "filterType", {
        get: function () {
            return this._filterType;
        },
        enumerable: true,
        configurable: true
    });
    Filter.prototype.getFieldAsync = function () {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("data-source-service" /* DataSourceService */);
        return service.getFieldAsync(this._fieldId);
    };
    return Filter;
}());
exports.Filter = Filter;
var CategoricalFilter = /** @class */ (function (_super) {
    __extends(CategoricalFilter, _super);
    function CategoricalFilter(worksheetName, fieldName, fieldId, filterType, _appliedValues, _isExcludeMode, _isAllSelected) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._appliedValues = _appliedValues;
        _this._isExcludeMode = _isExcludeMode;
        _this._isAllSelected = _isAllSelected;
        return _this;
    }
    Object.defineProperty(CategoricalFilter.prototype, "isAllSelected", {
        get: function () {
            return this._isAllSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalFilter.prototype, "appliedValues", {
        get: function () {
            return this._appliedValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalFilter.prototype, "isExcludeMode", {
        get: function () {
            return this._isExcludeMode;
        },
        enumerable: true,
        configurable: true
    });
    CategoricalFilter.prototype.getDomainAsync = function (domainType) {
        if (!domainType) {
            domainType = api_external_contract_js_1.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, api_external_contract_js_1.FilterDomainType, 'FilterDomainType');
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        return service.getCategoricalDomainAsync(this._worksheetName, this._fieldId, domainType);
    };
    return CategoricalFilter;
}(Filter));
exports.CategoricalFilter = CategoricalFilter;
var RangeFilter = /** @class */ (function (_super) {
    __extends(RangeFilter, _super);
    function RangeFilter(worksheetName, fieldName, fieldId, filterType, _min, _max, _includeNullValues) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._min = _min;
        _this._max = _max;
        _this._includeNullValues = _includeNullValues;
        return _this;
    }
    Object.defineProperty(RangeFilter.prototype, "minValue", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeFilter.prototype, "maxValue", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeFilter.prototype, "includeNullValues", {
        get: function () {
            return this._includeNullValues;
        },
        enumerable: true,
        configurable: true
    });
    RangeFilter.prototype.getDomainAsync = function (domainType) {
        var service = ServiceRegistry_1.ApiServiceRegistry.instance.getService("filter-service" /* Filter */);
        if (!domainType) {
            domainType = api_external_contract_js_1.FilterDomainType.Relevant;
        }
        ErrorHelpers_1.ErrorHelpers.verifyEnumValue(domainType, api_external_contract_js_1.FilterDomainType, 'FilterDomainType');
        return service.getRangeDomainAsync(this._worksheetName, this._fieldId, domainType);
    };
    return RangeFilter;
}(Filter));
exports.RangeFilter = RangeFilter;
var RelativeDateFilter = /** @class */ (function (_super) {
    __extends(RelativeDateFilter, _super);
    function RelativeDateFilter(worksheetName, fieldName, fieldId, filterType, _anchorDate, _periodType, _rangeType, _rangeN) {
        var _this = _super.call(this, worksheetName, fieldName, filterType, fieldId) || this;
        _this._anchorDate = _anchorDate;
        _this._periodType = _periodType;
        _this._rangeType = _rangeType;
        _this._rangeN = _rangeN;
        return _this;
    }
    Object.defineProperty(RelativeDateFilter.prototype, "anchorDate", {
        get: function () {
            return this._anchorDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "periodType", {
        get: function () {
            return this._periodType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "rangeType", {
        get: function () {
            return this._rangeType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeDateFilter.prototype, "rangeN", {
        get: function () {
            return this._rangeN;
        },
        enumerable: true,
        configurable: true
    });
    return RelativeDateFilter;
}(Filter));
exports.RelativeDateFilter = RelativeDateFilter;
var CategoricalDomain = /** @class */ (function () {
    function CategoricalDomain(_values, _domainType) {
        this._values = _values;
        this._domainType = _domainType;
    }
    Object.defineProperty(CategoricalDomain.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalDomain.prototype, "type", {
        get: function () {
            return this._domainType;
        },
        enumerable: true,
        configurable: true
    });
    return CategoricalDomain;
}());
exports.CategoricalDomain = CategoricalDomain;
var RangeDomain = /** @class */ (function () {
    function RangeDomain(_min, _max, _domainType) {
        this._min = _min;
        this._max = _max;
        this._domainType = _domainType;
    }
    Object.defineProperty(RangeDomain.prototype, "type", {
        get: function () {
            return this._domainType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeDomain.prototype, "min", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeDomain.prototype, "max", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    return RangeDomain;
}());
exports.RangeDomain = RangeDomain;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Models/GetDataModels.js":
/*!***************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Models/GetDataModels.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataTable = /** @class */ (function () {
    function DataTable(_data, _columns, _totalRowCount, _isTotalRowCountLimited, _isSummaryData, _marksInfo) {
        this._data = _data;
        this._columns = _columns;
        this._totalRowCount = _totalRowCount;
        this._isTotalRowCountLimited = _isTotalRowCountLimited;
        this._isSummaryData = _isSummaryData;
        this._marksInfo = _marksInfo;
        this._name = _isSummaryData ? 'Summary Data Table' : 'Underlying Data Table';
    }
    Object.defineProperty(DataTable.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "marksInfo", {
        get: function () {
            return this._marksInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "totalRowCount", {
        get: function () {
            return this._totalRowCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "isTotalRowCountLimited", {
        get: function () {
            return this._isTotalRowCountLimited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "isSummaryData", {
        get: function () {
            return this._isSummaryData;
        },
        enumerable: true,
        configurable: true
    });
    return DataTable;
}());
exports.DataTable = DataTable;
var MarkInfo = /** @class */ (function () {
    function MarkInfo(_type, _color, _tupleId) {
        this._type = _type;
        this._color = _color;
        this._tupleId = _tupleId;
    }
    Object.defineProperty(MarkInfo.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkInfo.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkInfo.prototype, "tupleId", {
        get: function () {
            return this._tupleId;
        },
        enumerable: true,
        configurable: true
    });
    return MarkInfo;
}());
exports.MarkInfo = MarkInfo;
var Column = /** @class */ (function () {
    function Column(_fieldName, _fieldId, _dataType, _isReferenced, _index) {
        this._fieldName = _fieldName;
        this._fieldId = _fieldId;
        this._dataType = _dataType;
        this._isReferenced = _isReferenced;
        this._index = _index;
    }
    Object.defineProperty(Column.prototype, "fieldName", {
        get: function () {
            return this._fieldName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "fieldId", {
        get: function () {
            return this._fieldId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "dataType", {
        get: function () {
            return this._dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "isReferenced", {
        get: function () {
            return this._isReferenced;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    return Column;
}());
exports.Column = Column;
var DataValue = /** @class */ (function () {
    /* tslint:disable:no-any */
    function DataValue(_value, _nativeValue, _formattedValue) {
        this._value = _value;
        this._nativeValue = _nativeValue;
        this._formattedValue = _formattedValue;
    }
    Object.defineProperty(DataValue.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataValue.prototype, "nativeValue", {
        get: function () {
            return this._nativeValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataValue.prototype, "formattedValue", {
        get: function () {
            return this._formattedValue;
        },
        enumerable: true,
        configurable: true
    });
    return DataValue;
}());
exports.DataValue = DataValue;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Models/SelectionModels.js":
/*!*****************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Models/SelectionModels.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Selection Model.
 */
var SelectionModel = /** @class */ (function () {
    function SelectionModel() {
    }
    return SelectionModel;
}());
exports.SelectionModel = SelectionModel;
/**
 * Value based selection model. Meant for hierarchical, range and categorical selections.
 */
var ValueSelectionModel = /** @class */ (function (_super) {
    __extends(ValueSelectionModel, _super);
    function ValueSelectionModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectValues = [];
        return _this;
    }
    return ValueSelectionModel;
}(SelectionModel));
exports.ValueSelectionModel = ValueSelectionModel;
/**
 * Hierarchical value selection model
 */
var HierarchicalSelectionModel = /** @class */ (function (_super) {
    __extends(HierarchicalSelectionModel, _super);
    function HierarchicalSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HierarchicalSelectionModel;
}(ValueSelectionModel));
exports.HierarchicalSelectionModel = HierarchicalSelectionModel;
/**
 * Range based value selection model
 */
var RangeSelectionModel = /** @class */ (function (_super) {
    __extends(RangeSelectionModel, _super);
    function RangeSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RangeSelectionModel;
}(SelectionModel));
exports.RangeSelectionModel = RangeSelectionModel;
/**
 * Dimension value selection model
 */
var DimensionSelectionModel = /** @class */ (function (_super) {
    __extends(DimensionSelectionModel, _super);
    function DimensionSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DimensionSelectionModel;
}(ValueSelectionModel));
exports.DimensionSelectionModel = DimensionSelectionModel;
/**
 * Tuple based selection model
 */
var TupleSelectionModel = /** @class */ (function () {
    function TupleSelectionModel() {
        this.objectIds = [];
    }
    return TupleSelectionModel;
}());
exports.TupleSelectionModel = TupleSelectionModel;
/**
 * Container class to populate all the selection models when parsing input
 */
var SelectionModelsContainer = /** @class */ (function () {
    function SelectionModelsContainer() {
        this.hierModelArr = [];
        this.dimModelArr = [];
        this.quantModelArr = [];
    }
    return SelectionModelsContainer;
}());
exports.SelectionModelsContainer = SelectionModelsContainer;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Parameter.js":
/*!****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Parameter.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(/*! ./EventListenerManager */ "../../api-shared-js/lib/src/ApiShared/EventListenerManager.js");
/**
 * Implementation of the Parameter contract. Calls down to the impl
 * class for almost all of the work it does.
 */
var Parameter = /** @class */ (function (_super) {
    __extends(Parameter, _super);
    function Parameter(parameterImpl, sheet) {
        var _this = _super.call(this) || this;
        _this.parameterImpl = parameterImpl;
        // Initialize our event handling for this class
        _this.parameterImpl.initializeEvents(sheet).forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Object.defineProperty(Parameter.prototype, "name", {
        get: function () {
            return this.parameterImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "currentValue", {
        get: function () {
            return this.parameterImpl.currentValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "dataType", {
        get: function () {
            return this.parameterImpl.dataType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "allowableValues", {
        get: function () {
            return this.parameterImpl.allowableValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parameter.prototype, "id", {
        get: function () {
            return this.parameterImpl.id;
        },
        enumerable: true,
        configurable: true
    });
    Parameter.prototype.changeValueAsync = function (newValue) {
        return this.parameterImpl.changeValueAsync(newValue);
    };
    return Parameter;
}(EventListenerManager_1.EventListenerManager));
exports.Parameter = Parameter;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Point.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Point.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/GetDataService.js":
/*!******************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/GetDataService.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines which type of getData call to make.
 */
var GetDataType;
(function (GetDataType) {
    GetDataType["Summary"] = "summary";
    GetDataType["Underlying"] = "underlying";
})(GetDataType = exports.GetDataType || (exports.GetDataType = {}));


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/RegisterAllSharedServices.js":
/*!*****************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/RegisterAllSharedServices.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceRegistry_1 = __webpack_require__(/*! ./ServiceRegistry */ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js");
var DataSourceServiceImpl_1 = __webpack_require__(/*! ./impl/DataSourceServiceImpl */ "../../api-shared-js/lib/src/ApiShared/Services/impl/DataSourceServiceImpl.js");
var FilterServiceImpl_1 = __webpack_require__(/*! ./impl/FilterServiceImpl */ "../../api-shared-js/lib/src/ApiShared/Services/impl/FilterServiceImpl.js");
var GetDataServiceImpl_1 = __webpack_require__(/*! ./impl/GetDataServiceImpl */ "../../api-shared-js/lib/src/ApiShared/Services/impl/GetDataServiceImpl.js");
var NotificationServiceImpl_1 = __webpack_require__(/*! ./impl/NotificationServiceImpl */ "../../api-shared-js/lib/src/ApiShared/Services/impl/NotificationServiceImpl.js");
var ParametersServiceImpl_1 = __webpack_require__(/*! ./impl/ParametersServiceImpl */ "../../api-shared-js/lib/src/ApiShared/Services/impl/ParametersServiceImpl.js");
var SelectionServiceImpl_1 = __webpack_require__(/*! ./impl/SelectionServiceImpl */ "../../api-shared-js/lib/src/ApiShared/Services/impl/SelectionServiceImpl.js");
var ZoneServiceImpl_1 = __webpack_require__(/*! ./impl/ZoneServiceImpl */ "../../api-shared-js/lib/src/ApiShared/Services/impl/ZoneServiceImpl.js");
function registerAllSharedServices(dispatcher, platformVersion) {
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new DataSourceServiceImpl_1.DataSourceServiceImpl(dispatcher, platformVersion));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new GetDataServiceImpl_1.GetDataServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new FilterServiceImpl_1.FilterServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new NotificationServiceImpl_1.NotificationServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new ParametersServiceImpl_1.ParametersServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new SelectionServiceImpl_1.SelectionServiceImpl(dispatcher));
    ServiceRegistry_1.ApiServiceRegistry.instance.registerService(new ZoneServiceImpl_1.ZoneServiceImpl(dispatcher));
}
exports.registerAllSharedServices = registerAllSharedServices;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js":
/*!*******************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/ServiceRegistry.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var TableauError_1 = __webpack_require__(/*! ../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
var ServiceRegistryImpl = /** @class */ (function () {
    function ServiceRegistryImpl() {
        this._services = {};
    }
    ServiceRegistryImpl.prototype.registerService = function (service) {
        this._services[service.serviceName] = service;
    };
    ServiceRegistryImpl.prototype.getService = function (serviceName) {
        if (!this._services.hasOwnProperty(serviceName)) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, "Service not registered: " + serviceName);
        }
        return this._services[serviceName];
    };
    return ServiceRegistryImpl;
}());
/**
 * static class used for getting access to the single instance
 * of the ApiServiceRegistry
 */
var ApiServiceRegistry = /** @class */ (function () {
    // Private to avoid anyone constructing this
    function ApiServiceRegistry() {
    }
    Object.defineProperty(ApiServiceRegistry, "instance", {
        /**
         * Gets the singleton instance of the ServiceRegistry
         */
        get: function () {
            if (!window.__tableauApiServiceRegistry) {
                ApiServiceRegistry.setInstance(new ServiceRegistryImpl());
            }
            if (!window.__tableauApiServiceRegistry) {
                throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, 'Service registry failed');
            }
            return window.__tableauApiServiceRegistry;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper method to override the registry instance. Can be used by unit tests
     *
     * @param {ServiceRegistry} serviceRegistry The new registry
     */
    ApiServiceRegistry.setInstance = function (serviceRegistry) {
        window.__tableauApiServiceRegistry = serviceRegistry;
    };
    return ApiServiceRegistry;
}());
exports.ApiServiceRegistry = ApiServiceRegistry;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/impl/DataSourceServiceImpl.js":
/*!******************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/impl/DataSourceServiceImpl.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var ServiceImplBase_1 = __webpack_require__(/*! ./ServiceImplBase */ "../../api-shared-js/lib/src/ApiShared/Services/impl/ServiceImplBase.js");
var TableauError_1 = __webpack_require__(/*! ../../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
var InternalContract = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var Field_1 = __webpack_require__(/*! ../../Field */ "../../api-shared-js/lib/src/ApiShared/Field.js");
var FieldImpl_1 = __webpack_require__(/*! ../../Impl/FieldImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/FieldImpl.js");
var DataSource_1 = __webpack_require__(/*! ../../DataSource */ "../../api-shared-js/lib/src/ApiShared/DataSource.js");
var DataSourceImpl_1 = __webpack_require__(/*! ../../Impl/DataSourceImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/DataSourceImpl.js");
exports.SENTINEL_LOGICAL_TABLE_INFO = {
    id: InternalContract.ApiShowDataTableSentinel.SingleTableId,
    caption: InternalContract.ApiShowDataTableSentinel.SingleTableCaption
};
var DataSourceServiceImpl = /** @class */ (function (_super) {
    __extends(DataSourceServiceImpl, _super);
    function DataSourceServiceImpl(dispatcher, _platformVersion) {
        var _this = _super.call(this, dispatcher) || this;
        _this._platformVersion = _platformVersion;
        return _this;
    }
    Object.defineProperty(DataSourceServiceImpl.prototype, "serviceName", {
        get: function () {
            return "data-source-service" /* DataSourceService */;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceServiceImpl.prototype.refreshAsync = function (dataSourceId) {
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a[api_internal_contract_js_1.ParameterId.DeltaTimeMs] = 0,
            _a[api_internal_contract_js_1.ParameterId.ShouldRefreshDS] = true,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.RefreshDataSource, parameters).then(function (response) {
            return;
        });
    };
    DataSourceServiceImpl.prototype.getActiveTablesAsync = function (dataSourceId) {
        var _a;
        var joinParameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetActiveTables, joinParameters).then(function (joinResponse) {
            var tableInfos = joinResponse.result;
            // getActiveTables is unsupported for cubes and GA. We do not have a connection type property
            // available from the platform (intentionally, to reduce code churn as new connections are added).
            // Instead,just check if any tables are returned. This array will be empty for any non-table based datasource.
            if (tableInfos.tables.length === 0) {
                throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.UnsupportedMethodForDataSourceType, "getActiveTables is not supported for: " + dataSourceId);
            }
            return tableInfos.tables;
        });
    };
    DataSourceServiceImpl.prototype.getDataSourcesAsync = function (visualId) {
        var _a;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSources, parameters).then(function (response) {
            var dataSchema = response.result;
            return dataSchema;
        });
    };
    DataSourceServiceImpl.prototype.getConnectionSummariesAsync = function (dataSourceId) {
        var _a;
        var params = (_a = {}, _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId, _a);
        // Get the description of the tables used by this connection
        return this.execute(api_internal_contract_js_1.VerbId.GetConnectionDescriptionSummaries, params).then(function (response) {
            var descriptionSummaries = response.result;
            return descriptionSummaries;
        });
    };
    DataSourceServiceImpl.prototype.getFieldAsync = function (globalfieldName) {
        var _a;
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetFieldAndDataSource;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.FieldId] = globalfieldName, _a);
        return this.execute(verb, parameters).then(function (response) {
            var dataSource = response.result[api_internal_contract_js_1.ParameterId.DataSource];
            var field = response.result[api_internal_contract_js_1.ParameterId.Field];
            return _this.convertField(field, _this.convertDataSource(dataSource));
        });
    };
    DataSourceServiceImpl.prototype.getLogicalTablesAsync = function (dataSourceId) {
        var _a;
        if (!this.isObjectModelSupportedByPlatform()) {
            /**
             * This sentinel ID can be passed to datasource.getLogicalTableData.
             * Once the desktop is upgraded to a version that supports object model,
             * the sentinel ID will automatically fetch the upgraded table.
             * */
            return new Promise(function (resolve) {
                return resolve([exports.SENTINEL_LOGICAL_TABLE_INFO]);
            });
        }
        var params = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetLogicalTables, params).then(function (response) {
            return response.result;
        });
    };
    DataSourceServiceImpl.prototype.getUnderlyingTablesAsync = function (visualId) {
        var _a;
        if (!this.isObjectModelSupportedByPlatform()) {
            /**
             * This sentinel ID can be passed to worksheet.getUnderlyingTableData.
             * Once the desktop is upgraded to a version that supports object model,
             * the sentinel ID will automatically fetch the upgraded table.
             * */
            return new Promise(function (resolve) {
                return resolve([exports.SENTINEL_LOGICAL_TABLE_INFO]);
            });
        }
        var params = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetUnderlyingTables, params).then(function (response) {
            return response.result;
        });
    };
    DataSourceServiceImpl.prototype.convertField = function (field, dataSource) {
        return new Field_1.Field(new FieldImpl_1.FieldImpl(field, dataSource));
    };
    DataSourceServiceImpl.prototype.convertDataSource = function (dataSource) {
        return new DataSource_1.DataSource(new DataSourceImpl_1.DataSourceImpl(dataSource));
    };
    DataSourceServiceImpl.prototype.isObjectModelSupportedByPlatform = function () {
        var platformVersionNoObjectModelSupport = { major: 1, minor: 13, fix: 0 };
        return InternalContract.VersionLessThan(platformVersionNoObjectModelSupport, this._platformVersion);
    };
    return DataSourceServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.DataSourceServiceImpl = DataSourceServiceImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/impl/FilterServiceImpl.js":
/*!**************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/impl/FilterServiceImpl.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var ApiShared_1 = __webpack_require__(/*! ../../../ApiShared */ "../../api-shared-js/lib/src/ApiShared.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var ExternalToInternalEnumMappings_1 = __webpack_require__(/*! ../../EnumMappings/ExternalToInternalEnumMappings */ "../../api-shared-js/lib/src/ApiShared/EnumMappings/ExternalToInternalEnumMappings.js");
var InternalToExternalEnumMappings_1 = __webpack_require__(/*! ../../EnumMappings/InternalToExternalEnumMappings */ "../../api-shared-js/lib/src/ApiShared/EnumMappings/InternalToExternalEnumMappings.js");
var FilterModels_1 = __webpack_require__(/*! ../../Models/FilterModels */ "../../api-shared-js/lib/src/ApiShared/Models/FilterModels.js");
var ServiceImplBase_1 = __webpack_require__(/*! ./ServiceImplBase */ "../../api-shared-js/lib/src/ApiShared/Services/impl/ServiceImplBase.js");
var Param_1 = __webpack_require__(/*! ../../Utils/Param */ "../../api-shared-js/lib/src/ApiShared/Utils/Param.js");
var DataValueFactory_1 = __webpack_require__(/*! ../../Utils/DataValueFactory */ "../../api-shared-js/lib/src/ApiShared/Utils/DataValueFactory.js");
var FilterServiceImpl = /** @class */ (function (_super) {
    __extends(FilterServiceImpl, _super);
    function FilterServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterServiceImpl.prototype, "serviceName", {
        get: function () {
            return "filter-service" /* Filter */;
        },
        enumerable: true,
        configurable: true
    });
    FilterServiceImpl.prototype.applyFilterAsync = function (visualId, fieldName, values, updateType, filterOptions) {
        var verb = api_internal_contract_js_1.VerbId.ApplyCategoricalFilter;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        if (!Array.isArray(values)) {
            throw new ApiShared_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'values parameter for applyFilterAsync must be an array');
        }
        parameters[api_internal_contract_js_1.ParameterId.FilterValues] = values;
        parameters[api_internal_contract_js_1.ParameterId.FilterUpdateType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterUpdateType.convert(updateType);
        parameters[api_internal_contract_js_1.ParameterId.IsExcludeMode] =
            (filterOptions === undefined || filterOptions.isExcludeMode === undefined) ? false : filterOptions.isExcludeMode;
        return this.execute(verb, parameters).then(function (response) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.applyRangeFilterAsync = function (visualId, fieldName, filterOptions) {
        var verb = api_internal_contract_js_1.VerbId.ApplyRangeFilter;
        var parameters = {};
        if (filterOptions.min !== undefined && filterOptions.min !== null) {
            var min = void 0;
            if (filterOptions.min instanceof Date) {
                min = Param_1.Param.serializeDateForPlatform(filterOptions.min);
            }
            else {
                min = filterOptions.min;
            }
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeMin] = min;
        }
        if (filterOptions.max !== undefined && filterOptions.max !== null) {
            var max = void 0;
            if (filterOptions.max instanceof Date) {
                max = Param_1.Param.serializeDateForPlatform(filterOptions.max);
            }
            else {
                max = filterOptions.max;
            }
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeMax] = max;
        }
        // The null option is used with min+max for 'include-range' or 'include-range-or-null'
        if (filterOptions.nullOption) {
            parameters[api_internal_contract_js_1.ParameterId.FilterRangeNullOption] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.nullOptions.convert(filterOptions.nullOption);
        }
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        return this.execute(verb, parameters).then(function (response) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.clearFilterAsync = function (visualId, fieldName) {
        var verb = api_internal_contract_js_1.VerbId.ClearFilter;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.FieldName] = fieldName;
        return this.execute(verb, parameters).then(function (resposne) {
            return fieldName;
        });
    };
    FilterServiceImpl.prototype.getFiltersAsync = function (visualId) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetFilters;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        return this.execute(verb, parameters).then(function (response) {
            var filters = response.result;
            return _this.convertDomainFilters(filters);
        });
    };
    FilterServiceImpl.prototype.getCategoricalDomainAsync = function (worksheetName, fieldId, domainType) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetCategoricalDomain;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = {
            worksheet: worksheetName
        };
        parameters[api_internal_contract_js_1.ParameterId.FieldId] = fieldId;
        parameters[api_internal_contract_js_1.ParameterId.DomainType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterDomainType.convert(domainType);
        return this.execute(verb, parameters).then(function (response) {
            var domain = response.result;
            return _this.convertCategoricalDomain(domain, domainType);
        });
    };
    FilterServiceImpl.prototype.getRangeDomainAsync = function (worksheetName, fieldId, domainType) {
        var _this = this;
        var verb = api_internal_contract_js_1.VerbId.GetRangeDomain;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = {
            worksheet: worksheetName
        };
        parameters[api_internal_contract_js_1.ParameterId.FieldId] = fieldId;
        parameters[api_internal_contract_js_1.ParameterId.DomainType] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.filterDomainType.convert(domainType);
        return this.execute(verb, parameters).then(function (response) {
            var domain = response.result;
            return _this.convertRangeDomain(domain, domainType);
        });
    };
    // Helper Methods
    FilterServiceImpl.prototype.convertDomainFilters = function (domainFilters) {
        var _this = this;
        var filters = [];
        domainFilters.forEach(function (domainFilter) {
            switch (domainFilter.filterType) {
                case api_internal_contract_js_1.FilterType.Categorical: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertCategoricalFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Categorical Filter');
                    }
                    break;
                }
                case api_internal_contract_js_1.FilterType.Range: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertRangeFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Range Filter');
                    }
                    break;
                }
                case api_internal_contract_js_1.FilterType.RelativeDate: {
                    var filter = domainFilter;
                    if (filter) {
                        filters.push(_this.convertRelativeDateFilter(filter));
                    }
                    else {
                        throw new Error('Invalid Relative Date Filter');
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        });
        return filters;
    };
    FilterServiceImpl.prototype.convertCategoricalFilter = function (domainFilter) {
        var appliedValues = domainFilter.values.map(function (dv) {
            return DataValueFactory_1.DataValueFactory.MakeFilterDataValue(dv);
        });
        return new FilterModels_1.CategoricalFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, api_internal_contract_js_1.FilterType.Categorical, appliedValues, domainFilter.isExclude, domainFilter.isAllSelected);
    };
    FilterServiceImpl.prototype.convertRangeFilter = function (domainFilter) {
        var minValue = DataValueFactory_1.DataValueFactory.MakeFilterDataValue(domainFilter.min);
        var maxValue = DataValueFactory_1.DataValueFactory.MakeFilterDataValue(domainFilter.max);
        return new FilterModels_1.RangeFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, api_internal_contract_js_1.FilterType.Range, minValue, maxValue, domainFilter.includeNullValues);
    };
    FilterServiceImpl.prototype.convertRelativeDateFilter = function (domainFilter) {
        var anchorDateValue = DataValueFactory_1.DataValueFactory.MakeFilterDataValue(domainFilter.anchorDate);
        return new FilterModels_1.RelativeDateFilter(domainFilter.visualId.worksheet, domainFilter.fieldCaption, domainFilter.fieldName, api_external_contract_js_1.FilterType.RelativeDate, anchorDateValue, InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateStepPeriod.convert(domainFilter.periodType), InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.dateRangeType.convert(domainFilter.rangeType), domainFilter.rangeN);
    };
    FilterServiceImpl.prototype.convertCategoricalDomain = function (domain, domainType) {
        var values = domain.values.map(function (domainDv) {
            return DataValueFactory_1.DataValueFactory.MakeFilterDataValue(domainDv);
        });
        return new FilterModels_1.CategoricalDomain(values, domainType);
    };
    FilterServiceImpl.prototype.convertRangeDomain = function (domain, domainType) {
        var min = DataValueFactory_1.DataValueFactory.MakeFilterDataValue(domain.min);
        var max = DataValueFactory_1.DataValueFactory.MakeFilterDataValue(domain.max);
        return new FilterModels_1.RangeDomain(min, max, domainType);
    };
    return FilterServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.FilterServiceImpl = FilterServiceImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/impl/GetDataServiceImpl.js":
/*!***************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/impl/GetDataServiceImpl.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var ServiceImplBase_1 = __webpack_require__(/*! ./ServiceImplBase */ "../../api-shared-js/lib/src/ApiShared/Services/impl/ServiceImplBase.js");
var GetDataModels_1 = __webpack_require__(/*! ../../Models/GetDataModels */ "../../api-shared-js/lib/src/ApiShared/Models/GetDataModels.js");
var GetDataService_1 = __webpack_require__(/*! ../GetDataService */ "../../api-shared-js/lib/src/ApiShared/Services/GetDataService.js");
var DataValueFactory_1 = __webpack_require__(/*! ../../Utils/DataValueFactory */ "../../api-shared-js/lib/src/ApiShared/Utils/DataValueFactory.js");
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var ExternalToInternalEnumMappings_1 = __webpack_require__(/*! ../../EnumMappings/ExternalToInternalEnumMappings */ "../../api-shared-js/lib/src/ApiShared/EnumMappings/ExternalToInternalEnumMappings.js");
var ApiShared_1 = __webpack_require__(/*! ../../../ApiShared */ "../../api-shared-js/lib/src/ApiShared.js");
var GetDataServiceImpl = /** @class */ (function (_super) {
    __extends(GetDataServiceImpl, _super);
    function GetDataServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GetDataServiceImpl.prototype, "serviceName", {
        get: function () {
            return "get-data-service" /* GetData */;
        },
        enumerable: true,
        configurable: true
    });
    GetDataServiceImpl.prototype.getMaxRowLimit = function () {
        return 10000;
    };
    GetDataServiceImpl.prototype.getLimitedMaxRows = function (requestedRows) {
        var rowCountLimit = this.getMaxRowLimit() + 1;
        return (requestedRows > 0 && requestedRows < rowCountLimit) ? requestedRows : rowCountLimit;
    };
    GetDataServiceImpl.prototype.getUnderlyingDataAsync = function (visualId, getType, ignoreAliases, ignoreSelection, includeAllColumns, columnsToIncludeById, maxRows, includeDataValuesOption) {
        var _this = this;
        // Create all of our parameters
        var verb = getType === GetDataService_1.GetDataType.Summary ? api_internal_contract_js_1.VerbId.GetDataSummaryData : api_internal_contract_js_1.VerbId.GetUnderlyingData;
        var requestMaxRows = verb === api_internal_contract_js_1.VerbId.GetUnderlyingData ? this.getLimitedMaxRows(maxRows) : maxRows;
        var parameters = {};
        parameters[api_internal_contract_js_1.ParameterId.VisualId] = visualId;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases;
        parameters[api_internal_contract_js_1.ParameterId.IgnoreSelection] = ignoreSelection;
        parameters[api_internal_contract_js_1.ParameterId.IncludeAllColumns] = includeAllColumns;
        parameters[api_internal_contract_js_1.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(columnsToIncludeById);
        parameters[api_internal_contract_js_1.ParameterId.MaxRows] = requestMaxRows;
        parameters[api_internal_contract_js_1.ParameterId.ShowDataTableFormat] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.showDataTableFormatType.convert(includeDataValuesOption);
        return this.execute(verb, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, responseData.isSummary);
        });
    };
    GetDataServiceImpl.prototype.getSummaryColumnsInfoAsync = function (visualId) {
        var _a;
        // Create all the parameters for GetDataType of Summary with 1 row, and only native values
        // Then return just the columns
        var verb = api_internal_contract_js_1.VerbId.GetDataSummaryData;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.IgnoreAliases] = true,
            _a[api_internal_contract_js_1.ParameterId.IgnoreSelection] = true,
            _a[api_internal_contract_js_1.ParameterId.IncludeAllColumns] = true,
            _a[api_internal_contract_js_1.ParameterId.MaxRows] = 1,
            _a[api_internal_contract_js_1.ParameterId.ShowDataTableFormat] = api_internal_contract_js_1.ApiShowDataTableFormat.NativeValuesOnly,
            _a);
        return this.execute(verb, parameters).then(function (response) {
            var underlyingDataTable = response.result;
            var dataTable = underlyingDataTable.data;
            var columns = dataTable.headers.map(function (h) { return new GetDataModels_1.Column(h.fieldCaption, h.fieldName, h.dataType, h.isReferenced, h.index); });
            return columns;
        });
    };
    GetDataServiceImpl.prototype.getSelectedMarksAsync = function (visualId) {
        var _a;
        var _this = this;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetSelectedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
    };
    GetDataServiceImpl.prototype.getHighlightedMarksAsync = function (visualId) {
        var _a;
        var _this = this;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetHighlightedMarks, parameters).then(function (response) {
            var responseData = response.result;
            return {
                data: responseData.data.map(function (table) { return _this.processResultsTable(table, true); })
            };
        });
    };
    GetDataServiceImpl.prototype.getDataSourceDataAsync = function (dataSourceId, ignoreAliases, maxRows, columnsToInclude, columnsToIncludeById, includeDataValuesOption) {
        var _a;
        var _this = this;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = dataSourceId,
            _a[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases,
            _a[api_internal_contract_js_1.ParameterId.MaxRows] = this.getLimitedMaxRows(maxRows),
            _a[api_internal_contract_js_1.ParameterId.ColumnsToInclude] = this.verifyIncludeColumnArray(columnsToInclude),
            _a[api_internal_contract_js_1.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(columnsToIncludeById),
            _a[api_internal_contract_js_1.ParameterId.ShowDataTableFormat] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.showDataTableFormatType.convert(includeDataValuesOption),
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetDataSourceData, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, false);
        });
    };
    GetDataServiceImpl.prototype.getLogicalTableDataAsync = function (datasourceId, logicalTableId, ignoreAliases, maxRows, columnsToInclude, columnsToIncludeById, includeDataValuesOption) {
        var _a;
        var _this = this;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ColumnsToInclude] = columnsToInclude,
            _a[api_internal_contract_js_1.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(columnsToIncludeById),
            _a[api_internal_contract_js_1.ParameterId.DataSourceId] = datasourceId,
            _a[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases,
            _a[api_internal_contract_js_1.ParameterId.LogicalTableId] = logicalTableId,
            _a[api_internal_contract_js_1.ParameterId.MaxRows] = this.getLimitedMaxRows(maxRows),
            _a[api_internal_contract_js_1.ParameterId.ShowDataTableFormat] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.showDataTableFormatType.convert(includeDataValuesOption),
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetLogicalTableData, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, false);
        });
    };
    GetDataServiceImpl.prototype.getUnderlyingTableDataAsync = function (visualId, logicalTableId, ignoreAliases, ignoreSelection, includeAllColumns, columnsToIncludeById, maxRows, includeDataValuesOption) {
        var _a;
        var _this = this;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.LogicalTableId] = logicalTableId,
            _a[api_internal_contract_js_1.ParameterId.IgnoreAliases] = ignoreAliases,
            _a[api_internal_contract_js_1.ParameterId.IgnoreSelection] = ignoreSelection,
            _a[api_internal_contract_js_1.ParameterId.IncludeAllColumns] = includeAllColumns,
            _a[api_internal_contract_js_1.ParameterId.ColumnsToIncludeById] = this.verifyIncludeColumnArray(columnsToIncludeById),
            _a[api_internal_contract_js_1.ParameterId.MaxRows] = this.getLimitedMaxRows(maxRows),
            _a[api_internal_contract_js_1.ParameterId.ShowDataTableFormat] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.showDataTableFormatType.convert(includeDataValuesOption),
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetUnderlyingTableData, parameters).then(function (response) {
            var responseData = response.result;
            return _this.processResultsTable(responseData.data, false);
        });
    };
    GetDataServiceImpl.prototype.verifyIncludeColumnArray = function (columns) {
        // columns must be a valid array
        if (!Array.isArray(columns)) {
            throw new ApiShared_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'columnsToInclude and columnsToIncludeById must be valid arrays');
        }
        // Remove any duplicates from the input array
        var columnsAsSet = new Set(columns);
        return Array.from(columnsAsSet);
    };
    GetDataServiceImpl.prototype.processResultsTable = function (responseData, isSummary) {
        var headers = responseData.headers.map(function (h) { return new GetDataModels_1.Column(h.fieldCaption, h.fieldName, h.dataType, h.isReferenced, h.index); });
        // TODO This should be controlled by a flag indicating whether this api will respond marks info or not
        var marks;
        if (responseData.marks) {
            marks = responseData.marks.map(function (h) { return new GetDataModels_1.MarkInfo(h.type, h.color, h.tupleId); });
        }
        // Limit+1 is our sentinal that underlying data contains more rows than user is allowed to fetch.
        // Remove the last element so we always return MaxRowLimit
        var isTotalRowCountLimited = isSummary === false && responseData.dataTable.length === this.getMaxRowLimit() + 1;
        if (isTotalRowCountLimited) {
            responseData.dataTable.length -= 1;
        }
        var table = responseData.dataTable.map(function (row) {
            return row.map(function (cell, index) {
                return DataValueFactory_1.DataValueFactory.MakeTableDataValue(cell, headers[index].dataType);
            });
        });
        if (marks) {
            return new GetDataModels_1.DataTable(table, headers, table.length, isTotalRowCountLimited, isSummary, marks);
        }
        return new GetDataModels_1.DataTable(table, headers, table.length, isTotalRowCountLimited, isSummary);
    };
    return GetDataServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.GetDataServiceImpl = GetDataServiceImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/impl/NotificationServiceImpl.js":
/*!********************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/impl/NotificationServiceImpl.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registration = /** @class */ (function () {
    function Registration(_filterFn, _callbackFn) {
        this._filterFn = _filterFn;
        this._callbackFn = _callbackFn;
        // Nothing Here
    }
    Registration.prototype.onNotification = function (notificationModel) {
        if (this._filterFn(notificationModel)) {
            this._callbackFn(notificationModel);
        }
    };
    return Registration;
}());
var NotificationServiceImpl = /** @class */ (function () {
    function NotificationServiceImpl(dispatcher) {
        this.dispatcher = dispatcher;
        this._handlers = {};
        this.dispatcher.registerNotificationHandler(this.onNotification.bind(this));
    }
    Object.defineProperty(NotificationServiceImpl.prototype, "serviceName", {
        get: function () {
            return "notification-service" /* Notification */;
        },
        enumerable: true,
        configurable: true
    });
    NotificationServiceImpl.prototype.registerHandler = function (id, filterFn, handler) {
        var _this = this;
        var handlers = this._handlers[id] || new Array();
        var registration = new Registration(filterFn, handler);
        handlers.push(registration);
        this._handlers[id] = handlers;
        return function () { return _this.removeRegistration(id, registration); };
    };
    NotificationServiceImpl.prototype.hasHandlersForNotificationType = function (id) {
        return this._handlers.hasOwnProperty(id);
    };
    NotificationServiceImpl.prototype.onNotification = function (notification) {
        if (!this.hasHandlersForNotificationType(notification.notificationId)) {
            return;
        }
        // Go through and check for all the handlers of this particular notification
        this._handlers[notification.notificationId].forEach(function (h) { return h.onNotification(notification.data); });
    };
    NotificationServiceImpl.prototype.removeRegistration = function (id, registration) {
        if (!this.hasHandlersForNotificationType(id)) {
            return;
        }
        this._handlers[id] = this._handlers[id].filter(function (reg) { return reg !== registration; });
    };
    return NotificationServiceImpl;
}());
exports.NotificationServiceImpl = NotificationServiceImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/impl/ParametersServiceImpl.js":
/*!******************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/impl/ParametersServiceImpl.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var ServiceImplBase_1 = __webpack_require__(/*! ./ServiceImplBase */ "../../api-shared-js/lib/src/ApiShared/Services/impl/ServiceImplBase.js");
var ParameterImpl_1 = __webpack_require__(/*! ../../Impl/ParameterImpl */ "../../api-shared-js/lib/src/ApiShared/Impl/ParameterImpl.js");
var Parameter_1 = __webpack_require__(/*! ../../Parameter */ "../../api-shared-js/lib/src/ApiShared/Parameter.js");
var TableauError_1 = __webpack_require__(/*! ../../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
var ParametersServiceImpl = /** @class */ (function (_super) {
    __extends(ParametersServiceImpl, _super);
    function ParametersServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ParametersServiceImpl.prototype, "serviceName", {
        get: function () {
            return "parameters-service" /* Parameters */;
        },
        enumerable: true,
        configurable: true
    });
    ParametersServiceImpl.prototype.getParametersForSheetAsync = function (sheetPath, sheet) {
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.SheetPath] = sheetPath,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.GetParametersForSheet, parameters).then(function (response) {
            // TODO - Check for error
            var result = response.result;
            return result.map(function (parameterInfo) {
                var impl = new ParameterImpl_1.ParameterImpl(parameterInfo);
                return new Parameter_1.Parameter(impl, sheet);
            });
        });
    };
    ParametersServiceImpl.prototype.changeParameterValueAsync = function (fieldName, newValue) {
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ParameterFieldName] = fieldName,
            _a[api_internal_contract_js_1.ParameterId.ParameterValue] = newValue,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.ChangeParameterValue, parameters).then(function (response) {
            var result = response.result;
            return result;
        });
    };
    ParametersServiceImpl.prototype.findParameterByNameAsync = function (name, sheet) {
        return this.findParameterAsync(sheet, name, undefined);
    };
    ParametersServiceImpl.prototype.findParameterByGlobalFieldNameAsync = function (fieldName, sheet) {
        return this.findParameterAsync(sheet, undefined, fieldName);
    };
    ParametersServiceImpl.prototype.findParameterAsync = function (sheet, name, fieldName) {
        var parameters = {};
        if (name !== undefined) {
            parameters[api_internal_contract_js_1.ParameterId.ParameterCaption] = name;
        }
        else if (fieldName !== undefined) {
            parameters[api_internal_contract_js_1.ParameterId.ParameterFieldName] = fieldName;
        }
        else {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'name or fieldName must be provided to find parameter');
        }
        return this.execute(api_internal_contract_js_1.VerbId.FindParameter, parameters).then(function (response) {
            var instanceOfParameterInfo = function (object) {
                return 'fieldName' in object;
            };
            // We need to check to see if we got a valid response back again
            if (instanceOfParameterInfo(response.result)) {
                var result = response.result;
                var impl = new ParameterImpl_1.ParameterImpl(result);
                return new Parameter_1.Parameter(impl, sheet);
            }
            else {
                return undefined;
            }
        });
    };
    return ParametersServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.ParametersServiceImpl = ParametersServiceImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/impl/SelectionServiceImpl.js":
/*!*****************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/impl/SelectionServiceImpl.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionModels_1 = __webpack_require__(/*! ../../Models/SelectionModels */ "../../api-shared-js/lib/src/ApiShared/Models/SelectionModels.js");
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var Param_1 = __webpack_require__(/*! ../../Utils/Param */ "../../api-shared-js/lib/src/ApiShared/Utils/Param.js");
var ServiceImplBase_1 = __webpack_require__(/*! ./ServiceImplBase */ "../../api-shared-js/lib/src/ApiShared/Services/impl/ServiceImplBase.js");
var TableauError_1 = __webpack_require__(/*! ../../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
var SelectionServiceImpl = /** @class */ (function (_super) {
    __extends(SelectionServiceImpl, _super);
    function SelectionServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SelectionServiceImpl.prototype, "serviceName", {
        get: function () {
            return "selection-service" /* Selection */;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to clear all the selected marks for the given worksheet.
     *
     * @param visualId
     */
    SelectionServiceImpl.prototype.clearSelectedMarksAsync = function (visualId) {
        var _a;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId, _a);
        return this.execute(api_internal_contract_js_1.VerbId.ClearSelectedMarks, parameters).then(function (response) {
            return; // Expecting an empty model and hence the void response.
        });
    };
    /**
     * Method to select marks for the given worksheet.
     *
     * @param visualId
     * @param selectionCriteria
     * @param selectionUpdateType
     */
    SelectionServiceImpl.prototype.selectMarksByValueAsync = function (visualId, selectionCriterias, selectionUpdateType) {
        var _a;
        if (selectionCriterias.length === 0) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'Selection criteria missing for selecting marks by value');
        }
        var selectionType = this.validateSelectionUpdateType(selectionUpdateType);
        var selectionModelContainer = this.parseSelectionMarks(selectionCriterias);
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.SelectionUpdateType] = selectionType,
            _a);
        if (selectionModelContainer.hierModelArr && selectionModelContainer.hierModelArr.length) {
            parameters[api_internal_contract_js_1.ParameterId.HierValSelectionModels] = selectionModelContainer.hierModelArr;
        }
        if (selectionModelContainer.quantModelArr && selectionModelContainer.quantModelArr.length) {
            parameters[api_internal_contract_js_1.ParameterId.QuantRangeSelectionModels] = selectionModelContainer.quantModelArr;
        }
        if (selectionModelContainer.dimModelArr && selectionModelContainer.dimModelArr.length) {
            parameters[api_internal_contract_js_1.ParameterId.DimValSelectionModels] = selectionModelContainer.dimModelArr;
        }
        return this.execute(api_internal_contract_js_1.VerbId.SelectByValue, parameters).then(function (response) {
            // Expecting an empty model and hence the void response.
            return;
            // TODO Investigate the error response with multiple output params and throw error accordingly.
        });
    };
    /**
   * Method to select marks for the given worksheet.
   *
   * @param visualId
   * @param MarkInfo
   * @param selectionUpdateType
   */
    SelectionServiceImpl.prototype.selectMarksByIdAsync = function (visualId, marks, selectionUpdateType) {
        var _a;
        if (marks.length === 0) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'Marks info missing for selecting marks by Id');
        }
        var selectionType = this.validateSelectionUpdateType(selectionUpdateType);
        var selectionModelContainer = this.parseSelectionIds(marks);
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.VisualId] = visualId,
            _a[api_internal_contract_js_1.ParameterId.SelectionUpdateType] = selectionType,
            _a[api_internal_contract_js_1.ParameterId.Selection] = selectionModelContainer.selection,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.SelectByValue, parameters).then(function (response) {
            // Expecting an empty model and hence the void response.
            return;
            // TODO Investigate the error response with multiple output params and throw error accordingly.
        });
    };
    /**
     * Method to prepare the pres models for selection by MarksInfo
     * @param marks
     */
    SelectionServiceImpl.prototype.parseSelectionIds = function (marks) {
        var ids = [];
        var selectionModelContainer = new SelectionModels_1.SelectionModelsContainer();
        for (var i = 0; i < marks.length; i++) {
            var tupleId = marks[i].tupleId;
            if (tupleId !== undefined && tupleId !== null) { // If tuple id is provided use that instead of pair
                ids.push(tupleId.toString()); // collect the tuple ids
            }
            else {
                throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, 'tupleId parsing error');
            }
        }
        if (ids.length !== 0) { // tuple ids based selection
            var tupleSelectionModel = new SelectionModels_1.TupleSelectionModel();
            tupleSelectionModel.selectionType = 'tuples';
            tupleSelectionModel.objectIds = ids;
            selectionModelContainer.selection = tupleSelectionModel;
        }
        return selectionModelContainer;
    };
    /**
     * Method to prepare the pres models for selection by values.
     *
     * Supports 3 types for selection:
     * 1) Hierarchical value based selection
     * 2) Range value based selection
     * 3) Dimension value based selection
     *
     * @param marks
     */
    SelectionServiceImpl.prototype.parseSelectionMarks = function (selectionCriterias) {
        var selectionModelContainer = new SelectionModels_1.SelectionModelsContainer();
        for (var i = 0; i < selectionCriterias.length; i++) {
            var st = selectionCriterias[i];
            if (!(st.fieldName && (st.value !== undefined && st.value !== null))) {
                throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, 'Selection Criteria parsing error');
            }
            var catRegex = new RegExp('(\[[A-Za-z0-9]+]).*', 'g');
            var rangeOption = st.value;
            if (catRegex.test(st.fieldName)) { // Hierarchical value selection
                var hierModel = this.addToParamsList(st.fieldName, st.value);
                selectionModelContainer.hierModelArr.push(hierModel);
            }
            else if (rangeOption.min !== undefined
                && rangeOption.max !== undefined) { // Range value selection
                var quantModel = this.addToRangeParamsList(st.fieldName, rangeOption);
                selectionModelContainer.quantModelArr.push(quantModel);
            }
            else { // Dimension value selection
                var dimModel = this.addToParamsList(st.fieldName, st.value);
                selectionModelContainer.dimModelArr.push(dimModel);
            }
        }
        return selectionModelContainer;
    };
    /**
     * Method to transform the key value pair into value based pres model object.
     *
     * @param valueSelectionModel
     * @param fieldName
     * @param value
     */
    SelectionServiceImpl.prototype.addToParamsList = function (fieldName, value) {
        var valueSelectionModel = new SelectionModels_1.ValueSelectionModel();
        var markValues = [];
        if (value instanceof Array) {
            var valueArr = value;
            for (var i = 0; i < valueArr.length; i++) {
                markValues.push(Param_1.Param.serializeParameterValue(valueArr[i]));
            }
        }
        else {
            markValues.push(Param_1.Param.serializeParameterValue(value));
        }
        valueSelectionModel.qualifiedFieldCaption = fieldName;
        valueSelectionModel.selectValues = markValues;
        return valueSelectionModel;
    };
    /**
     * Method to transform the key value pair into range based selection pres model.
     *
     * TODO: Need to handle the parsing of date type values.
     *
     * @param valueSelectionModel
     * @param fieldName
     * @param value
     */
    SelectionServiceImpl.prototype.addToRangeParamsList = function (fieldName, value) {
        var rangeSelectionModel = new SelectionModels_1.RangeSelectionModel();
        rangeSelectionModel.qualifiedFieldCaption = fieldName;
        if (value.max !== undefined && value.max !== null) {
            rangeSelectionModel.maxValue = Param_1.Param.serializeParameterValue(value.max);
        }
        if (value.min !== undefined && value.min !== null) {
            rangeSelectionModel.minValue = Param_1.Param.serializeParameterValue(value.min);
        }
        rangeSelectionModel.included = this.validateNullOptionType(value.nullOption);
        return rangeSelectionModel;
    };
    /**
     * Method to validate the selection update type.
     *
     * @param selectionUpdateType
     */
    SelectionServiceImpl.prototype.validateSelectionUpdateType = function (selectionUpdateType) {
        if (selectionUpdateType === api_external_contract_js_1.SelectionUpdateType.Replace) {
            return api_internal_contract_js_1.SelectionUpdateType.Replace;
        }
        else if (selectionUpdateType === api_external_contract_js_1.SelectionUpdateType.Add) {
            return api_internal_contract_js_1.SelectionUpdateType.Add;
        }
        else if (selectionUpdateType === api_external_contract_js_1.SelectionUpdateType.Remove) {
            return api_internal_contract_js_1.SelectionUpdateType.Remove;
        }
        return api_internal_contract_js_1.SelectionUpdateType.Replace;
    };
    /**
     * Method to validate the include type for range selection.
     *
     * @param nullOption
     */
    SelectionServiceImpl.prototype.validateNullOptionType = function (nullOption) {
        if (nullOption) {
            if (nullOption === api_external_contract_js_1.FilterNullOption.NullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNull;
            }
            else if (nullOption === api_external_contract_js_1.FilterNullOption.NonNullValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeNonNull;
            }
            else if (nullOption === api_external_contract_js_1.FilterNullOption.AllValues) {
                return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeAll;
            }
        }
        return api_internal_contract_js_1.QuantitativeIncludedValues.IncludeAll;
    };
    return SelectionServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.SelectionServiceImpl = SelectionServiceImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/impl/ServiceImplBase.js":
/*!************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/impl/ServiceImplBase.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InternalToExternalEnumMappings_1 = __webpack_require__(/*! ../../EnumMappings/InternalToExternalEnumMappings */ "../../api-shared-js/lib/src/ApiShared/EnumMappings/InternalToExternalEnumMappings.js");
var TableauError_1 = __webpack_require__(/*! ../../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
var EnumConverter_1 = __webpack_require__(/*! ../../Utils/EnumConverter */ "../../api-shared-js/lib/src/ApiShared/Utils/EnumConverter.js");
/**
 * Each ServceImpl should extend this base class for the sake of
 * proper error handling.  This base handles the conversion
 * from internal errors to external errors that we throw to developers
 */
var ServiceImplBase = /** @class */ (function () {
    function ServiceImplBase(_dispatcher) {
        this._dispatcher = _dispatcher;
    }
    ServiceImplBase.prototype.execute = function (verb, params) {
        return this._dispatcher.execute(verb, params).catch(function (error) {
            // Any internal error that comes from the dispatcher should be converted
            // to an external error using the enum mapper for error codes.
            var internalError = error;
            var externalErrorCode = InternalToExternalEnumMappings_1.InternalToExternalEnumMappings.errorCode.convert(internalError.errorCode, EnumConverter_1.ShouldThrow.No);
            throw new TableauError_1.TableauError(externalErrorCode, internalError.message);
        });
    };
    return ServiceImplBase;
}());
exports.ServiceImplBase = ServiceImplBase;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Services/impl/ZoneServiceImpl.js":
/*!************************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Services/impl/ZoneServiceImpl.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var ErrorHelpers_1 = __webpack_require__(/*! ../../Utils/ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
var Param_1 = __webpack_require__(/*! ../../Utils/Param */ "../../api-shared-js/lib/src/ApiShared/Utils/Param.js");
var ExternalToInternalEnumMappings_1 = __webpack_require__(/*! ../../EnumMappings/ExternalToInternalEnumMappings */ "../../api-shared-js/lib/src/ApiShared/EnumMappings/ExternalToInternalEnumMappings.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var ServiceImplBase_1 = __webpack_require__(/*! ./ServiceImplBase */ "../../api-shared-js/lib/src/ApiShared/Services/impl/ServiceImplBase.js");
var ZoneServiceImpl = /** @class */ (function (_super) {
    __extends(ZoneServiceImpl, _super);
    function ZoneServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ZoneServiceImpl.prototype, "serviceName", {
        get: function () {
            return "zone-service" /* Zone */;
        },
        enumerable: true,
        configurable: true
    });
    ZoneServiceImpl.prototype.setVisibilityAsync = function (dashboard, dashboardObjects, zoneVisibilityMap) {
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.Dashboard] = dashboard,
            _a[api_internal_contract_js_1.ParameterId.ZoneIdsVisibilityMap] = {},
            _a);
        // zoneVisibilityMap can be either an object or a Map - convert it to a Map
        var parameterAsMap = Param_1.Param.convertParameterToMap(zoneVisibilityMap, 'zoneVisibilityMap');
        parameterAsMap.forEach(function (value, key) {
            ErrorHelpers_1.ErrorHelpers.verifyZoneIsValid(dashboardObjects, Number.parseInt(key, 10));
            ErrorHelpers_1.ErrorHelpers.verifyEnumValue(value, api_external_contract_js_1.ZoneVisibilityType, 'ZoneVisibilityType');
            parameters[api_internal_contract_js_1.ParameterId.ZoneIdsVisibilityMap][key] = ExternalToInternalEnumMappings_1.ExternalToInternalEnumMappings.setVisibilityType.convert(value);
        });
        return this.execute(api_internal_contract_js_1.VerbId.SetZoneVisibility, parameters).then(function (response) {
            return;
        });
    };
    return ZoneServiceImpl;
}(ServiceImplBase_1.ServiceImplBase));
exports.ZoneServiceImpl = ZoneServiceImpl;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Sheet.js":
/*!************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Sheet.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventListenerManager_1 = __webpack_require__(/*! ./EventListenerManager */ "../../api-shared-js/lib/src/ApiShared/EventListenerManager.js");
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet(_sheetImpl) {
        var _this = _super.call(this) || this;
        _this._sheetImpl = _sheetImpl;
        return _this;
    }
    Object.defineProperty(Sheet.prototype, "name", {
        get: function () {
            return this._sheetImpl.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "sheetType", {
        get: function () {
            return this._sheetImpl.sheetType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sheet.prototype, "size", {
        get: function () {
            return this._sheetImpl.size;
        },
        enumerable: true,
        configurable: true
    });
    Sheet.prototype.findParameterAsync = function (parameterName) {
        return this._sheetImpl.findParameterAsync(parameterName, this);
    };
    Sheet.prototype.getParametersAsync = function () {
        return this._sheetImpl.getParametersAsync(this);
    };
    return Sheet;
}(EventListenerManager_1.EventListenerManager));
exports.Sheet = Sheet;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Size.js":
/*!***********************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Size.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Size = /** @class */ (function () {
    function Size(_height, _width) {
        this._height = _height;
        this._width = _width;
    }
    Object.defineProperty(Size.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Size.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    return Size;
}());
exports.Size = Size;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/TableSummary.js":
/*!*******************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/TableSummary.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a table summary.
 * This does not follow the Impl pattern as it is just a property bag.
 */
var TableSummary = /** @class */ (function () {
    function TableSummary(_tableInfo) {
        this._tableInfo = _tableInfo;
    }
    Object.defineProperty(TableSummary.prototype, "name", {
        get: function () {
            return this._tableInfo.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "id", {
        get: function () {
            return this._tableInfo.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "connectionId", {
        get: function () {
            return this._tableInfo.connectionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSummary.prototype, "customSQL", {
        get: function () {
            return this._tableInfo.customSQL;
        },
        enumerable: true,
        configurable: true
    });
    return TableSummary;
}());
exports.TableSummary = TableSummary;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/TableauError.js":
/*!*******************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/TableauError.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Custom error class that extends the default JavaScript Error object.
 * This allows us to provide a field with a specific error code
 * so that developers can more easily programmatically respond
 * to error scenarios.
 */
var TableauError = /** @class */ (function (_super) {
    __extends(TableauError, _super);
    function TableauError(_errorCode, message) {
        var _this = _super.call(this, _errorCode + ": " + message) || this;
        _this._errorCode = _errorCode;
        /*tslint:disable-next-line */
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Error inheritance does not work propertly when compiling to ES5, this is a workaround to force
        // the proto chain to be built correctly.  See the github link above for details.
        Object.setPrototypeOf(_this, TableauError.prototype);
        return _this;
    }
    Object.defineProperty(TableauError.prototype, "errorCode", {
        get: function () {
            return this._errorCode;
        },
        enumerable: true,
        configurable: true
    });
    return TableauError;
}(Error));
exports.TableauError = TableauError;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Utils/DataValueFactory.js":
/*!*****************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Utils/DataValueFactory.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GetDataModels_1 = __webpack_require__(/*! ../Models/GetDataModels */ "../../api-shared-js/lib/src/ApiShared/Models/GetDataModels.js");
var InternalContract = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
/**
 * In version 2 of the interface, we should collapse value into nativeValue, and do all this work over
 * in the platform.
 */
var DataValueFactory = /** @class */ (function () {
    function DataValueFactory() {
    }
    DataValueFactory.MakeParameterDataValue = function (internalDataValue, dataType) {
        // Parameter values are all strings, convert from string to value
        return new GetDataModels_1.DataValue(internalDataValue.value, InternalContract.DataTypeConverter.convertStringValueToNativeValue(internalDataValue.value, dataType), internalDataValue.formattedValue);
    };
    DataValueFactory.MakeFilterDataValue = function (internalDataValue) {
        // Filters already have native type in value, just use that for nativeValue also
        return new GetDataModels_1.DataValue(internalDataValue.value, internalDataValue.value, internalDataValue.formattedValue);
    };
    DataValueFactory.MakeTableDataValue = function (internalDataValue, dataType) {
        // DataTables contain boolean | number | string | date as string | '%null%
        // convertValueToNativeValue converts dates as string to dates, and any special to null
        // (boolean, numbers, strings are passed through)
        // Because of IncludeDataValuesOption - we can have undefined values, which are different than any special
        return new GetDataModels_1.DataValue(internalDataValue.value, internalDataValue.value !== undefined
            ? InternalContract.DataTypeConverter.convertValueToNativeValue(internalDataValue.value, dataType)
            : undefined, internalDataValue.formattedValue);
    };
    return DataValueFactory;
}());
exports.DataValueFactory = DataValueFactory;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Utils/EnumConverter.js":
/*!**************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Utils/EnumConverter.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var TableauError_1 = __webpack_require__(/*! ../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
/**
 * This class converts from a source enum value to destination enum
 * value given a mapping from source to destination when constructed.
 *
 * Note: This exact same class is defined in api-core.  Given its small
 * nature, it is not worth having in a separate project to share this between
 * api-core and api-shared.  If more utility functionality is added that is used by api-core
 * and api-shared but has no other dependecies, a utiltity project might be merited,
 * and this class could be moved.
 */
var EnumConverter = /** @class */ (function () {
    function EnumConverter(_mappings, _defaultVal) {
        this._mappings = _mappings;
        this._defaultVal = _defaultVal;
    }
    EnumConverter.prototype.convert = function (enumVal, throwIfMissing) {
        if (throwIfMissing === void 0) { throwIfMissing = ShouldThrow.Yes; }
        if (this._mappings.hasOwnProperty(enumVal)) {
            return this._mappings[enumVal];
        }
        if (this._defaultVal !== undefined && throwIfMissing !== ShouldThrow.Yes) {
            return this._defaultVal;
        }
        throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, "Enum Mapping not found for: " + enumVal);
    };
    return EnumConverter;
}());
exports.EnumConverter = EnumConverter;
var ShouldThrow;
(function (ShouldThrow) {
    ShouldThrow["Yes"] = "yes";
    ShouldThrow["No"] = "no";
})(ShouldThrow = exports.ShouldThrow || (exports.ShouldThrow = {}));


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js":
/*!*************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var Param_1 = __webpack_require__(/*! ./Param */ "../../api-shared-js/lib/src/ApiShared/Utils/Param.js");
var TableauError_1 = __webpack_require__(/*! ../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
/**
 * This class is used to construct common errors throughout the external
 * projects (api-shared, extensions-api, etc.).  It has some duplication with
 * the ErrorHelpers class in api-core, but is separate due to the need to throw
 * an external TableauError vs. an InternalTableauError.
 */
var ErrorHelpers = /** @class */ (function () {
    function ErrorHelpers() {
    }
    /**
     * Throws with code InternalError.
     *
     * @param apiName name of api that was called.
     */
    ErrorHelpers.apiNotImplemented = function (apiName) {
        return new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, apiName + " API not yet implemented.");
    };
    /**
     * Throws an internal error if argument is null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyInternalValue = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, argumentValue + " is invalid value for: " + argumentName);
        }
    };
    /**
     * Throws an InvalidParameter error if argument is null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyParameter = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for parameter: " + argumentName);
        }
    };
    /**
    * Throws an InvalidParameter error if argument is not the specified type.
    * For objects, it just tests that it is an object
    *
    * @param argumentValue value to verify
    * @param expectedType expected result of typeof
    * @param argumentName name of argument to verify
    */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyParameterType = function (argumentValue, expectedType, argumentName) {
        if (typeof (argumentValue) !== expectedType) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, argumentValue + " has invalid type for parameter: " + argumentName + ".");
        }
    };
    /**
     * Throws an InvalidParameter error if argument is empty string, null or undefined.
     *
     * @param argumentValue value to verify
     * @param argumentName name of argument to verify
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyStringParameter = function (argumentValue, argumentName) {
        if (argumentValue === null || argumentValue === undefined || argumentValue === '') {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, argumentValue + " is invalid value for paramter: " + argumentName);
        }
    };
    /**
     * Verifies passed value is a valid value for that enum.
     * Throws an InvalidParameter error if the enum value is not valid.
     *
     * String enums are {string : string} dictionaries which are not reverse mappable
     * This is an ugly workaround
     *
     * @param enumValue value to verify
     * @param enumType enum to verify against
     * @param enumName enum name for clear error message
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyEnumValue = function (enumValue, enumType, enumName) {
        var isValid = false;
        Object.keys(enumType).forEach(function (enumKey) {
            if (enumType[enumKey] === enumValue.toString()) {
                isValid = true;
            }
        });
        if (!isValid) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, enumValue + " is invalid value for enum: " + enumName + ".");
        }
    };
    /**
     * Verifies the params min and max for applying range filter.
     * Throws with error code InvalidParameter if range is invalid.
     *
     * @param min range min
     * @param max range max
     */
    /*tslint:disable-next-line */
    ErrorHelpers.verifyRangeParamType = function (min, max) {
        if (!min && !max) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, at least one of min or max is required.');
        }
        if (min && !Param_1.Param.isTypeNumber(min) && !Param_1.Param.isTypeDate(min)) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter min.');
        }
        if (max && !Param_1.Param.isTypeNumber(max) && !Param_1.Param.isTypeDate(max)) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, only Date and number are allowed for parameter max.');
        }
        if (min && max && typeof (min) !== typeof (max)) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'Unexpected invalid param value, parameters min and max should be of the same type.');
        }
    };
    /**
     * Verifies that the zoneId is present in the current dashboard.
     * Throws with error code InvalidParameter if either condition is false.
     *
     * @param dashboardObjects An array of all DashboardObjects in the current dashboard
     * @param zoneID ZoneId to be validated
     */
    ErrorHelpers.verifyZoneIsValid = function (dashboardObjects, zoneID) {
        var isValid = dashboardObjects.some(function (dashboardObject) {
            return dashboardObject.id === zoneID;
        });
        if (!isValid) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, "Unexpected invalid param value, Zone Id: " + zoneID + " is not present in dashboard.");
        }
    };
    return ErrorHelpers;
}());
exports.ErrorHelpers = ErrorHelpers;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Utils/Param.js":
/*!******************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Utils/Param.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var TableauError_1 = __webpack_require__(/*! ../TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
var ErrorHelpers_1 = __webpack_require__(/*! ./ErrorHelpers */ "../../api-shared-js/lib/src/ApiShared/Utils/ErrorHelpers.js");
var Param = /** @class */ (function () {
    function Param() {
    }
    /**
     * serializes the date into the format that the server expects.
     * @param date the date to serialize
     */
    Param.serializeDateForPlatform = function (date) {
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var hh = date.getUTCHours();
        var mm = date.getUTCMinutes();
        var sec = date.getUTCSeconds();
        return year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + sec;
    };
    Param.serializeBooleanForPlatform = function (bool) {
        return bool ? 'true' : 'false';
    };
    Param.serializeNumberForPlatform = function (num) {
        return num.toString(10);
    };
    /**
     * Verifies the input is a number
     */
    /* tslint:disable:no-any */
    Param.isTypeNumber = function (input) {
        return typeof (input) === 'number' || input instanceof Number;
    };
    /* tslint:enable:no-any */
    /**
     * Verifies the input is a Date
     */
    /* tslint:disable:no-any */
    Param.isTypeDate = function (input) {
        return input instanceof Date;
    };
    /* tslint:enable:no-any */
    /* tslint:disable-next-line:no-any */
    Param.isTypeString = function (input) {
        return typeof (input) === 'string' || input instanceof String;
    };
    /* tslint:disable-next-line:no-any */
    Param.isTypeBool = function (input) {
        return typeof (input) === 'boolean' || input instanceof Boolean;
    };
    /* tslint:disable-next-line:no-any */
    Param.serializeParameterValue = function (value) {
        if (Param.isTypeNumber(value)) {
            return Param.serializeNumberForPlatform(value);
        }
        else if (Param.isTypeDate(value)) {
            return Param.serializeDateForPlatform(value);
        }
        else if (Param.isTypeBool(value)) {
            return Param.serializeBooleanForPlatform(value);
        }
        else if (Param.isTypeString(value)) {
            return value;
        }
        else {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, "Unexpected invalid value for: " + value);
        }
    };
    /**
     * Verifies that the parameter is already a Map, or converts an object to a Map.
     * If the parameter is an object, we convert it to a Map using Object.entries.
     * @throws if the parameter is not an object or Map
     */
    // tslint:disable-next-line:no-any
    Param.convertParameterToMap = function (param, paramName) {
        ErrorHelpers_1.ErrorHelpers.verifyParameterType(param, 'object', paramName);
        if (Array.isArray(param)) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, "Expecting object or Map for: " + paramName + ".");
        }
        return param instanceof Map ? param : new Map(Object.entries(param));
    };
    return Param;
}());
exports.Param = Param;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/VersionNumber.js":
/*!********************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/VersionNumber.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var TableauError_1 = __webpack_require__(/*! ./TableauError */ "../../api-shared-js/lib/src/ApiShared/TableauError.js");
/**
 * Represents the current version of the extensions library
 * and extensions-api-types library
 */
var VersionNumber = /** @class */ (function () {
    // private constructor so everyone uses the singleton instance
    // build numbers have this form: M.m.f-pre.N
    function VersionNumber(versionString, isAlpha) {
        var partStr = versionString.split('-');
        this.build = this.getBuildNumber(partStr[1]);
        versionString = partStr[0];
        var parts = versionString.split('.').map(function (p) { return parseInt(p, 10); });
        if (parts.length !== 3) {
            throw new TableauError_1.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, "Invalid version number: " + versionString);
        }
        this.major = parts[0];
        this.minor = parts[1];
        this.fix = parts[2];
        this.isAlpha = isAlpha;
    }
    VersionNumber.prototype.getBuildNumber = function (preReleaseString) {
        var noBuildNumber = -1;
        if (!preReleaseString) {
            return noBuildNumber;
        }
        // The preRelease string has this form: pre.N, but we don't depend on the actual string being 'pre'
        var partStr = preReleaseString.split('.');
        return partStr[1] ? parseInt(partStr[1], 10) : noBuildNumber;
    };
    Object.defineProperty(VersionNumber.prototype, "formattedValue", {
        get: function () {
            return this.major + "." + this.minor + "." + this.fix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VersionNumber.prototype, "fullFormattedValue", {
        get: function () {
            return this.major + "." + this.minor + "." + this.fix + "-pre." + this.build;
        },
        enumerable: true,
        configurable: true
    });
    return VersionNumber;
}());
exports.VersionNumber = VersionNumber;


/***/ }),

/***/ "../../api-shared-js/lib/src/ApiShared/Worksheet.js":
/*!****************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/ApiShared/Worksheet.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sheet_1 = __webpack_require__(/*! ./Sheet */ "../../api-shared-js/lib/src/ApiShared/Sheet.js");
var Worksheet = /** @class */ (function (_super) {
    __extends(Worksheet, _super);
    function Worksheet(_worksheetImpl) {
        var _this = _super.call(this, _worksheetImpl) || this;
        _this._worksheetImpl = _worksheetImpl;
        // Call to initialize events and then call down to the event listener manager to handle things
        _this._worksheetImpl.initializeEvents(_this).forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Object.defineProperty(Worksheet.prototype, "parentDashboard", {
        get: function () {
            return this._worksheetImpl.parentDashboard;
        },
        enumerable: true,
        configurable: true
    });
    Worksheet.prototype.applyFilterAsync = function (fieldName, values, updateType, options) {
        return this._worksheetImpl.applyFilterAsync(fieldName, values, updateType, options);
    };
    Worksheet.prototype.applyRangeFilterAsync = function (fieldName, filterOptions) {
        return this._worksheetImpl.applyRangeFilterAsync(fieldName, filterOptions);
    };
    Worksheet.prototype.clearFilterAsync = function (fieldName) {
        return this._worksheetImpl.clearFilterAsync(fieldName);
    };
    Worksheet.prototype.getDataSourcesAsync = function () {
        return this._worksheetImpl.getDataSourcesAsync();
    };
    Worksheet.prototype.getFiltersAsync = function () {
        return this._worksheetImpl.getFiltersAsync();
    };
    Worksheet.prototype.getSelectedMarksAsync = function () {
        return this._worksheetImpl.getSelectedMarksAsync();
    };
    Worksheet.prototype.getHighlightedMarksAsync = function () {
        return this._worksheetImpl.getHighlightedMarksAsync();
    };
    Worksheet.prototype.getSummaryDataAsync = function (options) {
        return this._worksheetImpl.getSummaryDataAsync(options);
    };
    Worksheet.prototype.getSummaryColumnsInfoAsync = function () {
        return this._worksheetImpl.getSummaryColumnsInfoAsync();
    };
    Worksheet.prototype.getUnderlyingDataAsync = function (options) {
        console.warn('Worksheet.getUnderlyingDataAsync is deprecated. Please use ' +
            'Worksheet.getUnderlyingTablesAsync and Worksheet.getUnderlyingTableDataAsync');
        return this._worksheetImpl.getUnderlyingDataAsync(options);
    };
    Worksheet.prototype.getUnderlyingTablesAsync = function () {
        return this._worksheetImpl.getUnderlyingTablesAsync();
    };
    Worksheet.prototype.getUnderlyingTableDataAsync = function (logicalTableId, options) {
        return this._worksheetImpl.getUnderlyingTableDataAsync(logicalTableId, options);
    };
    Worksheet.prototype.clearSelectedMarksAsync = function () {
        return this._worksheetImpl.clearSelectedMarksAsync();
    };
    Worksheet.prototype.selectMarksByIDAsync = function (marksInfo, updateType) {
        return this._worksheetImpl.selectMarksByIdAsync(marksInfo, updateType);
    };
    Worksheet.prototype.selectMarksByValueAsync = function (selections, selectionUpdateType) {
        return this._worksheetImpl.selectMarksByValueAsync(selections, selectionUpdateType);
    };
    Worksheet.prototype.selectMarksByIdAsync = function (selections, selectionUpdateType) {
        return this._worksheetImpl.selectMarksByIdAsync(selections, selectionUpdateType);
    };
    return Worksheet;
}(Sheet_1.Sheet));
exports.Worksheet = Worksheet;


/***/ }),

/***/ "../../api-shared-js/lib/src/VersionedExternalApiDispatcher.js":
/*!***************************************************************************************************************************!*\
  !*** /builds/extensibility/extensions-and-embedding-api/packages/api-shared-js/lib/src/VersionedExternalApiDispatcher.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
/**
 * Implementation of the InternalApiDispatcher which supports upgrading and downgrading the input
 * internal contract to the version that this module is built against
 *
 * @class VersionedExternalApiDispatcher
 * @implements {InternalApiDispatcher}
 */
var VersionedExternalApiDispatcher = /** @class */ (function () {
    /**
     * Creates a new instance of the VersionedExternalApiDispatcher
     * We have multiple version converting dispatchers that work together.
     * If needed, the VersionedExternalApiDispatcher wraps either the InternalApiDispatcher (desktop)
     * or the CrossFrameDispatcher (server).
     * The Internal/CrossFrame dispatchers handle an updated platform with an older external library.
     * (The CrossFrameDispatcher sends messages across the frame, and it is handled by the PresLayerHandler.)
     * Meanwhile, the VersionedExternalApiDispatcher handles an updated external library with an older platform.
  
     * @param _apiDelegateDispatcher The delegate that does the actual work.
     * @param platformVersionNumber The version of the internal contract which the platform module is using.
     * This number will be used to figure out how to downgrade incoming commands and upgrade the results
     */
    function VersionedExternalApiDispatcher(_apiDelegateDispatcher, platformVersionNumber) {
        var _this = this;
        this._apiDelegateDispatcher = _apiDelegateDispatcher;
        this._versionConverter = api_internal_contract_js_1.CreateExternalCompatibleVersionConverter(api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION, platformVersionNumber);
        this._notificationHandlers = [];
        _apiDelegateDispatcher.registerNotificationHandler(function (notification) {
            if (_this._notificationHandlers.length === 0) {
                return;
            }
            var upgradedNotification = _this._versionConverter.upgradeNotification(notification);
            _this._notificationHandlers.forEach(function (handler) {
                handler(upgradedNotification);
            });
        });
    }
    VersionedExternalApiDispatcher.needsVersionConverter = function (platformVersion) {
        // If our platform is less than external library version, then we need a converter
        return api_internal_contract_js_1.VersionLessThan(platformVersion, api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION);
    };
    VersionedExternalApiDispatcher.prototype.execute = function (verb, parameters) {
        var _this = this;
        try {
            var downgradeParameters = this._versionConverter.downgradeExecuteCall(verb, parameters);
            return this._apiDelegateDispatcher.execute(downgradeParameters.verb, downgradeParameters.parameters).then(function (response) {
                var upgradeResponse = _this._versionConverter.upgradeExecuteReturn(response, verb, parameters);
                return upgradeResponse;
            });
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    VersionedExternalApiDispatcher.prototype.registerNotificationHandler = function (handler) {
        this._notificationHandlers.push(handler);
    };
    VersionedExternalApiDispatcher.prototype.unregisterNotificationHandler = function (handler) {
        this._notificationHandlers = this._notificationHandlers.filter(function (h) { return h !== handler; });
    };
    return VersionedExternalApiDispatcher;
}());
exports.VersionedExternalApiDispatcher = VersionedExternalApiDispatcher;


/***/ }),

/***/ "../lib/src/ExtensionsApi.js":
/*!***********************************!*\
  !*** ../lib/src/ExtensionsApi.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is your main. This is where you re-export everything you want to be publicly available.
 *
 * The build enforces that the file has the same name as the global variable that is exported.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// The following polyfills are needed for IE11
__webpack_require__(/*! core-js/es/promise */ "../../../node_modules/core-js/es/promise/index.js");
__webpack_require__(/*! core-js/es/map */ "../../../node_modules/core-js/es/map/index.js");
__webpack_require__(/*! core-js/es/array/find */ "../../../node_modules/core-js/es/array/find.js");
__webpack_require__(/*! core-js/es/array/from */ "../../../node_modules/core-js/es/array/from.js");
__webpack_require__(/*! core-js/es/object/assign */ "../../../node_modules/core-js/es/object/assign.js");
__webpack_require__(/*! core-js/es/object/entries */ "../../../node_modules/core-js/es/object/entries.js");
__webpack_require__(/*! core-js/es/object/set-prototype-of */ "../../../node_modules/core-js/es/object/set-prototype-of.js");
__webpack_require__(/*! core-js/es/number/is-nan */ "../../../node_modules/core-js/es/number/is-nan.js");
__webpack_require__(/*! core-js/es/number/is-integer */ "../../../node_modules/core-js/es/number/is-integer.js");
__webpack_require__(/*! core-js/es/number/parse-int */ "../../../node_modules/core-js/es/number/parse-int.js");
__webpack_require__(/*! core-js/es/number/parse-float */ "../../../node_modules/core-js/es/number/parse-float.js");
// Due to the way we configured webpack, we should be exporting things which will be under
// a global variable called "tableau". Export everything we want to be visible under tableau
// from this file.
var ExtensionsImpl_1 = __webpack_require__(/*! ./ExtensionsApi/Impl/ExtensionsImpl */ "../lib/src/ExtensionsApi/Impl/ExtensionsImpl.js");
var Extensions_1 = __webpack_require__(/*! ./ExtensionsApi/Namespaces/Extensions */ "../lib/src/ExtensionsApi/Namespaces/Extensions.js");
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var isAlpha = typeof EXTENSION_VERSION_IS_ALPHA !== 'undefined' ? EXTENSION_VERSION_IS_ALPHA : false;
api_shared_js_1.ApiVersion.SetVersionNumber( true ? "1.5.0-pre.28" : undefined, isAlpha);
var extensionImpl = new ExtensionsImpl_1.ExtensionsImpl();
exports.extensions = new Extensions_1.Extensions(extensionImpl);
// Export Enums
// These show up under the tableau object. I.e. tableau.ExtensionContext.Server
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
exports.ExtensionContext = api_external_contract_js_1.ExtensionContext;
exports.ExtensionMode = api_external_contract_js_1.ExtensionMode;
exports.AnalyticsObjectType = api_external_contract_js_1.AnalyticsObjectType;
exports.ColumnType = api_external_contract_js_1.ColumnType;
exports.DashboardObjectType = api_external_contract_js_1.DashboardObjectType;
exports.DataType = api_external_contract_js_1.DataType;
exports.DateRangeType = api_external_contract_js_1.DateRangeType;
exports.EncodingType = api_external_contract_js_1.EncodingType;
exports.ErrorCodes = api_external_contract_js_1.ErrorCodes;
exports.FieldAggregationType = api_external_contract_js_1.FieldAggregationType;
exports.FieldRoleType = api_external_contract_js_1.FieldRoleType;
exports.FilterDomainType = api_external_contract_js_1.FilterDomainType;
exports.FilterType = api_external_contract_js_1.FilterType;
exports.FilterUpdateType = api_external_contract_js_1.FilterUpdateType;
exports.FilterNullOption = api_external_contract_js_1.FilterNullOption;
exports.IncludeDataValuesOption = api_external_contract_js_1.IncludeDataValuesOption;
exports.MarkType = api_external_contract_js_1.MarkType;
exports.ParameterValueType = api_external_contract_js_1.ParameterValueType;
exports.PeriodType = api_external_contract_js_1.PeriodType;
exports.QuickTableCalcType = api_external_contract_js_1.QuickTableCalcType;
exports.SelectionUpdateType = api_external_contract_js_1.SelectionUpdateType;
exports.SheetType = api_external_contract_js_1.SheetType;
exports.SortDirection = api_external_contract_js_1.SortDirection;
exports.TableauEventType = api_external_contract_js_1.TableauEventType;
exports.TrendLineModelType = api_external_contract_js_1.TrendLineModelType;
exports.ZoneVisibilityType = api_external_contract_js_1.ZoneVisibilityType;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Impl/ExtensionsImpl.js":
/*!*******************************************************!*\
  !*** ../lib/src/ExtensionsApi/Impl/ExtensionsImpl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var DashboardContent_1 = __webpack_require__(/*! ../Namespaces/DashboardContent */ "../lib/src/ExtensionsApi/Namespaces/DashboardContent.js");
var Environment_1 = __webpack_require__(/*! ../Namespaces/Environment */ "../lib/src/ExtensionsApi/Namespaces/Environment.js");
var RegisterAllExtensionsServices_1 = __webpack_require__(/*! ../Services/RegisterAllExtensionsServices */ "../lib/src/ExtensionsApi/Services/RegisterAllExtensionsServices.js");
var Settings_1 = __webpack_require__(/*! ../Namespaces/Settings */ "../lib/src/ExtensionsApi/Namespaces/Settings.js");
var SettingsImpl_1 = __webpack_require__(/*! ./SettingsImpl */ "../lib/src/ExtensionsApi/Impl/SettingsImpl.js");
var api_shared_js_2 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var UI_1 = __webpack_require__(/*! ../Namespaces/UI */ "../lib/src/ExtensionsApi/Namespaces/UI.js");
var UIImpl_1 = __webpack_require__(/*! ./UIImpl */ "../lib/src/ExtensionsApi/Impl/UIImpl.js");
var api_shared_js_3 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var api_shared_js_4 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var LegacyInternalApiDispatcherHolder_1 = __webpack_require__(/*! ./LegacyInternalApiDispatcherHolder */ "../lib/src/ExtensionsApi/Impl/LegacyInternalApiDispatcherHolder.js");
var ExtensionsImpl = /** @class */ (function () {
    function ExtensionsImpl() {
    }
    ExtensionsImpl.prototype.initializeAsync = function (isExtensionDialog, contextMenuCallbacks) {
        var _this = this;
        if (!this._initializationPromise) {
            this._initializationPromise = new Promise(function (resolve, reject) {
                var initOptions = { isAlpha: api_shared_js_3.ApiVersion.Instance.isAlpha };
                // First thing we want to do is check to see if there is a desktop dispatcher already registered for us
                if (LegacyInternalApiDispatcherHolder_1.LegacyInternalApiDispatcherHolder.hasDesktopApiDispatcherPromise(initOptions)) {
                    // Running in a pre-2019.3 desktop, use our legacy dispatcher promise
                    var desktopDispatcherPromise = LegacyInternalApiDispatcherHolder_1.LegacyInternalApiDispatcherHolder.getDesktopDispatcherPromise(initOptions);
                    desktopDispatcherPromise.then(function (dispatcherFactory) {
                        return _this.onDispatcherReceived(dispatcherFactory, isExtensionDialog, contextMenuCallbacks);
                    })
                        .then(function (openPayload) {
                        resolve(openPayload);
                    }).catch(function (error) {
                        reject(error);
                    });
                }
                else {
                    // We must be running in server, so we should try to kick of the server dispatcher bootstrapping
                    var onDispatcherReceivedCallback_1 = _this.onDispatcherReceived.bind(_this);
                    api_shared_js_1.doCrossFrameBootstrap(window, api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION, initOptions).then(function (factory) {
                        return onDispatcherReceivedCallback_1(factory, isExtensionDialog, contextMenuCallbacks);
                    }).then(function (openPayload) {
                        resolve(openPayload);
                    }).catch(function (error) {
                        reject(error);
                    });
                }
            });
        }
        return this._initializationPromise;
    };
    ExtensionsImpl.prototype.onDispatcherReceived = function (dispatcherFactory, isExtensionDialog, contextMenuFunctions) {
        var _this = this;
        var dispatcher = dispatcherFactory(api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION);
        // Call to register all the services which will use the newly initialized dispatcher
        RegisterAllExtensionsServices_1.registerInitializationExtensionsServices(dispatcher);
        // Get the initialization service and initialize this extension
        var initializationService = api_shared_js_1.ApiServiceRegistry.instance.getService("InitializationService" /* InitializationService */);
        var callbackMapKeys = (contextMenuFunctions) ? Object.keys(contextMenuFunctions) : [];
        return initializationService.initializeDashboardExtensionsAsync(isExtensionDialog, callbackMapKeys).then(function (result) {
            if (!result.extensionInstance.locator.dashboardPath) {
                throw new api_shared_js_2.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, 'Unexpected error during initialization.');
            }
            // If we receive an invalid plaform version, this means that platform is runnning 1.4 or 2.1 and
            // doesn't pass the platform version to external. In this case we assume the platform version to be 1.9
            var platformVersion = result.extensionEnvironment.platformVersion
                ? result.extensionEnvironment.platformVersion
                : { major: 1, minor: 9, fix: 0 };
            // Wrap our existing dispatcher in a dispatcher that can downgrade/upgrade for an older platform.
            if (api_shared_js_4.VersionedExternalApiDispatcher.needsVersionConverter(platformVersion)) {
                dispatcher = new api_shared_js_4.VersionedExternalApiDispatcher(dispatcher, platformVersion);
            }
            // Registration of services must happen before initializing content and environment
            api_shared_js_1.registerAllSharedServices(dispatcher, platformVersion);
            RegisterAllExtensionsServices_1.registerAllExtensionsServices(dispatcher);
            _this.dashboardContent = _this.initializeDashboardContent(result.extensionDashboardInfo, result.extensionInstance.locator.dashboardPath);
            _this.environment = new Environment_1.Environment(result.extensionEnvironment);
            _this.settings = _this.initializeSettings(result.extensionSettingsInfo);
            _this.ui = new UI_1.UI(new UIImpl_1.UIImpl());
            // After initialization has completed, setup listeners for the callback functions that
            // are meant to be triggered whenever a context menu item is clicked.
            _this.initializeContextMenuCallbacks(contextMenuFunctions);
            // In the normal initialization case, this will be an empty string.  When returning from initializeAsync to the
            // developer, we just ingore that string.  In the case of initializing from an extension dialog, this string
            // is an optional payload sent from the parent extension.
            return result.extensionDialogPayload;
        });
    };
    ExtensionsImpl.prototype.initializeDashboardContent = function (info, sheetPath) {
        var dashboardImpl = new api_shared_js_1.DashboardImpl(info, sheetPath);
        var dashboard = new api_shared_js_1.Dashboard(dashboardImpl);
        return new DashboardContent_1.DashboardContent(dashboard);
    };
    ExtensionsImpl.prototype.initializeSettings = function (settingsInfo) {
        var settingsImpl = new SettingsImpl_1.SettingsImpl(settingsInfo);
        return new Settings_1.Settings(settingsImpl);
    };
    ExtensionsImpl.prototype.initializeContextMenuCallbacks = function (contextMenuFunctions) {
        var notificationService = api_shared_js_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        // Unregister function not used since these notifications should be
        // observed for the full lifetime of the extension.
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ContextMenuClick, function (model) {
            // Let through any context menu event, these are already filtered on api-core
            // based on the extension locator.
            return true;
        }, function (event) {
            // Execute the function associated with this context menu ID
            if (contextMenuFunctions) {
                if (!contextMenuFunctions[event.id]) {
                    throw new api_shared_js_2.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, "Received unexpected context menu Id from event: " + event.id);
                }
                contextMenuFunctions[event.id]();
            }
        });
    };
    return ExtensionsImpl;
}());
exports.ExtensionsImpl = ExtensionsImpl;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Impl/LegacyInternalApiDispatcherHolder.js":
/*!**************************************************************************!*\
  !*** ../lib/src/ExtensionsApi/Impl/LegacyInternalApiDispatcherHolder.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
/**
 * LegacyInternalApiDispatcherHolder has been moved (and renamed) from api-internal-contract.
 * It supports running a newer external library against a pre 2019.3 desktop.
 * Starting in 2019.3, we have a merged bootstrap style for both desktop and server.
 * In addition, the alpha checking that is happening here is not necessary in external-api-js
 *  after 2019.3 because that checking happens in api-platform-js (ApiDispatcherTest.ts)
 * TFSID: 1091561 tracks an improvement to this system to make it less complex and tie it directly to
 *  tableau beta release versions.
 * @deprecated
 */
var LegacyInternalApiDispatcherHolder;
(function (LegacyInternalApiDispatcherHolder) {
    /**
     * @param options
     */
    function getDesktopDispatcherPromise(options) {
        if ((!options || typeof options.isAlpha === 'undefined') && !window.__warningIssued) {
            // tslint:disable-next-line:no-console
            console.warn('This is a beta version of the Extensions API. Please upgrade to an official release.');
            window.__warningIssued = true;
        }
        else if (options && options.isAlpha && window.__platformIsOfficialRelease) {
            window.__tableauDesktopDispatcher.then(function (dispatcherFactory) {
                var dispatcher = dispatcherFactory(api_internal_contract_js_1.INTERNAL_CONTRACT_VERSION);
                dispatcher.execute(api_internal_contract_js_1.VerbId.BlockExtension, {}).catch();
            }).catch();
        }
        // this will be undefined if promise is rejected or throws
        return window.__tableauDesktopDispatcher;
    }
    LegacyInternalApiDispatcherHolder.getDesktopDispatcherPromise = getDesktopDispatcherPromise;
    /**
     * @param options
     */
    function hasDesktopApiDispatcherPromise(options) {
        return !!getDesktopDispatcherPromise(options);
    }
    LegacyInternalApiDispatcherHolder.hasDesktopApiDispatcherPromise = hasDesktopApiDispatcherPromise;
})(LegacyInternalApiDispatcherHolder = exports.LegacyInternalApiDispatcherHolder || (exports.LegacyInternalApiDispatcherHolder = {}));


/***/ }),

/***/ "../lib/src/ExtensionsApi/Impl/SettingsImpl.js":
/*!*****************************************************!*\
  !*** ../lib/src/ExtensionsApi/Impl/SettingsImpl.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var SettingsChangedEvent = /** @class */ (function (_super) {
    __extends(SettingsChangedEvent, _super);
    function SettingsChangedEvent(_newSettings) {
        var _this = _super.call(this, api_external_contract_js_1.TableauEventType.SettingsChanged) || this;
        _this._newSettings = _newSettings;
        return _this;
    }
    Object.defineProperty(SettingsChangedEvent.prototype, "newSettings", {
        get: function () {
            return this._newSettings;
        },
        enumerable: true,
        configurable: true
    });
    return SettingsChangedEvent;
}(api_shared_js_1.TableauEvent));
var SettingsImpl = /** @class */ (function () {
    function SettingsImpl(settingsInfo) {
        // Since promises can't be introspected for state, keep a variable that
        // indicates a save is in progress, so that set/erase can't be called during a save.
        this._saveInProgress = false;
        this.initializeSettings(settingsInfo);
    }
    SettingsImpl.prototype.erase = function (key) {
        api_shared_js_1.ErrorHelpers.verifyParameter(key, 'key');
        // Only make a modification if we have the key already
        if (this._currentSettings[key]) {
            this.verifySettingsAreUnlocked();
            delete this._currentSettings[key];
            this._isModified = true;
        }
    };
    SettingsImpl.prototype.get = function (key) {
        api_shared_js_1.ErrorHelpers.verifyParameter(key, 'key');
        return this._currentSettings[key];
    };
    SettingsImpl.prototype.getAll = function () {
        // Returns a mutable copy of the settings
        return Object.assign({}, this._currentSettings);
    };
    Object.defineProperty(SettingsImpl.prototype, "isModified", {
        get: function () {
            return this._isModified;
        },
        enumerable: true,
        configurable: true
    });
    SettingsImpl.prototype.saveAsync = function () {
        var _this = this;
        this.verifySettingsAreUnlocked();
        // Just resolve immediately if settings are unchanged
        if (!this._isModified) {
            return Promise.resolve(this._currentSettings);
        }
        this._saveInProgress = true;
        // Use the settings service to save settings to twb
        var settingsService = api_shared_js_1.ApiServiceRegistry.instance.getService("SettingsService" /* SettingsService */);
        return settingsService.saveSettingsAsync(this._currentSettings).then(function (newSettings) {
            _this._saveInProgress = false;
            _this._isModified = false;
            if (_this._currentSettings === undefined) {
                _this._currentSettings = newSettings;
            }
            else {
                Object.assign(_this._currentSettings, newSettings);
            }
            return newSettings;
        }, function (reason) {
            _this._saveInProgress = false;
            return Promise.reject(reason);
        });
    };
    SettingsImpl.prototype.set = function (key, value) {
        api_shared_js_1.ErrorHelpers.verifyStringParameter(key, 'key'); // Key shouldn't be an empty string.
        api_shared_js_1.ErrorHelpers.verifyParameter(value, 'value'); // Empty string value is allowed.
        this.verifySettingsAreUnlocked();
        this._currentSettings[key] = value;
        this._isModified = true;
    };
    /**
     * Initializes all events relevant to settings object.  This is only a settingsUpdate event currently.
     *
     * @returns {Array<SingleEventManager>} Collection of event managers to pass to an EventListenerManager.
     */
    SettingsImpl.prototype.initializeEvents = function () {
        var _this = this;
        var results = new Array();
        var notificationService;
        try {
            notificationService = api_shared_js_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        }
        catch (e) {
            // If we don't have this service registered, just return
            return results;
        }
        var settingsChangedEvent = new api_shared_js_1.SingleEventManagerImpl(api_external_contract_js_1.TableauEventType.SettingsChanged);
        notificationService.registerHandler(api_internal_contract_js_1.NotificationId.SettingsChanged, function (model) {
            return true;
        }, function (event) {
            _this._currentSettings = event.newSettings;
            settingsChangedEvent.triggerEvent(function () { return new SettingsChangedEvent(event.newSettings); });
        });
        results.push(settingsChangedEvent);
        return results;
    };
    SettingsImpl.prototype.initializeSettings = function (settingsInfo) {
        api_shared_js_1.ErrorHelpers.verifyParameter(settingsInfo, 'settingsInfo');
        api_shared_js_1.ErrorHelpers.verifyParameter(settingsInfo.settingsValues, 'settingsInfo.SettingsValues');
        this._currentSettings = settingsInfo.settingsValues;
        // Reset the isModified flag
        this._isModified = false;
    };
    /**
     * This helper should be called before any local update to this.currentSettings.
     * Checks if a current save call is still in progress and throws an error if so.
     */
    SettingsImpl.prototype.verifySettingsAreUnlocked = function () {
        if (this._saveInProgress) {
            throw new api_shared_js_1.TableauError(api_external_contract_js_1.ErrorCodes.SettingSaveInProgress, SettingsImpl.ASYNC_SAVE_IN_PROGRESS);
        }
    };
    SettingsImpl.ASYNC_SAVE_IN_PROGRESS = 'Async Save is in progress, updating settings is not allowed.';
    return SettingsImpl;
}());
exports.SettingsImpl = SettingsImpl;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Impl/UIImpl.js":
/*!***********************************************!*\
  !*** ../lib/src/ExtensionsApi/Impl/UIImpl.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var UIImpl = /** @class */ (function () {
    function UIImpl() {
    }
    UIImpl.prototype.displayDialogAsync = function (url, payload, options) {
        var uiService = api_shared_js_1.ApiServiceRegistry.instance.getService("UIService" /* UIService */);
        var notificationService = api_shared_js_1.ApiServiceRegistry.instance.getService("notification-service" /* Notification */);
        return new Promise(function (resolve, reject) {
            uiService.displayDialogAsync(url, payload || '', options).then(function () {
                var unregisterFn = notificationService.registerHandler(api_internal_contract_js_1.NotificationId.ExtensionDialogUpdate, function (model) {
                    return true; // Let through any dialog update event
                }, function (event) {
                    if (event.isCloseEvent) {
                        resolve(event.closePayload);
                    }
                    else {
                        reject(new api_shared_js_1.TableauError(api_external_contract_js_1.ErrorCodes.DialogClosedByUser, 'Extension dialog closed by user.'));
                    }
                    unregisterFn();
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    UIImpl.prototype.closeDialog = function (payload) {
        var uiService = api_shared_js_1.ApiServiceRegistry.instance.getService("UIService" /* UIService */);
        uiService.closeDialog(payload);
    };
    return UIImpl;
}());
exports.UIImpl = UIImpl;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Namespaces/DashboardContent.js":
/*!***************************************************************!*\
  !*** ../lib/src/ExtensionsApi/Namespaces/DashboardContent.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external DashboardContent namespace.
 * This does not follow the Impl pattern as DashboardContent is
 * currently just a (single) property bag.
 */
var DashboardContent = /** @class */ (function () {
    function DashboardContent(_dashboard) {
        this._dashboard = _dashboard;
    }
    Object.defineProperty(DashboardContent.prototype, "dashboard", {
        get: function () {
            return this._dashboard;
        },
        enumerable: true,
        configurable: true
    });
    return DashboardContent;
}());
exports.DashboardContent = DashboardContent;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Namespaces/Environment.js":
/*!**********************************************************!*\
  !*** ../lib/src/ExtensionsApi/Namespaces/Environment.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
/**
 * Implementation of the external environment namespace.
 * Environment does not follow the Impl pattern as it is
 * just a property bag.
 */
var Environment = /** @class */ (function () {
    function Environment(extensionEnvironment) {
        this._apiVersion = api_shared_js_1.ApiVersion.Instance && api_shared_js_1.ApiVersion.Instance.formattedValue; // maj.min.fix (no build)
        this._context = api_shared_js_1.InternalToExternalEnumMappings.extensionContext.convert(extensionEnvironment.extensionContext);
        this._language = extensionEnvironment.extensionLanguage;
        this._locale = extensionEnvironment.extensionLocale;
        this._mode = api_shared_js_1.InternalToExternalEnumMappings.extensionMode.convert(extensionEnvironment.extensionMode);
        this._operatingSystem = extensionEnvironment.operatingSystem;
        this._tableauVersion = extensionEnvironment.tableauVersion;
    }
    Object.defineProperty(Environment.prototype, "apiVersion", {
        get: function () {
            return this._apiVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "language", {
        get: function () {
            return this._language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "operatingSystem", {
        get: function () {
            return this._operatingSystem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "tableauVersion", {
        get: function () {
            return this._tableauVersion;
        },
        enumerable: true,
        configurable: true
    });
    return Environment;
}());
exports.Environment = Environment;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Namespaces/Extensions.js":
/*!*********************************************************!*\
  !*** ../lib/src/ExtensionsApi/Namespaces/Extensions.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external Extensions namespace.
 */
var Extensions = /** @class */ (function () {
    function Extensions(extensionImpl) {
        this.extensionImpl = extensionImpl;
        this.extensionImpl = extensionImpl;
    }
    Object.defineProperty(Extensions.prototype, "dashboardContent", {
        get: function () {
            return this.extensionImpl.dashboardContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "environment", {
        get: function () {
            return this.extensionImpl.environment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "settings", {
        get: function () {
            return this.extensionImpl.settings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Extensions.prototype, "ui", {
        get: function () {
            return this.extensionImpl.ui;
        },
        enumerable: true,
        configurable: true
    });
    Extensions.prototype.initializeAsync = function (contextMenuCallbacks) {
        return this.extensionImpl.initializeAsync(false, contextMenuCallbacks).then();
    };
    Extensions.prototype.initializeDialogAsync = function () {
        return this.extensionImpl.initializeAsync(true);
    };
    return Extensions;
}());
exports.Extensions = Extensions;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Namespaces/Settings.js":
/*!*******************************************************!*\
  !*** ../lib/src/ExtensionsApi/Namespaces/Settings.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
/**
 * Implementation of the external settings namespace.
 */
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings(_settingsImpl) {
        var _this = _super.call(this) || this;
        _this._settingsImpl = _settingsImpl;
        // Initialize our event handling for this class
        _this._settingsImpl.initializeEvents().forEach(function (e) { return _this.addNewEventType(e); });
        return _this;
    }
    Settings.prototype.erase = function (key) {
        this._settingsImpl.erase(key);
    };
    Settings.prototype.get = function (key) {
        return this._settingsImpl.get(key);
    };
    Settings.prototype.getAll = function () {
        return this._settingsImpl.getAll();
    };
    Object.defineProperty(Settings.prototype, "isModified", {
        get: function () {
            return this._settingsImpl.isModified;
        },
        enumerable: true,
        configurable: true
    });
    Settings.prototype.saveAsync = function () {
        return this._settingsImpl.saveAsync();
    };
    Settings.prototype.set = function (key, value) {
        this._settingsImpl.set(key, value);
    };
    return Settings;
}(api_shared_js_1.EventListenerManager));
exports.Settings = Settings;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Namespaces/UI.js":
/*!*************************************************!*\
  !*** ../lib/src/ExtensionsApi/Namespaces/UI.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the external UI namespace.
 */
var UI = /** @class */ (function () {
    function UI(_impl) {
        this._impl = _impl;
    }
    UI.prototype.displayDialogAsync = function (url, payload, options) {
        return this._impl.displayDialogAsync(url, payload, options);
    };
    UI.prototype.closeDialog = function (payload) {
        this._impl.closeDialog(payload);
    };
    return UI;
}());
exports.UI = UI;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Services/Impl/InitializationServiceImpl.js":
/*!***************************************************************************!*\
  !*** ../lib/src/ExtensionsApi/Services/Impl/InitializationServiceImpl.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var InitializationServiceImpl = /** @class */ (function (_super) {
    __extends(InitializationServiceImpl, _super);
    function InitializationServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InitializationServiceImpl.prototype, "serviceName", {
        get: function () {
            return "InitializationService" /* InitializationService */;
        },
        enumerable: true,
        configurable: true
    });
    InitializationServiceImpl.prototype.initializeDashboardExtensionsAsync = function (isExtensionDialog, contextMenuIds) {
        var _a;
        var params = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ExtensionContextMenuIds] = contextMenuIds,
            _a[api_internal_contract_js_1.ParameterId.IsExtensionDialog] = isExtensionDialog,
            _a);
        return this.execute(api_internal_contract_js_1.VerbId.InitializeExtension, params).then(function (response) {
            // TODO - Validate return value
            var result = response.result;
            return result;
        });
    };
    return InitializationServiceImpl;
}(api_shared_js_1.ServiceImplBase));
exports.InitializationServiceImpl = InitializationServiceImpl;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Services/Impl/SettingsServiceImpl.js":
/*!*********************************************************************!*\
  !*** ../lib/src/ExtensionsApi/Services/Impl/SettingsServiceImpl.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var api_shared_js_2 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var SettingsServiceImpl = /** @class */ (function (_super) {
    __extends(SettingsServiceImpl, _super);
    function SettingsServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SettingsServiceImpl.prototype, "serviceName", {
        get: function () {
            return "SettingsService" /* SettingsService */;
        },
        enumerable: true,
        configurable: true
    });
    SettingsServiceImpl.prototype.saveSettingsAsync = function (settings) {
        var _a;
        var parameters = (_a = {}, _a[api_internal_contract_js_1.ParameterId.SettingsValues] = settings, _a);
        return this.execute(api_internal_contract_js_1.VerbId.SaveExtensionSettings, parameters).then(function (value) {
            var result = value.result;
            if (!result || !result.settingsValues) {
                throw new api_shared_js_2.TableauError(api_external_contract_js_1.ErrorCodes.InternalError, 'Unexpected error savings settings.');
            }
            return (result.settingsValues);
        });
    };
    return SettingsServiceImpl;
}(api_shared_js_1.ServiceImplBase));
exports.SettingsServiceImpl = SettingsServiceImpl;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Services/Impl/UIServiceImpl.js":
/*!***************************************************************!*\
  !*** ../lib/src/ExtensionsApi/Services/Impl/UIServiceImpl.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_external_contract_js_1 = __webpack_require__(/*! @tableau/api-external-contract-js */ "../../api-external-contract-js/lib/src/ExternalContract.js");
var api_internal_contract_js_1 = __webpack_require__(/*! @tableau/api-internal-contract-js */ "../../api-internal-contract-js/lib/src/JsApiInternalContract.js");
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var DEFAULT_DIALOG_HEIGHT = 400; // in pixels
var DEFAULT_DIALOG_WIDTH = 600; // in pixels
var UIServiceImpl = /** @class */ (function (_super) {
    __extends(UIServiceImpl, _super);
    function UIServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UIServiceImpl.prototype, "serviceName", {
        get: function () {
            return "UIService" /* UIService */;
        },
        enumerable: true,
        configurable: true
    });
    UIServiceImpl.prototype.displayDialogAsync = function (url, payload, options) {
        var _a;
        var parameters = (_a = {},
            _a[api_internal_contract_js_1.ParameterId.ExtensionDialogUrl] = url,
            _a[api_internal_contract_js_1.ParameterId.ExtensionDialogPayload] = payload,
            _a);
        var h = ((options) && (options.height)) ? options.height : DEFAULT_DIALOG_HEIGHT;
        var w = ((options) && (options.width)) ? options.width : DEFAULT_DIALOG_WIDTH;
        // On the platform side, we do something reasonable regardess of whether the passed
        // height and width are too large or too small.  But this likely indicates a developer error,
        // so we throw an error here to help with debugging.
        if (h <= 0 || w <= 0) {
            throw new api_shared_js_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidParameter, 'Size parameters for displayDialogAsync must be positive');
        }
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogH] = h;
        parameters[api_internal_contract_js_1.ParameterId.ExtensionDialogW] = w;
        return this.execute(api_internal_contract_js_1.VerbId.DisplayDialog, parameters).then(function (response) {
            var dialogResult = response.result;
            switch (dialogResult) {
                case api_internal_contract_js_1.ExtensionDialogResult.DialogAlreadyOpen:
                    throw new api_shared_js_1.TableauError(api_external_contract_js_1.ErrorCodes.DialogAlreadyOpen, 'There already exists an open dialog for this extension.');
                case api_internal_contract_js_1.ExtensionDialogResult.InvalidDomain:
                    throw new api_shared_js_1.TableauError(api_external_contract_js_1.ErrorCodes.InvalidDomainDialog, 'The url of an extension dialog must match the domain of the parent extension.');
                default: // Success case
                    return;
            }
        });
    };
    UIServiceImpl.prototype.closeDialog = function (payload) {
        var _a;
        var parameters = (payload) ? (_a = {}, _a[api_internal_contract_js_1.ParameterId.ExtensionDialogPayload] = payload, _a) : {};
        return this.execute(api_internal_contract_js_1.VerbId.CloseDialog, parameters).then(function (response) {
            return;
        });
    };
    return UIServiceImpl;
}(api_shared_js_1.ServiceImplBase));
exports.UIServiceImpl = UIServiceImpl;


/***/ }),

/***/ "../lib/src/ExtensionsApi/Services/RegisterAllExtensionsServices.js":
/*!**************************************************************************!*\
  !*** ../lib/src/ExtensionsApi/Services/RegisterAllExtensionsServices.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_shared_js_1 = __webpack_require__(/*! @tableau/api-shared-js */ "../../api-shared-js/lib/src/ApiShared.js");
var InitializationServiceImpl_1 = __webpack_require__(/*! ./Impl/InitializationServiceImpl */ "../lib/src/ExtensionsApi/Services/Impl/InitializationServiceImpl.js");
var SettingsServiceImpl_1 = __webpack_require__(/*! ./Impl/SettingsServiceImpl */ "../lib/src/ExtensionsApi/Services/Impl/SettingsServiceImpl.js");
var UIServiceImpl_1 = __webpack_require__(/*! ./Impl/UIServiceImpl */ "../lib/src/ExtensionsApi/Services/Impl/UIServiceImpl.js");
function registerAllExtensionsServices(dispatcher) {
    api_shared_js_1.ApiServiceRegistry.instance.registerService(new SettingsServiceImpl_1.SettingsServiceImpl(dispatcher));
    api_shared_js_1.ApiServiceRegistry.instance.registerService(new UIServiceImpl_1.UIServiceImpl(dispatcher));
}
exports.registerAllExtensionsServices = registerAllExtensionsServices;
function registerInitializationExtensionsServices(dispatcher) {
    api_shared_js_1.ApiServiceRegistry.instance.registerService(new InitializationServiceImpl_1.InitializationServiceImpl(dispatcher));
}
exports.registerInitializationExtensionsServices = registerInitializationExtensionsServices;


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });