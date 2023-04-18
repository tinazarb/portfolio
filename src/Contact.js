import React from 'react';
import styles from './styles/contact.module.scss';
import linkedinLogo from './assets/images/linkedin_logo.jpg';
import githubLogo from './assets/images/github_logo.png';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.content}>
        <h3>Find me here!</h3>
        <div className={styles.contactInfo}>
          <div className={styles.socialLinks}>
            <div>
              <ul>
                <li>
                  <h5>
                    <a
                      href="https://www.linkedin.com/in/tinazarb"
                      rel="noopener noreferrer"
                      target="_blank">
                      <img
                        className={styles.logo}
                        alt="LinkedIn-Logo"
                        src={linkedinLogo}
                      />{' '}
                      LinkedIn
                    </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a
                      href="https://github.com/tinazarb"
                      rel="noopener noreferrer"
                      target="_blank">
                      <img
                        className={styles.logo}
                        alt="Github-Logo"
                        src={githubLogo}
                      />{' '}
                      Github
                    </a>
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
