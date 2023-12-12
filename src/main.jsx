import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, useLocation } from "react-router-dom";
import Router from "./Router/Router";
import AppProvider from "./Context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";

// Create a client
const queryClient = new QueryClient();
// const location = useLocation();

// console.log(location);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence>
          <RouterProvider router={Router} />
        </AnimatePresence>
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>
);
