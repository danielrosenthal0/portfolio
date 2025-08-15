import React, { Fragment } from "react";
import styles from "./Home.module.css";
import uzi from "./Assets/uzi.png";
import FadeInOnScroll from "./UI/FadeInOnScroll";

const Home = () => {
  return (
    <Fragment>
      <div className={styles.content}>
        <FadeInOnScroll>
          <img className={styles.uzi} src={uzi} alt="logo" />
        </FadeInOnScroll>
        <div className={styles.home}>
          <FadeInOnScroll>
            <p className={styles.intro}>
              Hey! 👋 I'm <span className={styles.underline}>Daniel</span> and
              this is my website. I am a software engineer working at threshold.world.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className={styles.intro2}>This website is meant to showcase some of my side projects I'm able to work on in my spare time.</p>
          </FadeInOnScroll>
        </div>

      </div>
    </Fragment>
  );
};

export default Home;
