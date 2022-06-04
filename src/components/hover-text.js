import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useMeasure, useMouse } from 'react-use';
import charming from 'charming';
import PropTypes from 'prop-types';

import { MathUtils, mergeRefs } from '../utils/utils';

import './hover-text.scss';

let randLetters = [];
let lettersTranslations = [];
let lettersRotations = [];
let lastY = 0;
let totalRandomLetters = 4;

const HoverText = ({ delay, text }) => {
  const textRef = useRef();
  // store the timeline in a ref.
  const tl = useRef(gsap.timeline());
  const { docX, docY } = useMouse(textRef);
  const [ref, { left, top, height }] = useMeasure();
  const direction = lastY - docY > 0 ? 'up' : 'down';

  lastY = docY;

  useEffect(() => {
    charming(textRef.current);

    const lettersTotal = textRef.current.children.length;

    totalRandomLetters = totalRandomLetters <= lettersTotal ? totalRandomLetters : lettersTotal;
    // The amount that they move (y-axis)
    lettersTranslations = Array.from(
      {
        length: totalRandomLetters,
      },
      (_) => {
        const tr = MathUtils.getRandomFloat(0, 10);
        return [-tr, tr];
      }
    );
    lettersRotations = Array.from(
      {
        length: totalRandomLetters,
      },
      (_) => {
        const rr = MathUtils.getRandomFloat(0, 6);
        return [-rr, rr];
      }
    );

    tl.current
      .set(textRef.current.children, {
        scale: 0,
        opacity: 0,
        y: '100%',
      })
      .to(textRef.current.children, {
        delay,
        stagger: { each: 0.1 },
        duration: 0.3,
        scale: 1,
        opacity: 1,
        y: 0,
        ease: 'power4.out',
      });
  }, [delay]);

  const tilt = () => {
    // Document scrolls
    const docScrolls = {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    };
    // Mouse position relative to the main element (textRef)
    const relMousePos = {
      x: docX - left - docScrolls.left,
      y: docY - top - docScrolls.top,
    };

    for (const [index, letter] of randLetters.entries()) {
      gsap.to(letter, {
        duration: 3,
        ease: 'expo.out',
        y: MathUtils.lineEq(lettersTranslations[index][1], lettersTranslations[index][0], height, 0, relMousePos.y),
        rotation: MathUtils.lineEq(lettersRotations[index][1], lettersRotations[index][0], height, 0, relMousePos.y),
      });
    }
  };

  const resetTilt = () => {
    tl.current
      .to(randLetters, {
        duration: 0.2,
        ease: 'quad.out',
        opacity: 0,
        y: direction === 'up' ? '-=80%' : '+=80',
        rotation: direction === 'up' ? '-=10' : '+=10',
      })
      .to(randLetters, {
        stagger: 0.02,
        overwrite: 'auto',
        duration: MathUtils.getRandomFloat(0.5, 0.7),
        ease: 'elastic.easeOut(1, 0.4)',
        startAt: {
          opacity: 0,
          y: direction === 'up' ? '80%' : '-80%',
        },
        y: '0%',
        rotation: 0,
        opacity: 1,
      });
  };

  const handleMouseEnter = () => {
    const shuffled = gsap.utils.shuffle([...textRef.current.children]);
    randLetters = shuffled.slice(0, totalRandomLetters);
  };

  const handleMouseMove = (e) => requestAnimationFrame(() => tilt(e));

  return (
    <a
      onMouseLeave={resetTilt}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      ref={mergeRefs([ref, textRef])}
      className="hover-text charming-text absolute top-1/2 left-1/2 text-4xl lg:text-8xl 2xl:text-9xl font-bold -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
    >
      {text}
    </a>
  );
};

HoverText.defaultProps = {
  text: 'Hola Chacha',
};

HoverText.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
};

export default HoverText;
