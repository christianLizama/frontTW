import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/about.jsx";
import ErrorPage from "./pages/errorPage.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}