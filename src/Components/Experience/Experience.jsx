import styles from './ExperienceStyles.module.css';
import { experienceData } from '../../data/experienceData';

function Experience() {
  return (
    <section id="experience" className={`${styles.container} section-shell`}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        {experienceData.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className={styles.item}>
            <header className={styles.itemHeader}>
              <div>
                <h2>{entry.role}</h2>
                <p className={styles.company}>
                  {entry.company}
                  {entry.location ? `, ${entry.location}` : ''}
                </p>
              </div>
              <p className={styles.dates}>{entry.dates}</p>
            </header>
            <ul>
              {entry.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
