import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Layout from '../../components/layout';

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  return <Layout></Layout>;
};

export default PortfolioPage;
