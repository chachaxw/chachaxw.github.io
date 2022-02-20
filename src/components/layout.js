import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Cursor from './cursor';
import Nav from './nav';
import Seo from './seo';
import Transitions from './transitions';

import './layout.scss';

const Layout = ({ title, description, children }) => {
  useEffect(() => {
    console.log(
      '%c  Developed and Designed by Chacha Chou — https://github.com/chachaxw  ',
      'background-color: #ff0844; color: #f9d63d; font-size:10px; padding: 6px; border-radius:4px;'
    );
  }, []);

  return (
    <>
      <Nav />
      <Seo title={title} description={description} />
      {children}
      <Transitions />
      <Cursor />
    </>
  );
};

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default Layout;
