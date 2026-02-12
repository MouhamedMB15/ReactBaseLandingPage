import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './NavbarStyles.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    closeMenu();

    const scrollToTarget = (attemptsLeft = 12) => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      if (attemptsLeft > 0) {
        requestAnimationFrame(() => scrollToTarget(attemptsLeft - 1));
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      requestAnimationFrame(() => scrollToTarget());
      return;
    }

    scrollToTarget();
  };

  const renderNavLinks = () =>
    navItems.map((item) => (
      <li key={item.id}>
        <a href={`#${item.id}`} onClick={(event) => handleNavigation(event, item.id)}>
          {item.label}
        </a>
      </li>
    ));

  return (
    <header className={styles.wrap}>
      <nav className={`${styles.navbar} section-shell`} aria-label="Main navigation">
        <Link className={styles.brand} to="/" onClick={closeMenu}>
          Mouhamed Mbengue
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          {renderNavLinks()}
        </ul>

        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <nav id="main-navigation" className={styles.mobileNav} aria-hidden={!isOpen}>
        <ul className={isOpen ? styles.mobileOpen : ''}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          {renderNavLinks()}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
