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
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (
    (module2 && typeof module2 === 'object') ||
    typeof module2 === 'function'
  ) {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== 'default')
        __defProp(target, key, {
          get: () => module2[key],
          enumerable:
            !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable,
        });
  }
  return target;
};
var __toModule = module2 => {
  return __reExport(
    __markAsModule(
      __defProp(
        module2 != null ? __create(__getProtoOf(module2)) : {},
        'default',
        module2 && module2.__esModule && 'default' in module2
          ? { get: () => module2.default, enumerable: true }
          : { value: module2, enumerable: true }
      )
    ),
    module2
  );
};

// build/react-shim.mjs
var import_react;
var init_react_shim = __esm({
  'build/react-shim.mjs'() {
    import_react = __toModule(require('@emotion/react'));
  },
});

// ../../themes/theme-1/dist/index.js
var require_dist = __commonJS({
  '../../themes/theme-1/dist/index.js'(exports2) {
    init_react_shim();
    var __defProp2 = Object.defineProperty;
    var __markAsModule2 = target =>
      __defProp2(target, '__esModule', { value: true });
    var __export2 = (target, all) => {
      __markAsModule2(target);
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    __export2(exports2, {
      theme: () => theme2,
    });
    var theme2 = {
      colors: {
        primary: '#555753',
        secondary: '#7D775C',
        accent: '#B7A5DF',
        danger: 'red',
        caution: 'orange',
      },
      typography: {
        font: '75% georgia, sans-serif',
        lineHeight: '1.88889',
      },
      spacing: {
        one: '10px',
        two: '20px',
        three: '30px',
        four: '40px',
        five: '50px',
        six: '60px',
        seven: '70px',
      },
    };
  },
});

// src/index.tsx
__export(exports, {
  Heading: () => Heading,
});
init_react_shim();
var import_react2 = __toModule(require('@emotion/react'));

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
init_react_shim();
var freeGlobal =
  typeof global == 'object' && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
var freeSelf =
  typeof self == 'object' && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function('return this')();
var root_default = root;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
var Symbol = root_default.Symbol;
var Symbol_default = Symbol;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
init_react_shim();
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
init_react_shim();
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value)
    ? getRawTag_default(value)
    : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
