import styles from './AboutStyles.module.css';

function AboutMe() {
  return (
    <section className={`${styles.container} section-shell`} id="about">
      <h1 className="sectionTitle">About</h1>
      <div className={styles.aboutDetailsContainer}>
        <div className={styles.detailsContainer}>
          <p className={styles.metric}>Backend Goal</p>
          <h3>Aspiring Backend Developer</h3>
          <p>Building reliable APIs, integrations, and data workflows with a strong focus on scalability and quality.</p>
        </div>
        <div className={styles.detailsContainer}>
          <p className={styles.metric}>B.S. CS</p>
          <h3>Education</h3>
          <p>University of Rochester, Computer Science (Bachelor of Science).</p>
        </div>
      </div>

      <p className={styles.text}>
        I am a motivated computer science student with hands-on experience in
        software engineering internships, operational workflows, and
        customer-centered problem solving. I enjoy working on technical systems
        that have measurable impact.
      </p>

      <p className={styles.text}>
        My current focus is becoming a strong backend engineer by deepening my
        work in APIs, distributed services, and reliable data pipelines while
        continuing to collaborate effectively across product and engineering
        teams.
      </p>
    </section>
  );
}

export default AboutMe;
