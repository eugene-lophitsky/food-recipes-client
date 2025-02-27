import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.drawerBody}>
      <header className={styles.header}>
        <div className={styles.header__title}>My test header</div>
      </header>
    </div>
  );
}