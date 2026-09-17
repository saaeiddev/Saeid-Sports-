(() => {
  const nativeSetTimeout = window.setTimeout.bind(window);
  const fnToString = Function.prototype.toString;

  window.setTimeout = function (callback, delay, ...args) {
    try {
      if (
        typeof callback === 'function' &&
        fnToString.call(callback).includes('preloadRemainingModels')
      ) {
        console.info('[SAEID SPORTS] Bulk 3D preload skipped for WebGL stability. Models remain available on demand.');
        return nativeSetTimeout(() => {}, 0);
      }
    } catch (_) {}

    return nativeSetTimeout(callback, delay, ...args);
  };

  window.addEventListener('pageshow', () => {
    const canvas = document.getElementById('scene');
    if (!canvas || canvas.dataset.stabilityGuard) return;
    canvas.dataset.stabilityGuard = '1';
    canvas.addEventListener('webglcontextlost', () => {
      console.warn('[SAEID SPORTS] Main WebGL context lost; built-in recovery will handle restoration.');
    }, { passive: true });
  });
})();
