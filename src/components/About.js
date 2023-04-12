import React, {Fragment} from "react";
import styles from './About.module.css';
import cannon from './Assets/cannon.jpg';

const About = () => {
    return (
        <Fragment>
            <div className={styles.content}>
                <img className={styles.cannon} src={cannon} alt="Me sitting on a cannon!"  />
                <div className={styles.about}>
                    <p className={styles.intro}>My name is Daniel Rosenthal and I am from Yardley, Pennsylvania
                         - 30 minutes from Philadelphia and an hour from NYC. I am 21 years old and
                          I am a senior at Wake Forest University in Winston-Salem, North Carolina.
                     </p>
                    <p className={styles.intro2}>I am majoring in engineering with a concentration in computer and electrical engineering.
                      I am also minoring in computer science and mathematics. I have wide array of interests
                    and I am always looking for a new project. I am looking for full-time roles in multiple areas,
                     including full-stack development and data analytics.</p>
    
                </div>
            </div>
        </Fragment>
    )
}

export default About;