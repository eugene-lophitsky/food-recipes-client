import AddRecipePage from "../../pages/add-recipe/ui/AddRecipePage.jsx";
import {RecipesListPage} from "../../pages/recipes-list/ui/index.js";
import {RecipePage} from "../../pages/recipe/ui/index.js";
import {CategoriesPage} from "../../pages/categories/ui/index.js";
import {UsersPage} from "../../pages/users/ui/index.js";
import {SettingsPage} from "../../pages/settings/ui/index.js";

const routes = [
  {
    path: "/",
    element: <RecipesListPage />,
  },
  {
    path: "/add-recipe",
    element: <AddRecipePage />,
  },
  {
    path: "/recipe",
    element: <RecipePage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
];

export default routes;
