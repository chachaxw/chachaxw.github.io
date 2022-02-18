import React from 'react';
import PropTypes from 'prop-types';

import '../styles.scss';

const GalleryItem = ({ title, tags, time, image, speed, description }) => {
  return (
    <figure className="gallery__item">
      <div className="gallery__item-img">
        <div className="gallery__item-imginner" data-scroll-speed="-0.8" style={{ backgroundImage: `url(${image})` }}>
          {description}
        </div>
      </div>
      <figcaption className="gallery__item-caption">
        <h2 className="gallery__item-title" data-scroll data-scroll-speed={speed}>
          {title}
        </h2>
        <span className="gallery__item-number">{time}</span>
        <p className="gallery__item-tags">
          {tags?.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      </figcaption>
    </figure>
  );
};

GalleryItem.defaultProps = {
  time: '01',
  speed: 1,
  tags: [],
  title: 'Hola Chacha',
};

GalleryItem.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  speed: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default GalleryItem;
