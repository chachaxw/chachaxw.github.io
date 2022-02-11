import React, { useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'gatsby';
import { BiArrowBack } from 'react-icons/bi';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Layout from '../components/layout';

import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const CareersPage = () => {
  const tl = useRef(gsap.timeline());

  return (
    <Layout>
      <section className="w-full h-screen flex bg-secondary text-slate-900">
        <div className="self-img w-1/2"></div>
        <div className="w-1/2 h-full p-32 leading-relaxed flex flex-col justify-center">
          <Link to="/" className="flex text-slate-900 items-center">
            <BiArrowBack className="text-lg" />
          </Link>
          <h1 className="text-5xl font-bold mt-8">
            Chacha Chou <span className="text-2xl">(周伟)</span>
          </h1>
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
          <span className="block mt-14 w-10 bg-slate-900" style={{ height: 2 }} />
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;
