import React from 'react';
import PropTypes from 'prop-types';

import Cursor from './cursor';
import Nav from './nav';
import Seo from './seo';
import Transitions from './transitions';

import './layout.scss';

const Layout = ({ title, description, children }) => {
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
