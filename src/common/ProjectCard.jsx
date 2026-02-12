
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ src, h3, tools, projectId }) => {
  return (
    <Link className={styles.projectCard} to={`/projects/${projectId}`} aria-label={`Open ${h3} project details`}>
      <img src={src} alt={`${h3} project thumbnail`} />
      <h3>{h3}</h3>
      <div className={styles.toolsContainer}>
        {tools.map((tool) => (
          <span key={tool} className={styles.tool}>
            {tool}
          </span>
        ))}
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectId: PropTypes.string.isRequired,
};

export default ProjectCard;
