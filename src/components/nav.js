import React from 'react';
import { Link } from 'gatsby';

import './nav.scss';
import Logo from './logo';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== 'undefined';

const Nav = () => {
  const { pathname } = isBrowser ? window.location : { pathname: '/' };

  return (
    <nav className="fixed w-full flex justify-between items-center text-sm px-8 py-2 z-50">
      <Logo />
      <div className="link-list">
        <Link to="/portfolio" className={`link--kale mx-4 text-sm ${pathname.includes('/portfolio') ? 'active' : ''}`}>
          Portfolio
        </Link>
        <Link to="/careers" className={`link--kale mx-4 text-sm ${pathname.includes('/careers') ? 'active' : ''}`}>
          Careers
        </Link>
        <Link to="/contact" className={`link--kale mx-4 text-sm ${pathname.includes('/contact') ? 'active' : ''}`}>
          Contact
        </Link>
        <a href="https://github.com/chachaxw" target="_blank" className="link--kale ml-4 text-sm" rel="noreferrer">
          Github
        </a>
      </div>
    </nav>
  );
};

export default Nav;
