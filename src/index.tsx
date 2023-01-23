import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router";
import { ExternalRouteProvider } from "./context/ExternalRoute";

export type MountProps = {
  elRoot: HTMLElement;
  externalRoute: (path: string) => void;
};

export const mount = (props: MountProps) => {
  const { externalRoute } = props;
  console.log("mount react-app-vite");
  const root = ReactDOM.createRoot(props.elRoot);
  const router = createRouter();
  root.render(
    <React.StrictMode>
      <ExternalRouteProvider value={{ externalRoute }}>
        <RouterProvider router={router} />
      </ExternalRouteProvider>
    </React.StrictMode>
  );

  return () => {
    console.log("unmount react-app-vite");
    root.unmount();
  };
};
