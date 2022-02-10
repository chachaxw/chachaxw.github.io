import React, { Suspense } from 'react';

import Layout from '../components/layout';
import CanvasBackground from '../components/canvas';
import HoverText from '../components/hover-text';

import './styles.scss';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section className="w-full h-screen relative bg-slate-900">
        <Suspense fallback={null}>
          <CanvasBackground />
        </Suspense>
        <HoverText />
      </section>
    </Layout>
  );
};

export default IndexPage;
