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
              this is my website. I just recently graduated Wake Forest University and this website is a
              collection of my work and hobbies.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className={styles.intro2}>
              I am actively pursuing jobs as a{" "}
              <span className={styles.underline}>software engineer</span>.{" "}
              Please feel free to look around and
              contact me with any questions!
            </p>
          </FadeInOnScroll>
        </div>

      </div>
    </Fragment>
  );
};

export default Home;
