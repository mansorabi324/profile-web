import Container from "../ui/Container";
import { profile, socials } from "../../models/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <a className={styles.brand} href="#home">
          {profile.brand.first}
          <span>{profile.brand.second}</span>
        </a>

        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                className={styles.socialLink}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.copy}>
          © {year} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
