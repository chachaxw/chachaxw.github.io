import React from 'react';
import { Link } from 'gatsby';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== 'undefined';

const Nav = () => {
  const { pathname } = isBrowser ? window.location : { pathname: '/' };

  return (
    <nav className="fixed w-full flex justify-between items-center text-sm px-8 py-2 z-50">
      <Link to="/" className="logo"></Link>
      <div>
        <Link to="/portfolio" className={`px-4 text-sm ${pathname.includes('/portfolio') ? 'text-white' : ''}`}>
          Portfolio
        </Link>
        <Link to="/careers" className={`px-4 text-sm ${pathname.includes('/careers') ? 'text-white' : ''}`}>
          Careers
        </Link>
        <Link to="/contact" className={`px-4 text-sm ${pathname.includes('/contact') ? 'text-white' : ''}`}>
          Contact
        </Link>
        <a
          href="https://github.com/chachaxw/chachaxw.github.io"
          target="_blank"
          className="pl-4 text-sm"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </nav>
  );
};

export default Nav;
