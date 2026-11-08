import styles from "./ui.module.css";

export default function Button({ href, type = "button", className = "", children }) {
  const classes = `${styles.button} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}
