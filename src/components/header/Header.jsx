import React from 'react';
import './header.css';
import 'boxicons';
// import CTA from './CTA';
import CV from '../../assets/Resume-Anandhu.pdf';
import ME from '../../assets/me-coverdone-half.png';
// import Headersocials from './Headersocials';
import { Typewriter } from 'react-simple-typewriter';
import ME1 from '../../assets/shundru.jpg'

const Header = () => {
  return (
    <header id="home">
      <div className="home-content">
        <h3>Hey, It's me.</h3>
        <h1>Anandhu.</h1>
        <h3>
            I am a{' '}
          <span style={{ color: '#0ef', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                'FullStack Developer.',
                'React.js Developer.',
                
                'FullStack Developer.',
                'React.js Developer.',
                
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <p>
        I am a Web Developer, with a degree in Mechanical Engineering. I'm intersted in Front End and Back End Development. I came in with zero programming knowledge and now I'm committed to this.
        </p>
        <div class="social-media">
          <a
            href="https://github.com/Anandhu1605"
            style={{ '--i': 1 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anandhu-ajayakumar-0a49a8251/"
            style={{ '--i': 4 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.intagram.com/anandhu_kk./"
            style={{ '--i': 3 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          {/* <a
            href="https://twitter.com/Gautam_033"
            style={{ '--i': 2 }}
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a> */}
        </div>
        <a href={CV} class="download-btn" download>
          My CV
        </a>
        <a href="#contact" class="download-btn move__contact">
          Chat?
        </a>
        {/* <div class="scroll__down">
          <a href="/">Scroll Down</a>
          <a href="/" class="down-arrow">
            <i class="bx bx-chevron-down"></i>
          </a>
        </div> */}
      </div>

      <div class="home-img">
        <img src={ME1} alt="" />
      </div>
    </header>
  );
};

export default Header;
