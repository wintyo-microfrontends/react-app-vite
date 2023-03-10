import { FC } from "react";
import { useExternalRoute } from "../context/ExternalRoute";
import reactIcon from "../assets/react.svg";

const Page1: FC = () => {
  const { externalRoute } = useExternalRoute();
  return (
    <div>
      Page1
      <br />
      <img src={reactIcon} alt="" />
      <br />
      <a
        href="/"
        onClick={(event) => {
          event.preventDefault();
          const anchor = event.target as HTMLAnchorElement;
          const href = anchor.getAttribute("href");
          href && externalRoute(href);
        }}
      >
        External TOP
      </a>
    </div>
  );
};

export default Page1;
