import Container from "../ui/Container";
import Button from "../ui/Button";
import { profile } from "../../models/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy} data-reveal>
          <p className={styles.greeting}>{profile.greeting}</p>
          <h1 className={styles.title}>{profile.headline}</h1>
          <p className={styles.summary}>{profile.summary}</p>
          <Button href="#contact">Contact me</Button>
        </div>

        <div className={styles.media} data-reveal>
          <img
            src={profile.photo}
            alt={`${profile.name} portrait`}
            width="427"
            height="427"
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  );
}
