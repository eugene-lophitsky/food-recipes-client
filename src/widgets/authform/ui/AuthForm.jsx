import styles from "./AuthForm.module.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Поле ввода пустое";
  } else if (values.username.length < 10) {
    errors.username = "Введено менее 10 символов";
  }
  if (!values.password) {
    errors.password = "Поле ввода пустое";
  } else if (values.password.length < 10) {
    errors.password = "Пароль должен содержать не менее 10 символов";
  }
  return errors;
};

function AuthForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.usernameWrapper}>
      <div>
        <label htmlFor="username">Имя пользователя</label>
        <div>
          <input
            className={styles.username}
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.usernameAlert}>
          {formik.errors.username ? formik.errors.username : null}
        </div>
      </div>

      <div className="passwordWrapper">
        <label htmlFor="password">Пароль</label>
        <div>
          <input
            className={styles.password}
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div className={styles.passwordAlert}>
          {formik.errors.password ? formik.errors.password : null}
        </div>
      </div>
      <button className={styles.authButton} id="submit" type="submit">
        Войти
      </button>
    </form>
  );
}

export default AuthForm;
