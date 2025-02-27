import styles from "./AddRecipePage.module.css"

const AddRecipePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Добавление рецепта</div>
      <form className={styles.formBody}>
        <label htmlFor="name">Название</label>
        <input className={styles.recipeName} id="name" type="text" placeholder="Введите название" />
        <label htmlFor="description">Описание</label>
        <textarea
          className={styles.description}
          name="description"
          placeholder="Опишите способ приготовления"
          cols={40}
          rows={7}
        />

        <span className={styles.ingredientWrapper}>
            <a href="#" className={styles.ingredientButton}></a>
          <input className={styles.ingredient} type="text" placeholder="Ингредиент" />
        </span>
        <button className={styles.saveButton}>Сохранить</button>
      </form>
    </div>
  );
};

export default AddRecipePage;
