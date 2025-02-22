import AddRecipePage from "../../pages/add-recipe/ui/AddRecipePage.jsx";
import {RecipesListPage} from "../../pages/recipes-list/ui/index.js";

const routes = [
  {
    path: "/",
    element: <RecipesListPage />,
  },
  {
    path: "/add-recipe",
    element: <AddRecipePage />,
  },
];

export default routes;
