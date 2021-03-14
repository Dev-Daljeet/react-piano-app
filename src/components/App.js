import React from "react";
import "../css/App.css";
import Header from "./Header";
import Piano from "./Piano";

function App() {
  return (
    <div className="page">
      <Header title="React Piano App" />
      <div className="app-container">
      <Piano />
      </div>
    </div>
  );
}

export default App;
