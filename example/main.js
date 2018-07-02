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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.viewjs = global.viewjs || {}, global.viewjs.utils = {})));
}(this, (function (exports) { 'use strict';

    function callFunc(fn, args) {
        if (args === void 0) {
            args = [];
        }
        var l = fn.length,
            i = -1,
            a1 = args[0],
            a2 = args[1],
            a3 = args[2],
            a4 = args[3];
        switch (args.length) {
            case 0:
                while (++i < l) fn[i].handler.call(fn[i].ctx);
                return;
            case 1:
                while (++i < l) fn[i].handler.call(fn[i].ctx, a1);
                return;
            case 2:
                while (++i < l) fn[i].handler.call(fn[i].ctx, a1, a2);
                return;
            case 3:
                while (++i < l) fn[i].handler.call(fn[i].ctx, a1, a2, a3);
                return;
            case 4:
                while (++i < l) fn[i].handler.call(fn[i].ctx, a1, a2, a3, a4);
                return;
            default:
                while (++i < l) fn[i].handler.apply(fn[i].ctx, args);
                return;
        }
    }
    function result(obj, prop) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (isFunction(obj[prop])) return obj[prop].apply(obj, args);
        return obj[prop];
    }
    function getOption(option, objs) {
        for (var i = 0, ii = objs.length; i < ii; i++) {
            if (isObject(objs[i]) && objs[i][option]) return objs[i][option];
        }
        return undefined;
    }
    /**
     * Trigger an event on an object, if it's an eventemitter,
     * will also call an method "on<EventName>" if it's exists
     *
     * @export
     * @template T
     * @param {T} self
     * @param {string} eventName
     * @param {...any[]} args
     */
    function triggerMethodOn(self, eventName) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var ev = camelcase("on-" + eventName.replace(':', '-'));
        if (self[ev] && typeof self[ev] === 'function') {
            callFunc([{
                handler: self[ev],
                ctx: self
            }], args);
        }
        if (isFunction(self.trigger)) {
            args = [eventName].concat(args);
            callFunc([{
                handler: self.trigger,
                ctx: self
            }], args);
        }
    }
    function isObject(obj) {
        return obj === Object(obj);
    }
    function isFunction(a) {
        return typeof a === 'function';
    }
    function isString(a) {
        return typeof a === 'string';
    }
    function isElement(a) {
        return a instanceof Element;
    }
    function extend(obj) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isObject(obj)) return obj;
        for (var i = 0, ii = args.length; i < ii; i++) {
            var o = args[i];
            if (!isObject(o)) continue;
            for (var k in o) {
                if (has(o, k)) obj[k] = o[k];
            }
        }
        return obj;
    }
    var _has = Object.prototype.hasOwnProperty;
    function has(obj, prop) {
        return _has.call(obj, prop);
    }
    function camelcase(input) {
        return input.toLowerCase().replace(/-(.)/g, function (_, group1) {
            return group1.toUpperCase();
        });
    }
    var idCounter = 0;
    function uniqueId(prefix) {
        if (prefix === void 0) {
            prefix = "";
        }
        return prefix + ++idCounter;
    }
    function indexOf(array, item) {
        for (var i = 0, len = array.length; i < len; i++) if (array[i] === item) return i;
        return -1;
    }

    function equal(a, b) {
        return eq(a, b, [], []);
    }
    var toString = Object.prototype.toString;
    function eq(a, b, aStack, bStack) {
        // Identical objects are equal. `0 === -0`, but they aren't identical.
        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        // A strict comparison is necessary because `null == undefined`.
        if (a == null || b == null) return a === b;
        // Compare `[[Class]]` names.
        var className = toString.call(a);
        if (className != toString.call(b)) return false;
        switch (className) {
            // Strings, numbers, dates, and booleans are compared by value.
            case '[object String]':
                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                // equivalent to `new String("5")`.
                return a == String(b);
            case '[object Number]':
                // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
                // other numeric values.
                return a !== +a ? b !== +b : a === 0 ? 1 / a === 1 / b : a === +b;
            case '[object Date]':
            case '[object Boolean]':
                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                // millisecond representations. Note that invalid dates with millisecond representations
                // of `NaN` are not equivalent.
                return +a == +b;
            // RegExps are compared by their source patterns and flags.
            case '[object RegExp]':
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != 'object' || typeof b != 'object') return false;
        // Assume equality for cyclic structures. The algorithm for detecting cyclic
        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
        var length = aStack.length;
        while (length--) {
            // Linear search. Performance is inversely proportional to the number of
            // unique nested structures.
            if (aStack[length] == a) return bStack[length] == b;
        }
        // Objects with different constructors are not equivalent, but `Object`s
        // from different frames are.
        var aCtor = a.constructor,
            bCtor = b.constructor;
        if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor)) {
            return false;
        }
        // Add the first object to the stack of traversed objects.
        aStack.push(a);
        bStack.push(b);
        var size = 0,
            result$$1 = true;
        // Recursively compare objects and arrays.
        if (className === '[object Array]') {
            // Compare array lengths to determine if a deep comparison is necessary.
            size = a.length;
            result$$1 = size === b.length;
            if (result$$1) {
                // Deep compare the contents, ignoring non-numeric properties.
                while (size--) {
                    if (!(result$$1 = eq(a[size], b[size], aStack, bStack))) break;
                }
            }
        } else {
            // Deep compare objects.
            for (var key in a) {
                if (has(a, key)) {
                    // Count the expected number of properties.
                    size++;
                    // Deep compare each member.
                    if (!(result$$1 = has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
                }
            }
            // Ensure that both objects contain the same number of properties.
            if (result$$1) {
                for (key in b) {
                    if (has(b, key) && !size--) break;
                }
                result$$1 = !size;
            }
        }
        // Remove the first object from the stack of traversed objects.
        aStack.pop();
        bStack.pop();
        return result$$1;
    }

    exports.callFunc = callFunc;
    exports.result = result;
    exports.getOption = getOption;
    exports.triggerMethodOn = triggerMethodOn;
    exports.isObject = isObject;
    exports.isFunction = isFunction;
    exports.isString = isString;
    exports.isElement = isElement;
    exports.extend = extend;
    exports.has = has;
    exports.camelcase = camelcase;
    exports.uniqueId = uniqueId;
    exports.indexOf = indexOf;
    exports.equal = equal;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var tim_1 = __webpack_require__(9);

var ValidationError = function (_Error) {
    _inherits(ValidationError, _Error);

    function ValidationError(message, validator) {
        _classCallCheck(this, ValidationError);

        var _this = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, message));

        _this.validator = validator;
        // TODO: use Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(_this, ValidationError.prototype);
        return _this;
    }

    return ValidationError;
}(Error);

