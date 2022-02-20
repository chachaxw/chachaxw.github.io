import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'gatsby';
import charming from 'charming';
import { BiArrowBack } from 'react-icons/bi';

import Layout from '../../components/layout';
import Transitions from '../../components/transitions';
import { MathUtils } from '../../utils/utils';

import './styles.scss';
import myself from '../../assets/images/myself_4.jpg';

const { getRandomFloat } = MathUtils;

const CareersPage = () => {
  const titleRef = useRef();
  const textRef = useRef();
  const contentRef = useRef();
  const sectionRef1 = useRef();
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
          y: (i, _) => (i % 2 === 0 ? getRandomFloat(-35, -15) : getRandomFloat(15, 35)),
          rotation: getRandomFloat(-20, 0),
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

  return (
    <Layout>
      <div className="w-full h-screen fixed retro-blend-darken">
        <img src={myself} alt="Chacha Chou" className="absolute right-0" style={{ width: '60%' }} />
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
              Proficient in emerging front-end frameworks such as <span className="font-bold">React</span>,{' '}
              <span className="font-bold">VueJS</span>, <span className="font-bold">Angular</span>,{' '}
              <span className="font-bold">ThreeJS</span>, and also focusing on{' '}
              <span className="font-bold">Flutter</span> and <span className="font-bold">React-Native</span> framework
              for building multi-platform applications.
            </p>
            <p>
              During my careers, I have developed some large PC-side and mobile-side responsive web project, pure{' '}
              <span className="font-bold">Flutter</span> cross platform mobile native app,{' '}
              <span className="font-bold">React-Native</span> hybrid app, and developed WeChat{' '}
              <span className="font-bold">Mini-program</span>, and written some{' '}
              <span className="font-bold">NodeJS</span>. Having large scale Front-end project development experience and
              front-end <span className="font-bold">architecture design</span> experience, over 4 years of front-end{' '}
              <span className="font-bold">Team Management</span> experience, and able to stand alone from{' '}
              <span className="font-bold">design to development</span>.
            </p>
          </div>
          <span className="block mt-14 w-10 bg-slate-900" style={{ minHeight: 2 }} />
        </div>
        <span className="absolute left-4 bottom-4 text-sm">
          Transition inspired by{' '}
          <a
            href="https://tympanus.net/codrops/2017/10/17/dynamic-shape-overlays-with-svg/"
            target="_blank"
            rel="noreferrer"
          >
            Dynamic Shape Overlays with SVG
          </a>
        </span>
      </section>
      <Transitions />
    </Layout>
  );
};

export default CareersPage;
