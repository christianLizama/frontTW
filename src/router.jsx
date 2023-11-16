import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import Home from "./pages/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Cambia esto por tu componente de página de inicio
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // Puedes agregar más rutas aquí
]);

export default router;