exports.ValidationError = ValidationError;

var ValidationErrors = function (_Error2) {
    _inherits(ValidationErrors, _Error2);

    function ValidationErrors(errors, message) {
        _classCallCheck(this, ValidationErrors);

        var _this2 = _possibleConstructorReturn(this, (ValidationErrors.__proto__ || Object.getPrototypeOf(ValidationErrors)).call(this, message));

        _this2.errors = errors;
        // TODO: use Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(_this2, ValidationErrors.prototype);
        return _this2;
    }

    return ValidationErrors;
}(Error);

exports.ValidationErrors = ValidationErrors;
function createError(v, label) {
    if (typeof label === 'string') {
        label = { label: label };
    }
    var msg = '';
    if (v.message) msg = tim_1.tim(v.message, label);
    return new ValidationError(msg, v);
}
exports.createError = createError;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(0)) :
  typeof define === 'function' && define.amd ? define(['exports', '@viewjs/utils'], factory) :
  (factory((global.viewjs = global.viewjs || {}, global.viewjs.html = {}),global.viewjs.utils));
}(this, (function (exports,utils) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * Get value from HTML Elemement
   *
   * @export
   * @param {HTMLElement} el
   * @param {boolean} [coerce=false]
   * @returns
   */

  function getValue(el) {
    var coerce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var tagName = el.tagName.toLocaleLowerCase(),
        type = el.type,
        isInput = tagName,
        isCheckbox = /checkbox/.test(type),
        isSelect = /select/.test(el.nodeName);

    if (isCheckbox) {
      return Boolean(el.checked);
    } else if (isSelect) {
      if (!coerce) return el.value || '';
      var option = el.options[el.selectedIndex];
      return {
        value: option.value,
        text: option.innerText
      };
    } else if (isInput) {
      var input = el;
      var _type = input.type; // switch (type) {
      //     case "number":
      //         return coerce ? ('valueAsNumber' in input) ? input.valueAsNumber : parseInt(input.value) : input.value;
      //     case "date":
      //         return coerce ? 'valueAsDate' in input ? input.valueAsDate : new Date(input.value) : input.value;
      //     default: return input.value;
      // }

      return input.value;
    }

    return el.textContent;
  }
  /**
   * Set value on an HTMLElmenet
   *
   * @export
   * @param {HTMLElement} el
   * @param {*} [value]
   */

  function setValue(el, value) {
    var tagName = el.tagName.toLocaleLowerCase(),
        type = el.type,
        isInput = tagName,
        isCheckbox = /checkbox/.test(type),
        isRadio = /radio/.test(type),
        isRadioOrCheckbox = isRadio || isCheckbox,
        isSelect = /select/.test(el.nodeName);

    if (value == null) {
      value = "";
    }

    if (isRadioOrCheckbox) {
      if (isRadio) {
        if (String(value) === String(el.value)) {
          el.checked = true;
        }
      } else {
        el.checked = value;
      }
    } else if (String(value) !== getValue(el)) {
      if (isInput || isSelect) {
        el.value = value;
      } else {
        el.innerHTML = value;
      }
    }
  }
  var singleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      slice = Array.prototype.slice;

  function parseHTML(html) {
    var parsed = singleTag.exec(html);

    if (parsed) {
      return document.createElement(parsed[0]);
    }

    var div = document.createElement('div');
    div.innerHTML = html;
    var element = div.firstChild;
    return element;
  }

  var domEvents = new Map();

  var Html =
  /*#__PURE__*/
  function () {
    _createClass(Html, [{
      key: "length",
      get: function get() {
        return this._elements.length;
      }
    }], [{
      key: "query",
      value: function query(_query, context) {
        if (typeof context === 'string') {
          context = document.querySelectorAll(context);
        }

        var html;
        var els;

        if (typeof _query === 'string') {
          if (_query.length > 0 && _query[0] === '<' && _query[_query.length - 1] === ">" && _query.length >= 3) {
            return new Html([parseHTML(_query)]);
          }

          if (context) {
            if (context instanceof HTMLElement) {
              els = slice.call(context.querySelectorAll(_query));
            } else {
              html = new Html(slice.call(context));
              return html.find(_query);
            }
          } else {
            els = slice.call(document.querySelectorAll(_query));
          }
        } else if (_query && _query instanceof Element) {
          els = [_query];
        } else if (_query && _query instanceof NodeList) {
          els = slice.call(_query);
        } else if (_query && Array.isArray(_query)) {
          els = [];

          for (var i = 0, ii = _query.length; i < ii; i++) {
            var e = _query[i];

            if (e instanceof Html) {
              els = els.concat(e._elements);
            } else if (e instanceof Node) {
              els.push(e);
            }
          }
        } else if (_query && _query instanceof Html) {
          return _query;
        }

        return new Html(els);
      }
    }, {
      key: "removeAllEventListeners",
      value: function removeAllEventListeners() {
        domEvents.forEach(function (entries, el) {
          for (var i = 0, ii = entries.length; i < ii; i++) {
            var entry = entries[i];
            el.removeEventListener(entry.event, entry.callback);
          }

          domEvents.delete(el);
        });
      }
    }, {
      key: "_domEvents",
      value: function _domEvents() {
        return domEvents;
      }
    }]);

    function Html(el) {
      _classCallCheck(this, Html);

      if (el && !Array.isArray(el)) el = [el];
      this._elements = el || [];
    }

    _createClass(Html, [{
      key: "get",
      value: function get(n) {
        n = n === undefined || n < 0 ? 0 : n;
        return n >= this.length ? undefined : this._elements[n];
      }
    }, {
      key: "addClass",
      value: function addClass(str) {
        if (!str) return this;
        var split = str.split(' ');
        return this.forEach(function (e) {
          var _e$classList;

          (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(split));
        });
      }
    }, {
      key: "removeClass",
      value: function removeClass(str) {
        if (!str) return this;
        var split = str.split(' ');
        return this.forEach(function (e) {
          var _e$classList2;

          (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(split));
        });
      }
    }, {
      key: "hasClass",
      value: function hasClass(str) {
        var split = str.split(' ');
        return this._elements.reduce(function (p, c) {
          return split.reduce(function (pp, cc) {
            return c.classList.contains(cc);
          }, false);
        }, false);
      }
    }, {
      key: "toggleClass",
      value: function toggleClass(str) {
        if (!str) return this;
        var split = str.split(' ');
        this.forEach(function (m) {
          split.forEach(function (str) {
            if (m.classList.contains(str)) m.classList.remove(str);else m.classList.add(str);
          });
        });
        return this;
      }
    }, {
      key: "attr",
      value: function attr(key, value) {
        var attr;

        if (typeof key === 'string' && value) {
          attr = _defineProperty({}, key, value);
        } else if (typeof key == 'string') {
          if (this.length) return this.get(0).getAttribute(key);
        } else if (utils.isObject(key)) {
          attr = key;
        }

        return this.forEach(function (e) {
          for (var k in attr) {
            e.setAttribute(k, attr[k]);
          }
        });
      }
    }, {
      key: "removeAttr",
      value: function removeAttr(key) {
        return this.forEach(function (e) {
          e.removeAttribute(key);
        });
      }
    }, {
      key: "text",
      value: function text(str) {
        if (arguments.length === 0) {
          return this.length > 0 ? this.get(0).textContent : null;
        }

        return this.forEach(function (e) {
          return e.textContent = str || '';
        });
      }
    }, {
      key: "html",
      value: function html(_html) {
        if (arguments.length === 0) {
          return this.length > 0 ? this.get(0).innerHTML : null;
        }

        return this.forEach(function (e) {
          return e.innerHTML = _html;
        });
      }
    }, {
      key: "val",
      value: function val(_val) {
        if (arguments.length === 0) {
          return this.length > 0 ? getValue(this.get(0)) : null;
        }

        return this.forEach(function (e) {
          return setValue(e, _val);
        });
      }
    }, {
      key: "css",
      value: function css(attr, value) {
        if (arguments.length === 2) {
          return this.forEach(function (e) {
            if (attr in e.style) e.style[attr] = String(value);
          });
        } else {
          return this.forEach(function (e) {
            for (var k in attr) {
              if (k in e.style) e.style[k] = String(attr[k]);
            }
          });
        }
      }
    }, {
      key: "parent",
      value: function parent() {
        var out = [];
        this.forEach(function (e) {
          if (e.parentElement) {
            out.push(e.parentElement);
          }
        });
        return new Html(out);
      }
    }, {
      key: "remove",
      value: function remove() {
        return this.forEach(function (e) {
          if (e.parentElement) e.parentElement.removeChild(e);
        });
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Html(this.map(function (m) {
          return m.cloneNode();
        }));
      }
    }, {
      key: "find",
      value: function find(str) {
        var out = [];
        this.forEach(function (e) {
          out = out.concat(slice.call(e.querySelectorAll(str)));
        });
        return new Html(out);
      }
    }, {
      key: "map",
      value: function map(fn) {
        var out = new Array(this.length);
        this.forEach(function (e, i) {
          out[i] = fn(e, i);
        });
        return out;
      }
    }, {
      key: "forEach",
      value: function forEach(fn) {
        this._elements.forEach(fn);

        return this;
      }
    }, {
      key: "on",
      value: function on(name, callback, useCap) {
        return this.forEach(function (e) {
          var entries = domEvents.get(e);

          if (!entries) {
            entries = [];
            domEvents.set(e, entries);
          }

          e.addEventListener(name, callback, useCap);
          entries.push({
            event: name,
            callback: callback
          });
        });
      }
    }, {
      key: "once",
      value: function once(name, callback, useCap) {
        var _this = this;

        return this.on(name, function (e) {
          callback(e);
          setTimeout(function () {
            return _this.off(name, callback);
          });
        }, useCap);
      }
    }, {
      key: "off",
      value: function off(name, callback) {
        if (!name) {
          return this.forEach(function (el) {
            var entries = domEvents.get(el);

            if (entries) {
              entries.forEach(function (e) {
                el.removeEventListener(e.event, e.callback);
              });
              domEvents.delete(el);
            }
          });
        }

        return this.forEach(function (el) {
          var entries = domEvents.get(el);
          if (!entries) return;
          entries.forEach(function (entry, index) {
            if (entry.event === name && (callback ? callback === entry.callback : true)) {
              domEvents.get(el).splice(index, 1);
            }
          });
          if (!domEvents.get(el).length) domEvents.delete(el);
        });
      } // Iterator

    }, {
      key: Symbol.iterator,
      value: function value() {
        var pointer = 0;
        var components = this._elements;
        var len = components.length;
        return {
          next: function next() {
            var done = pointer >= len;
            return {
              done: done,
              value: done ? null : components[pointer++]
            };
          }
        };
      }
    }]);

    return Html;
  }();

  function html(query, context) {
    return Html.query(query, context);
  }

  //export * from './bindable-view';

  exports.getValue = getValue;
  exports.setValue = setValue;
  exports.html = html;
  exports.Html = Html;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(0)) :
    typeof define === 'function' && define.amd ? define(['exports', '@viewjs/utils'], factory) :
    (factory((global.viewjs = global.viewjs || {}, global.viewjs.view = {}),global.viewjs.utils));
}(this, (function (exports,utils) { 'use strict';

    // Because IE/edge stinks!
    var ElementProto = typeof Element !== 'undefined' && Element.prototype || {};
    var matchesSelector = ElementProto.matches || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector || ElementProto.oMatchesSelector || function (selector) {
        var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
        return !!~utils.indexOf(nodeList, this);
    };
    function matches(elm, selector) {
        return matchesSelector.call(elm, selector);
    }
    var kUIRegExp = /@(?:ui\.)?([a-zA-Z_\-\$#\d]+)/i;
    function normalizeUIKeys(obj, uimap) {
        var o = {},
            k = void 0,
            v = void 0;
        for (k in obj) {
            v = obj[k];
            k = normalizeUIString(k, uimap);
            o[k] = v;
        }
        return o;
    }
    function normalizeUIString(str, uimap) {
        var ms = void 0,
            ui = void 0,
            sel = void 0;
        if ((ms = kUIRegExp.exec(str)) != null) {
            ui = ms[1], sel = uimap[ui];
            if (sel != null) str = str.replace(ms[0], sel);
        }
        return str;
    }

    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var defineProperty = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    };

    var get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);

      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);

        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;

        if (getter === undefined) {
          return undefined;
        }

        return getter.call(receiver);
      }
    };

    var inherits = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };

    var possibleConstructorReturn = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };

    var AbstractView = function () {
        function AbstractView() {
            classCallCheck(this, AbstractView);
        }

        createClass(AbstractView, [{
            key: 'render',
            value: function render() {
                return this;
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                return this;
            }
        }, {
            key: 'el',
            get: function get$$1() {
                return this._el;
            },
            set: function set$$1(el) {
                this.setElement(el);
            }
        }]);
        return AbstractView;
    }();

    var unbubblebles = 'focus blur change'.split(' ');

    var BaseView = function (_AbstractView) {
        inherits(BaseView, _AbstractView);

        function BaseView() {
            var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            classCallCheck(this, BaseView);

            var _this = possibleConstructorReturn(this, (BaseView.__proto__ || Object.getPrototypeOf(BaseView)).call(this));

            _this._options = _options;
            _this.setElement(_options.el, false);
            _this._domEvents = [];
            _this._vid = utils.uniqueId('vid');
            return _this;
        }

        createClass(BaseView, [{
            key: 'delegateEvents',
            value: function delegateEvents(events) {
                var _this2 = this;

                if (!this.el) return;
                this._bindUIElements();
                events = events || utils.result(this, 'events') || {};
                events = normalizeUIKeys(events, this._ui);
                var triggers = this._configureTriggers();
                events = utils.extend({}, events, triggers);
                if (!events) return this;
                //if (!(events || (events = result(this, 'events')))) return this;
                this.undelegateEvents();
                var dels = [];
                for (var key in events) {
                    var methods = events[key];
                    var match = key.match(/^(\S+)\s*(.*)$/);
                    if (!Array.isArray(methods)) methods = [methods];
                    for (var i = 0, ii = methods.length; i < ii; i++) {
                        var method = methods[i];
                        if (typeof method !== 'function') method = this[method];
                        // Set delegates immediately and defer event on this.el
                        var boundFn = method.bind(this); // bind(<Function>method, this);
                        if (match[2]) {
                            this.delegate(match[1], match[2], boundFn);
                        } else {
                            dels.push([match[1], boundFn]);
                        }
                    }
                }
                dels.forEach(function (d) {
                    _this2.delegate(d[0], d[1]);
                });
                return this;
            }
        }, {
            key: 'undelegateEvents',
            value: function undelegateEvents() {
                if (!this.el) return this;
                this._unbindUIElements();
                if (this.el) {
                    for (var i = 0, len = this._domEvents.length; i < len; i++) {
                        var item = this._domEvents[i];
                        this.el.removeEventListener(item.eventName, item.handler);
                    }
                    this._domEvents.length = 0;
                }
                return this;
            }
        }, {
            key: 'delegate',
            value: function delegate(eventName, selector, listener) {
                if (!this.el) return this;
                if (typeof selector === 'function') {
                    listener = selector;
                    selector = undefined;
                }
                var root = this.el;
                var handler = selector ? function (e) {
                    var node = e.target || e.srcElement;
                    // Already handled
                    if (e.delegateTarget) return;
                    for (; node && node != root; node = node.parentNode) {
                        if (node && matches(node, selector)) {
                            e.delegateTarget = node;
                            listener(e);
                        }
                    }
                } : function (e) {
                    if (e.delegateTarget) return;
                    listener(e);
                };
                var useCap = !!~unbubblebles.indexOf(eventName) && selector != null;
                this.el.addEventListener(eventName, handler, useCap);
                this._domEvents.push({ eventName: eventName, handler: handler, listener: listener, selector: selector });
                return handler;
            }
        }, {
            key: 'undelegate',
            value: function undelegate(eventName, selector, listener) {
                if (!this.el) return this;
                if (typeof selector === 'function') {
                    listener = selector;
                    selector = undefined;
                }
                if (this.el) {
                    var handlers = this._domEvents.slice();
                    for (var i = 0, len = handlers.length; i < len; i++) {
                        var item = handlers[i];
                        var match = item.eventName === eventName && (listener ? item.listener === listener : true) && (selector ? item.selector === selector : true);
                        if (!match) continue;
                        this.el.removeEventListener(item.eventName, item.handler);
                        this._domEvents.splice(utils.indexOf(handlers, item), 1);
                    }
                }
                return this;
            }
        }, {
            key: 'render',
            value: function render() {
                this.undelegateEvents();
                this.delegateEvents();
                return this;
            }
        }, {
            key: 'setElement',
            value: function setElement(el) {
                var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                if (trigger) this.undelegateEvents();
                if (this.el && this.options.attachId) {
                    this.el.removeAttribute('data-vid');
                }
                this._el = el;
                if (trigger) this.delegateEvents();
                if (this.el && this.options.attachId) {
                    this.el.setAttribute('data-vid', this.vid);
                }
                return this;
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.undelegateEvents();
                if (this.el && this.options.attachId) {
                    this.el.removeAttribute('data-vid');
                }
                get(BaseView.prototype.__proto__ || Object.getPrototypeOf(BaseView.prototype), 'destroy', this).call(this);
                return this;
            }
        }, {
            key: '_bindUIElements',
            value: function _bindUIElements() {
                var _this3 = this;

                var ui = this.ui;
                if (!ui) return;
                if (!this._ui) {
                    this._ui = ui;
                }
                ui = this._ui;
                this.ui = {};
                Object.keys(ui).forEach(function (k) {
                    var elm = _this3.el.querySelectorAll(ui[k]);
                    if (elm && elm.length) {
                        // unwrap if it's a nodelist.
                        if (elm instanceof NodeList) {
                            elm = elm[0];
                        }
                        _this3.ui[k] = elm;
                    } else {
                    }
                });
            }
        }, {
            key: '_unbindUIElements',
            value: function _unbindUIElements() {}
        }, {
            key: '_configureTriggers',
            value: function _configureTriggers() {
                var triggers = this.triggers || {};
                triggers = normalizeUIKeys(triggers, this._ui);
                // Configure the triggers, prevent default
                // action and stop propagation of DOM events
                var events = {},
                    val = void 0,
                    key = void 0;
                for (key in triggers) {
                    val = triggers[key];
                    events[key] = this._buildViewTrigger(val);
                }
                return events;
            }
        }, {
            key: '_buildViewTrigger',
            value: function _buildViewTrigger(triggerDef) {
                var _this4 = this;

                if (typeof triggerDef === 'string') triggerDef = { event: triggerDef };
                var options = utils.extend({
                    preventDefault: true,
                    stopPropagation: true
                }, triggerDef);
                return function (e) {
                    if (e) {
                        if (e.preventDefault && options.preventDefault) {
                            e.preventDefault();
                        }
                        if (e.stopPropagation && options.stopPropagation) {
                            e.stopPropagation();
                        }
                    }
                    utils.triggerMethodOn(_this4, options.event, {
                        view: _this4
                    }, e);
                };
            }
        }, {
            key: 'vid',
            get: function get$$1() {
                return this._vid;
            }
        }, {
            key: 'options',
            get: function get$$1() {
                return this._options;
            }
        }], [{
            key: 'find',
            value: function find(selector, context) {
                return context.querySelectorAll(selector);
            }
        }]);
        return BaseView;
    }(AbstractView);

    var View = function (_BaseView) {
        inherits(View, _BaseView);

        function View() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { attachId: true };
            classCallCheck(this, View);
            return possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, options));
        }

        return View;
    }(BaseView);

    exports.Invoker = {
        get: function get(V) {
            return Reflect.construct(V, []);
        }
    };
    function setInvoker(i) {
        exports.Invoker = i;
    }

    function attributes(attrs) {
        return function (target) {
            utils.extend(target.prototype, attrs);
        };
    }
    function event(eventName, selector) {
        return function (target, property, desc) {
            if (!desc) throw new Error('no description');
            if (typeof desc.value !== 'function') {
                throw new TypeError('must be a function');
            }
            var key = eventName + ' ' + selector;
            if (target.events && utils.has(target.events, key)) {
                var old = target.events[key];
                if (!Array.isArray(old)) old = [old];
                old.push(property);
                target.events[key] = old;
            } else {
                target.events = utils.extend(target.events || {}, defineProperty({}, key, property));
            }
        };
    }
    (function (event) {
        function click(selector) {
            return event('click', selector);
        }
        event.click = click;
        function change(selector) {
            return event('change', selector);
        }
        event.change = change;
    })(event || (event = {}));
    /**
     * Mount a view on the target and bind matched element
     *
     * @export
     * @param {string} selector
     * @returns
     */
    function attach(selector) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return function (target, prop) {
            var View = Reflect.getOwnMetadata("design:type", target, prop);
            if (!View) throw new Error('design:type does not exists for prop \'' + prop + '\' on \'' + target + '\'');
            if (!target.views) target.views = {};
            target.views[prop] = {
                selector: selector,
                view: View,
                optional: typeof options.optional !== 'boolean' ? false : options.optional
            };
        };
    }

    var Controller = function (_AbstractView) {
        inherits(Controller, _AbstractView);

        function Controller() {
            classCallCheck(this, Controller);
            return possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).apply(this, arguments));
        }

        createClass(Controller, [{
            key: 'setElement',
            value: function setElement(el) {
                this._el = el;
                return this;
            }
        }]);
        return Controller;
    }(AbstractView);

    function withAttachedViews(Base) {
        return function (_Base) {
            inherits(_class, _Base);

            function _class() {
                var _ref;

                classCallCheck(this, _class);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var _this = possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

                if (_this.views) _this._bindViews(_this.views);
                return _this;
            }

            createClass(_class, [{
                key: 'render',
                value: function render() {
                    get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'render', this).call(this);
                    this._renderViews(this.views);
                    return this;
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    if (this.views) {
                        this._unbindViews(this.views);
                    }
                    return get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'destroy', this).call(this);
                }
            }, {
                key: '_bindViews',
                value: function _bindViews(views) {
                    var o = void 0;
                    for (var key in views) {
                        o = views[key];
                        var view = exports.Invoker.get(o.view);
                        this[key] = view;
                    }
                }
            }, {
                key: '_unbindViews',
                value: function _unbindViews(views) {
                    var self = this;
                    for (var key in views) {
                        if (self[key] && self[key] instanceof BaseView) {
                            self[key].destroy();
                            self[key] = void 0;
                        }
                    }
                }
            }, {
                key: '_renderViews',
                value: function _renderViews(views) {
                    var el = void 0,
                        o = void 0;
                    for (var key in views) {
                        o = views[key];
                        var sel = normalizeUIString(o.selector, this._ui || {});
                        el = this.el.querySelector(sel);
                        if (!el && !o.optional) throw new ReferenceError('selector "' + sel + '" for view ' + o.view.name + ' not found in dom');
                        // No element - return!
                        if (!el) return;
                        var view = this[key];
                        if (!view) throw new ReferenceError('view "' + o.view.name + '" not mount');
                        view.el = el;
                        view.render();
                    }
                }
            }]);
            return _class;
        }(Base);
    }

    function withElement(Base) {
        return function (_Base) {
            inherits(_class, _Base);

            function _class() {
                var _ref;

                classCallCheck(this, _class);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var _this = possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

                if (!_this.el) _this._ensureElement();
                return _this;
            }

            createClass(_class, [{
                key: '_ensureElement',
                value: function _ensureElement() {
                    if (this.el) return;
                    var tagName = utils.getOption('tagName', [this.options, this]) || 'div',
                        className = utils.getOption('className', [this.options, this]),
                        attr = utils.getOption('attributes', [this.options, this]),
                        el = document.createElement(tagName);
                    if (className) {
                        // IE < 11 does not support multiple arguments in add/remove
                        className.split(' ').map(function (m) {
                            return m.trim();
                        }).forEach(function (cl) {
                            return el.classList.add(cl);
                        });
                    }
                    if (attr) {
                        for (var key in attr) {
                            el.setAttribute(key, attr[key]);
                        }
                    }
                    this.el = el;
                }
            }, {
                key: 'remove',
                value: function remove() {
                    if (this.el && this.el.parentNode) {
                        if (typeof this.undelegateEvents === 'function') this.undelegateEvents();
                        this.el.parentNode.removeChild(this.el);
                        this.el = void 0;
                    }
                    return this;
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'destroy', this).call(this);
                    if (this.el && this.__created) {
                        this.remove();
                    }
                    return this;
                }
            }]);
            return _class;
        }(Base);
    }

    function withTemplate(Base) {
        return function (_Base) {
            inherits(_class, _Base);

            function _class() {
                classCallCheck(this, _class);
                return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            createClass(_class, [{
                key: 'getTemplateData',
                value: function getTemplateData() {
                    var data = utils.result(this, 'model') || {};
                    return data;
                }
            }, {
                key: 'render',
                value: function render() {
                    if (!this.el) return this;
                    if (utils.isFunction(this.undelegateEvents)) this.undelegateEvents();
                    this.renderTemplate();
                    return get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'render', this).call(this);
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    var data = this.getTemplateData();
                    try {
                        var template = utils.result(this, 'template', data);
                        if (template && this.el) this.el.innerHTML = '';
                    } catch (e) {}
                    return get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'destroy', this).call(this);
                }
            }, {
                key: 'renderTemplate',
                value: function renderTemplate() {
                    if (!this.el) return;
                    var data = this.getTemplateData();
                    var template = utils.result(this, 'template', data);
                    if (!template) return;
                    if (utils.isString(template)) this.el.innerHTML = template;else if (utils.isElement(template)) {
                        this.el.appendChild(template);
                    } else {
                        this.el.innerHTML = '';
                    }
                }
            }]);
            return _class;
        }(Base);
    }

    exports.View = View;
    exports.setInvoker = setInvoker;
    exports.attributes = attributes;
    exports.event = event;
    exports.attach = attach;
    exports.BaseView = BaseView;
    exports.matches = matches;
    exports.normalizeUIKeys = normalizeUIKeys;
    exports.normalizeUIString = normalizeUIString;
    exports.AbstractView = AbstractView;
    exports.Controller = Controller;
    exports.withAttachedViews = withAttachedViews;
    exports.withElement = withElement;
    exports.withTemplate = withTemplate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(1);
