(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@viewjs/html'), require('@viewjs/utils'), require('@viewjs/view')) :
	typeof define === 'function' && define.amd ? define(['@viewjs/html', '@viewjs/utils', '@viewjs/view'], factory) :
	(global.viewjs = global.viewjs || {}, global.viewjs.validation = factory(global.viewjs.html,global.viewjs.utils,global.viewjs.view));
}(this, (function (html,utils_1,view) { 'use strict';

	html = html && html.hasOwnProperty('default') ? html['default'] : html;
	utils_1 = utils_1 && utils_1.hasOwnProperty('default') ? utils_1['default'] : utils_1;
	view = view && view.hasOwnProperty('default') ? view['default'] : view;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
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

	var validators = createCommonjsModule(function (module, exports) {

	    Object.defineProperty(exports, "__esModule", { value: true });

	    var AbstractValidator = function AbstractValidator(msg) {
	        classCallCheck(this, AbstractValidator);

	        if (msg) this.message = msg;
	    };

	    exports.AbstractValidator = AbstractValidator;

	    var RequiredValidator = function (_AbstractValidator) {
	        inherits(RequiredValidator, _AbstractValidator);
	        createClass(RequiredValidator, [{
	            key: 'validate',
	            value: function validate(value) {
	                if (value === null || value === void 0) return false;
	                if (typeof value === 'string' && value == '') return false;
	                return true;
	            }
	        }]);

	        function RequiredValidator() {
	            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "{{label}} is missing";
	            classCallCheck(this, RequiredValidator);
	            return possibleConstructorReturn(this, (RequiredValidator.__proto__ || Object.getPrototypeOf(RequiredValidator)).call(this, msg));
	        }

	        return RequiredValidator;
	    }(AbstractValidator);

	    exports.RequiredValidator = RequiredValidator;

	    var RegexValidator = function (_AbstractValidator2) {
	        inherits(RegexValidator, _AbstractValidator2);

	        function RegexValidator() {
	            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "{{label}} is invalid";
	            var regex = arguments[1];
	            classCallCheck(this, RegexValidator);

	            var _this2 = possibleConstructorReturn(this, (RegexValidator.__proto__ || Object.getPrototypeOf(RegexValidator)).call(this, msg));

	            _this2.regex = regex;
	            return _this2;
	        }

	        createClass(RegexValidator, [{
	            key: 'validate',
	            value: function validate(value) {
	                return this.regex.test(String(value));
	            }
	        }]);
	        return RegexValidator;
	    }(AbstractValidator);

	    exports.RegexValidator = RegexValidator;

	    var EmailValidator = function (_RegexValidator) {
	        inherits(EmailValidator, _RegexValidator);

	        function EmailValidator() {
	            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "{{label}} is not a valid email addresss";
	            classCallCheck(this, EmailValidator);

	            var _this3 = possibleConstructorReturn(this, (EmailValidator.__proto__ || Object.getPrototypeOf(EmailValidator)).call(this, msg));

	            _this3.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	            return _this3;
	        }

	        return EmailValidator;
	    }(RegexValidator);

	    exports.EmailValidator = EmailValidator;

	    var MinLengthValidator = function (_AbstractValidator3) {
	        inherits(MinLengthValidator, _AbstractValidator3);

	        function MinLengthValidator(n, msg) {
	            classCallCheck(this, MinLengthValidator);

	            var _this4 = possibleConstructorReturn(this, (MinLengthValidator.__proto__ || Object.getPrototypeOf(MinLengthValidator)).call(this, msg));

	            _this4.len = n;
	            return _this4;
	        }

	        createClass(MinLengthValidator, [{
	            key: 'validate',
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
	        inherits(MaxLengthValidator, _AbstractValidator4);

	        function MaxLengthValidator(n, msg) {
	            classCallCheck(this, MaxLengthValidator);

	            var _this5 = possibleConstructorReturn(this, (MaxLengthValidator.__proto__ || Object.getPrototypeOf(MaxLengthValidator)).call(this, msg));

	            _this5.len = n;
	            return _this5;
	        }

	        createClass(MaxLengthValidator, [{
	            key: 'validate',
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
	        inherits(MatchValidator, _AbstractValidator5);

	        function MatchValidator(selector, msg) {
	            classCallCheck(this, MatchValidator);

	            var _this6 = possibleConstructorReturn(this, (MatchValidator.__proto__ || Object.getPrototypeOf(MatchValidator)).call(this, msg));

	            _this6.selector = selector;
	            return _this6;
	        }

	        createClass(MatchValidator, [{
	            key: 'validate',
	            value: function validate(value) {
	                var el = document.querySelector(this.selector);
	                if (!el) {
	                    throw new TypeError('element with selector: "' + this.selector + '" not found in dom');
	                }
	                var otherValue = html.getValue(el);
	                return utils_1.equal(value, otherValue);
	            }
	        }]);
	        return MatchValidator;
	    }(AbstractValidator);

	    exports.MatchValidator = MatchValidator;
	});

	unwrapExports(validators);
	var validators_1 = validators.AbstractValidator;
	var validators_2 = validators.RequiredValidator;
	var validators_3 = validators.RegexValidator;
	var validators_4 = validators.EmailValidator;
	var validators_5 = validators.MinLengthValidator;
	var validators_6 = validators.MaxLengthValidator;
	var validators_7 = validators.MatchValidator;

	var tim = createCommonjsModule(function (module, exports) {

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
	});

	unwrapExports(tim);
	var tim_1 = tim.tim;

	var errors = createCommonjsModule(function (module, exports) {

	    Object.defineProperty(exports, "__esModule", { value: true });

	    var ValidationError = function (_Error) {
	        inherits(ValidationError, _Error);

	        function ValidationError(message, validator) {
	            classCallCheck(this, ValidationError);

	            var _this = possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, message));

	            _this.validator = validator;
	            // TODO: use Object.setPrototypeOf(this, new.target.prototype);
	            Object.setPrototypeOf(_this, ValidationError.prototype);
	            return _this;
	        }

	        return ValidationError;
	    }(Error);

	    exports.ValidationError = ValidationError;

	    var ValidationErrors = function (_Error2) {
	        inherits(ValidationErrors, _Error2);

	        function ValidationErrors(errors, message) {
	            classCallCheck(this, ValidationErrors);

	            var _this2 = possibleConstructorReturn(this, (ValidationErrors.__proto__ || Object.getPrototypeOf(ValidationErrors)).call(this, message));

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
	        if (v.message) msg = tim.tim(v.message, label);
	        return new ValidationError(msg, v);
	    }
	    exports.createError = createError;
	});

	unwrapExports(errors);
	var errors_1 = errors.ValidationError;
	var errors_2 = errors.ValidationErrors;
	var errors_3 = errors.createError;

	var validator = createCommonjsModule(function (module, exports) {

	    Object.defineProperty(exports, "__esModule", { value: true });

	    var AbstractValidatorCollection = function () {
	        function AbstractValidatorCollection(key) {
	            classCallCheck(this, AbstractValidatorCollection);

	            this._validators = [];
	            this._key = key;
	        }

	        createClass(AbstractValidatorCollection, [{
	            key: 'label',
	            value: function label(_label) {
	                if (arguments.length == 0) return this._label;
	                this._label = _label;
	                return this;
	            }
	        }, {
	            key: 'key',
	            value: function key(_key) {
	                if (arguments.length == 0) return this._key;
	                this._key = _key;
	                return this;
	            }
	        }, {
	            key: 'required',
	            value: function required(msg) {
	                this._required = new validators.RequiredValidator(msg);
	                return this;
	            }
	        }, {
	            key: 'match',
	            value: function match(selector, msg) {
	                return this._addValidator(new validators.MatchValidator(selector, msg));
	            }
	        }, {
	            key: 'validate',
	            value: function validate(value) {
	                if (this._required) {
	                    if (!this._required.validate(value)) {
	                        var e = errors.createError(this._required, {
	                            label: this._label || '',
	                            key: this._key || ''
	                        });
	                        throw new errors.ValidationErrors([e]);
	                    }
	                }
	                // Not required, but empty
	                if (value == null || typeof value === 'string' && value === '') {
	                    return;
	                }
	                var errors$$1 = [];
	                for (var i = 0, ii = this._validators.length; i < ii; i++) {
	                    var _validator = this._validators[i];
	                    if (!_validator.validate(value)) {
	                        errors$$1.push(errors.createError(_validator, {
	                            label: this._label || '',
	                            key: this._key || ''
	                        }));
	                    }
	                }
	                if (errors$$1.length) throw new errors.ValidationErrors(errors$$1);
	            }
	        }, {
	            key: 'getMessage',
	            value: function getMessage() {
	                return "";
	            }
	        }, {
	            key: '_addValidator',
	            value: function _addValidator(v) {
	                this._validators.push(v);
	                return this;
	            }
	        }, {
	            key: 'message',
	            get: function get$$1() {
	                return this.getMessage();
	            }
	        }]);
	        return AbstractValidatorCollection;
	    }();

	    exports.AbstractValidatorCollection = AbstractValidatorCollection;

	    var StringValidator = function (_AbstractValidatorCol) {
	        inherits(StringValidator, _AbstractValidatorCol);

	        function StringValidator() {
	            classCallCheck(this, StringValidator);
	            return possibleConstructorReturn(this, (StringValidator.__proto__ || Object.getPrototypeOf(StringValidator)).apply(this, arguments));
	        }

	        createClass(StringValidator, [{
	            key: 'email',
	            value: function email(msg) {
	                return this._addValidator(new validators.EmailValidator(msg));
	            }
	        }, {
	            key: 'reqexp',
	            value: function reqexp(req, msg) {
	                return this._addValidator(new validators.RegexValidator(msg, req));
	            }
	        }, {
	            key: 'min',
	            value: function min(len, msg) {
	                return this._addValidator(new validators.MinLengthValidator(len, msg));
	            }
	        }, {
	            key: 'max',
	            value: function max(len, msg) {
	                return this._addValidator(new validators.MaxLengthValidator(len, msg));
	            }
	        }]);
	        return StringValidator;
	    }(AbstractValidatorCollection);

	    exports.StringValidator = StringValidator;
	});

	unwrapExports(validator);
	var validator_1 = validator.AbstractValidatorCollection;
	var validator_2 = validator.StringValidator;

	var decorators = createCommonjsModule(function (module, exports) {

	    Object.defineProperty(exports, "__esModule", { value: true });

	    function validations(v) {
	        return function (target) {
	            target.prototype._validations = v;
	        };
	    }
	    exports.validations = validations;
	    (function (validations) {
	        function string(key) {
	            return new validator.StringValidator(key);
	        }
	        validations.string = string;
	    })(validations = exports.validations || (exports.validations = {}));
	});

	unwrapExports(decorators);
	var decorators_1 = decorators.validations;

	var validationView = createCommonjsModule(function (module, exports) {

	    Object.defineProperty(exports, "__esModule", { value: true });

	    function withValidation(Base) {
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { event: 'change' };

	        function validation_wrap(self, v) {
	            return function (e) {
	                var target = e.delegateTarget || e.target;
	                if (!target) throw new TypeError('no target');
	                try {
	                    v.validate(html.getValue(target));
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
	            inherits(_class, _Base);

	            function _class() {
	                classCallCheck(this, _class);
	                return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	            }

	            createClass(_class, [{
	                key: 'render',
	                value: function render() {
	                    var _this2 = this;

	                    get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'render', this).call(this);
	                    var v = this._getValidations();
	                    for (var key in v) {
	                        var wrapper = validation_wrap(this, v[key]);
	                        this.delegate(options.event, key, wrapper);
	                        if (options.event !== 'change') this.delegate('change', wrapper);
	                        //this.delegate(options.event, key, validation_wrap(this, v[key]));
	                        this.delegate('blur', key, function (e) {
	                            var target = e.delegateTarget,
	                                value = html.getValue(target);
	                            if (!value) _this2.clearValidationError(target);
	                        });
	                    }
	                    return this;
	                }
	            }, {
	                key: 'setValidationError',
	                value: function setValidationError() {}
	            }, {
	                key: 'clearValidationError',
	                value: function clearValidationError() {}
	            }, {
	                key: 'validate',
	                value: function validate() {
	                    var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	                    var v = this._getValidations(),
	                        errors$$1 = [];
	                    for (var key in v) {
	                        var el = this.el.querySelector(key);
	                        try {
	                            v[key].validate(html.getValue(el));
	                            if (!silent) this.clearValidationError(el);
	                        } catch (e) {
	                            if (!silent) this.setValidationError(el, e);
	                            e.errors.forEach(function (m) {
	                                return errors$$1.push(e);
	                            });
	                        }
	                    }
	                    if (errors$$1.length) {
	                        throw new errors.ValidationErrors(errors$$1);
	                    }
	                }
	            }, {
	                key: 'getValue',
	                value: function getValue() {
	                    var v = this._getValidations(),
	                        out = {};
	                    for (var key in v) {
	                        var el = this.el.querySelector(key),
	                            name = v[key].key() || el.getAttribute('name') || v[key].label() || key;
	                        out[name] = html.getValue(el);
	                        if (out[name] === '') out[name] = null;
	                    }
	                    return out;
	                }
	            }, {
	                key: 'setValue',
	                value: function setValue(input) {
	                    var v = this._getValidations();
	                    for (var key in v) {
	                        var el = this.el.querySelector(key),
	                            name = v[key].key() || el.getAttribute('name') || v[key].label() || key;
	                        if (input[name]) {
	                            html.setValue(el, input[name]);
	                        }
	                    }
	                }
	            }, {
	                key: 'clear',
	                value: function clear() {
	                    var v = this._getValidations();
	                    for (var key in v) {
	                        var el = this.el.querySelector(key);
	                        html.setValue(el, null);
	                    }
	                }
	            }, {
	                key: 'isValid',
	                value: function isValid() {
	                    try {
	                        this.validate(true);
	                        return true;
	                    } catch (e) {
	                        return false;
	                    }
	                }
	            }, {
	                key: 'clearAllErrors',
	                value: function clearAllErrors() {
	                    var ui = this._ui || this.ui,
	                        v = view.normalizeUIKeys(this._validations, ui);
	                    for (var key in v) {
	                        var el = this.el.querySelector(key);
	                        this.clearValidationError(el);
	                    }
	                    return this;
	                }
	            }, {
	                key: '_getValidations',
	                value: function _getValidations() {
	                    var ui = this._ui || this.ui,
	                        validations = utils_1.result(this, '_validations') || this.constructor.validations || {},
	                        v = view.normalizeUIKeys(validations, ui);
	                    return v;
	                }
	            }]);
	            return _class;
	        }(Base);
	    }
	    exports.withValidation = withValidation;
	});

	unwrapExports(validationView);
	var validationView_1 = validationView.withValidation;

	var formView = createCommonjsModule(function (module, exports) {

	    Object.defineProperty(exports, "__esModule", { value: true });

	    var FormView = function (_validation_view_1$wi) {
	        inherits(FormView, _validation_view_1$wi);

	        function FormView(options) {
	            classCallCheck(this, FormView);
	            return possibleConstructorReturn(this, (FormView.__proto__ || Object.getPrototypeOf(FormView)).call(this, utils_1.extend({
	                errorMessageClass: 'input-message',
	                errorClass: 'has-error',
	                showErrorMessage: true
	            }, options || {})));
	        }

	        createClass(FormView, [{
	            key: 'setValidationError',
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
	            key: 'clearValidationError',
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
	            key: '_getErrorMessage',
	            value: function _getErrorMessage(errors) {
	                return errors.errors.map(function (m) {
	                    return m.message;
	                }).join('<br/>');
	            }
	        }]);
	        return FormView;
	    }(validationView.withValidation(view.BaseView, { event: 'keyup' }));

	    exports.FormView = FormView;
	});

	unwrapExports(formView);
	var formView_1 = formView.FormView;

	var lib = createCommonjsModule(function (module, exports) {

	    function __export(m) {
	        for (var p in m) {
	            if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	        }
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(decorators);
	    __export(validationView);
	    __export(errors);
	    __export(formView);
	});

	var index = unwrapExports(lib);

	return index;

})));
