import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'gatsby';
import charming from 'charming';
import { BiArrowBack, BiTransfer } from 'react-icons/bi';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Layout from '../../components/layout';
import { MathUtils } from '../../utils/utils';

import './styles.scss';
import myself from '../../assets/images/myself_4.jpg';

gsap.registerPlugin(ScrollTrigger);

const CareersPage = () => {
  const titleRef = useRef();
  const textRef = useRef();
  const contentRef = useRef();
  const sectionRef1 = useRef();
  const sectionRef2 = useRef();
  const [visible, setVisible] = useState(false);
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    charming(titleRef.current);

    // Animate the content item title letters
    tl.current
      .set([...titleRef.current.children, ...textRef.current.children], {
        opacity: 0,
      })
      .to(titleRef.current.children, {
        delay: 0.75,
        stagger: { each: 0.08 },
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
        duration: 0.3,
        startAt: {
          y: '50%',
        },
        y: 0,
        opacity: 1,
      });
  }, [tl]);

  const handleClick = () => {
    const _visible = !visible;
    setVisible(_visible);

    if (_visible) {
      tl.current
        .to(sectionRef1.current, {
          x: '-100%',
          ease: 'power1.out',
        })
        .to(sectionRef2.current, {
          x: 0,
          ease: 'power2.in',
        });
    } else {
      tl.current
        .to(sectionRef2.current, {
          x: '100%',
          ease: 'power2.out',
        })
        .to(sectionRef1.current, {
          x: 0,
          ease: 'power1.in',
        });
    }
  };

  const handleDragStart = (e) => {
    console.log('Drag Start', e);
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragEnd = (e) => {
    console.log('Drag End', e);
  };

  return (
    <Layout>
      <div className="w-full h-screen fixed retro-blend-darken">
        <img src={myself} className="absolute right-0" style={{ width: '60%' }} />
      </div>
      <section className="absolute top-0 w-full h-screen flex text-slate-900" ref={sectionRef1}>
        <div className="w-1/2 h-full p-32 leading-relaxed flex flex-col justify-center absolute" ref={contentRef}>
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
              During this period, I have developed some large PC-side and mobile-side web app, pure{' '}
              <span className="font-bold">Flutter</span> mobile native app,{' '}
              <span className="font-bold">react-native</span> hybrid app, developed{' '}
              <span className="font-bold">WeChat mini-program</span>, and written{' '}
              <span className="font-bold">NodeJS</span>. Large Front-end project development experience and front-end{' '}
              <span className="font-bold">architecture design</span> experience, over 4 years of front-end{' '}
              <span className="font-bold">Team Management</span> experience, and able to stand alone from design to
              development.
            </p>
          </div>
          <span className="block mt-14 w-10 bg-slate-900" style={{ height: 2 }} />
        </div>
        <h3 className="absolute left-4 bottom-4 text-sm">
          Transition inspired by{' '}
          <a
            href="https://tympanus.net/codrops/2017/10/17/dynamic-shape-overlays-with-svg/"
            target="_blank"
            rel="noreferrer"
          >
            Dynamic Shape Overlays with SVG
          </a>
        </h3>
      </section>
      <section id="scroll-container" className="scroll-container" ref={sectionRef2}>
        <div className="scroll-content">
          <div className="career-title flex flex-col">
            <span>My</span>
            <span>Careers</span>
          </div>
        </div>
        <a
          draggable="true"
          onClick={handleClick}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className={`enter-button shadow-lg ${visible ? 'visible' : ''}`}
        >
          <BiTransfer />
        </a>
      </section>
    </Layout>
  );
};

export default CareersPage;
