import { FC } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Home } from "./pages/Home";
import { Page1 } from "./pages/Page1";

const App: FC = () => {
  return (
    <div>
      <h1 className={styles.title}>Child React App Created By Vite</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
      </div>
      <Outlet />
      {/* <Routes>
        <Route path="/react-app/" element={<Home />} />
        <Route path="/react-app/page1" element={<Page1 />} />
      </Routes> */}
    </div>
  );
};

export default App;
