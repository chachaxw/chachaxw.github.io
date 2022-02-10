/**
 * 顶点着色器（VertexShader） 和 片段着色器（FragmentShader）
 *
 * GLSL语法:
 *   1. attribute: 只能在 vertex shader 中使用的变量，一般用于顶点数据。
 *      顶点数据需要利用 WebGL 中的 Buffer 定义，将 Buffer 地址传递到顶点着色器，
 *      并且往对应的 Buffer 中传递顶点的数据
 *   2. uniform: 常量，不能被 shader 修改。uniform 变量在 vertex 和 fragment 两只之间的生命方式完全一样，
 *      则它可以在 vertex 和 fragment 共享使用（相当于一个可被共享的全局变量）通常用来传递变换矩阵、光线参数等。
 *   3. varying: varying 变量是 vertex 和 fragment shader 之间做数据传递用的
 */

export const vertex = /* 顶点着色器 */ `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec2 pixels;
  float PI = 3.141592653589793238;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
  }`;

export const fragment = /* 片段着色器 */ `
  uniform float time;
  uniform float progress;
  uniform sampler2D uDataTexture;
  uniform sampler2D uTexture;
  
  uniform vec4 resolution;
  varying vec2 vUv;
  varying vec3 vPosition;
  float PI = 3.141592653589793238;
  
  void main() {
    vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
    vec4 color = texture2D(uTexture, newUV);
    vec4 offset = texture2D(uDataTexture, vUv);
    gl_FragColor = vec4(vUv, 0.0, 1.0);
    gl_FragColor = vec4(offset.r, 0.0, 0.0, 1.0);
    gl_FragColor = color;
    gl_FragColor = texture2D(uTexture, newUV - 0.02 * offset.rg);
    // gl_FragColor = offset;
  }`;

export const particles = /* 顶点着色器 */ `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform sampler2D texture1;
  float PI=3.141592653589793238;

  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 1000. * (1.0 / - mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }`;
