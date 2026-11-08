import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../models/services";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="service" className={`section section--surface ${styles.services}`}>
      <Container>
        <SectionHeading
          title="My"
          accent="Service"
          subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        />

        <ul className={styles.grid}>
          {services.map((service) => (
            <li key={service.id} className={styles.card} data-reveal>
              <img
                className={styles.icon}
                src={service.icon}
                alt=""
                width="40"
                height="40"
                aria-hidden="true"
              />
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
