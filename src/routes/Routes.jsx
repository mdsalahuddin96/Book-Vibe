import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/homepages/Home";
import Books from "../pages/bookspage/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "books",
        Component: Books,
      },
    ]
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>,
  },
]);
