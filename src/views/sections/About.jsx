import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { profile } from "../../models/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Container className={styles.inner}>
        <div className={styles.media} data-reveal>
          <img
            src={profile.aboutPhoto}
            alt={`${profile.name} at work`}
            width="475"
            height="475"
            loading="lazy"
          />
        </div>

        <div className={styles.copy} data-reveal>
          <SectionHeading title="About" accent="Me" />

          <div className={styles.paragraphs}>
            {profile.about.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <Button href="#contact">Contact me</Button>
        </div>
      </Container>
    </section>
  );
}
