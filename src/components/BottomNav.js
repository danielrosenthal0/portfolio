import React, {Fragment} from "react";
import styles from './BottomNav.module.css';
import { Link, useLocation } from 'react-router-dom';
const BottomNav = () => {
    const location = useLocation();
    return (
        <Fragment>
            <div className={styles.content}>
                <div className={styles.pages}>
                <Link 
                to="/" 
                className={location.pathname === '/' ? `${styles.link} ${styles.active}` : styles.link}>
                Home
                </Link>
                <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? `${styles.link} ${styles.active}` : styles.link}>
                Contact
                </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default BottomNav;