import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { experience } from "../../models/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={`section section--alt ${styles.experience}`}>
      <Container>
        <SectionHeading
          title="My"
          accent="Experiences"
          subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
        />

        <ul className={styles.grid}>
          {experience.map((item) => (
            <li key={item.id} className={styles.card} data-reveal>
              <span className={styles.period}>{item.period}</span>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.tool}>{item.tool}</p>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
