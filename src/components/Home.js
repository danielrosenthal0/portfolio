import React, {Fragment} from "react";
import styles from './Home.module.css';
import uzi from './Assets/uzi.png';

const Home = () => {
    return (
        <Fragment>
            <div className={styles.content}>
                <p className={styles.intro}>Hey! 👋 I'm Daniel and this is my website. I am a college student and this website is a collection of my work and hobbies.</p>
                 
                <img className={styles.uzi} src={uzi} alt="logo"/>
            </div>
        </Fragment>
    )
}

export default Home;