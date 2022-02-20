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
  // 从区间[a, b] 到 [c, d] 之间映射 x
  map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
  lerp: (a, b, n) => (1 - n) * a + n * b, // 线性插值
  getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2), // 随机浮点数

  // clamp() 函数的作用是把一个值限制在一个上限和下限之间，当这个值超过最小值和最大值的范围时，
  // 在最小值和最大值之间选择一个值使用。 它接收三个参数：最小值、首选值、最大值。
  clamp: (number, min, max) => Math.max(min, Math.min(number, max)),
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
