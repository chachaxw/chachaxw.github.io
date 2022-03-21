import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Layout from '../../components/layout';

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  return (
    <Layout>
      <section className="h-screen flex justify-center items-center">
        <h1 className="text-white text-5xl">Under Development</h1>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
