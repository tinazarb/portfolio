import React from 'react';
import Navbar from './Navbar';
import styles from './styles/header.module.scss';
import background from './assets/images/background.png';

const backgroundStyle = {
  backgroundImage: `url(${background})`,
};

const Header = () => {
  return (
    <header id="header" className={styles.header} style={backgroundStyle}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.text}>
        <h2>Hi, I'm Tina!</h2>
        <h2>A full stack software engineer</h2>
        <h2>based in New York City</h2>
      </div>
    </header>
  );
};

export default Header;
