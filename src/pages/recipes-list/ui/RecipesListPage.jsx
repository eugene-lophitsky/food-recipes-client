import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import styles from "../ui/RecipesListPage.module.css";

const RecipesListPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/recipes")
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Список рецептов</h2>
      <div className={styles.recipesListPage}>
        {recipes.map((item, index) => {
          return (
            <Card className={styles.recipesCardBody} key={index}>
              <div className={styles.recipesCardTitle}>{item.recipe_name}</div>
              <div className={styles.recipesCardDescription}>
                {item.recipe_description}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RecipesListPage;
