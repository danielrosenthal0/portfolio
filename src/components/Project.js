import React, { Fragment } from "react";
import styles from "./Project.module.css";
import FadeInOnScroll from "./UI/FadeInOnScroll"
const Project = (props) => {
  return (
    <Fragment>
        <FadeInOnScroll>
        <div className={styles.content}>
        <h2 className={styles.title}>{props.title}</h2>
        <ul className={styles.description}>
          {props.description.map((bullet, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: bullet }}>
              
            </li>
          ))}
        </ul>
        {Array.isArray(props.images) &&  (<div className={styles.images}>
          {props.images.map((image, index) => (
            <img key={index} src={image} alt={props.title} />
          ))}
        </div>)}

        {props.video && (
          <video controls className={styles.video}>
            <source alt={props.title} src={props.video}></source>
          </video>
        )}
      </div>
        </FadeInOnScroll>
      
    </Fragment>
  );
};

export default Project;
