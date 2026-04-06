import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import "./index.css";

import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router";
import ContextProvider from "./components/shared/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer/>
    </ContextProvider>
  </StrictMode>,
);
