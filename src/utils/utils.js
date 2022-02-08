export const mergeRefs = (refs) => {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
};

export const MathUtils = {
  lineEq: (y2, y1, x2, x1, currentVal) => {
    const m = (y2 - y1) / (x2 - x1);
    const b = y1 - m * x1;
    return m * currentVal + b;
  },
  lerp: (a, b, n) => (1 - n) * a + n * b,
  getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2),
};

export const getMousePos = (ev) => {
  let posX = 0;
  let posY = 0;

  if (!ev) ev = window.event;

  if (ev.pageX || ev.pageY) {
    posX = ev.pageX;
    posY = ev.pageY;
  } else if (ev.clientX || ev.clientY) {
    posX = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posY = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: posX, y: posY };
};
