import React from 'react';

import Layout from '../components/layout';
import HoverText from '../components/hover-text';

import './styles.scss';

const IndexPage = () => {
  return (
    <Layout>
      <section className="w-full h-screen relative bg-slate-900">
        <HoverText delay={1} />
        <h2 className="absolute left-4 bottom-4 text-white text-sm">
          Background inspired by{' '}
          <a
            href="https://tympanus.net/codrops/2022/01/12/pixel-distortion-effect-with-three-js/"
            target="_blank"
            rel="noreferrer"
          >
            Pixel Distortion Effect with Three.js
          </a>
        </h2>
      </section>
    </Layout>
  );
};

export default IndexPage;
