import React from 'react';
import { FaGithub, FaGlobeAmericas, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="pt-2 pb-4 bg-gray-300 border-gray-400 border-t-2 text-center font-medium flex flex-col gap-3">
      Created by Nikola G. Petrovski
      <div className="flex justify-center gap-12">
        <a
          href="https://github.com/nikolagp"
          target={'_blank'}
          rel="noreferrer"
        >
          <FaGithub className="hover:text-green-500 text-2xl" />
        </a>
        <a href="https://nikolagp.com" target={'_blank'} rel="noreferrer">
          <FaGlobeAmericas className="hover:text-green-500 text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/nikola-g-petrovski-b02584b1/"
          target={'_blank'}
          rel="noreferrer"
        >
          <FaLinkedin className="hover:text-green-500 text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
