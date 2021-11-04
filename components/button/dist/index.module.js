var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// ../../common/temp/node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  '../../common/temp/node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js'(
    exports,
    module
  ) {
    init_react_shim();
    ('use strict');
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
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
          var from2;
          var to = toObject(target);
          var symbols;
          for (var s = 1; s < arguments.length; s++) {
            from2 = Object(arguments[s]);
            for (var key in from2) {
              if (hasOwnProperty2.call(from2, key)) {
                to[key] = from2[key];
              }
            }
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from2);
              for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from2, symbols[i])) {
                  to[symbols[i]] = from2[symbols[i]];
                }
              }
            }
          }
          return to;
        };
  },
});

// ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  '../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react.development.js'(
    exports
  ) {
    init_react_shim();
    ('use strict');
    if (true) {
      (function () {
        'use strict';
        var _assign = require_object_assign();
        var ReactVersion = '17.0.2';
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        exports.Fragment = 60107;
        exports.StrictMode = 60108;
        exports.Profiler = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        exports.Suspense = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === 'function' && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor('react.element');
          REACT_PORTAL_TYPE = symbolFor('react.portal');
          exports.Fragment = symbolFor('react.fragment');
          exports.StrictMode = symbolFor('react.strict_mode');
          exports.Profiler = symbolFor('react.profiler');
          REACT_PROVIDER_TYPE = symbolFor('react.provider');
          REACT_CONTEXT_TYPE = symbolFor('react.context');
          REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
          exports.Suspense = symbolFor('react.suspense');
          REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
          REACT_MEMO_TYPE = symbolFor('react.memo');
          REACT_LAZY_TYPE = symbolFor('react.lazy');
          REACT_BLOCK_TYPE = symbolFor('react.block');
          REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
          REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
          REACT_SCOPE_TYPE = symbolFor('react.scope');
          REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
          REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
          REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
        }
        var MAYBE_ITERATOR_SYMBOL =
          typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== 'object') {
            return null;
          }
          var maybeIterator =
            (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null,
        };
        var ReactCurrentBatchConfig = {
          transition: 0,
        };
        var ReactCurrentOwner = {
          current: null,
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function () {
            var stack = '';
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || '';
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false,
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          assign: _assign,
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
        }
        function warn(format) {
          {
            for (
              var _len = arguments.length,
                args = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }
            printWarning('warn', format, args);
          }
        }
        function error(format) {
          {
            for (
              var _len2 = arguments.length,
                args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                _key2 = 1;
              _key2 < _len2;
              _key2++
            ) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning('error', format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 =
              ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function (item) {
              return '' + item;
            });
            argsWithFormat.unshift('Warning: ' + format);
            Function.prototype.apply.call(
              console[level],
              console,
              argsWithFormat
            );
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName =
              (_constructor &&
                (_constructor.displayName || _constructor.name)) ||
              'ReactClass';
            var warningKey = componentName + '.' + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error(
              "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
              callerName,
              componentName
            );
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function (publicInstance) {
            return false;
          },
          enqueueForceUpdate: function (publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
          },
          enqueueReplaceState: function (
            publicInstance,
            completeState,
            callback,
            callerName
          ) {
            warnNoop(publicInstance, 'replaceState');
          },
          enqueueSetState: function (
            publicInstance,
            partialState,
            callback,
            callerName
          ) {
            warnNoop(publicInstance, 'setState');
          },
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function (partialState, callback) {
          if (
            !(
              typeof partialState === 'object' ||
              typeof partialState === 'function' ||
              partialState == null
            )
          ) {
            {
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            }
          }
          this.updater.enqueueSetState(
            this,
            partialState,
            callback,
            'setState'
          );
        };
        Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        {
          var deprecatedAPIs = {
            isMounted: [
              'isMounted',
              'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
            ],
            replaceState: [
              'replaceState',
              'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
            ],
          };
          var defineDeprecationWarning = function (methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function () {
                warn(
                  '%s(...) is deprecated in plain JavaScript React classes. %s',
                  info[0],
                  info[1]
                );
                return void 0;
              },
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = (PureComponent.prototype =
          new ComponentDummy());
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null,
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || '';
          return (
            outerType.displayName ||
            (functionName !== ''
              ? wrapperName + '(' + functionName + ')'
              : wrapperName)
          );
        }
        function getContextName(type) {
          return type.displayName || 'Context';
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === 'number') {
              error(
                'Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.'
              );
            }
          }
          if (typeof type === 'function') {
            return type.displayName || type.name || null;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return 'Fragment';
            case REACT_PORTAL_TYPE:
              return 'Portal';
            case exports.Profiler:
              return 'Profiler';
            case exports.StrictMode:
              return 'StrictMode';
            case exports.Suspense:
              return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty2 = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true,
        };
        var specialPropKeyWarningShown,
          specialPropRefWarningShown,
          didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty2.call(config, 'ref')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty2.call(config, 'key')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function () {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error(
                  '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  displayName
                );
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true,
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function () {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error(
                  '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  displayName
                );
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true,
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (
              typeof config.ref === 'string' &&
              ReactCurrentOwner.current &&
              config.__self &&
              ReactCurrentOwner.current.stateNode !== config.__self
            ) {
              var componentName = getComponentName(
                ReactCurrentOwner.current.type
              );
              if (!didWarnAboutStringRefs[componentName]) {
                error(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  componentName,
                  config.ref
                );
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function (
          type,
          key,
          ref,
          self,
          source,
          owner,
          props
        ) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner,
          };
          {
            element._store = {};
            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false,
            });
            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self,
            });
            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source,
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement3(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              key = '' + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (
                hasOwnProperty2.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName =
                typeof type === 'function'
                  ? type.displayName || type.name || 'Unknown'
                  : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(
            type,
            key,
            ref,
            self,
            source,
            ReactCurrentOwner.current,
            props
          );
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(
            oldElement.type,
            newKey,
            oldElement.ref,
            oldElement._self,
            oldElement._source,
            oldElement._owner,
            oldElement.props
          );
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  element +
                  '.'
              );
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = '' + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (
                hasOwnProperty2.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(
            element.type,
            key,
            ref,
            self,
            source,
            owner,
            props
          );
        }
        function isValidElement(object) {
          return (
            typeof object === 'object' &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        var SEPARATOR = '.';
        var SUBSEPARATOR = ':';
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            '=': '=0',
            ':': '=2',
          };
          var escapedString = key.replace(escapeRegex, function (match2) {
            return escaperLookup[match2];
          });
          return '$' + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, '$&/');
        }
        function getElementKey(element, index) {
          if (
            typeof element === 'object' &&
            element !== null &&
            element.key != null
          ) {
            return escape('' + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(
          children,
          array,
          escapedPrefix,
          nameSoFar,
          callback
        ) {
          var type = typeof children;
          if (type === 'undefined' || type === 'boolean') {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case 'string':
              case 'number':
                invokeCallback = true;
                break;
              case 'object':
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey =
              nameSoFar === ''
                ? SEPARATOR + getElementKey(_child, 0)
                : nameSoFar;
            if (Array.isArray(mappedChild)) {
              var escapedChildKey = '';
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + '/';
              }
              mapIntoArray(
                mappedChild,
                array,
                escapedChildKey,
                '',
                function (c) {
                  return c;
                }
              );
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  escapedPrefix +
                    (mappedChild.key &&
                    (!_child || _child.key !== mappedChild.key)
                      ? escapeUserProvidedKey('' + mappedChild.key) + '/'
                      : '') +
                    childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix =
            nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(
                child,
                array,
                escapedPrefix,
                nextName,
                callback
              );
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn(
                      'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
                    );
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(
                  child,
                  array,
                  escapedPrefix,
                  nextName,
                  callback
                );
              }
            } else if (type === 'object') {
              var childrenString = '' + children;
              {
                {
                  throw Error(
                    'Objects are not valid as a React child (found: ' +
                      (childrenString === '[object Object]'
                        ? 'object with keys {' +
                          Object.keys(children).join(', ') +
                          '}'
                        : childrenString) +
                      '). If you meant to render a collection of children, use an array instead.'
                  );
                }
              }
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, '', '', function (child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function () {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function () {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        }
        function toArray(children) {
          return (
            mapChildren(children, function (child) {
              return child;
            }) || []
          );
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            }
          }
          return children;
        }
        function createContext2(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (
                calculateChangedBits !== null &&
                typeof calculateChangedBits !== 'function'
              ) {
                error(
                  'createContext: Expected the optional second argument to be a function. Instead received: %s',
                  calculateChangedBits
                );
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context,
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits,
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function () {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error(
                      'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                    );
                  }
                  return context.Provider;
                },
                set: function (_Provider) {
                  context.Provider = _Provider;
                },
              },
              _currentValue: {
                get: function () {
                  return context._currentValue;
                },
                set: function (_currentValue) {
                  context._currentValue = _currentValue;
                },
              },
              _currentValue2: {
                get: function () {
                  return context._currentValue2;
                },
                set: function (_currentValue2) {
                  context._currentValue2 = _currentValue2;
                },
              },
              _threadCount: {
                get: function () {
                  return context._threadCount;
                },
                set: function (_threadCount) {
                  context._threadCount = _threadCount;
                },
              },
              Consumer: {
                get: function () {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error(
                      'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                    );
                  }
                  return context.Consumer;
                },
              },
              displayName: {
                get: function () {
                  return context.displayName;
                },
                set: function (displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn(
                      "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                      displayName
                    );
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                },
              },
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(
              function (moduleObject) {
                if (payload._status === Pending) {
                  var defaultExport = moduleObject.default;
                  {
                    if (defaultExport === void 0) {
                      error(
                        "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
                        moduleObject
                      );
                    }
                  }
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = defaultExport;
                }
              },
              function (error2) {
                if (payload._status === Pending) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              }
            );
          }
          if (payload._status === Resolved) {
            return payload._result;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: -1,
            _result: ctor,
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer,
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function () {
                  return defaultProps;
                },
                set: function (newDefaultProps) {
                  error(
                    'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                  );
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, 'defaultProps', {
                    enumerable: true,
                  });
                },
              },
              propTypes: {
                configurable: true,
                get: function () {
                  return propTypes;
                },
                set: function (newPropTypes) {
                  error(
                    'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                  );
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, 'propTypes', {
                    enumerable: true,
                  });
                },
              },
            });
          }
          return lazyType;
        }
        function forwardRef2(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error(
                'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
              );
            } else if (typeof render !== 'function') {
              error(
                'forwardRef requires a render function but was given %s.',
                render === null ? 'null' : typeof render
              );
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error(
                  'forwardRef render functions accept exactly two parameters: props and ref. %s',
                  render.length === 1
                    ? 'Did you forget to use the ref parameter?'
                    : 'Any additional parameter will be undefined.'
                );
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error(
                  'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
                );
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render,
          };
          {
            var ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (render.displayName == null) {
                  render.displayName = name;
                }
              },
            });
          }
          return elementType;
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === 'string' || typeof type === 'function') {
            return true;
          }
          if (
            type === exports.Fragment ||
            type === exports.Profiler ||
            type === REACT_DEBUG_TRACING_MODE_TYPE ||
            type === exports.StrictMode ||
            type === exports.Suspense ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            type === REACT_LEGACY_HIDDEN_TYPE ||
            enableScopeAPI
          ) {
            return true;
          }
          if (typeof type === 'object' && type !== null) {
            if (
              type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE ||
              type[0] === REACT_SERVER_BLOCK_TYPE
            ) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error(
                'memo: The first argument must be a component. Instead received: %s',
                type === null ? 'null' : typeof type
              );
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare,
          };
          {
            var ownName;
            Object.defineProperty(elementType, 'displayName', {
              enumerable: false,
              configurable: true,
              get: function () {
                return ownName;
              },
              set: function (name) {
                ownName = name;
                if (type.displayName == null) {
                  type.displayName = name;
                }
              },
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error(
                'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
              );
            }
          }
          return dispatcher;
        }
        function useContext3(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error(
                'useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s',
                unstable_observedBits,
                typeof unstable_observedBits === 'number' &&
                  Array.isArray(arguments[2])
                  ? '\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks'
                  : ''
              );
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error(
                  'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
                );
              } else if (realContext.Provider === Context) {
                error(
                  'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
                );
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef2(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true,
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props,
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true,
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog,
                }),
                info: _assign({}, props, {
                  value: prevInfo,
                }),
                warn: _assign({}, props, {
                  value: prevWarn,
                }),
                error: _assign({}, props, {
                  value: prevError,
                }),
                group: _assign({}, props, {
                  value: prevGroup,
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed,
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd,
                }),
              });
            }
            if (disabledDepth < 0) {
              error(
                'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
              );
            }
          }
        }
        var ReactCurrentDispatcher$1 =
          ReactSharedInternals.ReactCurrentDispatcher;
        var prefix2;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix2 === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match2 = x.stack.trim().match(/\n( *(at )?)/);
                prefix2 = (match2 && match2[1]) || '';
              }
            }
            return '\n' + prefix2 + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return '';
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function () {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              });
              if (typeof Reflect === 'object' && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === 'string') {
              var sampleLines = sample.stack.split('\n');
              var controlLines = control.stack.split('\n');
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame =
                          '\n' + sampleLines[s].replace(' at new ', ' at ');
                        {
                          if (typeof fn === 'function') {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : '';
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
          {
            if (typeof fn === 'function') {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return '';
          }
          if (typeof type === 'function') {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === 'string') {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case exports.Suspense:
              return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame('SuspenseList');
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(
                  type.type,
                  source,
                  ownerFn
                );
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(
                    init(payload),
                    source,
                    ownerFn
                  );
                } catch (x) {}
              }
            }
          }
          return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 =
          ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(
          typeSpecs,
          values,
          location,
          componentName,
          element
        ) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
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
                        '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                  );
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error(
                    '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                    componentName || 'React class',
                    location,
                    typeSpecName,
                    typeof error$1
                  );
                  setCurrentlyValidatingElement(null);
                }
                if (
                  error$1 instanceof Error &&
                  !(error$1.message in loggedTypeFailures)
                ) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error('Failed %s type: %s', location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(
                element.type,
                element._source,
                owner ? owner.type : null
              );
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }
          return '';
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return (
              '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.'
            );
          }
          return '';
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return '';
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName =
              typeof parentType === 'string'
                ? parentType
                : parentType.displayName || parentType.name;
            if (parentName) {
              info =
                '\n\nCheck the top-level render call using <' +
                parentName +
                '>.';
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (
            !element._store ||
            element._store.validated ||
            element.key != null
          ) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo =
            getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = '';
          if (
            element &&
            element._owner &&
            element._owner !== ReactCurrentOwner.current
          ) {
            childOwner =
              ' It was passed a child from ' +
              getComponentName(element._owner.type) +
              '.';
          }
          {
            setCurrentlyValidatingElement$1(element);
            error(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              currentComponentErrorInfo,
              childOwner
            );
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node2, parentType) {
          if (typeof node2 !== 'object') {
            return;
          }
          if (Array.isArray(node2)) {
            for (var i = 0; i < node2.length; i++) {
              var child = node2[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node2)) {
            if (node2._store) {
              node2._store.validated = true;
            }
          } else if (node2) {
            var iteratorFn = getIteratorFn(node2);
            if (typeof iteratorFn === 'function') {
              if (iteratorFn !== node2.entries) {
                var iterator = iteratorFn.call(node2);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === 'string') {
              return;
            }
            var propTypes;
            if (typeof type === 'function') {
              propTypes = type.propTypes;
            } else if (
              typeof type === 'object' &&
              (type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE)
            ) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentName(type);
              checkPropTypes(propTypes, element.props, 'prop', name, element);
            } else if (
              type.PropTypes !== void 0 &&
              !propTypesMisspellWarningShown
            ) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentName(type);
              error(
                'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                _name || 'Unknown'
              );
            }
            if (
              typeof type.getDefaultProps === 'function' &&
              !type.getDefaultProps.isReactClassApproved
            ) {
              error(
                'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
              );
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error(
                  'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                  key
                );
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid attribute `ref` supplied to `React.Fragment`.');
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = '';
            if (
              type === void 0 ||
              (typeof type === 'object' &&
                type !== null &&
                Object.keys(type).length === 0)
            ) {
              info +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = 'null';
            } else if (Array.isArray(type)) {
              typeString = 'array';
            } else if (
              type !== void 0 &&
              type.$$typeof === REACT_ELEMENT_TYPE
            ) {
              typeString =
                '<' + (getComponentName(type.type) || 'Unknown') + ' />';
              info =
                ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = typeof type;
            }
            {
              error(
                'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                typeString,
                info
              );
            }
          }
          var element = createElement3.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn(
                'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
              );
            }
            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function () {
                warn(
                  'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
                );
                Object.defineProperty(this, 'type', {
                  value: type,
                });
                return type;
              },
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            new Map([[frozenObject, null]]);
            new Set([frozenObject]);
          } catch (e) {}
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild,
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.PureComponent = PureComponent;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
          ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext2;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef2;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback;
        exports.useContext = useContext3;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect2;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef2;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  },
});

// ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var require_react = __commonJS({
  '../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js'(
    exports,
    module
  ) {
    init_react_shim();
    ('use strict');
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+sheet@1.0.3/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}
var StyleSheet;
var init_emotion_sheet_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+sheet@1.0.3/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js'() {
    init_react_shim();
    StyleSheet = /* @__PURE__ */ (function () {
      function StyleSheet2(options) {
        var _this = this;
        this._insertTag = function (tag) {
          var before;
          if (_this.tags.length === 0) {
            before = _this.prepend ? _this.container.firstChild : _this.before;
          } else {
            before = _this.tags[_this.tags.length - 1].nextSibling;
          }
          _this.container.insertBefore(tag, before);
          _this.tags.push(tag);
        };
        this.isSpeedy = options.speedy === void 0 ? false : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce;
        this.key = options.key;
        this.container = options.container;
        this.prepend = options.prepend;
        this.before = null;
      }
      var _proto = StyleSheet2.prototype;
      _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
      };
      _proto.insert = function insert(rule) {
        if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
          this._insertTag(createStyleElement(this));
        }
        var tag = this.tags[this.tags.length - 1];
        if (true) {
          var isImportRule3 =
            rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
          if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
            console.error(
              "You're attempting to insert the following rule:\n" +
                rule +
                '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.'
            );
          }
          this._alreadyInsertedOrderInsensitiveRule =
            this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
        }
        if (this.isSpeedy) {
          var sheet = sheetForTag(tag);
          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e) {
            if (
              !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(
                rule
              )
            ) {
              console.error(
                'There was a problem inserting the following rule: "' +
                  rule +
                  '"',
                e
              );
            }
          }
        } else {
          tag.appendChild(document.createTextNode(rule));
        }
        this.ctr++;
      };
      _proto.flush = function flush() {
        this.tags.forEach(function (tag) {
          return tag.parentNode && tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
        if (true) {
          this._alreadyInsertedOrderInsensitiveRule = false;
        }
      };
      return StyleSheet2;
    })();
  },
});

