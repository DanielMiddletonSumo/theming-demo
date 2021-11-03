var e,
  r = require('@emotion/react'),
  t = require('theme-1'),
  n = require('@emotion/react/jsx-runtime');
exports.Button = function (o) {
  var i = o.type;
  return n.jsx(r.ThemeProvider, {
    theme: t.theme,
    children: n.jsx('button', {
      css: function (t) {
        return r.css(
          e ||
            ((n = ['\n          color: ', ';\n        ']),
            o || (o = n.slice(0)),
            (n.raw = o),
            (e = n)),
          t.colors.primary
        );
        var n, o;
      },
      type: void 0 === i ? 'button' : i,
      onClick: o.onClick,
      children: o.children,
    }),
  });
};
//# sourceMappingURL=index.js.map
