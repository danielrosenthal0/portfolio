import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './FadeInOnScroll.module.css'

const FadeInOnScroll = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // only trigger once
    rootMargin: '-50px 0px', // adjust to your needs
  });

  return (
    <div ref={ref} className={`${styles["fade-in-section"]} ${inView ? styles["is-visible"] : ""}`}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;