// ../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Enum.js
var MS, MOZ, WEBKIT, COMMENT, RULESET, DECLARATION, IMPORT, KEYFRAMES;
var init_Enum = __esm({
  '../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Enum.js'() {
    init_react_shim();
    MS = '-ms-';
    MOZ = '-moz-';
    WEBKIT = '-webkit-';
    COMMENT = 'comm';
    RULESET = 'rule';
    DECLARATION = 'decl';
    IMPORT = '@import';
    KEYFRAMES = '@keyframes';
  },
});

// ../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Utility.js
function hash(value, length2) {
  return (
    (((((((length2 << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^
      charat(value, 2)) <<
      2) ^
    charat(value, 3)
  );
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join('');
}
var abs, from;
var init_Utility = __esm({
  '../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Utility.js'() {
    init_react_shim();
    abs = Math.abs;
    from = String.fromCharCode;
  },
});

// ../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Tokenizer.js
function node(value, root, parent, type, props, children, length2) {
  return {
    value,
    root,
    parent,
    type,
    props,
    children,
    line,
    column,
    length: length2,
    return: '',
  };
}
function copy(value, root, type) {
  return node(
    value,
    root.root,
    root.parent,
    type,
    root.props,
    root.children,
    0
  );
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if ((column--, character === 10)) (column = 1), line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if ((column++, character === 10)) (column = 1), line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return (
    (line = column = 1),
    (length = strlen((characters = value))),
    (position = 0),
    []
  );
}
function dealloc(value) {
  return (characters = ''), value;
}
function delimit(type) {
  return trim(
    slice(
      position - 1,
      delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)
    )
  );
}
function whitespace(type) {
  while ((character = peek()))
    if (character < 33) next();
    else break;
  return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function escaping(index, count) {
  while (--count && next())
    if (
      character < 48 ||
      character > 102 ||
      (character > 57 && character < 65) ||
      (character > 70 && character < 97)
    )
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        return delimiter(type === 34 || type === 39 ? type : character);
      case 40:
        if (type === 41) delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
  return (
    '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
  );
}
function identifier(index) {
  while (!token(peek())) next();
  return slice(index, position);
}
var line, column, length, position, character, characters;
var init_Tokenizer = __esm({
  '../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Tokenizer.js'() {
    init_react_shim();
    init_Utility();
    line = 1;
    column = 1;
    length = 0;
    position = 0;
    character = 0;
    characters = '';
  },
});

// ../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(
    parse('', null, null, null, [''], (value = alloc(value)), 0, [0], value)
  );
}
function parse(
  value,
  root,
  parent,
  rule,
  rules,
  rulesets,
  pseudo,
  points,
  declarations
) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (((previous = character2), (character2 = next()))) {
      case 34:
      case 39:
      case 91:
      case 40:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(
              comment(commenter(next(), caret()), root, parent),
              declarations
            );
            break;
          default:
            characters2 += '/';
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(
                property > 32
                  ? declaration(characters2 + ';', rule, parent, length2 - 1)
                  : declaration(
                      replace(characters2, ' ', '') + ';',
                      rule,
                      parent,
                      length2 - 2
                    ),
                declarations
              );
            break;
          case 59:
            characters2 += ';';
          default:
            append(
              (reference = ruleset(
                characters2,
                root,
                parent,
                index,
                offset,
                rules,
                points,
                type,
                (props = []),
                (children = []),
                length2
              )),
              rulesets
            );
            if (character2 === 123)
              if (offset === 0)
                parse(
                  characters2,
                  root,
                  reference,
                  reference,
                  props,
                  rulesets,
                  length2,
                  points,
                  children
                );
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(
                      value,
                      reference,
                      reference,
                      rule &&
                        append(
                          ruleset(
                            value,
                            reference,
                            reference,
                            0,
                            0,
                            rules,
                            points,
                            type,
                            rules,
                            (props = []),
                            length2
                          ),
                          children
                        ),
                      rules,
                      children,
                      length2,
                      points,
                      rule ? props : children
                    );
                    break;
                  default:
                    parse(
                      characters2,
                      reference,
                      reference,
                      reference,
                      [''],
                      children,
                      length2,
                      points,
                      children
                    );
                }
        }
        (index = offset = property = 0),
          (variable = ampersand = 1),
          (type = characters2 = ''),
          (length2 = pseudo);
        break;
      case 58:
        (length2 = 1 + strlen(characters2)), (property = previous);
      default:
        if (variable < 1) {
          if (character2 == 123) --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (((characters2 += from(character2)), character2 * variable)) {
          case 38:
            ampersand = offset > 0 ? 1 : ((characters2 += '\f'), -1);
            break;
          case 44:
            (points[index++] = (strlen(characters2) - 1) * ampersand),
              (ampersand = 1);
            break;
          case 64:
            if (peek() === 45) characters2 += delimit(next());
            (atrule = peek()),
              (offset = strlen((type = characters2 += identifier(caret())))),
              character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2) variable = 0;
        }
    }
  return rulesets;
}
function ruleset(
  value,
  root,
  parent,
  index,
  offset,
  rules,
  points,
  type,
  props,
  children,
  length2
) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (
      var x = 0,
        y = substr(value, post + 1, (post = abs((j = points[i])))),
        z = value;
      x < size;
      ++x
    )
      if ((z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))))
        props[k++] = z;
  return node(
    value,
    root,
    parent,
    offset === 0 ? RULESET : type,
    props,
    children,
    length2
  );
}
function comment(value, root, parent) {
  return node(
    value,
    root,
    parent,
    COMMENT,
    from(char()),
    substr(value, 2, -2),
    0
  );
}
function declaration(value, root, parent, length2) {
  return node(
    value,
    root,
    parent,
    DECLARATION,
    substr(value, 0, length2),
    substr(value, length2 + 1, -1),
    length2
  );
}
var init_Parser = __esm({
  '../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Parser.js'() {
    init_react_shim();
    init_Enum();
    init_Utility();
    init_Tokenizer();
  },
});

