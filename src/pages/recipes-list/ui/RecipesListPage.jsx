import { Button, Stack } from "@mui/material";

const RecipesListPage = () => {
  return (
    <div>
      <h2>Recipes List Page</h2>

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default RecipesListPage;
