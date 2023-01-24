import { FC, useState } from "react";

const Home: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* ローカル開発とパスが合わなくなるのでpublicは使いづらそう */}
      <img src="/react-app-vite/lib/vite.svg" />
      <br />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};

export default Home;