// ../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Prefixer.js
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + 'print-' + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    case 5187:
      return (
        WEBKIT +
        value +
        replace(
          value,
          /(\w+).+(:[^]+)/,
          WEBKIT + 'box-$1$2' + MS + 'flex-$1$2'
        ) +
        value
      );
    case 5443:
      return (
        WEBKIT +
        value +
        MS +
        'flex-item-' +
        replace(value, /flex-|-self/, '') +
        value
      );
    case 4675:
      return (
        WEBKIT +
        value +
        MS +
        'flex-line-pack' +
        replace(value, /align-content|flex-|-self/, '') +
        value
      );
    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    case 5292:
      return (
        WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
      );
    case 6060:
      return (
        WEBKIT +
        'box-' +
        replace(value, '-grow', '') +
        WEBKIT +
        value +
        MS +
        replace(value, 'grow', 'positive') +
        value
      );
    case 4554:
      return (
        WEBKIT +
        replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') +
        value
      );
    case 6187:
      return (
        replace(
          replace(
            replace(value, /(zoom-|grab)/, WEBKIT + '$1'),
            /(image-set)/,
            WEBKIT + '$1'
          ),
          value,
          ''
        ) + value
      );
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1$`$1');
    case 4968:
      return (
        replace(
          replace(
            value,
            /(.+:)(flex-)?(.*)/,
            WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'
          ),
          /s.+-b[^;]+/,
          'justify'
        ) +
        WEBKIT +
        value +
        value
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45) break;
          case 102:
            return (
              replace(
                value,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  WEBKIT +
                  '$2-$3$1' +
                  MOZ +
                  (charat(value, length2 + 3) == 108 ? '$3' : '$2-$3')
              ) + value
            );
          case 115:
            return ~indexof(value, 'stretch')
              ? prefix(replace(value, 'stretch', 'fill-available'), length2) +
                  value
              : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    case 6444:
      switch (
        charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))
      ) {
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        case 101:
          return (
            replace(
              value,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                WEBKIT +
                (charat(value, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                WEBKIT +
                '$2$3$1' +
                MS +
                '$2box$3'
            ) + value
          );
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return (
            WEBKIT +
            value +
            MS +
            replace(value, /[svh]\w+-[tblr]{2}/, 'tb') +
            value
          );
        case 108:
          return (
            WEBKIT +
            value +
            MS +
            replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') +
            value
          );
        case 45:
          return (
            WEBKIT +
            value +
            MS +
            replace(value, /[svh]\w+-[tblr]{2}/, 'lr') +
            value
          );
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var init_Prefixer = __esm({
  '../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Prefixer.js'() {
    init_react_shim();
    init_Enum();
    init_Utility();
  },
});

// ../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = '';
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || '';
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return (element.return = element.return || element.value);
    case COMMENT:
      return '';
    case RULESET:
      element.value = element.props.join(',');
  }
  return strlen((children = serialize(element.children, callback)))
    ? (element.return = element.value + '{' + children + '}')
    : '';
}
var init_Serializer = __esm({
  '../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Serializer.js'() {
    init_react_shim();
    init_Enum();
    init_Utility();
  },
});

// ../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function (element, index, children, callback) {
    var output = '';
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || '';
    return output;
  };
}
function prefixer(element, index, children, callback) {
  if (!element.return)
    switch (element.type) {
      case DECLARATION:
        element.return = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize(
          [copy(replace(element.value, '@', '@' + WEBKIT), element, '')],
          callback
        );
      case RULESET:
        if (element.length)
          return combine(element.props, function (value) {
            switch (match(value, /(::plac\w+|:read-\w+)/)) {
              case ':read-only':
              case ':read-write':
                return serialize(
                  [
                    copy(
                      replace(value, /:(read-\w+)/, ':' + MOZ + '$1'),
                      element,
                      ''
                    ),
                  ],
                  callback
                );
              case '::placeholder':
                return serialize(
                  [
                    copy(
                      replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1'),
                      element,
                      ''
                    ),
                    copy(
                      replace(value, /:(plac\w+)/, ':' + MOZ + '$1'),
                      element,
                      ''
                    ),
                    copy(
                      replace(value, /:(plac\w+)/, MS + 'input-$1'),
                      element,
                      ''
                    ),
                  ],
                  callback
                );
            }
            return '';
          });
    }
}
var init_Middleware = __esm({
  '../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/src/Middleware.js'() {
    init_react_shim();
    init_Enum();
    init_Utility();
    init_Tokenizer();
    init_Serializer();
    init_Prefixer();
  },
});

// ../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/index.js
var init_stylis = __esm({
  '../../common/temp/node_modules/.pnpm/stylis@4.0.10/node_modules/stylis/index.js'() {
    init_react_shim();
    init_Enum();
    init_Utility();
    init_Parser();
    init_Prefixer();
    init_Tokenizer();
    init_Serializer();
    init_Middleware();
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+weak-memoize@0.2.5/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js
var weakMemoize, weak_memoize_browser_esm_default;
var init_weak_memoize_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+weak-memoize@0.2.5/node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js'() {
    init_react_shim();
    weakMemoize = function weakMemoize2(func) {
      var cache = new WeakMap();
      return function (arg) {
        if (cache.has(arg)) {
          return cache.get(arg);
        }
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
      };
    };
    weak_memoize_browser_esm_default = weakMemoize;
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+memoize@0.7.5/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var emotion_memoize_browser_esm_default;
var init_emotion_memoize_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+memoize@0.7.5/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js'() {
    init_react_shim();
    emotion_memoize_browser_esm_default = memoize;
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+cache@11.5.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var last,
  identifierWithPointTracking,
  toRules,
  getRules,
  fixedElements,
  compat,
  removeLabel,
  ignoreFlag,
  isIgnoringComment,
  createUnsafeSelectorsAlarm,
  isImportRule,
  isPrependedWithRegularRules,
  nullifyElement,
  incorrectImportAlarm,
  defaultStylisPlugins,
  createCache,
  emotion_cache_browser_esm_default;
var init_emotion_cache_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+cache@11.5.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js'() {
    init_react_shim();
    init_emotion_sheet_browser_esm();
    init_stylis();
    init_weak_memoize_browser_esm();
    init_emotion_memoize_browser_esm();
    last = function last2(arr) {
      return arr.length ? arr[arr.length - 1] : null;
    };
    identifierWithPointTracking = function identifierWithPointTracking2(
      begin,
      points,
      index
    ) {
      var previous = 0;
      var character2 = 0;
      while (true) {
        previous = character2;
        character2 = peek();
        if (previous === 38 && character2 === 12) {
          points[index] = 1;
        }
        if (token(character2)) {
          break;
        }
        next();
      }
      return slice(begin, position);
    };
    toRules = function toRules2(parsed, points) {
      var index = -1;
      var character2 = 44;
      do {
        switch (token(character2)) {
          case 0:
            if (character2 === 38 && peek() === 12) {
              points[index] = 1;
            }
            parsed[index] += identifierWithPointTracking(
              position - 1,
              points,
              index
            );
            break;
          case 2:
            parsed[index] += delimit(character2);
            break;
          case 4:
            if (character2 === 44) {
              parsed[++index] = peek() === 58 ? '&\f' : '';
              points[index] = parsed[index].length;
              break;
            }
          default:
            parsed[index] += from(character2);
        }
      } while ((character2 = next()));
      return parsed;
    };
    getRules = function getRules2(value, points) {
      return dealloc(toRules(alloc(value), points));
    };
    fixedElements = /* @__PURE__ */ new WeakMap();
    compat = function compat2(element) {
      if (element.type !== 'rule' || !element.parent || !element.length) {
        return;
      }
      var value = element.value,
        parent = element.parent;
      var isImplicitRule =
        element.column === parent.column && element.line === parent.line;
      while (parent.type !== 'rule') {
        parent = parent.parent;
        if (!parent) return;
      }
      if (
        element.props.length === 1 &&
        value.charCodeAt(0) !== 58 &&
        !fixedElements.get(parent)
      ) {
        return;
      }
      if (isImplicitRule) {
        return;
      }
      fixedElements.set(element, true);
      var points = [];
      var rules = getRules(value, points);
      var parentRules = parent.props;
      for (var i = 0, k = 0; i < rules.length; i++) {
        for (var j = 0; j < parentRules.length; j++, k++) {
          element.props[k] = points[i]
            ? rules[i].replace(/&\f/g, parentRules[j])
            : parentRules[j] + ' ' + rules[i];
        }
      }
    };
    removeLabel = function removeLabel2(element) {
      if (element.type === 'decl') {
        var value = element.value;
        if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
          element['return'] = '';
          element.value = '';
        }
      }
    };
    ignoreFlag =
      'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
    isIgnoringComment = function isIgnoringComment2(element) {
      return (
        !!element &&
        element.type === 'comm' &&
        element.children.indexOf(ignoreFlag) > -1
      );
    };
    createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
      return function (element, index, children) {
        if (element.type !== 'rule') return;
        var unsafePseudoClasses = element.value.match(
          /(:first|:nth|:nth-last)-child/g
        );
        if (unsafePseudoClasses && cache.compat !== true) {
          var prevElement = index > 0 ? children[index - 1] : null;
          if (prevElement && isIgnoringComment(last(prevElement.children))) {
            return;
          }
          unsafePseudoClasses.forEach(function (unsafePseudoClass) {
            console.error(
              'The pseudo class "' +
                unsafePseudoClass +
                '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                unsafePseudoClass.split('-child')[0] +
                '-of-type".'
            );
          });
        }
      };
    };
    isImportRule = function isImportRule2(element) {
      return (
        element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64
      );
    };
    isPrependedWithRegularRules = function isPrependedWithRegularRules2(
      index,
      children
    ) {
      for (var i = index - 1; i >= 0; i--) {
        if (!isImportRule(children[i])) {
          return true;
        }
      }
      return false;
    };
    nullifyElement = function nullifyElement2(element) {
      element.type = '';
      element.value = '';
      element['return'] = '';
      element.children = '';
      element.props = '';
    };
    incorrectImportAlarm = function incorrectImportAlarm2(
      element,
      index,
      children
    ) {
      if (!isImportRule(element)) {
        return;
      }
      if (element.parent) {
        console.error(
          "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
        );
        nullifyElement(element);
      } else if (isPrependedWithRegularRules(index, children)) {
        console.error(
          "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
        );
        nullifyElement(element);
      }
    };
    defaultStylisPlugins = [prefixer];
    createCache = function createCache2(options) {
      var key = options.key;
      if (!key) {
        throw new Error(
          "You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements."
        );
      }
      if (key === 'css') {
        var ssrStyles = document.querySelectorAll(
          'style[data-emotion]:not([data-s])'
        );
        Array.prototype.forEach.call(ssrStyles, function (node2) {
          var dataEmotionAttribute = node2.getAttribute('data-emotion');
          if (dataEmotionAttribute.indexOf(' ') === -1) {
            return;
          }
          document.head.appendChild(node2);
          node2.setAttribute('data-s', '');
        });
      }
      var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
      if (true) {
        if (/[^a-z-]/.test(key)) {
          throw new Error(
            'Emotion key must only contain lower case alphabetical characters and - but "' +
              key +
              '" was passed'
          );
        }
      }
      var inserted = {};
      var container;
      var nodesToHydrate = [];
      {
        container = options.container || document.head;
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
          function (node2) {
            var attrib = node2.getAttribute('data-emotion').split(' ');
            for (var i = 1; i < attrib.length; i++) {
              inserted[attrib[i]] = true;
            }
            nodesToHydrate.push(node2);
          }
        );
      }
      var _insert;
      var omnipresentPlugins = [compat, removeLabel];
      if (true) {
        omnipresentPlugins.push(
          createUnsafeSelectorsAlarm({
            get compat() {
              return cache.compat;
            },
          }),
          incorrectImportAlarm
        );
      }
      {
        var currentSheet;
        var finalizingPlugins = [
          stringify,
          true
            ? function (element) {
                if (!element.root) {
                  if (element['return']) {
                    currentSheet.insert(element['return']);
                  } else if (element.value && element.type !== COMMENT) {
                    currentSheet.insert(element.value + '{}');
                  }
                }
              }
            : rulesheet(function (rule) {
                currentSheet.insert(rule);
              }),
        ];
        var serializer = middleware(
          omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)
        );
        var stylis = function stylis2(styles) {
          return serialize(compile(styles), serializer);
        };
        _insert = function insert(selector, serialized, sheet, shouldCache) {
          currentSheet = sheet;
          if (serialized.map !== void 0) {
            currentSheet = {
              insert: function insert2(rule) {
                sheet.insert(rule + serialized.map);
              },
            };
          }
          stylis(
            selector
              ? selector + '{' + serialized.styles + '}'
              : serialized.styles
          );
          if (shouldCache) {
            cache.inserted[serialized.name] = true;
          }
        };
      }
      var cache = {
        key,
        sheet: new StyleSheet({
          key,
          container,
          nonce: options.nonce,
          speedy: options.speedy,
          prepend: options.prepend,
        }),
        nonce: options.nonce,
        inserted,
        registered: {},
        insert: _insert,
      };
      cache.sheet.hydrate(nodesToHydrate);
      return cache;
    };
    emotion_cache_browser_esm_default = createCache;
  },
});

// ../../common/temp/node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js
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
var init_extends = __esm({
  '../../common/temp/node_modules/.pnpm/@babel+runtime@7.15.4/node_modules/@babel/runtime/helpers/esm/extends.js'() {
    init_react_shim();
  },
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
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol
          ? Symbol.for('react.element')
          : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol
          ? Symbol.for('react.fragment')
          : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol
          ? Symbol.for('react.strict_mode')
          : 60108;
        var REACT_PROFILER_TYPE = hasSymbol
          ? Symbol.for('react.profiler')
          : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol
          ? Symbol.for('react.provider')
          : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol
          ? Symbol.for('react.context')
          : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol
          ? Symbol.for('react.async_mode')
          : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol
          ? Symbol.for('react.concurrent_mode')
          : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol
          ? Symbol.for('react.forward_ref')
          : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol
          ? Symbol.for('react.suspense')
          : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol
          ? Symbol.for('react.suspense_list')
          : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol
          ? Symbol.for('react.fundamental')
          : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol
          ? Symbol.for('react.responder')
          : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 60119;
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
        var Fragment = REACT_FRAGMENT_TYPE;
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
        exports.Fragment = Fragment;
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

// ../../common/temp/node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  '../../common/temp/node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'(
    exports,
    module
  ) {
    init_react_shim();
    ('use strict');
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true,
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true,
    };
    var FORWARD_REF_STATICS = {
      $$typeof: true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
    };
    var MEMO_STATICS = {
      $$typeof: true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true,
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(
              targetComponent,
              inheritedComponent,
              blacklist
            );
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (
            !KNOWN_STATICS[key] &&
            !(blacklist && blacklist[key]) &&
            !(sourceStatics && sourceStatics[key]) &&
            !(targetStatics && targetStatics[key])
          ) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+utils@1.0.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
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
var isBrowser, insertStyles;
var init_emotion_utils_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+utils@1.0.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js'() {
    init_react_shim();
    isBrowser = true;
    insertStyles = function insertStyles2(cache, serialized, isStringTag) {
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
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+hash@0.8.0/node_modules/@emotion/hash/dist/hash.browser.esm.js
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
var hash_browser_esm_default;
var init_hash_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+hash@0.8.0/node_modules/@emotion/hash/dist/hash.browser.esm.js'() {
    init_react_shim();
    hash_browser_esm_default = murmur2;
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+unitless@0.7.5/node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys, unitless_browser_esm_default;
var init_unitless_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+unitless@0.7.5/node_modules/@emotion/unitless/dist/unitless.browser.esm.js'() {
    init_react_shim();
    unitlessKeys = {
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
    unitless_browser_esm_default = unitlessKeys;
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+serialize@1.0.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
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
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor,
            };
            next2 = next2.next;
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
          function (match2, p1, p2) {
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
var ILLEGAL_ESCAPE_SEQUENCE_ERROR,
  UNDEFINED_AS_OBJECT_KEY_ERROR,
  hyphenateRegex,
  animationRegex,
  isCustomProperty,
  isProcessableValue,
  processStyleName,
  processStyleValue,
  contentValuePattern,
  contentValues,
  oldProcessStyleValue,
  msPattern,
  hyphenPattern,
  hyphenatedCache,
  labelPattern,
  sourceMapPattern,
  cursor,
  serializeStyles;
var init_emotion_serialize_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+serialize@1.0.2/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js'() {
    init_react_shim();
    init_hash_browser_esm();
    init_unitless_browser_esm();
    init_emotion_memoize_browser_esm();
    ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
    UNDEFINED_AS_OBJECT_KEY_ERROR =
      "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
    hyphenateRegex = /[A-Z]|^ms/g;
    animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
    isCustomProperty = function isCustomProperty2(property) {
      return property.charCodeAt(1) === 45;
    };
    isProcessableValue = function isProcessableValue2(value) {
      return value != null && typeof value !== 'boolean';
    };
    processStyleName = /* @__PURE__ */ emotion_memoize_browser_esm_default(
      function (styleName) {
        return isCustomProperty(styleName)
          ? styleName
          : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
      }
    );
    processStyleValue = function processStyleValue2(key, value) {
      switch (key) {
        case 'animation':
        case 'animationName': {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match2, p1, p2) {
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
    labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
    if (true) {
      sourceMapPattern =
        /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
    }
    serializeStyles = function serializeStyles2(args, registered, mergedProps) {
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
        styles = styles.replace(sourceMapPattern, function (match3) {
          sourceMap = match3;
          return '';
        });
      }
      labelPattern.lastIndex = 0;
      var identifierName = '';
      var match2;
      while ((match2 = labelPattern.exec(styles)) !== null) {
        identifierName += '-' + match2[1];
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
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+react@11.5.0_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js
var import_react,
  hasOwnProperty,
  EmotionCacheContext,
  CacheProvider,
  withEmotionCache,
  ThemeContext,
  getTheme,
  createCacheWithTheme,
  ThemeProvider,
  sanitizeIdentifier,
  typePropName,
  labelPropName,
  createEmotionProps,
  Emotion;
var init_emotion_element_99289b21_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+react@11.5.0_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js'() {
    init_react_shim();
    import_react = __toModule(require_react());
    init_emotion_cache_browser_esm();
    init_extends();
    init_weak_memoize_browser_esm();
    init_emotion_utils_browser_esm();
    init_emotion_serialize_browser_esm();
    hasOwnProperty = Object.prototype.hasOwnProperty;
    EmotionCacheContext = /* @__PURE__ */ (0, import_react.createContext)(
      typeof HTMLElement !== 'undefined'
        ? /* @__PURE__ */ emotion_cache_browser_esm_default({
            key: 'css',
          })
        : null
    );
    if (true) {
      EmotionCacheContext.displayName = 'EmotionCacheContext';
    }
    CacheProvider = EmotionCacheContext.Provider;
    withEmotionCache = function withEmotionCache2(func) {
      return /* @__PURE__ */ (0, import_react.forwardRef)(function (
        props,
        ref
      ) {
        var cache = (0, import_react.useContext)(EmotionCacheContext);
        return func(props, cache, ref);
      });
    };
    ThemeContext = /* @__PURE__ */ (0, import_react.createContext)({});
    if (true) {
      ThemeContext.displayName = 'EmotionThemeContext';
    }
    getTheme = function getTheme2(outerTheme, theme2) {
      if (typeof theme2 === 'function') {
        var mergedTheme = theme2(outerTheme);
        if (
          mergedTheme == null ||
          typeof mergedTheme !== 'object' ||
          Array.isArray(mergedTheme)
        ) {
          throw new Error(
            '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!'
          );
        }
        return mergedTheme;
      }
      if (
        theme2 == null ||
        typeof theme2 !== 'object' ||
        Array.isArray(theme2)
      ) {
        throw new Error(
          '[ThemeProvider] Please make your theme prop a plain object'
        );
      }
      return _extends({}, outerTheme, theme2);
    };
    createCacheWithTheme = /* @__PURE__ */ weak_memoize_browser_esm_default(
      function (outerTheme) {
        return weak_memoize_browser_esm_default(function (theme2) {
          return getTheme(outerTheme, theme2);
        });
      }
    );
    ThemeProvider = function ThemeProvider2(props) {
      var theme2 = (0, import_react.useContext)(ThemeContext);
      if (props.theme !== theme2) {
        theme2 = createCacheWithTheme(theme2)(props.theme);
      }
      return /* @__PURE__ */ (0, import_react.createElement)(
        ThemeContext.Provider,
        {
          value: theme2,
        },
        props.children
      );
    };
    sanitizeIdentifier = function sanitizeIdentifier2(identifier2) {
      return identifier2.replace(/\$/g, '-');
    };
    typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
    labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
    createEmotionProps = function createEmotionProps2(type, props) {
      if (typeof props.css === 'string' && props.css.indexOf(':') !== -1) {
        throw new Error(
          "Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" +
            props.css +
            '`'
        );
      }
      var newProps = {};
      for (var key in props) {
        if (hasOwnProperty.call(props, key)) {
          newProps[key] = props[key];
        }
      }
      newProps[typePropName] = type;
      if (true) {
        var error = new Error();
        if (error.stack) {
          var match2 = error.stack.match(
            /at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /
          );
          if (!match2) {
            match2 = error.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/);
          }
          if (match2) {
            newProps[labelPropName] = sanitizeIdentifier(match2[1]);
          }
        }
      }
      return newProps;
    };
    Emotion = /* @__PURE__ */ withEmotionCache(function (props, cache, ref) {
      var cssProp = props.css;
      if (typeof cssProp === 'string' && cache.registered[cssProp] !== void 0) {
        cssProp = cache.registered[cssProp];
      }
      var type = props[typePropName];
      var registeredStyles = [cssProp];
      var className = '';
      if (typeof props.className === 'string') {
        className = getRegisteredStyles(
          cache.registered,
          registeredStyles,
          props.className
        );
      } else if (props.className != null) {
        className = props.className + ' ';
      }
      var serialized = serializeStyles(
        registeredStyles,
        void 0,
        (0, import_react.useContext)(ThemeContext)
      );
      if (serialized.name.indexOf('-') === -1) {
        var labelFromStack = props[labelPropName];
        if (labelFromStack) {
          serialized = serializeStyles([
            serialized,
            'label:' + labelFromStack + ';',
          ]);
        }
      }
      var rules = insertStyles(cache, serialized, typeof type === 'string');
      className += cache.key + '-' + serialized.name;
      var newProps = {};
      for (var key in props) {
        if (
          hasOwnProperty.call(props, key) &&
          key !== 'css' &&
          key !== typePropName &&
          key !== labelPropName
        ) {
          newProps[key] = props[key];
        }
      }
      newProps.ref = ref;
      newProps.className = className;
      var ele = /* @__PURE__ */ (0, import_react.createElement)(type, newProps);
      return ele;
    });
    if (true) {
      Emotion.displayName = 'EmotionCssPropInternal';
    }
  },
});

