import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/App.css";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import About from "./pages/about";
import Unknown from "./pages/unknown";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <Unknown />,
    },
  ]);

  return createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
