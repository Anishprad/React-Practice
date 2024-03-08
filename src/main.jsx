import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import RootLayout from "./layout/RootLayout.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);