// ../../common/temp/node_modules/.pnpm/@emotion+react@11.5.0_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
function css() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
function merge(registered, css2, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(
    registered,
    registeredStyles,
    className
  );
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css2(registeredStyles);
}
var import_react2,
  import_hoist_non_react_statics,
  pkg,
  jsx,
  warnedAboutCssPropForGlobal,
  Global,
  classnames,
  ClassNames,
  isBrowser2,
  isJest,
  globalContext,
  globalKey;
var init_emotion_react_browser_esm = __esm({
  '../../common/temp/node_modules/.pnpm/@emotion+react@11.5.0_8f2a70223edc24c84ceb1eb31a596bed/node_modules/@emotion/react/dist/emotion-react.browser.esm.js'() {
    init_react_shim();
    import_react2 = __toModule(require_react());
    init_emotion_cache_browser_esm();
    init_emotion_element_99289b21_browser_esm();
    init_emotion_element_99289b21_browser_esm();
    init_extends();
    init_weak_memoize_browser_esm();
    import_hoist_non_react_statics = __toModule(
      require_hoist_non_react_statics_cjs()
    );
    init_emotion_utils_browser_esm();
    init_emotion_serialize_browser_esm();
    init_emotion_sheet_browser_esm();
    pkg = {
      name: '@emotion/react',
      version: '11.5.0',
      main: 'dist/emotion-react.cjs.js',
      module: 'dist/emotion-react.esm.js',
      browser: {
        './dist/emotion-react.cjs.js': './dist/emotion-react.browser.cjs.js',
        './dist/emotion-react.esm.js': './dist/emotion-react.browser.esm.js',
      },
      types: 'types/index.d.ts',
      files: [
        'src',
        'dist',
        'jsx-runtime',
        'jsx-dev-runtime',
        'isolated-hoist-non-react-statics-do-not-use-this-in-your-code',
        'types/*.d.ts',
        'macro.js',
        'macro.d.ts',
        'macro.js.flow',
      ],
      sideEffects: false,
      author: 'mitchellhamilton <mitchell@mitchellhamilton.me>',
      license: 'MIT',
      scripts: {
        'test:typescript': 'dtslint types',
      },
      dependencies: {
        '@babel/runtime': '^7.13.10',
        '@emotion/cache': '^11.5.0',
        '@emotion/serialize': '^1.0.2',
        '@emotion/sheet': '^1.0.3',
        '@emotion/utils': '^1.0.0',
        '@emotion/weak-memoize': '^0.2.5',
        'hoist-non-react-statics': '^3.3.1',
      },
      peerDependencies: {
        '@babel/core': '^7.0.0',
        react: '>=16.8.0',
      },
      peerDependenciesMeta: {
        '@babel/core': {
          optional: true,
        },
        '@types/react': {
          optional: true,
        },
      },
      devDependencies: {
        '@babel/core': '^7.13.10',
        '@emotion/css': '11.5.0',
        '@emotion/css-prettifier': '1.0.0',
        '@emotion/server': '11.4.0',
        '@emotion/styled': '11.3.0',
        '@types/react': '^16.9.11',
        dtslint: '^0.3.0',
        'html-tag-names': '^1.1.2',
        react: '16.14.0',
        'svg-tag-names': '^1.1.1',
      },
      repository:
        'https://github.com/emotion-js/emotion/tree/main/packages/react',
      publishConfig: {
        access: 'public',
      },
      'umd:main': 'dist/emotion-react.umd.min.js',
      preconstruct: {
        entrypoints: [
          './index.js',
          './jsx-runtime.js',
          './jsx-dev-runtime.js',
          './isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js',
        ],
        umdName: 'emotionReact',
      },
    };
    jsx = function jsx2(type, props) {
      var args = arguments;
      if (props == null || !hasOwnProperty.call(props, 'css')) {
        return import_react2.createElement.apply(void 0, args);
      }
      var argsLength = args.length;
      var createElementArgArray = new Array(argsLength);
      createElementArgArray[0] = Emotion;
      createElementArgArray[1] = createEmotionProps(type, props);
      for (var i = 2; i < argsLength; i++) {
        createElementArgArray[i] = args[i];
      }
      return import_react2.createElement.apply(null, createElementArgArray);
    };
    warnedAboutCssPropForGlobal = false;
    Global = /* @__PURE__ */ withEmotionCache(function (props, cache) {
      if (!warnedAboutCssPropForGlobal && (props.className || props.css)) {
        console.error(
          "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"
        );
        warnedAboutCssPropForGlobal = true;
      }
      var styles = props.styles;
      var serialized = serializeStyles(
        [styles],
        void 0,
        (0, import_react2.useContext)(ThemeContext)
      );
      var sheetRef = (0, import_react2.useRef)();
      (0, import_react2.useLayoutEffect)(
        function () {
          var key = cache.key + '-global';
          var sheet = new StyleSheet({
            key,
            nonce: cache.sheet.nonce,
            container: cache.sheet.container,
            speedy: cache.sheet.isSpeedy,
          });
          var rehydrating = false;
          var node2 = document.querySelector(
            'style[data-emotion="' + key + ' ' + serialized.name + '"]'
          );
          if (cache.sheet.tags.length) {
            sheet.before = cache.sheet.tags[0];
          }
          if (node2 !== null) {
            rehydrating = true;
            node2.setAttribute('data-emotion', key);
            sheet.hydrate([node2]);
          }
          sheetRef.current = [sheet, rehydrating];
          return function () {
            sheet.flush();
          };
        },
        [cache]
      );
      (0, import_react2.useLayoutEffect)(
        function () {
          var sheetRefCurrent = sheetRef.current;
          var sheet = sheetRefCurrent[0],
            rehydrating = sheetRefCurrent[1];
          if (rehydrating) {
            sheetRefCurrent[1] = false;
            return;
          }
          if (serialized.next !== void 0) {
            insertStyles(cache, serialized.next, true);
          }
          if (sheet.tags.length) {
            var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
            sheet.before = element;
            sheet.flush();
          }
          cache.insert('', serialized, sheet, false);
        },
        [cache, serialized.name]
      );
      return null;
    });
    if (true) {
      Global.displayName = 'EmotionGlobal';
    }
    classnames = function classnames2(args) {
      var len = args.length;
      var i = 0;
      var cls = '';
      for (; i < len; i++) {
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch (typeof arg) {
          case 'boolean':
            break;
          case 'object': {
            if (Array.isArray(arg)) {
              toAdd = classnames2(arg);
            } else {
              if (arg.styles !== void 0 && arg.name !== void 0) {
                console.error(
                  'You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.'
                );
              }
              toAdd = '';
              for (var k in arg) {
                if (arg[k] && k) {
                  toAdd && (toAdd += ' ');
                  toAdd += k;
                }
              }
            }
            break;
          }
          default: {
            toAdd = arg;
          }
        }
        if (toAdd) {
          cls && (cls += ' ');
          cls += toAdd;
        }
      }
      return cls;
    };
    ClassNames = /* @__PURE__ */ withEmotionCache(function (props, cache) {
      var hasRendered = false;
      var css2 = function css3() {
        if (hasRendered && true) {
          throw new Error('css can only be used during render');
        }
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }
        var serialized = serializeStyles(args, cache.registered);
        {
          insertStyles(cache, serialized, false);
        }
        return cache.key + '-' + serialized.name;
      };
      var cx = function cx2() {
        if (hasRendered && true) {
          throw new Error('cx can only be used during render');
        }
        for (
          var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2];
        }
        return merge(cache.registered, css2, classnames(args));
      };
      var content = {
        css: css2,
        cx,
        theme: (0, import_react2.useContext)(ThemeContext),
      };
      var ele = props.children(content);
      hasRendered = true;
      return ele;
    });
    if (true) {
      ClassNames.displayName = 'EmotionClassNames';
    }
    if (true) {
      isBrowser2 = true;
      isJest = typeof jest !== 'undefined';
      if (isBrowser2 && !isJest) {
        globalContext =
          typeof globalThis !== 'undefined'
            ? globalThis
            : isBrowser2
            ? window
            : global;
        globalKey = '__EMOTION_REACT_' + pkg.version.split('.')[0] + '__';
        if (globalContext[globalKey]) {
          console.warn(
            'You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.'
          );
        }
        globalContext[globalKey] = true;
      }
    }
  },
});

// build/react-shim.mjs
var init_react_shim = __esm({
  'build/react-shim.mjs'() {
    init_emotion_react_browser_esm();
  },
});

// ../../themes/theme-1/dist/index.js
var require_dist = __commonJS({
  '../../themes/theme-1/dist/index.js'(exports) {
    init_react_shim();
    var __defProp2 = Object.defineProperty;
    var __markAsModule2 = target =>
      __defProp2(target, '__esModule', { value: true });
    var __export = (target, all) => {
      __markAsModule2(target);
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    __export(exports, {
      theme: () => theme2,
    });
    var theme2 = {
      colors: {
        primary: '#0aa',
        secondary: '#fb7',
        danger: 'red',
        caution: 'orange',
      },
    };
  },
});

// src/index.tsx
init_react_shim();
init_emotion_react_browser_esm();
var import_theme_1 = __toModule(require_dist());
var Button = ({ children, type = 'button', onClick }) => {
  return /* @__PURE__ */ jsx(
    ThemeProvider,
    {
      theme: import_theme_1.theme,
    },
    /* @__PURE__ */ jsx(
      'button',
      {
        css: theme2 => css`
          color: ${theme2.colors.primary};
          border-color: ${theme2.colors.secondary};
        `,
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
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
