import React from 'react';
import './about.css';
import ME from '../../assets/shundru.jpg';
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              alt="me_image"
              // data-aos="fade-right"
              // data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {/* <FaAward className="about__icon" /> */}
              <h5>Open to Learn New Technologies</h5>
              {/* <small>3+ years experience</small> */}
            </article>
            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {/* <FiUsers className="about__icon" /> */}
              <h5>Passionate about Building Creative UI</h5>
            </article>

            <article
              className="about__card"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {/* <VscFolderLibrary className="about__icon" /> */}
              <h5>My projects are listed below!</h5>
              {/* <small>80+ Projects</small> */}
            </article>
          </div>
          <p>
          Hey, I am a Web Developer, with a degree in Mechanical Engineering. I'm intersted in Front End and Back End Development. I came in with zero programming knowledge and now I'm committed to this.

          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
