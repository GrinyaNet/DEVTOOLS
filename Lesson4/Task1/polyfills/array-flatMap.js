// file path: /polyfills/array-flatMap.js

// здесь никакие экспорты не нужны

console.log('polyfill for flatMap');

window.Array.prototype.flatMap =
  Array.prototype.flatMap ||
  function flatMap() {
    // ... implementation for older browsers
  };
