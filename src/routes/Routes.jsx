import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/homepages/Home";
import ErrorPage from "../pages/errorpage/ErrorPage";
import BookDetails from "../components/bookDetails/BookDetails";
import BookPage from "../pages/bookspage/BookPage";

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
        Component: BookPage,
        children: [
          {
            path: "books/:id",
            Component: BookDetails,
          },
        ],
      }
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
