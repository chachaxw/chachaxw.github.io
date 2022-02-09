import React from 'react';
import { FaTwitter, FaGithub, FaZhihu, FaStackOverflow } from 'react-icons/fa';

import './footer.scss';

// markup
const Footer = () => {
  return (
    <footer
      className="w-full flex flex-col justify-center items-center text-sm"
      style={{ background: 'linear-gradient(315deg, #ffffff, #d7e1ec)' }}
    >
      <div className="icon-wrapper flex py-8">
        <a href="https://www.zhihu.com/people/chachaxw" target="_blank" rel="noreferrer">
          <div className="icon zhihu relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mr-8">
            <div className="tooltip">知乎</div>
            <FaZhihu className="text-2xl" />
          </div>
        </a>
        <a href="https://twitter.com/ChachaChou18" target="_blank" rel="noreferrer">
          <div className="icon twitter relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mr-8">
            <div className="tooltip">Twitter</div>
            <FaTwitter className="text-xl" />
          </div>
        </a>
        <a href="https://github.com/chachaxw" target="_blank" rel="noreferrer">
          <div className="icon github relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg mr-8">
            <div className="tooltip">Github</div>
            <FaGithub className="text-xl" />
          </div>
        </a>
        <a href="https://stackoverflow.com/users/6071623/chacha" target="_blank" rel="noreferrer">
          <div className="icon stack relative flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg">
            <div className="tooltip text-xs">Stack Overflow</div>
            <FaStackOverflow className="text-xl" />
          </div>
        </a>
      </div>
      <div className="w-full p-4 border-t text-center">Designed & Developed by Chacha</div>
    </footer>
  );
};

export default Footer;
