import styles from "./AddRecipePage.module.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.recipeName) {
    errors.recipeName = "Поле ввода пустое";
  }
  if (!values.description) {
    errors.description = "Поле ввода пустое";
  }
  return errors;
};

const AddRecipePage = () => {

  const formik = useFormik({
    initialValues: {
      recipeName: "",
      description: "",
    },
    validate,
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>Добавление рецепта</div>
      <form className={styles.formBody} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Название</label>
        <input
          className={styles.recipeName}
          id="recipeName"
          name="recipeName"
          type="text"
          placeholder="Введите название"
          value={formik.values.recipeName}
          onChange={formik.handleChange}
        />
        <div className={styles.recipeNameError}>
          {formik.errors.recipeName ? formik.errors.recipeName : null}
        </div>
        <label htmlFor="description">Описание</label>
        <textarea
          className={styles.description}
          id="description"
          name="description"
          placeholder="Опишите способ приготовления"
          value={formik.values.description}
          onChange={formik.handleChange}
          cols={40}
          rows={7}
        />
        <div className={styles.descriptionError}>
          {formik.errors.description ? formik.errors.description : null}
        </div>
        <span className={styles.ingredientWrapper}>
          <a href="#" className={styles.ingredientButton}></a>
          <input
            className={styles.ingredient}
            id="ingredient"
            name="ingredient"
            type="text"
            placeholder="Ингредиент"
          />
        </span>
        <button type="submit" className={styles.saveButton}>
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default AddRecipePage;
