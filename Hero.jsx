// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import styles from './hero.module.css';
import { getImageUrl } from '../../utils';
import Typed from 'typed.js';

export const Hero = () => {
    useEffect(() => {
        const options = {
            strings: ["Frontend Developer", "Web Designer", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        };
        const typed = new Typed('.txt-rotate', options);

        return () => {
            typed.destroy();
        };
    }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{`Hi! I'm Pritam`}{''} <span className="txt-rotate"></span></h1>
        <p className={styles.description}>
          I am a full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you would like to learn more!
        </p>
        <a href="mailto:pritamkoyari@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
         src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
