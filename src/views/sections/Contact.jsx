import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { contactChannels } from "../../models/contact";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Container className={styles.inner}>
        <SectionHeading
          title="Contact"
          accent="Me"
          align="center"
          subtitle="Have a project in mind? Send a message and let's talk about it."
        />

        <div className={styles.grid}>
          <ul className={styles.channels}>
            {contactChannels.map((channel) => (
              <li key={channel.id} className={styles.channel}>
                <span className={styles.label}>{channel.label}</span>
                {channel.href ? (
                  <a className={styles.value} href={channel.href}>
                    {channel.value}
                  </a>
                ) : (
                  <span className={styles.value}>{channel.value}</span>
                )}
              </li>
            ))}
          </ul>

          <form
            className={styles.form}
            onSubmit={(event) => event.preventDefault()}
            action="#"
          >
            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-name">
                Name
              </label>
              <input
                className={styles.input}
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-email">
                Email
              </label>
              <input
                className={styles.input}
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-message">
                Message
              </label>
              <textarea
                className={styles.textarea}
                id="contact-message"
                name="message"
                rows="4"
                required
              />
            </div>

            <Button type="submit">Send message</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
