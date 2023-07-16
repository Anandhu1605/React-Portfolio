import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Headersocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/anandhu-ajayakumar-0a49a8251/" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Anandhu1605" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default Headersocials;
