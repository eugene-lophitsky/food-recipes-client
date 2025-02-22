import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import routes from "../routes/routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
