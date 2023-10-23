import React from "react";
import "./App.css";
import Tooltip from "./components/Tooltip";
const App = () => {
  return (
    <div className="app">
      <Tooltip text="Tham gia kênh này">
        <button className="btn">Tham gia</button>
      </Tooltip>
      <Tooltip text="Đăng ký Kênh Này">
        <button className="btn sub">Đăng ký</button>
      </Tooltip>
    </div>
  );
};

export default App;
