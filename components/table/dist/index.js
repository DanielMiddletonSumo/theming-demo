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
  '../../themes/theme-1/dist/index.js'(exports) {
    init_react_shim();
    var __defProp2 = Object.defineProperty;
    var __markAsModule2 = target =>
      __defProp2(target, '__esModule', { value: true });
    var __export2 = (target, all) => {
      __markAsModule2(target);
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    __export2(exports, {
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
  Table: () => Table,
});
init_react_shim();
var import_react3 = __toModule(require('@emotion/react'));
var import_theme_1 = __toModule(require_dist());

// src/TableHeader.tsx
init_react_shim();
var import_react2 = __toModule(require('@emotion/react'));
var TableHeader = ({ children }) => {
  return /* @__PURE__ */ (0, import_react.jsx)(
    'th',
    {
      css: theme2 => import_react2.css`
        color: ${theme2.colors.secondary};
      `,
    },
    children
  );
};

// src/TableRow.tsx
init_react_shim();
var TableRow = ({ row }) => {
  return /* @__PURE__ */ (0, import_react.jsx)(
    'tr',
    null,
    row.map(field =>
      /* @__PURE__ */ (0, import_react.jsx)(
        'td',
        {
          key: field,
        },
        field
      )
    )
  );
};

// src/index.tsx
var Table = ({ data: { headers, rows } }) => {
  return /* @__PURE__ */ (0, import_react.jsx)(
    import_react3.ThemeProvider,
    {
      theme: import_theme_1.theme,
    },
    /* @__PURE__ */ (0, import_react.jsx)(
      'table',
      null,
      !!(headers == null ? void 0 : headers.length) &&
        /* @__PURE__ */ (0, import_react.jsx)(
          'thead',
          null,
          /* @__PURE__ */ (0, import_react.jsx)(
            'tr',
            null,
            headers.map(header =>
              /* @__PURE__ */ (0, import_react.jsx)(
                TableHeader,
                {
                  key: header,
                },
                header
              )
            )
          )
        ),
      /* @__PURE__ */ (0, import_react.jsx)(
        'tbody',
        null,
        rows.map(row =>
          /* @__PURE__ */ (0, import_react.jsx)(TableRow, {
            key: row.join(''),
            row,
          })
        )
      )
    )
  );
};
