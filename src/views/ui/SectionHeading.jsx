import styles from "./ui.module.css";

export default function SectionHeading({ title, accent, subtitle, align = "left" }) {
  return (
    <div className={align === "center" ? styles.centered : undefined}>
      <h2 className={styles.heading}>
        {title}
        {accent ? <span className={styles.headingAccent}> {accent}</span> : null}
      </h2>
      {subtitle ? <p className={styles.subheading}>{subtitle}</p> : null}
    </div>
  );
}
