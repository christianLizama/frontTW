import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import Home from "./pages/home.jsx";
import Productos from "./pages/productos.jsx";
import Tareas from "./pages/tareas.jsx";
import Informes from "./pages/informes.jsx";
import Administracion from "./pages/administracion.jsx";

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
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/tareas",
    element: <Tareas />,
  },
  {
    path: "/informes",
    element: <Informes />,
  },
  {
    path: "/administracion",
    element: <Administracion />,
  },
  // Puedes agregar más rutas aquí
]);

export default router;