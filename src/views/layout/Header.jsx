import Container from "../ui/Container";
import { navigation, profile, sectionIds } from "../../models/site";
import { useActiveSection } from "../../controllers/useActiveSection";
import { useDisclosure } from "../../controllers/useDisclosure";
import styles from "./Header.module.css";

export default function Header() {
  const activeId = useActiveSection(sectionIds);
  const { isOpen, toggle, close } = useDisclosure();

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a className={styles.brand} href="#home" onClick={close}>
          {profile.brand.first}
          <span>{profile.brand.second}</span>
        </a>

        <button
          className={styles.toggle}
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggle}
        >
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
          <span className={styles.srOnly}>Toggle navigation</span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={styles.navWrapper}
          data-open={isOpen}
        >
          <ul className={styles.nav}>
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  className={styles.link}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "page" : undefined}
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
