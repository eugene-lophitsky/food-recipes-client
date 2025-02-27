import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import routes from "../routes/routes.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<Layout>{route.element}</Layout>}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
