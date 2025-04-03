import React, { Fragment } from "react";
import styles from "./About.module.css";
import cannon from "./Assets/cannon.jpg";
import FadeInOnScroll from "./UI/FadeInOnScroll";

const About = () => {
  return (
    <Fragment>
      <div className={styles.content}>
        <FadeInOnScroll>
          <img
            className={styles.cannon}
            src={cannon}
            alt="Me sitting on a cannon!"
          />
        </FadeInOnScroll>

        <div className={styles.about}>
          <FadeInOnScroll>
            <p className={styles.intro}>
              My name is Daniel Rosenthal and I live in NYC. I am 23 years
              old and I went to Wake Forest University in
              Winston-Salem, North Carolina. I am originally from just outside Philadelphia. I enjoy programming, basketball, film photography, running, golf, snowboarding, etc.!
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <p className={styles.intro2}>
              I majored in engineering with a concentration in computer and
              electrical engineering. I minored in computer science and
              mathematics. I have wide array of interests and I am always
              looking for a new project. 
              I am a fast-learner, creative problem solver, and I am
              very eager to learn new technologies. I believe there is no
              problem I cannot tackle and I am eager to dive into industry and
              get my feet wet.
            </p>
          </FadeInOnScroll>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
