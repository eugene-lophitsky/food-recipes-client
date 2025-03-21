import styles from "./AddRecipePage.module.css";
import { useFormik } from "formik";
import {useEffect, useState} from "react";
import axios from "axios";
import { MultiSelect } from "primereact/multiselect";

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
  const [dataSaved, setDataSaved] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState();

  function createRecipe(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/recipes", {
        recipe_name: formik.values.recipeName,
        recipe_description: formik.values.description,
      })
      .then(function (response) {
        if (response.status === 200) {
          setDataSaved("Рецепт успешно добавлен");
        }
        formik.resetForm({ values: { recipeName: "", description: "" } });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(()=> {
    axios.get("http://localhost:8080/api/ingredients")
        .then((response)=>{
          setIngredients(response.data);
        })
        .catch((error)=>{
          console.log(error)
        })
  }, [])

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
          onChange={formik.handleChange}/>
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
          rows={7}/>
        <div className={styles.descriptionError}>
          {formik.errors.description ? formik.errors.description : null}
        </div>
        <div className={styles.listBody}></div>
        <MultiSelect
            value={selectedIngredients}
            onChange={(e) => setSelectedIngredients(e.value)}
            options={ingredients}
            optionLabel="ingredient"
            placeholder="Выберите ингредиент"
            maxSelectedLabels={3}
            className="w-full md:w-26.2rem"/>
        <button type="submit"
          className={styles.saveButton}
          onClick={createRecipe}>
          Сохранить
        </button>
      </form>
      <div className={styles.dataSaved} onClick={()=> {
          dataSaved.length !== 0 ? setDataSaved("") : null
      }}>
        {dataSaved}
      </div>
    </div>
  );
};

export default AddRecipePage;
