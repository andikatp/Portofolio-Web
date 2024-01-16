import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../../pages/homepage";
import Contact from "../../pages/contact";
import About from "../../pages/about";
import Unknown from "../../pages/unknown";
import "../../css/App.css";
import Header from "../headers";
import Work from "../../pages/work";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

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
    path: "/work",
    element: (
      <Layout>
        <Work />
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
    path: "/contact",
    element: (
      <Layout>
        <Contact />
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

const root = createRoot(document.getElementById("root"));

const RoutesWrapper = () => <RouterProvider router={router} />;

export default RoutesWrapper;
