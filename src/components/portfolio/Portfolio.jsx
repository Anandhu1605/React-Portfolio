import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/hero-bcg.jpg';
import GYMDUMBELL from '../../assets/gymdumbell.jpg';
import TODOLIST from '../../assets/todolist.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      'This is a Ecommerce website for Electronic accesories build for studying about advanced React.js.This has a Stripe checkout session and its mobile responsive too ',
    github: 'https://github.com/Anandhu1605/E-Commerce.git',
    demo: 'https://e-commerce-liard-psi.vercel.app/',
  },
  {
    id: 1,
    image: GYMDUMBELL,
    title:
      'This is a Gym website made using React.js ,This website was made for my local Gym.,This was build Inorder to learn about CSS responsive design and animations ,also included some JavaScript.',
    github: 'https://github.com/Anandhu1605/Fit-Club.git',
    demo: 'https://fit-club-ten.vercel.app/',
  },
  {
    id: 1,
    image: TODOLIST,
    title:
      'This is a todolist app made with HTML,CSS and JavaScript. This website was made for understanding CSS with animations and also understanding fundamental JavaScript concepts .',
    github: 'https://github.com/Anandhu1605/To-Do-list.git',
    demo: 'https://to-do-list-chi-opal.vercel.app/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div
                className="portfolio__item-image"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  DEMO
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
