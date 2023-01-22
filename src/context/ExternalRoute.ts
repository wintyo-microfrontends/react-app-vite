import { createContext, useContext } from "react";
import { MountProps } from "../index";

export type ExternalRouteContextValue = {
  externalRoute: MountProps["externalRoute"];
};

export const ExternalRouteContext = createContext<
  ExternalRouteContextValue | undefined
>(undefined);
export const ExternalRouteProvider = ExternalRouteContext.Provider;

export const useExternalRoute = () => {
  const contextValue = useContext(ExternalRouteContext);
  if (contextValue == null) {
    throw new Error("No ExternalRoute, use ExternalRouteProvider to set one");
  }
  return contextValue;
};
