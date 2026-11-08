import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../models/projects";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <Container className={styles.inner}>
        <SectionHeading
          title="My"
          accent="Portfolio"
          align="center"
          subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        />

        <ul className={styles.grid}>
          {projects.map((project) => (
            <li
              key={project.id}
              className={`${styles.item} ${project.featured ? styles.featured : ""}`}
              data-reveal
            >
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
