import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navLinksContainer}>
      <NavLink className={styles.navLink} to="/">
        Список рецептов
      </NavLink>
      <NavLink className={styles.navLink} to="/add-recipe">
        Добавить рецепт
      </NavLink>
      <NavLink className={styles.navLink} to="/recipe">
        Рецепт
      </NavLink>
      <NavLink className={styles.navLink} to="/categories">
        Категории
      </NavLink>
      <NavLink className={styles.navLink} to="/users">
        Пользователи
      </NavLink>
      <NavLink className={styles.navLink} to="/settings">
        Настройки
      </NavLink>
    </div>
  );
};
export default Navigation;
