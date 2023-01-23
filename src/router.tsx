import { FC, lazy, Suspense, LazyExoticComponent } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const SuspensePage: FC<{ lazyComponent: LazyExoticComponent<FC<{}>> }> = (
  props
) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <props.lazyComponent />
    </Suspense>
  );
};

export const createRouter = () =>
  createBrowserRouter(
    [
      {
        path: "",
        element: <App />,
        children: [
          {
            path: "",
            element: (
              <SuspensePage
                lazyComponent={lazy(() => import("./pages/Home"))}
              />
            ),
          },
          {
            path: "page1",
            element: (
              <SuspensePage
                lazyComponent={lazy(() => import("./pages/Page1"))}
              />
            ),
          },
        ],
      },
    ],
    {
      basename: "/react-app/",
    }
  );
