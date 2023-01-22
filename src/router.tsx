import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { Page1 } from "./pages/Page1";

export const router = createBrowserRouter(
  [
    {
      path: "",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "page1",
          element: <Page1 />,
        },
      ],
    },
  ],
  {
    basename: "/react-app",
  }
);
