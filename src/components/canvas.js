import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { DataTexture, DoubleSide, RGBAFormat, FloatType, NearestFilter, Vector4 } from 'three';
import { useWindowSize } from 'react-use';
import { extend, Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import { vertex, fragment } from '../utils/shaders';
import { MathUtils } from '../utils/utils';
import img from '../assets/images/work.jpg';

// Tree-shaking
extend({ DataTexture, DoubleSide, RGBAFormat, FloatType, NearestFilter, Vector4 });

const settings = {
  grid: 607,
  mouse: 0.11,
  strength: 0.36,
  relaxation: 0.96,
};
let time = 0;
const frustumSize = 1;
const mouse = {
  x: 0,
  y: 0,
  vX: 0,
  vY: 0,
  prevX: 0,
  prevY: 0,
};

const Scene = () => {
  const shaderRef = useRef();
  const { camera } = useThree();
  const texture = useLoader(TextureLoader, img);
  const { width: winWidth, height: winHeight } = useWindowSize();
  const [dataTexture, setDataTexture] = useState(new DataTexture());

  texture.needsUpdate = true;

  const regenerateGrid = useCallback(() => {
    const width = settings.grid;
    const height = settings.grid;
    const size = width * height;
    const data = new Float32Array(4 * size);

    for (let i = 0; i < size; i++) {
      let r = Math.random() * 255 - 125;
      let g = Math.random() * 255 - 125;
      let b = Math.random() * 255 - 125;

      const stride = i * 4;

      data[stride] = r; // red, and also X
      data[stride + 1] = g; // green, and also Y
      data[stride + 2] = b; // blue
      data[stride + 3] = 1; // alpha
    }

    // used the buffer to create a DataTexture
    const texture = new DataTexture(data, width, height, RGBAFormat, FloatType);

    texture.magFilter = texture.minFilter = NearestFilter;

    setDataTexture(texture);

    if (shaderRef.current) {
      shaderRef.current.uniforms.uDataTexture.value = texture;
      shaderRef.current.uniforms.uDataTexture.value.needsUpdate = true;
    }
  }, [setDataTexture, shaderRef]);

  const onMouseMove = useCallback(
    (e) => {
      mouse.x = e.clientX / winWidth;
      mouse.y = e.clientY / winHeight;

      mouse.vX = mouse.x - mouse.prevX;
      mouse.vY = mouse.y - mouse.prevY;

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
    },
    [winWidth, winHeight]
  );

  const onResize = useCallback(() => {
    const imageAspect = 1836 / 2448;
    let a1;
    let a2;

    if (winHeight / winWidth > imageAspect) {
      a1 = (winWidth / winHeight) * imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = (winHeight / winWidth) * imageAspect;
    }

    if (shaderRef.current) {
      shaderRef.current.uniforms.resolution.value.x = winWidth;
      shaderRef.current.uniforms.resolution.value.y = winHeight;
      shaderRef.current.uniforms.resolution.value.z = a1;
      shaderRef.current.uniforms.resolution.value.w = a2;
    }

    // 如果窗口发生变化, 就更新相机投影, 并重新生成网格
    camera.updateProjectionMatrix();
    regenerateGrid();
  }, [winWidth, winHeight, regenerateGrid, camera]);

  const updateDataTexture = useCallback(() => {
    let data = dataTexture.image.data;

    for (let i = 0; i < data.length; i += 4) {
      data[i] *= settings.relaxation;
      data[i + 1] *= settings.relaxation;
    }

    let gridMouseX = settings.grid * mouse.x;
    let gridMouseY = settings.grid * (1 - mouse.y);
    let maxDist = settings.grid * settings.mouse;
    let aspect = winHeight / winWidth;

    for (let i = 0; i < settings.grid; i++) {
      for (let j = 0; j < settings.grid; j++) {
        let distance = (gridMouseX - i) ** 2 / aspect + (gridMouseY - j) ** 2;
        let maxDistSq = maxDist ** 2;

        if (distance < maxDistSq) {
          let index = 4 * (i + settings.grid * j);
          let power = maxDist / Math.sqrt(distance);

          power = MathUtils.clamp(power, 0, 10);

          data[index] += settings.strength * 100 * mouse.vX * power;
          data[index + 1] -= settings.strength * 100 * mouse.vY * power;
        }
      }
    }

    mouse.vX *= 0.9;
    mouse.vY *= 0.9;

    dataTexture.needsUpdate = true;
  }, [winWidth, winHeight, dataTexture]);

  useFrame(() => {
    time += 0.5;

    updateDataTexture();

    if (shaderRef.current) {
      shaderRef.current.uniforms.time.value = time;
    }
  });

  useEffect(() => {
    regenerateGrid();

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove, onResize, regenerateGrid]);

  console.log(dataTexture);

  return (
    <mesh autoUpdate>
      <planeGeometry />
      <shaderMaterial
        ref={shaderRef}
        side={DoubleSide}
        uniforms={{
          time: {
            value: 0,
          },
          resolution: {
            value: new Vector4(),
          },
          uTexture: {
            value: texture,
          },
          uDataTexture: {
            value: dataTexture,
          },
        }}
        vertexShader={vertex}
        fragmentShader={fragment}
        extensions={{ derivatives: '#extension GL_OES_standard_derivatives : enable' }}
      />
    </mesh>
  );
};

const CanvasBackground = () => {
  // 初始化一个正交投影相机，正交投影相机的视景体是一个长方体
  // OrthographicCamera的构造函数是这样的：OrthographicCamera( left, right, top, bottom, near, far )
  // const camera = new OrthographicCamera(
  //   frustumSize / -2,
  //   frustumSize / 2,
  //   frustumSize / 2,
  //   frustumSize / -2,
  //   -1000,
  //   1000
  // );

  // 设置相机观察方向，相机由 (0,0, 2) 的坐标望向 (0,0,0) 的坐标
  // camera.position.set(0, 0, 2);

  return (
    <Canvas fallback={null}>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 2]}
        left={frustumSize / -2}
        right={frustumSize / 2}
        top={frustumSize / 2}
        bottom={frustumSize / -2}
        near={-1000}
        far={1000}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </OrthographicCamera>
    </Canvas>
  );
};

export default CanvasBackground;
