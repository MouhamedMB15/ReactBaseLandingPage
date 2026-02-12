import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';

const skillGroups = [
  {
    label: 'Languages & Technologies',
    items: [
      'Excel',
      'SQL',
      'Tableau',
      'Python',
      'Java',
      'C',
      'C++',
      'JavaScript',
      'Azure',
      'MongoDB',
      'Jupyter',
    ],
  },
  {
    label: 'Data & Ops Skills',
    items: [
      'Ops Efficiency',
      'Technical Troubleshooting',
      'CRM/Data Entry',
      'Collaboration',
      'Customer Service',
    ],
  },
  {
    label: 'Operating Systems',
    items: ['Windows XP/Vista/7/8/10/11', 'macOS'],
  },
];

function Skills() {
  return (
    <section id="skills" className={`${styles.container} section-shell`}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.label} className={styles.card}>
            <h2>{group.label}</h2>
            <div className={styles.skillList}>
              {group.items.map((skill) => (
                <SkillList key={skill} skill={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
