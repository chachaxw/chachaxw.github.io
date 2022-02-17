import React, { useCallback, useEffect, useRef } from 'react';
import { useMeasure, useMouse } from 'react-use';
import gsap from 'gsap';

import { MathUtils, mergeRefs } from '../utils/utils';

import './cursor.scss';

let primitiveValues = { scale: 0 };
let renderedStyles = {
  tx: { previous: 0, current: 0, amt: 0.14 },
  ty: { previous: 0, current: 0, amt: 0.14 },
  radius: { previous: 24, current: 24, amt: 0.14 },
};

const Cursor = () => {
  const cursorRef = useRef();
  const cursorDotRef = useRef();
  const cursorInnerRef = useRef();
  const feDisplacementMap = useRef();
  const [ref, { width, height }] = useMeasure();
  const { docX, docY } = useMouse(cursorRef);

  const tl = useRef(
    gsap.timeline({
      paused: true,
      onStart: () => {
        if (cursorDotRef.current && cursorInnerRef.current) {
          cursorDotRef.current.style.transform = `scale(2)`;
          cursorInnerRef.current.style.filter = `url(#filter-1)`;
        }
      },
      onUpdate: () => {
        if (feDisplacementMap.current) {
          feDisplacementMap.current.scale.baseVal = primitiveValues.scale;
        }
      },
      onComplete: () => {
        if (cursorDotRef.current && cursorInnerRef.current) {
          cursorDotRef.current.style.transform = `scale(1)`;
          cursorInnerRef.current.style.filter = 'none';
        }
      },
    })
  );

  const render = useCallback(() => {
    renderedStyles['tx'].current = docX - width / 2;
    renderedStyles['ty'].current = docY - height / 2;

    for (const key in renderedStyles) {
      renderedStyles[key].previous = MathUtils.lerp(
        renderedStyles[key].previous,
        renderedStyles[key].current,
        renderedStyles[key].amt
      );
    }

    if (cursorRef.current && cursorInnerRef.current) {
      cursorRef.current.style.transform = `translateX(${renderedStyles.tx.previous}px) translateY(${renderedStyles.ty.previous}px)`;
      cursorInnerRef.current.setAttribute('r', renderedStyles.radius.previous);
    }

    requestAnimationFrame(render);
  }, [cursorRef, cursorInnerRef, docX, docY, width, height]);

  const onMouseEnter = useCallback(() => {
    renderedStyles.radius.current = 48;
    tl.current.restart();
  }, [tl]);

  const onMouseLeave = useCallback(() => {
    renderedStyles.radius.current = 24;
    tl.current.progress(1).kill();
  }, [tl]);

  const onMouseMove = useCallback(() => {
    renderedStyles.tx.previous = renderedStyles.tx.current = docX - width / 2;
    renderedStyles.ty.previous = renderedStyles.ty.current = docY - height / 2;

    gsap.to(cursorRef.current, { duration: 0.9, ease: 'Power3.easeOut', opacity: 1 });

    requestAnimationFrame(render);
  }, [render, cursorRef, docX, docY, width, height]);

  useEffect(() => {
    tl.current
      .to(primitiveValues, {
        duration: 0.1,
        ease: 'Expo.easeOut',
        startAt: { scale: 0 },
        scale: 30,
      })
      .to(primitiveValues, {
        duration: 0.6,
        ease: 'Power3.easeOut',
        scale: 0,
      });

    window.addEventListener('mousemove', onMouseMove);

    [...document.querySelectorAll('a')].forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove, onMouseEnter, onMouseLeave]);

  return (
    <svg className="cursor" width="96" height="96" viewBox="0 0 96 96" ref={mergeRefs([cursorRef, ref])}>
      <defs>
        <filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.15" numOctaves="3" result="warp" />
          <feDisplacementMap
            scale="0"
            in2="warp"
            in="SourceGraphic"
            xChannelSelector="R"
            yChannelSelector="G"
            ref={feDisplacementMap}
          />
        </filter>
      </defs>
      <circle className="cursor-dot" cx="48" cy="48" r="3" ref={cursorDotRef} />
      <circle className="cursor-inner" cx="48" cy="48" r="24" ref={cursorInnerRef} />
    </svg>
  );
};

export default Cursor;
