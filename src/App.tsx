import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.css";

const App: FC = () => {
  return (
    <div>
      <h1 className={styles.title}>Child React App Created By Vite</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
