import React from 'react';
import styles from './styles/about.module.scss';
import aboutImg from './assets/images/me.jpg';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2>About Me</h2>

      <div className={styles.aboutRow}>
        <div className={styles.textContainer}>
          <div className={styles.description}>
            <p>
              I attended{' '}
              <a
                href="https://www.gracehopper.com/"
                target="_blank"
                rel="noreferrer">
                The Grace Hopper Coding Bootcamp
              </a>
              , which I attended with the help of The Edie Windsor Scholarship
              from{' '}
              <a
                href="https://lesbianswhotech.org"
                rel="noopener noreferrer"
                target="_blank">
                Lesbians Who Tech
              </a>
              .
            </p>
            <p>
              Previously, I worked as a digital technician with major fashion
              brands, such as Victoria’s Secret, Marc Jacobs, bareMinerals,
              Buxom Cosmetics, L'Oreal, UnderArmour, and international Vogues,
              using camera software on photo shoots and creating proper file
              structuring. Coding on the command line for Amazon Web Services in
              my photography work, I got a glimpse of the possibilities in the
              terminal. I wanted to dive deeper into what a computer is capable
              of, and started learning JavaScript!
            </p>
            <p>
              My love of creation, my attention to detail, and my passion for
              problem solving drive me to design and build functional and
              engaging apps. I'm looking to work on meaningful and
              accessibility-driven projects and make a difference as a software
              engineer.
            </p>
          </div>
          <div className={styles.skills}>
            <div className={styles.column}>
              <h6>Languages</h6>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h6>Front End</h6>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React Native</li>
                <li>Sass</li>
                <li>CSS Modules</li>
                <li>Styled Components</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h6>Back End</h6>
              <ul>
                <li>Express</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
                <li>Firestore</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.photo}>
          <img alt="Tina" src={aboutImg} />
        </div>
      </div>
    </section>
  );
};

export default About;
