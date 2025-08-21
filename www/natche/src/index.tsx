import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { natcheShBrowserRouter } from "./routes/natcheShRoutes";

import "./index.css";

const rootId = "root";
const rootElement = document.getElementById(rootId);
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* <HighOrderContextWrappers> */}
    <RouterProvider router={natcheShBrowserRouter} />
    {/* </HighOrderContextWrappers> */}
  </React.StrictMode>
);
