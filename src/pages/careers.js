import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'gatsby';
import charming from 'charming';
import { BiArrowBack } from 'react-icons/bi';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Layout from '../components/layout';
import { MathUtils } from '../utils/utils';

import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const CareersPage = () => {
  const titleRef = useRef();
  const coverRef = useRef();
  const imgRef = useRef();
  const textRef = useRef();
  const contentRef = useRef();
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    charming(titleRef.current);

    // Animate the content item title letters
    tl.current
      .set([...titleRef.current.children, ...textRef.current.children], {
        opacity: 0,
      })
      .to(coverRef.current, {
        delay: 0.25,
        duration: 0.6,
        ease: 'power4.out',
        y: '-100%',
      })
      .to(titleRef.current.children, {
        stagger: { each: 0.1 },
        duration: 0.5,
        ease: 'expo.easeIn',
        startAt: {
          y: (i, _) => (i % 2 === 0 ? MathUtils.getRandomFloat(-35, -15) : MathUtils.getRandomFloat(15, 35)),
          rotation: MathUtils.getRandomFloat(-20, 0),
        },
        y: 0,
        rotation: 0,
        opacity: 1,
      })
      .to(textRef.current.children, {
        stagger: { each: 0.1 },
        ease: 'expo.easeIn',
        duration: 0.5,
        startAt: {
          y: '50%',
        },
        y: 0,
        opacity: 1,
      });
  }, [tl, titleRef]);

  return (
    <Layout>
      <section className="relative w-full h-screen flex bg-secondary text-slate-900">
        <div className="absolute w-full h-full z-10 bg-secondary" ref={coverRef} />
        <div className="self-img w-1/2" ref={imgRef} />
        <div className="w-1/2 h-full p-32 leading-relaxed flex flex-col justify-center" ref={contentRef}>
          <Link to="/" className="flex text-slate-900 items-center">
            <BiArrowBack className="text-lg" />
          </Link>
          <h1 className="charming-text text-5xl font-bold mt-8 relative" id="title" ref={titleRef}>
            Chacha Chou
          </h1>
          <div ref={textRef}>
            <p className="my-8">
              Hello, I'm Chacha Chou(周伟), a front-end developer with over 7 years experience, welcome to my Website!
            </p>
            <p className="mb-16">
              Proficient in emerging front-end technology frameworks such as <span className="font-bold">VueJs</span>,{' '}
              <span className="font-bold">React</span>, <span className="font-bold">Angular</span>,{' '}
              <span className="font-bold">ThreeJS</span> and <span className="font-bold">Flutter</span> etc.
            </p>
            <p>
              During this period, I have developed PC-side web applications, mobile-side WebApp, pure{' '}
              <span className="font-bold">Flutter</span> applications, native and Flutter{' '}
              <span className="font-bold">hybrid applications</span>, developed{' '}
              <span className="font-bold">WeChat mini-program</span>, and written{' '}
              <span className="font-bold">NodeJS</span>. Large Front-end project development experience and front-end{' '}
              <span className="font-bold">architecture design</span> experience, over 4 years of front-end{' '}
              <span className="font-bold">Team Management</span> experience, and able to stand alone from design to
              development.
            </p>
          </div>
          <span className="block mt-14 w-10 bg-slate-900" style={{ height: 2 }} />
        </div>
        <h3 className="absolute left-4 bottom-4 text-white">
          Inspired by{' '}
          <a href="https://tympanus.net/codrops/2019/05/16/animated-image-columns/" target="_blank" rel="noreferrer">
            Animated Image Columns
          </a>
        </h3>
      </section>
    </Layout>
  );
};

export default CareersPage;
