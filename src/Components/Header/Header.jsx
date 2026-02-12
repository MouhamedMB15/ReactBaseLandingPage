import styles from './HeaderStyles.module.css';
import { useTheme } from '../../common/useTheme';
import {
  HeadShot,
  FaGithub,
  MdNightlight,
  IoIosSunny,
  FaLinkedin,
  IoMail,
} from '../../assets/index.js';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const iconColor = theme === 'light' ? '#17181a' : '#ececec';

  return (
    <section id="hero" className={`${styles.container} section-shell`}>
      <div className={styles.colorModeContainer}>
        <img
          src={HeadShot}
          className={styles.hero}
          alt="Profile Headshot Mouhamed Mbengue"
        />
        <button
          type="button"
          className={styles.colorMode}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <IoIosSunny color={iconColor} size={22} />
          ) : (
            <MdNightlight color={iconColor} size={22} />
          )}
        </button>
      </div>

      <div className={styles.info}>
        <p className={styles.kicker}>Aspiring Software Engineer</p>
        <h1>Mouhamed Mbengue</h1>
        <h2>Computer Science Student Focused on Backend Development</h2>
        <span className={styles.socials}>
          <a
            href="https://github.com/mbengue1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub className={styles.icon} color={iconColor} size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mmbengue0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className={styles.icon} color={iconColor} size={20} />
          </a>
          <a
            href="mailto:mouhamed23mbengue@gmail.com"
            aria-label="Email Mouhamed"
          >
            <IoMail className={styles.icon} color={iconColor} size={20} />
          </a>
        </span>
        <p className={styles.description}>
          Motivated professional with a background in computer science, business
          operations, and customer service. I aim to grow into a backend developer
          by building secure, scalable systems that improve real user outcomes.
        </p>
        <a href="#contact" className="btn">
          Let&apos;s Connect
        </a>
      </div>
    </section>
  );
}

export default Header;
