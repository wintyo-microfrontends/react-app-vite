import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router";
import App from "./App";
import { ExternalRouteProvider } from "./context/ExternalRoute";

export type MountProps = {
  elRoot: HTMLElement;
  externalRoute: (path: string) => void;
};

export const mount = (props: MountProps) => {
  const { externalRoute } = props;
  console.log("mount react-app");
  const root = ReactDOM.createRoot(props.elRoot);
  root.render(
    <React.StrictMode>
      <ExternalRouteProvider value={{ externalRoute }}>
        {/* <BrowserRouter>
          <App />
        </BrowserRouter> */}
        <RouterProvider router={router} />
      </ExternalRouteProvider>
    </React.StrictMode>
  );

  return () => {
    console.log("unmount react-app");
    root.unmount();
  };
};
