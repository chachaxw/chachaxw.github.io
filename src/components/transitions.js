import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { ease } from '../utils/ease';
import './transitions.scss';

const numPoints = 10;
const delayPointsArray = [];
const delayPointsMax = 300;
const delayPerPath = 250;
const timeStart = Date.now();

for (var i = 0; i < numPoints; i++) {
  delayPointsArray[i] = Math.random() * delayPointsMax;
}

const Transitions = ({ isOpened, direction, duration, onUpdate }) => {
  const svgRef = useRef();
  const [paths, setPaths] = useState([]);

  const updatePath = useCallback(
    (time) => {
      const points = [];

      for (let i = 0; i < numPoints; i++) {
        points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - delayPointsArray[i], 0) / duration, 1))) * 100;
      }

      let str = '';

      if (direction === 'vertical') {
        str += isOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
      } else {
        str += isOpened ? `M 0 0 H ${points[0]}` : `M ${points[0]} 0`;
      }

      for (let i = 0; i < numPoints - 1; i++) {
        const p = ((i + 1) / (numPoints - 1)) * 100;
        const cp = p - ((1 / (numPoints - 1)) * 100) / 2;

        if (direction === 'vertical') {
          str += ` C ${cp} ${points[i]} ${cp} ${points[i + 1]}  ${p} ${points[i + 1]}`;
        } else {
          str += ` C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${points[i + 1]} ${p}`;
        }
      }

      if (direction === 'vertical') {
        str += isOpened ? `V 100 H 0` : `V 0 H 0`;
      } else {
        str += isOpened ? `H 100 V 0` : `H 0 V 0`;
      }

      return str;
    },
    [direction, isOpened]
  );

  const render = useCallback(() => {
    if (isOpened) {
      for (let i = 0; i < paths.length; i++) {
        paths[i].setAttribute('d', updatePath(Date.now() - (timeStart + delayPerPath * i)));
      }
    } else {
      for (let i = 0; i < paths.length; i++) {
        paths[i].setAttribute('d', updatePath(Date.now() - (timeStart + delayPerPath * (paths.length - i - 1))));
      }
    }
  }, [updatePath, paths]);

  const renderLoop = useCallback(() => {
    if (!paths.length) {
      return;
    }

    render();

    if (Date.now() - timeStart < duration + delayPerPath * (paths.length - 1) + delayPointsMax) {
      requestAnimationFrame(renderLoop);
    } else {
      // console.log('end render loop');
      if (onUpdate) {
        onUpdate(false);
      }
    }
  }, [render, onUpdate, duration, paths]);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll('path');

    setPaths(paths);

    if (onUpdate) {
      onUpdate(true);
    }
  }, [setPaths, onUpdate]);

  useEffect(() => {
    renderLoop();
  }, [renderLoop]);

  return (
    <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none" ref={svgRef}>
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00c99b" />
          <stop offset="100%" stopColor="#ff0ea1" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd392" />
          <stop offset="100%" stopColor="#ff3898" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#110046" />
          <stop offset="100%" stopColor="#32004a" />
        </linearGradient>
      </defs>
      <path className="shape-overlays__path"></path>
      <path className="shape-overlays__path"></path>
      <path className="shape-overlays__path"></path>
    </svg>
  );
};

Transitions.defaultProps = {
  isOpened: false,
  duration: 900,
  direction: 'vertical',
};

Transitions.propTypes = {
  isOpened: PropTypes.bool,
  duration: PropTypes.number,
  onUpdate: PropTypes.func,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default Transitions;
