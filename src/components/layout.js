import React from 'react';

import Cursor from './cursor';
import Nav from './nav';
import Seo from './seo';

import './layout.scss';

// markup
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Seo />
      {children}
      <Cursor />
    </>
  );
};

export default Layout;
