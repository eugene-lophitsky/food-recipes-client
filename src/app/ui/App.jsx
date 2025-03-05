import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import routes from "../routes/routes.jsx";
import Layout from "./Layout.jsx";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css"; // основные стили
import "primeicons/primeicons.css"; // иконки
import "primeflex/primeflex.css"; // PrimeFlex (опционально, для утилит)

function App() {
  return (
    <PrimeReactProvider>
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
    </PrimeReactProvider>
  );
}

export default App;
