(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'exports',
      '@emotion/react/jsx-runtime',
      '@emotion/react',
      'theme-1',
    ], factory);
  } else if (typeof exports !== 'undefined') {
    factory(
      exports,
      require('@emotion/react/jsx-runtime'),
      require('@emotion/react'),
      require('theme-1')
    );
  } else {
    var mod = {
      exports: {},
    };
    factory(mod.exports, global.jsxRuntime, global.react, global.theme1);
    global.index = mod.exports;
  }
})(this, function (_exports, _jsxRuntime, _react, _theme1) {
  'use strict';
  Object.defineProperty(_exports, '__esModule', {
    value: true,
  });
  _exports.Button = void 0;
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw),
        },
      })
    );
  }
  function _templateObject() {
    var data = _taggedTemplateLiteral(['\n          color: ', ';\n        ']);
    _templateObject = function _templateObject() {
      return data;
    };
    return data;
  }
  var Button = function (param) {
    var children = param.children,
      _type = param.type,
      type = _type === void 0 ? 'button' : _type,
      onClick = param.onClick;
    return /*#__PURE__*/ (0, _jsxRuntime).jsx(_react.ThemeProvider, {
      theme: _theme1.theme,
      children: /*#__PURE__*/ (0, _jsxRuntime).jsx('button', {
        css: function (theme) {
          return (0, _react).css(_templateObject(), theme.colors.primary);
        },
        type: type,
        onClick: onClick,
        children: children,
      }),
    });
  };
  _exports.Button = Button;
});

//# sourceMappingURL=index.umd.js.map
