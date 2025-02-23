import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/">Список рецептов</NavLink>
      <NavLink to="/add-recipe">Добавить рецепт</NavLink>
      <NavLink to="/recipe">Рецепт</NavLink>
      <NavLink to="/categories">Категории</NavLink>
      <NavLink to="/users">Пользователи</NavLink>
      <NavLink to="/settings">Настройки</NavLink>
    </div>
  );
};
export default Navigation;
