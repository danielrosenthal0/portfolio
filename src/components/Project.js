import React, {Fragment} from "react";
import styles from './Project.module.css';
const Project = (props) => {
    return (
        <Fragment>
            <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>
        </Fragment>
    )
}

export default Project;