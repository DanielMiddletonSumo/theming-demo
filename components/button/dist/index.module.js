var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __pow = Math.pow;
var __markAsModule = target => __defProp(target, '__esModule', { value: true });
var __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])((fn = 0))), res;
  };
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __reExport = (target, module, desc) => {
  if ((module && typeof module === 'object') || typeof module === 'function') {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== 'default')
        __defProp(target, key, {
          get: () => module[key],
          enumerable:
            !(desc = __getOwnPropDesc(module, key)) || desc.enumerable,
        });
  }
  return target;
};
var __toModule = module => {
  return __reExport(
    __markAsModule(
      __defProp(
        module != null ? __create(__getProtoOf(module)) : {},
        'default',
        module && module.__esModule && 'default' in module
          ? { get: () => module.default, enumerable: true }
          : { value: module, enumerable: true }
      )
    ),
    module
  );
};

// build/react-shim.mjs
import { jsx } from '@emotion/react';
var init_react_shim = __esm({
  'build/react-shim.mjs'() {},
});

// ../../common/temp/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  '../../common/temp/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js'(
    exports
  ) {
    init_react_shim();
    ('use strict');
    if (true) {
      (function () {
        'use strict';
        var hasSymbol2 = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol2
          ? Symbol.for('react.element')
          : 60103;
        var REACT_PORTAL_TYPE = hasSymbol2 ? Symbol.for('react.portal') : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol2
          ? Symbol.for('react.fragment')
          : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol2
          ? Symbol.for('react.strict_mode')
          : 60108;
        var REACT_PROFILER_TYPE = hasSymbol2
          ? Symbol.for('react.profiler')
          : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol2
          ? Symbol.for('react.provider')
          : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol2
          ? Symbol.for('react.context')
          : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol2
          ? Symbol.for('react.async_mode')
          : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol2
          ? Symbol.for('react.concurrent_mode')
          : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol2
          ? Symbol.for('react.forward_ref')
          : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol2
          ? Symbol.for('react.suspense')
          : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol2
          ? Symbol.for('react.suspense_list')
          : 60120;
        var REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for('react.memo') : 60115;
        var REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for('react.lazy') : 60116;
        var REACT_BLOCK_TYPE = hasSymbol2 ? Symbol.for('react.block') : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol2
          ? Symbol.for('react.fundamental')
          : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol2
          ? Symbol.for('react.responder')
          : 60118;
        var REACT_SCOPE_TYPE = hasSymbol2 ? Symbol.for('react.scope') : 60119;
        function isValidElementType(type) {
          return (
            typeof type === 'string' ||
            typeof type === 'function' ||
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_CONCURRENT_MODE_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            (typeof type === 'object' &&
              type !== null &&
              (type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                type.$$typeof === REACT_RESPONDER_TYPE ||
                type.$$typeof === REACT_SCOPE_TYPE ||
                type.$$typeof === REACT_BLOCK_TYPE))
          );
        }
        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console['warn'](
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
              );
            }
          }
          return (
            isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
          );
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return (
            typeof object === 'object' &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  },
});

// ../../common/temp/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
var require_react_is = __commonJS({
  '../../common/temp/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js'(
    exports,
    module
  ) {
    init_react_shim();
    ('use strict');
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  },
});

// ../../common/temp/node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  '../../common/temp/node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js'(
    exports,
    module
  ) {
    init_react_shim();
    ('use strict');
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        );
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String('abc');
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        });
        if (order2.join('') !== '0123456789') {
          return false;
        }
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
          test3[letter] = letter;
        });
        if (
          Object.keys(Object.assign({}, test3)).join('') !==
          'abcdefghijklmnopqrst'
        ) {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative()
      ? Object.assign
      : function (target, source) {
          var from;
          var to = toObject(target);
          var symbols;
          for (var s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);
            for (var key in from) {
              if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
              }
            }
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);
              for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                  to[symbols[i]] = from[symbols[i]];
                }
              }
            }
          }
          return to;
        };
  },
});

// ../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  '../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js'(
    exports,
    module
  ) {
    init_react_shim();
    ('use strict');
    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    module.exports = ReactPropTypesSecret;
  },
});

// ../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  '../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/checkPropTypes.js'(
    exports,
    module
  ) {
    init_react_shim();
    ('use strict');
    var printWarning = function () {};
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = Function.call.bind(Object.prototype.hasOwnProperty);
      printWarning = function (text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(
      typeSpecs,
      values2,
      location,
      componentName,
      getStack
    ) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') +
                    ': ' +
                    location +
                    ' type `' +
                    typeSpecName +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof typeSpecs[typeSpecName] +
                    '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](
                values2,
                typeSpecName,
                componentName,
                location,
                null,
                ReactPropTypesSecret
              );
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || 'React class') +
                  ': type specification of ' +
                  location +
                  ' `' +
                  typeSpecName +
                  '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                  typeof error +
                  '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
              );
            }
            if (
              error instanceof Error &&
              !(error.message in loggedTypeFailures)
            ) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : '';
              printWarning(
                'Failed ' +
                  location +
                  ' type: ' +
                  error.message +
                  (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function () {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  },
});

// ../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  '../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js'(
    exports,
    module
  ) {
    init_react_shim();
    ('use strict');
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var checkPropTypes = require_checkPropTypes();
    var has = Function.call.bind(Object.prototype.hasOwnProperty);
    var printWarning = function () {};
    if (true) {
      printWarning = function (text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function (isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        var iteratorFn =
          maybeIterable &&
          ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }
      var ANONYMOUS = '<<anonymous>>';
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(
          isRequired,
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret
        ) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (typeof console !== 'undefined') {
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                manualPropTypeWarningCount < 3
              ) {
                printWarning(
                  'You are manually calling a React.PropTypes validation function for the `' +
                    propFullName +
                    '` prop on `' +
                    componentName +
                    '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError(
                  'The ' +
                    location +
                    ' `' +
                    propFullName +
                    '` is marked as required ' +
                    ('in `' + componentName + '`, but its value is `null`.')
                );
              }
              return new PropTypeError(
                'The ' +
                  location +
                  ' `' +
                  propFullName +
                  '` is marked as required in ' +
                  ('`' + componentName + '`, but its value is `undefined`.')
              );
            }
            return null;
          } else {
            return validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            );
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret
        ) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  preciseType +
                  '` supplied to `' +
                  componentName +
                  '`, expected ') +
                ('`' + expectedType + '`.')
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError(
              'Property `' +
                propFullName +
                '` of component `' +
                componentName +
                '` has invalid PropType notation inside arrayOf.'
            );
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  propType +
                  '` supplied to `' +
                  componentName +
                  '`, expected an array.')
            );
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(
              propValue,
              i,
              componentName,
              location,
              propFullName + '[' + i + ']',
              ReactPropTypesSecret
            );
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  propType +
                  '` supplied to `' +
                  componentName +
                  '`, expected a single ReactElement.')
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  propType +
                  '` supplied to `' +
                  componentName +
                  '`, expected a single ReactElement type.')
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  actualClassName +
                  '` supplied to `' +
                  componentName +
                  '`, expected ') +
                ('instance of `' + expectedClassName + '`.')
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                'Invalid arguments supplied to oneOf, expected an array, got ' +
                  arguments.length +
                  ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
              );
            } else {
              printWarning(
                'Invalid argument supplied to oneOf, expected an array.'
              );
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(
            expectedValues,
            function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === 'symbol') {
                return String(value);
              }
              return value;
            }
          );
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of value `' +
              String(propValue) +
              '` ' +
              ('supplied to `' +
                componentName +
                '`, expected one of ' +
                valuesString +
                '.')
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError(
              'Property `' +
                propFullName +
                '` of component `' +
                componentName +
                '` has invalid PropType notation inside objectOf.'
            );
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ' +
                ('`' +
                  propType +
                  '` supplied to `' +
                  componentName +
                  '`, expected an object.')
            );
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(
                propValue,
                key,
                componentName,
                location,
                propFullName + '.' + key,
                ReactPropTypesSecret
              );
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true
            ? printWarning(
                'Invalid argument supplied to oneOfType, expected an instance of array.'
              )
            : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                getPostfixForTypeWarning(checker) +
                ' at index ' +
                i +
                '.'
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            if (
              checker2(
                props,
                propName,
                componentName,
                location,
                propFullName,
                ReactPropTypesSecret
              ) == null
            ) {
              return null;
            }
          }
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` supplied to ' +
              ('`' + componentName + '`.')
          );
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          if (!isNode(props[propName])) {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` supplied to ' +
                ('`' + componentName + '`, expected a ReactNode.')
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type `' +
                propType +
                '` ' +
                ('supplied to `' + componentName + '`, expected `object`.')
            );
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret
            );
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type `' +
                propType +
                '` ' +
                ('supplied to `' + componentName + '`, expected `object`.')
            );
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` key `' +
                  key +
                  '` supplied to `' +
                  componentName +
                  '`.\nBad object: ' +
                  JSON.stringify(props[propName], null, '  ') +
                  '\nValid keys: ' +
                  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret
            );
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === 'symbol') {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  },
});

// ../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  '../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js'(
    exports,
    module
  ) {
    init_react_shim();
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(
        ReactIs.isElement,
        throwOnDirectAccess
      );
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  },
});

