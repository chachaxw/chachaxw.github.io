import React, { useCallback, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Layout from '../../components/layout';
import { MathUtils } from '../../utils/utils';
import { galleryList } from '../../utils/constants';
import GalleryItem from './components/gallery-item';

import './styles.scss';

const { clamp, map } = MathUtils;

const CareersPage = () => {
  const titleRef = useRef();
  const scrollRef = useRef();

  const handleScroll = useCallback((obj) => {
    for (const key of Object.keys(obj.currentElements)) {
      if (obj.currentElements[key].el.classList.contains('gallery__item-imginner')) {
        let progress = obj.currentElements[key].progress;
        const saturateVal =
          progress < 0.5 ? clamp(map(progress, 0, 0.5, 0, 1), 0, 0.8) : clamp(map(progress, 0.5, 1, 1, 0), 0, 0.8);
        const brightnessVal =
          progress < 0.5 ? clamp(map(progress, 0, 0.5, 0, 1), 0, 0.8) : clamp(map(progress, 0.5, 1, 1, 0), 0, 0.8);
        obj.currentElements[key].el.style.filter = `saturate(${saturateVal}) brightness(${brightnessVal})`;
      }

      if (
        obj.currentElements[key].el.classList.contains('gallery__item-desc') ||
        obj.currentElements[key].el.classList.contains('gallery__item-title') ||
        obj.currentElements[key].el.classList.contains('gallery__item-link') ||
        obj.currentElements[key].el.classList.contains('gallery__item-number')
      ) {
        let progress = obj.currentElements[key].progress;
        const opacity =
          progress < 0.5 ? clamp(map(progress, 0, 0.5, 0, 1), 0.2, 1) : clamp(map(progress, 0.5, 1, 1, 0), 0.2, 1);
        obj.currentElements[key].el.style.opacity = opacity;
      }
    }
  }, []);

  useEffect(() => {
    // Initialize Locomotive Scroll (horizontal direction)
    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector('#scroll-container'),
      smooth: true,
      direction: 'horizontal',
    });

    scrollRef.current.on('scroll', handleScroll);
  }, [handleScroll]);

  const handleScrollTo = () => {
    const target = document.querySelector('#myCareers');
    scrollRef.current.scrollTo(target);
  };

  return (
    <Layout>
      <section className="section-wrap">
        <div id="scroll-container" className="scroll-container" data-scroll-container>
          <div className="scroll-content">
            <div className="career-title" id="myCareers" ref={titleRef}>
              <div className="flex flex-col items-center">
                <span data-scroll data-scroll-speed="2" className="line-make">
                  <span>My</span>
                </span>
                <span data-scroll data-scroll-speed="1" className="line-make">
                  <span>Careers</span>
                </span>
              </div>
              <div className="text-image-wrapper">
                <div className="text-image flex flex-col items-center">
                  <span data-scroll data-scroll-speed="2" className="line-make">
                    <span>My</span>
                  </span>
                  <span data-scroll data-scroll-speed="1" className="line-make">
                    <span>Careers</span>
                  </span>
                </div>
              </div>
            </div>
            {galleryList.map((item, index) => (
              <GalleryItem key={index} {...item} />
            ))}
            <a className="start-button flex justify-center" onClick={handleScrollTo}>
              <div className="flex flex-col">
                <span data-scroll data-scroll-speed="1">
                  Start
                </span>
                <span data-scroll data-scroll-speed="2">
                  There
                </span>
              </div>
              <div className="text-image flex flex-col">
                <span data-scroll data-scroll-speed="1">
                  Start
                </span>
                <span data-scroll data-scroll-speed="2">
                  There
                </span>
              </div>
            </a>
          </div>
        </div>
        <span className="absolute left-4 bottom-4 text-sm text-white z-10">
          Inspired by{' '}
          <a
            href="https://tympanus.net/codrops/2020/12/08/horizontal-smooth-scroll-layouts/"
            target="_blank"
            rel="noreferrer"
          >
            Horizontal Smooth Scroll Layouts
          </a>
        </span>
      </section>
    </Layout>
  );
};

export default CareersPage;
