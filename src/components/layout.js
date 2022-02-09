import React, { useEffect, useState } from 'react';

import Cursor from './cursor';
import Nav from './nav';
import Footer from './footer';
import Seo from './seo';

import './layout.scss';

// markup
const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div className="loading" />;
  }

  return (
    <>
      <Nav />
      <Seo />
      {children}
      <Footer />
      <Cursor />
    </>
  );
};

export default Layout;
