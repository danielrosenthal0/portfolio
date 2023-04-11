import React, { Fragment } from "react";
import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import uzi from './Assets/uzi.png'

const NavBar = (props) => {
    const location = useLocation();
    
    return (
        <Fragment>
            <div className={styles.content}>
                <div className={styles.left}>
                    <img src={uzi} alt="logo" className={styles.uzi}></img>
                    <p className={styles.name}>Daniel Rosenthal</p>
                </div>
                <div className={styles.pages}>
                <Link 
                to="/" 
                className={location.pathname === '/' ? `${styles.link} ${styles.active}` : styles.link}>
                Home
                </Link>
                <Link 
                to="/about" 
                className={location.pathname === '/about' ? `${styles.link} ${styles.active}` : styles.link}>
                About
                </Link>
                <Link 
                to="/projects" 
                className={location.pathname === '/projects' ? `${styles.link} ${styles.active}` : styles.link}>
                Projects
                </Link>
                </div>
            </div>
        </Fragment>
    );
}

export default NavBar;