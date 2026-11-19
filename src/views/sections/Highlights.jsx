import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { highlights } from "../../models/highlights";
import styles from "./Highlights.module.css";

export default function Highlights() {
  return (
    <section id="highlights" className={styles.highlights}>
      <Container className={styles.inner}>
        <SectionHeading
          title="My"
          accent="Highlights"
          align="center"
          subtitle="A collection of moments, competitions, and activities that have shaped my journey in technology and leadership."
        />

        <ul className={styles.grid}>
          {highlights.map((item) => (
            <li
              key={item.id}
              className={`${styles.item} ${item.featured ? styles.featured : ""}`}
              data-reveal
            >
              <img
                src={item.image}
                alt={item.alt}
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
