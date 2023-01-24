import { r as a, j as t, a as s } from "./index-06f13810.js";
const i = () => {
  const [e, r] = a.useState(0);
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ s("img", { src: "/react-app-vite/lib/vite.svg" }),
    /* @__PURE__ */ s("br", {}),
    /* @__PURE__ */ t("button", { onClick: () => r((o) => o + 1), children: [
      "count is ",
      e
    ] })
  ] });
};
export {
  i as default
};
