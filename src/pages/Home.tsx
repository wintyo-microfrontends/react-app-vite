import { FC, useState } from "react";

const Home: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <img src="/react-app-vite/vite.svg" />
      <br />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};

export default Home;
