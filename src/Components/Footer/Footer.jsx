
import styles from './FooterStyles.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.container}>
      <p>&copy; {currentYear} Mouhamed Mbengue</p>
    </footer>
  );
}

export default Footer;