// ../../themes/theme-1/dist/index.js
var require_dist = __commonJS({
  '../../themes/theme-1/dist/index.js'(exports) {
    init_react_shim();
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __pow2 = Math.pow;
    var __markAsModule2 = target =>
      __defProp2(target, '__esModule', { value: true });
    var __commonJS2 = (cb, mod) =>
      function __require() {
        return (
          mod ||
            (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod),
          mod.exports
        );
      };
    var __export = (target, all) => {
      __markAsModule2(target);
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __reExport2 = (target, module2, desc) => {
      if (
        (module2 && typeof module2 === 'object') ||
        typeof module2 === 'function'
      ) {
        for (let key of __getOwnPropNames2(module2))
          if (!__hasOwnProp2.call(target, key) && key !== 'default')
            __defProp2(target, key, {
              get: () => module2[key],
              enumerable:
                !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable,
            });
      }
      return target;
    };
    var __toModule2 = module2 => {
      return __reExport2(
        __markAsModule2(
          __defProp2(
            module2 != null ? __create2(__getProtoOf2(module2)) : {},
            'default',
            module2 && module2.__esModule && 'default' in module2
              ? { get: () => module2.default, enumerable: true }
              : { value: module2, enumerable: true }
          )
        ),
        module2
      );
    };
    var require_react_is_development2 = __commonJS2({
      '../../common/temp/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js'(
        exports2
      ) {
        'use strict';
        if (true) {
          (function () {
            'use strict';
            var hasSymbol2 = typeof Symbol === 'function' && Symbol.for;
            var REACT_ELEMENT_TYPE = hasSymbol2
              ? Symbol.for('react.element')
              : 60103;
            var REACT_PORTAL_TYPE = hasSymbol2
              ? Symbol.for('react.portal')
              : 60106;
            var REACT_FRAGMENT_TYPE = hasSymbol2
              ? Symbol.for('react.fragment')
              : 60107;
            var REACT_STRICT_MODE_TYPE = hasSymbol2
              ? Symbol.for('react.strict_mode')
              : 60108;
            var REACT_PROFILER_TYPE = hasSymbol2
              ? Symbol.for('react.profiler')
              : 60114;
            var REACT_PROVIDER_TYPE = hasSymbol2
              ? Symbol.for('react.provider')
              : 60109;
            var REACT_CONTEXT_TYPE = hasSymbol2
              ? Symbol.for('react.context')
              : 60110;
            var REACT_ASYNC_MODE_TYPE = hasSymbol2
              ? Symbol.for('react.async_mode')
              : 60111;
            var REACT_CONCURRENT_MODE_TYPE = hasSymbol2
              ? Symbol.for('react.concurrent_mode')
              : 60111;
            var REACT_FORWARD_REF_TYPE = hasSymbol2
              ? Symbol.for('react.forward_ref')
              : 60112;
            var REACT_SUSPENSE_TYPE = hasSymbol2
              ? Symbol.for('react.suspense')
              : 60113;
            var REACT_SUSPENSE_LIST_TYPE = hasSymbol2
              ? Symbol.for('react.suspense_list')
              : 60120;
            var REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for('react.memo') : 60115;
            var REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for('react.lazy') : 60116;
            var REACT_BLOCK_TYPE = hasSymbol2
              ? Symbol.for('react.block')
              : 60121;
            var REACT_FUNDAMENTAL_TYPE = hasSymbol2
              ? Symbol.for('react.fundamental')
              : 60117;
            var REACT_RESPONDER_TYPE = hasSymbol2
              ? Symbol.for('react.responder')
              : 60118;
            var REACT_SCOPE_TYPE = hasSymbol2
              ? Symbol.for('react.scope')
              : 60119;
            function isValidElementType(type) {
              return (
                typeof type === 'string' ||
                typeof type === 'function' ||
                type === REACT_FRAGMENT_TYPE ||
                type === REACT_CONCURRENT_MODE_TYPE ||
                type === REACT_PROFILER_TYPE ||
                type === REACT_STRICT_MODE_TYPE ||
                type === REACT_SUSPENSE_TYPE ||
                type === REACT_SUSPENSE_LIST_TYPE ||
                (typeof type === 'object' &&
                  type !== null &&
                  (type.$$typeof === REACT_LAZY_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE ||
                    type.$$typeof === REACT_PROVIDER_TYPE ||
                    type.$$typeof === REACT_CONTEXT_TYPE ||
                    type.$$typeof === REACT_FORWARD_REF_TYPE ||
                    type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                    type.$$typeof === REACT_RESPONDER_TYPE ||
                    type.$$typeof === REACT_SCOPE_TYPE ||
                    type.$$typeof === REACT_BLOCK_TYPE))
              );
            }
            function typeOf(object) {
              if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch ($$typeof) {
                  case REACT_ELEMENT_TYPE:
                    var type = object.type;
                    switch (type) {
                      case REACT_ASYNC_MODE_TYPE:
                      case REACT_CONCURRENT_MODE_TYPE:
                      case REACT_FRAGMENT_TYPE:
                      case REACT_PROFILER_TYPE:
                      case REACT_STRICT_MODE_TYPE:
                      case REACT_SUSPENSE_TYPE:
                        return type;
                      default:
                        var $$typeofType = type && type.$$typeof;
                        switch ($$typeofType) {
                          case REACT_CONTEXT_TYPE:
                          case REACT_FORWARD_REF_TYPE:
                          case REACT_LAZY_TYPE:
                          case REACT_MEMO_TYPE:
                          case REACT_PROVIDER_TYPE:
                            return $$typeofType;
                          default:
                            return $$typeof;
                        }
                    }
                  case REACT_PORTAL_TYPE:
                    return $$typeof;
                }
              }
              return void 0;
            }
            var AsyncMode = REACT_ASYNC_MODE_TYPE;
            var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
            var ContextConsumer = REACT_CONTEXT_TYPE;
            var ContextProvider = REACT_PROVIDER_TYPE;
            var Element = REACT_ELEMENT_TYPE;
            var ForwardRef = REACT_FORWARD_REF_TYPE;
            var Fragment2 = REACT_FRAGMENT_TYPE;
            var Lazy = REACT_LAZY_TYPE;
            var Memo = REACT_MEMO_TYPE;
            var Portal = REACT_PORTAL_TYPE;
            var Profiler = REACT_PROFILER_TYPE;
            var StrictMode = REACT_STRICT_MODE_TYPE;
            var Suspense = REACT_SUSPENSE_TYPE;
            var hasWarnedAboutDeprecatedIsAsyncMode = false;
            function isAsyncMode(object) {
              {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                  hasWarnedAboutDeprecatedIsAsyncMode = true;
                  console['warn'](
                    'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                  );
                }
              }
              return (
                isConcurrentMode(object) ||
                typeOf(object) === REACT_ASYNC_MODE_TYPE
              );
            }
            function isConcurrentMode(object) {
              return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
              return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
              return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
              return (
                typeof object === 'object' &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
            }
            function isForwardRef(object) {
              return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
              return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
              return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
              return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
              return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
              return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
              return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
              return typeOf(object) === REACT_SUSPENSE_TYPE;
            }
            exports2.AsyncMode = AsyncMode;
            exports2.ConcurrentMode = ConcurrentMode;
            exports2.ContextConsumer = ContextConsumer;
            exports2.ContextProvider = ContextProvider;
            exports2.Element = Element;
            exports2.ForwardRef = ForwardRef;
            exports2.Fragment = Fragment2;
            exports2.Lazy = Lazy;
            exports2.Memo = Memo;
            exports2.Portal = Portal;
            exports2.Profiler = Profiler;
            exports2.StrictMode = StrictMode;
            exports2.Suspense = Suspense;
            exports2.isAsyncMode = isAsyncMode;
            exports2.isConcurrentMode = isConcurrentMode;
            exports2.isContextConsumer = isContextConsumer;
            exports2.isContextProvider = isContextProvider;
            exports2.isElement = isElement;
            exports2.isForwardRef = isForwardRef;
            exports2.isFragment = isFragment;
            exports2.isLazy = isLazy;
            exports2.isMemo = isMemo;
            exports2.isPortal = isPortal;
            exports2.isProfiler = isProfiler;
            exports2.isStrictMode = isStrictMode;
            exports2.isSuspense = isSuspense;
            exports2.isValidElementType = isValidElementType;
            exports2.typeOf = typeOf;
          })();
        }
      },
    });
    var require_react_is2 = __commonJS2({
      '../../common/temp/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js'(
        exports2,
        module2
      ) {
        'use strict';
        if (false) {
          module2.exports = null;
        } else {
          module2.exports = require_react_is_development2();
        }
      },
    });
    var require_object_assign2 = __commonJS2({
      '../../common/temp/node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js'(
        exports2,
        module2
      ) {
        'use strict';
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;
        function toObject(val) {
          if (val === null || val === void 0) {
            throw new TypeError(
              'Object.assign cannot be called with null or undefined'
            );
          }
          return Object(val);
        }
        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            }
            var test1 = new String('abc');
            test1[5] = 'de';
            if (Object.getOwnPropertyNames(test1)[0] === '5') {
              return false;
            }
            var test2 = {};
            for (var i = 0; i < 10; i++) {
              test2['_' + String.fromCharCode(i)] = i;
            }
            var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
              return test2[n];
            });
            if (order2.join('') !== '0123456789') {
              return false;
            }
            var test3 = {};
            'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
              test3[letter] = letter;
            });
            if (
              Object.keys(Object.assign({}, test3)).join('') !==
              'abcdefghijklmnopqrst'
            ) {
              return false;
            }
            return true;
          } catch (err) {
            return false;
          }
        }
        module2.exports = shouldUseNative()
          ? Object.assign
          : function (target, source) {
              var from;
              var to = toObject(target);
              var symbols;
              for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);
                for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                  }
                }
                if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from);
                  for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                      to[symbols[i]] = from[symbols[i]];
                    }
                  }
                }
              }
              return to;
            };
      },
    });
    var require_ReactPropTypesSecret2 = __commonJS2({
      '../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js'(
        exports2,
        module2
      ) {
        'use strict';
        var ReactPropTypesSecret =
          'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        module2.exports = ReactPropTypesSecret;
      },
    });
    var require_checkPropTypes2 = __commonJS2({
      '../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/checkPropTypes.js'(
        exports2,
        module2
      ) {
        'use strict';
        var printWarning = function () {};
        if (true) {
          ReactPropTypesSecret = require_ReactPropTypesSecret2();
          loggedTypeFailures = {};
          has = Function.call.bind(Object.prototype.hasOwnProperty);
          printWarning = function (text) {
            var message = 'Warning: ' + text;
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              throw new Error(message);
            } catch (x) {}
          };
        }
        var ReactPropTypesSecret;
        var loggedTypeFailures;
        var has;
        function checkPropTypes(
          typeSpecs,
          values22,
          location,
          componentName,
          getStack
        ) {
          if (true) {
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error;
                try {
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error(
                      (componentName || 'React class') +
                        ': ' +
                        location +
                        ' type `' +
                        typeSpecName +
                        '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                        typeof typeSpecs[typeSpecName] +
                        '`.'
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error = typeSpecs[typeSpecName](
                    values22,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    ReactPropTypesSecret
                  );
                } catch (ex) {
                  error = ex;
                }
                if (error && !(error instanceof Error)) {
                  printWarning(
                    (componentName || 'React class') +
                      ': type specification of ' +
                      location +
                      ' `' +
                      typeSpecName +
                      '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                      typeof error +
                      '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
                  );
                }
                if (
                  error instanceof Error &&
                  !(error.message in loggedTypeFailures)
                ) {
                  loggedTypeFailures[error.message] = true;
                  var stack = getStack ? getStack() : '';
                  printWarning(
                    'Failed ' +
                      location +
                      ' type: ' +
                      error.message +
                      (stack != null ? stack : '')
                  );
                }
              }
            }
          }
        }
        checkPropTypes.resetWarningCache = function () {
          if (true) {
            loggedTypeFailures = {};
          }
        };
        module2.exports = checkPropTypes;
      },
    });
    var require_factoryWithTypeCheckers2 = __commonJS2({
      '../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js'(
        exports2,
        module2
      ) {
        'use strict';
        var ReactIs = require_react_is2();
        var assign = require_object_assign2();
        var ReactPropTypesSecret = require_ReactPropTypesSecret2();
        var checkPropTypes = require_checkPropTypes2();
        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        var printWarning = function () {};
        if (true) {
          printWarning = function (text) {
            var message = 'Warning: ' + text;
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              throw new Error(message);
            } catch (x) {}
          };
        }
        function emptyFunctionThatReturnsNull() {
          return null;
        }
        module2.exports = function (isValidElement, throwOnDirectAccess) {
          var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = '@@iterator';
          function getIteratorFn(maybeIterable) {
            var iteratorFn =
              maybeIterable &&
              ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
                maybeIterable[FAUX_ITERATOR_SYMBOL]);
            if (typeof iteratorFn === 'function') {
              return iteratorFn;
            }
          }
          var ANONYMOUS = '<<anonymous>>';
          var ReactPropTypes = {
            array: createPrimitiveTypeChecker('array'),
            bool: createPrimitiveTypeChecker('boolean'),
            func: createPrimitiveTypeChecker('function'),
            number: createPrimitiveTypeChecker('number'),
            object: createPrimitiveTypeChecker('object'),
            string: createPrimitiveTypeChecker('string'),
            symbol: createPrimitiveTypeChecker('symbol'),
            any: createAnyTypeChecker(),
            arrayOf: createArrayOfTypeChecker,
            element: createElementTypeChecker(),
            elementType: createElementTypeTypeChecker(),
            instanceOf: createInstanceTypeChecker,
            node: createNodeChecker(),
            objectOf: createObjectOfTypeChecker,
            oneOf: createEnumTypeChecker,
            oneOfType: createUnionTypeChecker,
            shape: createShapeTypeChecker,
            exact: createStrictShapeTypeChecker,
          };
          function is(x, y) {
            if (x === y) {
              return x !== 0 || 1 / x === 1 / y;
            } else {
              return x !== x && y !== y;
            }
          }
          function PropTypeError(message) {
            this.message = message;
            this.stack = '';
          }
          PropTypeError.prototype = Error.prototype;
          function createChainableTypeChecker(validate) {
            if (true) {
              var manualPropTypeCallCache = {};
              var manualPropTypeWarningCount = 0;
            }
            function checkType(
              isRequired,
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret
            ) {
              componentName = componentName || ANONYMOUS;
              propFullName = propFullName || propName;
              if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                  var err = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                  );
                  err.name = 'Invariant Violation';
                  throw err;
                } else if (typeof console !== 'undefined') {
                  var cacheKey = componentName + ':' + propName;
                  if (
                    !manualPropTypeCallCache[cacheKey] &&
                    manualPropTypeWarningCount < 3
                  ) {
                    printWarning(
                      'You are manually calling a React.PropTypes validation function for the `' +
                        propFullName +
                        '` prop on `' +
                        componentName +
                        '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
                    );
                    manualPropTypeCallCache[cacheKey] = true;
                    manualPropTypeWarningCount++;
                  }
                }
              }
              if (props[propName] == null) {
                if (isRequired) {
                  if (props[propName] === null) {
                    return new PropTypeError(
                      'The ' +
                        location +
                        ' `' +
                        propFullName +
                        '` is marked as required ' +
                        ('in `' + componentName + '`, but its value is `null`.')
                    );
                  }
                  return new PropTypeError(
                    'The ' +
                      location +
                      ' `' +
                      propFullName +
                      '` is marked as required in ' +
                      ('`' + componentName + '`, but its value is `undefined`.')
                  );
                }
                return null;
              } else {
                return validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                );
              }
            }
            var chainedCheckType = checkType.bind(null, false);
            chainedCheckType.isRequired = checkType.bind(null, true);
            return chainedCheckType;
          }
          function createPrimitiveTypeChecker(expectedType) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== expectedType) {
                var preciseType = getPreciseType(propValue);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      preciseType +
                      '` supplied to `' +
                      componentName +
                      '`, expected ') +
                    ('`' + expectedType + '`.')
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createAnyTypeChecker() {
            return createChainableTypeChecker(emptyFunctionThatReturnsNull);
          }
          function createArrayOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError(
                  'Property `' +
                    propFullName +
                    '` of component `' +
                    componentName +
                    '` has invalid PropType notation inside arrayOf.'
                );
              }
              var propValue = props[propName];
              if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected an array.')
                );
              }
              for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(
                  propValue,
                  i,
                  componentName,
                  location,
                  propFullName + '[' + i + ']',
                  ReactPropTypesSecret
                );
                if (error instanceof Error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createElementTypeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              var propValue = props[propName];
              if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected a single ReactElement.')
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createElementTypeTypeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              var propValue = props[propName];
              if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected a single ReactElement type.')
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createInstanceTypeChecker(expectedClass) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      actualClassName +
                      '` supplied to `' +
                      componentName +
                      '`, expected ') +
                    ('instance of `' + expectedClassName + '`.')
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createEnumTypeChecker(expectedValues) {
            if (!Array.isArray(expectedValues)) {
              if (true) {
                if (arguments.length > 1) {
                  printWarning(
                    'Invalid arguments supplied to oneOf, expected an array, got ' +
                      arguments.length +
                      ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                  );
                } else {
                  printWarning(
                    'Invalid argument supplied to oneOf, expected an array.'
                  );
                }
              }
              return emptyFunctionThatReturnsNull;
            }
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              var propValue = props[propName];
              for (var i = 0; i < expectedValues.length; i++) {
                if (is(propValue, expectedValues[i])) {
                  return null;
                }
              }
              var valuesString = JSON.stringify(
                expectedValues,
                function replacer(key, value) {
                  var type = getPreciseType(value);
                  if (type === 'symbol') {
                    return String(value);
                  }
                  return value;
                }
              );
              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` of value `' +
                  String(propValue) +
                  '` ' +
                  ('supplied to `' +
                    componentName +
                    '`, expected one of ' +
                    valuesString +
                    '.')
              );
            }
            return createChainableTypeChecker(validate);
          }
          function createObjectOfTypeChecker(typeChecker) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              if (typeof typeChecker !== 'function') {
                return new PropTypeError(
                  'Property `' +
                    propFullName +
                    '` of component `' +
                    componentName +
                    '` has invalid PropType notation inside objectOf.'
                );
              }
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type ' +
                    ('`' +
                      propType +
                      '` supplied to `' +
                      componentName +
                      '`, expected an object.')
                );
              }
              for (var key in propValue) {
                if (has(propValue, key)) {
                  var error = typeChecker(
                    propValue,
                    key,
                    componentName,
                    location,
                    propFullName + '.' + key,
                    ReactPropTypesSecret
                  );
                  if (error instanceof Error) {
                    return error;
                  }
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createUnionTypeChecker(arrayOfTypeCheckers) {
            if (!Array.isArray(arrayOfTypeCheckers)) {
              true
                ? printWarning(
                    'Invalid argument supplied to oneOfType, expected an instance of array.'
                  )
                : void 0;
              return emptyFunctionThatReturnsNull;
            }
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i];
              if (typeof checker !== 'function') {
                printWarning(
                  'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                    getPostfixForTypeWarning(checker) +
                    ' at index ' +
                    i +
                    '.'
                );
                return emptyFunctionThatReturnsNull;
              }
            }
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
                var checker2 = arrayOfTypeCheckers[i2];
                if (
                  checker2(
                    props,
                    propName,
                    componentName,
                    location,
                    propFullName,
                    ReactPropTypesSecret
                  ) == null
                ) {
                  return null;
                }
              }
              return new PropTypeError(
                'Invalid ' +
                  location +
                  ' `' +
                  propFullName +
                  '` supplied to ' +
                  ('`' + componentName + '`.')
              );
            }
            return createChainableTypeChecker(validate);
          }
          function createNodeChecker() {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              if (!isNode(props[propName])) {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` supplied to ' +
                    ('`' + componentName + '`, expected a ReactNode.')
                );
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createShapeTypeChecker(shapeTypes) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type `' +
                    propType +
                    '` ' +
                    ('supplied to `' + componentName + '`, expected `object`.')
                );
              }
              for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (!checker) {
                  continue;
                }
                var error = checker(
                  propValue,
                  key,
                  componentName,
                  location,
                  propFullName + '.' + key,
                  ReactPropTypesSecret
                );
                if (error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function createStrictShapeTypeChecker(shapeTypes) {
            function validate(
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              var propValue = props[propName];
              var propType = getPropType(propValue);
              if (propType !== 'object') {
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of type `' +
                    propType +
                    '` ' +
                    ('supplied to `' + componentName + '`, expected `object`.')
                );
              }
              var allKeys = assign({}, props[propName], shapeTypes);
              for (var key in allKeys) {
                var checker = shapeTypes[key];
                if (!checker) {
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` key `' +
                      key +
                      '` supplied to `' +
                      componentName +
                      '`.\nBad object: ' +
                      JSON.stringify(props[propName], null, '  ') +
                      '\nValid keys: ' +
                      JSON.stringify(Object.keys(shapeTypes), null, '  ')
                  );
                }
                var error = checker(
                  propValue,
                  key,
                  componentName,
                  location,
                  propFullName + '.' + key,
                  ReactPropTypesSecret
                );
                if (error) {
                  return error;
                }
              }
              return null;
            }
            return createChainableTypeChecker(validate);
          }
          function isNode(propValue) {
            switch (typeof propValue) {
              case 'number':
              case 'string':
              case 'undefined':
                return true;
              case 'boolean':
                return !propValue;
              case 'object':
                if (Array.isArray(propValue)) {
                  return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                  return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                  var iterator = iteratorFn.call(propValue);
                  var step;
                  if (iteratorFn !== propValue.entries) {
                    while (!(step = iterator.next()).done) {
                      if (!isNode(step.value)) {
                        return false;
                      }
                    }
                  } else {
                    while (!(step = iterator.next()).done) {
                      var entry = step.value;
                      if (entry) {
                        if (!isNode(entry[1])) {
                          return false;
                        }
                      }
                    }
                  }
                } else {
                  return false;
                }
                return true;
              default:
                return false;
            }
          }
          function isSymbol(propType, propValue) {
            if (propType === 'symbol') {
              return true;
            }
            if (!propValue) {
              return false;
            }
            if (propValue['@@toStringTag'] === 'Symbol') {
              return true;
            }
            if (typeof Symbol === 'function' && propValue instanceof Symbol) {
              return true;
            }
            return false;
          }
          function getPropType(propValue) {
            var propType = typeof propValue;
            if (Array.isArray(propValue)) {
              return 'array';
            }
            if (propValue instanceof RegExp) {
              return 'object';
            }
            if (isSymbol(propType, propValue)) {
              return 'symbol';
            }
            return propType;
          }
          function getPreciseType(propValue) {
            if (typeof propValue === 'undefined' || propValue === null) {
              return '' + propValue;
            }
            var propType = getPropType(propValue);
            if (propType === 'object') {
              if (propValue instanceof Date) {
                return 'date';
              } else if (propValue instanceof RegExp) {
                return 'regexp';
              }
            }
            return propType;
          }
          function getPostfixForTypeWarning(value) {
            var type = getPreciseType(value);
            switch (type) {
              case 'array':
              case 'object':
                return 'an ' + type;
              case 'boolean':
              case 'date':
              case 'regexp':
                return 'a ' + type;
              default:
                return type;
            }
          }
          function getClassName(propValue) {
            if (!propValue.constructor || !propValue.constructor.name) {
              return ANONYMOUS;
            }
            return propValue.constructor.name;
          }
          ReactPropTypes.checkPropTypes = checkPropTypes;
          ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
          ReactPropTypes.PropTypes = ReactPropTypes;
          return ReactPropTypes;
        };
      },
    });
    var require_prop_types2 = __commonJS2({
      '../../common/temp/node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js'(
        exports2,
        module2
      ) {
        if (true) {
          ReactIs = require_react_is2();
          throwOnDirectAccess = true;
          module2.exports = require_factoryWithTypeCheckers2()(
            ReactIs.isElement,
            throwOnDirectAccess
          );
        } else {
          module2.exports = null();
        }
        var ReactIs;
        var throwOnDirectAccess;
      },
    });
    __export(exports, {
      theme: () => theme2,
    });
    var common2 = {
      black: '#000',
      white: '#fff',
    };
    var common_default2 = common2;
    var red2 = {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      A100: '#ff8a80',
      A200: '#ff5252',
      A400: '#ff1744',
      A700: '#d50000',
    };
    var red_default2 = red2;
    var purple2 = {
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0',
      600: '#8e24aa',
      700: '#7b1fa2',
      800: '#6a1b9a',
      900: '#4a148c',
      A100: '#ea80fc',
      A200: '#e040fb',
      A400: '#d500f9',
      A700: '#aa00ff',
    };
    var purple_default2 = purple2;
    var blue2 = {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      A100: '#82b1ff',
      A200: '#448aff',
      A400: '#2979ff',
      A700: '#2962ff',
    };
    var blue_default2 = blue2;
    var lightBlue2 = {
      50: '#e1f5fe',
      100: '#b3e5fc',
      200: '#81d4fa',
      300: '#4fc3f7',
      400: '#29b6f6',
      500: '#03a9f4',
      600: '#039be5',
      700: '#0288d1',
      800: '#0277bd',
      900: '#01579b',
      A100: '#80d8ff',
      A200: '#40c4ff',
      A400: '#00b0ff',
      A700: '#0091ea',
    };
    var lightBlue_default2 = lightBlue2;
    var green2 = {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
      A100: '#b9f6ca',
      A200: '#69f0ae',
      A400: '#00e676',
      A700: '#00c853',
    };
    var green_default2 = green2;
    var orange2 = {
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',
      500: '#ff9800',
      600: '#fb8c00',
      700: '#f57c00',
      800: '#ef6c00',
      900: '#e65100',
      A100: '#ffd180',
      A200: '#ffab40',
      A400: '#ff9100',
      A700: '#ff6d00',
    };
    var orange_default2 = orange2;
    var grey2 = {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    };
    var grey_default2 = grey2;
    function _extends2() {
      _extends2 =
        Object.assign ||
        function (target) {
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
      return _extends2.apply(this, arguments);
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    var import_prop_types6 = __toModule2(require_prop_types2());
    var responsivePropType2 = true
      ? import_prop_types6.default.oneOfType([
          import_prop_types6.default.number,
          import_prop_types6.default.string,
          import_prop_types6.default.object,
          import_prop_types6.default.array,
        ])
      : {};
    var responsivePropType_default2 = responsivePropType2;
    function isPlainObject2(item) {
      return (
        item !== null && typeof item === 'object' && item.constructor === Object
      );
    }
    function deepmerge2(
      target,
      source,
      options = {
        clone: true,
      }
    ) {
      const output = options.clone ? _extends2({}, target) : target;
      if (isPlainObject2(target) && isPlainObject2(source)) {
        Object.keys(source).forEach(key => {
          if (key === '__proto__') {
            return;
          }
          if (
            isPlainObject2(source[key]) &&
            key in target &&
            isPlainObject2(target[key])
          ) {
            output[key] = deepmerge2(target[key], source[key], options);
          } else {
            output[key] = source[key];
          }
        });
      }
      return output;
    }
    var import_prop_types22 = __toModule2(require_prop_types2());
    function merge2(acc, item) {
      if (!item) {
        return acc;
      }
      return deepmerge2(acc, item, {
        clone: false,
      });
    }
    var merge_default2 = merge2;
    var values2 = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    };
    var defaultBreakpoints2 = {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      up: key => `@media (min-width:${values2[key]}px)`,
    };
    function handleBreakpoints2(props, propValue, styleFromPropValue) {
      const theme22 = props.theme || {};
      if (Array.isArray(propValue)) {
        const themeBreakpoints = theme22.breakpoints || defaultBreakpoints2;
        return propValue.reduce((acc, item, index) => {
          acc[themeBreakpoints.up(themeBreakpoints.keys[index])] =
            styleFromPropValue(propValue[index]);
          return acc;
        }, {});
      }
      if (typeof propValue === 'object') {
        const themeBreakpoints = theme22.breakpoints || defaultBreakpoints2;
        return Object.keys(propValue).reduce((acc, breakpoint) => {
          if (
            Object.keys(themeBreakpoints.values || values2).indexOf(
              breakpoint
            ) !== -1
          ) {
            const mediaKey = themeBreakpoints.up(breakpoint);
            acc[mediaKey] = styleFromPropValue(
              propValue[breakpoint],
              breakpoint
            );
          } else {
            const cssKey = breakpoint;
            acc[cssKey] = propValue[cssKey];
          }
          return acc;
        }, {});
      }
      const output = styleFromPropValue(propValue);
      return output;
    }
    function getPath2(obj, path) {
      if (!path || typeof path !== 'string') {
        return null;
      }
      return path
        .split('.')
        .reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);
    }
    function memoize3(fn) {
      const cache = {};
      return arg => {
        if (cache[arg] === void 0) {
          cache[arg] = fn(arg);
        }
        return cache[arg];
      };
    }
    var properties2 = {
      m: 'margin',
      p: 'padding',
    };
    var directions2 = {
      t: 'Top',
      r: 'Right',
      b: 'Bottom',
      l: 'Left',
      x: ['Left', 'Right'],
      y: ['Top', 'Bottom'],
    };
    var aliases2 = {
      marginX: 'mx',
      marginY: 'my',
      paddingX: 'px',
      paddingY: 'py',
    };
    var getCssProperties2 = memoize3(prop => {
      if (prop.length > 2) {
        if (aliases2[prop]) {
          prop = aliases2[prop];
        } else {
          return [prop];
        }
      }
      const [a, b] = prop.split('');
      const property = properties2[a];
      const direction = directions2[b] || '';
      return Array.isArray(direction)
        ? direction.map(dir => property + dir)
        : [property + direction];
    });
    var marginKeys2 = [
      'm',
      'mt',
      'mr',
      'mb',
      'ml',
      'mx',
      'my',
      'margin',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'marginX',
      'marginY',
      'marginInline',
      'marginInlineStart',
      'marginInlineEnd',
      'marginBlock',
      'marginBlockStart',
      'marginBlockEnd',
    ];
    var paddingKeys2 = [
      'p',
      'pt',
      'pr',
      'pb',
      'pl',
      'px',
      'py',
      'padding',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'paddingX',
      'paddingY',
      'paddingInline',
      'paddingInlineStart',
      'paddingInlineEnd',
      'paddingBlock',
      'paddingBlockStart',
      'paddingBlockEnd',
    ];
    var spacingKeys2 = [...marginKeys2, ...paddingKeys2];
    function createUnaryUnit2(theme22, themeKey, defaultValue, propName) {
      const themeSpacing = getPath2(theme22, themeKey) || defaultValue;
      if (typeof themeSpacing === 'number') {
        return abs => {
          if (typeof abs === 'string') {
            return abs;
          }
          if (true) {
            if (typeof abs !== 'number') {
              console.error(
                `MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`
              );
            }
          }
          return themeSpacing * abs;
        };
      }
      if (Array.isArray(themeSpacing)) {
        return abs => {
          if (typeof abs === 'string') {
            return abs;
          }
          if (true) {
            if (!Number.isInteger(abs)) {
              console.error(
                [
                  `MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`,
                ].join('\n')
              );
            } else if (abs > themeSpacing.length - 1) {
              console.error(
                [
                  `MUI: The value provided (${abs}) overflows.`,
                  `The supported values are: ${JSON.stringify(themeSpacing)}.`,
                  `${abs} > ${
                    themeSpacing.length - 1
                  }, you need to add the missing values.`,
                ].join('\n')
              );
            }
          }
          return themeSpacing[abs];
        };
      }
      if (typeof themeSpacing === 'function') {
        return themeSpacing;
      }
      if (true) {
        console.error(
          [
            `MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`,
            'It should be a number, an array or a function.',
          ].join('\n')
        );
      }
      return () => void 0;
    }
    function createUnarySpacing2(theme22) {
      return createUnaryUnit2(theme22, 'spacing', 8, 'spacing');
    }
    function getValue3(transformer, propValue) {
      if (typeof propValue === 'string' || propValue == null) {
        return propValue;
      }
      const abs = Math.abs(propValue);
      const transformed = transformer(abs);
      if (propValue >= 0) {
        return transformed;
      }
      if (typeof transformed === 'number') {
        return -transformed;
      }
      return `-${transformed}`;
    }
    function getStyleFromPropValue2(cssProperties, transformer) {
      return propValue =>
        cssProperties.reduce((acc, cssProperty) => {
          acc[cssProperty] = getValue3(transformer, propValue);
          return acc;
        }, {});
    }
    function resolveCssProperty2(props, keys, prop, transformer) {
      if (keys.indexOf(prop) === -1) {
        return null;
      }
      const cssProperties = getCssProperties2(prop);
      const styleFromPropValue = getStyleFromPropValue2(
        cssProperties,
        transformer
      );
      const propValue = props[prop];
      return handleBreakpoints2(props, propValue, styleFromPropValue);
    }
    function style3(props, keys) {
      const transformer = createUnarySpacing2(props.theme);
      return Object.keys(props)
        .map(prop => resolveCssProperty2(props, keys, prop, transformer))
        .reduce(merge_default2, {});
    }
    function margin2(props) {
      return style3(props, marginKeys2);
    }
    margin2.propTypes = true
      ? marginKeys2.reduce((obj, key) => {
          obj[key] = responsivePropType_default2;
          return obj;
        }, {})
      : {};
    margin2.filterProps = marginKeys2;
    function padding2(props) {
      return style3(props, paddingKeys2);
    }
    padding2.propTypes = true
      ? paddingKeys2.reduce((obj, key) => {
          obj[key] = responsivePropType_default2;
          return obj;
        }, {})
      : {};
    padding2.filterProps = paddingKeys2;
    function spacing2(props) {
      return style3(props, spacingKeys2);
    }
    spacing2.propTypes = true
      ? spacingKeys2.reduce((obj, key) => {
          obj[key] = responsivePropType_default2;
          return obj;
        }, {})
      : {};
    spacing2.filterProps = spacingKeys2;
    var _excluded9 = ['values', 'unit', 'step'];
    function createBreakpoints2(breakpoints) {
      const {
          values: values22 = {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
          unit = 'px',
          step = 5,
        } = breakpoints,
        other = _objectWithoutPropertiesLoose2(breakpoints, _excluded9);
      const keys = Object.keys(values22);
      function up(key) {
        const value = typeof values22[key] === 'number' ? values22[key] : key;
        return `@media (min-width:${value}${unit})`;
      }
      function down(key) {
        const value = typeof values22[key] === 'number' ? values22[key] : key;
        return `@media (max-width:${value - step / 100}${unit})`;
      }
      function between(start, end) {
        const endIndex = keys.indexOf(end);
        return `@media (min-width:${
          typeof values22[start] === 'number' ? values22[start] : start
        }${unit}) and (max-width:${
          (endIndex !== -1 && typeof values22[keys[endIndex]] === 'number'
            ? values22[keys[endIndex]]
            : end) -
          step / 100
        }${unit})`;
      }
      function only(key) {
        if (keys.indexOf(key) + 1 < keys.length) {
          return between(key, keys[keys.indexOf(key) + 1]);
        }
        return up(key);
      }
      return _extends2(
        {
          keys,
          values: values22,
          up,
          down,
          between,
          only,
          unit,
        },
        other
      );
    }
    var shape2 = {
      borderRadius: 4,
    };
    var shape_default2 = shape2;
    function createSpacing2(spacingInput = 8) {
      if (spacingInput.mui) {
        return spacingInput;
      }
      const transform2 = createUnarySpacing2({
        spacing: spacingInput,
      });
      const spacing22 = (...argsInput) => {
        if (true) {
          if (!(argsInput.length <= 4)) {
            console.error(
              `MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`
            );
          }
        }
        const args = argsInput.length === 0 ? [1] : argsInput;
        return args
          .map(argument => {
            const output = transform2(argument);
            return typeof output === 'number' ? `${output}px` : output;
          })
          .join(' ');
      };
      spacing22.mui = true;
      return spacing22;
    }
    var _excluded22 = ['breakpoints', 'palette', 'spacing', 'shape'];
    function createTheme3(options = {}, ...args) {
      const {
          breakpoints: breakpointsInput = {},
          palette: paletteInput = {},
          spacing: spacingInput,
          shape: shapeInput = {},
        } = options,
        other = _objectWithoutPropertiesLoose2(options, _excluded22);
      const breakpoints = createBreakpoints2(breakpointsInput);
      const spacing22 = createSpacing2(spacingInput);
      let muiTheme = deepmerge2(
        {
          breakpoints,
          direction: 'ltr',
          components: {},
          palette: _extends2(
            {
              mode: 'light',
            },
            paletteInput
          ),
          spacing: spacing22,
          shape: _extends2({}, shape_default2, shapeInput),
        },
        other
      );
      muiTheme = args.reduce(
        (acc, argument) => deepmerge2(acc, argument),
        muiTheme
      );
      return muiTheme;
    }
    var createTheme_default3 = createTheme3;
    function clamp2(value, min = 0, max = 1) {
      if (true) {
        if (value < min || value > max) {
          console.error(
            `MUI: The value provided ${value} is out of range [${min}, ${max}].`
          );
        }
      }
      return Math.min(Math.max(min, value), max);
    }
    function hexToRgb2(color2) {
      color2 = color2.substr(1);
      const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, 'g');
      let colors = color2.match(re);
      if (colors && colors[0].length === 1) {
        colors = colors.map(n => n + n);
      }
      return colors
        ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
            .map((n, index) => {
              return index < 3
                ? parseInt(n, 16)
                : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3;
            })
            .join(', ')})`
        : '';
    }
    function decomposeColor2(color2) {
      if (color2.type) {
        return color2;
      }
      if (color2.charAt(0) === '#') {
        return decomposeColor2(hexToRgb2(color2));
      }
      const marker = color2.indexOf('(');
      const type = color2.substring(0, marker);
      if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
        throw new Error(
          true
            ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`
            : formatMuiErrorMessage(9, color2)
        );
      }
      let values22 = color2.substring(marker + 1, color2.length - 1);
      let colorSpace;
      if (type === 'color') {
        values22 = values22.split(' ');
        colorSpace = values22.shift();
        if (values22.length === 4 && values22[3].charAt(0) === '/') {
          values22[3] = values22[3].substr(1);
        }
        if (
          ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
            colorSpace
          ) === -1
        ) {
          throw new Error(
            true
              ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`
              : formatMuiErrorMessage(10, colorSpace)
          );
        }
      } else {
        values22 = values22.split(',');
      }
      values22 = values22.map(value => parseFloat(value));
      return {
        type,
        values: values22,
        colorSpace,
      };
    }
    function recomposeColor2(color2) {
      const { type, colorSpace } = color2;
      let { values: values22 } = color2;
      if (type.indexOf('rgb') !== -1) {
        values22 = values22.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
      } else if (type.indexOf('hsl') !== -1) {
        values22[1] = `${values22[1]}%`;
        values22[2] = `${values22[2]}%`;
      }
      if (type.indexOf('color') !== -1) {
        values22 = `${colorSpace} ${values22.join(' ')}`;
      } else {
        values22 = `${values22.join(', ')}`;
      }
      return `${type}(${values22})`;
    }
    function hslToRgb2(color2) {
      color2 = decomposeColor2(color2);
      const { values: values22 } = color2;
      const h = values22[0];
      const s = values22[1] / 100;
      const l = values22[2] / 100;
      const a = s * Math.min(l, 1 - l);
      const f = (n, k = (n + h / 30) % 12) =>
        l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      let type = 'rgb';
      const rgb = [
        Math.round(f(0) * 255),
        Math.round(f(8) * 255),
        Math.round(f(4) * 255),
      ];
      if (color2.type === 'hsla') {
        type += 'a';
        rgb.push(values22[3]);
      }
      return recomposeColor2({
        type,
        values: rgb,
      });
    }
    function getLuminance2(color2) {
      color2 = decomposeColor2(color2);
      let rgb =
        color2.type === 'hsl'
          ? decomposeColor2(hslToRgb2(color2)).values
          : color2.values;
      rgb = rgb.map(val => {
        if (color2.type !== 'color') {
          val /= 255;
        }
        return val <= 0.03928
          ? val / 12.92
          : __pow2((val + 0.055) / 1.055, 2.4);
      });
      return Number(
        (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
      );
    }
    function getContrastRatio2(foreground, background) {
      const lumA = getLuminance2(foreground);
      const lumB = getLuminance2(background);
      return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    }
    function darken2(color2, coefficient) {
      color2 = decomposeColor2(color2);
      coefficient = clamp2(coefficient);
      if (color2.type.indexOf('hsl') !== -1) {
        color2.values[2] *= 1 - coefficient;
      } else if (
        color2.type.indexOf('rgb') !== -1 ||
        color2.type.indexOf('color') !== -1
      ) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] *= 1 - coefficient;
        }
      }
      return recomposeColor2(color2);
    }
    function lighten2(color2, coefficient) {
      color2 = decomposeColor2(color2);
      coefficient = clamp2(coefficient);
      if (color2.type.indexOf('hsl') !== -1) {
        color2.values[2] += (100 - color2.values[2]) * coefficient;
      } else if (color2.type.indexOf('rgb') !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] += (255 - color2.values[i]) * coefficient;
        }
      } else if (color2.type.indexOf('color') !== -1) {
        for (let i = 0; i < 3; i += 1) {
          color2.values[i] += (1 - color2.values[i]) * coefficient;
        }
      }
      return recomposeColor2(color2);
    }
    var defaultGenerator2 = componentName => componentName;
    var createClassNameGenerator2 = () => {
      let generate = defaultGenerator2;
      return {
        configure(generator) {
          generate = generator;
        },
        generate(componentName) {
          return generate(componentName);
        },
        reset() {
          generate = defaultGenerator2;
        },
      };
    };
    var ClassNameGenerator2 = createClassNameGenerator2();
    var ClassNameGenerator_default2 = ClassNameGenerator2;
    var globalStateClassesMapping2 = {
      active: 'Mui-active',
      checked: 'Mui-checked',
      completed: 'Mui-completed',
      disabled: 'Mui-disabled',
      error: 'Mui-error',
      expanded: 'Mui-expanded',
      focused: 'Mui-focused',
      focusVisible: 'Mui-focusVisible',
      required: 'Mui-required',
      selected: 'Mui-selected',
    };
    function generateUtilityClass2(componentName, slot) {
      const globalStateClass = globalStateClassesMapping2[slot];
      return (
        globalStateClass ||
        `${ClassNameGenerator_default2.generate(componentName)}-${slot}`
      );
    }
    function createMixins2(breakpoints, spacing22, mixins) {
      return _extends2(
        {
          toolbar: {
            minHeight: 56,
            [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
              minHeight: 48,
            },
            [breakpoints.up('sm')]: {
              minHeight: 64,
            },
          },
        },
        mixins
      );
    }
    var _excluded32 = ['mode', 'contrastThreshold', 'tonalOffset'];
    var light2 = {
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      background: {
        paper: common_default2.white,
        default: common_default2.white,
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        selected: 'rgba(0, 0, 0, 0.08)',
        selectedOpacity: 0.08,
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    };
    var dark2 = {
      text: {
        primary: common_default2.white,
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)',
      },
      divider: 'rgba(255, 255, 255, 0.12)',
      background: {
        paper: '#121212',
        default: '#121212',
      },
      action: {
        active: common_default2.white,
        hover: 'rgba(255, 255, 255, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(255, 255, 255, 0.16)',
        selectedOpacity: 0.16,
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(255, 255, 255, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    };
    function addLightOrDark2(intent, direction, shade, tonalOffset) {
      const tonalOffsetLight = tonalOffset.light || tonalOffset;
      const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
      if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
          intent[direction] = intent[shade];
        } else if (direction === 'light') {
          intent.light = lighten2(intent.main, tonalOffsetLight);
        } else if (direction === 'dark') {
          intent.dark = darken2(intent.main, tonalOffsetDark);
        }
      }
    }
    function getDefaultPrimary2(mode = 'light') {
      if (mode === 'dark') {
        return {
          main: blue_default2[200],
          light: blue_default2[50],
          dark: blue_default2[400],
        };
      }
      return {
        main: blue_default2[700],
        light: blue_default2[400],
        dark: blue_default2[800],
      };
    }
    function getDefaultSecondary2(mode = 'light') {
      if (mode === 'dark') {
        return {
          main: purple_default2[200],
          light: purple_default2[50],
          dark: purple_default2[400],
        };
      }
      return {
        main: purple_default2[500],
        light: purple_default2[300],
        dark: purple_default2[700],
      };
    }
    function getDefaultError2(mode = 'light') {
      if (mode === 'dark') {
        return {
          main: red_default2[500],
          light: red_default2[300],
          dark: red_default2[700],
        };
      }
      return {
        main: red_default2[700],
        light: red_default2[400],
        dark: red_default2[800],
      };
    }
    function getDefaultInfo2(mode = 'light') {
      if (mode === 'dark') {
        return {
          main: lightBlue_default2[400],
          light: lightBlue_default2[300],
          dark: lightBlue_default2[700],
        };
      }
      return {
        main: lightBlue_default2[700],
        light: lightBlue_default2[500],
        dark: lightBlue_default2[900],
      };
    }
    function getDefaultSuccess2(mode = 'light') {
      if (mode === 'dark') {
        return {
          main: green_default2[400],
          light: green_default2[300],
          dark: green_default2[700],
        };
      }
      return {
        main: green_default2[800],
        light: green_default2[500],
        dark: green_default2[900],
      };
    }
    function getDefaultWarning2(mode = 'light') {
      if (mode === 'dark') {
        return {
          main: orange_default2[400],
          light: orange_default2[300],
          dark: orange_default2[700],
        };
      }
      return {
        main: '#ed6c02',
        light: orange_default2[500],
        dark: orange_default2[900],
      };
    }
    function createPalette2(palette2) {
      const {
          mode = 'light',
          contrastThreshold = 3,
          tonalOffset = 0.2,
        } = palette2,
        other = _objectWithoutPropertiesLoose2(palette2, _excluded32);
      const primary = palette2.primary || getDefaultPrimary2(mode);
      const secondary = palette2.secondary || getDefaultSecondary2(mode);
      const error = palette2.error || getDefaultError2(mode);
      const info = palette2.info || getDefaultInfo2(mode);
      const success = palette2.success || getDefaultSuccess2(mode);
      const warning = palette2.warning || getDefaultWarning2(mode);
      function getContrastText(background) {
        const contrastText =
          getContrastRatio2(background, dark2.text.primary) >= contrastThreshold
            ? dark2.text.primary
            : light2.text.primary;
        if (true) {
          const contrast = getContrastRatio2(background, contrastText);
          if (contrast < 3) {
            console.error(
              [
                `MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
                'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
                'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
              ].join('\n')
            );
          }
        }
        return contrastText;
      }
      const augmentColor = ({
        color: color2,
        name,
        mainShade = 500,
        lightShade = 300,
        darkShade = 700,
      }) => {
        color2 = _extends2({}, color2);
        if (!color2.main && color2[mainShade]) {
          color2.main = color2[mainShade];
        }
        if (!color2.hasOwnProperty('main')) {
          throw new Error(
            true
              ? `MUI: The color${
                  name ? ` (${name})` : ''
                } provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.`
              : formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade)
          );
        }
        if (typeof color2.main !== 'string') {
          throw new Error(
            true
              ? `MUI: The color${
                  name ? ` (${name})` : ''
                } provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(
                  color2.main
                )}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`
              : formatMuiErrorMessage(
                  12,
                  name ? ` (${name})` : '',
                  JSON.stringify(color2.main)
                )
          );
        }
        addLightOrDark2(color2, 'light', lightShade, tonalOffset);
        addLightOrDark2(color2, 'dark', darkShade, tonalOffset);
        if (!color2.contrastText) {
          color2.contrastText = getContrastText(color2.main);
        }
        return color2;
      };
      const modes = {
        dark: dark2,
        light: light2,
      };
      if (true) {
        if (!modes[mode]) {
          console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
        }
      }
      const paletteOutput = deepmerge2(
        _extends2(
          {
            common: common_default2,
            mode,
            primary: augmentColor({
              color: primary,
              name: 'primary',
            }),
            secondary: augmentColor({
              color: secondary,
              name: 'secondary',
              mainShade: 'A400',
              lightShade: 'A200',
              darkShade: 'A700',
            }),
            error: augmentColor({
              color: error,
              name: 'error',
            }),
            warning: augmentColor({
              color: warning,
              name: 'warning',
            }),
            info: augmentColor({
              color: info,
              name: 'info',
            }),
            success: augmentColor({
              color: success,
              name: 'success',
            }),
            grey: grey_default2,
            contrastThreshold,
            getContrastText,
            augmentColor,
            tonalOffset,
          },
          modes[mode]
        ),
        other
      );
      return paletteOutput;
    }
    var _excluded42 = [
      'fontFamily',
      'fontSize',
      'fontWeightLight',
      'fontWeightRegular',
      'fontWeightMedium',
      'fontWeightBold',
      'htmlFontSize',
      'allVariants',
      'pxToRem',
    ];
    function round2(value) {
      return Math.round(value * 1e5) / 1e5;
    }
    var caseAllCaps2 = {
      textTransform: 'uppercase',
    };
    var defaultFontFamily2 = '"Roboto", "Helvetica", "Arial", sans-serif';
    function createTypography2(palette2, typography2) {
      const _ref =
          typeof typography2 === 'function'
            ? typography2(palette2)
            : typography2,
        {
          fontFamily: fontFamily2 = defaultFontFamily2,
          fontSize: fontSize2 = 14,
          fontWeightLight = 300,
          fontWeightRegular = 400,
          fontWeightMedium = 500,
          fontWeightBold = 700,
          htmlFontSize = 16,
          allVariants,
          pxToRem: pxToRem2,
        } = _ref,
        other = _objectWithoutPropertiesLoose2(_ref, _excluded42);
      if (true) {
        if (typeof fontSize2 !== 'number') {
          console.error('MUI: `fontSize` is required to be a number.');
        }
        if (typeof htmlFontSize !== 'number') {
          console.error('MUI: `htmlFontSize` is required to be a number.');
        }
      }
      const coef = fontSize2 / 14;
      const pxToRem =
        pxToRem2 || (size => `${(size / htmlFontSize) * coef}rem`);
      const buildVariant = (
        fontWeight2,
        size,
        lineHeight2,
        letterSpacing2,
        casing
      ) =>
        _extends2(
          {
            fontFamily: fontFamily2,
            fontWeight: fontWeight2,
            fontSize: pxToRem(size),
            lineHeight: lineHeight2,
          },
          fontFamily2 === defaultFontFamily2
            ? {
                letterSpacing: `${round2(letterSpacing2 / size)}em`,
              }
            : {},
          casing,
          allVariants
        );
      const variants = {
        h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
        h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
        h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
        h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
        h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
        h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
        body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
        body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
        button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps2),
        caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps2),
      };
      return deepmerge2(
        _extends2(
          {
            htmlFontSize,
            pxToRem,
            fontFamily: fontFamily2,
            fontSize: fontSize2,
            fontWeightLight,
            fontWeightRegular,
            fontWeightMedium,
            fontWeightBold,
          },
          variants
        ),
        other,
        {
          clone: false,
        }
      );
    }
    var shadowKeyUmbraOpacity2 = 0.2;
    var shadowKeyPenumbraOpacity2 = 0.14;
    var shadowAmbientShadowOpacity2 = 0.12;
    function createShadow2(...px) {
      return [
        `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity2})`,
        `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity2})`,
        `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity2})`,
      ].join(',');
    }
    var shadows2 = [
      'none',
      createShadow2(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      createShadow2(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      createShadow2(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      createShadow2(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      createShadow2(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      createShadow2(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      createShadow2(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      createShadow2(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      createShadow2(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      createShadow2(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      createShadow2(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      createShadow2(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      createShadow2(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      createShadow2(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      createShadow2(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      createShadow2(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      createShadow2(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      createShadow2(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      createShadow2(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      createShadow2(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      createShadow2(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      createShadow2(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      createShadow2(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      createShadow2(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ];
    var shadows_default3 = shadows2;
    var _excluded52 = ['duration', 'easing', 'delay'];
    var easing2 = {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    };
    var duration2 = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
    function formatMs2(milliseconds) {
      return `${Math.round(milliseconds)}ms`;
    }
    function getAutoHeightDuration2(height2) {
      if (!height2) {
        return 0;
      }
      const constant = height2 / 36;
      return Math.round((4 + 15 * __pow2(constant, 0.25) + constant / 5) * 10);
    }
    function createTransitions2(inputTransitions) {
      const mergedEasing = _extends2({}, easing2, inputTransitions.easing);
      const mergedDuration = _extends2(
        {},
        duration2,
        inputTransitions.duration
      );
      const create = (props = ['all'], options = {}) => {
        const {
            duration: durationOption = mergedDuration.standard,
            easing: easingOption = mergedEasing.easeInOut,
            delay = 0,
          } = options,
          other = _objectWithoutPropertiesLoose2(options, _excluded52);
        if (true) {
          const isString = value => typeof value === 'string';
          const isNumber = value => !isNaN(parseFloat(value));
          if (!isString(props) && !Array.isArray(props)) {
            console.error('MUI: Argument "props" must be a string or Array.');
          }
          if (!isNumber(durationOption) && !isString(durationOption)) {
            console.error(
              `MUI: Argument "duration" must be a number or a string but found ${durationOption}.`
            );
          }
          if (!isString(easingOption)) {
            console.error('MUI: Argument "easing" must be a string.');
          }
          if (!isNumber(delay) && !isString(delay)) {
            console.error(
              'MUI: Argument "delay" must be a number or a string.'
            );
          }
          if (Object.keys(other).length !== 0) {
            console.error(
              `MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`
            );
          }
        }
        return (Array.isArray(props) ? props : [props])
          .map(
            animatedProp =>
              `${animatedProp} ${
                typeof durationOption === 'string'
                  ? durationOption
                  : formatMs2(durationOption)
              } ${easingOption} ${
                typeof delay === 'string' ? delay : formatMs2(delay)
              }`
          )
          .join(',');
      };
      return _extends2(
        {
          getAutoHeightDuration: getAutoHeightDuration2,
          create,
        },
        inputTransitions,
        {
          easing: mergedEasing,
          duration: mergedDuration,
        }
      );
    }
    var zIndex3 = {
      mobileStepper: 1e3,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    };
    var zIndex_default2 = zIndex3;
    var _excluded62 = [
      'breakpoints',
      'mixins',
      'spacing',
      'palette',
      'transitions',
      'typography',
      'shape',
    ];
    function createTheme22(options = {}, ...args) {
      const {
          mixins: mixinsInput = {},
          palette: paletteInput = {},
          transitions: transitionsInput = {},
          typography: typographyInput = {},
        } = options,
        other = _objectWithoutPropertiesLoose2(options, _excluded62);
      const palette2 = createPalette2(paletteInput);
      const systemTheme = createTheme_default3(options);
      let muiTheme = deepmerge2(systemTheme, {
        mixins: createMixins2(
          systemTheme.breakpoints,
          systemTheme.spacing,
          mixinsInput
        ),
        palette: palette2,
        shadows: shadows_default3.slice(),
        typography: createTypography2(palette2, typographyInput),
        transitions: createTransitions2(transitionsInput),
        zIndex: _extends2({}, zIndex_default2),
      });
      muiTheme = deepmerge2(muiTheme, other);
      muiTheme = args.reduce(
        (acc, argument) => deepmerge2(acc, argument),
        muiTheme
      );
      if (true) {
        const stateClasses = [
          'active',
          'checked',
          'completed',
          'disabled',
          'error',
          'expanded',
          'focused',
          'focusVisible',
          'required',
          'selected',
        ];
        const traverse = (node, component) => {
          let key;
          for (key in node) {
            const child = node[key];
            if (
              stateClasses.indexOf(key) !== -1 &&
              Object.keys(child).length > 0
            ) {
              if (true) {
                const stateClass = generateUtilityClass2('', key);
                console.error(
                  [
                    `MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`,
                    'You can not override it like this: ',
                    JSON.stringify(node, null, 2),
                    '',
                    `Instead, you need to use the '&.${stateClass}' syntax:`,
                    JSON.stringify(
                      {
                        root: {
                          [`&.${stateClass}`]: child,
                        },
                      },
                      null,
                      2
                    ),
                    '',
                    'https://mui.com/r/state-classes-guide',
                  ].join('\n')
                );
              }
              node[key] = {};
            }
          }
        };
        Object.keys(muiTheme.components).forEach(component => {
          const styleOverrides = muiTheme.components[component].styleOverrides;
          if (styleOverrides && component.indexOf('Mui') === 0) {
            traverse(styleOverrides, component);
          }
        });
      }
      return muiTheme;
    }
    var createTheme_default22 = createTheme22;
    var theme2 = createTheme_default22({
      palette: {
        primary: { main: '#555753' },
        secondary: { main: '#7D775C' },
        info: { main: '#B7A5DF' },
        error: { main: red_default2[500] },
        warning: { main: orange_default2[500] },
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      spacing: 10,
    });
  },
});

// src/index.tsx
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/colors/common.js
init_react_shim();
var common = {
  black: '#000',
  white: '#fff',
};
var common_default = common;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/colors/red.js
init_react_shim();
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000',
};
var red_default = red;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/colors/purple.js
init_react_shim();
var purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff',
};
var purple_default = purple;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/colors/blue.js
init_react_shim();
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff',
};
var blue_default = blue;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/colors/lightBlue.js
init_react_shim();
var lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea',
};
var lightBlue_default = lightBlue;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/colors/green.js
init_react_shim();
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853',
};
var green_default = green;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/colors/orange.js
init_react_shim();
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00',
};
var orange_default = orange;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/colors/grey.js
init_react_shim();
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161',
};
var grey_default = grey;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
init_react_shim();
function _extends() {
  _extends =
    Object.assign ||
    function (target) {
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
  return _extends.apply(this, arguments);
}

// ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_react_shim();
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+styled-engine@5.2.0_c295042f06038c5042b55c2330454282/node_modules/@mui/styled-engine/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@emotion+styled@11.6.0_710a1baf939bd0124c2f7745a81f05ad/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
init_react_shim();
import 'react';

// ../../common/temp/node_modules/.pnpm/@emotion+is-prop-valid@1.1.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@emotion+memoize@0.7.5/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
init_react_shim();
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var emotion_memoize_browser_esm_default = memoize;

// ../../common/temp/node_modules/.pnpm/@emotion+is-prop-valid@1.1.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js
var reactPropsRegex =
  /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ emotion_memoize_browser_esm_default(function (
  prop
) {
  return (
    reactPropsRegex.test(prop) ||
    (prop.charCodeAt(0) === 111 &&
      prop.charCodeAt(1) === 110 &&
      prop.charCodeAt(2) < 91)
  );
});
var emotion_is_prop_valid_browser_esm_default = isPropValid;

// ../../common/temp/node_modules/.pnpm/@emotion+styled@11.6.0_710a1baf939bd0124c2f7745a81f05ad/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
init_react_shim();
import { useContext, createElement, Fragment } from 'react';
import { withEmotionCache, ThemeContext } from '@emotion/react';

// ../../common/temp/node_modules/.pnpm/@emotion+utils@1.0.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
init_react_shim();
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ';');
    } else {
      rawClassName += className + ' ';
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  var className = cache.key + '-' + serialized.name;
  if (
    (isStringTag === false || isBrowser === false) &&
    cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert(
        serialized === current ? '.' + className : '',
        current,
        cache.sheet,
        true
      );
      current = current.next;
    } while (current !== void 0);
  }
};

// ../../common/temp/node_modules/.pnpm/@emotion+serialize@1.0.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@emotion+hash@0.8.0/node_modules/@emotion/hash/dist/hash.browser.esm.js
init_react_shim();
function murmur2(str) {
  var h = 0;
  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k =
      (str.charCodeAt(i) & 255) |
      ((str.charCodeAt(++i) & 255) << 8) |
      ((str.charCodeAt(++i) & 255) << 16) |
      ((str.charCodeAt(++i) & 255) << 24);
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 59797) << 16);
    k ^= k >>> 24;
    h =
      ((k & 65535) * 1540483477 + (((k >>> 16) * 59797) << 16)) ^
      ((h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16));
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + (((h >>> 16) * 59797) << 16);
  return ((h ^ (h >>> 15)) >>> 0).toString(36);
}
var hash_browser_esm_default = murmur2;

// ../../common/temp/node_modules/.pnpm/@emotion+unitless@0.7.5/node_modules/@emotion/unitless/dist/unitless.browser.esm.js
init_react_shim();
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
var unitless_browser_esm_default = unitlessKeys;

// ../../common/temp/node_modules/.pnpm/@emotion+serialize@1.0.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR =
  "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = /* @__PURE__ */ emotion_memoize_browser_esm_default(
  function (styleName) {
    return isCustomProperty(styleName)
      ? styleName
      : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  }
);
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName': {
      if (typeof value === 'string') {
        return value.replace(animationRegex, function (match, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor,
          };
          return p1;
        });
      }
    }
  }
  if (
    unitless_browser_esm_default[key] !== 1 &&
    !isCustomProperty(key) &&
    typeof value === 'number' &&
    value !== 0
  ) {
    return value + 'px';
  }
  return value;
};
if (true) {
  contentValuePattern =
    /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  oldProcessStyleValue = processStyleValue;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue3(key, value) {
    if (key === 'content') {
      if (
        typeof value !== 'string' ||
        (contentValues.indexOf(value) === -1 &&
          !contentValuePattern.test(value) &&
          (value.charAt(0) !== value.charAt(value.length - 1) ||
            (value.charAt(0) !== '"' && value.charAt(0) !== "'")))
      ) {
        throw new Error(
          "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
            value +
            '"\'`'
        );
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (
      processed !== '' &&
      !isCustomProperty(key) &&
      key.indexOf('-') !== -1 &&
      hyphenatedCache[key] === void 0
    ) {
      hyphenatedCache[key] = true;
      console.error(
        'Using kebab-case for css properties in objects is not supported. Did you mean ' +
          key
            .replace(msPattern, 'ms-')
            .replace(hyphenPattern, function (str, _char) {
              return _char.toUpperCase();
            }) +
          '?'
      );
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error(
        'Component selectors can only be used in conjunction with @emotion/babel-plugin.'
      );
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case 'boolean': {
      return '';
    }
    case 'object': {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor,
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next = interpolation.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor,
            };
            next = next.next;
          }
        }
        var styles = interpolation.styles + ';';
        if (interpolation.map !== void 0) {
          styles += interpolation.map;
        }
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case 'function': {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else if (true) {
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        );
      }
      break;
    }
    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(
          animationRegex,
          function (match, p1, p2) {
            var fakeVarName = 'animation' + matched.length;
            matched.push(
              'const ' +
                fakeVarName +
                ' = keyframes`' +
                p2.replace(/^@keyframes animation-\w+/, '') +
                '`'
            );
            return '${' + fakeVarName + '}';
          }
        );
        if (matched.length) {
          console.error(
            '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
              [].concat(matched, ['`' + replaced + '`']).join('\n') +
              '\n\nYou should wrap it with `css` like this:\n\n' +
              ('css`' + replaced + '`')
          );
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ';';
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== void 0) {
          string += _key + '{' + registered[value] + '}';
        } else if (isProcessableValue(value)) {
          string +=
            processStyleName(_key) + ':' + processStyleValue(_key, value) + ';';
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && true) {
          throw new Error(
            'Component selectors can only be used in conjunction with @emotion/babel-plugin.'
          );
        }
        if (
          Array.isArray(value) &&
          typeof value[0] === 'string' &&
          (registered == null || registered[value[0]] === void 0)
        ) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string +=
                processStyleName(_key) +
                ':' +
                processStyleValue(_key, value[_i]) +
                ';';
            }
          }
        } else {
          var interpolated = handleInterpolation(
            mergedProps,
            registered,
            value
          );
          switch (_key) {
            case 'animation':
            case 'animationName': {
              string += processStyleName(_key) + ':' + interpolated + ';';
              break;
            }
            default: {
              if (_key === 'undefined') {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += _key + '{' + interpolated + '}';
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (true) {
  sourceMapPattern =
    /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (
    args.length === 1 &&
    typeof args[0] === 'object' &&
    args[0] !== null &&
    args[0].styles !== void 0
  ) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (strings[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      if (strings[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[i];
    }
  }
  var sourceMap;
  if (true) {
    styles = styles.replace(sourceMapPattern, function (match2) {
      sourceMap = match2;
      return '';
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }
  var name = hash_browser_esm_default(styles) + identifierName;
  if (true) {
    return {
      name,
      styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    };
  }
  return {
    name,
    styles,
    next: cursor,
  };
};

// ../../common/temp/node_modules/.pnpm/@emotion+styled@11.6.0_710a1baf939bd0124c2f7745a81f05ad/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
var testOmitPropsOnStringTag = emotion_is_prop_valid_browser_esm_default;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== 'theme';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === 'string' && tag.charCodeAt(0) > 96
    ? testOmitPropsOnStringTag
    : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(
  tag,
  options,
  isReal
) {
  var shouldForwardProp;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp =
      tag.__emotion_forwardProp && optionsShouldForwardProp
        ? function (propName) {
            return (
              tag.__emotion_forwardProp(propName) &&
              optionsShouldForwardProp(propName)
            );
          }
        : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  return shouldForwardProp;
};
var ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var Noop = function Noop2() {
  return null;
};
var createStyled = function createStyled2(tag, options) {
  if (true) {
    if (tag === void 0) {
      throw new Error(
        'You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.'
      );
    }
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = (isReal && tag.__emotion_base) || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp =
    shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles =
      isReal && tag.__emotion_styles !== void 0
        ? tag.__emotion_styles.slice(0)
        : [];
    if (identifierName !== void 0) {
      styles.push('label:' + identifierName + ';');
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles.push.apply(styles, args);
    } else {
      if (args[0][0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
      }
      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (args[0][i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
        }
        styles.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function (props, cache, ref) {
      var finalTag = (shouldUseAs && props.as) || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = useContext(ThemeContext);
      }
      if (typeof props.className === 'string') {
        className = getRegisteredStyles(
          cache.registered,
          classInterpolations,
          props.className
        );
      } else if (props.className != null) {
        className = props.className + ' ';
      }
      var serialized = serializeStyles(
        styles.concat(classInterpolations),
        cache.registered,
        mergedProps
      );
      var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + '-' + serialized.name;
      if (targetClassName !== void 0) {
        className += ' ' + targetClassName;
      }
      var finalShouldForwardProp =
        shouldUseAs && shouldForwardProp === void 0
          ? getDefaultShouldForwardProp(finalTag)
          : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      var ele = /* @__PURE__ */ createElement(finalTag, newProps);
      var possiblyStyleElement = /* @__PURE__ */ createElement(Noop, null);
      return /* @__PURE__ */ createElement(
        Fragment,
        null,
        possiblyStyleElement,
        ele
      );
    });
    Styled.displayName =
      identifierName !== void 0
        ? identifierName
        : 'Styled(' +
          (typeof baseTag === 'string'
            ? baseTag
            : baseTag.displayName || baseTag.name || 'Component') +
          ')';
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === void 0 && true) {
          return 'NO_COMPONENT_SELECTOR';
        }
        return '.' + targetClassName;
      },
    });
    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled2(
        nextTag,
        _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(
            Styled,
            nextOptions,
            true
          ),
        })
      ).apply(void 0, styles);
    };
    return Styled;
  };
};
var emotion_styled_base_browser_esm_default = createStyled;

// ../../common/temp/node_modules/.pnpm/@emotion+styled@11.6.0_710a1baf939bd0124c2f7745a81f05ad/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
import '@emotion/react';
var tags = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'tspan',
];
var newStyled = emotion_styled_base_browser_esm_default.bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var emotion_styled_browser_esm_default = newStyled;

// ../../common/temp/node_modules/.pnpm/@mui+styled-engine@5.2.0_c295042f06038c5042b55c2330454282/node_modules/@mui/styled-engine/index.js
import { ThemeContext as ThemeContext2, keyframes, css } from '@emotion/react';
function styled(tag, options) {
  const stylesFactory = emotion_styled_browser_esm_default(tag, options);
  if (true) {
    return (...styles) => {
      const component = typeof tag === 'string' ? `"${tag}"` : 'component';
      if (styles.length === 0) {
        console.error(
          [
            `MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`,
            'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.',
          ].join('\n')
        );
      } else if (styles.some(style3 => style3 === void 0)) {
        console.error(
          `MUI: the styled(${component})(...args) API requires all its args to be defined.`
        );
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/borders.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/responsivePropType.js
init_react_shim();
var import_prop_types = __toModule(require_prop_types());
var responsivePropType = true
  ? import_prop_types.default.oneOfType([
      import_prop_types.default.number,
      import_prop_types.default.string,
      import_prop_types.default.object,
      import_prop_types.default.array,
    ])
  : {};
var responsivePropType_default = responsivePropType;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/style.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+utils@5.2.2_react@17.0.2/node_modules/@mui/utils/esm/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+utils@5.2.2_react@17.0.2/node_modules/@mui/utils/esm/deepmerge.js
init_react_shim();
function isPlainObject(item) {
  return (
    item !== null && typeof item === 'object' && item.constructor === Object
  );
}
function deepmerge(
  target,
  source,
  options = {
    clone: true,
  }
) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (key === '__proto__') {
        return;
      }
      if (
        isPlainObject(source[key]) &&
        key in target &&
        isPlainObject(target[key])
      ) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// ../../common/temp/node_modules/.pnpm/@mui+utils@5.2.2_react@17.0.2/node_modules/@mui/utils/esm/exactProp.js
init_react_shim();
var specialProperty = 'exact-prop: \u200B';
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return _extends({}, propTypes, {
    [specialProperty]: props => {
      const unsupportedProps = Object.keys(props).filter(
        prop => !propTypes.hasOwnProperty(prop)
      );
      if (unsupportedProps.length > 0) {
        return new Error(
          `The following props are not supported: ${unsupportedProps
            .map(prop => `\`${prop}\``)
            .join(', ')}. Please remove them.`
        );
      }
      return null;
    },
  });
}

// ../../common/temp/node_modules/.pnpm/@mui+utils@5.2.2_react@17.0.2/node_modules/@mui/utils/esm/capitalize.js
init_react_shim();
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(
      true
        ? `MUI: \`capitalize(string)\` expects a string argument.`
        : formatMuiErrorMessage(7)
    );
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/breakpoints.js
init_react_shim();
var import_prop_types2 = __toModule(require_prop_types());

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/merge.js
init_react_shim();
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false,
  });
}
var merge_default = merge;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/breakpoints.js
var values = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};
var defaultBreakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`,
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme2 = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] =
        styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (
        Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !==
        -1
      ) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder =
    breakpointsInput == null
      ? void 0
      : (_breakpointsInput$key = breakpointsInput.keys) == null
      ? void 0
      : _breakpointsInput$key.reduce((acc, key) => {
          const breakpointStyleKey = breakpointsInput.up(key);
          acc[breakpointStyleKey] = {};
          return acc;
        }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style3) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused =
      !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style3);
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/style.js
function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }
  return path
    .split('.')
    .reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);
}
function getValue(
  themeMapping,
  transform2,
  propValueFinal,
  userValue = propValueFinal
) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform2) {
    value = transform2(value);
  }
  return value;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform: transform2,
  } = options;
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme2 = props.theme;
    const themeMapping = getPath(theme2, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getValue(themeMapping, transform2, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        value = getValue(
          themeMapping,
          transform2,
          `${prop}${
            propValueFinal === 'default' ? '' : capitalize(propValueFinal)
          }`,
          propValueFinal
        );
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value,
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = true
    ? {
        [prop]: responsivePropType_default,
      }
    : {};
  fn.filterProps = [prop];
  return fn;
}
var style_default = style;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/compose.js
init_react_shim();
function compose(...styles) {
  const handlers = styles.reduce((acc, style3) => {
    style3.filterProps.forEach(prop => {
      acc[prop] = style3;
    });
    return acc;
  }, {});
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge_default(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = true
    ? styles.reduce((acc, style3) => Object.assign(acc, style3.propTypes), {})
    : {};
  fn.filterProps = styles.reduce(
    (acc, style3) => acc.concat(style3.filterProps),
    []
  );
  return fn;
}
var compose_default = compose;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/spacing.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/memoize.js
init_react_shim();
function memoize2(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === void 0) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/spacing.js
var properties = {
  m: 'margin',
  p: 'padding',
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
};
var aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py',
};
var getCssProperties = memoize2(prop => {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction)
    ? direction.map(dir => property + dir)
    : [property + direction];
});
var marginKeys = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',
  'marginBlock',
  'marginBlockStart',
  'marginBlockEnd',
];
var paddingKeys = [
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
  'paddingInline',
  'paddingInlineStart',
  'paddingInlineEnd',
  'paddingBlock',
  'paddingBlockStart',
  'paddingBlockEnd',
];
var spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme2, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme2, themeKey) || defaultValue;
  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (true) {
        if (typeof abs !== 'number') {
          console.error(
            `MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`
          );
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (true) {
        if (!Number.isInteger(abs)) {
          console.error(
            [
              `MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`,
            ].join('\n')
          );
        } else if (abs > themeSpacing.length - 1) {
          console.error(
            [
              `MUI: The value provided (${abs}) overflows.`,
              `The supported values are: ${JSON.stringify(themeSpacing)}.`,
              `${abs} > ${
                themeSpacing.length - 1
              }, you need to add the missing values.`,
            ].join('\n')
          );
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (true) {
    console.error(
      [
        `MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`,
        'It should be a number, an array or a function.',
      ].join('\n')
    );
  }
  return () => void 0;
}
function createUnarySpacing(theme2) {
  return createUnaryUnit(theme2, 'spacing', 8, 'spacing');
}
function getValue2(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === 'number') {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue =>
    cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue2(transformer, propValue);
      return acc;
    }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style2(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props)
    .map(prop => resolveCssProperty(props, keys, prop, transformer))
    .reduce(merge_default, {});
}
function margin(props) {
  return style2(props, marginKeys);
}
margin.propTypes = true
  ? marginKeys.reduce((obj, key) => {
      obj[key] = responsivePropType_default;
      return obj;
    }, {})
  : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style2(props, paddingKeys);
}
padding.propTypes = true
  ? paddingKeys.reduce((obj, key) => {
      obj[key] = responsivePropType_default;
      return obj;
    }, {})
  : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return style2(props, spacingKeys);
}
spacing.propTypes = true
  ? spacingKeys.reduce((obj, key) => {
      obj[key] = responsivePropType_default;
      return obj;
    }, {})
  : {};
spacing.filterProps = spacingKeys;
var spacing_default = spacing;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/borders.js
function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
var border = style_default({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder,
});
var borderTop = style_default({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder,
});
var borderRight = style_default({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder,
});
var borderBottom = style_default({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder,
});
var borderLeft = style_default({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder,
});
var borderColor = style_default({
  prop: 'borderColor',
  themeKey: 'palette',
});
var borderTopColor = style_default({
  prop: 'borderTopColor',
  themeKey: 'palette',
});
var borderRightColor = style_default({
  prop: 'borderRightColor',
  themeKey: 'palette',
});
var borderBottomColor = style_default({
  prop: 'borderBottomColor',
  themeKey: 'palette',
});
var borderLeftColor = style_default({
  prop: 'borderLeftColor',
  themeKey: 'palette',
});
var borderRadius = props => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(
      props.theme,
      'shape.borderRadius',
      4,
      'borderRadius'
    );
    const styleFromPropValue = propValue => ({
      borderRadius: getValue2(transformer, propValue),
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = true
  ? {
      borderRadius: responsivePropType_default,
    }
  : {};
borderRadius.filterProps = ['borderRadius'];
var borders = compose_default(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  borderRadius
);
var borders_default = borders;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/display.js
init_react_shim();
var displayPrint = style_default({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value,
    },
  }),
});
var displayRaw = style_default({
  prop: 'display',
});
var overflow = style_default({
  prop: 'overflow',
});
var textOverflow = style_default({
  prop: 'textOverflow',
});
var visibility = style_default({
  prop: 'visibility',
});
var whiteSpace = style_default({
  prop: 'whiteSpace',
});
var display_default = compose_default(
  displayPrint,
  displayRaw,
  overflow,
  textOverflow,
  visibility,
  whiteSpace
);

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/flexbox.js
init_react_shim();
var flexBasis = style_default({
  prop: 'flexBasis',
});
var flexDirection = style_default({
  prop: 'flexDirection',
});
var flexWrap = style_default({
  prop: 'flexWrap',
});
var justifyContent = style_default({
  prop: 'justifyContent',
});
var alignItems = style_default({
  prop: 'alignItems',
});
var alignContent = style_default({
  prop: 'alignContent',
});
var order = style_default({
  prop: 'order',
});
var flex = style_default({
  prop: 'flex',
});
var flexGrow = style_default({
  prop: 'flexGrow',
});
var flexShrink = style_default({
  prop: 'flexShrink',
});
var alignSelf = style_default({
  prop: 'alignSelf',
});
var justifyItems = style_default({
  prop: 'justifyItems',
});
var justifySelf = style_default({
  prop: 'justifySelf',
});
var flexbox = compose_default(
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  order,
  flex,
  flexGrow,
  flexShrink,
  alignSelf,
  justifyItems,
  justifySelf
);
var flexbox_default = flexbox;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/grid.js
init_react_shim();
var gap = props => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: getValue2(transformer, propValue),
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = true
  ? {
      gap: responsivePropType_default,
    }
  : {};
gap.filterProps = ['gap'];
var columnGap = props => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: getValue2(transformer, propValue),
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = true
  ? {
      columnGap: responsivePropType_default,
    }
  : {};
columnGap.filterProps = ['columnGap'];
var rowGap = props => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: getValue2(transformer, propValue),
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = true
  ? {
      rowGap: responsivePropType_default,
    }
  : {};
rowGap.filterProps = ['rowGap'];
var gridColumn = style_default({
  prop: 'gridColumn',
});
var gridRow = style_default({
  prop: 'gridRow',
});
var gridAutoFlow = style_default({
  prop: 'gridAutoFlow',
});
var gridAutoColumns = style_default({
  prop: 'gridAutoColumns',
});
var gridAutoRows = style_default({
  prop: 'gridAutoRows',
});
var gridTemplateColumns = style_default({
  prop: 'gridTemplateColumns',
});
var gridTemplateRows = style_default({
  prop: 'gridTemplateRows',
});
var gridTemplateAreas = style_default({
  prop: 'gridTemplateAreas',
});
var gridArea = style_default({
  prop: 'gridArea',
});
var grid = compose_default(
  gap,
  columnGap,
  rowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea
);
var grid_default = grid;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/palette.js
init_react_shim();
var color = style_default({
  prop: 'color',
  themeKey: 'palette',
});
var bgcolor = style_default({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
});
var backgroundColor = style_default({
  prop: 'backgroundColor',
  themeKey: 'palette',
});
var palette = compose_default(color, bgcolor, backgroundColor);
var palette_default = palette;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/positions.js
init_react_shim();
var position = style_default({
  prop: 'position',
});
var zIndex = style_default({
  prop: 'zIndex',
  themeKey: 'zIndex',
});
var top = style_default({
  prop: 'top',
});
var right = style_default({
  prop: 'right',
});
var bottom = style_default({
  prop: 'bottom',
});
var left = style_default({
  prop: 'left',
});
var positions_default = compose_default(
  position,
  zIndex,
  top,
  right,
  bottom,
  left
);

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/shadows.js
init_react_shim();
var boxShadow = style_default({
  prop: 'boxShadow',
  themeKey: 'shadows',
});
var shadows_default = boxShadow;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/sizing.js
init_react_shim();
function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width = style_default({
  prop: 'width',
  transform,
});
var maxWidth = props => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
      const breakpoint =
        ((_props$theme = props.theme) == null
          ? void 0
          : (_props$theme$breakpoi = _props$theme.breakpoints) == null
          ? void 0
          : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null
          ? void 0
          : _props$theme$breakpoi2[propValue]) || values[propValue];
      return {
        maxWidth: breakpoint || transform(propValue),
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
var minWidth = style_default({
  prop: 'minWidth',
  transform,
});
var height = style_default({
  prop: 'height',
  transform,
});
var maxHeight = style_default({
  prop: 'maxHeight',
  transform,
});
var minHeight = style_default({
  prop: 'minHeight',
  transform,
});
var sizeWidth = style_default({
  prop: 'size',
  cssProperty: 'width',
  transform,
});
var sizeHeight = style_default({
  prop: 'size',
  cssProperty: 'height',
  transform,
});
var boxSizing = style_default({
  prop: 'boxSizing',
});
var sizing = compose_default(
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  boxSizing
);
var sizing_default = sizing;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/typography.js
init_react_shim();
var fontFamily = style_default({
  prop: 'fontFamily',
  themeKey: 'typography',
});
var fontSize = style_default({
  prop: 'fontSize',
  themeKey: 'typography',
});
var fontStyle = style_default({
  prop: 'fontStyle',
  themeKey: 'typography',
});
var fontWeight = style_default({
  prop: 'fontWeight',
  themeKey: 'typography',
});
var letterSpacing = style_default({
  prop: 'letterSpacing',
});
var lineHeight = style_default({
  prop: 'lineHeight',
});
var textAlign = style_default({
  prop: 'textAlign',
});
var typographyVariant = style_default({
  prop: 'typography',
  cssProperty: false,
  themeKey: 'typography',
});
var typography = compose_default(
  typographyVariant,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign
);
var typography_default = typography;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/styleFunctionSx/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/getThemeValue.js
init_react_shim();
var filterPropsMapping = {
  borders: borders_default.filterProps,
  display: display_default.filterProps,
  flexbox: flexbox_default.filterProps,
  grid: grid_default.filterProps,
  positions: positions_default.filterProps,
  palette: palette_default.filterProps,
  shadows: shadows_default.filterProps,
  sizing: sizing_default.filterProps,
  spacing: spacing_default.filterProps,
  typography: typography_default.filterProps,
};
var styleFunctionMapping = {
  borders: borders_default,
  display: display_default,
  flexbox: flexbox_default,
  grid: grid_default,
  positions: positions_default,
  palette: palette_default,
  shadows: shadows_default,
  sizing: sizing_default,
  spacing: spacing_default,
  typography: typography_default,
};
var propToStyleFunction = Object.keys(filterPropsMapping).reduce(
  (acc, styleFnName) => {
    filterPropsMapping[styleFnName].forEach(propName => {
      acc[propName] = styleFunctionMapping[styleFnName];
    });
    return acc;
  },
  {}
);
function getThemeValue(prop, value, theme2) {
  const inputProps = {
    [prop]: value,
    theme: theme2,
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction
    ? styleFunction(inputProps)
    : {
        [prop]: value,
      };
}
var getThemeValue_default = getThemeValue;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce(
    (keys, object) => keys.concat(Object.keys(object)),
    []
  );
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}
function styleFunctionSx(props) {
  const { sx, theme: theme2 = {} } = props || {};
  if (!sx) {
    return null;
  }
  function traverse(sxInput) {
    let sxObject = sxInput;
    if (typeof sxInput === 'function') {
      sxObject = sxInput(theme2);
    } else if (typeof sxInput !== 'object') {
      return sxInput;
    }
    const emptyBreakpoints = createEmptyBreakpointObject(theme2.breakpoints);
    const breakpointsKeys = Object.keys(emptyBreakpoints);
    let css2 = emptyBreakpoints;
    Object.keys(sxObject).forEach(styleKey => {
      const value = callIfFn(sxObject[styleKey], theme2);
      if (value !== null && value !== void 0) {
        if (typeof value === 'object') {
          if (propToStyleFunction[styleKey]) {
            css2 = merge_default(
              css2,
              getThemeValue_default(styleKey, value, theme2)
            );
          } else {
            const breakpointsValues = handleBreakpoints(
              {
                theme: theme2,
              },
              value,
              x => ({
                [styleKey]: x,
              })
            );
            if (objectsHaveSameKeys(breakpointsValues, value)) {
              css2[styleKey] = styleFunctionSx({
                sx: value,
                theme: theme2,
              });
            } else {
              css2 = merge_default(css2, breakpointsValues);
            }
          }
        } else {
          css2 = merge_default(
            css2,
            getThemeValue_default(styleKey, value, theme2)
          );
        }
      }
    });
    return removeUnusedBreakpoints(breakpointsKeys, css2);
  }
  return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
}
styleFunctionSx.filterProps = ['sx'];
var styleFunctionSx_default = styleFunctionSx;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
init_react_shim();
var _excluded = ['sx'];
var splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {},
  };
  Object.keys(props).forEach(prop => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const { sx: inSx } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const { systemProps, otherProps } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }
  return _extends({}, otherProps, {
    sx: finalSx,
  });
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/createBox.js
init_react_shim();
var import_prop_types4 = __toModule(require_prop_types());
import { forwardRef } from 'react';

// ../../common/temp/node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
init_react_shim();
function toVal(mix) {
  var k,
    y,
    str = '';
  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0,
    tmp,
    x,
    str = '';
  while (i < arguments.length) {
    if ((tmp = arguments[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += ' ');
        str += x;
      }
    }
  }
  return str;
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/useTheme.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/createTheme/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/createTheme/createTheme.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/createTheme/createBreakpoints.js
init_react_shim();
var _excluded2 = ['values', 'unit', 'step'];
function createBreakpoints(breakpoints) {
  const {
      values: values2 = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
      unit = 'px',
      step = 5,
    } = breakpoints,
    other = _objectWithoutPropertiesLoose(breakpoints, _excluded2);
  const keys = Object.keys(values2);
  function up(key) {
    const value = typeof values2[key] === 'number' ? values2[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values2[key] === 'number' ? values2[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${
      typeof values2[start] === 'number' ? values2[start] : start
    }${unit}) and (max-width:${
      (endIndex !== -1 && typeof values2[keys[endIndex]] === 'number'
        ? values2[keys[endIndex]]
        : end) -
      step / 100
    }${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  return _extends(
    {
      keys,
      values: values2,
      up,
      down,
      between,
      only,
      unit,
    },
    other
  );
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/createTheme/shape.js
init_react_shim();
var shape = {
  borderRadius: 4,
};
var shape_default = shape;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/createTheme/createSpacing.js
init_react_shim();
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform2 = createUnarySpacing({
    spacing: spacingInput,
  });
  const spacing2 = (...argsInput) => {
    if (true) {
      if (!(argsInput.length <= 4)) {
        console.error(
          `MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`
        );
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args
      .map(argument => {
        const output = transform2(argument);
        return typeof output === 'number' ? `${output}px` : output;
      })
      .join(' ');
  };
  spacing2.mui = true;
  return spacing2;
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/createTheme/createTheme.js
var _excluded3 = ['breakpoints', 'palette', 'spacing', 'shape'];
function createTheme(options = {}, ...args) {
  const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {},
    } = options,
    other = _objectWithoutPropertiesLoose(options, _excluded3);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing2 = createSpacing(spacingInput);
  let muiTheme = deepmerge(
    {
      breakpoints,
      direction: 'ltr',
      components: {},
      palette: _extends(
        {
          mode: 'light',
        },
        paletteInput
      ),
      spacing: spacing2,
      shape: _extends({}, shape_default, shapeInput),
    },
    other
  );
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}
var createTheme_default = createTheme;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/useThemeWithoutDefault.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+private-theming@5.2.2_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@mui/private-theming/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+private-theming@5.2.2_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@mui/private-theming/ThemeProvider/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+private-theming@5.2.2_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
init_react_shim();
var import_prop_types3 = __toModule(require_prop_types());
import { useMemo } from 'react';

// ../../common/temp/node_modules/.pnpm/@mui+private-theming@5.2.2_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@mui/private-theming/useTheme/ThemeContext.js
init_react_shim();
import { createContext } from 'react';
var ThemeContext3 = /* @__PURE__ */ createContext(null);
if (true) {
  ThemeContext3.displayName = 'ThemeContext';
}
var ThemeContext_default = ThemeContext3;

// ../../common/temp/node_modules/.pnpm/@mui+private-theming@5.2.2_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@mui/private-theming/useTheme/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+private-theming@5.2.2_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@mui/private-theming/useTheme/useTheme.js
init_react_shim();
import { useContext as useContext2, useDebugValue } from 'react';
function useTheme() {
  const theme2 = useContext2(ThemeContext_default);
  if (true) {
    useDebugValue(theme2);
  }
  return theme2;
}

// ../../common/temp/node_modules/.pnpm/@mui+private-theming@5.2.2_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@mui/private-theming/ThemeProvider/nested.js
init_react_shim();
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested_default = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

// ../../common/temp/node_modules/.pnpm/@mui+private-theming@5.2.2_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
import { jsx as _jsx } from 'react/jsx-runtime';
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);
    if (true) {
      if (!mergedTheme) {
        console.error(
          [
            'MUI: You should return an object from your theme function, i.e.',
            '<ThemeProvider theme={() => ({})} />',
          ].join('\n')
        );
      }
    }
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider(props) {
  const { children, theme: localTheme } = props;
  const outerTheme = useTheme();
  if (true) {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(
        [
          'MUI: You are providing a theme function prop to the ThemeProvider component:',
          '<ThemeProvider theme={outerTheme => outerTheme} />',
          '',
          'However, no outer theme is present.',
          'Make sure a theme is already injected higher in the React tree or provide a theme object.',
        ].join('\n')
      );
    }
  }
  const theme2 = useMemo(() => {
    const output =
      outerTheme === null
        ? localTheme
        : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested_default] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ _jsx(ThemeContext_default.Provider, {
    value: theme2,
    children,
  });
}
true
  ? (ThemeProvider.propTypes = {
      children: import_prop_types3.default.node,
      theme: import_prop_types3.default.oneOfType([
        import_prop_types3.default.object,
        import_prop_types3.default.func,
      ]).isRequired,
    })
  : void 0;
if (true) {
  true
    ? (ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes))
    : void 0;
}
var ThemeProvider_default = ThemeProvider;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/useThemeWithoutDefault.js
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme2(defaultTheme2 = null) {
  const contextTheme = useTheme();
  return !contextTheme || isObjectEmpty(contextTheme)
    ? defaultTheme2
    : contextTheme;
}
var useThemeWithoutDefault_default = useTheme2;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/useTheme.js
var systemDefaultTheme = createTheme_default();
function useTheme3(defaultTheme2 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme2);
}
var useTheme_default = useTheme3;

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/createBox.js
import { jsx as _jsx2 } from 'react/jsx-runtime';
var _excluded4 = ['className', 'component'];
function createBox(options = {}) {
  const {
    defaultTheme: defaultTheme2,
    defaultClassName = 'MuiBox-root',
    generateClassName,
  } = options;
  const BoxRoot = styled('div')(styleFunctionSx_default);
  const Box2 = /* @__PURE__ */ forwardRef(function Box3(inProps, ref) {
    const theme2 = useTheme_default(defaultTheme2);
    const _extendSxProp = extendSxProp(inProps),
      { className, component = 'div' } = _extendSxProp,
      other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded4);
    return /* @__PURE__ */ _jsx2(
      BoxRoot,
      _extends(
        {
          as: component,
          ref,
          className: clsx_m_default(
            className,
            generateClassName
              ? generateClassName(defaultClassName)
              : defaultClassName
          ),
          theme: theme2,
        },
        other
      )
    );
  });
  true
    ? (Box2.propTypes = {
        children: import_prop_types4.default.node,
        component: import_prop_types4.default.elementType,
        sx: import_prop_types4.default.oneOfType([
          import_prop_types4.default.object,
          import_prop_types4.default.array,
          import_prop_types4.default.func,
        ]),
      })
    : void 0;
  return Box2;
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/colorManipulator.js
init_react_shim();
function clamp(value, min = 0, max = 1) {
  if (true) {
    if (value < min || value > max) {
      console.error(
        `MUI: The value provided ${value} is out of range [${min}, ${max}].`
      );
    }
  }
  return Math.min(Math.max(min, value), max);
}
function hexToRgb(color2) {
  color2 = color2.substr(1);
  const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color2.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }
  return colors
    ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
        .map((n, index) => {
          return index < 3
            ? parseInt(n, 16)
            : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3;
        })
        .join(', ')})`
    : '';
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf('(');
  const type = color2.substring(0, marker);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error(
      true
        ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`
        : formatMuiErrorMessage(9, color2)
    );
  }
  let values2 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === 'color') {
    values2 = values2.split(' ');
    colorSpace = values2.shift();
    if (values2.length === 4 && values2[3].charAt(0) === '/') {
      values2[3] = values2[3].substr(1);
    }
    if (
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        colorSpace
      ) === -1
    ) {
      throw new Error(
        true
          ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`
          : formatMuiErrorMessage(10, colorSpace)
      );
    }
  } else {
    values2 = values2.split(',');
  }
  values2 = values2.map(value => parseFloat(value));
  return {
    type,
    values: values2,
    colorSpace,
  };
}
function recomposeColor(color2) {
  const { type, colorSpace } = color2;
  let { values: values2 } = color2;
  if (type.indexOf('rgb') !== -1) {
    values2 = values2.map((n, i) => (i < 3 ? parseInt(n, 10) : n));
  } else if (type.indexOf('hsl') !== -1) {
    values2[1] = `${values2[1]}%`;
    values2[2] = `${values2[2]}%`;
  }
  if (type.indexOf('color') !== -1) {
    values2 = `${colorSpace} ${values2.join(' ')}`;
  } else {
    values2 = `${values2.join(', ')}`;
  }
  return `${type}(${values2})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const { values: values2 } = color2;
  const h = values2[0];
  const s = values2[1] / 100;
  const l = values2[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];
  if (color2.type === 'hsla') {
    type += 'a';
    rgb.push(values2[3]);
  }
  return recomposeColor({
    type,
    values: rgb,
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb =
    color2.type === 'hsl'
      ? decomposeColor(hslToRgb(color2)).values
      : color2.values;
  rgb = rgb.map(val => {
    if (color2.type !== 'color') {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : __pow((val + 0.055) / 1.055, 2.4);
  });
  return Number(
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
  );
}
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf('hsl') !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (
    color2.type.indexOf('rgb') !== -1 ||
    color2.type.indexOf('color') !== -1
  ) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf('hsl') !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (255 - color2.values[i]) * coefficient;
    }
  } else if (color2.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (1 - color2.values[i]) * coefficient;
    }
  }
  return recomposeColor(color2);
}

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/ThemeProvider/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+system@5.2.2_87b55f3e8a286b8e5595e82759b92112/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
init_react_shim();
var import_prop_types5 = __toModule(require_prop_types());
import 'react';
import { jsx as _jsx3 } from 'react/jsx-runtime';
function InnerThemeProvider(props) {
  const theme2 = useTheme_default();
  return /* @__PURE__ */ _jsx3(ThemeContext2.Provider, {
    value: typeof theme2 === 'object' ? theme2 : {},
    children: props.children,
  });
}
true
  ? (InnerThemeProvider.propTypes = {
      children: import_prop_types5.default.node,
    })
  : void 0;
function ThemeProvider2(props) {
  const { children, theme: localTheme } = props;
  return /* @__PURE__ */ _jsx3(ThemeProvider_default, {
    theme: localTheme,
    children: /* @__PURE__ */ _jsx3(InnerThemeProvider, {
      children,
    }),
  });
}
true
  ? (ThemeProvider2.propTypes = {
      children: import_prop_types5.default.node,
      theme: import_prop_types5.default.oneOfType([
        import_prop_types5.default.object,
        import_prop_types5.default.func,
      ]).isRequired,
    })
  : void 0;
if (true) {
  true
    ? (ThemeProvider2.propTypes = exactProp(ThemeProvider2.propTypes))
    : void 0;
}
var ThemeProvider_default2 = ThemeProvider2;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/createTheme.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+base@5.0.0-alpha.58_059ec7b767f386960a52afe2e4b607b3/node_modules/@mui/base/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+base@5.0.0-alpha.58_059ec7b767f386960a52afe2e4b607b3/node_modules/@mui/base/generateUtilityClass/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+base@5.0.0-alpha.58_059ec7b767f386960a52afe2e4b607b3/node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+base@5.0.0-alpha.58_059ec7b767f386960a52afe2e4b607b3/node_modules/@mui/base/generateUtilityClass/ClassNameGenerator.js
init_react_shim();
var defaultGenerator = componentName => componentName;
var createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    },
  };
};
var ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator_default = ClassNameGenerator;

// ../../common/temp/node_modules/.pnpm/@mui+base@5.0.0-alpha.58_059ec7b767f386960a52afe2e4b607b3/node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var globalStateClassesMapping = {
  active: 'Mui-active',
  checked: 'Mui-checked',
  completed: 'Mui-completed',
  disabled: 'Mui-disabled',
  error: 'Mui-error',
  expanded: 'Mui-expanded',
  focused: 'Mui-focused',
  focusVisible: 'Mui-focusVisible',
  required: 'Mui-required',
  selected: 'Mui-selected',
};
function generateUtilityClass(componentName, slot) {
  const globalStateClass = globalStateClassesMapping[slot];
  return (
    globalStateClass ||
    `${ClassNameGenerator_default.generate(componentName)}-${slot}`
  );
}

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/createMixins.js
init_react_shim();
function createMixins(breakpoints, spacing2, mixins) {
  return _extends(
    {
      toolbar: {
        minHeight: 56,
        [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
          minHeight: 48,
        },
        [breakpoints.up('sm')]: {
          minHeight: 64,
        },
      },
    },
    mixins
  );
}

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/createPalette.js
init_react_shim();
var _excluded5 = ['mode', 'contrastThreshold', 'tonalOffset'];
var light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: common_default.white,
    default: common_default.white,
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
var dark = {
  text: {
    primary: common_default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212',
  },
  action: {
    active: common_default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue_default[200],
      light: blue_default[50],
      dark: blue_default[400],
    };
  }
  return {
    main: blue_default[700],
    light: blue_default[400],
    dark: blue_default[800],
  };
}
function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple_default[200],
      light: purple_default[50],
      dark: purple_default[400],
    };
  }
  return {
    main: purple_default[500],
    light: purple_default[300],
    dark: purple_default[700],
  };
}
function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red_default[500],
      light: red_default[300],
      dark: red_default[700],
    };
  }
  return {
    main: red_default[700],
    light: red_default[400],
    dark: red_default[800],
  };
}
function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue_default[400],
      light: lightBlue_default[300],
      dark: lightBlue_default[700],
    };
  }
  return {
    main: lightBlue_default[700],
    light: lightBlue_default[500],
    dark: lightBlue_default[900],
  };
}
function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green_default[400],
      light: green_default[300],
      dark: green_default[700],
    };
  }
  return {
    main: green_default[800],
    light: green_default[500],
    dark: green_default[900],
  };
}
function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange_default[400],
      light: orange_default[300],
      dark: orange_default[700],
    };
  }
  return {
    main: '#ed6c02',
    light: orange_default[500],
    dark: orange_default[900],
  };
}
function createPalette(palette2) {
  const { mode = 'light', contrastThreshold = 3, tonalOffset = 0.2 } = palette2,
    other = _objectWithoutPropertiesLoose(palette2, _excluded5);
  const primary = palette2.primary || getDefaultPrimary(mode);
  const secondary = palette2.secondary || getDefaultSecondary(mode);
  const error = palette2.error || getDefaultError(mode);
  const info = palette2.info || getDefaultInfo(mode);
  const success = palette2.success || getDefaultSuccess(mode);
  const warning = palette2.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;
    if (true) {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error(
          [
            `MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`,
            'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
            'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
          ].join('\n')
        );
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color: color2,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700,
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty('main')) {
      throw new Error(
        true
          ? `MUI: The color${
              name ? ` (${name})` : ''
            } provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.`
          : formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade)
      );
    }
    if (typeof color2.main !== 'string') {
      throw new Error(
        true
          ? `MUI: The color${
              name ? ` (${name})` : ''
            } provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(
              color2.main
            )}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`
          : formatMuiErrorMessage(
              12,
              name ? ` (${name})` : '',
              JSON.stringify(color2.main)
            )
      );
    }
    addLightOrDark(color2, 'light', lightShade, tonalOffset);
    addLightOrDark(color2, 'dark', darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  const modes = {
    dark,
    light,
  };
  if (true) {
    if (!modes[mode]) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge(
    _extends(
      {
        common: common_default,
        mode,
        primary: augmentColor({
          color: primary,
          name: 'primary',
        }),
        secondary: augmentColor({
          color: secondary,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: augmentColor({
          color: error,
          name: 'error',
        }),
        warning: augmentColor({
          color: warning,
          name: 'warning',
        }),
        info: augmentColor({
          color: info,
          name: 'info',
        }),
        success: augmentColor({
          color: success,
          name: 'success',
        }),
        grey: grey_default,
        contrastThreshold,
        getContrastText,
        augmentColor,
        tonalOffset,
      },
      modes[mode]
    ),
    other
  );
  return paletteOutput;
}

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/createTypography.js
init_react_shim();
var _excluded6 = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = {
  textTransform: 'uppercase',
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette2, typography2) {
  const _ref =
      typeof typography2 === 'function' ? typography2(palette2) : typography2,
    {
      fontFamily: fontFamily2 = defaultFontFamily,
      fontSize: fontSize2 = 14,
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      htmlFontSize = 16,
      allVariants,
      pxToRem: pxToRem2,
    } = _ref,
    other = _objectWithoutPropertiesLoose(_ref, _excluded6);
  if (true) {
    if (typeof fontSize2 !== 'number') {
      console.error('MUI: `fontSize` is required to be a number.');
    }
    if (typeof htmlFontSize !== 'number') {
      console.error('MUI: `htmlFontSize` is required to be a number.');
    }
  }
  const coef = fontSize2 / 14;
  const pxToRem = pxToRem2 || (size => `${(size / htmlFontSize) * coef}rem`);
  const buildVariant = (
    fontWeight2,
    size,
    lineHeight2,
    letterSpacing2,
    casing
  ) =>
    _extends(
      {
        fontFamily: fontFamily2,
        fontWeight: fontWeight2,
        fontSize: pxToRem(size),
        lineHeight: lineHeight2,
      },
      fontFamily2 === defaultFontFamily
        ? {
            letterSpacing: `${round(letterSpacing2 / size)}em`,
          }
        : {},
      casing,
      allVariants
    );
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
  };
  return deepmerge(
    _extends(
      {
        htmlFontSize,
        pxToRem,
        fontFamily: fontFamily2,
        fontSize: fontSize2,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold,
      },
      variants
    ),
    other,
    {
      clone: false,
    }
  );
}

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/shadows.js
init_react_shim();
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`,
  ].join(',');
}
var shadows = [
  'none',
  createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
  createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
  createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
  createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
];
var shadows_default2 = shadows;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/createTransitions.js
init_react_shim();
var _excluded7 = ['duration', 'easing', 'delay'];
var easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2) {
    return 0;
  }
  const constant = height2 / 36;
  return Math.round((4 + 15 * __pow(constant, 0.25) + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create = (props = ['all'], options = {}) => {
    const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0,
      } = options,
      other = _objectWithoutPropertiesLoose(options, _excluded7);
    if (true) {
      const isString = value => typeof value === 'string';
      const isNumber = value => !isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(
          `MUI: Argument "duration" must be a number or a string but found ${durationOption}.`
        );
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (Object.keys(other).length !== 0) {
        console.error(
          `MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`
        );
      }
    }
    return (Array.isArray(props) ? props : [props])
      .map(
        animatedProp =>
          `${animatedProp} ${
            typeof durationOption === 'string'
              ? durationOption
              : formatMs(durationOption)
          } ${easingOption} ${
            typeof delay === 'string' ? delay : formatMs(delay)
          }`
      )
      .join(',');
  };
  return _extends(
    {
      getAutoHeightDuration,
      create,
    },
    inputTransitions,
    {
      easing: mergedEasing,
      duration: mergedDuration,
    }
  );
}

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/zIndex.js
init_react_shim();
var zIndex2 = {
  mobileStepper: 1e3,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
var zIndex_default = zIndex2;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/createTheme.js
var _excluded8 = [
  'breakpoints',
  'mixins',
  'spacing',
  'palette',
  'transitions',
  'typography',
  'shape',
];
function createTheme2(options = {}, ...args) {
  const {
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {},
    } = options,
    other = _objectWithoutPropertiesLoose(options, _excluded8);
  const palette2 = createPalette(paletteInput);
  const systemTheme = createTheme_default(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(
      systemTheme.breakpoints,
      systemTheme.spacing,
      mixinsInput
    ),
    palette: palette2,
    shadows: shadows_default2.slice(),
    typography: createTypography(palette2, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex_default),
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (true) {
    const stateClasses = [
      'active',
      'checked',
      'completed',
      'disabled',
      'error',
      'expanded',
      'focused',
      'focusVisible',
      'required',
      'selected',
    ];
    const traverse = (node, component) => {
      let key;
      for (key in node) {
        const child = node[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            const stateClass = generateUtilityClass('', key);
            console.error(
              [
                `MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`,
                'You can not override it like this: ',
                JSON.stringify(node, null, 2),
                '',
                `Instead, you need to use the '&.${stateClass}' syntax:`,
                JSON.stringify(
                  {
                    root: {
                      [`&.${stateClass}`]: child,
                    },
                  },
                  null,
                  2
                ),
                '',
                'https://mui.com/r/state-classes-guide',
              ].join('\n')
            );
          }
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach(component => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.indexOf('Mui') === 0) {
        traverse(styleOverrides, component);
      }
    });
  }
  return muiTheme;
}
var createTheme_default2 = createTheme2;

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/styles/ThemeProvider.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/utils/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/Box/index.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/@mui+material@5.2.2_303b0097fd95943af88978a904ef5b5d/node_modules/@mui/material/Box/Box.js
init_react_shim();
var defaultTheme = createTheme_default2();
var Box = createBox({
  defaultTheme,
  defaultClassName: 'MuiBox-root',
  generateClassName: ClassNameGenerator_default.generate,
});
var Box_default = Box;

// src/index.tsx
var import_theme_1 = __toModule(require_dist());
var Button = ({ children, type = 'button', onClick }) => {
  return /* @__PURE__ */ jsx(
    ThemeProvider_default2,
    {
      theme: import_theme_1.theme,
    },
    /* @__PURE__ */ jsx(
      Box_default,
      {
        component: 'button',
        sx: {
          color: 'primary.main',
          borderColor: theme2 => theme2.palette.secondary.main,
        },
        type,
        onClick,
      },
      children
    )
  );
};
export { Button };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license MUI v5.0.0-alpha.58
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license MUI v5.2.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license MUI v5.2.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
