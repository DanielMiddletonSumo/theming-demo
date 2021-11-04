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

// build/react-shim.mjs
import { jsx } from '@emotion/react';
var init_react_shim = __esm({
  'build/react-shim.mjs'() {},
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
var import_theme_1 = __toModule(require_dist());
import { css, ThemeProvider } from '@emotion/react';
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
