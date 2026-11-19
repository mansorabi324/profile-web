import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { resume } from "../../models/resume";
import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <section id="resume" className={`section section--alt ${styles.resume}`}>
      <Container>
        <SectionHeading
          title="My"
          accent="Resume"
          subtitle="Education, achievements, and projects that reflect my journey so far."
        />

        <ul className={styles.grid}>
          {resume.map((item) => (
            <li key={item.id} className={styles.card} data-reveal>
              <span className={styles.period}>{item.period}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.organization}>{item.organization}</p>
              <p className={styles.description}>{item.description}</p>
              {item.link && (
                <a
                  className={styles.link}
                  href={item.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {item.link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
