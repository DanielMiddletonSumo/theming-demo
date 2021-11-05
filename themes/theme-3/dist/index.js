var __defProp = Object.defineProperty;
var __markAsModule = target => __defProp(target, '__esModule', { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  theme: () => theme,
});
var theme = {
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
