import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./ui/routes/routes.tsx";
import Provider from "./application/contexts/store.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
