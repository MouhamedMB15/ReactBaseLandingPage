
import PropTypes from 'prop-types';

function SkillList({ skill }) {
  return <span>{skill}</span>;
}

SkillList.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillList;
