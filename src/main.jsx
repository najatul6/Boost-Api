import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import { Bounce, ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={Router} />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            theme="colored"
            transition={Bounce}
          />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