init_react_shim();
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
var isObjectLike_default = isObjectLike;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
init_react_shim();
var isArray = Array.isArray;
var isArray_default = isArray;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
init_react_shim();
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
var isObject_default = isObject;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
init_react_shim();
function identity(value) {
  return value;
}
var identity_default = identity;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
init_react_shim();
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_coreJsData.js
init_react_shim();
var coreJsData = root_default['__core-js_shared__'];
var coreJsData_default = coreJsData;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js
var maskSrcKey = (function () {
  var uid = /[^.]+$/.exec(
    (coreJsData_default &&
      coreJsData_default.keys &&
      coreJsData_default.keys.IE_PROTO) ||
      ''
  );
  return uid ? 'Symbol(src)_1.' + uid : '';
})();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js
init_react_shim();
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
var toSource_default = toSource;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  '^' +
    funcToString2
      .call(hasOwnProperty2)
      .replace(reRegExpChar, '\\$&')
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        '$1.*?'
      ) +
    '$'
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getValue.js
init_react_shim();
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseCreate.js
init_react_shim();
var objectCreate = Object.create;
var baseCreate = (function () {
  function object() {}
  return function (proto) {
    if (!isObject_default(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
})();
var baseCreate_default = baseCreate;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_apply.js
init_react_shim();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
init_react_shim();
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default = copyArray;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_shortOut.js
init_react_shim();
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0,
    lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
      remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToString.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseSetToString.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/constant.js
init_react_shim();
function constant(value) {
  return function () {
    return value;
  };
}
var constant_default = constant;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_defineProperty.js
init_react_shim();
var defineProperty = (function () {
  try {
    var func = getNative_default(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
})();
var defineProperty_default = defineProperty;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default
  ? identity_default
  : function (func, string) {
      return defineProperty_default(func, 'toString', {
        configurable: true,
        enumerable: false,
        value: constant_default(string),
        writable: true,
      });
    };
var baseSetToString_default = baseSetToString;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
init_react_shim();
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return (
    !!length &&
    (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
    value > -1 &&
    value % 1 == 0 &&
    value < length
  );
}
var isIndex_default = isIndex;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignValue.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssignValue.js
init_react_shim();
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty_default) {
    defineProperty_default(object, key, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true,
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/eq.js
init_react_shim();
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}
var eq_default = eq;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignValue.js
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (
    !(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) ||
    (value === void 0 && !(key in object))
  ) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyObject.js
init_react_shim();
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default = copyObject;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createAssigner.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRest.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overRest.js
init_react_shim();
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
      index = -1,
      length = nativeMax(args.length - start, 0),
      array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(
    overRest_default(func, start, identity_default),
    func + ''
  );
}
var baseRest_default = baseRest;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIterateeCall.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
init_react_shim();
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return (
    typeof value == 'number' &&
    value > -1 &&
    value % 1 == 0 &&
    value <= MAX_SAFE_INTEGER2
  );
}
var isLength_default = isLength;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return (
    value != null &&
    isLength_default(value.length) &&
    !isFunction_default(value)
  );
}
var isArrayLike_default = isArrayLike;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (
    type == 'number'
      ? isArrayLike_default(object) && isIndex_default(index, object.length)
      : type == 'string' && index in object
  ) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default = isIterateeCall;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return baseRest_default(function (object, sources) {
    var index = -1,
      length = sources.length,
      customizer = length > 1 ? sources[length - 1] : void 0,
      guard = length > 2 ? sources[2] : void 0;
    customizer =
      assigner.length > 3 && typeof customizer == 'function'
        ? (length--, customizer)
        : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var createAssigner_default = createAssigner;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
init_react_shim();
var objectProto5 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto5;
  return value === proto;
}
var isPrototype_default = isPrototype;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
init_react_shim();
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
init_react_shim();
var argsTag = '[object Arguments]';
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
var objectProto6 = Object.prototype;
var hasOwnProperty4 = objectProto6.hasOwnProperty;
var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
var isArguments = baseIsArguments_default(
  (function () {
    return arguments;
  })()
)
  ? baseIsArguments_default
  : function (value) {
      return (
        isObjectLike_default(value) &&
        hasOwnProperty4.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee')
      );
    };
var isArguments_default = isArguments;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
init_react_shim();
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
var freeExports =
  typeof exports == 'object' && exports && !exports.nodeType && exports;
var freeModule =
  freeExports &&
  typeof module == 'object' &&
  module &&
  !module.nodeType &&
  module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
init_react_shim();
var argsTag2 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag2 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';
var typedArrayTags = {};
typedArrayTags[float32Tag] =
  typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] =
  typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] =
  typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] =
  typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] =
    true;
typedArrayTags[argsTag2] =
  typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] =
  typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] =
  typedArrayTags[dateTag] =
  typedArrayTags[errorTag] =
  typedArrayTags[funcTag2] =
  typedArrayTags[mapTag] =
  typedArrayTags[numberTag] =
  typedArrayTags[objectTag] =
  typedArrayTags[regexpTag] =
  typedArrayTags[setTag] =
  typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] =
    false;
function baseIsTypedArray(value) {
  return (
    isObjectLike_default(value) &&
    isLength_default(value.length) &&
    !!typedArrayTags[baseGetTag_default(value)]
  );
}
var baseIsTypedArray_default = baseIsTypedArray;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
init_react_shim();
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
init_react_shim();
var freeExports2 =
  typeof exports == 'object' && exports && !exports.nodeType && exports;
