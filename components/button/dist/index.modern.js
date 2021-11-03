import { jsx as _jsx } from '@emotion/react/jsx-runtime';
import { css, ThemeProvider } from '@emotion/react';
import { theme as theme1 } from 'theme-1';
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
export var Button = function (param) {
  var children = param.children,
    _type = param.type,
    type = _type === void 0 ? 'button' : _type,
    onClick = param.onClick;
  return /*#__PURE__*/ _jsx(ThemeProvider, {
    theme: theme1,
    children: /*#__PURE__*/ _jsx('button', {
      css: function (theme) {
        return css(_templateObject(), theme.colors.primary);
      },
      type: type,
      onClick: onClick,
      children: children,
    }),
  });
};

//# sourceMappingURL=index.modern.js.map
