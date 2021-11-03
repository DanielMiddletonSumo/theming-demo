'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Button = void 0;
function _jsxRuntime() {
  const data = require('@emotion/react/jsx-runtime');
  _jsxRuntime = function () {
    return data;
  };
  return data;
}
function _react() {
  const data = require('@emotion/react');
  _react = function () {
    return data;
  };
  return data;
}
function _theme1() {
  const data = require('theme-1');
  _theme1 = function () {
    return data;
  };
  return data;
}
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
  return /*#__PURE__*/ _jsxRuntime().jsx(_react().ThemeProvider, {
    theme: _theme1().theme,
    children: /*#__PURE__*/ _jsxRuntime().jsx('button', {
      css: function (theme) {
        return _react().css(_templateObject(), theme.colors.primary);
      },
      type: type,
      onClick: onClick,
      children: children,
    }),
  });
};
exports.Button = Button;

//# sourceMappingURL=index.js.map
