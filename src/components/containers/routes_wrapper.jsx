import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../../pages/homepage";
import Contact from "../../pages/contact";
import About from "../../pages/about";
import Unknown from "../../pages/unknown";
import "../../css/App.css";
import Header from "../headers";

const RoutesWrapper = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Homepage />
        </Layout>
      ),
    },
    {
      path: "/contact",
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "*",
      element: (
        <Layout>
          <Unknown />
        </Layout>
      ),
    },
  ]);

  return createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default RoutesWrapper;