var freeModule2 =
  freeExports2 &&
  typeof module == 'object' &&
  module &&
  !module.nodeType &&
  module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = (function () {
  try {
    var types =
      freeModule2 && freeModule2.require && freeModule2.require('util').types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
})();
var nodeUtil_default = nodeUtil;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray
  ? baseUnary_default(nodeIsTypedArray)
  : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty5 = objectProto7.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value),
    isArg = !isArr && isArguments_default(value),
    isBuff = !isArr && !isArg && isBuffer_default(value),
    isType = !isArr && !isArg && !isBuff && isTypedArray_default(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? baseTimes_default(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if (
      (inherited || hasOwnProperty5.call(value, key)) &&
      !(
        skipIndexes &&
        (key == 'length' ||
          (isBuff && (key == 'offset' || key == 'parent')) ||
          (isType &&
            (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
          isIndex_default(key, length))
      )
    ) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
init_react_shim();
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keysIn.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeysIn.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeysIn.js
init_react_shim();
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default = nativeKeysIn;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeysIn.js
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object),
    result = [];
  for (var key in object) {
    if (
      !(key == 'constructor' && (isProto || !hasOwnProperty6.call(object, key)))
    ) {
      result.push(key);
    }
  }
  return result;
}
var baseKeysIn_default = baseKeysIn;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object)
    ? arrayLikeKeys_default(object, true)
    : baseKeysIn_default(object);
}
var keysIn_default = keysIn;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheClear.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Hash.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashClear.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeCreate.js
init_react_shim();
var nativeCreate = getNative_default(Object, 'create');
var nativeCreate_default = nativeCreate;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashDelete.js
init_react_shim();
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashGet.js
init_react_shim();
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty7.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashHas.js
init_react_shim();
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default
    ? data[key] !== void 0
    : hasOwnProperty8.call(data, key);
}
var hashHas_default = hashHas;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashSet.js
init_react_shim();
var HASH_UNDEFINED2 = '__lodash_hash_undefined__';
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] =
    nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype['delete'] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheClear.js
init_react_shim();
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheDelete.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assocIndexOf.js
init_react_shim();
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheGet.js
init_react_shim();
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheHas.js
init_react_shim();
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheSet.js
init_react_shim();
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype['delete'] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js
init_react_shim();
var Map = getNative_default(root_default, 'Map');
var Map_default = Map;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    hash: new Hash_default(),
    map: new (Map_default || ListCache_default)(),
    string: new Hash_default(),
  };
}
var mapCacheClear_default = mapCacheClear;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheDelete.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getMapData.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isKeyable.js
init_react_shim();
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' ||
    type == 'number' ||
    type == 'symbol' ||
    type == 'boolean'
    ? value !== '__proto__'
    : value === null;
}
var isKeyable_default = isKeyable;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}
var getMapData_default = getMapData;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheGet.js
init_react_shim();
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheHas.js
init_react_shim();
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheSet.js
init_react_shim();
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype['delete'] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isPlainObject.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getPrototype.js
init_react_shim();
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isPlainObject.js
var objectTag2 = '[object Object]';
var funcProto3 = Function.prototype;
var objectProto11 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty9.call(proto, 'constructor') && proto.constructor;
  return (
    typeof Ctor == 'function' &&
    Ctor instanceof Ctor &&
    funcToString3.call(Ctor) == objectCtorString
  );
}
var isPlainObject_default = isPlainObject;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Stack.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackClear.js
init_react_shim();
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackDelete.js
init_react_shim();
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackGet.js
init_react_shim();
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackHas.js
init_react_shim();
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackSet.js
init_react_shim();
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = (this.__data__ = new ListCache_default(entries));
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype['delete'] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneBuffer.js
init_react_shim();
var freeExports3 =
  typeof exports == 'object' && exports && !exports.nodeType && exports;
var freeModule3 =
  freeExports3 &&
  typeof module == 'object' &&
  module &&
  !module.nodeType &&
  module;
