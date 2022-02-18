import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import charming from 'charming';
import { FaTwitter, FaGithub, FaZhihu, FaStackOverflow } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

import Layout from '../../components/layout';
import { MathUtils } from '../../utils/utils';

import './styles.scss';
import myself from '../../assets/images/bg.jpeg';

const ContactPage = () => {
  const iconRef = useRef();
  const textRef = useRef();
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    charming(textRef.current);

    // Animate the content item title letters
    tl.current
      .set([...iconRef.current.children, ...textRef.current.children], {
        opacity: 0,
      })
      .to(iconRef.current.children, {
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
        stagger: { each: 0.08 },
        ease: 'expo.easeIn',
        duration: 0.5,
        startAt: {
          y: '50%',
        },
        y: 0,
        opacity: 1,
      });
  }, [tl]);

  return (
    <Layout title="Contact Me(chachazw@gmail.com) - Chacha Chou - Front-end developer">
      <section className="w-full h-screen relative">
        <div className="w-full h-screen retro-blend-darken opacity-50">
          <img src={myself} alt="Chacha Chou" />
        </div>
        <div className="w-full h-screen flex flex-col justify-center items-center text-sm fixed top-0">
          <h2 className="typing animate whitespace-nowrap text-primary mb-8 py-1 z-10" />
          <div className="icon-wrapper flex py-8" ref={iconRef}>
            <a href="https://www.zhihu.com/people/chachaxw" target="_blank" rel="noreferrer">
              <div className="icon zhihu relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5">
                <div className="tooltip">知乎</div>
                <FaZhihu className="text-2xl" />
              </div>
            </a>
            <a href="https://twitter.com/ChachaChou18" target="_blank" rel="noreferrer">
              <div className="icon twitter relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5">
                <div className="tooltip">Twitter</div>
                <FaTwitter className="text-xl" />
              </div>
            </a>
            <a href="https://github.com/chachaxw" target="_blank" rel="noreferrer">
              <div className="icon github relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5">
                <div className="tooltip">Github</div>
                <FaGithub className="text-xl" />
              </div>
            </a>
            <a href="https://stackoverflow.com/users/6071623/chacha" target="_blank" rel="noreferrer">
              <div className="icon stack relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5">
                <div className="tooltip">Stack Overflow</div>
                <FaStackOverflow className="text-xl" />
              </div>
            </a>
            <a href="mailto:chachazw@gmail.com" rel="noreferrer">
              <div className="icon email relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mx-5">
                <div className="tooltip">Send Mail</div>
                <HiMail className="text-xl" />
              </div>
            </a>
          </div>
          <div className="w-full charming-text p-4 text-center text-white" ref={textRef}>
            Designed & Developed by Chacha
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
