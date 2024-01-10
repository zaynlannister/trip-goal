import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InfoPage from "./pages/InfoPage.tsx";

AOS.init({
  offset: 100,
  delay: 50,
  duration: 500,
  easing: "ease-in-out",
  mirror: true,
  once: true,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/info",
    element: <InfoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
