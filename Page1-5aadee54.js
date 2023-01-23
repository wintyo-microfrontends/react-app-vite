import { u as n, j as o, a as r } from "./index-478c3e48.js";
const l = () => {
  const { externalRoute: a } = n();
  return /* @__PURE__ */ o("div", { children: [
    "Page1",
    /* @__PURE__ */ r("br", {}),
    /* @__PURE__ */ r(
      "a",
      {
        href: "/",
        onClick: (e) => {
          e.preventDefault();
          const t = e.target.getAttribute("href");
          t && a(t);
        },
        children: "External TOP"
      }
    )
  ] });
};
export {
  l as default
};
