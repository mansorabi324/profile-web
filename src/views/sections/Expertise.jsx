import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { expertise } from "../../models/expertise";
import styles from "./Expertise.module.css";

export default function Expertise() {
  return (
    <section id="expertise" className={`section section--surface ${styles.expertise}`}>
      <Container>
        <SectionHeading
          title="My"
          accent="Expertise"
          subtitle="Here are the areas I focus on and the skills I’ve developed through coursework, projects, and competitions."
        />

        <ul className={styles.grid}>
          {expertise.map((item) => (
            <li key={item.id} className={styles.card} data-reveal>
              <img
                className={styles.icon}
                src={item.icon}
                alt=""
                width="40"
                height="40"
                aria-hidden="true"
              />
              <h3 className={styles.title}>
                {item.title.split(" ").map((word) => (
                  <span key={word} className={styles.titleLine}>
                    {word}
                  </span>
                ))}
              </h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
