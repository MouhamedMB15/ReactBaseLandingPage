

//Imports
import React from 'react';
import styles from './AboutStyles.module.css';
//react icons
import { FaUniversity, FaBook } from 'react-icons/fa';


//About Me
function AboutMe() {
  return (
    <section className={styles.container} id='about'>
      <h1 className={styles.heading}>About Me</h1>

      {/* <div className={styles.education}>
      <div className={styles.university}>
        <h2 className={styles.subheading}><FaUniversity /> Education</h2>
        <p><strong>University of Rochester</strong></p>
        <p style={{textAlign: 'left',}} className={styles.underHeading}>B.S Computer Science</p>
        <p style={{textAlign: 'left',}}><strong>Code With Mosh</strong></p>
        <p className={styles.underHeading}>Masters Certificate CSS & HTML</p>
        <p className={styles.underHeading}>Masters Certificate JavaScript</p>
      </div>

      <div className={styles.relevant}>
        <h3 className={styles.subheading}><FaBook /> Relevant Courses</h3>
        <ul>
          <li>Data Structures & Algorithms</li>
          <li>Discrete Mathematics</li>
          <li>Calculus I, II, & III</li>
          <li>Web Development</li>
          <li>Database Systems</li>
        </ul>
      </div>
       
        
      </div> */}
      
      <p className={styles.text}>
      A student in the computer science program at the University of Rochester who is extremely motivated and whose 
      commitment and sense of purpose are evident. My path is not just about getting a degree; it is also about never-endingly 
      seeking out new information and creative ideas. I intend to approach computer science with steadfast resolve and be motivated 
      by a strong love for all things engineering. My dedication extends beyond the classroom; I work closely with classmates 
      on difficult assignments and proactively look for chances to help them expand their horizons. My goal is to make a 
      significant contribution to the field of computer science in addition to academic excellence because I have a clear 
      understanding of how it may change the world.
      </p>
      
      <p className={styles.text}>
        Feel free to reach out to me if you want to connect or collaborate on a project!
      </p>

      
    </section>
  );
}

export default AboutMe;

