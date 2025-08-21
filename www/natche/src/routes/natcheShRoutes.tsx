import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../home/Home";
import NotFound from "../not-found/NotFound";
import App from "./App";

enum NatcheShRoute {
  Root = "/",
  Home = "home",
}

export const natcheShBrowserRouter = createBrowserRouter([
  {
    path: NatcheShRoute.Root,
    element: (
      // <LowerOrderContextWrappers>
      <App />
      // </LowerOrderContextWrappers>
    ),
    // errorElement: <RootErrorBoundary />,
    children: [
      { index: true, element: <Navigate to={NatcheShRoute.Home} /> },

      { path: NatcheShRoute.Home, element: <Home /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