var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
var Buffer3 = moduleExports3 ? root_default.Buffer : void 0;
var allocUnsafe = Buffer3 ? Buffer3.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var cloneBuffer_default = cloneBuffer;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneArrayBuffer.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Uint8Array.js
init_react_shim();
var Uint8Array2 = root_default.Uint8Array;
var Uint8Array_default = Uint8Array2;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default = cloneArrayBuffer;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneTypedArray.js
init_react_shim();
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep
    ? cloneArrayBuffer_default(typedArray.buffer)
    : typedArray.buffer;
  return new typedArray.constructor(
    buffer,
    typedArray.byteOffset,
    typedArray.length
  );
}
var cloneTypedArray_default = cloneTypedArray;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneObject.js
init_react_shim();
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype_default(object)
    ? baseCreate_default(getPrototype_default(object))
    : {};
}
var initCloneObject_default = initCloneObject;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFor.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createBaseFor.js
init_react_shim();
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMerge.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignMergeValue.js
init_react_shim();
function assignMergeValue(object, key, value) {
  if (
    (value !== void 0 && !eq_default(object[key], value)) ||
    (value === void 0 && !(key in object))
  ) {
    baseAssignValue_default(object, key, value);
  }
}
var assignMergeValue_default = assignMergeValue;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMergeDeep.js
init_react_shim();

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLikeObject.js
init_react_shim();
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_safeGet.js
init_react_shim();
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }
  if (key == '__proto__') {
    return;
  }
  return object[key];
}
var safeGet_default = safeGet;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toPlainObject.js
init_react_shim();
function toPlainObject(value) {
  return copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default = toPlainObject;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMergeDeep.js
function baseMergeDeep(
  object,
  source,
  key,
  srcIndex,
  mergeFunc,
  customizer,
  stack
) {
  var objValue = safeGet_default(object, key),
    srcValue = safeGet_default(source, key),
    stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, key + '', object, source, stack)
    : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray_default(srcValue),
      isBuff = !isArr && isBuffer_default(srcValue),
      isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (
      isPlainObject_default(srcValue) ||
      isArguments_default(srcValue)
    ) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue_default(object, key, newValue);
}
var baseMergeDeep_default = baseMergeDeep;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseMerge.js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor_default(
    source,
    function (srcValue, key) {
      stack || (stack = new Stack_default());
      if (isObject_default(srcValue)) {
        baseMergeDeep_default(
          object,
          source,
          key,
          srcIndex,
          baseMerge,
          customizer,
          stack
        );
      } else {
        var newValue = customizer
          ? customizer(
              safeGet_default(object, key),
              srcValue,
              key + '',
              object,
              source,
              stack
            )
          : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue_default(object, key, newValue);
      }
    },
    keysIn_default
  );
}
var baseMerge_default = baseMerge;

// ../../common/temp/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js
init_react_shim();
var merge = createAssigner_default(function (object, source, srcIndex) {
  baseMerge_default(object, source, srcIndex);
});
var merge_default = merge;

// src/index.tsx
var import_react3 = __toModule(require('react'));
var import_theme_1 = __toModule(require_dist());
var Heading = ({ children, themeOverride, styleOverrides }) => {
  const containerTheme = (0, import_react2.useTheme)();
  const mergedTheme = (0, import_react3.useMemo)(
    () =>
      merge_default({}, import_theme_1.theme, containerTheme, themeOverride),
    [themeOverride, containerTheme]
  );
  return /* @__PURE__ */ (0, import_react.jsx)(
    import_react2.ThemeProvider,
    {
      theme: mergedTheme,
    },
    /* @__PURE__ */ (0, import_react.jsx)(
      'h1',
      {
        css: theme2 => [
          import_react2.css`
            color: ${theme2.colors.primary};
            border: 5px solid ${theme2.colors.accent};
          `,
          styleOverrides == null ? void 0 : styleOverrides.heading,
        ],
      },
      children
    )
  );
};
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
