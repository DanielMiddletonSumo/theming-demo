!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(
        exports,
        require('@emotion/react'),
        require('theme-1'),
        require('@emotion/react/jsx-runtime')
      )
    : 'function' == typeof define && define.amd
    ? define(
        ['exports', '@emotion/react', 'theme-1', '@emotion/react/jsx-runtime'],
        t
      )
    : t(((e || self).button = {}), e.react, e.theme1, e.jsxRuntime);
})(this, function (e, t, n, o) {
  var r;
  e.Button = function (e) {
    var i = e.type;
    return o.jsx(t.ThemeProvider, {
      theme: n.theme,
      children: o.jsx('button', {
        css: function (e) {
          return t.css(
            r ||
              ((n = ['\n          color: ', ';\n        ']),
              o || (o = n.slice(0)),
              (n.raw = o),
              (r = n)),
            e.colors.primary
          );
          var n, o;
        },
        type: void 0 === i ? 'button' : i,
        onClick: e.onClick,
        children: e.children,
      }),
    });
  };
});
//# sourceMappingURL=index.umd.js.map
