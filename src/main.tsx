import { mount } from "./index";

const elRoot = document.getElementById("root") as HTMLElement;
mount({
  elRoot,
  externalRoute: (path) => {
    console.log("externalRoute", path);
  },
});
