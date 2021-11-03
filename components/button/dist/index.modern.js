import { ThemeProvider as r, css as o } from '@emotion/react';
import { theme as t } from 'theme-1';
import { jsx as e } from '@emotion/react/jsx-runtime';
var n,
  i = function (i) {
    var c = i.type;
    return e(r, {
      theme: t,
      children: e('button', {
        css: function (r) {
          return o(
            n ||
              ((t = ['\n          color: ', ';\n        ']),
              e || (e = t.slice(0)),
              (t.raw = e),
              (n = t)),
            r.colors.primary
          );
          var t, e;
        },
        type: void 0 === c ? 'button' : c,
        onClick: i.onClick,
        children: i.children,
      }),
    });
  };
export { i as Button };
//# sourceMappingURL=index.modern.js.map
