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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var toConsumableArray = function (arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      } else {
        return Array.from(arr);
      }
    };

    // Because IE/edge stinks!
    var ElementProto = typeof Element !== 'undefined' && Element.prototype || {};
    var matchesSelector = ElementProto.matches || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector || ElementProto.oMatchesSelector || function (selector) {
        var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
        return !!~indexOf(nodeList, this);
    };
    function matches(elm, selector) {
        return matchesSelector.call(elm, selector);
    }
    function getGlobal() {
        return Function('return this')();
    }
    function callFunc(fn) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var l = fn.length,
            i = -1,
            a1 = args[0],
            a2 = args[1],
            a3 = args[2],
            a4 = args[3],
            a5 = args[4];
        switch (args.length) {
            case 0:
                while (++i < l) {
                    fn[i].handler.call(fn[i].ctx);
                }return;
            case 1:
                while (++i < l) {
                    fn[i].handler.call(fn[i].ctx, a1);
                }return;
            case 2:
                while (++i < l) {
                    fn[i].handler.call(fn[i].ctx, a1, a2);
                }return;
            case 3:
                while (++i < l) {
                    fn[i].handler.call(fn[i].ctx, a1, a2, a3);
                }return;
            case 4:
                while (++i < l) {
                    fn[i].handler.call(fn[i].ctx, a1, a2, a3, a4);
                }return;
            case 5:
                while (++i < l) {
                    fn[i].handler.call(fn[i].ctx, a1, a2, a3, a4, a5);
                }return;
            default:
                while (++i < l) {
                    fn[i].handler.apply(fn[i].ctx, args);
                }return;
        }
    }
    function callFuncCtx(fn) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var ctx = arguments[2];

        if (!Array.isArray(fn)) fn = [fn];
        var l = fn.length,
            i = -1,
            a1 = args[0],
            a2 = args[1],
            a3 = args[2],
            a4 = args[3],
            a5 = args[4];
        switch (args.length) {
            case 0:
                while (++i < l) {
                    fn[i].call(ctx);
                }return;
            case 1:
                while (++i < l) {
                    fn[i].call(ctx, a1);
                }return;
            case 2:
                while (++i < l) {
                    fn[i].call(ctx, a1, a2);
                }return;
            case 3:
                while (++i < l) {
                    fn[i].call(ctx, a1, a2, a3);
                }return;
            case 4:
                while (++i < l) {
                    fn[i].call(ctx, a1, a2, a3, a4);
                }return;
            case 5:
                while (++i < l) {
                    fn[i].call(ctx, a1, a2, a3, a4, a5);
                }return;
            default:
                while (++i < l) {
                    fn[i].apply(ctx, args);
                }return;
        }
    }
    function result(obj, prop) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
        }

        if (isFunction(obj[prop])) return obj[prop].apply(obj, args);
        return obj[prop];
    }
    function getOption(option, objs) {
        var resolve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        for (var i = 0, ii = objs.length; i < ii; i++) {
            if (isObjectLike(objs[i]) && has(objs[i], option)) {
                return resolve ? result(objs[i], option) : objs[i][option];
            }
        }
        return void 0;
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
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
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
    function isObjectLike(val) {
        return val === Object(val);
    }
    function isObject(val) {
        return val != null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && Array.isArray(val) === false;
    }
    function isObjectObject(o) {
        return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
    }
    function isPlainObject(o) {
        var ctor, prot;
        if (isObjectObject(o) === false) return false;
        // If has modified constructor
        ctor = o.constructor;
        if (typeof ctor !== 'function') return false;
        // If has modified prototype
        prot = ctor.prototype;
        if (isObjectObject(prot) === false) return false;
        // If constructor does not have an Object-specific method
        if (prot.hasOwnProperty('isPrototypeOf') === false) {
            return false;
        }
        // Most likely a plain Object
        return true;
    }
    function isFunction(a) {
        return typeof a === 'function';
    }
    function isConstructor(a) {
        try {
            Reflect.construct(String, [], a);
        } catch (e) {
            return false;
        }
        return true;
    }
    function isString(a) {
        return typeof a === 'string';
    }
    function isElement(input) {
        if (!input) return false;else if (input instanceof Element) return true;
        return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === Node.ELEMENT_NODE && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    }
    function isNumber(num) {
        return typeof num === 'number';
    }
    function isNumeric(num) {
        if (typeof num === 'number') {
            return num - num === 0;
        }
        if (typeof num === 'string' && num.trim() !== '') {
            return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
        }
        return false;
    }
    function extend(obj) {
        if (!isObject(obj)) return obj;

        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        for (var i = 0, ii = args.length; i < ii; i++) {
            var o = args[i];
            if (!isObject(o)) continue;
            for (var k in o) {
                if (has(o, k)) obj[k] = o[k];
            }
        }
        return obj;
    }
    var _has = Object.prototype.hasOwnProperty,
        _slice = Array.prototype.slice;
    function has(obj, prop) {
        return _has.call(obj, prop);
    }
    function slice(obj, start, len) {
        return _slice.call(obj, start, len);
    }
    function camelcase(input) {
        return input.toLowerCase().replace(/-(.)/g, function (_, group1) {
            return group1.toUpperCase();
        });
    }
    var idCounter = 0;
    function uniqueId() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        return prefix + ++idCounter;
    }
    function indexOf(array, item) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === item) return i;
        }return -1;
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
        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
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

    var defaultInvoker = {
        get: function get(V) {
            if (typeof Reflect !== 'undefined' && typeof Reflect.construct === 'function') return Reflect.construct(V, []);
            return new V();
        }
    };
    exports.Invoker = defaultInvoker;
    function setInvoker(i) {
        if (!i) i = defaultInvoker;
        exports.Invoker = i;
    }

    var Base = function Base() {
      classCallCheck(this, Base);
    };

    var global$1 = getGlobal();
    var debug = global$1.localStorage && global$1.localStorage.getItem("viewjs.debug") != null ? function (namespace) {
        return function () {
            var _console;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var l = args.length;
            if (l && isString(args[0])) {
                args[0] = namespace + ' ' + args[0];
            } else if (l) {
                args.unshift(namespace);
            } else return;
            (_console = console).log.apply(_console, toConsumableArray(args.map(function (m) {
                return isObject(m) && m instanceof Base ? String(m) : m;
            })));
        };
    } : function (_) {
        return function () {};
    };

    exports.matches = matches;
    exports.getGlobal = getGlobal;
    exports.callFunc = callFunc;
    exports.callFuncCtx = callFuncCtx;
    exports.result = result;
    exports.getOption = getOption;
    exports.triggerMethodOn = triggerMethodOn;
    exports.isObjectLike = isObjectLike;
    exports.isObject = isObject;
    exports.isPlainObject = isPlainObject;
    exports.isFunction = isFunction;
    exports.isConstructor = isConstructor;
    exports.isString = isString;
    exports.isElement = isElement;
    exports.isNumber = isNumber;
    exports.isNumeric = isNumeric;
    exports.extend = extend;
    exports.has = has;
    exports.slice = slice;
    exports.camelcase = camelcase;
    exports.uniqueId = uniqueId;
    exports.indexOf = indexOf;
    exports.equal = equal;
    exports.setInvoker = setInvoker;
    exports.debug = debug;
    exports.Base = Base;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(0)) :
    typeof define === 'function' && define.amd ? define(['exports', '@viewjs/utils'], factory) :
    (factory((global.viewjs = global.viewjs || {}, global.viewjs.view = {}),global.viewjs.utils));
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

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
      }

      return object;
    }

    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get(target, property, receiver) {
          var base = _superPropBase(target, property);

          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.get) {
            return desc.get.call(receiver);
          }

          return desc.value;
        };
      }

      return _get(target, property, receiver || target);
    }

    function className(name) {
      return function (target) {
        Object.defineProperty(target, "name", {
          value: name
        });
      };
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

        var key = "".concat(eventName, " ").concat(selector);

        if (target.events && utils.has(target.events, key)) {
          var old = target.events[key];
          if (!Array.isArray(old)) old = [old];
          old.push(property);
          target.events[key] = old;
        } else {
          target.events = utils.extend(target.events || {}, _defineProperty({}, key, property));
        }
      };
    }

    var keyEventDecorator = function keyEventDecorator(eventName, selector, keyCodes) {
      var factory = event(eventName, selector);
      if (keyCodes && !Array.isArray(keyCodes)) keyCodes = [keyCodes];
      return function (target, property, desc) {
        if (!desc) throw new Error('no description');

        if (typeof desc.value !== 'function') {
          throw new TypeError('must be a function');
        }

        if (keyCodes) {
          var oldValue = desc.value;

          desc.value = function (e) {
            if (e && e instanceof KeyboardEvent) {
              if (~keyCodes.indexOf(e.keyCode)) return oldValue.call(this, e);
              return;
            }

            var args = Array.prototype.slice.call(arguments);
            return utils.callFuncCtx(oldValue, args, this);
          };
        }

        return factory(target, property, desc);
      };
    };

    (function (event) {
      function click(selector) {
        return event('click', selector);
      }

      event.click = click;

      function change(selector) {
        return event('change', selector);
      }

      event.change = change;

      function keypress(selector, keyCodes) {
        return keyEventDecorator("keypress", selector, keyCodes);
      }

      event.keypress = keypress;

      function keydown(selector, keyCodes) {
        return keyEventDecorator("keydown", selector, keyCodes);
      }

      event.keydown = keydown;

      function keyup(selector, keyCodes) {
        return keyEventDecorator("keyup", selector, keyCodes);
      }

      event.keyup = keyup;
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
        if (!View) throw new Error("design:type does not exists for prop '".concat(prop, "' on '").concat(target, "'"));
        if (!target.views) target.views = {};
        target.views[prop] = {
          selector: selector,
          view: View,
          optional: typeof options.optional !== 'boolean' ? false : options.optional
        };
      };
    }

    var kUIRegExp = /@(?:ui\.)?([a-zA-Z_\-\$#\d]+)/i;
    function normalizeUIKeys(obj, uimap) {
      var o = {},
          k,
          v;

      for (k in obj) {
        v = obj[k];
        k = normalizeUIString(k, uimap);
        o[k] = v;
      }

      return o;
    }
    function normalizeUIString(str, uimap) {
      var ms, ui, sel;

      if ((ms = kUIRegExp.exec(str)) != null) {
        ui = ms[1], sel = uimap[ui];
        if (sel != null) str = str.replace(ms[0], sel);
      }

      return str;
    }

    var AbstractView =
    /*#__PURE__*/
    function (_Base) {
      _inherits(AbstractView, _Base);

      function AbstractView() {
        _classCallCheck(this, AbstractView);

        return _possibleConstructorReturn(this, _getPrototypeOf(AbstractView).apply(this, arguments));
      }

      _createClass(AbstractView, [{
        key: "render",
        value: function render() {
          return this;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          return this;
        }
      }, {
        key: "el",
        get: function get() {
          return this.getElement();
        },
        set: function set(el) {
          this.setElement(el);
        }
      }]);

      return AbstractView;
    }(utils.Base);

    var debug = utils.debug("View");
    var unbubblebles = 'focus blur change'.split(' ');

    var View =
    /*#__PURE__*/
    function (_AbstractView) {
      _inherits(View, _AbstractView);

      function View(options) {
        var _this;

        _classCallCheck(this, View);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(View).call(this));
        _this._options = utils.extend({}, options || {});
        _this._domEvents = [];
        _this._vid = utils.uniqueId('vid');
        if (_this._options.el) _this.setElement(_this._options.el);
        return _this;
      }

      _createClass(View, [{
        key: "delegateEvents",
        value: function delegateEvents(events) {
          var _this2 = this;

          if (!this.el) return;
          events = events || utils.result(this, 'events') || {};
          debug('%s delegate events %o', this, events);

          this._bindUIElements();

          events = normalizeUIKeys(events, this._ui);

          var triggers = this._configureTriggers();

          events = utils.extend({}, events, triggers);
          if (!events) return this;
          var dels = [];

          for (var key in events) {
            var methods = events[key];
            var match = key.match(/^(\S+)\s*(.*)$/);
            if (!Array.isArray(methods)) methods = [methods];

            for (var i = 0, ii = methods.length; i < ii; i++) {
              var method = methods[i];
              if (typeof method !== 'function') method = this[method]; // Set delegates immediately and defer event on this.el

              var boundFn = method; // (<any>method).bind(this); // bind(<Function>method, this);

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
        key: "undelegateEvents",
        value: function undelegateEvents() {
          if (!this.el) return this;
          debug('%s undelegate events', this);

          this._unbindUIElements();

          if (this.el) {
            for (var i = 0, len = this._domEvents.length; i < len; i++) {
              var item = this._domEvents[i];
              debug("%s remove dom eventlistener for event '%s'", this, item.eventName);
              this.el.removeEventListener(item.eventName, item.handler);
            }

            this._domEvents.length = 0;
          }

          return this;
        }
      }, {
        key: "delegate",
        value: function delegate(eventName, selector, listener) {
          if (!this.el) return this;

          if (typeof selector === 'function') {
            listener = selector;
            selector = undefined;
          }

          var id = utils.uniqueId();

          var domEvent = this._domEvents.find(function (m) {
            return m.eventName == eventName && m.selector == selector;
          });

          if (domEvent) {
            id = domEvent.id;
            domEvent.listeners.push(listener);
            return this;
          } else {
            domEvent = {
              id: id,
              selector: selector,
              listeners: [listener],
              eventName: eventName
            };
          }

          var root = this.el;
          var self = this;
          domEvent.handler = selector ? function (e) {
            var node = e.target || e.srcElement;
            if (e.delegateTarget) return;

            for (; node && node != root; node = node.parentNode) {
              if (node && utils.matches(node, selector)) {
                e.delegateTarget = node;
                debug("%s trigger %i listeners for '%s'-event on selector '%s'", self, domEvent.listeners.length, domEvent.eventName, domEvent.selector);
                domEvent.listeners.forEach(function (listener) {
                  return listener.call(self, e);
                });
              }
            }
          } : function (e) {
            if (e.delegateTarget) return;
            domEvent.listeners.forEach(function (listener) {
              return listener.call(self, e);
            });
          };
          var useCap = !!~unbubblebles.indexOf(eventName) && selector != null;
          debug("%s delegate event '%s'", this, eventName);
          this.el.addEventListener(eventName, domEvent.handler, useCap);

          this._domEvents.push(domEvent);

          return this;
        }
      }, {
        key: "undelegate",
        value: function undelegate(eventName, selector, listener) {
          if (!this.el) return this;

          if (typeof selector === 'function') {
            listener = selector;
            selector = undefined;
          }

          var handlers = this._domEvents.slice();

          for (var i = 0, len = handlers.length; i < len; i++) {
            var item = handlers[i];
            var match = item.eventName === eventName && (listener ? !!~item.listeners.indexOf(listener) : true) && (selector ? item.selector === selector : true);
            if (!match) continue;

            if (listener && item.listeners.length == 1 || !listener) {
              debug("%s remove dom eventlistener for event '%s'", this, item.eventName);
              this.el.removeEventListener(item.eventName, item.handler);

              this._domEvents.splice(utils.indexOf(handlers, item), 1);
            } else {
              debug("%s remove listener for event '%s'", this, item.eventName);
              item.listeners.splice(utils.indexOf(item.listeners, listener), 1);
            }
          }

          return this;
        }
      }, {
        key: "render",
        value: function render() {
          debug("%s render", this);
          this.undelegateEvents();
          this.delegateEvents();
          return this;
        }
      }, {
        key: "setElement",
        value: function setElement(el) {
          this.undelegateEvents();

          if (this.el && this.options.attachId) {
            debug("%s remove view id attribute", this);
            this.el.removeAttribute('data-vid');
          }

          debug("%s set element", this, el);
          this._el = el;

          if (this.el && this.options.attachId) {
            debug("%s set view id attribute", this);
            this.el.setAttribute('data-vid', this.vid);
          }

          return this;
        }
      }, {
        key: "getElement",
        value: function getElement() {
          return this._el;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          debug("%s destroy", this);

          if (this.el && this.options.attachId) {
            this.el.removeAttribute('data-vid');
          }
          this.setElement(void 0);

          _get(_getPrototypeOf(View.prototype), "destroy", this).call(this);

          return this;
        }
      }, {
        key: "_bindUIElements",
        value: function _bindUIElements() {
          var _this3 = this;

          if (!this._ui) {
            return;
          }

          var ui = this._ui;
          Object.keys(ui).forEach(function (k) {
            var elm = _this3.el.querySelectorAll(ui[k]);

            if (elm && elm.length) {
              // unwrap if it's a nodelist.
              if (elm instanceof NodeList) {
                elm = elm[0];
              }

              debug('%s added ui element %s %s', _this3, k, ui[k]);
              _this3.ui[k] = elm;
            } else {
              debug('%s ui element not found ', _this3, k, ui[k]);
            }
          });
        }
      }, {
        key: "_unbindUIElements",
        value: function _unbindUIElements() {
          debug("%s unbind ui elements", this);
          this.ui = {};
        }
      }, {
        key: "_configureTriggers",
        value: function _configureTriggers() {
          var triggers = this.triggers || {};
          triggers = normalizeUIKeys(triggers, this._ui); // Configure the triggers, prevent default
          // action and stop propagation of DOM events

          var events = {},
              val,
              key;

          for (key in triggers) {
            val = triggers[key];
            debug('%s added trigger %s %s', this, key, val);
            events[key] = this._buildViewTrigger(val);
          }

          return events;
        }
      }, {
        key: "_buildViewTrigger",
        value: function _buildViewTrigger(triggerDef) {
          var _this4 = this;

          if (typeof triggerDef === 'string') triggerDef = {
            event: triggerDef
          };
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
        key: "toString",
        value: function toString() {
          return "[".concat(this.name || this.constructor.name, " ").concat(this.vid, "]");
        }
      }, {
        key: "events",
        set: function set(events) {
          if (this._events) {
            this.undelegateEvents();
          }

          this._events = utils.extend({}, events);
        },
        get: function get$$1() {
          return utils.extend({}, this._events || {});
        } // Unique view id

      }, {
        key: "vid",
        get: function get$$1() {
          return this._vid;
        }
      }, {
        key: "options",
        get: function get$$1() {
          return this._options;
        }
      }]);

      return View;
    }(AbstractView);

    var debug$1 = utils.debug("withAtachedViews");
    function withAttachedViews(Base) {
      return (
        /*#__PURE__*/
        function (_Base) {
          _inherits(_class, _Base);

          function _class() {
            var _getPrototypeOf2;

            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
            if (_this.views) _this._bindViews(_this.views);
            return _this;
          }

          _createClass(_class, [{
            key: "render",
            value: function render() {
              _get(_getPrototypeOf(_class.prototype), "render", this).call(this);

              this._renderViews(this.views);

              return this;
            }
          }, {
            key: "destroy",
            value: function destroy() {
              if (this.views) {
                this._unbindViews(this.views);
              }

              return _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);
            }
          }, {
            key: "_bindViews",
            value: function _bindViews(views) {
              var o;

              for (var key in views) {
                o = views[key];
                var view = utils.Invoker.get(o.view);
                this[key] = view;
              }
            }
          }, {
            key: "_unbindViews",
            value: function _unbindViews(views) {
              var self = this;

              for (var key in views) {
                if (self[key] && self[key] instanceof View) {
                  self[key].destroy();
                  delete self[key];
                }
              }
            }
          }, {
            key: "_renderViews",
            value: function _renderViews(views) {
              var el, o;
              debug$1("%s render attached views", this);

              for (var key in views) {
                o = views[key];
                var sel = normalizeUIString(o.selector, this._ui || {});
                el = this.el.querySelector(sel);
                if (!el && !o.optional) throw new ReferenceError("selector \"".concat(sel, "\" for view ").concat(o.view.name, " not found in dom")); // No element - return!

                if (!el) return;
                var view = this[key];
                if (!view) throw new ReferenceError("view \"".concat(o.view.name, "\" not mount"));
                debug$1("%s render atcched view %s", this, view);
                view.el = el;
                view.render();
              }
            }
          }]);

          return _class;
        }(Base)
      );
    }

    function withElement(Base) {
      return (
        /*#__PURE__*/
        function (_Base) {
          _inherits(_class, _Base);

          function _class() {
            var _getPrototypeOf2;

            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
            if (!_this.el) _this._ensureElement();
            return _this;
          }

          _createClass(_class, [{
            key: "_ensureElement",
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

              this.__created = true;
              this.el = el;
            }
          }, {
            key: "remove",
            value: function remove() {
              if (this.__created && this.el && this.el.parentNode) {
                if (typeof this.undelegateEvents === 'function') this.undelegateEvents();
                this.el.parentNode.removeChild(this.el);
                this.el = void 0;
              }

              this.__created = false;
              return this;
            }
          }, {
            key: "destroy",
            value: function destroy() {
              _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);

              this.remove();
              return this;
            }
          }]);

          return _class;
        }(Base)
      );
    }

    var debug$2 = utils.debug("withTemplate");
    function withTemplate(Base) {
      return (
        /*#__PURE__*/
        function (_Base) {
          _inherits(_class, _Base);

          function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
          }

          _createClass(_class, [{
            key: "getTemplateData",
            value: function getTemplateData() {
              var data = utils.result(this, 'model') || {};
              debug$2("%s get template data", this);
              return data;
            }
          }, {
            key: "render",
            value: function render() {
              if (!this.el) return this;
              if (utils.isFunction(this.undelegateEvents)) this.undelegateEvents();
              this.renderTemplate();
              return _get(_getPrototypeOf(_class.prototype), "render", this).call(this);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              var data = this.getTemplateData();

              try {
                var template = utils.result(this, 'template', data);
                if (template && this.el) this.el.innerHTML = '';
              } catch (e) {}

              return _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);
            }
          }, {
            key: "renderTemplate",
            value: function renderTemplate() {
              if (!this.el) return;
              var data = this.getTemplateData();
              var template = utils.result(this, 'template', data);
              if (!template) return;
              debug$2("%s render template", this);
              if (utils.isString(template)) this.el.innerHTML = template;else if (utils.isElement(template)) {
                this.el.appendChild(template);
              } else {
                this.el.innerHTML = '';
              }
            }
          }]);

          return _class;
        }(Base)
      );
    }

    exports.className = className;
    exports.attributes = attributes;
    exports.event = event;
    exports.attach = attach;
    exports.View = View;
    exports.normalizeUIKeys = normalizeUIKeys;
    exports.normalizeUIString = normalizeUIString;
    exports.AbstractView = AbstractView;
    exports.withAttachedViews = withAttachedViews;
    exports.withElement = withElement;
    exports.withTemplate = withTemplate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(0)) :
	typeof define === 'function' && define.amd ? define(['exports', '@viewjs/utils'], factory) :
	(factory((global.viewjs = global.viewjs || {}, global.viewjs.html = {}),global.viewjs.utils));
}(this, (function (exports,utils) { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

var unbubblebles = 'focus blur change'.split(' ');

var domEvents = new Map();
function addEventListener(target, event, callback, useCap, ctx, once) {
  var entries = domEvents.get(target);

  if (!entries) {
    entries = [];
    domEvents.set(target, entries);
  }

  var bound = !ctx ? !once ? void 0 : function (e) {
    callback(e);
    removeEventListener(target, event, bound);
  } : function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(ctx, args);
    if (once) removeEventListener(target, event, bound, ctx);
  };
  target.addEventListener(event, bound || callback, useCap);
  entries.push({
    event: event,
    callback: callback,
    ctx: ctx,
    bound: bound,
    options: useCap,
    once: !!once
  });
}
function removeEventListener(target, event, callback, ctx) {
  var entries = domEvents.get(target) || [];
  entries = entries.filter(function (m) {
    if ((!event || event === m.event) && (!callback || callback === m.callback) && (!ctx || ctx === m.ctx)) {
      target.removeEventListener(m.event, m.bound || m.callback, m.options);
      return false;
    }

    return true;
  });
  if (!entries.length) domEvents.delete(target);else domEvents.set(target, entries);
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
var singleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

function parseHTML(html) {
  var parsed = singleTag.exec(html);

  if (parsed) {
    return [document.createElement(parsed[1])];
  }

  var div = document.createElement('div');
  div.innerHTML = html;
  return utils.slice(div.children);
}

function isArrayLike(item) {
  return Array.isArray(item) || !!item && _typeof(item) === "object" && typeof item.length === "number" && (item.length === 0 || item.length > 0 && item.length - 1 in item);
}

function normalize(query, context) {
  var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (utils.isString(context)) {
    var q = document.querySelector(context);
    if (!q) throw new ReferenceError("could not resolve context " + context);
    context = q;
  }

  if (utils.isString(query)) {
    if (query.length > 0 && query[0] === '<' && query[query.length - 1] === ">" && query.length >= 3) {
      out.push.apply(out, _toConsumableArray(parseHTML(query)));
    } else {
      var o = (context ? context : document).querySelectorAll(query);
      out.push.apply(out, _toConsumableArray(o));
    }
  } else if (utils.isElement(query)) {
    out.push(query);
  } else if (query && query instanceof Html) {
    out.push.apply(out, _toConsumableArray(query));
  } else if (isArrayLike(query)) {
    for (var i = 0, ii = query.length; i < ii; i++) {
      normalize(query[i], context, out);
    }
  }

  return out;
}

var domDelegateEvents = new Map();
var domEvents$1 = new Map();

var Html =
/*#__PURE__*/
function () {
  _createClass(Html, [{
    key: "length",
    get: function get() {
      return this._elements.length;
    }
  }], [{
    key: "removeAllEventListeners",
    value: function removeAllEventListeners() {
      domEvents$1.forEach(function (entries, el) {
        for (var i = 0, ii = entries.length; i < ii; i++) {
          var entry = entries[i];
          el.removeEventListener(entry.event, entry.callback);
        }

        domEvents$1.delete(el);
      });
    }
  }, {
    key: "_domEvents",
    value: function _domEvents() {
      return domEvents$1;
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
      if (utils.isString(attr)) {
        return this.forEach(function (e) {
          if (attr in e.style) e.style[attr] = String(value);
        });
      } else {
        return this.forEach(function (e) {
          for (var k in attr) {
            if (k in e.style) e.style[k] = attr[k] || null;
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
    key: "focus",
    value: function focus() {
      return this.forEach(function (e) {
        e.focus();
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
        out = out.concat(utils.slice(e.querySelectorAll(str)));
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
    key: "filter",
    value: function filter(predicate) {
      var out = new Array(this.length);
      this.forEach(function (e, i) {
        if (predicate(e, i)) out.push(e);
      });
      return new Html(out);
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      this._elements.forEach(fn);

      return this;
    }
  }, {
    key: "on",
    value: function on(name, callback, useCap, ctx) {
      return this.forEach(function (e) {
        addEventListener(e, name, callback, useCap, ctx);
      });
    }
  }, {
    key: "once",
    value: function once(name, callback, useCap, ctx) {
      return this.forEach(function (e) {
        addEventListener(e, name, callback, useCap, ctx, true);
      });
    }
  }, {
    key: "off",
    value: function off(name, callback, ctx) {
      return this.forEach(function (e) {
        removeEventListener(e, name, callback, ctx);
      });
    }
  }, {
    key: "delegate",
    value: function delegate(selector, eventName, listener, ctx) {
      return this.forEach(function (el) {
        var root = el;
        var handler = selector ? function (e) {
          var node = e.target || e.srcElement; // Already handled

          if (e.delegateTarget) return;

          for (; node && node != root; node = node.parentNode) {
            if (node && utils.matches(node, selector)) {
              e.delegateTarget = node;
              listener(e);
            }
          }
        } : function (e) {
          if (e.delegateTarget) return;
          listener(e);
        };
        var useCap = !!~unbubblebles.indexOf(eventName) && selector != null; //debug('%s delegate event %s ', this, eventName);

        el.addEventListener(eventName, handler, useCap);
        domDelegateEvents.set(el, {
          event: eventName,
          handler: handler,
          listener: listener,
          selector: selector
        }); //domDelegateEvents.push({ eventName: eventName, handler: handler, listener: listener, selector: selector });

        return handler;
      });
    }
  }, {
    key: "undelegate",
    value: function undelegate(selector, eventName, listener) {
      return this.forEach(function (el) {
        var item = domDelegateEvents.get(el);
        if (!item) return;
        var match = item.event === eventName && (listener ? item.listener === listener : true) && (selector ? item.selector === selector : true);
        if (!match) return;
        el.removeEventListener(item.event, item.handler);
        domDelegateEvents.delete(el);
      });
    } // Iterator interface

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
  return new Html(normalize(query, context));
}

exports.html = html;
exports.Html = Html;
exports.unbubblebles = unbubblebles;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getValue = getValue;
exports.setValue = setValue;
exports.normalize = normalize;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var tim_1 = __webpack_require__(11);

var ValidationError = function (_Error) {
    _inherits(ValidationError, _Error);

    function ValidationError(message, validator) {
        _classCallCheck(this, ValidationError);

        var _this = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, message));

        _this.validator = validator;
        Object.setPrototypeOf(_this, new.target.prototype);
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
        Object.setPrototypeOf(_this2, new.target.prototype);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(3);
var view_1 = __webpack_require__(1);
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
                    v = view_1.normalizeUIKeys(this.validations, ui);
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
__export(__webpack_require__(8));
__export(__webpack_require__(4));
__export(__webpack_require__(3));
__export(__webpack_require__(10));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(0), __webpack_require__(7), __webpack_require__(1), __webpack_require__(2)) :
    typeof define === 'function' && define.amd ? define(['exports', '@viewjs/utils', '@viewjs/events', '@viewjs/view', '@viewjs/html'], factory) :
    (factory((global.viewjs = global.viewjs || {}, global.viewjs.data = {}),global.viewjs.utils,global.viewjs.events,global.viewjs.view,global.viewjs.html));
}(this, (function (exports,utils,events,view,html) { 'use strict';

    (function (MetaKeys) {
      MetaKeys.Attributes = Symbol("attributes");
      MetaKeys.Models = Symbol("models");
    })(exports.MetaKeys || (exports.MetaKeys = {}));

    function isDestroyable(a) {
      return a && utils.isFunction(a.destroy);
    }

    (function (ModelEvents) {
      ModelEvents.Add = "add";
      ModelEvents.BeforeRemove = "before:remove";
      ModelEvents.Remove = "remove";
      ModelEvents.Clear = "clear";
      ModelEvents.BeforeSort = "before:sort";
      ModelEvents.Sort = "sort";
      ModelEvents.Change = "change";
      ModelEvents.BeforeReset = "before:reset";
      ModelEvents.Reset = "reset";
    })(exports.ModelEvents || (exports.ModelEvents = {}));

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

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
      }

      return object;
    }

    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get(target, property, receiver) {
          var base = _superPropBase(target, property);

          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.get) {
            return desc.get.call(receiver);
          }

          return desc.value;
        };
      }

      return _get(target, property, receiver || target);
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

    var _a;
    function isModel(a) {
      return a && (a instanceof Model || utils.isFunction(a.set) && utils.isFunction(a.get) && utils.isFunction(a.unset) && utils.isFunction(a.clear));
    }

    var Model =
    /*#__PURE__*/
    function (_EventEmitter) {
      _inherits(Model, _EventEmitter);

      function Model(attrs) {
        var _this;

        _classCallCheck(this, Model);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Model).call(this));
        _this[_a] = new Map();

        if (attrs) {
          for (var k in attrs) {
            _this.set(k, attrs[k], {
              silent: true
            });
          }
        }

        return _this;
      }

      _createClass(Model, [{
        key: "set",
        value: function set(key, value, options) {
          var old = this.get(key);

          if (utils.equal(old, value)) {
            return this;
          }

          this[exports.MetaKeys.Attributes].set(key, value);
          if (options && options.silent) return this;
          utils.triggerMethodOn(this, "change:".concat(key), old, value);
          utils.triggerMethodOn(this, 'change', _defineProperty({}, key, value));
          return this;
        }
      }, {
        key: "get",
        value: function get(key) {
          return this[exports.MetaKeys.Attributes].get(key);
        }
      }, {
        key: "has",
        value: function has(key) {
          return this[exports.MetaKeys.Attributes].has(key);
        }
      }, {
        key: "unset",
        value: function unset(key) {
          var t = this.get(key);
          this[exports.MetaKeys.Attributes].delete(key);
          return t;
        }
      }, {
        key: "clear",
        value: function clear() {
          this[exports.MetaKeys.Attributes] = new Map();
          utils.triggerMethodOn(this, 'clear');
          return this;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          var out = {};
          this[exports.MetaKeys.Attributes].forEach(function (value, key) {
            out[key] = value;
          });
          return out;
        }
      }, {
        key: "id",
        get: function get() {
          return this.get(this.constructor.idAttribute);
        }
      }]);

      return Model;
    }(events.EventEmitter);

    _a = exports.MetaKeys.Attributes;
    Model.idAttribute = "id";

    function setter(_, prop) {
      return function $observableSetter(value) {
        return this.set(prop, value);
      };
    }

    function getter(_, prop) {
      return function $observableGetter() {
        return this.get(prop);
      };
    }
    /**
     *
     * @export
     * @template
     * @param {T} target
     * @param {*} prop
     * @param {TypedPropertyDescriptor<U>} [descriptor]
     */


    function property(target, prop, descriptor) {
      descriptor = descriptor || Object.getOwnPropertyDescriptor(target, prop);

      if (!descriptor) {
        descriptor = {
          get: getter(target, prop),
          set: setter(target, prop),
          enumerable: false,
          configurable: false
        };
        Object.defineProperty(target, prop, descriptor);
      } else if (descriptor.set) {
        descriptor.set = function $observableSet(value) {
          return this.set(prop, value);
        };
      }
    }
    function primaryKey(prop) {
      return function (target) {
        target.idAttribute = prop;
      };
    }

    function _event(event, property, target, prop, desc, targetKey) {
      if (!desc) throw new Error('no description');

      if (typeof desc.value !== 'function') {
        throw new TypeError('must be a function');
      }

      var key = event + (property ? ':' + property : '');

      if (target[targetKey] && utils.has(target[targetKey], key)) {
        var old = target[targetKey][key];
        if (!Array.isArray(old)) old = [old];
        old.push(prop);
        target[targetKey][key] = old;
      } else {
        target[targetKey] = utils.extend(target[targetKey] || {}, _defineProperty({}, key, [prop]));
      }
    }

    (function (model) {
      function event(event, property) {
        return function (target, prop, desc) {
          return _event(event, property, target, prop, desc, "modelEvents");
        };
      }

      model.event = event;

      function change(property) {
        return event("change", property);
      }

      model.change = change;
    })(exports.model || (exports.model = {}));

    (function (collection) {
      function event(event, property) {
        return function (target, prop, desc) {
          return _event(event, property, target, prop, desc, "collectionEvents");
        };
      }

      collection.event = event;
      collection.add = event("add");
      collection.remove = event("remove");
    })(exports.collection || (exports.collection = {}));

    function getValue(a, prop) {
      if (isModel(a)) return a.get(prop);else if (utils.isObject(a)) {
        return a[prop];
      }
      return void 0;
    }

    function _sort(a, b, prop) {
      var av = getValue(a, prop),
          bv = getValue(b, prop);
      if (utils.isString(av)) av = av.toUpperCase();
      if (utils.isString(bv)) bv = bv.toUpperCase();
      if (av < bv) return -1;else if (av > bv) return 1;else return 0;
    }

    var ArrayCollection =
    /*#__PURE__*/
    function (_EventEmitter) {
      _inherits(ArrayCollection, _EventEmitter);

      function ArrayCollection() {
        var _this;

        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, ArrayCollection);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrayCollection).call(this));
        _this[exports.MetaKeys.Models] = array;
        return _this;
      }
      /**
       * The length of the array
       *
       * @readonly
       * @type {number}
       * @memberof ArrayCollection
       */


      _createClass(ArrayCollection, [{
        key: "item",

        /**
         * Get item at index
         *
         * @param {number} index
         * @returns {(T | undefined)}
         *
         * @memberof ArrayCollection
         */
        value: function item(index) {
          if (index >= this[exports.MetaKeys.Models].length) return undefined;
          return this[exports.MetaKeys.Models][index];
        }
        /**
         * Push an item and optionally trigger a change event
         *
         * @param {T} m
         * @param {boolean} [trigger=true]
         *
         * @memberof ArrayCollection
         */

      }, {
        key: "push",
        value: function push(m) {
          var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          this[exports.MetaKeys.Models].push(m);
          if (trigger) this.trigger(exports.ModelEvents.Add, m, this[exports.MetaKeys.Models].length - 1);
          return this.length;
        }
        /**
         * Pop a item from the array and optinally trigger a change event
         *
         * @param {boolean} [trigger=true]
         * @returns {(T | undefined)}
         *
         * @memberof ArrayCollection
         */

      }, {
        key: "pop",
        value: function pop() {
          var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var m = this[exports.MetaKeys.Models].pop();
          if (trigger) this.trigger(exports.ModelEvents.Remove, m, this[exports.MetaKeys.Models].length);
          return m;
        }
      }, {
        key: "insert",
        value: function insert(m, index) {
          if (index >= this.length) return;
          this[exports.MetaKeys.Models].splice(index, 0, m);
          this.trigger(exports.ModelEvents.Add, m, index);
        }
      }, {
        key: "indexOf",
        value: function indexOf(m) {
          for (var i = 0, ii = this.length; i < ii; i++) {
            if (this[exports.MetaKeys.Models][i] === m) return i;
          }

          return -1;
        }
      }, {
        key: "removeAtIndex",
        value: function removeAtIndex(index) {
          var m = this.item(index);
          if (!m) return undefined;
          this.trigger(exports.ModelEvents.BeforeRemove, m, index);
          this[exports.MetaKeys.Models].splice(index, 1);
          this.trigger(exports.ModelEvents.Remove, m, index);
          return m;
        }
      }, {
        key: "remove",
        value: function remove(model) {
          var i = -1;

          if (!~(i = this.indexOf(model))) {
            return void 0;
          }
          return this.removeAtIndex(i);
        }
      }, {
        key: "find",
        value: function find(fn) {
          return this[exports.MetaKeys.Models].find(fn);
        }
      }, {
        key: "findIndex",
        value: function findIndex(fn) {
          return this[exports.MetaKeys.Models].findIndex(fn);
        }
      }, {
        key: "sort",
        value: function sort(byComparatorOrProperty) {
          this.trigger(exports.ModelEvents.BeforeSort);

          if (utils.isString(byComparatorOrProperty)) {
            var prop = byComparatorOrProperty;

            byComparatorOrProperty = function byComparatorOrProperty(a, b) {
              return _sort(a, b, prop);
            };
          }

          this[exports.MetaKeys.Models].sort(byComparatorOrProperty);
          this.trigger(exports.ModelEvents.Sort);
        }
        /**
         * Reset the array
         *
         * @param {T[]} [a]
         *
         * @memberof ArrayCollection
         */

      }, {
        key: "reset",
        value: function reset(a) {
          this.trigger(exports.ModelEvents.BeforeReset);
          this[exports.MetaKeys.Models] = a || [];
          this.trigger(exports.ModelEvents.Reset);
        }
      }, {
        key: "filter",
        value: function filter(fn) {
          return Reflect.construct(this.constructor, [this[exports.MetaKeys.Models].filter(fn)]);
        }
      }, {
        key: "map",
        value: function map(fn) {
          return new ArrayCollection(this[exports.MetaKeys.Models].map(fn));
        }
      }, {
        key: "forEach",
        value: function forEach(fn) {
          this.forEach(fn);
          return this;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          for (var i = 0, ii = this[exports.MetaKeys.Models].length; i < ii; i++) {
            if (isDestroyable(this[exports.MetaKeys.Models][i])) this[exports.MetaKeys.Models][i].destroy();
          }

          this[exports.MetaKeys.Models] = [];
        } // Iterator interface

      }, {
        key: (exports.MetaKeys.Models, Symbol.iterator),
        value: function value() {
          var pointer = 0;
          var components = this[exports.MetaKeys.Models];
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
      }, {
        key: "length",
        get: function get() {
          return this[exports.MetaKeys.Models].length;
        }
      }]);

      return ArrayCollection;
    }(events.EventEmitter);

    var ModelCollection =
    /*#__PURE__*/
    function (_ArrayCollection) {
      _inherits(ModelCollection, _ArrayCollection);

      function ModelCollection(models) {
        var _this;

        _classCallCheck(this, ModelCollection);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ModelCollection).call(this));
        _this.Model = Model;

        if (Array.isArray(models)) {
          models.forEach(function (m) {
            return _this.push(m);
          });
        }

        return _this;
      }

      _createClass(ModelCollection, [{
        key: "createModel",
        value: function createModel(o) {
          var model = utils.Invoker.get(this.Model);

          if (o) {
            for (var key in o) {
              model.set(key, o[key]);
            }
          }

          if (!model.has(this.Model.idAttribute)) {
            model.set(this.Model.idAttribute, utils.uniqueId());
          }

          return model;
        }
        /**
         * Push a model to the collection
         *
         * @param {(M | any)} m
         * @param {boolean} [trigger=true]
         * @returns {number}
         * @memberof ModelCollection
         */

      }, {
        key: "push",
        value: function push(m) {
          var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (!(m instanceof this.Model)) {
            if (!utils.isPlainObject(m)) throw new TypeError("invalid type");
            m = this.createModel(m);
          } else if (m instanceof Model && !m.has(this.Model.idAttribute)) {
            m.set(this.Model.idAttribute, utils.uniqueId());
          }

          var found = this.find(function (model) {
            return model.id == m.id;
          });

          if (found && found !== m) {
            var json = m.toJSON();

            for (var k in json) {
              m.set(k, json[k]);
            }

            return this.length;
          } else if (found === m) return this.length;

          return _get(_getPrototypeOf(ModelCollection.prototype), "push", this).call(this, m, trigger);
        }
      }]);

      return ModelCollection;
    }(ArrayCollection);

    var TemplateView =
    /*#__PURE__*/
    function (_withTemplate) {
      _inherits(TemplateView, _withTemplate);

      function TemplateView() {
        var _this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, TemplateView);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateView).call(this, options));

        if (options.template) {
          _this.template = options.template;
        }

        return _this;
      }

      _createClass(TemplateView, [{
        key: "getTemplateData",
        value: function getTemplateData() {
          var model = utils.getOption('model', [this.options, this], true);

          if (model && utils.isFunction(model.toJSON)) {
            return model.toJSON();
          }

          return model;
        }
      }]);

      return TemplateView;
    }(view.withTemplate(view.withElement(view.View)));

    var twoWay = ['input', 'textarea', 'select'],
        keyupTypes = ['text', 'number', 'email'];

    var Binding =
    /*#__PURE__*/
    function (_withEventListener) {
      _inherits(Binding, _withEventListener);

      function Binding(model, prop, element) {
        var _this;

        _classCallCheck(this, Binding);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Binding).call(this));
        _this.model = model;
        _this.prop = prop;
        _this.element = element;
        _this._bounded = void 0;
        _this._setting = false;
        if (events.isEventEmitter(_this.model)) _this.listenTo(_this.model, 'change:' + prop, _this.onModelChanged);
        _this.onElementChanged = _this.onElementChanged.bind(_assertThisInitialized(_assertThisInitialized(_this)));
        var tagName = element.tagName.toLowerCase();

        if (~twoWay.indexOf(tagName)) {
          _this._bounded = 'change';

          if (tagName == 'input' && ~keyupTypes.indexOf(element.getAttribute('type')) || tagName == 'textarea') {
            element.addEventListener('keyup', _this.onElementChanged);
            _this._bounded = 'keyup';
          } else element.addEventListener('change', _this.onElementChanged);
        }

        _this.onModelChanged();

        return _this;
      }

      _createClass(Binding, [{
        key: "onModelChanged",
        value: function onModelChanged() {
          if (this._setting) return;
          this._setting = true;

          if (this._bounded) {
            html.setValue(this.element, this.model.get(this.prop) || '');
          } else {
            this.element.innerText = this.model.get(this.prop) || '';
          }

          this._setting = false;
        }
      }, {
        key: "onElementChanged",
        value: function onElementChanged() {
          if (this._setting) return;
          this._setting = true;
          this.model.set(this.prop, html.getValue(this.element));
          this._setting = false;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.stopListening();
          if (this._bounded && this.element) this.element.removeEventListener(this._bounded, this.onElementChanged);
        }
      }]);

      return Binding;
    }(events.withEventListener(utils.Base));

    function withBindings(Base) {
      return (
        /*#__PURE__*/
        function (_Base) {
          _inherits(_class, _Base);

          function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
          }

          _createClass(_class, [{
            key: "setModel",
            value: function setModel(model) {
              var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              if (this.model) this._unbindModelDom();
              return _get(_getPrototypeOf(_class.prototype), "setModel", this).call(this, model, trigger);
            }
          }, {
            key: "delegateEvents",
            value: function delegateEvents() {
              _get(_getPrototypeOf(_class.prototype), "delegateEvents", this).call(this);

              this._bindModelDom();
            }
          }, {
            key: "undelegateEvents",
            value: function undelegateEvents() {
              this._unbindModelDom();

              return _get(_getPrototypeOf(_class.prototype), "undelegateEvents", this).call(this);
            }
          }, {
            key: "_unbindModelDom",
            value: function _unbindModelDom() {
              if (!this.el || !this.model || !this._bindings) return;

              this._bindings.forEach(function (m) {
                return m.destroy();
              });

              this._bindings.length = 0;
            }
          }, {
            key: "_bindModelDom",
            value: function _bindModelDom() {
              var _this2 = this;

              if (!this.el || !this.model) return;
              var bindings = (this.bindings || []).concat(this._parse());
              this._bindings = bindings.map(function (m) {
                var el;
                if (utils.isString(m.selector)) el = _this2.el.querySelector(m.selector);else el = m.selector;
                if (!el) throw ReferenceError("could not find element with selector '".concat(m.selector, "' in context"));
                return new Binding(_this2.model, m.prop, el);
              });
            }
          }, {
            key: "_parse",
            value: function _parse() {
              var attr = utils.getOption('bindingAttribute', [this, this.options]) || 'bind';
              return html.html(this.el).find("[".concat(attr, "]")).map(function (m) {
                return {
                  selector: m,
                  prop: m.getAttribute(attr)
                };
              });
            }
          }]);

          return _class;
        }(Base)
      );
    }

    function withCollection(Base, CView, CCollection, MModel) {
      return (
        /*#__PURE__*/
        function (_Base) {
          _inherits(_class, _Base);

          function _class() {
            var _getPrototypeOf2;

            var _this;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
            _this.ChildView = CView;
            _this.options.eventProxyName = utils.getOption('childView', [_this.options]) || 'childView';
            _this.collection = CCollection ? new CCollection() : void 0;

            if (MModel && _this.collection && _this.collection instanceof ModelCollection) {
              _this.collection.Model = MModel;
            }

            return _this;
          } //readonly options: CollectionViewOptions<TElement, TView>;


          _createClass(_class, [{
            key: "render",
            value: function render() {
              //this.undelegateEvents();
              this._removeChildViews();

              _get(_getPrototypeOf(_class.prototype), "render", this).call(this);

              if (!this.collection || !this.el) return this;
              console.time('render collection');

              this._renderCollection();

              console.timeEnd('render collection'); //this.delegateEvents();

              return this;
            }
          }, {
            key: "setCollection",
            value: function setCollection(collection) {
              if (this._collection == collection) return this;

              if (this.collection) {
                this._removeModelEvents();

                this._removeChildViews();
              }

              this._collection = collection;

              if (this.collection) {
                this._addModelEvents();
              }

              return this;
            }
          }, {
            key: "_removeChildViews",
            value: function _removeChildViews() {
              if (!this._childViews) {
                this._childViews = [];
              }

              for (var i = 0, ii = this._childViews.length; i < ii; i++) {
                var v = this._childViews[i];
                v.destroy();
                if (v.el && v.el.parentNode) v.el.parentElement.removeChild(v.el);
              }

              this._childViews = [];
            }
          }, {
            key: "_renderCollection",
            value: function _renderCollection(collection) {
              var col = collection || this.collection;

              var container = this._getChildViewContainer();

              container.innerHTML = '';
              var frag = document.createDocumentFragment();

              for (var i = 0, ii = col.length; i < ii; i++) {
                var item = col.item(i);
                if (!item) throw RangeError("invalid index");

                var view$$1 = this._createChildView(item);

                this._renderChildView(view$$1);

                this._attachChildView(frag, view$$1, i);
              }

              container.appendChild(frag);
            }
          }, {
            key: "_renderChildView",
            value: function _renderChildView(view$$1) {
              view$$1.render();
            }
          }, {
            key: "_attachChildView",
            value: function _attachChildView(container, view$$1, index) {
              if (index >= this._childViews.length) {
                container.appendChild(view$$1.el);

                this._childViews.push(view$$1);
              } else {
                var after = this._childViews[index];

                this._childViews.splice(index, 0, view$$1);

                container.insertBefore(view$$1.el, after.el);
              }

              if (events.isEventEmitter(view$$1)) this._proxyChildViewEvents(view$$1);
            }
          }, {
            key: "_createChildView",
            value: function _createChildView(model) {
              var Vi = utils.getOption('ChildView', [this.options, this]) || view.View;
              var el = utils.Invoker.get(Vi);
              el.setModel(model, false);
              el.options.attachId = true;
              return el;
            }
          }, {
            key: "_destroyChildView",
            value: function _destroyChildView(view$$1) {
              var index = this._childViews.indexOf(view$$1);

              this._childViews.splice(index, 1);

              var container = this._getChildViewContainer();

              container.removeChild(view$$1.el);
              view$$1.destroy();
            }
          }, {
            key: "_modelAdded",
            value: function _modelAdded(item, index) {
              if (!this.el) return;

              var view$$1 = this._createChildView(item);

              this._renderChildView(view$$1);

              this._attachChildView(this._getChildViewContainer(), view$$1, index);
            }
          }, {
            key: "_modelRemoved",
            value: function _modelRemoved(_, index) {
              if (!this.el) return;
              var view$$1 = this._childViews[index];

              this._destroyChildView(view$$1);
            }
          }, {
            key: "_addModelEvents",
            value: function _addModelEvents() {
              if (events.isEventEmitter(this.collection)) {
                this.collection.on(exports.ModelEvents.Add, this._modelAdded, this);
                this.collection.on(exports.ModelEvents.Remove, this._modelRemoved, this);
                this.collection.on(exports.ModelEvents.Reset, this.render, this);
                this.collection.on(exports.ModelEvents.Sort, this.render, this);
              }
            }
          }, {
            key: "_removeModelEvents",
            value: function _removeModelEvents() {
              if (events.isEventEmitter(this.collection)) {
                this.collection.off(void 0, void 0, this);
              }
            }
          }, {
            key: "_getChildViewContainer",
            value: function _getChildViewContainer() {
              var sel = utils.getOption('childViewContainer', [this.options, this]);
              if (!sel) return this.el;
              var el = this.el.querySelector(sel);
              if (!el) throw new Error("tag not found: ".concat(sel));
              return el;
            }
          }, {
            key: "_proxyChildViewEvents",
            value: function _proxyChildViewEvents(view$$1) {
              var _this2 = this;

              var fn = function fn(eventName) {
                eventName = utils.getOption('eventProxyName', [_this2.options]) + ':' + eventName;

                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }

                utils.triggerMethodOn.apply(void 0, [_this2, eventName].concat(_toConsumableArray([view$$1].concat(args))));
              };

              view$$1.on('*', fn);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this._removeChildViews();

              _get(_getPrototypeOf(_class.prototype), "destroy", this).call(this);
            }
          }, {
            key: "collection",
            set: function set(collection) {
              this.setCollection(collection);
            },
            get: function get$$1() {
              return this._collection;
            }
          }, {
            key: "childViews",
            get: function get$$1() {
              return this._childViews;
            }
          }]);

          return _class;
        }(Base)
      );
    }

    function withModel(Base, TModel) {
      return (
        /*#__PURE__*/
        function (_Base) {
          _inherits(_class, _Base);

          function _class() {
            var _this;

            _classCallCheck(this, _class);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
            _this.Model = TModel || Model;
            _this._model = new Model();
            return _this;
          }

          _createClass(_class, [{
            key: "setModel",
            value: function setModel(model) {
              var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              if (trigger) utils.triggerMethodOn(this, 'before:set:model');

              if (this._model) {
                this._undelegateModelEvents(this._model);
              }

              this._model = model;
              if (model) this._delegateModelEvents(model);
              if (trigger) utils.triggerMethodOn(this, 'set:model');
              return this;
            }
          }, {
            key: "_undelegateModelEvents",
            value: function _undelegateModelEvents(model) {
              var _this2 = this;

              if (!this.modelEvents || !model || !events.isEventEmitter(model)) {
                return;
              }

              var _loop = function _loop(key) {
                _this2.modelEvents[key].forEach(function (m) {
                  if (utils.isString(m)) {
                    if (utils.isFunction(_this2[m])) {
                      m = _this2[m];
                    } else {
                      throw new Error('not a function');
                    }
                  }

                  model.off(key, m, _this2);
                });
              };

              for (var key in this.modelEvents) {
                _loop(key);
              }
            }
          }, {
            key: "_delegateModelEvents",
            value: function _delegateModelEvents(model) {
              var _this3 = this;

              if (!this.modelEvents || !model || !events.isEventEmitter(model)) {
                return;
              }

              var _loop2 = function _loop2(key) {
                _this3.modelEvents[key].forEach(function (m) {
                  if (utils.isString(m)) {
                    if (utils.isFunction(_this3[m])) {
                      m = _this3[m];
                    } else {
                      throw new Error('not a function');
                    }
                  }

                  model.on(key, m, _this3);
                });
              };

              for (var key in this.modelEvents) {
                _loop2(key);
              }
            }
          }, {
            key: "destroy",
            value: function destroy() {
              if (this.model) this._undelegateModelEvents(this.model);
              if (Base.prototype.destroy) Base.prototype.destroy.call(this);
              return this;
            }
          }, {
            key: "model",
            set: function set(model) {
              this.setModel(model);
            },
            get: function get() {
              return this._model;
            }
          }]);

          return _class;
        }(Base)
      );
    }

    exports.isDestroyable = isDestroyable;
    exports.isModel = isModel;
    exports.Model = Model;
    exports.property = property;
    exports.primaryKey = primaryKey;
    exports.ArrayCollection = ArrayCollection;
    exports.ModelCollection = ModelCollection;
    exports.TemplateView = TemplateView;
    exports.withBindings = withBindings;
    exports.Binding = Binding;
    exports.withCollection = withCollection;
    exports.withModel = withModel;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(0)) :
    typeof define === 'function' && define.amd ? define(['exports', '@viewjs/utils'], factory) :
    (factory((global.viewjs = global.viewjs || {}, global.viewjs.events = {}),global.viewjs.utils));
}(this, (function (exports,utils) { 'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

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

    function removeFromListener(listeners, fn, ctx) {
        for (var i = 0; i < listeners.length; i++) {
            var e = listeners[i];
            if (fn == null && ctx != null && e.ctx === ctx || fn != null && ctx == null && e.handler === fn || fn != null && ctx != null && e.handler === fn && e.ctx === ctx) {
                listeners.splice(i, 1);
            }
        }
        return listeners;
    }
    /**event
     * Makes target, Base, an EventEmitter
     *
     * @export
     * @param {T} Base
     * @template
     * @returns {(Constructor<IEventEmitter> & T)}
     */
    function withEventEmitter(Base) {
        return function (_Base) {
            inherits(_class, _Base);

            function _class() {
                classCallCheck(this, _class);

                var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));

                _this._listeners = void 0;
                return _this;
            }

            createClass(_class, [{
                key: 'on',
                value: function on(event, fn, ctx) {
                    var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

                    var events = (this._listeners || (this._listeners = new Map())).get(event) || [];
                    events.push({
                        name: event,
                        once: once,
                        handler: fn,
                        ctx: ctx || this
                    });
                    if (!this._listeners.has(event)) this._listeners.set(event, events);
                    return this;
                }
            }, {
                key: 'once',
                value: function once(event, fn, ctx) {
                    return this.on(event, fn, ctx, true);
                }
            }, {
                key: 'off',
                value: function off(eventName, fn, ctx) {
                    this._listeners = this._listeners || new Map();
                    if (eventName == null && ctx == null) {
                        this._listeners = new Map();
                    } else if (this._listeners.has(eventName)) {
                        var events = this._listeners.get(eventName);
                        if (fn == null && ctx == null) {
                            this._listeners.set(eventName, []);
                        } else {
                            removeFromListener(events, fn, ctx);
                        }
                    } else {
                        this._listeners.forEach(function (value) {
                            removeFromListener(value, fn, ctx);
                        });
                    }
                    return this;
                }
            }, {
                key: 'trigger',
                value: function trigger(eventName) {
                    this._listeners = this._listeners || new Map();
                    var events = (this._listeners.get(eventName) || []).concat(this._listeners.get("*") || []);
                    var index = void 0;
                    var calls = [];
                    var alls = [];
                    for (var i = 0, ii = events.length; i < ii; i++) {
                        if (events[i].name === '*') {
                            alls.push(events[i]);
                        } else {
                            calls.push(events[i]);
                        }
                        if (events[i].once === true) {
                            index = this._listeners.get(events[i].name).indexOf(events[i]);
                            this._listeners.get(events[i].name).splice(index, 1);
                        }
                    }

                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }

                    if (alls.length) {
                        this._executeListener(alls, [eventName].concat(args));
                    }
                    if (calls.length) this._executeListener(calls, args);
                    // Handle errors event
                    else if (eventName === 'error' && exports.EventEmitter.throwOnError) {
                            if (args.length) {
                                var a = args[0];
                                if (!(a instanceof Error)) {
                                    a = new Error(String(a));
                                }
                                exports.EventEmitter.throwError(a);
                            }
                        }
                    return this;
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    if (typeof Base.prototype.destroy === 'function') Base.prototype.destroy.call(this);
                    this.off();
                }
            }, {
                key: '_executeListener',
                value: function _executeListener(func, args) {
                    exports.EventEmitter.executeListenerFunction(func, args);
                }
            }, {
                key: 'listeners',
                get: function get$$1() {
                    return this._listeners;
                }
            }]);
            return _class;
        }(Base);
    }

    exports.EventEmitter = function (_withEventEmitter) {
        inherits(EventEmitter, _withEventEmitter);

        function EventEmitter() {
            classCallCheck(this, EventEmitter);
            return possibleConstructorReturn(this, (EventEmitter.__proto__ || Object.getPrototypeOf(EventEmitter)).apply(this, arguments));
        }

        return EventEmitter;
    }(withEventEmitter(utils.Base));

    (function (EventEmitter) {
        /**
         * If true EventEmitter will call throwError, when when no listeners for the "error" event
         */
        EventEmitter.throwOnError = false;
        function throwError(error) {
            throw error;
        }
        EventEmitter.throwError = throwError;
        function executeListenerFunction(func, args) {
            utils.callFunc(func, args);
        }
        EventEmitter.executeListenerFunction = executeListenerFunction;
    })(exports.EventEmitter || (exports.EventEmitter = {}));

    function isEventEmitter(a) {
        return a && utils.isFunction(a.on) && utils.isFunction(a.once) && utils.isFunction(a.off) && utils.isFunction(a.trigger);
    }
    function IsEventListener(a) {
        return a && utils.isFunction(a.listenTo) && utils.isFunction(a.listenToOnce) && utils.isFunction(a.stopListening);
    }

    function withEventListener(Base) {
        return function (_Base) {
            inherits(_class, _Base);

            function _class() {
                classCallCheck(this, _class);

                var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));

                _this._listeningTo = void 0;
                return _this;
            }

            createClass(_class, [{
                key: 'listenTo',
                value: function listenTo(obj, event, fn, ctx) {
                    var once = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

                    if (!isEventEmitter(obj)) {
                        if (exports.EventEmitter.throwOnError) exports.EventEmitter.throwError(new TypeError("obj is not an EventEmitter"));
                        return this;
                    }
                    var listeningTo = void 0,
                        id = void 0,
                        meth = void 0;
                    listeningTo = this._listeningTo || (this._listeningTo = {});
                    id = obj.listenId || (obj.listenId = utils.uniqueId());
                    listeningTo[id] = obj;
                    meth = once ? 'once' : 'on';
                    obj[meth](event, fn, ctx || this);
                    return this;
                }
            }, {
                key: 'listenToOnce',
                value: function listenToOnce(obj, event, fn, ctx) {
                    return this.listenTo(obj, event, fn, ctx, true);
                }
            }, {
                key: 'stopListening',
                value: function stopListening(obj, event, callback) {
                    if (obj && !isEventEmitter(obj)) {
                        if (exports.EventEmitter.throwOnError) exports.EventEmitter.throwError(new TypeError("obj is not an EventEmitter"));
                        return this;
                    }
                    var listeningTo = this._listeningTo;
                    if (!listeningTo) return this;
                    var remove = !event && !callback;
                    if (!callback && (typeof event === 'undefined' ? 'undefined' : _typeof(event)) === 'object') callback = this;
                    if (obj) (listeningTo = {})[obj.listenId] = obj;
                    for (var id in listeningTo) {
                        obj = listeningTo[id];
                        obj.off(event, callback, this);
                        if (remove || obj.listeners.size === 0) delete this._listeningTo[id];
                    }
                    return this;
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    if (typeof Base.prototype.destroy === 'function') Base.prototype.destroy.call(this);
                    this.stopListening();
                }
            }]);
            return _class;
        }(Base);
    }

    exports.withEventEmitter = withEventEmitter;
    exports.withEventListener = withEventListener;
    exports.isEventEmitter = isEventEmitter;
    exports.IsEventListener = IsEventListener;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __webpack_require__(12);
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
/* 9 */
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
var view_1 = __webpack_require__(1);
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
            console.log(this.model);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(0);
var validation_view_1 = __webpack_require__(4);
var data_1 = __webpack_require__(6);

var FormView = function (_validation_view_1$wi) {
    _inherits(FormView, _validation_view_1$wi);

    function FormView(options) {
        _classCallCheck(this, FormView);

        return _possibleConstructorReturn(this, (FormView.__proto__ || Object.getPrototypeOf(FormView)).call(this, utils_1.extend({
            errorMessageClass: 'input-message',
            errorClass: 'has-error',
            showErrorMessage: true,
            bindingAttribute: 'name'
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
}(validation_view_1.withValidation(data_1.withBindings(data_1.withModel(view_1.View)), { event: 'keyup' }));

exports.FormView = FormView;

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var validators_1 = __webpack_require__(13);
var errors_1 = __webpack_require__(3);

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
/* 13 */
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