var view_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
function withValidation(Base) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { event: 'change' };

    function validation_wrap(self, v) {
        return function (e) {
            var target = e.delegateTarget || e.target;
            if (!target) throw new TypeError('no target');
            try {
                v.validate(html_1.getValue(target));
                if (typeof this.clearValidationError === 'function') {
                    this.clearValidationError(target);
                }
            } catch (e) {
                if (typeof this.setValidationError === 'function') {
                    this.setValidationError(target, e);
                }
            }
            utils_1.triggerMethodOn(this, 'change:value');
        }.bind(self);
    }
    return function (_Base) {
        _inherits(_class, _Base);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "render",
            value: function render() {
                var _this2 = this;

                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "render", this).call(this);
                var v = this._getValidations();
                for (var key in v) {
                    var wrapper = validation_wrap(this, v[key]);
                    this.delegate(options.event, key, wrapper);
                    if (options.event !== 'change') this.delegate('change', wrapper);
                    //this.delegate(options.event, key, validation_wrap(this, v[key]));
                    this.delegate('blur', key, function (e) {
                        var target = e.delegateTarget,
                            value = html_1.getValue(target);
                        if (!value) _this2.clearValidationError(target);
                    });
                }
                return this;
            }
        }, {
            key: "setValidationError",
            value: function setValidationError() {}
        }, {
            key: "clearValidationError",
            value: function clearValidationError() {}
        }, {
            key: "validate",
            value: function validate() {
                var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                var v = this._getValidations(),
                    errors = [];
                for (var key in v) {
                    var el = this.el.querySelector(key);
                    try {
                        v[key].validate(html_1.getValue(el));
                        if (!silent) this.clearValidationError(el);
                    } catch (e) {
                        if (!silent) this.setValidationError(el, e);
                        e.errors.forEach(function (m) {
                            return errors.push(e);
                        });
                    }
                }
                if (errors.length) {
                    throw new errors_1.ValidationErrors(errors);
                }
            }
        }, {
            key: "getValue",
            value: function getValue() {
                var v = this._getValidations(),
                    out = {};
                for (var key in v) {
                    var el = this.el.querySelector(key),
                        name = v[key].key() || el.getAttribute('name') || v[key].label() || key;
                    out[name] = html_1.getValue(el);
                    if (out[name] === '') out[name] = null;
                }
                return out;
            }
        }, {
            key: "setValue",
            value: function setValue(input) {
                var v = this._getValidations();
                for (var key in v) {
                    var el = this.el.querySelector(key),
                        name = v[key].key() || el.getAttribute('name') || v[key].label() || key;
                    if (input[name]) {
                        html_1.setValue(el, input[name]);
                    }
                }
            }
        }, {
            key: "clear",
            value: function clear() {
                var v = this._getValidations();
                for (var key in v) {
                    var el = this.el.querySelector(key);
                    html_1.setValue(el, null);
                }
            }
        }, {
            key: "isValid",
            value: function isValid() {
                try {
                    this.validate(true);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        }, {
            key: "clearAllErrors",
            value: function clearAllErrors() {
                var ui = this._ui || this.ui,
                    v = view_1.normalizeUIKeys(this._validations, ui);
                for (var key in v) {
                    var el = this.el.querySelector(key);
                    this.clearValidationError(el);
                }
                return this;
            }
        }, {
            key: "_getValidations",
            value: function _getValidations() {
                var ui = this._ui || this.ui,
                    validations = utils_1.result(this, '_validations') || this.constructor.validations || {},
                    v = view_1.normalizeUIKeys(validations, ui);
                return v;
            }
        }]);

        return _class;
    }(Base);
}
exports.withValidation = withValidation;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(4));
__export(__webpack_require__(1));
__export(__webpack_require__(8));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __webpack_require__(10);
function validations(v) {
    return function (target) {
        target.prototype._validations = v;
    };
}
exports.validations = validations;
(function (validations) {
    function string(key) {
        return new validator_1.StringValidator(key);
    }
    validations.string = string;
})(validations = exports.validations || (exports.validations = {}));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(5);
var view_1 = __webpack_require__(3);
var Main = function (_view_1$withTemplate) {
    _inherits(Main, _view_1$withTemplate);

    function Main() {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));

        _this.template = function () {
            return "\n    <form>\n        <div>\n            <label>Email</label>\n            <input type=\"text\" name=\"email\" />\n        </div>\n        <div>\n            <label>Name</label>\n            <input type=\"text\" name=\"name\" required />\n        </div>\n        <button type=\"submit\">Submit</button>\n    </form>\n    ";
        };
        return _this;
    }

    _createClass(Main, [{
        key: "onSubmitClick",
        value: function onSubmitClick(e) {
            e.preventDefault();
            console.log(this.getValue());
        }
    }, {
        key: "onChangeValue",
        value: function onChangeValue() {
            console.log('change');
        }
    }]);

    return Main;
}(view_1.withTemplate(__1.FormView));
__decorate([view_1.event.click('button[type="submit"]'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], Main.prototype, "onSubmitClick", null);
Main = __decorate([__1.validations({
    '[name="email"]': __1.validations.string().email(),
    '[name="name"]': __1.validations.string().required()
})], Main);
console.log('raorao');
window.onload = function () {
    var main = new Main({ el: document.body });
    main.render();
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(0);
var validation_view_1 = __webpack_require__(4);

var FormView = function (_validation_view_1$wi) {
    _inherits(FormView, _validation_view_1$wi);

    function FormView(options) {
        _classCallCheck(this, FormView);

        return _possibleConstructorReturn(this, (FormView.__proto__ || Object.getPrototypeOf(FormView)).call(this, utils_1.extend({
            errorMessageClass: 'input-message',
            errorClass: 'has-error',
            showErrorMessage: true
        }, options || {})));
    }

    _createClass(FormView, [{
        key: "setValidationError",
        value: function setValidationError(target, errors) {
            if (target != document.activeElement) {
                // Only show new errors in active element
                return;
            }
            var container = target.parentElement;
            if (this.options.showErrorMessage) {
                var msg = container.querySelector('.' + this.options.errorMessageClass);
                var text = this._getErrorMessage(errors);
                if (!msg) {
                    msg = document.createElement('div');
                    msg.classList.add(this.options.errorMessageClass);
                    container.appendChild(msg);
                }
                msg.innerHTML = text;
                msg.classList.remove('hidden');
            }
            container.classList.add(this.options.errorClass);
            utils_1.triggerMethodOn(this, 'valid', false);
        }
    }, {
        key: "clearValidationError",
        value: function clearValidationError(target) {
            var container = target.parentElement;
            var msg = container.querySelector('.' + this.options.errorMessageClass);
            if (msg) {
                msg.innerHTML = '';
                msg.classList.add('hidden');
            }
            container.classList.remove(this.options.errorClass);
            utils_1.triggerMethodOn(this, 'valid', this.isValid());
        }
    }, {
        key: "_getErrorMessage",
        value: function _getErrorMessage(errors) {
            return errors.errors.map(function (m) {
                return m.message;
            }).join('<br/>');
        }
    }]);

    return FormView;
}(validation_view_1.withValidation(view_1.View, { event: 'keyup' }));

exports.FormView = FormView;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/*!
* Tim (lite)
* github.com/premasagar/tim
*
*/
/**
 * This is used by the validator, for interpolating in errors messages
 */
exports.tim = function () {
    "use strict";

    var start = "{{",
        end = "}}",
        path = "[a-z0-9_$][\\.a-z0-9_]*",
        // e.g. config.person.name
    pattern = new RegExp(start + "\\s*(" + path + ")\\s*" + end, "gi"),
        undef;
    return function (template, data) {
        var shouldThrow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        // Merge data into the template string
        return template.replace(pattern, function (tag, token) {
            var path = token.split("."),
                len = path.length,
                lookup = data,
                i = 0;
            for (; i < len; i++) {
                lookup = lookup[path[i]];
                // Property not found
                if (lookup === undef) {
                    if (shouldThrow) throw new Error("tim: '" + path[i] + "' not found in " + tag);
                    return '';
                }
                // Return the required value
                if (i === len - 1) {
                    return lookup;
                }
            }
        });
    };
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var validators_1 = __webpack_require__(11);
var errors_1 = __webpack_require__(1);

var AbstractValidatorCollection = function () {
    function AbstractValidatorCollection(key) {
        _classCallCheck(this, AbstractValidatorCollection);

        this._validators = [];
        this._key = key;
    }

    _createClass(AbstractValidatorCollection, [{
        key: "label",
        value: function label(_label) {
            if (arguments.length == 0) return this._label;
            this._label = _label;
            return this;
        }
    }, {
        key: "key",
        value: function key(_key) {
            if (arguments.length == 0) return this._key;
            this._key = _key;
            return this;
        }
    }, {
        key: "required",
        value: function required(msg) {
            this._required = new validators_1.RequiredValidator(msg);
            return this;
        }
    }, {
        key: "match",
        value: function match(selector, msg) {
            return this._addValidator(new validators_1.MatchValidator(selector, msg));
        }
    }, {
        key: "validate",
        value: function validate(value) {
            if (this._required) {
                if (!this._required.validate(value)) {
                    var e = errors_1.createError(this._required, {
                        label: this._label || '',
                        key: this._key || ''
                    });
                    throw new errors_1.ValidationErrors([e]);
                }
            }
            // Not required, but empty
            if (value == null || typeof value === 'string' && value === '') {
                return;
            }
            var errors = [];
            for (var i = 0, ii = this._validators.length; i < ii; i++) {
                var validator = this._validators[i];
                if (!validator.validate(value)) {
                    errors.push(errors_1.createError(validator, {
                        label: this._label || '',
                        key: this._key || ''
                    }));
                }
            }
            if (errors.length) throw new errors_1.ValidationErrors(errors);
        }
    }, {
        key: "getMessage",
        value: function getMessage() {
            return "";
        }
    }, {
        key: "_addValidator",
        value: function _addValidator(v) {
            this._validators.push(v);
            return this;
        }
    }, {
        key: "message",
        get: function get() {
            return this.getMessage();
        }
    }]);

    return AbstractValidatorCollection;
}();

exports.AbstractValidatorCollection = AbstractValidatorCollection;

var StringValidator = function (_AbstractValidatorCol) {
    _inherits(StringValidator, _AbstractValidatorCol);

    function StringValidator() {
        _classCallCheck(this, StringValidator);

        return _possibleConstructorReturn(this, (StringValidator.__proto__ || Object.getPrototypeOf(StringValidator)).apply(this, arguments));
    }

    _createClass(StringValidator, [{
        key: "email",
        value: function email(msg) {
            return this._addValidator(new validators_1.EmailValidator(msg));
        }
    }, {
        key: "reqexp",
        value: function reqexp(req, msg) {
            return this._addValidator(new validators_1.RegexValidator(msg, req));
        }
    }, {
        key: "min",
        value: function min(len, msg) {
            return this._addValidator(new validators_1.MinLengthValidator(len, msg));
        }
    }, {
        key: "max",
        value: function max(len, msg) {
            return this._addValidator(new validators_1.MaxLengthValidator(len, msg));
        }
    }]);

    return StringValidator;
}(AbstractValidatorCollection);

exports.StringValidator = StringValidator;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(0);

var AbstractValidator = function AbstractValidator(msg) {
    _classCallCheck(this, AbstractValidator);

    if (msg) this.message = msg;
};

exports.AbstractValidator = AbstractValidator;

var RequiredValidator = function (_AbstractValidator) {
    _inherits(RequiredValidator, _AbstractValidator);

    _createClass(RequiredValidator, [{
        key: "validate",
        value: function validate(value) {
            if (value === null || value === void 0) return false;
            if (typeof value === 'string' && value == '') return false;
            return true;
        }
    }]);

    function RequiredValidator() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "{{label}} is missing";

        _classCallCheck(this, RequiredValidator);

        return _possibleConstructorReturn(this, (RequiredValidator.__proto__ || Object.getPrototypeOf(RequiredValidator)).call(this, msg));
    }

    return RequiredValidator;
}(AbstractValidator);

exports.RequiredValidator = RequiredValidator;

var RegexValidator = function (_AbstractValidator2) {
    _inherits(RegexValidator, _AbstractValidator2);

    function RegexValidator() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "{{label}} is invalid";
        var regex = arguments[1];

        _classCallCheck(this, RegexValidator);

        var _this2 = _possibleConstructorReturn(this, (RegexValidator.__proto__ || Object.getPrototypeOf(RegexValidator)).call(this, msg));

        _this2.regex = regex;
        return _this2;
    }

    _createClass(RegexValidator, [{
        key: "validate",
        value: function validate(value) {
            return this.regex.test(String(value));
        }
    }]);

    return RegexValidator;
}(AbstractValidator);

exports.RegexValidator = RegexValidator;

var EmailValidator = function (_RegexValidator) {
    _inherits(EmailValidator, _RegexValidator);

    function EmailValidator() {
        var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "{{label}} is not a valid email addresss";

        _classCallCheck(this, EmailValidator);

        var _this3 = _possibleConstructorReturn(this, (EmailValidator.__proto__ || Object.getPrototypeOf(EmailValidator)).call(this, msg));

        _this3.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return _this3;
    }

    return EmailValidator;
}(RegexValidator);

exports.EmailValidator = EmailValidator;

var MinLengthValidator = function (_AbstractValidator3) {
    _inherits(MinLengthValidator, _AbstractValidator3);

    function MinLengthValidator(n, msg) {
        _classCallCheck(this, MinLengthValidator);

        var _this4 = _possibleConstructorReturn(this, (MinLengthValidator.__proto__ || Object.getPrototypeOf(MinLengthValidator)).call(this, msg));

        _this4.len = n;
        return _this4;
    }

    _createClass(MinLengthValidator, [{
        key: "validate",
        value: function validate(value) {
            if (typeof value === 'string') {
                return value.length >= this.len;
            } else if (typeof value === 'number') {
                return value >= this.len;
            }
            return false;
        }
    }]);

    return MinLengthValidator;
}(AbstractValidator);

exports.MinLengthValidator = MinLengthValidator;

var MaxLengthValidator = function (_AbstractValidator4) {
    _inherits(MaxLengthValidator, _AbstractValidator4);

    function MaxLengthValidator(n, msg) {
        _classCallCheck(this, MaxLengthValidator);

        var _this5 = _possibleConstructorReturn(this, (MaxLengthValidator.__proto__ || Object.getPrototypeOf(MaxLengthValidator)).call(this, msg));

        _this5.len = n;
        return _this5;
    }

    _createClass(MaxLengthValidator, [{
        key: "validate",
        value: function validate(value) {
            if (typeof value === 'string') {
                return value.length <= this.len;
            } else if (typeof value === 'number') {
                return value <= this.len;
            }
            return false;
        }
    }]);

    return MaxLengthValidator;
}(AbstractValidator);

exports.MaxLengthValidator = MaxLengthValidator;

var MatchValidator = function (_AbstractValidator5) {
    _inherits(MatchValidator, _AbstractValidator5);

    function MatchValidator(selector, msg) {
        _classCallCheck(this, MatchValidator);

        var _this6 = _possibleConstructorReturn(this, (MatchValidator.__proto__ || Object.getPrototypeOf(MatchValidator)).call(this, msg));

        _this6.selector = selector;
        return _this6;
    }

    _createClass(MatchValidator, [{
        key: "validate",
        value: function validate(value) {
            var el = document.querySelector(this.selector);
            if (!el) {
                throw new TypeError("element with selector: \"" + this.selector + "\" not found in dom");
            }
            var otherValue = html_1.getValue(el);
            return utils_1.equal(value, otherValue);
        }
    }]);

    return MatchValidator;
}(AbstractValidator);

exports.MatchValidator = MatchValidator;

/***/ })
/******/ ]);