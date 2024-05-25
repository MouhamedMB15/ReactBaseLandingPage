

//Imports
import React from 'react';
import styles from './AboutStyles.module.css';


//About Me
function AboutMe() {
  return (
    <section className={styles.container} id='about'>
      <h1 className={styles.heading}>About Me</h1>
      <p>
        Hello! My name is Mouhamed Mbengue. I'm a Upcoming Junior with a passion for Full Stack Engineering. I enjoy working on projects related to Computer Science, and I'm always eager to learn and explore new technologies.
        I'm currently studying Computer Science at the University of Rochester and I have taken relevant course such as all of Calculus, Linear Algebra, Data Structure and Algorithms, etc.
      </p>
      <p>
        Feel free to reach out to me if you want to connect or collaborate on a project!
      </p>
    </section>
  );
}

export default AboutMe;
